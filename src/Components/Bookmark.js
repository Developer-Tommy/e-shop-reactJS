import React, {useEffect, useState} from 'react';
import ProductInBookmark from "./ProductInBookmark";

const Bookmark = ({ bookmark, filter, sort, addToCart, removeFromBookmark }) => {

    const [book, setBook] = useState([]);

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
            {book.filter(product => product.name.includes(filter)).map(item => <ProductInBookmark key={item.id} product={item} addToCart={addToCart} removeFromBookmark={removeFromBookmark}/>)}
        </>
    );
};

export default Bookmark;