import React, { useState, useEffect } from "react";
import { API, Storage } from "aws-amplify";
import { ImageList, ImageListItem, CircularProgress } from "@mui/material";
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
        <div>
            {isLoaded ? <ImageGallery imageData={products} /> : <CircularProgress />}

            {/* <ImageList className="image_list" sx={{ width: 0.65 }} variant="masonry" cols={2} gap={8}>
                {products.map((item) => (
                    <ImageListItem key={item.img}>
                        <Product
                            product_name={item.product_name}
                            product_number={item.product_number}
                            description={item.description}
                            image={item.image}
                            link={item.link}
                        />
                    </ImageListItem>
                ))}
            </ImageList> */}
        </div>
    );
};

export default Products;
