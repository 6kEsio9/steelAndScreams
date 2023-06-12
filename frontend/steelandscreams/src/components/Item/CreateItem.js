import * as itemService from "../../services/itemService";

import { useNavigate } from "react-router-dom";

import useAuth from '../../hooks/useAuth';

export const CreateItem = () => {

    const { auth } = useAuth();
    const nav = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        try{
            await itemService.create(formData, auth.token);
            nav('/catalogue')
        }catch(err){
            console.error(err);
        }
    };

    return(
        <div className="login-form">
            <h2>Create Item</h2>
            <form action="/items/create" onSubmit={onSubmit} method="POST">
                <label htmlFor="name">Item Name</label>
                <input type="text" id="name" name="name" placeholder="Metallica T-Shirt" />
                <label htmlFor="price">Item Price</label>
                <input type="text" id="price" name="price" placeholder="50.00$" />
                <label htmlFor="image">Item Image</label>
                <input type="text" id="image" name="image" placeholder="https://..." />
                <label htmlFor="availablity">Item Availability</label>
                <input type="text" id="availability" name="availability" placeholder="50" />
                <label htmlFor="size">Item Size</label>
                <input type="text" id="size" name="size" placeholder="XL" />
                <label htmlFor="gender">Item Gender</label>
                <input type="text" id="gender" name="gender" placeholder="Male/Female" />
                <label htmlFor="creator">Item Creator</label>
                <input type="text" id="creator" name="creator" placeholder="Metallica" />

                <input type="submit" value={"Create Item"}></input>
            </form>
        </div>
    );
};