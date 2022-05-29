/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from "react";
import { Link } from "react-router-dom";
import {
    Card,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    TextField,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import styles from "./Product.css";

const Product = ({
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
    const CardContentNoPadding = styled(CardContent)(`
        padding: 0;
        &:last-child {
        padding-bottom: 0;
        }
    `);

    return (
        <Link to={`/products/${product_name}`} className="productDetailsLink">
            <Card sx={{ width: "100%" }}>
                <CardMedia
                    sx={{ maxHeight: "25vh", width: "auto", maxWidth: "auto" }}
                    component="img"
                    image={image}
                    alt="display img"
                />

                <CardContentNoPadding sx={{ pb: 0, pt: 0 }} className="card_content">
                    <Typography variant="h5" component="div">
                        {product_name}
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div" sx={{ mt: 1 }}>
                        {product_number}
                    </Typography>
                </CardContentNoPadding>
            </Card>
        </Link>
    );
};

export default Product;
