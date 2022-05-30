import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import ReactPlayer from "react-player/youtube";
import { API, Storage } from "aws-amplify";
import { useLocation } from "react-router-dom";
import { listProducts } from "../../graphql/queries";
import "./ProductDetails.css";

const ProductDetails = () => {
    const location = useLocation();

    const [selectedProduct, setSelectedProduct] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetchProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // TODO: set up graphQL query to only grab correct product
    async function fetchProduct() {
        const apiData = await API.graphql({ query: listProducts });
        const productsFromAPI = apiData.data.listProducts.items;
        await Promise.all(
            productsFromAPI.map(async (product) => {
                if (product.image) {
                    const image = await Storage.get(product.image);
                    product.image = image;
                }
                return product;
            })
        );
        const tempProductName = location.pathname.split("/")[2];
        const tempSelectedProduct = apiData.data.listProducts.items.find(
            (product) => product.product_name === tempProductName
        );
        setSelectedProduct(tempSelectedProduct);
        setIsLoaded(true);
    }

    return (
        <Grid container justifyContent="center">
            <Typography className="productName" variant="h4" gutterBottom>
                {selectedProduct.product_name}
            </Typography>
            <Grid item container xs={12} justifyContent="center">
                <ReactPlayer
                    className="videoPlayer"
                    url="https://www.youtube.com/watch?v=lk0-yDyLqSE"
                    controls="true"
                    width="100%"
                    height="100%"
                />
            </Grid>
        </Grid>
    );
};

export default ProductDetails;
