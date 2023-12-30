import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";// Update the path to your Navbar component
import Card from "../../components/Card/Card";// Update the path to your Card component
import './Promotionitem.css';

function Menuitem() {
  const [foodItems, setFoodItems] = useState([]);
  const [foodCategory, setfoodCategory] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    const fetchData = async () => {
      try {
        const responseFoodItems = await axios.get("http://localhost:4000/promodata");
        setFoodItems(responseFoodItems.data.foodItems);
        setfoodCategory(responseFoodItems.data.foodCategory);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />

      <div className='container1'>
        {
          foodCategory !== ""
            ? foodCategory.map((data) => {
              return (<div className='row m-3'>
                <div key={data._id} className='fs-3 m-3'>
                  {data.CategoryName}
                </div>
                <hr />
                {foodItems !== ""
                  ?
                  foodItems.filter((item) => item.CategoryName === data.CategoryName)
                    .map(filterItems => {
                      return (
                        <div key={filterItems._id} >
                          <div>
                          <Card foodItem={filterItems}
                                options={filterItems.options[0]}
                          ></Card>
                          </div>
                        </div>
                      )
                    }
                    ) : <div> No such data found </div>}
              </div>
              )
            })
            : <div>"""""""""""</div>
        }
      </div>
      
    </div>
  );
};

export default Menuitem;