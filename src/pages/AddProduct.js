import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../services/productSlice"

function AddProduct() {
  const dispatch = useDispatch();

  const [productData, setProductData] = useState({
    product_name: '',
    type: '',
    quantity: '0',
    rating: '0',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(productData))
    window.location.reload();
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="product_name">Product Name</label>
          <input type="text" id="product_name" name="product_name" placeholder="Product Name" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="type">Product Type</label>
          <input type="text" id="type" name="type" placeholder="Product Type" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="quantity">Quantity</label>
          <input type="number" min={0} id="quantity" name="quantity" placeholder="Quantity" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="rating">Rating</label>
          <input type="number" min={0} max={5} id="rating" name="rating" placeholder="Rating" onChange={handleChange} />
        </div>
        <button className="addButton" type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddProduct;
