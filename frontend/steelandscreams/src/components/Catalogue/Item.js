import "./Catalogue.css";

import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';

import * as itemService from '../../services/itemService';

import { Link } from "react-router-dom";

export const Item = (props) => {

    return (
        <div className="item">
            <Link to={'/item/details'}>
                <img className="itemImg" src={props.item.image}></img>
            </Link>
            <h4 className="itemName">{props.item.name}</h4>
            <p className="itemPrice">{props.item.price}$</p>
        </div>
    );
};  