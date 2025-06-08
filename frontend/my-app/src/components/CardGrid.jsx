// CardUploader.jsx
import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

const CardUploader = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the Excel file from the public folder
    fetch('/sample_products.xlsx')
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => {
        const data = new Uint8Array(arrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const wsname = workbook.SheetNames[0];
        const ws = workbook.Sheets[wsname];
        const jsonData = XLSX.utils.sheet_to_json(ws);
        setProducts(jsonData);
      })
      .catch(error => {
        console.error('Error loading Excel file:', error);
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <MDBRow className="mt-4 g-4">
        {products.map((product, index) => (
          <MDBCol md="4" key={index}>
            <MDBCard>
       <MDBCardImage
  src={product["Image URL"]}
  position='top'
  alt={product.Name}
  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
/>
  <MDBCardBody>
                <MDBCardTitle>{product.Name}</MDBCardTitle>
                <MDBCardText>
                  💰 <strong>Rate:</strong> ₹{product.Rate} <br />
                  🏷️ <strong>Category:</strong> {product.Category} <br />
                  {product.Availability === "Available" ? (
                    <span style={{ color: 'green' }}>✔ In Stock</span>
                  ) : (
                    <span style={{ color: 'red' }}>✖ Out of Stock</span>
                  )}
                </MDBCardText>
                {/* <MDBBtn disabled={product.Availability !== "Available"}>
                  {product.Availability === "Available" ? "Buy Now" : "Unavailable"}
                </MDBBtn> */}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </div>
  );
};

export default CardUploader;
