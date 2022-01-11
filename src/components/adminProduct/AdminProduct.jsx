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
} from "@mui/material";
import { ExpandMore, Delete, MoreVert, Edit } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
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

    const [editMode, setEditMode] = useState(false);
    const [productData, setProductData] = useState(product);

    const CardContentNoPadding = styled(CardContent)(`
        padding: 0;
        &:last-child {
        padding-bottom: 0;
        }
    `);

    const handleEdit = () => {
        console.log(id)
    }

    return (
        <Card className="card" sx={{ maxWidth: 475 }}>
            <div className="card_container">
                <CardMedia sx={{ maxHeight: 400, maxWidth: "auto" }} component="img" image={image} alt="display img" />
                <Delete className="delete_btn" onClick={() => handleDelete(id)} />
                <Edit className="edit_btn" onClick={handleEdit} />
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
    );
};

export default AdminProduct;
