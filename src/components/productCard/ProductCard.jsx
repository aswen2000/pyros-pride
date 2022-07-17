/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./ProductCard.css";

const ProductCard = ({
    id,
    product_number,
    product_name,
    box_per_case,
    product_per_box,
    pieces_per_product,
    category,
    available,
    tags,
    description,
    image,
    video_link,
}) => {
    return (
        <div className="card">
            <div className="card-img">
                <img src={image} alt="..." />
            </div>
            <div className="card-title">
                <h3>{product_name}</h3>
                {/* <p>Eau de Toilette</p> */}
            </div>
            <div className="card-details">
                {/* <div className="price">
                    <span>Price</span>
                    <p>$139</p>
                </div>
                <div className="volume">
                    <span>Item Volume</span>
                    <p>100ml</p>
                </div> */}
                <p className="description">{description}</p>
            </div>
            <button className="details-btn" type="button">Details</button>
        </div>
    );
};

export default ProductCard;
