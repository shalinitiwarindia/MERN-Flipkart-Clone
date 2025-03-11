
# 🛒 MERN Flipkart Clone with Paytm Payment Gateway

A fully functional **Flipkart-like e-commerce platform** built using **MERN Stack** (**MongoDB, Express.js, React.js, Node.js**) with **Paytm Payment Gateway integration** for seamless transactions.

## 🚀 Features

✅ **User Authentication (Signup/Login using JWT)**  
✅ **Product Listings with Search & Filters**  
✅ **Cart & Checkout Functionality**  
✅ **Order Management & Payment System**  
✅ **Paytm Payment Gateway Integration**  
✅ **Admin Panel for Product Management**  
✅ **Fully Responsive Design**  

---

## 📷 Screenshots  

(Add some images or GIFs showing UI, cart, checkout, and payment process.)

---

## 🛠️ Tech Stack

### **Frontend (React)**
- React.js
- Redux Toolkit (State Management)
- React Router DOM (Navigation)
- Axios (API calls)
- Material UI (for Styling)

### **Backend (Node.js & Express)**
- Node.js
- Express.js
- MongoDB with Mongoose (Database)
- JWT (Authentication)
- Paytm Payment Gateway

---

## 📦 Installation & Setup

Follow these steps to set up the project on your local machine.

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/shalinitiwarindia/MERN-Flipkart-Clone.git
cd MERN-Flipkart-Clone
```

### 2️⃣ Install Dependencies  

#### 🔹 Install **Frontend Dependencies**  
```bash
cd client
npm install
```

#### 🔹 Install **Backend Dependencies**  
```bash
cd ../server
npm install
```

### 3️⃣ Setup Environment Variables  
Create a `.env` file inside the **server** folder and add the following:

```plaintext
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PAYTM_MID=your_paytm_merchant_id
PAYTM_KEY=your_paytm_merchant_key
PAYTM_WEBSITE=WEBSTAGING
PAYTM_CHANNEL_ID=WEB
PAYTM_INDUSTRY_TYPE=Retail
PAYTM_CALLBACK_URL=http://localhost:5000/api/payment/callback
```

> 🛑 **Important:** Don't share `.env` file on GitHub. Add it to `.gitignore`.

---

### 4️⃣ Start the Development Servers  

#### 🟢 Start **Backend Server**
```bash
cd server
npm start
```
> Now, your backend should be running at: `http://localhost:5000`

#### 🔵 Start **Frontend Server**
```bash
cd client
npm start
```
> Open `http://localhost:3000/` to view the app.

---

## 🏦 Paytm Payment Gateway Integration

This project integrates **Paytm Payment Gateway** for handling transactions.

### **Payment Flow:**
1. User adds products to cart and proceeds to checkout.
2. Clicking "Pay Now" redirects user to **Paytm Payment Gateway**.
3. After successful payment, Paytm redirects user to app.
4. Payment is verified with **Paytm's server** via backend.
5. Order status updates in **MongoDB**.

---

## 🎯 Future Enhancements
- ✅ Add **Wishlist Feature**
- ✅ Implement **Order Tracking**
- ✅ Deploy on **Render/Vercel & MongoDB Atlas**
- ✅ Improve **Admin Dashboard**
- ✅ Add **Product Ratings & Reviews**

---

## 🤝 Contributing
Pull requests are welcome! Fork the repo and create a **PR** if you want to contribute.

---

## 📜 License
This project is licensed under the **MIT License**.

---

