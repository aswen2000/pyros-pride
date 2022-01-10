/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import "./AdminProduct.css";

const AdminProduct = ({ handleAdd }) => {
    // const {
    //     product_number,
    //     product_name,
    //     box_per_case,
    //     product_per_box,
    //     pieces_per_product,
    //     category,
    //     available,
    //     tags,
    //     description,
    //     image,
    //     video_link,
    // } = product;

    // useEffect(() => {
    //     func(product_name);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    return (
        <Card className="card" sx={{ maxWidth: 475 }}>
            {/* <CardMedia sx={{ maxHeight: 400, maxWidth: "auto" }} component="img" image={image} alt="display img" /> */}
            {/* <CardContent>
                <Typography variant="h5" component="div">
                    {product_name}
                </Typography>
                <Typography gutterBottom variant="h7" component="div" sx={{ mt: 1 }}>
                    {product_number}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
                    {description}
                </Typography>
            </CardContent> */}
            <Button onClick={handleAdd}>Add btn</Button>
        </Card>
    );
};

export default AdminProduct;
