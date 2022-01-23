/* eslint-disable camelcase */
/* eslint-disable prefer-template */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import "./admin.css";
import { API, Storage } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { TextField, Button, Typography, Select, OutlinedInput, MenuItem, Box, Chip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { listProducts as ListProducts } from "../../graphql/queries";
import {
    createProduct as CreateProductMutation,
    deleteProduct as DeleteProductMutation,
} from "../../graphql/mutations";
import { AdminProduct } from "../../components";
import { CustomColorCheckbox, useStyles, getStyles, MenuProps, textFieldStyles } from "./adminStylingUtils";

const initialFormState = {
    product_number: "",
    product_name: "",
    box_per_case: null,
    product_per_box: null,
    pieces_per_product: null,
    category: "",
    available: false,
    tags: [],
    description: "",
    image: "",
    video_link: "",
};

const Admin = () => {
    const classes = useStyles();
    const theme = useTheme();

    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState(initialFormState);

    // TODO: Delete and replace with call to DB
    const tags = ["New", "Old", "Sale", "Clearance", "Patriotic"];

    useEffect(() => {
        fetchProducts();
    }, []);

    async function onChange(e) {
        if (!e.target.files[0]) return;
        const file = e.target.files[0];
        setFormData({ ...formData, image: file.name });
        await Storage.put(file.name, file);
        fetchProducts();
    }

    const handleTagsChange = (event) => {
        const {
            target: { value },
        } = event;
        setFormData({ ...formData, tags: typeof value === "string" ? value.split(",") : value });
    };

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
        setProducts(apiData.data.listProducts.items);
    }

    async function createProduct() {
        if (!formData.product_name || !formData.product_number) {
            console.log(formData);
            return;
        }

        setFormData(initialFormState);

        try {
            await API.graphql({ query: CreateProductMutation, variables: { input: formData } });
        } catch (error) {
            console.log(error);
        }

        if (formData.image) {
            const image = await Storage.get(formData.image);
            formData.image = image;
        }
        setProducts([...products, formData]);
        setFormData(initialFormState);
    }

    async function deleteProduct({ id }) {
        const newProductsArray = products.filter((product) => product.id !== id);
        setProducts(newProductsArray);
        await API.graphql({ query: DeleteProductMutation, variables: { input: { id } } });
    }

    const handleDelete = (id) => {
        deleteProduct({ id });
    };

    return (
        <div className="App">
            <h1 className="add_product_header">Add Product</h1>
            <div className="input_row">
                <TextField
                    className={classes.root}
                    InputProps={textFieldStyles}
                    InputLabelProps={textFieldStyles}
                    id="product_name_input"
                    label="Product Name"
                    variant="outlined"
                    sx={{ marginRight: 1, marginLeft: 1 }}
                    onChange={(e) => setFormData({ ...formData, product_name: e.target.value })}
                    value={formData.product_name}
                />

                <TextField
                    className={classes.root}
                    InputProps={textFieldStyles}
                    InputLabelProps={textFieldStyles}
                    id="product_number_input"
                    label="Product Number"
                    variant="outlined"
                    sx={{ marginRight: 1, marginLeft: 1 }}
                    onChange={(e) => setFormData({ ...formData, product_number: e.target.value })}
                    value={formData.product_number}
                />
            </div>

            <div className="input_row">
                <TextField
                    className={classes.root}
                    InputProps={textFieldStyles}
                    InputLabelProps={textFieldStyles}
                    id="box_per_case"
                    label="Boxes Per Case"
                    variant="outlined"
                    sx={{ marginRight: 1 }}
                    onChange={(e) => setFormData({ ...formData, box_per_case: e.target.value })}
                    value={formData.box_per_case}
                />
                <TextField
                    className={classes.root}
                    InputProps={textFieldStyles}
                    InputLabelProps={textFieldStyles}
                    id="product_per_box"
                    label="Product Per Box"
                    variant="outlined"
                    sx={{ marginRight: 1, marginLeft: 1 }}
                    onChange={(e) => setFormData({ ...formData, product_per_box: e.target.value })}
                    value={formData.product_per_box}
                />
                <TextField
                    className={classes.root}
                    InputProps={textFieldStyles}
                    InputLabelProps={textFieldStyles}
                    id="pieces_per_product"
                    label="Pieces Per Product"
                    variant="outlined"
                    sx={{ marginLeft: 1 }}
                    onChange={(e) => setFormData({ ...formData, pieces_per_product: e.target.value })}
                    value={formData.pieces_per_product}
                />
            </div>

            <div className="input_row">
                <Typography className="checkbox_label">Currently Available</Typography>
                <CustomColorCheckbox
                    className={classes.root}
                    onChange={(e) => setFormData({ ...formData, available: e.target.checked })}
                    value={formData.available}
                    id="pieces_per_product"
                    label="Pieces Per Product"
                />
            </div>

            <div className="input_row">
                <TextField
                    className={classes.root}
                    InputProps={textFieldStyles}
                    InputLabelProps={textFieldStyles}
                    fullWidth
                    id="category"
                    label="Category"
                    variant="outlined"
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    value={formData.category}
                />
            </div>

            <div className="input_row">
                <Select
                    labelId="tag-select-label"
                    label="Tags"
                    id="tag-select"
                    sx={{ width: 1, color: "white" }}
                    multiple
                    className={classes.select}
                    classes={{ icon: classes.icon }}
                    value={formData.tags}
                    onChange={handleTagsChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {tags.map((name) => (
                        <MenuItem key={name} value={name} style={getStyles(name, formData.tags, theme)}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </div>

            <div className="input_row">
                <TextField
                    className={classes.root}
                    InputProps={textFieldStyles}
                    InputLabelProps={textFieldStyles}
                    fullWidth
                    id="description"
                    label="Description"
                    variant="outlined"
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    value={formData.description}
                />
            </div>

            <div className="input_row">
                <TextField
                    className={classes.root}
                    InputProps={textFieldStyles}
                    InputLabelProps={textFieldStyles}
                    fullWidth
                    id="video_link"
                    label="Youtube video URL"
                    variant="outlined"
                    onChange={(e) => setFormData({ ...formData, video_link: e.target.value })}
                    value={formData.video_link}
                />
            </div>

            <div className="input_row">
                <input type="file" className="file_input" onChange={onChange} />
            </div>

            <div className="input_row">
                <Button onClick={createProduct} variant="contained">
                    Submit
                </Button>
            </div>

            {products.map((product) => (
                <AdminProduct handleDelete={handleDelete} product={product} />
            ))}
            <AmplifySignOut />
        </div>
    );
};

export default withAuthenticator(Admin);
