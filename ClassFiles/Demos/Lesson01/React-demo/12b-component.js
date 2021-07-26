function Product() {
  return (
    <div className="product-card">
      <h3>Widget</h3>
      <dl>
        <dt>Color</dt><dd>Blue</dd>
        <dt>Price</dt><dd>5.95</dd>
      </dl>
    </div>
  )
}
ReactDOM.render(<Product />, document.querySelector('#card1'));
