import React from "react";
import './Product.css';
import YouTube from 'react-youtube';

const Product = (product_name, product_number, description, image, link) => {
    return (
        <div>
            <YouTube videoId={link.link}/>
        </div>
    );
}

export default Product;


/*
  product_number: String! #maybe should'nt be required?
  product_name: String
  packing_num: Int
  box_per_case: Int
  product_per_box: Int
  description: String
  image: String
  video_link: String
}
*/