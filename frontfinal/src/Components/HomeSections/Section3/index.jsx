import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { WishListContext } from "../../../Context/WishListContext";
import { BasketContext } from "../../../Context/BasketContext";
const Section3 = () => {
  const { addWishList, isWishList } = useContext(WishListContext)
  const { addbasket, isbasket } = useContext(BasketContext)
  const [api, setApi] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3100")
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);

  return (

    <section className="section3">
      <div className="section3_container">
        <div className="section3_container_title">
          <h2>Popular Items</h2>
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida.
          </p>
        </div>
        <div className="section3_container_allCard">
          {api.map((x) => {
            return (
              <div key={x._id} className="section3_container_allCard_card">
                <div className="section3_container_allCard_card_img">
                  <div onClick={()=>addbasket(x)} className="section3_container_allCard_card_img_btn">
                    {!isbasket(x) ?"Add to cart":"Remove"}
                  </div>
                  <div className="section3_container_allCard_card_img_icon" onClick={()=>addWishList(x)}>
                    {!isWishList(x) ? <i className="fa-regular fa-heart"></i>:<i className="fa-solid fa-heart" ></i>}
                  </div>
                  <img src={x.image} alt="" />
                </div>
                <div className="section3_container_allCard_card_title">
                  {x.title}
                </div>
                <div className="section3_container_allCard_card_price">
                  $ {x.price}
                  <Link to={`/DetailPage/${x._id}`}>
                    <button>Detail</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="section3_container_allCard">
          {api.map((x) => {
            return (
              <div key={x._id} className="section3_container_allCard_card2">
                <div className="section3_container_allCard_card2_img">

                  <img src={x.image} alt="" />

                  <div className="section3_container_allCard_card2_img_info">
                  <Link to={`/DetailPage/${x._id}`}><p>{x.title}</p></Link>
                    <span>
                      {x.description}
                    </span>
                  </div>
                </div>
                <div className="section3_container_allCard_card2_title">
                  <span>{x.price}$</span>
                  <div onClick={()=>addbasket(x)} className="section3_container_allCard_card2_title_btn">
                    {!isbasket(x) ?"Add":"Remove"}
                  </div>
                  <div className="section3_container_allCard_card2_title_icon"
                  onClick={()=>addWishList(x)}>
                  {!isWishList(x) ? <i className="fa-regular fa-heart"></i>:<i className="fa-solid fa-heart" ></i>}
                  </div>
                </div>

              </div>
            );
          })}
        </div> */}
        <div className="section3_container_btn">
          <button>VIEW MORE PRODUCTS</button>
        </div>
      </div>
    </section>
  );
};

export default Section3;
