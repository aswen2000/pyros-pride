/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from "react";
import YouTube from "react-youtube";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./Product.css";

const Product = ({ product_name, product_number, description, image, link }) => {
    // const opts = {
    //     height: '270',
    //     width: '480'
    // };

    return (
        <Card sx={{ maxWidth: 475 }}>
            <CardMedia sx={{ maxHeight: 400, maxWidth: "auto" }} component="img" image={image} alt="display img" />
            <CardContent>
                <Typography variant="h5" component="div">
                    {product_name}
                </Typography>
                <Typography gutterBottom variant="h7" component="div" sx={{ mt: 1 }}>
                    {product_number}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
                    {/* <YouTube videoId={link} opts={opts}/> */}
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Product;
