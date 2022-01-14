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
} from "@mui/material";
import { ExpandMore, Delete, MoreVert, Edit } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import YouTube from "react-youtube";
import "./AdminProduct.css";

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

    const [productData, setProductData] = useState(product);

    // console.log(image);

    const [editMode, setEditMode] = useState(true);
    // const [productData, setProductData] = useState(product);

    const CardContentNoPadding = styled(CardContent)(`
        padding: 0;
        &:last-child {
        padding-bottom: 0;
        }
    `);

    const opts = {
        height: "202",
        width: "360",
    };

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
                        placeholder="Link"
                        id="link"
                        variant="outlined"
                        sx={{ mb: 1 }}
                        // onChange={(e) => setFormData({ ...formData, product_per_box: e.target.value })}
                        // value={formData.product_per_box}
                    />
                </div>
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
            {/* <Button onClick={() => handleDelete(id)}>delete btn</Button> */}
        </Card>
    ) : (
        <Card className="card" sx={{ width: 0.4 }}>
            <div className="card_container">
                <CardMedia sx={{ maxHeight: 400, maxWidth: "auto" }} component="img" image={image} alt="display img" />
                <Delete className="delete_btn" onClick={() => handleDelete(id)} />
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
