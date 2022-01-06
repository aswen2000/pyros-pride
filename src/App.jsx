import React, { useEffect } from "react";
import "./App.css";
import { API, Storage } from "aws-amplify";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { listProducts as ListProducts } from "./graphql/queries";
import { Home, About, Contact, Locations, Products, ThunderWear, Admin } from "./pages/index";
import { Header, Footer } from "./components/index";

function App() {
    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {
        const apiData = await API.graphql({ query: ListProducts });
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
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/locations" component={Locations} />
                    <Route path="/products" component={Products} />
                    <Route path="/thunderwear" component={ThunderWear} />
                    <Route path="/admin" component={Admin} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
