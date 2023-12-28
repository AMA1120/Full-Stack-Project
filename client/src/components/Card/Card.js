import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";
import { useDispatchCart, useCart } from "../ContextReducer";

export default function Card(props) {
  const data = useCart();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const priceRef = useRef();
  const dispatch = useDispatchCart();

  const handleClick = () => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  };

  const handleQty = (e) => {
    setQty(e.target.value);
  };

  const handleOptions = (e) => {
    setSize(e.target.value);
  };

  const handleAddToCart = async () => {
    let food = null;

    if (props.foodItem && props.foodItem._id) {
      for (const item of data) {
        if (item.id === props.foodItem._id) {
          food = item;
          break;
        }
      }
    } else {
      console.error("foodItem or _id property is undefined.");
      return;
    }

    console.log(food);
    console.log(new Date());

    if (food !== null) {
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: props.foodItem._id,
          price: finalPrice,
          qty: qty,
        });
        return;
      } else if (food.size !== size) {
        await dispatch({
          type: "ADD",
          id: props.foodItem._id,
          name: props.foodItem.name,
          price: finalPrice,
          qty: qty,
          size: size,
          img: props.ImgSrc,
        });
        console.log("Size different, so simply ADD one more to the list");
        return;
      }
    }

    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
      img: props.ImgSrc,
    });
  };

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  let finalPrice = qty * parseInt(props.options[size], 10);

  return (
    <div>
      <div>
        <div className="menu">
          <img src={props.foodItem.img} alt="" />
          <div className="menu-body">
            <h3 className="menu-title">{props.foodItem.name}</h3> <br/>
            <p>
              {" "}A delightfully light thin crust pizza, expertly
              hand-stretched and oven-baked to golden perfection! Topped with
              tender BBQ chicken accompanied by spicy jalapenos, crunchy onions
              and mozzarella cheese.
            </p> <br/>
            <hr></hr>
            <div className="menu-container w-100">
              <select
                className="menu-container1"
                onChange={handleQty}
                onClick={handleClick}
              >
                {Array.from(Array(6), (e, i) => (
                  <option key={i + 1} value={i + 1}>
                    {" "}
                    {i + 1}{" "}
                  </option>
                ))}
              </select> 
              <select
                className="menu-container2"
                ref={priceRef}
                onChange={handleOptions}
              >
                {Object.keys(props.options).map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
              <div className="menu-container3">Price: Rs{finalPrice}/-</div>
            </div>
            <hr></hr>
            <button
              className={"btn btn-warning justify-center ms-2"}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
