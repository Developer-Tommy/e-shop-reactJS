import './StyleProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Product = ({product, addProduct, addBookmark}) => {

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid black",
            padding: "15px",
            flexBasis: "30%",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            borderRadius: "2px",
            backgroundColor: "white",
            position: "relative"
        }}>
            <FontAwesomeIcon className="heart" style={{

            }} icon={faHeart} onClick={() => {
                addBookmark(product)
            }} />
            <img src={product.src} alt={product.name} width={150} height={150}/>
            <h3>{product.name}</h3>
            <p>{product.price+"$"}</p>
            <button style={{
                width: "55%",
                padding: "20px",
                display: "inline-block",
                borderRadius: "5px",
                cursor: "pointer",
            }} onClick={() => {
                addProduct(product)
            }} >Buy</button>
        </div>
    );
};

export default Product;
