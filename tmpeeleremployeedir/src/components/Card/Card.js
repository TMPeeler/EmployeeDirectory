import React from "react";

function Card({}}) {
    return (
        <div className="row">
                        <div className="col-lg-12 ">
                            <div className="card">
                                <ul className="d-flex justify-content-evenly mt-3">
                                    <img className="d-flex justify-content-start" src={props.image} alt={props.name} width="250"
                                        height="250"/>
                                    <li className="d-inline">{props.name}</li>
                                    <li className="d-inline">{props.email}</li>
                                    <li className="d-inline">{props.phone}</li>
                                    <li className="d-inline">{props.yearsofexp}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
    );

       
}
  
  export default Card;