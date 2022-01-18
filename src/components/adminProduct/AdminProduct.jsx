/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
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
    Grid,
    Checkbox,
    Select,
    MenuItem,
    OutlinedInput,
    Box,
    Chip,
} from "@mui/material";
import { ExpandMore, Edit } from "@mui/icons-material";
import { styled, useTheme } from "@mui/material/styles";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import YouTube from "react-youtube";
import "./AdminProduct.css";

const CustomColorCheckbox = withStyles({
    root: {
        color: "#000000",
        "&$checked": {
            color: "#2196f3",
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles({
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#e5e5e5",
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#e5e5e5",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#e5e5e5",
        },
    },
});

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
    };
}

const CardContentNoPadding = styled(CardContent)(`
padding: 0;
&:last-child {
padding-bottom: 0;
}
`);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const opts = {
    height: "202",
    width: "360",
};

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
        // tags,
        description,
        image,
        video_link,
    } = product;

    const classes = useStyles();
    const theme = useTheme();

    const [productData, setProductData] = useState(product);
    const [editMode, setEditMode] = useState(false);
    const [selectedTags, setSelectedTags] = useState([]);

    const handleCancel = () => {
        setProductData(product);
        setEditMode(false);
        setSelectedTags([]);
    };

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectedTags(typeof value === "string" ? value.split(",") : value);
    };

    const tags = [
        "Oliver Hansen",
        "Van Henry",
        "April Tucker",
        "Ralph Hubbard",
        "Omar Alexander",
        "Carlos Abbott",
        "Miriam Wagner",
        "Bradley Wilkerson",
        "Virginia Andrews",
        "Kelly Snyder",
    ];

    return editMode ? (
        <Card className="card" sx={{ width: 0.5 }}>
            <div>
                <div className="media_container">
                    <CardMedia
                        sx={{ maxHeight: "auto", maxWidth: 360 }}
                        component="img"
                        image={productData.image}
                        alt="display img"
                    />
                </div>
                <div className="media_container">
                    <YouTube videoId={video_link} opts={opts} />
                </div>
            </div>

            <div>
                <div className="media_input_container">
                    <input
                        type="file"
                        accept="image/*"
                        className="edit_file_input"
                        onChange={(e) =>
                            setProductData({ ...productData, image: URL.createObjectURL(e.target.files[0]) })
                        }
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

            <Grid container alignItems="center" justifyContent="center">
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

            <div>
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

            <Grid container>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <TextField
                        defaultValue={box_per_case}
                        label="Boxes Per Case"
                        id="box_per_case"
                        variant="outlined"
                        sx={{ mb: 1, mt: 1, width: 0.75 }}
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
                        sx={{ mb: 1, mt: 1, width: 0.75 }}
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
                        sx={{ mb: 1, mt: 1, width: 0.75 }}
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
            <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Select
                        labelId="tag-select-label"
                        id="tag-select"
                        multiple
                        value={selectedTags}
                        onChange={handleChange}
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
                            <MenuItem key={name} value={name} style={getStyles(name, selectedTags, theme)}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </Grid>
            </Grid>

            <Button onClick={() => handleDelete(id)}>delete btn</Button>
            <Button onClick={handleCancel}>cancel</Button>
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
