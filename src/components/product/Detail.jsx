import { Box, Button, Modal } from "@mui/material";
import React from "react";
import { useCart } from "../context/CartContextProvider";

const Detail = (props) => {
  const style = {
    position: "absolute",
    top: "30%",
    left: "30%",
    width: 700,
    display: "flex",
    border: "2px solid black",
    boxShadow: 24,
    bgcolor: "background.paper",
    p: 4,
  };
  const { elem, open, handleClose } = props;
  const { checkProductInCart, addProductToCart } = useCart();
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={handleClose}
    >
      <Box sx={style}>
        <div>
          <img width={300} src={elem.image} alt={elem.title} />
        </div>
        <div>
          <h1>{elem.title}</h1>
          <p>{elem.description}</p>
          <p>{elem.price}</p>
        </div>
        <div style={{ marginTop: "auto" }}>
          {checkProductInCart(elem.id) ? (
            <Button>Alredy in cart</Button>
          ) : (
            <Button onClick={() => addProductToCart(elem)}>
              Buy for {elem.price}
            </Button>
          )}
        </div>
      </Box>
    </Modal>
  );
};

export default Detail;
