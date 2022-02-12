import React from 'react';

const ProductCard = (props) => {


console.log(props.product.title)

  return <div className="col-md-4 mb-4">
      <div class="card">
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{props.product.title}</h5>
            <p class="card-text">{props.product.description}</p>
            <a href="#" class="btn btn-primary me-3">PKR. {props.product.price}</a>
            <a href="#" class="btn btn-primary">Stock: {props.product.stock}</a>
        </div>
        </div>
  </div>;
};

export default ProductCard;
