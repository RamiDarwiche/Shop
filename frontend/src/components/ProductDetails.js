// date fns package
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ProductDetails = ({ product }) => {
    return (
        <div className="product-details">
            <h4>{product.title}</h4>
            <p className="price"><strong>Price: $</strong>{product.price}</p>
            <p>{product.description}</p>
            {/* <p>{formatDistanceToNow(new Date(product.createdAt), { addSuffix: true} )}</p> */}
            {/* <span class="material-symbols-outlined" onClick={handleClick}>delete</span> */}
        </div>
    );
}
 
export default ProductDetails;