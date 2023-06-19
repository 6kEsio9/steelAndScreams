import "./Catalogue.css";

import { Link } from "react-router-dom";

export const Item = (props) => {

    return (
        <div className="item">
            <Link to={`/item/details/${props.item._id}`}>
                <img className="itemImg" src={props.item.image}></img>
            </Link>
            <h4 className="itemName">{props.item.name}</h4>
            <p className="itemPrice">{props.item.price}$</p>
        </div>
    );
};  