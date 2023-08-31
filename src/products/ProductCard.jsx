import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/action";

export default function ProductCard({ products }) {

  const dispatch = useDispatch();
  const addProduct = (item) => {
    dispatch(addItemToCart(item));
  };



  return (

    products.map((product) => (

      <div key={product.id}>
        <Box
          sx={{
            justifyContent: "center",
            m: 4,
          }}
        >
          <Card sx={{ width: 300 }}>
            <CardMedia
              image={product.image}
              sx={{ height: 300, objectFit: "contain" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title.substring(0, 15)}
              </Typography>
              {/* <Typography variant="body2" color="text.secondary" >
        {product.description}
        </Typography> */}
            </CardContent>
            <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
              <IconButton aria-label="Favorite">
                <FavoriteIcon />
              </IconButton>

              <Button
                onClick={() => {

                  addProduct(product);

                  alert("Product added to the cart");

                }}
                size="medium"
              >
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        </Box>
      </div>
    ))




  );
}
