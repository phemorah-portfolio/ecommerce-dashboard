import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {

    let { id } = useParams();
    const [data, setData] = useState([]);
    const [name, setName] = useState(data.name)
    const [price, setPrice] = useState(data.price)
    const [image, setImage] = useState(data.file_path)
    const [description, setDescription] = useState(data.description)

    const fetchData = async (param) => {
        let result = await fetch('http://localhost:8000/api/product/'+param);
        result = await result.json();
        setData(result);
    }

    useEffect(()=>{
        fetchData(id)
    },[])

    const save = async () => {
        let formData = new FormData
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('file_path', image);

        let result = await fetch('http://localhost:8000/api/update', {
            method: 'POST',
            body: formData
        });

        result = await result.json()

        console.warn(result);
    }

    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>Update {data.name}</h1>
            <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control mb-2" defaultValue={data.name} placeholder="Product name" />
            <input type="text" onChange={(e)=>setPrice(e.target.value)} className="form-control mb-2" defaultValue={data.price} placeholder="Price" />
            <input type="text" onChange={(e)=>setDescription(e.target.value)} className="form-control mb-2" defaultValue={data.description} placeholder="Description" />
            <div className="flex">
                <img style={{width:50}} src={"http://localhost:8000/"+data.file_path} />
                <input type="file" onChange={(e)=>setImage(e.target.files[0])} className="form-control mb-2" placeholder="file" />
            </div>

            <button className='btn btn-info' onClick={save}>Update Product</button>
        </div>
    )
}

export default UpdateProduct;