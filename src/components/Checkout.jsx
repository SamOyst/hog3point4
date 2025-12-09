// Author: Danesh Elahi (A00479230)
// Purpose: Simple checkout page that receives cart items from Ecommerce
// simulates a payment, and displays an order receipt.
import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function Checkout() {
  const location = useLocation();
  const { cartItems = [], discountRate = 0 } = location.state || {};

  // load any saved account data from Ecommerce (guest or account)
  let initialAccount = null;
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem("ecoAccount");
      if (stored) initialAccount = JSON.parse(stored);
    } catch {
      initialAccount = null;
    }
  }

  const [authMode, setAuthMode] = useState("guest"); // 'login' | 'google' | 'guest'

  // billing + payment fields
  const [billingName, setBillingName] = useState(initialAccount?.name || "");
  const [billingAddress, setBillingAddress] = useState(
    initialAccount?.address || ""
  );
  const [billingCity, setBillingCity] = useState(initialAccount?.city || "");
  const [billingPostal, setBillingPostal] = useState(
    initialAccount?.postal || ""
  );
  const [billingCountry, setBillingCountry] = useState(
    initialAccount?.country || ""
  );

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [email, setEmail] = useState(initialAccount?.email || "");

  const [orderNumber, setOrderNumber] = useState(null);
  const [paid, setPaid] = useState(false);
  const [billingSnapshot, setBillingSnapshot] = useState(null);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const discountAmount = subtotal * discountRate;
  const total = subtotal - discountAmount;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    const randomOrder = Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(randomOrder);
    setPaid(true);
    setBillingSnapshot({
      billingName,
      billingAddress,
      billingCity,
      billingPostal,
      billingCountry,
      email,
    });
  };

  if (cartItems.length === 0 && !paid) {
    return (
      <div className="bg-yellow-100 min-h-screen flex flex-col items-center justify-center">
        <p className="mb-4 text-gray-800">
          There are no items in your cart. Please add products from the eCommerce page.
        </p>
        <Link
          to="/ecommerce"
          className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
        >
          Back to eCommerce
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>

        {!paid ? (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Order summary */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Order Summary</h2>
              <ul className="space-y-1 text-sm mb-3 max-h-56 overflow-y-auto">
                {cartItems.map((item, idx) => (
                  <li key={idx} className="flex justify-between border-b pb-1">
                    <span>{item.name}</span>
                    <span>${item.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {discountRate > 0 && (
                  <div className="flex justify-between text-green-700 mt-1">
                    <span>Discount ({Math.round(discountRate * 100)}%)</span>
                    <span>- ${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between font-semibold mt-2 border-t pt-2">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Payment + login area */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Payment Details</h2>

              {/* login / google / guest options */}
              <div className="flex flex-wrap gap-2 mb-2 text-xs">
                <button
                  type="button"
                  onClick={() => setAuthMode("login")}
                  className={`px-3 py-1.5 rounded-full border ${
                    authMode === "login"
                      ? "bg-green-700 text-white border-green-700"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                >
                  Login
                </button>
                <a
                  href="https://accounts.google.com/signin"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setAuthMode("google")}
                  className={`px-3 py-1.5 rounded-full border ${
                    authMode === "google"
                      ? "bg-green-700 text-white border-green-700"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                >
                  Login with Google
                </a>
                <button
                  type="button"
                  onClick={() => setAuthMode("guest")}
                  className={`px-3 py-1.5 rounded-full border ${
                    authMode === "guest"
                      ? "bg-green-700 text-white border-green-700"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                >
                  Sign up as guest
                </button>
              </div>

              {authMode === "guest" && (
                <p className="text-[11px] text-gray-500 mb-3">
                  By registering as a guest, you agree with Woodland Conservation&apos;s
                  privacy approach. Your name and billing details are used only for this
                  project preview and are not shared with third parties.
                </p>
              )}

              <form onSubmit={handleSubmit} className="space-y-3 text-sm">
                <div className="border rounded-lg p-3 space-y-2">
                  <p className="font-semibold text-xs uppercase text-gray-500">
                    Billing information
                  </p>
                  <input
                    type="text"
                    placeholder="Full name"
                    value={billingName}
                    onChange={(e) => setBillingName(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-1.5"
                  />
                  <input
                    type="text"
                    placeholder="Street address"
                    value={billingAddress}
                    onChange={(e) => setBillingAddress(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-1.5"
                  />
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="City"
                      value={billingCity}
                      onChange={(e) => setBillingCity(e.target.value)}
                      required
                      className="flex-1 border border-gray-300 rounded-lg px-3 py-1.5"
                    />
                    <input
                      type="text"
                      placeholder="Postal code"
                      value={billingPostal}
                      onChange={(e) => setBillingPostal(e.target.value)}
                      required
                      className="w-28 border border-gray-300 rounded-lg px-3 py-1.5"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Country"
                    value={billingCountry}
                    onChange={(e) => setBillingCountry(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-1.5"
                  />
                </div>

                <div className="border rounded-lg p-3 space-y-2">
                  <p className="font-semibold text-xs uppercase text-gray-500">
                    Card details
                  </p>
                  <input
                    type="text"
                    placeholder="Card number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-1.5"
                  />
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-1.5"
                      />
                    </div>
                    <div className="w-24">
                      <input
                        type="password"
                        placeholder="CVC"
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value)}
                        required
                        className="w-full border border-gray-300 rounded-lg px-3 py-1.5"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block mb-1">Receipt email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-1.5"
                  />
                </div>

                <p className="text-xs text-gray-500">
                  Just for project preview purposes. This is not an actual payment
                  system—don&apos;t worry, we will not steal your credit card info :D
                </p>

                <button
                  type="submit"
                  className="w-full mt-2 bg-green-700 text-white py-2 rounded-lg hover:bg-green-800"
                >
                  Pay ${total.toFixed(2)}
                </button>
              </form>
            </div>
          </div>
        ) : (
          // Receipt after payment
          <div className="text-center">
            <h2 className="text-xl font-bold text-green-700 mb-2">
              Payment simulated successfully!
            </h2>
            <p className="mb-1">Order number:</p>
            <p className="text-2xl font-mono mb-4">{orderNumber}</p>

            <h3 className="font-semibold mb-2">Order receipt</h3>
            <div className="border rounded-lg p-4 inline-block text-left text-sm mb-4">
              <p className="font-semibold mb-1">Billing information</p>
              {billingSnapshot && (
                <>
                  <p>{billingSnapshot.billingName}</p>
                  <p>{billingSnapshot.billingAddress}</p>
                  <p>
                    {billingSnapshot.billingCity} {billingSnapshot.billingPostal}
                  </p>
                  <p>{billingSnapshot.billingCountry}</p>
                  <p className="mt-1 text-gray-600">{billingSnapshot.email}</p>
                </>
              )}

              <hr className="my-3" />

              <p className="font-semibold mb-1">Items</p>
              <ul className="space-y-1 mb-3">
                {cartItems.map((item, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{item.name}</span>
                    <span>${item.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-between border-t pt-2 font-semibold">
                <span>Total paid</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-2 text-xs text-gray-500">
              This receipt and order number are for demonstration only.
            </div>

            <div className="mt-4">
              <Link
                to="/ecommerce"
                className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
              >
                Back to eCommerce
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}