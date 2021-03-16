import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className = "shop-cart">
      <div className ="top-content">
        <div className = "left-top-content">
          <a href="#" className ="nav-link">Home </a>
          <a href="#" className ="nav-link"> Shopping Cart</a>
        </div>
        <div className = "right-top-content">
          <p className="quantity">3 items in the bag</p>
        </div>
        <div className = "black-line"></div>
      </div>
      <div className = "main-content">
        <div className="row">
          <div className = "cart-item"></div>
          <div className = "cart-item"></div>
        </div>
        <div className = "right-content"></div>
      </div>
      <div className = "bottom-content">
        <div className="left-bottom-content">
          <p className = "promo-title">Have A Promo Code?</p>
          <input className = "promo-field"></input>
        </div>
        <div className="right-bottom-content">
          
        </div>
      </div>
    </div>
    



    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;


