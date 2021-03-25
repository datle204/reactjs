// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
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
  // const [totalItems, setTotalItems] = useState(0);

  // Khai báo state viết dài
  // const state = useState(0);
  // const count = state[0];
  // const setCount = state[1];

  const [products, setProducts] = useState(PRODUCTS);
  const [userInput, setUserInput] = useState('');


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
  
  const[discount, setDiscount] = useState(0);

  let tax = subTotal * 0.1;

  let totalPrice = subTotal + tax - discount;

  // UPDATE TOTAL PRICE WHEN PROMO CODE IS USED
  
  function updateTotalPrice(event) {
    const newUserInput = event.target.value;
    setUserInput(newUserInput);
  }

  function checkPromo() {
    console.log(userInput);
    const newCodes = [...PROMO_CODES];
    let index = newCodes.findIndex((code) => code.text === userInput);
    if(index > -1){
      setDiscount(newCodes[index].discountPercent);
    }
  }

  // REMOVE PRODUCTS

  function removeProduct(productId) {
    if(window.confirm("Bạn có muốn xóa sản phẩm không?")){
      const newProductList = products.filter(
        (product) => productId !== product.id
      );
      setProducts(newProductList);
    }
  }

  // const handleClick3 = (product) => {
  //   console.log("Thong tin san pham", product);
  // };

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

  function refreshPage() {
    window.location.reload(false);
  }

  const productList = products.map((product) => (
    <li className="row" key={product.id}>
      <div className="col left">
        <div className="thumbnail">
          <a href="/">
            <img src={product.image} alt={"Anh san pham " + product.name} />
          </a>
        </div>
        <div className="detail">
          <div className="name">
            <a href="/">{product.name}</a>
          </div>
          <div className="description">
            Description for product item number 1
          </div>
          <div className="price">${product.price}</div>
        </div>
      </div>
      <div className="col right">
        <div className="quantity">
          <input
            type="number"
            className="quantity"
            step={1}
            value={product.quantity}
            onChange={(event) => updateQuantity(event, product.id)}
          />
        </div>
        <div className="remove">
          <svg
            version="1.1"
            className="close"
            xmlns="//www.w3.org/2000/svg"
            xmlnsXlink="//www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 60 60"
            enableBackground="new 0 0 60 60"
            xmlSpace="preserve"
            // onClick={handleClick1}
            onClick={() => removeProduct(product.id)} //khi truyen tham so vd Id sp
          >
            <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
          </svg>
        </div>
      </div>
    </li>
  ));

  return (
    <main>
      <header className="container">
        <h1>Shopping Cart</h1>
        <ul className="breadcrumb">
          <li>Home</li>
          <li>Shopping Cart</li>
        </ul>
        <span className="count">{totalItems} items in the bag</span>
      </header>

      <section className="container">
        {productList.length > 0 ? (
          <ul className="products">{productList}</ul>
        ) : (
          <div className="products">
            <h1>Không có sản phẩm nào trong giỏ</h1>
            <button type="button" onClick={refreshPage}>
              Quay lại mua hàng
            </button>
          </div>
        )}
      </section>

      {productList.length > 0 ? (
        <section className="container">
          <div className="promotion">
            <label htmlFor="promo-code">Have A Promo Code?</label>
            <input
              type="text"
              id="promo-code" 
              value={userInput}
              onChange={(event) => updateTotalPrice(event)}
            />{" "}
            <button type="button" onClick={checkPromo} />
          </div>
          <div className="summary">
            <ul>
              <li>
                Subtotal <span id="sub-price">${subTotal.toFixed(2)}</span>
              </li>
              <li>
                Tax <span id="tax">${tax.toFixed(2)}</span>
              </li>
              <li>
                Discount <span id="discount">- ${discount.toFixed(2)}</span>
              </li>
              <li className="total" id="total-price">
                Total <span>${totalPrice.toFixed(2)}</span>
              </li>
            </ul>
          </div>
          <div className="checkout">
            <button type="button">Check Out</button>
          </div>
        </section>
      ) : (
        <div></div>
      )}
    </main>
  );
}

export default App;
