import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./GetData.css";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import GridViewSharpIcon from "@mui/icons-material/GridViewRounded";

const GetData = () => {
  const [productData, setProductData] = useState([]);
  const [sortOrder, setOrder] = useState("ascending");
  const [view, setView] = useState(true);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    try {
      const apiResult = await axios.get(
        "https://api.pujakaitem.com/api/products"
      );
      setProductData(apiResult.data);
    } catch (error) {
      console.log(error);
    }
  };

  const sortedData = (e) => {
    console.log(e.target.value);
    if ("ascending" === e.target.value) {
      const sortedData = [...productData];
      const result = sortedData.sort((a, b) => a.name.localeCompare(b.name));
      setProductData(result);
    } else if ("descending" === e.target.value) {
      const sortedDescending = [...productData];
      const result1 = sortedDescending.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      setProductData(result1);
    } else if ("low" === e.target.value) {
      const sortedLow = [...productData];
      const result3 = sortedLow.sort((a, b) => a.price - b.price);
      console.log(result3);
      setProductData(result3);
    } else {
      const sortedHigh = [...productData];
      const result4 = sortedHigh.sort((a, b) => b.price - a.price);
      setProductData(result4);
    }
  };

  return (
    <Container>
      <Row
        style={{
          borderRadius: "1px solid",
          padding: "5px",
          boxShadow: "5px 10px 18px",
          marginTop: "1rem",
          marginRight: "5rem",
        }}
      >
        <Col>
          <button onClick={() => setView(false)}>
            <GridViewSharpIcon fontSize="small" style={{marginRight:'4px'}} />
          </button>
          
          <button onClick={() => setView(true)}>
            <ViewHeadlineIcon fontSize="small" />
          </button>
        </Col>
        <Col style={{ marginLeft: "10rem" }}>
          <p>Total Product:{productData?.length}</p>
        </Col>
        <Col>
          <select
            onChange={sortedData}
            style={{
              padding: "8px 30px",
              marginTop: "5px",
              borderRadius: "10px",
              fontWeight: "20px",
              marginLeft: "5rem",
            }}
          >
            <option>Preferences</option>
            <option value="ascending">(a-z)</option>
            <option value="descending">(z-a)</option>
            <option value="low">low to high</option>
            <option value="high">high to low</option>
          </select>
        </Col>
      </Row>

      <Row>
        {productData?.map((data, index) => {
          return view ? (
            <Col lg={4} md={4} className="mt-4" key={index}>
              <Card className="card h-100" style={{ width: "18rem" }}>
                <Link
                  to={`single/${data.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card.Img
                    variant="top"
                    src={data.image}
                    height="200vh"
                    width="100px"
                  />
                  <Card.Body>
                    <Card.Text>{data.name}</Card.Text>
                    <Card.Text>Price: {data.price}</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ) : (
            <Row>
            <Card className="card h-100" style={{ width: "18rem" }}>
            <Link
              to={`single/${data.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card.Img
                variant="top"
                src={data.image}
                height="200vh"
                width="100px"
              />
              <Card.Body>
                <Card.Text>{data.name}</Card.Text>
                <Card.Text>Price: {data.price}</Card.Text>
              </Card.Body>
            </Link>
          </Card>
          </Row>
          );
        })}
      </Row>
    </Container>
  );
};

export default GetData;
