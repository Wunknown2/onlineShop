import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import { Box, Button, TextField, Typography } from "@mui/material";
import CategorySelect from "./CategorySelect";

const AddProduct = () => {
  const { addProduct, categories, getCategories } = useProducts();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    price: 0,
    image: "",
  });
  useEffect(() => {
    getCategories();
  }, []);
  const handleInput = (e) => {
    console.log(e.target.name);
    if (e.target.name === "price") {
      const obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      const obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
  };
  const handleClick = () => {
    addProduct(product);
  };
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
        ADMIN PAGE
      </Typography>
      <TextField
        onChange={handleInput}
        fullWidth
        name="title"
        label="Title"
        variant="outlined"
      />
      <CategorySelect categories={categories} handleInput={handleInput} />
      <TextField
        onChange={handleInput}
        fullWidth
        name="description"
        label="Desciprion"
        variant="outlined"
      />
      <TextField
        onChange={handleInput}
        fullWidth
        name="price"
        label="Price"
        variant="outlined"
      />
      <TextField
        onChange={handleInput}
        fullWidth
        name="image"
        label="Image URL"
        variant="outlined"
      />
      <Button fullWidth variant="outlined" onClick={handleClick}>
        ADD PRODUCT
      </Button>
    </Box>
  );
};

export default AddProduct;
