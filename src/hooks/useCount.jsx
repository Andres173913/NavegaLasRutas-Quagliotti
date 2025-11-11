import { useState } from "react";

export const useCount = (initial = 1, stock = Infinity) => {
    const [count, setCount] = useState(initial);

    const handleLess = () => {
        if (count > 1) setCount(count - 1);
    };

    const handleMore = () => {
        if (count < stock) setCount(count + 1);
    };

    return { count, handleLess, handleMore };
};