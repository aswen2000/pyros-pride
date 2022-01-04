import React, { useState, useEffect } from 'react';
import "./admin.css";
import { API, Storage } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listProducts as ListProducts } from '../../graphql/queries';
import { createProduct as CreateProductMutation, deleteProduct as DeleteProductMutation } from '../../graphql/mutations';
import { Checkbox, TextField, Button } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";

const initialFormState = { 
  product_number: '',
  product_name: '',
  box_per_case: '',
  product_per_box: '',
  pieces_per_product: '',
  category: '',
  available: '',
  tags: '',
  description: '',
  image: '',
  video_link: '',
}

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#e5e5e5"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#e5e5e5"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#e5e5e5"
    }
  }
});

const textFieldStyles = {
  style: {
    color: "#e5e5e5",
  }
}

const Admin = () => {
  const classes = useStyles();

  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function onChange(e) {
    if (!e.target.files[0]) return
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name });
    await Storage.put(file.name, file);
    fetchProducts();
  }

  async function fetchProducts() {
    console.log("in fetchProducts")
    const apiData = await API.graphql({ query: ListProducts });
    console.log(apiData);
    const productsFromAPI = apiData.data.listProducts.items;
    await Promise.all(productsFromAPI.map(async product => {
      if (product.image) {
        const image = await Storage.get(product.image);
        product.image = image;
      }
      return product;
    }))
    setProducts(apiData.data.listProducts.items);
  }

  async function createProduct() {
    if (!formData.product_name || !formData.product_number){
      console.log("no name or product");
      return;
    }

    setFormData(initialFormState);

    console.log(formData);
    await API.graphql({ query: CreateProductMutation, variables: { input: formData } });
    if (formData.image) {
      const image = await Storage.get(formData.image);
      formData.image = image;
    }
    setProducts([ ...products, formData ]);
    setFormData(initialFormState);
  }

  async function deleteProduct({ id }) {
    const newProductsArray = products.filter(product => product.id !== id);
    setProducts(newProductsArray);
    await API.graphql({ query: DeleteProductMutation, variables: { input: { id } }});
  }

  return (
  <div className="App">
    <h1 className='add_product_header'>Add Product</h1>

    <div className='input_row'>
      <TextField
        className={classes.root}
        InputProps={textFieldStyles}
        InputLabelProps={textFieldStyles}
        id="product_name_input" 
        label="Product Name" 
        variant="outlined"
        sx={{marginRight: 1, marginLeft: 1}}
        onChange={e => setFormData({ ...formData, 'product_name': e.target.value})} 
        value={formData.product_name}
      />
      
      <TextField
        className={classes.root}
        InputProps={textFieldStyles}
        InputLabelProps={textFieldStyles}
        id="product_number_input" 
        label="Product Number" 
        variant="outlined"
        sx={{marginRight: 1, marginLeft: 1}}
        onChange={e => setFormData({ ...formData, 'product_number': e.target.value})} 
        value={formData.product_number}
      />
    </div>

    <div className='input_row'>
      <TextField
        className={classes.root}
        InputProps={textFieldStyles}
        InputLabelProps={textFieldStyles}
        id="box_per_case" 
        label="Boxes Per Case" 
        variant="outlined"
        sx={{marginRight: 1}}
        onChange={e => setFormData({ ...formData, 'box_per_case': e.target.value})} 
        value={formData.box_per_case}
      />
      <TextField
        className={classes.root}
        InputProps={textFieldStyles}
        InputLabelProps={textFieldStyles}
        id="product_per_box" 
        label="Product Per Box" 
        variant="outlined"
        sx={{marginRight: 1, marginLeft: 1}}
        onChange={e => setFormData({ ...formData, 'product_per_box': e.target.value})} 
        value={formData.product_per_box}
      />
      <TextField
        className={classes.root}
        InputProps={textFieldStyles}
        InputLabelProps={textFieldStyles}
        id="pieces_per_product" 
        label="Pieces Per Product" 
        variant="outlined"
        sx={{marginLeft: 1}}
        onChange={e => setFormData({ ...formData, 'pieces_per_product': e.target.value})} 
        value={formData.pieces_per_product}
      />
    </div>

    <div className='input_row'>
      <Checkbox
        className={classes.root}
      />
    </div>

    <div className='input_row'>
      <TextField
        className={classes.root}
        InputProps={textFieldStyles}
        InputLabelProps={textFieldStyles}
        fullWidth
        id="tags"
        label="Tags" 
        variant="outlined" 
        onChange={e => setFormData({ ...formData, 'tags': e.target.value})} 
        value={formData.tags}
      />
    </div>

    <div className='input_row'>
      <TextField
        className={classes.root}
        InputProps={textFieldStyles}
        InputLabelProps={textFieldStyles}
        fullWidth
        id="description" 
        label="Description" 
        variant="outlined" 
        onChange={e => setFormData({ ...formData, 'description': e.target.value})} 
        value={formData.description}
      />
    </div>

    <div className='input_row'>
      <TextField
        className={classes.root}
        InputProps={textFieldStyles}
        InputLabelProps={textFieldStyles}
        fullWidth
        id="video_link" 
        label="Youtube video URL" 
        variant="outlined" 
        onChange={e => setFormData({ ...formData, 'video_link': e.target.value})} 
        value={formData.video_link}
      />
    </div>

    <div className='input_row'>
      <input
        type="file"
        className='file_input'
        onChange={onChange}
      />
    </div>

    <div className='input_row'>
      <Button 
        onClick={createProduct}
        variant="contained"
        >
        Submit
      </Button>
    </div>

    {
      products.map(product => (
        <div key={product.id || product.product_name}>
          <h2>{product.product_name}</h2>
          <p>{product.product_number}</p>
          <button onClick={() => deleteProduct(product)}>Delete product</button>
          {
            product.image && <img src={product.image} style={{width: 400}} />
          }
        </div>
      ))
    }
    <AmplifySignOut />
  </div>
  );
}

export default withAuthenticator(Admin);