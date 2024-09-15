import React from "react";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <div>
      <div className="card m-5" style={{ width: "18rem" }}>
        <img className="card-img-top" src="https://www.burgerartist.com/wp-content/uploads/2016/11/pizza-burger-thumb.jpg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is Some Importan Text
          </p>
          <div className="container w-100">
            <select className="m-2 h-100 w-40 rounded bg-success">
               {Array.from(Array(6), (e,i) =>{
                return(
                    <option key={i + 1} value={i+1}>{i+1}</option>
                )
               })}
            </select>
            <select className="m-2 h-100 w-40 rounded bg-success">
                <option value={"Half"}>Half</option>
                <option value={"Full"}>Full</option>
            </select>
            <div className="d-inline h-100 fs-5">Total Price </div>
          </div>
        </div>
      </div>
    </div>
  );
}
