import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(data => ({ ...data, [name]: value }));
  }

  // ─── Build order items array from cartItems ──────────────────────────────
  const getOrderItems = () => {
    const orderItems = [];
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          const productData = structuredClone(products.find(p => p._id === itemId));
          if (productData) {
            productData.size = size;
            productData.quantity = cartItems[itemId][size];
            delete productData.image; // keep payload light
            orderItems.push(productData);
          }
        }
      }
    }
    return orderItems;
  }

  // ─── Place Order Handler ─────────────────────────────────────────────────
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!token) {
      toast.error('Please login to place an order');
      navigate('/login');
      return;
    }

    const orderItems = getOrderItems();
    if (orderItems.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    const orderData = {
      address: formData,
      items: orderItems,
      amount: getCartAmount() + delivery_fee
    };

    try {
      switch (method) {

        // ── Cash on Delivery ──────────────────────────────────────────────
        case 'cod': {
          const response = await axios.post(
            `${backendUrl}/api/order/place`,
            orderData,
            { headers: { token } }
          );
          if (response.data.success) {
            setCartItems({});
            toast.success('Order placed successfully!');
            navigate('/orders');
          } else {
            toast.error(response.data.message);
          }
          break;
        }

        // ── Stripe ────────────────────────────────────────────────────────
        case 'stripe': {
          const response = await axios.post(
            `${backendUrl}/api/order/stripe`,
            orderData,
            { headers: { token } }
          );
          if (response.data.success) {
            // Redirect to Stripe hosted checkout page
            window.location.replace(response.data.session_url);
          } else {
            toast.error(response.data.message);
          }
          break;
        }

        // ── Razorpay ──────────────────────────────────────────────────────
        case 'razorpay': {
          const response = await axios.post(
            `${backendUrl}/api/order/razorpay`,
            orderData,
            { headers: { token } }
          );
          if (response.data.success) {
            const { order } = response.data;
            const options = {
              key: import.meta.env.VITE_RAZORPAY_KEY_ID,
              amount: order.amount,
              currency: order.currency,
              name: 'NexCart',
              description: 'Order Payment',
              order_id: order.id,
              handler: async (paymentResponse) => {
                try {
                  const verifyRes = await axios.post(
                    `${backendUrl}/api/order/verifyRazorpay`,
                    { razorpay_order_id: paymentResponse.razorpay_order_id },
                    { headers: { token } }
                  );
                  if (verifyRes.data.success) {
                    setCartItems({});
                    toast.success('Payment successful!');
                    navigate('/orders');
                  } else {
                    toast.error('Payment verification failed');
                  }
                } catch (err) {
                  toast.error('Payment verification error');
                }
              },
              prefill: {
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                contact: formData.phone
              },
              theme: { color: '#000000' }
            };
            const rzp = new window.Razorpay(options);
            rzp.open();
          } else {
            toast.error(response.data.message);
          }
          break;
        }

        default:
          toast.error('Please select a payment method');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again.');
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>

      {/* ── Left: Delivery Information ── */}
      <div className='flex flex-col gap-4 w-full sm:w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input name='firstName' onChange={onChangeHandler} value={formData.firstName}
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' required />
          <input name='lastName' onChange={onChangeHandler} value={formData.lastName}
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' required />
        </div>
        <input name='email' onChange={onChangeHandler} value={formData.email}
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email Address' required />
        <input name='street' onChange={onChangeHandler} value={formData.street}
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' required />
        <div className='flex gap-3'>
          <input name='city' onChange={onChangeHandler} value={formData.city}
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' required />
          <input name='state' onChange={onChangeHandler} value={formData.state}
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' required />
        </div>
        <div className='flex gap-3'>
          <input name='zipcode' onChange={onChangeHandler} value={formData.zipcode}
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode' required />
          <input name='country' onChange={onChangeHandler} value={formData.country}
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' required />
        </div>
        <input name='phone' onChange={onChangeHandler} value={formData.phone}
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone' required />
      </div>

      {/* ── Right: Order Summary + Payment ── */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={'PAYMENT'} text2={'METHOD'} />

          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={() => setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
            </div>

            <div onClick={() => setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>

            <div onClick={() => setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button type='submit' className='bg-black text-white px-16 py-3 text-sm'>
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder