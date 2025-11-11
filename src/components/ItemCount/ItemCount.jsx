import { useCount } from "../../hooks/useCount";
import "./ItemCount.css";

function ItemCount({ stock, count: propCount, handleLess: propHandleLess, handleMore: propHandleMore }) {
    // Always call the hook (rules of hooks). Use local values unless parent supplies props.
    const local = useCount(1, stock);
    const count = propCount !== undefined ? propCount : local.count;
    const handleLess = propHandleLess !== undefined ? propHandleLess : local.handleLess;
    const handleMore = propHandleMore !== undefined ? propHandleMore : local.handleMore;

    return (
        <div className="quantity-controls">
            <button onClick={handleLess} className="less-button">-</button>
            <span className="quantity">{count}</span>
            <button onClick={handleMore} className="more-button">+</button>
        </div>
    );
}

export default ItemCount;