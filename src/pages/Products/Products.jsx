import React, { useState, useEffect } from "react";
import { API, Storage } from "aws-amplify";
import { ImageList, ImageListItem, CircularProgress, Grid } from "@mui/material";
import Product from "../../components/product/Product";
import ImageGallery from "./ProductsUtils";
import "./Products.css";
import { listProducts } from "../../graphql/queries";
import { AdminProduct } from "../../components";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {
        const apiData = await API.graphql({ query: listProducts });
        console.log(apiData);
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
        setProducts(apiData.data.listProducts.items);
        setIsLoaded(true);
    }

    return (
        <div className="productsDiv">
            {isLoaded ? (
                <Grid
                    className="productsContainer"
                    container
                    /* direction="column" */
                    alignItems="center"
                    justifyContent="center"
                >
                    {products.map((item) => (
                        <Product
                            product_name={item.product_name}
                            product_number={item.product_number}
                            description={item.description}
                            image={item.image}
                            link={item.link}
                        />
                    ))}
                </Grid>
            ) : (
                <CircularProgress />
            )}
        </div>
    );
};

export default Products;
