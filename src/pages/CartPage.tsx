import {
  useCartStore,
  useCartTotalItems,
  useCartTotalPrice,
} from "@/stores/useCartStore";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCartStore();
  const totalItems = useCartTotalItems();
  const totalPrice = useCartTotalPrice();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <button
          onClick={() => navigate("/products")}
          className="px-6 py-2 bg-transparent border border-black text-black rounded-lg hover:bg-gray-600"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16 px-4 py-8 mt-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          Shopping Cart ({totalItems} items)
        </h1>

        {/* Cart Items */}
        {cart.map((item) => (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div
              key={item.id}
              className="flex items-center justify-between py-4 border-b"
            >
              <div className="flex-1">
                <h1 className="text-sm text-gray-500">{item.id}</h1>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.category}</p>
                <p className="text-lg font-bold">${item.price}</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 rounded-full border hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-full border hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => {
                    removeFromCart(item.id);
                    toast.success("Removed product successfully");
                  }}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Cart Summary */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-semibold">Total:</span>
            <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => {
                clearCart();
                toast.success("Cleared cart successfully");
              }}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Clear Cart
            </button>
            <button className="w-[80%] mx-auto block py-2 bg-transparent text-foreground rounded-md border border-border hover:bg-gray-600 transition">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
