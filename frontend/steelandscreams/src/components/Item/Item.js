import "./Items.css";

import { useParams } from "react-router-dom";

import useItems from "../../hooks/useItems";
import useAuth from "../../hooks/useAuth";

import * as itemService from '../../services/itemService';

export const Item = () => {

    const { auth } = useAuth();

    const itemId = useParams('id').id;

    const [items, setItems] = useItems();
    
    const item = items.filter(x => x._id == itemId)[0];

    const cartButton = async (e) => {
        e.preventDefault();
        if (auth) {
            await itemService.addToCart(itemId, auth._id, auth.token);
        }
    }

    return (
        <div class="v1_3">

            <div class="v1_7" onClick={cartButton}>
                <span class="v1_12">
                    Add to cart
                </span>
            </div>
            <div class="v1_13">
                <div class="v1_14">
                    <img src={(item ? `${item.image}` : "")}></img>
                </div>
            </div>
            <div class="v1_22">
                <span class="v1_24">
                    {(item ? `$${item.price}` : "")}
                </span>
            </div>
            <div class="v1_27">

            </div>
            <div class="v1_38">
                <span class="v1_39">
                    {(item ? `${item.name}` : "")}
                </span>
            </div>
            <div class="v1_44">
                <span class="v1_45">
                    CREATOR
                </span>
                <span class="v1_48">
                    {(item ? `${item.creator}` : "")}
                </span>
            </div>
        </div>
    );
};  