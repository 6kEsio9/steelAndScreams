import "./Cart.css";

import { Item } from './Item';

import useAuth from "../../hooks/useAuth";

import itemService from '../../services/itemService';

import { useState, useEffect } from 'react';

export const Cart = () => {

    const { auth } = useAuth();

    const [cartItems, setCartItems] = useState([]);
    const [price, setPrice] = useState(0);

    // useEffect(() => {
    //     setUserItems(auth.cartItems);
    // }, [auth.cartItems]);

    useEffect(() => {
        auth.cartItems.map(x => {
            itemService.getOne(x)
                .then(res => {
                    setCartItems((state) => [...state, res]);
                    setPrice((state) => state += +res.price);
                })
                .catch(err => console.error(err));
        });
    }, [auth.cartItems]);

    return (
        <main>
            <div className="CartContainer">
                <div className="Header">
                    <h3 className="Heading">Cart</h3>
                    <h5 className="Action">Remove all</h5>
                </div>

                {cartItems ? cartItems.map(x => <Item key={x._id} item={x} auth={auth} />) : <h2>Nothing in cart.</h2>}

                <hr />
                <div className="checkout">
                    <div className="total">
                        <div>
                            <div className="Subtotal">Sub-Total</div>
                            <div className="items">{cartItems ? cartItems.length : '0'} items</div>
                        </div>
                        <div className="total-amount">${price ? price : '0'}</div>
                    </div>
                    <button class="button">Checkout</button></div>
            </div>
        </main>
    );
};