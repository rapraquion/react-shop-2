import React from 'react';
import Text from './Text';

function Product(props) {
  const { item, addToCart, view } = props;

  return (
    <div className={view ? 'product' : 'product-list'}>
      <img src={item.imageUrl} />
      <div className="product-info">
        <Text isHeader text={item.title} />
        <Text isHeader={false} text={item.description} />
        <Text isHeader={false} text={item.price} />
        <button onClick={() => addToCart(item)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
