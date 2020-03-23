import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductFailure,
  createProductRequest,
  createProductSuccess,
  createProductFailure
} from "./actions";
import axios from "axios";

//#endregion

//#region Thunks
export const fetchProduct = id => dispatch => {
  dispatch(fetchProductRequest());
  return axios
    .get(`/api/products/${id}`)
    .then(({ data }) => {
      dispatch(fetchProductSuccess(data));
    })
    .catch(err => dispatch(fetchProductFailure(err)));  
};

export const fetchProducts = () => dispatch => {
  dispatch(fetchProductsRequest());
  return axios
    .get("/api/products")
    .then(({ data }) => {
      console.log("data2: ", data);
      dispatch(fetchProductsSuccess(data));
    })
    .catch(err => dispatch(fetchProductsFailure(err)));
};

// export const createProduct = (inputValues, history) => dispatch => {
//   dispatch(createProductRequest(inputValues));
//   return axios
//     .post("/api/products/", inputValues)
//     .then(({ data }) => {
//       dispatch(createProductSuccess(data));
//       history.push("/");
//     })
//     .catch(err => dispatch(createProductFailure(err)));
// };

// export const filterProducts = (filterOptions, products) => dispatch => {
//   let filteredList = products.filter(
//     product => product.price >= filterOptions.minPrice
//   );

//   filteredList = filteredList.filter(
//     product => product.price <= filterOptions.maxPrice
//   );

//   filteredList = filteredList.filter(
//     product => product.stars <= filterOptions.stars
//   );

//   filteredList = filteredList.filter(product =>
//     filterOptions.continent.includes(product.continent)
//   );

//   dispatch(filterProductsSuccess(filteredList));

//   //  dispatch(fetchProductFailure();
// };

// //#endregion