import React, { useState, useEffect } from 'react';
// import './home.css';
// import facebookLogo from '../../images/f_logo_RGB-Blue_58.png'
// import flashingThunderLogo from '../../images/long-logo.png'
import { API, Storage } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listProducts as ListProducts } from '../../graphql/queries';
import { createProduct as CreateProductMutation, deleteProduct as DeleteProductMutation } from '../../graphql/mutations';

const initialFormState = { product_name: '', product_number: '' }

const Admin = () => {

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
      <h1>My Products</h1>
      <input
        onChange={e => setFormData({ ...formData, 'product_name': e.target.value})}
        placeholder="Product name"
        value={formData.product_name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'product_number': e.target.value})}
        placeholder="Product number"
        value={formData.product_number}
      />
      <input
        type="file"
        onChange={onChange}
      />
      <button onClick={createProduct}>Create product</button>
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