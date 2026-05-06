# Forever E-Commerce — Backend

Full backend for the GreatStack MERN e-commerce project.
Stack: **Node.js + Express + MongoDB + Cloudinary + Stripe + Razorpay**

---

## 📁 Folder Structure

```
backend/
├── config/
│   ├── mongodb.js          ← MongoDB connection
│   └── cloudinary.js       ← Cloudinary setup
├── middleware/
│   ├── adminAuth.js        ← Protect admin routes
│   ├── userAuth.js         ← Protect user routes
│   └── multer.js           ← Handle image uploads
├── models/
│   ├── userModel.js        ← User schema (name, email, password, cart)
│   ├── productModel.js     ← Product schema
│   └── orderModel.js       ← Order schema
├── controllers/
│   ├── userController.js   ← Auth + cart logic
│   ├── productController.js← Add/remove/list products
│   └── orderController.js  ← COD, Stripe, Razorpay orders
├── routes/
│   ├── userRoute.js
│   ├── productRoute.js
│   └── orderRoute.js
├── server.js               ← Entry point
├── .env.example            ← Copy this to .env and fill values
└── package.json
```

---

## 🚀 Setup Instructions

### 1. Install dependencies
```bash
cd backend
npm install
```

### 2. Create your `.env` file
```bash
cp .env.example .env
```
Then open `.env` and fill in your credentials (see below).

### 3. Start the server
```bash
# Development (auto-restart on save)
npm run dev

# Production
npm start
```

Server runs at: `http://localhost:4000`

---

## 🔑 Environment Variables Guide

### MongoDB
1. Go to [mongodb.com](https://mongodb.com) → Create free cluster
2. Click **Connect** → **Drivers** → copy the connection string
3. Replace `<username>` and `<password>` with your DB user credentials
```
MONGODB_URI=mongodb+srv://youruser:yourpass@cluster0.xxxxx.mongodb.net/forever
```

### JWT Secret
Any random long string:
```
JWT_SECRET=mySuperSecretKey123!@#
```

### Admin Credentials
Set whatever you want — this is your admin login:
```
ADMIN_EMAIL=admin@forever.com
ADMIN_PASSWORD=greatstack123
```

### Cloudinary (for product images)
1. Go to [cloudinary.com](https://cloudinary.com) → Free account
2. Dashboard shows your Cloud Name, API Key, API Secret
```
CLOUDINARY_NAME=dxxxxxx
CLOUDINARY_API_KEY=123456789012345
CLOUDINARY_SECRET_KEY=abcdefghijklmnop
```

### Stripe (online payments)
1. Go to [stripe.com](https://stripe.com) → Create account
2. Dashboard → Developers → API Keys → copy **Secret key**
```
STRIPE_SECRET_KEY=sk_test_51...
```

### Razorpay (Indian payment gateway)
1. Go to [razorpay.com](https://razorpay.com) → Create account
2. Settings → API Keys → Generate Test Key
```
RAZORPAY_KEY_ID=rzp_test_xxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxx
```

---

## 📡 API Endpoints

### User / Auth
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/user/register` | Register new user | ❌ |
| POST | `/api/user/login` | Login user | ❌ |
| POST | `/api/user/admin` | Admin login | ❌ |
| POST | `/api/user/getcart` | Get user's cart | ✅ User |
| POST | `/api/user/addtocart` | Add item to cart | ✅ User |
| POST | `/api/user/updatecart` | Update cart item quantity | ✅ User |

### Products
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/product/add` | Add product (with images) | ✅ Admin |
| POST | `/api/product/remove` | Delete product | ✅ Admin |
| GET | `/api/product/list` | Get all products | ❌ |
| POST | `/api/product/single` | Get single product | ❌ |

### Orders
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/order/place` | Place COD order | ✅ User |
| POST | `/api/order/stripe` | Place Stripe order | ✅ User |
| POST | `/api/order/razorpay` | Place Razorpay order | ✅ User |
| POST | `/api/order/verifyStripe` | Verify Stripe payment | ✅ User |
| POST | `/api/order/verifyRazorpay` | Verify Razorpay payment | ✅ User |
| POST | `/api/order/userorders` | Get logged-in user's orders | ✅ User |
| POST | `/api/order/list` | Get all orders | ✅ Admin |
| POST | `/api/order/status` | Update order status | ✅ Admin |

---

## 🔗 Connecting to your React Frontend

In your React app, set the backend URL. Create a file like `src/context/ShopContext.jsx` or wherever you manage global state:

```js
export const backendUrl = "http://localhost:4000";
```

Then use it in your API calls:
```js
const response = await axios.post(backendUrl + "/api/user/login", { email, password });
```

For protected routes, send the token in headers:
```js
const response = await axios.post(
  backendUrl + "/api/user/getcart",
  {},
  { headers: { token } }  // token from localStorage
);
```
