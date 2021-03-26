// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Body from "./component/Body";
import Modal from "./component/Modal";
import { PROMO_CODES } from "./mockData.js";

const PRODUCTS = [
  {
    id: 1,
    name: "PRODUCT ITEM NUMBER 1",
    description: "Description for product item number 1",
    image: "https://via.placeholder.com/200x150",
    price: 10,
    quantity: 1,
  },
  {
    id: 2,
    name: "PRODUCT ITEM NUMBER 2",
    description: "Description for product item number 2",
    image: "https://via.placeholder.com/200x150",
    price: 20,
    quantity: 2,
  },
  {
    id: 3,
    name: "PRODUCT ITEM NUMBER 3",
    description: "Description for product item number 3",
    image: "https://via.placeholder.com/200x150",
    price: 10,
    quantity: 3,
  },
];

function App() {
  // Khai báo state viết dài
  // const state = useState(0);
  // const count = state[0];
  // const setCount = state[1];

  const [products, setProducts] = useState(PRODUCTS);
  const [userInput, setUserInput] = useState("");

  // UPDATE TOTAL QUANTITY

  let totalItems = products.reduce(
    (total, product) => (total += product.quantity),
    0
  );

  // UPDATE TOTAL PRICE

  let subTotal = products.reduce(
    (total, product) => (total += product.quantity * product.price),
    0
  );

  const [discount, setDiscount] = useState(0);

  let tax = subTotal * 0.1;

  let totalPrice = subTotal + tax - discount;

  // UPDATE TOTAL PRICE WHEN PROMO CODE IS USED

  function updateTotalPrice(event) {
    const newUserInput = event.target.value;
    setUserInput(newUserInput);
  }

  function checkPromo() {
    const newCodes = [...PROMO_CODES];
    let index = newCodes.findIndex((code) => code.text === userInput);
    if (index === -1) {
      setDiscount(0);
    }
    if (index > -1) {
      setDiscount(newCodes[index].discountPercent);
    }
  }

  // REMOVE PRODUCTS

  const [modalVisible, setModalVisible] = useState(false);

  const [buttonId, setButtonId] = useState();

  function removeProduct(productId) {
    setButtonId(productId)
    setModalVisible(true)
  }

  function confirmRemove(){

    const newProductList = products.filter(
      (product) => product.id !== buttonId
    );

    setProducts(newProductList);
    setModalVisible(false);
  }

  function cancelRemove(){
    setModalVisible(false);
  }

  // UPDATE PRODUCTS QUANTITY
  function updateQuantity(event, productID) {
    const inputValue = event.target.value;
    const newProducts = [...products];
    let index = newProducts.findIndex((product) => product.id === productID);
    if (index > -1) {
      newProducts[index].quantity = Number(inputValue);
    }
    setProducts(newProducts);
  }


  return (
    <main>
      <Header totalItems={totalItems} />
      <Body
        products={products}
        setProducts={setProducts}
        PRODUCTS={PRODUCTS}
        removeProduct={removeProduct}
        updateQuantity={updateQuantity}
      />
      <Footer
        products={products}
        userInput={userInput}
        updateTotalPrice={updateTotalPrice}
        checkPromo={checkPromo}
        subTotal={subTotal}
        tax={tax}
        discount={discount}
        totalPrice={totalPrice}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
      {
        modalVisible && <Modal message="Bạn có muốn xóa sản phẩm này không?" 
        confirmRemove={confirmRemove}
        cancelRemove={cancelRemove}
        />
      }

    </main>
  );
}

export default App;
