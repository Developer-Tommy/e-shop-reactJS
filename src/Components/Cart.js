import React, {useEffect, useState} from 'react';
import ProductInCart from "./ProductInCart";

const Cart = ({cart, filter, sort,  removeProductFromCart,  addToBookmark}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const sortArray = type => {
            const types = {
                id: 'id',
                name: 'name',
                price: 'price',
            };
            const sortProperty = types[type];
            let sorted;

            if (sortProperty !== "name"){
                sorted = [...cart].sort((a, b) => a[sortProperty] - b[sortProperty]);
            }
            else {
                sorted = [...cart].sort((a, b) => a.name.localeCompare(b.name));
            }
            setData(sorted);
        };
        sortArray(sort);
    }, [cart, sort]);

    return (
        <>
            {data.filter(product => product.name.includes(filter)).map(item => <ProductInCart key={item.id} product={item} removeFromCart={removeProductFromCart} addToBookmark={addToBookmark}/>)}
        </>
    );
};

export default Cart;
