/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useEffect } from "react";
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

    return (
        <Card className="card" sx={{ maxWidth: 475 }}>
            <CardMedia sx={{ maxHeight: 400, maxWidth: "auto" }} component="img" image={image} alt="display img" />
            <CardContent>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{product_name}</Typography>
                        <Typography sx={{ color: "text.secondary" }}>{product_number}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </CardContent>
            <Button onClick={() => handleDelete(id)}>delete btn</Button>
        </Card>
    );
};

export default AdminProduct;
