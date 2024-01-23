import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
  Table,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { ShopContext } from "../context/ShopContextProvider";

const Cart = () => {
  const [count, setCount] = useState(0);

  const Globalstate = useContext(ShopContext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;
  
  let totalCartPrice = 0;
  // useEffect(() => {
  //     getAllData()

  //   }, [])

  //   const getAllData = async () => {
  //     const apiResult = await axios.get(`https://fakestoreapi.com/products`)
  //     setCart(apiResult.data)

  //   }
  const incrementValue = () => {
   setCount(count + 1);
  };

  const decrementValue = () => {
    setCount(count - 1);
  };

  return (
    <Container>
      <h4 style={{ textAlign: "center", padding: "30px" }}>
        <b>SHOPPING CART</b>
      </h4>

      <div className="table-responsive">
        <Table className="table table-bordered">
          <thead>
            <tr>
              <th>ITEM</th>
              <th>TITLE</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>TOTAL PRICE</th>
              <th>REMOVE</th>
            </tr>
          </thead>
          <tbody>
            {state.map((item, index) => {
              totalCartPrice += item.price;
              return (
                <tr key={index}>
                  <td width="10%">
                    <Image
                      src={item?.image?.[0]?.url}
                      height="60px"
                      width="70px"
                      alt="product-image"
                      roundedCircle
                    />
                  </td>
                  <td width="15%">{item.name}</td>
                  <td width="15%">{item.price}</td>
                  <td width="15%">
                    <div className="input-group">
                      <button
                        type="button"
                        className="input-group-text"
                        onClick={decrementValue}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        className="form-control text-center"
                        value={count}
                      />
                      <button
                        type="button"
                        className="input-group-text"
                        onClick={incrementValue}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td width="15%">{totalCartPrice}</td>
                  <td width="10%">
                    <DeleteIcon
                      onClick={() =>
                        dispatch({ type: "REMOVE", payload: item })
                      }
                      fontSize="medium"
                      color="blue"
                      style={{ marginTop: "18px", marginLeft: "20px" }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      <div className="col-md-8" style={{ marginLeft: "52rem" }}>
        <div className="col-md-4">
          <div className="card card-body mt-3">
            <h4>Sub Total:</h4>
            <span className="float-end">{totalCartPrice}</span>

            <h4>Grand Total:</h4>
            <span className="float-end">{totalCartPrice}</span>
            <hr />
            <Link to="/checkout" className="btn btn-primary">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
