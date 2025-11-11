import "./ItemDetail.css";
import { useNavigate } from "react-router";
import { ShoppingBasket } from "lucide-react";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ product }) {

    const navigate = useNavigate();
    
    const handleAddToCart = () => {
        console.log(`Agregado al carrito: ${product.name}`);
    };

    const handleProductClick = () => {
        navigate(`/product-detail/${product.id}`);
    };

    return (
        <section className="item-detail-section">
            <div className="item-detail">
                <img src={product.image1} alt={product.name} />
                <h2 onClick={handleProductClick} className="item-detail-name">{product.name}</h2>
                <ItemCount stock={product.stock} />
                <p className="item-detail-price">Precio: ${product.price}</p>
                <button onClick={handleAddToCart} className="add-to-cart-button">
                    Agregar al carrito <ShoppingBasket />
                </button>
            </div>
        </section>
    );
}

export default ItemDetail;