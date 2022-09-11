import React, { useEffect, useState } from "react";

import { updateSellerOrder } from "../../services/api";
import { Button, ButtonToolbar } from "react-bootstrap";

import { ORDER_STATUS } from "./constants";

const OrderItem = ({order}) => {
  const [status, setOrderStatus] = useState(order.status);

  const approveOrder = async (event, orderId, currentStatus) => {
    if (currentStatus === ORDER_STATUS.received.value 
      || currentStatus === ORDER_STATUS.shipping.value
      || currentStatus === ORDER_STATUS.finished.value  
    ) {
      return;
    }

    setOrderStatus(ORDER_STATUS.received.value);
    // updateSellerOrder(orderId, {
    //   status: receiveStatus
    // });
  }

  const denyOrder = async (event, orderId, currentStatus) => {
    if (currentStatus === ORDER_STATUS.cancelled.value) {
      return;
    }

    setOrderStatus(ORDER_STATUS.cancelled.value);
    // updateSellerOrder(orderId, {
    //   status: cancelStatus
    // });
  }

  const getStatusClassName = (status) => {
    return ORDER_STATUS[status].color;
  }

  return (
    <tr key={order.id}>
      <td>{order.id}</td>
      <td>{order.payment_method}</td>
      <td>
        <Button 
          variant={getStatusClassName(status) + ' rounded'}
          disabled={true}
        >
          {status}
        </Button>
      </td>
      <td>{order.quantity}</td>
      <td>{order.total_price}</td>
      <td>
        <ButtonToolbar>
          <Button 
            variant="outline-success" 
            onClick={(e) => approveOrder(e, order.id, order.status)}
          >
            Approve
          </Button>
          <Button
            variant="danger"
            onClick={(e) => denyOrder(e, order.id, order.status)}
          >
            Deny
          </Button>
        </ButtonToolbar>
      </td>
    </tr>
  );
}

export default OrderItem;