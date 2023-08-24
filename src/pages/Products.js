import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { updateRating } from "../services/productSlice";

function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(products);
  }, [products])

  const handleRatingChange = (index, newRating) => {
    if (newRating < 0) {
      newRating = 0;
    } else if (newRating > 5) {
      newRating = 5;
    }
    dispatch(updateRating({ index, newRating }));
  }

  return (
    <div>
      <h2>Products</h2>
      <ul className="productsItem">
        <li className="productHeader">
          <span className="productAttribute">Name</span>
          <span className="productAttribute">Type</span>
          <span className="productAttribute">Quantity</span>
          <span className="productAttribute">Rating</span>
        </li>
        {products?.map((product, index) => (
          <li key={index}>

            <span className="productAttribute">{product.product_name}</span>
            <span className="productAttribute">{product.type}</span>
            <span className="productAttribute">{product.quantity}</span>
            <span className="productAttribute">
              <button
                className="arrowButton"
                onClick={() => handleRatingChange(index, parseInt(product.rating) - 1)}
              >
                <NavigateBeforeIcon />
              </button>
              <span className="rating">{product.rating}</span>
              <button
                className="arrowButton"
                onClick={() => handleRatingChange(index, parseInt(product.rating) + 1)}
              >
                <NavigateNextIcon />
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products;
