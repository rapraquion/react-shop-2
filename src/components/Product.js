import React from 'react';
import PropTypes from 'prop-types';

export default function Product(props) {
    const [item, addToCart] = props;

    return (
        <div className="product">
            <img src={item.imageUrl} />
            <div className="product-info">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
        </div>
    )
}

Product.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired,
    }),
    addToCart: PropTypes.func.isRequired,
};