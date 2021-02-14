import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '../components/buttons/buttonComponent';
//import StarRatingComponent from 'react-star-rating-component';

class Products extends Component {
  productsLoop() {

    return this.props.products.map((product) => {
      return (
        <div className="col-md-4 col-sm-6" key={product.id}>
          <a href="">
            <div className="product-single">
              <span className="favorite"><i className="material-icons">favorite_border</i></span>
              <img src={product.imgUrl} alt=" "/>
              <h5>{product.name}</h5>
              <p className="price">${product.price}

              </p>

              <Button color="primary" btnText="Add to cart" variant="raised" />
            </div>
          </a>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="readmin-products">
        <div className="row">
          {this.productsLoop()}
        </div>
      </div>

    );
  }
}

function mapStateToProps (state) {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(Products);
