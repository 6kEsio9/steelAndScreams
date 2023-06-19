import "./Cart.css";

import { Item } from './Item';

import useAuth from "../../hooks/useAuth";
import useItems from "../../hooks/useItems";

import { useState, useEffect } from 'react';

export const Cart = () => {

    const { auth } = useAuth();

    const [userItems, setUserItems] = useState([]);

    useEffect(() => {
        setUserItems(auth.cartItems)
    }, [userItems])

    console.log(userItems);

    return (
        <main>
            <div className="CartContainer">
                <div className="Header">
                    <h3 className="Heading">Cart</h3>
                    <h5 className="Action">Remove all</h5>
                </div>

                {userItems ? userItems.map(x => <Item key={x._id} item={x} />) : <h2>Nothing in cart.</h2>}

                <hr />
                    <div className="checkout">
                        <div className="total">
                            <div>
                                <div className="Subtotal">Sub-Total</div>
                                <div className="items">{userItems ? userItems.length : '0'} items</div>
                            </div>
                            <div className="total-amount">$6.18</div>
                        </div>
                        <button class="button">Checkout</button></div>
            </div>
        </main>
    );
};