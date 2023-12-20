import React from 'react'
import './Card.css';

export default function Card() {
    return (
        <div>
            <div>
                 <div className="menu" > 

                    <img src="/images/First.jpg" alt=""  />

                    <div className="menu-body">
                        <h3 className="menu-title">Pizza</h3>  
                        <div className='menu-container w-100'>
                            <select className='menu-container1'>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}> {i + 1} </option>
                                    )
                                })}
                            </select>
                            <select className='menu-container2'>
                                <option value="half">Half</option>
                                <option value="half">Full</option>
                            </select>
                            <div classNam='menu-container3'>
                                Total Price
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
