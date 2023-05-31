import "./Catalogue.css";

export const Item = (props) => {
    return(
        <div className="item">
            <img className="itemImg" src={props.item.image}></img>
            <h4 className="itemName">{props.item.name}</h4>
            <p className="itemPrice">{props.item.price}$</p>
        </div>
    );
};  