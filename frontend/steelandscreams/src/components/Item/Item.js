import "./Items.css";

import { useParams } from "react-router-dom";

import useItems from "../../hooks/useItems";
import useAuth from "../../hooks/useAuth";

export const Item = () => {

    const { auth } = useAuth();

    const itemId = useParams('id').id;

    const [item, setItems] = useItems(itemId);

    // console.log(item);
    console.log(auth);

    const addToCart = (e) => {
        e.preventDefault();
        console.log(1);
    }

    return (
        <div class="v1_3">

            <div class="v1_7" onClick={addToCart}>
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
                    {(item ? `${item.price}$` : "")}
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