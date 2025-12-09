// Author: Danesh Elahi (A00479230)
// Purpose: To display the Ecommerce section of the Woodland Conservation website.
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiHeart, FiShoppingCart } from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Eco-Friendly Water Bottle",
    price: 29.99,
    desc: "Reusable BPA-free bottle for hikes and daily use.",
    img: "src/assets/waterbottle.jpg",
    category: "On-the-Go",
    rating: 4.7,
    reviews: [
      {
        author: "Alex",
        date: "Oct 2025",
        text: "Perfect for long walks on the woodland trails. Keeps water cold for hours.",
      },
      {
        author: "Priya",
        date: "Oct 2025",
        text: "I like that it’s reusable and reduces single-use plastics when visiting the site.",
      },
    ],
  },
  {
    id: 2,
    name: "Organic Cotton Tote Bag",
    price: 19.99,
    desc: "Durable tote made from 100% organic cotton.",
    img: "src/assets/totebag.jpg",
    category: "Bags",
    rating: 4.5,
    reviews: [],
  },
  {
    id: 3,
    name: "Bamboo Toothbrush Pack",
    price: 14.99,
    desc: "Pack of 4 biodegradable bamboo toothbrushes.",
    img: "src/assets/toothbrush.jpg",
    category: "Personal Care",
    rating: 4.6,
    reviews: [],
  },
  {
    id: 4,
    name: "Wildflower Seed Mix",
    price: 12.5,
    desc: "Native wildflower seeds to support local pollinators.",
    img: "src/assets/wildflower-seeds.jpg",
    category: "Home & Garden",
    rating: 4.8,
    reviews: [],
  },
  {
    id: 5,
    name: "Recycled Paper Notebook",
    price: 9.99,
    desc: "Notebook made from 100% recycled paper.",
    img: "src/assets/notebook.jpg",
    category: "Stationery",
    rating: 4.3,
    reviews: [],
  },
  {
    id: 6,
    name: "Stainless Steel Travel Mug",
    price: 24.99,
    desc: "Insulated mug ideal for warm drinks on cool woodland mornings.",
    img: "src/assets/travel-mug.jpg",
    category: "On-the-Go",
    rating: 4.9,
    reviews: [],
  },
];

const categories = [
  "All",
  "On-the-Go",
  "Bags",
  "Personal Care",
  "Home & Garden",
  "Stationery",
];

export default function Ecommerce() {
  // simple stored user name (for greeting)
  const [userName, setUserName] = useState(
    typeof window !== "undefined" ? localStorage.getItem("ecoUserName") || "" : ""
  );

  // account fields (used for both normal account + guest)
  const [accountName, setAccountName] = useState("");
  const [accountEmail, setAccountEmail] = useState("");
  const [accountAddress, setAccountAddress] = useState("");
  const [accountCity, setAccountCity] = useState("");
  const [accountPostal, setAccountPostal] = useState("");
  const [accountCountry, setAccountCountry] = useState("");

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const [promoCode, setPromoCode] = useState("");
  const [discountRate, setDiscountRate] = useState(0);
  const [promoMessage, setPromoMessage] = useState("");

  // filtering
  const filteredByCategory =
    filter === "All" ? products : products.filter((p) => p.category === filter);

  const visibleProducts = filteredByCategory.filter((p) => {
    const q = searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  });

  // cart / wishlist logic
  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const handleAddToWishlist = (product) => {
    setWishlistItems((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const discountAmount = cartTotal * discountRate;
  const finalTotal = cartTotal - discountAmount;

  const applyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (!code) {
      setDiscountRate(0);
      setPromoMessage("");
      return;
    }
    if (code === "WOODLAND20") {
      setDiscountRate(0.2);
      setPromoMessage("Black Friday code applied: 20% off your cart.");
    } else if (code === "NEW15") {
      setDiscountRate(0.15);
      setPromoMessage("New customer code applied: 15% off.");
    } else {
      setDiscountRate(0);
      setPromoMessage("Promo code not recognized.");
    }
  };

  // Save account or guest info & show success
  const saveAccountInfo = () => {
    const trimmedName = accountName.trim();
    if (!trimmedName) {
      alert("Please enter at least your name to create an account.");
      return;
    }

    const accountObj = {
      name: trimmedName,
      email: accountEmail.trim(),
      address: accountAddress.trim(),
      city: accountCity.trim(),
      postal: accountPostal.trim(),
      country: accountCountry.trim(),
    };

    if (typeof window !== "undefined") {
      localStorage.setItem("ecoUserName", trimmedName);
      localStorage.setItem("ecoAccount", JSON.stringify(accountObj));
    }

    setUserName(trimmedName);
    setShowProfile(false);

    // clear fields
    setAccountName("");
    setAccountEmail("");
    setAccountAddress("");
    setAccountCity("");
    setAccountPostal("");
    setAccountCountry("");

    alert("Account created successfully (demo only).");
  };

  return (
    <div className="bg-gray-50 dark:bg-darkerBlue min-h-screen">
      {/* top strip */}
      <div className="bg-green-900 text-white text-center dark:text-gray-900 text-xs md:text-sm py-2">
        Conscious giving starts here — eco products imagined to support the Woodland
        Conservation Area.
      </div>

      {/* NAV BAR */}
      <div className="bg-green-800 text-white dark:text-gray-900">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-4 py-3">
          <span className="font-semibold text-sm md:text-base">
            Woodland Eco Marketplace
            {userName && <span className="ml-2 text-xs">Hi, {userName} 👋</span>}
          </span>

          <div className="flex-1 max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search eco products..."
              className="w-full rounded-full px-4 py-1.5 text-sm text-gray-900 dark:text-white dark:bg-darkerBlue focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-4 text-xl">
            <button
              type="button"
              className="hover:text-green-200"
              aria-label="Profile"
              onClick={() => setShowProfile(true)}
            >
              <FiUser />
            </button>
            <button
              type="button"
              className="hover:text-green-200 relative"
              aria-label="Wishlist"
              onClick={() => setShowWishlist(true)}
            >
              <FiHeart />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-[10px] rounded-full px-1">
                  {wishlistItems.length}
                </span>
              )}
            </button>
            <button
              type="button"
              className="hover:text-green-200 relative"
              aria-label="Cart"
              onClick={() => setShowCart(true)}
            >
              <FiShoppingCart />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-400 text-[10px] rounded-full px-1 text-green-900">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative px-4 md:px-6 py-10 bg-emerald-600 text-white dark:bg-blue-950 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-4">
          <p className="uppercase text-xs tracking-[0.3em] font-semibold">
            Black Friday Sale
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            20% Off Sitewide
          </h1>
          <p className="text-sm md:text-base max-w-xl">
            Explore eco-friendly essentials inspired by sustainable marketplaces. Every
            “purchase” is imagined as support for trails, wildlife, habitat, and
            education at the Woodland Conservation Area.
          </p>
          <button
            type="button"
            className="mt-2 inline-flex items-center px-6 py-2 rounded-full bg-amber-400 text-green-900 font-semibold hover:bg-amber-300"
          >
            Use Code WOODLAND20
          </button>
        </div>

        <div className="absolute left-4 bottom-4">
          <button
            type="button"
            className="flex items-center justify-center rounded-full bg-white text-emerald-700 shadow-lg px-3 py-2 text-xs md:text-sm font-semibold"
          >
            15% off for new customers (NEW15)
          </button>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-4 md:px-6 py-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
          <div className="bg-white rounded-xl shadow-sm p-4 flex items-start gap-3">
            <span className="text-2xl">🌲</span>
            <div>
              <p className="font-semibold">Conservation First</p>
              <p className="text-gray-600 text-xs">
                Each purchase is imagined to support woodland protection and stewardship.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4 flex items-start gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <p className="font-semibold">Eco-Screened Products</p>
              <p className="text-gray-600 text-xs">
                Focus on reusable, recycled, or compostable materials wherever possible.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4 flex items-start gap-3">
            <span className="text-2xl">📦</span>
            <div>
              <p className="font-semibold">Low-Waste Packaging</p>
              <p className="text-gray-600 text-xs">
                Imagined with minimal packaging and plastic-free shipping in mind.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4 flex items-start gap-3">
            <span className="text-2xl">👥</span>
            <div>
              <p className="font-semibold">Community Focused</p>
              <p className="text-gray-600 text-xs">
                Supports local partners and education around sustainable living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="px-4 md:px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                Featured Eco Products
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Choose items that fit your lifestyle and help care for the woodland at
                the same time.
              </p>
            </div>

            <div className="text-xs md:text-sm text-gray-700 dark:text-gray-400">
              <span className="mr-4">
                Cart: <span className="font-semibold">{cartItems.length}</span> items
              </span>
              <span>
                Wishlist:{" "}
                <span className="font-semibold">{wishlistItems.length}</span> items
              </span>
            </div>
          </div>

          {/* category filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-full text-xs md:text-sm border transition ${
                  filter === cat
                    ? "bg-green-700 text-white border-green-700"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-green-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {visibleProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white dark:bg-blue-950 rounded-xl shadow-md p-4 hover:shadow-xl hover:-translate-y-1 transition-transform duration-200 flex flex-col"
              >
                <div className="w-full h-44 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden mb-3">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>

                <h3 className="text-lg dark:text-white font-semibold mt-1">{p.name}</h3>
                <p className="text-xs uppercase text-green-700 font-semibold mb-1">
                  {p.category}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 flex-1">
                  {p.desc}
                </p>

                <div className="flex items-center text-sm text-yellow-500 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>{i < Math.round(p.rating) ? "★" : "☆"}</span>
                  ))}
                  <span className="ml-2 text-gray-600 dark:text-gray-400">
                    {p.rating.toFixed(1)}
                  </span>
                </div>

                <p className="text-xl font-bold mb-3 dark:text-gray-400">
                  ${p.price.toFixed(2)}
                </p>

                <div className="space-y-2">
                  <button
                    className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm"
                    onClick={() => handleAddToCart(p)}
                  >
                    Add to Cart
                  </button>

                  <button
                    className="w-full border border-green-600 text-green-700 px-4 py-2 rounded-lg hover:bg-green-50 text-sm"
                    onClick={() => setSelectedProduct(p)}
                  >
                    View Details & Reviews
                  </button>

                  <button
                    className="w-full border border-gray-300 text-gray-700 dark:text-gray-400 px-4 py-1.5 rounded-lg hover:bg-gray-50 text-xs"
                    onClick={() => handleAddToWishlist(p)}
                  >
                    Add to Wishlist
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* link to checkout page – passes cart + discount via router state */}
          <div className="mt-10 text-center">
            <p className="text-gray-700 dark:text-gray-400 mb-3">
            “This is just a soft preview of the page — the full version with more features is coming soon. Stay tuned 😁”
            </p>
            <Link
              to="/checkout"
              state={{ cartItems, discountRate }}
              className="inline-block bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 text-sm md:text-base"
            >
              View Checkout Page
            </Link>
          </div>
        </div>
      </section>

      {/* PROFILE MODAL – account + guest signup */}
      {showProfile && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-40">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full mx-4 p-6 relative">
            <button
              onClick={() => setShowProfile(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-xl"
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-2">Create an account</h2>
            <p className="text-sm text-gray-600 mb-4">
              By registering for an account, you agree with Woodland Conservation&apos;s
              privacy practices. Your personal details are used only for this project
              preview and are not shared with third parties.
            </p>

            <div className="space-y-2 mb-4 text-sm">
              <input
                type="text"
                placeholder="Full name"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-1.5"
              />
              <input
                type="email"
                placeholder="Email"
                value={accountEmail}
                onChange={(e) => setAccountEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-1.5"
              />
              <input
                type="text"
                placeholder="Street address"
                value={accountAddress}
                onChange={(e) => setAccountAddress(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-1.5"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="City"
                  value={accountCity}
                  onChange={(e) => setAccountCity(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-1.5"
                />
                <input
                  type="text"
                  placeholder="Postal code"
                  value={accountPostal}
                  onChange={(e) => setAccountPostal(e.target.value)}
                  className="w-28 border border-gray-300 rounded-lg px-3 py-1.5"
                />
              </div>
              <input
                type="text"
                placeholder="Country"
                value={accountCountry}
                onChange={(e) => setAccountCountry(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-1.5"
              />
            </div>

            {/* normal account */}
            <button
              onClick={saveAccountInfo}
              className="w-full mb-3 bg-green-700 text-white rounded-lg py-2 text-sm hover:bg-green-800"
            >
              Create account
            </button>

            {/* Google login opens Google in new tab */}
            <a
              href="https://accounts.google.com/signin"
              target="_blank"
              rel="noreferrer"
              className="w-full mb-3 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 text-sm hover:bg-gray-50"
            >
              <span>Login with Google</span>
            </a>

            {/* guest signup uses same info */}
            <button
              className="w-full border border-gray-300 rounded-lg py-2 text-sm hover:bg-gray-50"
              onClick={saveAccountInfo}
            >
              Sign up as guest
            </button>
          </div>
        </div>
      )}

      {/* CART MODAL */}
      {showCart && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-40">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-6 relative">
            <button
              onClick={() => setShowCart(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-xl"
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-3">Your Cart</h2>

            {cartItems.length === 0 ? (
              <p className="text-sm text-gray-600">Your cart is currently empty.</p>
            ) : (
              <>
                <ul className="space-y-2 max-h-44 overflow-y-auto text-sm">
                  {cartItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between items-center border-b border-gray-100 pb-1"
                    >
                      <span>{item.name}</span>
                      <span className="font-semibold">
                        ${item.price.toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  {discountRate > 0 && (
                    <div className="flex justify-between text-green-700 mt-1">
                      <span>Discount ({Math.round(discountRate * 100)}%)</span>
                      <span>- ${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-semibold mt-2 border-t pt-2">
                    <span>Total</span>
                    <span>${finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-4 border-t pt-3 text-sm">
                  <label className="block text-gray-700 mb-1">Promo code</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="WOODLAND20 or NEW15"
                      className="flex-1 border border-gray-300 rounded-lg px-2 py-1 text-sm"
                    />
                    <button
                      onClick={applyPromo}
                      className="px-3 py-1 rounded-lg bg-green-700 text-white text-sm hover:bg-green-800"
                    >
                      Apply
                    </button>
                  </div>
                  {promoMessage && (
                    <p className="mt-1 text-xs text-gray-600">{promoMessage}</p>
                  )}
                  <p className="mt-1 text-[11px] text-gray-500">
                    WOODLAND20 gives 20% off. NEW15 gives 15% off for new customers.
                  </p>
                </div>

                <p className="mt-3 text-xs text-gray-500">
                  Just for project preview purposes. This is not a real payment system —
                  don&apos;t worry, we will not steal your credit card info :D
                </p>

                <div className="mt-4 flex justify-end gap-2">
                  <button
                    onClick={() => setShowCart(false)}
                    className="px-4 py-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-100"
                  >
                    Close
                  </button>
                  <Link
                    to="/checkout"
                    state={{ cartItems, discountRate }}
                    className="px-4 py-2 text-sm rounded-lg bg-green-700 text-white hover:bg-green-800"
                    onClick={() => setShowCart(false)}
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* WISHLIST MODAL */}
      {showWishlist && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-40">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-6 relative">
            <button
              onClick={() => setShowWishlist(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-xl"
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-3">Your Wishlist</h2>

            {wishlistItems.length === 0 ? (
              <p className="text-sm text-gray-600">
                You haven’t added anything to your wishlist yet. Use “Add to Wishlist” on
                a product to save it here.
              </p>
            ) : (
              <ul className="space-y-2 max-h-56 overflow-y-auto text-sm">
                {wishlistItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center border-b border-gray-100 pb-1"
                  >
                    <span>{item.name}</span>
                    <span className="text-gray-600">
                      ${item.price.toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowWishlist(false)}
                className="px-4 py-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PRODUCT REVIEW MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-40">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-6 relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-xl"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold mb-1">{selectedProduct.name}</h2>
            <p className="text-sm text-gray-600 mb-3">{selectedProduct.desc}</p>

            <div className="flex items-center text-sm text-yellow-500 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>
                  {i < Math.round(selectedProduct.rating) ? "★" : "☆"}
                </span>
              ))}
              <span className="ml-2 text-gray-600">
                {selectedProduct.rating.toFixed(1)} average rating
              </span>
            </div>

            <h3 className="text-lg font-semibold mb-2">Visitor Reviews</h3>

            {selectedProduct.reviews && selectedProduct.reviews.length > 0 ? (
              <div className="space-y-3 max-h-60 overflow-y-auto">
                {selectedProduct.reviews.map((rev, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-lg p-3 bg-gray-50"
                  >
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-semibold">{rev.author}</span>
                      <span className="text-gray-500">{rev.date}</span>
                    </div>
                    <p className="text-sm text-gray-700">{rev.text}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-600">
                There are no reviews yet for this item.
              </p>
            )}

            <div className="mt-4 text-right">
              <button
                onClick={() => setSelectedProduct(null)}
                className="inline-block px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
