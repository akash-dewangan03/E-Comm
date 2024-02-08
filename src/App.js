import "./styles.css";
// import Product from "./components/Product";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { useState } from "react";
import CartContextProvider from "./context/cart";
// import Mycart from "./components/Mycart"; // Import Mycart component here

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div>
      <Provider store={store}>
        <CartContextProvider>
          <Header
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
          <ProductList selectedCategory={selectedCategory} />
          {/* <Mycart /> To be Included */}
        </CartContextProvider>
      </Provider>
    </div>
  );
}
