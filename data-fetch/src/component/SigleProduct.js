import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Stack } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContextProvider";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MyImage from "./MyImage";

const SigleProduct = (props) => {
  const [product, setProduct] = useState([]);
  const[hovered,setHovered] = useState(null)

  const Globalstate = useContext(ShopContext);
  const dispatch = Globalstate.dispatch;
  const state = Globalstate.state;
   

  let params = useParams();
  //console.log(params);
  //console.log(product?.image[0]?.url);

  const handleImages = () => {
    
  }
 
  const getAllData = async (e) => {
    try {
      const apiResult = await axios.get(
        `https://api.pujakaitem.com/api/products/${params.id}`
      );
      setProduct(apiResult.data);
      console.log(product?.image?.[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <div class="container">
        <div class="card" style={{boxShadow: "5px 10px 18px",marginTop:'1rem'}}>
          <div class="card-body">
            <div class="row">
              <div class="col-md-3">
               
                {product?.image?.map((element, index) => {
                  return (
                    <div className="col">
                      <img
                        src={element.url}
                        alt={element.filename}
                        key={index}
                        width="60%"
                        height="30%"
                        style={{margin:'17px',marginRight:'10px' }}
                        onMouseEnter={handleImages}
                        onMouseLeave={handleImages(null)}
                      />
                    </div>
                  );
                })}
              </div>
              <div class="col-md-3">
               
                <img
                  src={product?.image?.[0]?.url}
                  alt="Product-Image"
                  height="70%"
                  width="100%"
                 style={{marginRight:'200px'}}
                />
                <br/>
              </div>
              <div class="col-md-6">
               
                <h4>
                  {product.name}
                  <span className="float-end badge btn-sm btn-danger badge-pil">
                    Brand {product.brand}
                  </span>
                </h4>
                <p className="mb-1">
                MRP: <s className="ms-2">  {product.price}</s>
                </p>
                <p style={{color:'#2596be'}}>Deal of the day :42000</p>
                <p>{product.description}</p>
                <LocalShippingIcon color="primary"/>
                <p>Free Delivery</p>
                
                <p>Available:{product.stock}</p>
                <p>Brand:{product.brand}</p>
                <hr style={{ border:'2px solid blue'}}/>
                 
                 <p style={{color:'#2596be'}}>Color:</p>
                <div className="input-group">
                  <button type="button" className="input-group-text " style={{backgroundColor:'#2596be',color:'white'}}>
                    -
                  </button>
                  <input
                    type="text"
                    className=" text-center"
                    value="1" style={{width:'70px'}}
                  />
                  <button type="button" className="input-group-text" style={{backgroundColor:'#2596be',color:'white'}}>
                    +
                  </button>

                  
                </div>
                <Link to={`/cart`}>
                    <button
                      type="button"
                      className="btn btn-primary w-20 mt-2"
                      onClick={() =>
                        dispatch({ type: "ADD", payload: product })
                      }
                    >
                      Add to cart
                    </button>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigleProduct;
