import React, { useEffect, useState} from 'react';
import Product from "./Product";
import './StyleProduct.css';

const ProductList = ({products, filter, sort, addProduct, addBookmark}) => {

    const copy = [...products];
    const [product, setProduct] = useState(copy.splice(0, products.length-15));
    const [page, setPage] = useState(9);

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", trackScrolling);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", trackScrolling);
        };
    });

    const trackScrolling = () => {
        setTimeout(() => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                let array = [...products]
                let newArray = array.splice(0, products.length-page)
                setProduct(newArray)
                setPage(page - 9)
            }
        },1500)
    };

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
                sorted = [...product].sort((a, b) => a[sortProperty] - b[sortProperty]);
            }
            else {
                sorted = [...product].sort((a, b) => a.name.localeCompare(b.name));
            }
            setProduct(sorted);
        };
        sortArray(sort);
    }, [sort]);


    return (
        <div className="productBox" style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
                padding: "20px"
            }}>
                {product.filter(product => product.name.includes(filter)).map(item => <Product key={item.id} product={item} addProduct={addProduct} addBookmark={addBookmark}/>)}

        </div>
    );
};

export default ProductList;