import React, { useState, useEffect } from "react";
import { API, Storage } from "aws-amplify";
import { useLocation } from "react-router-dom";
import { listProducts } from "../../graphql/queries";
// import "./home.css";
// import facebookLogo from '../../images/f_logo_RGB-Blue_58.png'
// import flashingThunderLogo from '../../images/long-logo.png'

const ProductDetails = () => {
    const location = useLocation();

    const [selectedProduct, setSelectedProduct] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // console.log("before fetch");
    // fetchProduct();
    // console.log("after fetch");

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

    return <div className="home">This is ProductDetails</div>;
};

export default ProductDetails;
