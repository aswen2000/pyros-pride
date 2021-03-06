/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import {
    Card,
    CardMedia,
    Button,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    TextField,
    Grid,
    Select,
    MenuItem,
    OutlinedInput,
    Box,
    Chip,
    InputLabel,
    FormControl,
    ListItemText,
    Checkbox,
} from "@mui/material";
import { ExpandMore, Edit } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { API } from "aws-amplify";
import {
    videoSizeOpts,
    MenuProps,
    CardContentNoPadding,
    getStyles,
    useStyles,
    CustomColorCheckbox,
} from "./adminProductUtils";
import "./AdminProduct.css";
import { updateProduct as updateProductMutation } from "../../graphql/mutations";
import tagOptions from "../../utils";

const AdminProduct = ({ handleDelete, product }) => {
    const {
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
    } = product;

    const classes = useStyles();
    const theme = useTheme();

    const [productData, setProductData] = useState(product);
    const [editMode, setEditMode] = useState(false);
    const [selectedTags, setSelectedTags] = useState([]); // TODO: should be included within productData

    const handleCancel = () => {
        setProductData(product);
        setEditMode(false);
        setSelectedTags([]);
    };

    useEffect(() => {
        delete product.updatedAt;
        delete product.createdAt;
        setProductData({ ...productData, image: product.image.split("?")[0].split("/")[4]});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectedTags(typeof value === "string" ? value.split(",") : value);
    };

    async function handleSave(event) {
        console.log(event);
        console.log(productData);

        if (!productData.product_name || !productData.product_number) {
            console.log("name/number is null");
            return;
        }

        try {
            await API.graphql({ query: updateProductMutation, variables: { input: productData } });
            // eslint-disable-next-line no-restricted-globals
            location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    return editMode ? (
        <Card className="card" sx={{ width: 0.5 }}>
            <div>
                <div className="media_container">
                    <CardMedia
                        sx={{ maxHeight: "auto", maxWidth: 360 }}
                        component="img"
                        image={image}
                        alt="display img"
                    />
                </div>
                <div className="media_container">
                    <YouTube videoId={video_link} opts={videoSizeOpts} />
                </div>
            </div>

            <div className="row">
                <div className="media_input_container">
                    <input
                        type="file"
                        accept="image/*"
                        className="edit_file_input"
                        onChange={(e) => {
                            setProductData({ ...productData, image: e.target.files[0].name });
                            console.log(e.target.files[0].name);
                        }}
                    />
                </div>
                <div className="media_input_container">
                    <TextField
                        defaultValue={video_link}
                        label="Link"
                        id="link"
                        variant="outlined"
                        sx={{ mb: 1, mt: 1 }}
                        size="small"
                        // onChange={(e) => setFormData({ ...formData, product_per_box: e.target.value })}
                        // value={formData.product_per_box}
                    />
                </div>
            </div>

            <Grid container className="row" alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <TextField
                        defaultValue={product_name}
                        label="Product Name"
                        id="product_name"
                        variant="outlined"
                        sx={{ mb: 1, mt: 2, ml: 1, mr: 1 }}
                        size="small"
                        onChange={(e) => setProductData({ ...productData, product_name: e.target.value })}
                        value={productData.product_name}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <TextField
                        defaultValue={product_number}
                        label="Product Number"
                        id="product_number"
                        variant="outlined"
                        sx={{ mb: 1, mt: 2, ml: 1, mr: 1 }}
                        size="small"
                        onChange={(e) => setProductData({ ...productData, product_number: e.target.value })}
                        value={productData.product_number}
                    />
                </Grid>
            </Grid>

            <div className="row">
                <TextField
                    defaultValue={description}
                    label="Description"
                    id="description"
                    variant="outlined"
                    sx={{ mb: 1, mt: 1, width: 0.75 }}
                    size="small"
                    multiline
                    onChange={(e) => setProductData({ ...productData, description: e.target.value })}
                    value={productData.description}
                />
            </div>

            <Grid className="row" container>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <TextField
                        defaultValue={box_per_case}
                        label="Boxes Per Case"
                        id="box_per_case"
                        variant="outlined"
                        sx={{ mb: 1, mt: 1, width: 0.85 }}
                        size="small"
                        multiline
                        onChange={(e) => setProductData({ ...productData, box_per_case: e.target.value })}
                        value={productData.box_per_case}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <TextField
                        defaultValue={product_per_box}
                        label="Product Per Box"
                        id="product_per_box"
                        variant="outlined"
                        sx={{ mb: 1, mt: 1, width: 0.85 }}
                        size="small"
                        multiline
                        onChange={(e) => setProductData({ ...productData, product_per_box: e.target.value })}
                        value={productData.product_per_box}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <TextField
                        defaultValue={pieces_per_product}
                        label="Pieces Per Box"
                        id="pieces_per_product"
                        variant="outlined"
                        sx={{ mb: 1, mt: 1, width: 0.85 }}
                        size="small"
                        multiline
                        onChange={(e) => setProductData({ ...productData, pieces_per_product: e.target.value })}
                        value={productData.pieces_per_product}
                    />
                </Grid>
            </Grid>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <span>
                        <Typography className="available_label">Currently Available</Typography>
                    </span>
                    <span>
                        <CustomColorCheckbox
                            className={classes.root}
                            defaultValue={available}
                            onChange={(e) => setProductData({ ...productData, available: e.target.checked })}
                            value={productData.available}
                            id="pieces_per_product"
                            label="Pieces Per Product"
                        />
                    </span>
                </Grid>
            </Grid>
            <div>
                <FormControl sx={{ width: 0.75 }}>
                    <InputLabel id="tag-select-label">Tags</InputLabel>
                    <Select
                        labelId="tag-select-label"
                        id="tag-select"
                        sx={{ width: 1 }}
                        multiple
                        value={selectedTags}
                        onChange={handleChange}
                        label="Tags"
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
                        {tagOptions.map((option) => (
                            <MenuItem key={option} value={option} style={getStyles(option, selectedTags, theme)}>
                                <Checkbox
                                    sx={{ m: 0, mr: 1, p: 0 }}
                                    size="small"
                                    checked={selectedTags.indexOf(option) > -1}
                                />
                                <ListItemText primary={option} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>

            <Button onClick={() => handleDelete(id)}>Delete</Button>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button onClick={() => handleSave()}>Save</Button>
        </Card>
    ) : (
        <Card className="card" sx={{ width: 0.4 }}>
            <div className="card_container">
                <CardMedia sx={{ maxHeight: 400, maxWidth: "auto" }} component="img" image={image} alt="display img" />
                <Edit className="edit_btn" onClick={() => setEditMode(true)} />
            </div>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <CardContentNoPadding sx={{ pb: 0, pt: 0 }} className="card_content">
                        <Typography>{product_name}</Typography>
                        <Typography sx={{ color: "text.secondary", pb: 0 }}>{product_number}</Typography>
                    </CardContentNoPadding>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Card>
    );
};

export default AdminProduct;
