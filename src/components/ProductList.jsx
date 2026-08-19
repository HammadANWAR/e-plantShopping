import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import plants from "../data/plants";

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const categories = [
    "Indoor Plants",
    "Succulents",
    "Tropical Plants",
  ];

  const isInCart = (plantId) => {
    return cartItems.some(
      (item) => item.id === plantId
    );
  };

  return (
    <main className="product-list">
      <h1>Our Plants</h1>

      {categories.map((category) => {
        const categoryPlants = plants.filter(
          (plant) => plant.category === category
        );

        return (
          <section key={category}>
            <h2>{category}</h2>

            <div className="plant-grid">
              {categoryPlants.map((plant) => (
                <div
                  className="plant-card"
                  key={plant.id}
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                  />

                  <h3>{plant.name}</h3>

                  <p>
                    ${plant.price.toFixed(2)}
                  </p>

                  <button
                    onClick={() =>
                      dispatch(addToCart(plant))
                    }
                    disabled={isInCart(plant.id)}
                  >
                    {isInCart(plant.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}

export default ProductList;