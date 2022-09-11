import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ImageUpload from './ImageUpload';
import { addSellerProduct } from "../../services/api";

const ProductForm = () => {

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productImageUrl, setProductImageUrl] = useState(null);

  const saveProduct = (e) => {
    const localUser = localStorage.getItem("localUser");
    // addSellerProduct(localUser.sellerId, {
    //   product_name: productName,
    //   product_price: productPrice,
    //   product_image_url: productImageUrl
    // });
    e.preventDefault();
    console.log({
      product_name: productName,
      product_price: productPrice,
      product_image_url: productImageUrl
    });
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formProductName">
        <Form.Label>Product name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="name"
          onChange={(e) => setProductName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formProductPrice">
        <Form.Label>Product price</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="price" 
          onChange={(e) => setProductPrice(e.target.value)} 
        />
      </Form.Group>

	    <ImageUpload onFileUploadSuccess={(url) => setProductImageUrl(url)} />
      <Button 
        variant="primary" 
        type="submit"
        onClick={(e) => saveProduct(e)}
      >
        Add
      </Button>
    </Form>
  );
}

export default ProductForm;