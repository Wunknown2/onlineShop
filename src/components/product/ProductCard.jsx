import { AddShoppingCart } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Detail from "./Detail";
import { useProducts } from "../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContextProvider";
import { useAuth } from "../context/AuthContextProvider";
import { ADMIN } from "../../helpers/const";

const ProductCard = ({ elem }) => {
  const { user } = useAuth();
  const { deleteProduct } = useProducts();
  const { addProductToCart, checkProductInCart } = useCart();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Card
      sx={{
        height: 450,
        boxShadow: "none",
        margin: "2%",
        width: { md: "30vw", lg: "19vw" },
      }}
    >
      <CardActionArea onClick={handleOpen}>
        <CardMedia sx={{ height: 240, borderRadius: 4 }} image={elem.image} />
      </CardActionArea>
      <CardContent sx={{ padding: "20px 5px 0px 5px" }}>
        <Typography variant="h5" fontSize="20" fontWeight={700} component="div">
          {elem.title}
        </Typography>
        <Stack>
          <Rating name="half-rating" defaultValue={0} precision={1} />
        </Stack>
        <Typography color="black" fontSize="24px" fontWeight={700}>
          {elem.price}$
        </Typography>
        <Typography color="black" fontSize="24px" fontWeight={700}>
          {elem.description}
        </Typography>
        <Typography color="black" fontSize="24px" fontWeight={700}>
          {elem.category}
        </Typography>
        {user.email === ADMIN ? (
          <>
            <Button
              onClick={() => deleteProduct(elem.id)}
              color="secondary"
              variant="outlined"
              size="medium"
            >
              Delete
            </Button>
            <Button
              onClick={() => navigate(`/edit/${elem.id}`)}
              color="primary"
              variant="outlined"
              size="medium"
            >
              Edit
            </Button>
          </>
        ) : (
          <IconButton
            sx={{
              backgroundColor: checkProductInCart(elem.id) ? "black" : "",
              color: checkProductInCart(elem.id) ? "white" : "",
            }}
            onClick={() => addProductToCart(elem)}
          >
            <AddShoppingCart />
          </IconButton>
        )}
      </CardContent>
      <Detail open={open} handleClose={handleClose} elem={elem} />
    </Card>
  );
};

export default ProductCard;
