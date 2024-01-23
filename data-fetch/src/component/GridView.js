import React from 'react'

const GridView = ({products}) => {
  return (
    <Container>
          <Row>

{
  products &&
  products.map((data, index) => {
   
    return (
    
      <Col lg={4} md={4} className='mt-4' key={index}>


        <Card className='card h-100' style={{ width: '18rem' }}>
          <Link to={`single/${data.id}`} style={{ textDecoration: 'none' }}>
            <Card.Img variant="top" src={data.image} height="200vh" width="100px" />
            <Card.Body>

              <Card.Text>
                {data.name}
              </Card.Text>
              <Card.Text>
                Price: {data.price}
              </Card.Text>




            </Card.Body>
          </Link>
        </Card>

      </Col>

    )
    
  })
}
</Row>
    </Container>
  )
}

export default GridView