import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { product as Product } from "../Component/Product";
import SignUpBar from "../Component/SignUpBar";
import NavBar from "../Component/NavBar";

import {
  ShoppingCart,
  Star,
  Heart,
  Share2,
  Eye,
  MessageCircle,
  Edit3,
  Trash2,
  User,
  ChevronRight,
  ThumbsUp,
  ThumbsDown,
  ShoppingBag,
  Zap,
  Shield,
  Truck,
  ArrowLeft,
} from "lucide-react";
import Footer from "../Component/Footer";
import ProductsCard from "../Component/ProductsCard";

const ProductsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [prod, setProd] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [comments, setComments] = useState([
    {
      id: 1,
      text: "Great product! Really satisfied with the quality. The sound is crystal clear and the battery lasts all day.",
      author: "John Doe",
      date: "2025-05-28",
      likes: 5,
      dislikes: 0,
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      id: 2,
      text: "Fast delivery and excellent packaging. Highly recommended! The noise cancellation works perfectly.",
      author: "Sarah Wilson",
      date: "2025-05-27",
      likes: 3,
      dislikes: 0,
      avatar: "https://i.pravatar.cc/40?img=2",
    },
  ]);
  const [newComment, setNewComment] = useState("");
  const [editingComment, setEditingComment] = useState(null);
  const [editText, setEditText] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [viewCount, setViewCount] = useState(1247);

  // Check authentication on mount
  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    if (auth === "true") {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      setIsAuthenticated(true);
      setUser(currentUser);
    }
  }, []);

  useEffect(() => {
    console.log("ProductId from params:", id); // Debug log
    console.log("Available products:", Product); // Debug log

    if (!id) {
      setError("No product ID provided");
      setLoading(false);
      return;
    }

    // Find the current product
    const foundProduct = Product.find((p) => p.id === parseInt(id));
    console.log("Found product:", foundProduct); // Debug log

    if (!foundProduct) {
      setError("Product not found");
      setLoading(false);
      return;
    }

    setProd(foundProduct);
    setSelectedImage(foundProduct.image);

    // Get similar products (same type or category, excluding current product)
    const similar = Product.filter(
      (p) =>
        (p.type === foundProduct.type ||
          p.category === foundProduct.category) &&
        p.id !== foundProduct.id
    );
    setSimilarProducts(similar.slice(0, 3));

    // Increment view count
    setViewCount((prev) => prev + 1);
    setLoading(false);
  }, [id]);

  // Use the same logic as Login.jsx for authentication
  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) =>
        u.username === loginForm.username && u.password === loginForm.password
    );
    if (!user) {
      alert("Invalid username or password!");
      return;
    }
    setIsAuthenticated(true);
    setUser({
      name: user.username,
      email: user.email,
      avatar: user.avatar || "https://i.pravatar.cc/40?img=3",
    });
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        name: user.username,
        email: user.email,
        avatar: user.avatar || "https://i.pravatar.cc/40?img=3",
      })
    );
    setShowLogin(false);
    setLoginForm({ username: "", password: "" });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("currentUser");
  };

  // Helper to check authentication and user
  const checkAuth = () => {
    const isAuth = localStorage.getItem("isAuthenticated") === "true";
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    return isAuth && currentUser;
  };

  // Add to Cart with auth check
  const handleAddToCart = () => {
    if (!checkAuth()) {
      setShowLogin(true);
      return;
    }
    alert(`Added ${quantity} x ${prod.name} to cart!`);
  };

  // Add to Wishlist with auth check
  const handleWishlist = () => {
    if (!checkAuth()) {
      setShowLogin(true);
      return;
    }
    setIsWishlisted(!isWishlisted);
    // Optionally, add wishlist logic here
  };

  // Add Comment with auth check
  const handleAddComment = () => {
    if (!checkAuth()) {
      setShowLogin(true);
      return;
    }
    if (newComment.trim() !== "") {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      const comment = {
        id: comments.length + 1,
        text: newComment,
        author: currentUser?.name || "User",
        date: new Date().toISOString().split("T")[0],
        likes: 0,
        dislikes: 0,
        avatar: currentUser?.avatar || "https://i.pravatar.cc/40?img=3",
      };
      setComments([comment, ...comments]);
      setNewComment("");
    }
  };

  const handleEditComment = (commentId) => {
    const comment = comments.find((c) => c.id === commentId);
    setEditingComment(commentId);
    setEditText(comment.text);
  };

  const handleSaveEdit = (commentId) => {
    setComments(
      comments.map((c) => (c.id === commentId ? { ...c, text: editText } : c))
    );
    setEditingComment(null);
    setEditText("");
  };

  const handleDeleteComment = (commentId) => {
    setComments(comments.filter((c) => c.id !== commentId));
  };

  const handleLikeComment = (commentId, type) => {
    setComments(
      comments.map((c) =>
        c.id === commentId ? { ...c, [type]: c[type] + 1 } : c
      )
    );
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: prod.name,
          text: `Check out this amazing product: ${prod.name}`,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (error) {
      console.log("Share failed:", error);
      // Fallback - try to copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      } catch (clipboardError) {
        console.log("Clipboard failed:", clipboardError);
      }
    }
  };

  const handleNavigateToProduct = (productId) => {
    navigate(`/products/${productId}`);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading product details...</div>
      </div>
    );
  }

  if (error || !prod) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <div className="text-xl text-red-600">
          {error || "Product not found"}
        </div>
        <button
          onClick={() => navigate("/products")}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 right-0 z-40">
        <SignUpBar />
        <NavBar />
      </div>

      <div className="max-w-7xl mx-auto p-6 pt-20">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <span className="cursor-pointer hover:text-blue-600">Home</span>
          <ChevronRight size={16} />
          <span className="cursor-pointer hover:text-blue-600">
            {prod.type}
          </span>
          <ChevronRight size={16} />
          <span className="text-gray-900 font-medium">{prod.name}</span>
        </nav>

        <button
          onClick={handleGoBack}
          className="mb-6 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          Back to Products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative group">
              <img
                src={selectedImage || prod.image}
                alt={prod.name}
                className="w-full h-96 object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-3 rounded-full shadow-lg transition-all duration-200 ${
                    isWishlisted
                      ? "bg-red-100 text-red-600"
                      : "bg-white text-gray-600"
                  } hover:scale-110`}
                >
                  <Heart
                    size={20}
                    fill={isWishlisted ? "currentColor" : "none"}
                  />
                </button>
                <button
                  onClick={handleShare}
                  className="p-3 bg-white text-gray-600 rounded-full shadow-lg hover:bg-gray-50 transition-all duration-200 hover:scale-110"
                >
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2">
              {[prod.image, ...prod.thumbnails].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`thumb-${i}`}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition-all duration-200 ${
                    (selectedImage || prod.image) === img
                      ? "ring-2 ring-blue-500 scale-105"
                      : "hover:scale-105 opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {prod.name}
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <Eye size={16} />
                  <span>{viewCount} views</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle size={16} />
                  <span>{comments.length} reviews</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-3xl font-bold text-red-600">
                ${prod.price.toFixed(2)}
              </div>
              {prod.discount > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-lg text-gray-500 line-through">
                    ${(prod.price / (1 - prod.discount / 100)).toFixed(2)}
                  </span>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-semibold">
                    -{prod.discount}%
                  </span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={
                      i < Math.floor(prod.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <span className="text-gray-600">({prod.rating}/5)</span>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-200">
              <div className="flex items-center gap-2 text-sm">
                <Truck className="text-green-600" size={16} />
                <span>Free Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="text-blue-600" size={16} />
                <span>2 Year Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Zap className="text-yellow-600" size={16} />
                <span>Fast Shipping</span>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 bg-yellow-500 px-6 py-4 rounded-lg text-white font-semibold hover:bg-yellow-600 transition-all duration-200 shadow-lg hover:shadow-xl">
                  <ShoppingCart size={20} /> Add to Cart
                </button>
                <button className="flex items-center gap-2 bg-blue-600 px-6 py-4 rounded-lg text-white font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  <ShoppingBag size={20} /> Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-12">
          <div className="flex border-b border-gray-200 mb-6">
            {["description", "specifications", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium capitalize transition-colors duration-200 ${
                  activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            {activeTab === "description" && (
              <div>
                <h3 className="font-semibold text-lg mb-3">
                  Product Description
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {prod.description}
                </p>
              </div>
            )}

            {activeTab === "specifications" && (
              <div>
                <h3 className="font-semibold text-lg mb-3">Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">Brand:</span>
                    <span>Premium Audio</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">Category:</span>
                    <span>{prod.type}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">Weight:</span>
                    <span>250g</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">Battery Life:</span>
                    <span>30 hours</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">Connectivity:</span>
                    <span>Bluetooth 5.0</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium">Noise Cancellation:</span>
                    <span>Active ANC</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <h3 className="font-semibold text-lg mb-3">Customer Reviews</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={24}
                        className={
                          i < Math.floor(prod.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-xl font-semibold">{prod.rating}/5</span>
                  <span className="text-gray-600">
                    ({comments.length} reviews)
                  </span>
                </div>
                <p className="text-gray-600">
                  See detailed reviews in the comments section below.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Customer Reviews ({comments.length})
            </h2>

            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <img
                  src={user?.avatar || "https://i.pravatar.cc/40?img=3"}
                  alt={user?.name || "User"}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium">
                  {user?.name || "User"}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-sm text-red-600 hover:text-red-700"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Login to Review
              </button>
            )}
          </div>

          {/* Login Modal */}
          {showLogin && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
                <h3 className="text-xl font-bold mb-4">Login to Comment</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={loginForm.username}
                    onChange={(e) =>
                      setLoginForm({ ...loginForm, username: e.target.value })
                    }
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={loginForm.password}
                    onChange={(e) =>
                      setLoginForm({ ...loginForm, password: e.target.value })
                    }
                  />
                  <div className="flex gap-3">
                    <button
                      onClick={handleLogin}
                      className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => setShowLogin(false)}
                      className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors duration-200"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Add Comment */}
          <div className="mb-6">
            <div className="flex gap-3">
              <textarea
                placeholder={
                  isAuthenticated
                    ? "Write your review..."
                    : "Login to write a review"
                }
                className="flex-1 border border-gray-300 px-4 py-3 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="3"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                disabled={!isAuthenticated}
              />
              <button
                onClick={handleAddComment}
                disabled={!isAuthenticated || !newComment.trim()}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Post Review
              </button>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-4">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start gap-3">
                  <img
                    src={comment.avatar}
                    alt={comment.author}
                    className="w-10 h-10 rounded-full flex-shrink-0"
                  />

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-gray-900">
                        {comment.author}
                      </span>
                      <span className="text-sm text-gray-500">
                        {comment.date}
                      </span>
                    </div>

                    {editingComment === comment.id ? (
                      <div className="space-y-3">
                        <textarea
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          className="w-full border border-gray-300 px-3 py-2 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          rows="2"
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleSaveEdit(comment.id)}
                            className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors duration-200"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditingComment(null)}
                            className="px-3 py-1 bg-gray-300 text-gray-700 text-sm rounded hover:bg-gray-400 transition-colors duration-200"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <p className="text-gray-700 mb-3">{comment.text}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <button
                              onClick={() =>
                                handleLikeComment(comment.id, "likes")
                              }
                              className="flex items-center gap-1 text-sm text-gray-600 hover:text-green-600 transition-colors duration-200"
                            >
                              <ThumbsUp size={16} />
                              <span>{comment.likes}</span>
                            </button>
                            <button
                              onClick={() =>
                                handleLikeComment(comment.id, "dislikes")
                              }
                              className="flex items-center gap-1 text-sm text-gray-600 hover:text-red-600 transition-colors duration-200"
                            >
                              <ThumbsDown size={16} />
                              <span>{comment.dislikes}</span>
                            </button>
                          </div>

                          {isAuthenticated &&
                            user &&
                            user.name === comment.author && (
                              <div className="flex gap-2">
                                <button
                                  onClick={() => handleEditComment(comment.id)}
                                  className="p-1 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                                >
                                  <Edit3 size={16} />
                                </button>
                                <button
                                  onClick={() =>
                                    handleDeleteComment(comment.id)
                                  }
                                  className="p-1 text-gray-600 hover:text-red-600 transition-colors duration-200"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            You may also like
          </h2>
          <div className="overflow-x-auto">
            <div className="flex gap-6" style={{ minWidth: 0 }}>
              {Product.filter((p) => p.type === prod.type && p.id !== prod.id)
                .slice(0, 7)
                .map((rec) => (
                  <div key={rec.id} style={{ minWidth: 280, flex: "0 0 auto" }}>
                    <ProductsCard
                      product={rec}
                      onAddToCart={() => {}}
                      onClick={() => handleNavigateToProduct(rec.id)}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductsDetails;
