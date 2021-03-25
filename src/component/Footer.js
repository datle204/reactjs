function Footer({
  products,
  userInput,
  updateTotalPrice,
  checkPromo,
  subTotal,
  tax,
  discount,
  totalPrice,
}) {
  return products.length > 0 ? (
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
  );
}

export default Footer;
