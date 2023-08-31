import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { AlignHorizontalCenter } from "@mui/icons-material";
import { Skeleton } from "@mui/material";

 const ProductsGrid=()=> {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(true);


  useEffect(() => {

    getProducts();
  },[]);

  const getProducts = async() => {

      setLoading(true);
      //var response = await axios.get("https://fakestoreapi.com/products/");
      //console.log(response.data);
      axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  

  

    
  };

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  return (
    <div>

      <Grid
        container
        sx={{
          //backgroundColor:"#F1F1F1",
          justifyContent: "center",
        }}
      >
        {loading ? <Loading /> : <ProductCard products={products} />}
      </Grid>
    </div>
  );

  
}

export default ProductsGrid
