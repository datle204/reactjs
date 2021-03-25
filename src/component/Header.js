function Header({ totalItems }) {
  return (
    <header className="container">
      <h1>Shopping Cart</h1>
      <ul className="breadcrumb">
        <li>Home</li>
        <li>Shopping Cart</li>
      </ul>
      <span className="count">{totalItems} items in the bag</span>
    </header>
  );
}

export default Header;
