function Product(props) {
  return (
    <div className="product-card">
      <h3>{props.name}</h3>
      <dl>
        <dt>Color</dt><dd>{props.color}</dd>
        <dt>Price</dt><dd>{props.price}</dd>
      </dl>
    </div>
  )
}
ReactDOM.render(<Product name="Widget" color="Blue" price="4.95" />, document.querySelector('#card1'));
ReactDOM.render(<Product name="Gear" color="Grey" price="3.95" />, document.querySelector('#card1'));
