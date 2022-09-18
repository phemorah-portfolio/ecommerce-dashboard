import "./App.css"
import Header from "./Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Login"
import Register from "./Register"
import AddProduct from "./AddProduct"
import UpdateProduct from "./UpdateProduct"
import Products from "./Products"
import Protected from './Protected'
import SearchProduct from "./SearchProduct"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Protected Component={Products} />} />
          <Route path="/add" element={<Protected Component={AddProduct}/>} />
          <Route path={"/update/:id"} element={<Protected Component={UpdateProduct} />} />
          <Route path={"/search/"} element={<SearchProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
