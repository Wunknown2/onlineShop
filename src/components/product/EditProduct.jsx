import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContextProvider";
import { Box, Button, TextField, Typography } from "@mui/material";

const EditProduct = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct, editProduct } = useProducts();
  console.log(oneProduct);
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
  });
  const handleInput = (e) => {
    if (e.target.name === "price") {
      const obj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(obj);
    } else {
      const obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
  };
  const handleClick = () => {
    editProduct(id, product);
  };
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    if (oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);
  return (
    <Box
      sx={{
        width: "50vw",
        height: 500,
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4" align="center">
        EDIT PRODUCT
      </Typography>
      <TextField
        onChange={handleInput}
        value={product.title}
        fullWidth
        name="title"
        label="Title"
        variant="outlined"
      />
      <TextField
        onChange={handleInput}
        fullWidth
        value={product.description}
        name="description"
        label="Desciprion"
        variant="outlined"
      />
      <TextField
        onChange={handleInput}
        value={product.price}
        fullWidth
        name="price"
        label="Price"
        variant="outlined"
      />

      <TextField
        onChange={handleInput}
        fullWidth
        value={product.image}
        name="image"
        label="Image URL"
        variant="outlined"
      />
      <Button fullWidth variant="outlined" onClick={handleClick}>
        SAVE
      </Button>
    </Box>
  );
};

export default EditProduct;
