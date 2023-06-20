import "./Cart.css";

import { Item } from './Item';

import useAuth from "../../hooks/useAuth";
import useItems from "../../hooks/useItems";

import itemService from '../../services/itemService';

import { useState, useEffect } from 'react';

export const Cart = () => {

    const { auth } = useAuth();

    const [cartItems, setCartItems] = useState([]);

    const [userItems, setUserItems] = useState([]);

    useEffect(() => {
        setUserItems(auth.cartItems);
    }, [userItems]);

    useEffect(() => {
        userItems.map(x => {
            itemService.getOne(x)
                .then(res => setCartItems((state) => [...state, res]))
                .catch(err => console.error(err));
        });
    }, [userItems]);

    console.log(cartItems);

    return (
        <main>
            <div className="CartContainer">
                <div className="Header">
                    <h3 className="Heading">Cart</h3>
                    <h5 className="Action">Remove all</h5>
                </div>

                {cartItems ? cartItems.map(x => <Item key={x._id} item={x} />) : <h2>Nothing in cart.</h2>}

                <hr />
                <div className="checkout">
                    <div className="total">
                        <div>
                            <div className="Subtotal">Sub-Total</div>
                            <div className="items">{cartItems ? cartItems.length : '0'} items</div>
                        </div>
                        <div className="total-amount">$6.18</div>
                    </div>
                    <button class="button">Checkout</button></div>
            </div>
        </main>
    );
};