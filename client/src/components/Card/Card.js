import React from 'react'

export default function Card() {
    return (
        <div>
            <div>
                <div>
                    <div className="card mt-3" style={{ "width": "350px", "maxHeight": "360px" }}>
                        <img src="https://media.istockphoto.com,photos/chilli-panner-tikka-or-paneer-kabab-picture-id629423010?k=20&m=629423010&s=612x612&w=0&h=X-OBIncHWjNFqxGfQuQHwrYHi2GcUw-jn7kqqZpHSw8=" className="carNclassd-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Important text</p>
                            <div className='menu-container w-100'>
                                <select className='m-2 h-100 bg-success rounded'>
                                    {Array.from(Array(6), (e, i) => {
                                        return (
                                            <option key={i + 1} value={i + 1}> {i + 1} </option>
                                        )
                                    })}
                                </select>
                                <select className='m-2 h-100  bg-success rounded'>
                                    <option value="half">Half</option>
                                    <option value="half">Full</option>
                                </select>
                                <div className='d-inline h-100 fs-5'>
                                    Total Price
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
