import { useDispatch } from "react-redux";
import {
  updateQuantity,
  removeItem,
} from "../redux/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const decreaseQuantity = () => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );
  };

  const deleteItem = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="cart-item">
      <img
        src={item.image}
        alt={item.name}
      />

      <div className="cart-item-info">
        <h2>{item.name}</h2>

        <p>
          Unit Price: ${item.price.toFixed(2)}
        </p>

        <div className="quantity-controls">
          <button
            onClick={decreaseQuantity}
            disabled={item.quantity === 1}
          >
            −
          </button>

          <strong>{item.quantity}</strong>

          <button onClick={increaseQuantity}>
            +
          </button>
        </div>

        <p>
          Total: $
          {(item.price * item.quantity).toFixed(2)}
        </p>

        <button
          className="delete-button"
          onClick={deleteItem}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CartItem;