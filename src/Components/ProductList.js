import React, {useContext, useEffect, useState} from 'react';
import Product from "./Product";
import InfiniteScroll from "react-infinite-scroll-component";
import './StyleProduct.css';

const ProductList = ({products, filter, sort, addProduct, addBookmark}) => {

    const [product, setProduct] = useState([]);
    const [page, setPage] = useState(6);


    //const [hasMore, setHasMore] = useState(true);
    //const { user } = useContext(UserContext);


    // eslint-disable-next-line no-lone-blocks
    {/*useEffect(() => {
        setPage(6);

        setProduct(
            products
                .splice(0, page)
                .filter(product => product.name.includes(filter)).map(item => <Product key={item.id} product={item} addProduct={addProduct} addBookmark={addBookmark}/>)        )
        setHasMore(true);
    }, [products]);

    const addItem = () => {
      setProduct([
          ...product,
          ...nextItem()
      ])
        console.log("fetching")
      setPage(page + 3)
      if (page >= products.length)
          setHasMore(false)
    }

    const nextItem = () => {
        return products
            .splice(page, page + 3)
            .filter(product => product.name.includes(filter)).map(item => <Product key={item.id} product={item} addProduct={addProduct} addBookmark={addBookmark}/>)
    }

    */}


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
                sorted = [...products].sort((a, b) => a[sortProperty] - b[sortProperty]);
            }
            else {
                sorted = [...products].sort((a, b) => a.name.localeCompare(b.name));
            }
            setProduct(sorted);
        };
        sortArray(sort);
    }, [products, sort]);

    return (
        <>
            <InfiniteScroll className="productBox" style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
                padding: "20px"
            }}
                dataLength={product.length}
                next={() => setPage(page+1)}
                hasMore={true}
                loader={<h4>Loading...</h4>}>

                {/*<pre>{JSON.stringify(user, null, 2)}</pre>*/}
                {product.filter(product => product.name.includes(filter)).map(item => <Product key={item.id} product={item} addProduct={addProduct} addBookmark={addBookmark}/>)}

            </InfiniteScroll>
        </>
    );
};

export default ProductList;
