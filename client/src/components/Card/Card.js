import React, { useEffect,useState, useRef } from 'react'
import './Card.css';
import { useDispatchCart, useCart } from '../ContextReducer';

export default function Card(props) {
    let dispatch = useDispatchCart();
    let data = useCart();
    const priceRef = useRef();
    let options = props.options;
    let priceOptions = Object.keys(options);
    //let foodItem = props.foodItems; 
    const [qty, setQty] = useState(1)
    const [size, setSize] = useState("")

    const handleAddToCart = async () => {
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
        console.log(data)
    }

let finalPrice = qty * parseInt(options[size]);
useEffect(() => {
    setSize(priceRef.current.value)
}, [])
    return (
        <div>
            <div>
                <div className="menu" >

                    <img src={props.foodItem.img} alt="" />

                    <div className="menu-body">
                        <h3 className="menu-title">{props.foodItem.name}</h3>
                        <hr></hr>
                        <div className='menu-container w-100'>
                            <select className='menu-container1' onChange={(e) => setQty(e.target.value)}>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}> {i + 1} </option>
                                    )
                                })}
                            </select>
                            <select className='menu-container2' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                                {priceOptions.map((data) => {
                                    return <option key={data} value={data}>{data}</option>
                                })
                                /* <option value="half">Half</option>
                                <option value="half">Full</option> */}
                            </select>
                            <div className='menu-container3'>
                                Price: Rs{finalPrice}/-
                            </div>
                        </div>
                        <hr>
                        </hr>
                        <button className={'btn btn-success justify-center ms-2'} onClick={handleAddToCart}>Add to Cart</button>
                    </div>

                </div>
            </div>
        </div>

    )
}
