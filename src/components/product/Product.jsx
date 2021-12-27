import React from "react";
import './Product.css';
import YouTube from 'react-youtube';

const Product = (link) => {
    return (
        <div>
            <YouTube videoId={link.link}/>
        </div>
    );
}

export default Product;