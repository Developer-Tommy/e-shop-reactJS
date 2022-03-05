import React, {useEffect, useState} from 'react';
import ProductInBookmark from "./ProductInBookmark";

const Bookmark = ({users, currentUser, filter, sort, addToCart, removeFromBookmark }) => {

    const [book, setBook] = useState([]);
    const bookmark = users.find(user => user.username === currentUser.username).bookmark;


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
                sorted = [...bookmark].sort((a, b) => a[sortProperty] - b[sortProperty]);
            }
            else {
                sorted = [...bookmark].sort((a, b) => a.name.localeCompare(b.name));
            }
            setBook(sorted);
        };
        sortArray(sort);
    }, [bookmark, sort]);

    return (
        <>
            {(users.find(user => user.username === currentUser.username).bookmark.length > 0) ? (book.filter(product => product.name.includes(filter)).map(item => <ProductInBookmark key={item.id} product={item} addToCart={addToCart} removeFromBookmark={removeFromBookmark}/>)) : (<h3>Your bookmark is empty!</h3>)}
        </>
    );
};

export default Bookmark;