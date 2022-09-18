import React, { useState } from "react";
import Table from "react-bootstrap/Table";

const SearchProduct = () => {
  let [data, setData] = useState("");

  async function search(text) {
    if (text) {
      let result = await fetch(
        "http://localhost:8000/api/product/search/" + text
      );
      result = await result.json();
      setData(result);
    }
  }

  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>Search for products</h1>
      <input
        type="text"
        onChange={(e) => search(e.target.value)}
        className="form-control"
        placeholder="search for products"
      />
      {data && (
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  <img
                    style={{ width: 50 }}
                    src={"http://localhost:8000/" + product.file_path}
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default SearchProduct;
