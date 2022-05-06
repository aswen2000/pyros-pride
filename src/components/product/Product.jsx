/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from "react";
import YouTube from "react-youtube";
import {
    Card,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Grid,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import "./Product.css";

const Product = ({
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
}) => {
    const CardContentNoPadding = styled(CardContent)(`
        padding: 0;
        &:last-child {
        padding-bottom: 0;
        }
    `);

    return (
        <Grid item xs={12} md={6}>
            <Card sx={{ m: 3, width: 0.9 }}>
                <CardMedia /* sx={{ maxHeight: 400, maxWidth: "auto" }} */ component="img" image={image} alt="display img" />

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <CardContentNoPadding sx={{ pb: 0, pt: 0 }} className="card_content">
                            <Typography variant="h5" component="div">
                                {product_name}
                            </Typography>
                            <Typography gutterBottom variant="h7" component="div" sx={{ mt: 1 }}>
                                {product_number}
                            </Typography>
                        </CardContentNoPadding>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Card>
        </Grid>
    );
};

export default Product;
