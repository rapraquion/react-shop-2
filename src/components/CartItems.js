import React from 'react'
import PropTypes from 'prop-types';

export default function CartItems(props) {
    const [item, addToCard] = props

    return (
        <div class="product">
            <img src={item.imageUrl} />
            <div className="product-info">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p>{item.price}</p>
            </div>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired,
    }),
};