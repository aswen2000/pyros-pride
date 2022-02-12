/* eslint-disable react/prop-types */
import * as React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import { styled } from "@mui/material/styles";
import Product from "../../components/product/Product";
import "./Products.css";

const ImageGalleryList = styled("ul")(({ theme }) => ({
    display: "grid",
    padding: 0,
    // gap: 24,
    rowGap: 16,
    [theme.breakpoints.up("sm")]: {
        gridTemplateColumns: "repeat(1, 1fr)",
    },
    [theme.breakpoints.up("md")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.up("lg")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
    },
}));

export default function ImageGallery({ imageData }) {
    return (
        <ImageGalleryList className="image_list">
            {imageData.map((image) => (
                <ImageListItem key={image.img} className="image_list_item">
                    <Product
                        className="image_list_product"
                        product_name={image.product_name}
                        product_number={image.product_number}
                        description={image.description}
                        image={image.image}
                        link={image.link}
                    />
                </ImageListItem>
            ))}
        </ImageGalleryList>
    );
}
