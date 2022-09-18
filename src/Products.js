import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import {Link} from 'react-router-dom'

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let result = await fetch("http://localhost:8000/api/products");
    result = await result.json();
    setData(result);
  }

  async function deleteProduct(id) {
    // alert(id)
    let result = await fetch("http://localhost:8000/api/product/"+id, {
        method: 'DELETE'
    })
    result = await result.json();
    // console.warn(result);
    fetchData();
  }

  return (
    <>
      <div className="col-sm-8 offset-sm-2">
        <h2>All Products</h2>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th></th>
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
                <td>
                    <Link to={"update/"+product.id} className="btn badge btn-success">Update</Link>
                    <button className="btn badge btn-danger" onClick={()=>deleteProduct(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Products;
