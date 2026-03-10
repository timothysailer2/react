import { useState } from "react";

function QuantityPicker({ onQuantityChange }) {

  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    const newQty = quantity + 1;
    setQuantity(newQty);
    onQuantityChange(newQty);
  };

  const decrease = () => {

    if (quantity > 1) {
      const newQty = quantity - 1;
      setQuantity(newQty);
      onQuantityChange(newQty);
    }

  };

  return (

    <div className="quantity-picker">

      <button onClick={decrease}>-</button>

      <span>{quantity}</span>

      <button onClick={increase}>+</button>

    </div>

  );

}

export default QuantityPicker;