import React, { useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

// This page handles the redirect back from Stripe after payment
// Stripe redirects to: /verify?success=true&orderId=xxx  OR  /verify?success=false&orderId=xxx

const Verify = () => {
  const { navigate, token, backendUrl, setCartItems } = useContext(ShopContext);
  const [searchParams] = useSearchParams();

  const success = searchParams.get('success');
  const orderId = searchParams.get('orderId');

  const verifyPayment = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        `${backendUrl}/api/order/verifyStripe`,
        { success, orderId },
        { headers: { token } }
      );

      if (response.data.success) {
        setCartItems({});
        toast.success('Payment confirmed! Order placed.');
        navigate('/orders');
      } else {
        toast.error('Payment failed. Order cancelled.');
        navigate('/cart');
      }
    } catch (error) {
      console.error(error);
      toast.error('Verification error. Please contact support.');
      navigate('/cart');
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [token]);

  return (
    <div className='min-h-[60vh] flex items-center justify-center'>
      <div className='text-center'>
        <div className='w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4'></div>
        <p className='text-gray-500'>Verifying your payment...</p>
      </div>
    </div>
  );
}

export default Verify