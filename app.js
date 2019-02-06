class App extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 0,
  }
  handleRemoveFromCard = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1
    })
  }
  handleAddToCard = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1
    })
  }
  handleBuy = () => {
    this.setState({
      shoppingCart: 0,
      availableProducts: this.state.availableProducts - this.state.shoppingCart
    })
  }

  render() {
    const { shoppingCart, availableProducts } = this.state
    return (
      <div>
        {this.state.availableProducts > 0 ? <h2>Produktów na stanie: {this.state.availableProducts}</h2> : <h2>Przepraszamy, już wszystko wykupione ☹</h2>}
        <button disabled={shoppingCart ? false : true} onClick={this.handleRemoveFromCard}>-</button>
        <span style={shoppingCart === 0 ? { opacity: 0.3 } : { opacity: 1 }}> {shoppingCart} </span>
        <button disabled={shoppingCart === this.state.availableProducts ? true : false} onClick={this.handleAddToCard}>+</button>
        {shoppingCart > 0 && <button onClick={this.handleBuy}>Kup</button>}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))