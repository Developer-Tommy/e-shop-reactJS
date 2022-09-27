import React, {useContext, useEffect, useState} from 'react';
import ProductInCart from "./ProductInCart";


const Cart = ({users, currentUser, filter, sort,  removeProductFromCart,  addToBookmark}) => {

    const [data, setData] = useState([]);
    const cart = users.find(user => user.username === currentUser.username).cart;

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
            {(users.find(user => user.username === currentUser.username).cart.length > 0) ? (data.filter(product => product.name.toLowerCase().includes(filter.toLowerCase())).map(item => <ProductInCart key={item.id} product={item} removeFromCart={removeProductFromCart} addToBookmark={addToBookmark}/>)) : (<h3>Your cart is empty!</h3>)}
            {(users.find(user => user.username === currentUser.username).cart.length > 0) && (
                <button style={{
                    width: "15%",
                    padding: "10px",
                    display: "inline-block",
                    borderRadius: "20px",
                    cursor: "pointer",
                    backgroundColor: "black",
                    color: "white",
                    fontSize: "1rem",
                    position: "sticky",
                    bottom: "20px",
                    left: "100%",
                    height: "10%"
                }}
                >Check-out</button>
            )}
        </>
    );
};

export default Cart;
