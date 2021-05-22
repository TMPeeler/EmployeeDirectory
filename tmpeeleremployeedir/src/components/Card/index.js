import React from "react";

function Card(props) {
    return (
        <div className="row">
                        <div className="col-lg-12 ">
                            <div className="card">
                                <ul className="d-flex justify-content-evenly mt-3">
                                    <img className="d-flex justify-content-start" src={props.image} alt={props.name} width="150"
                                        height="150"/>
                                    <li className="d-inline">{props.name}</li>
                                    <li className="d-inline">{props.email}</li>
                                    <li className="d-inline">{props.phone}</li>
                                    <li className="d-inline">{props.location}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
    );

       
}
  
export default Card;