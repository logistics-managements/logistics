import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";

import { TextField } from "@mui/material";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button } from "@mui/material";

const Edit = () => {
  const [pID, setPid] = useState("");
  const [pName, setPname] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [loading, setLoading] = useState(false); //additional
  const [isError, setIsError] = useState(false);

  const demand = "high";

  const handleSubmit = async (e) => {
    //logic for adding data to the BACKENDe
    e.preventDefault();

    setLoading(true);
    setIsError(false); //additional

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      //exception handling
      const { data } = await axios.post(
        "/logistics/create",
        { pID, pName, quantity, unitPrice, demand },
        config
      );
      toast("Success! Added 😘");
      setPid("");
      setPname("");
      setQuantity("");
      setUnitPrice("");
      setLoading("false");
    } catch (error) {
      toast(`Error! ${error}`);
      setLoading(false);
      setIsError(true);
      setTimeout(() => {}, 5000); //5s
    }
  };


  return (
    <>
      <div>
        <Box
          sx={{
            px: 20,
            py: 4,
            color: "red",
            border: 1,
            borderColor: "primary.main",
          }}
        >
          <div className=" inline-flex  mx-auto">
            <div className=" mt-2 -translate-x-8">
              <Button variant="contained" color="primary">
                Back
              </Button>
            </div>
          </div>
        </Box>
        <div className=" text-4xl text-center mt-10">
          Add Item <br />
        </div>
        <div class="container px-36 py-24 mx-auto  mt-4">
          <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
              P.ID
            </h1>
            <TextField
              id="outlined-basic"
              label="PID"
              variant="outlined"
              type="text"
              value={pID}
              onChange={(e) => setPid(e.target.value)}
              required
            />
          </div>
          <br />
          <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
              P.Name
            </h1>
            <TextField
              id="outlined-basic"
              label="PName"
              variant="outlined"
              type="text"
              value={pName}
              onChange={(e) => setPname(e.target.value)}
              required
            />
          </div>
          <br />
          <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
              Qty
            </h1>
            <TextField
              id="outlined-basic"
              label="Qty"
              variant="outlined"
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>
          <br />
          <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
              Unit Price
            </h1>
            <TextField
              id="outlined-basic"
              label="Unit Price"
              variant="outlined"
              type="text"
              value={unitPrice}
              onChange={(e) => setUnitPrice(e.target.value)}
              required
            />
          </div>
          <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
              Demand
            </h1>
            <TextField
              id="outlined-basic"
              label="Demand"
              variant="outlined"
              type="text"
              value={demand}
              onChange={(e) => setUnitPrice(e.target.value)}
              required
            />
          </div>

          {isError && (
            <small className="mt-3 d-inline-block text-danger">
              Something went wrong. Please try again later.
            </small>
          )}
        </div>
        <div className=" text-center mx-auto">
          <div className=" mt-2 ">
            <Button
              variant="contained"
              color="success"
              type="submit"
              disabled={loading}
              onclick={handleSubmit}
            >
              <h6 style={{ marginLeft: "5px" }}> </h6>{" "}
              {loading ? "Submitting..." : "Submit"}
            </Button>
            <ToastContainer style={{ marginTop: "50px" }} />
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default Edit;
