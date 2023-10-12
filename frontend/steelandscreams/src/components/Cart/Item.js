import * as itemService from '../../services/itemService';

import useAuth from '../../hooks/useAuth';

export const Item = (props) => {

    const { auth, setAuth } = useAuth();

    const removeButton = async (e) => {
        e.preventDefault();
        if (auth) {
            itemService.removeFromCart(props.item._id, auth._id, auth.token)
                .then(res => {
                    console.log(res);
                    props.setCartItems(res.cartItems);
                    res.token = auth.token;
                    console.log(res);
                    setAuth(res);
                    props.setCartItems(res.cartItems);
                });
        }
    };

    return (
        <div className="Cart-Items">
            <div className="image-box">
                <img src={props.item.image} style={{ height: "120px" }} />
            </div>
            <div className="about">
                <h1 className="title">{props.item.name}</h1>
                <h3 className="subtitle">{props.item.creator}</h3>
            </div>
            <div className="counter">
                <div className="btn">+</div>
                <div className="count">1</div>
                <div className="btn">-</div>
            </div>
            <div className="prices">
                <div className="amount">${props.item.price}</div>
                <div onClick={removeButton} className="remove"><u>Remove</u></div>
            </div>
        </div>
    );
};
