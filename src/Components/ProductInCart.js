import './StyleProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const ProductInCart = ({product, removeFromCart ,removeBookmark}) => {


    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid black",
            padding: "20px",
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
                removeBookmark(product.id)
            }} />
            <img src={product.src} alt={product.name} width={150} height={150}/>
            <h3 style={{
                marginBottom: "5px"
            }}>{product.name}</h3>
            <p style={{
                marginTop: "5px"
            }}>{product.price+"$"}</p>
            <button style={{
                width: "55%",
                padding: "10px",
                display: "inline-block",
                borderRadius: "20px",
                cursor: "pointer",
                backgroundColor: "black",
                color: "white",
                fontSize: "1rem"
            }} onClick={() => {
                removeFromCart(product.id);
            }} >Remove</button>
        </div>
    );
};

export default ProductInCart;