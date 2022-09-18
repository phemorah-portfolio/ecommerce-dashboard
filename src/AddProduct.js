import {Button} from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddProduct() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")

    const navigate = useNavigate()

    async function save() {

        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);

        await fetch('http://localhost:8000/api/addproduct',{
            method: 'post',
            body: formData
        })

        navigate('/')
    }

    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>Add Product Page</h1>
            <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control mb-2" placeholder="Product name" />
            <input type="text" onChange={(e)=>setPrice(e.target.value)} className="form-control mb-2" placeholder="Price" />
            <input type="text" onChange={(e)=>setDescription(e.target.value)} className="form-control mb-2" placeholder="Description" />
            <input type="file" onChange={(e)=>setImage(e.target.files[0])} className="form-control mb-2" placeholder="file" />

            <Button className='btn btn-info' onClick={save}>Add Product</Button>
        </div>
    )
}

export default AddProduct