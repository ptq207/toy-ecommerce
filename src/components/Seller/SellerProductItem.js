import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

import { } from "../../services/api";

const ProductItem = ({ product }) => {

  const deleteRow = (e, productId) => {

  }

  return (
    <tr key={product.id}>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        <img
          src={product.image}
          className="img-thumbnail"
          width="80"
          height="80"
        />
      </td>
      <td>
        <ButtonToolbar>
          <Button 
            bsStyle="success" 
            href={"/sellercenter/products/" + product.id}
          >
            Edit
          </Button>
          <Button
            bsStyle="danger"
            onClick={(e) => this.deleteRow(e, product.id)}
          >
            Delete
          </Button>
        </ButtonToolbar>
      </td>
    </tr>
  );
}

export default ProductItem;