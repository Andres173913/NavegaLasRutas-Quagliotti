import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ShoppingBasket, ChevronLeft, ChevronRight } from "lucide-react";
import "./ProductDetail.css";
import NavBar from "../components/NavBar/NavBar";
import ItemCount from "../components/ItemCount/ItemCount";
import { useCount } from "../hooks/useCount";


function ProductDetail() {
    
    const {productId} = useParams();
    
    const [product, setProduct] = useState({});
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { count, handleLess, handleMore } = useCount(1, product?.stock ?? Infinity);
    
    // Obtener array de imágenes disponibles
    const images = [product.image1, product.image2, product.image3].filter(img => img);
    
    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
    
    const handleNextImage = () => {
        setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    
    const handleAddToCart = () => {
        console.log(`Agregado al carrito: ${product.name} x${count}`);
    };
        
        useEffect(() => {
            (async () => {
                try{
                const response = await fetch('/productos.json')
                const data = await response.json()
                const productoEncontrado = data.find((product) => product.id === parseInt (productId))
                setProduct(productoEncontrado)
                setCurrentImageIndex(0);
                } catch (error) {
                    console.log(error)
                }
            })()
        }, [productId])
    
    return (
        <>
         <NavBar />
        <div>
            <div className="product-detail">
                <div className="carousel-container">
                    {images.length > 0 ? (
                        <>
                            <img 
                                src={images[currentImageIndex]} 
                                alt={`${product.name} - imagen ${currentImageIndex + 1}`}
                                className="carousel-image"
                            />
                            {images.length > 1 && (
                                <>
                                    <button 
                                        onClick={handlePrevImage} 
                                        className="carousel-button prev-button"
                                        aria-label="Imagen anterior"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button 
                                        onClick={handleNextImage} 
                                        className="carousel-button next-button"
                                        aria-label="Imagen siguiente"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                    <div className="carousel-dots">
                                        {images.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                                                onClick={() => setCurrentImageIndex(index)}
                                                aria-label={`Ir a imagen ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </>
                    ) : (
                        <div className="no-image">No hay imágenes disponibles</div>
                    )}
                </div>
                
                <h2 className="item-detail-name">{product.name}</h2>
                <p className="item-detail-element">{product.element}</p>
                {/* ItemCount uses the lifted count/handlers from the hook above */}
                <ItemCount stock={product.stock} count={count} handleLess={handleLess} handleMore={handleMore} />
                <p className="item-detail-price">Precio: ${product.price}</p>
                <button onClick={handleAddToCart} className="add-to-cart-button">
                    Agregar al carrito <ShoppingBasket />
                </button>
            </div>
        </div>
        </>
    );
}

export default ProductDetail;