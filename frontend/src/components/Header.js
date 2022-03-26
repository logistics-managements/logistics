import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import logo from "../assets/logo.png";

const Header = () => {
  return (
    
    <div>
      <br/>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <div className="  flex justify-center pr-8 mx-auto">
          <div className="-translate-x-96 mr-1 mx-auto">
            <Button variant="contained">Registered Vistors Details</Button>
          </div>
          <div className=" translate-x-96 ml-8 mx-auto">
            <Button variant="contained">My Account</Button>
          </div>
        </div>
        <div className=" mx-96 translate-x-32">
            <img className="lg:w-80 w-80 m:w-80" src = {logo}/>
        </div>
      </Typography>
      <hr />
      <Typography variant="body2">
        <div className=" pl-16  flex pt-4 ">
          <div className=" px-2">
            <Button variant="contained" color="success">
              Logistics Management
            </Button>
          </div>
          <div className=" px-2">
            <Button variant="contained" color="success">
              Sales Management
            </Button>
          </div>
          <div className=" px-2">
            <Button variant="contained" color="success">
              Employee management
            </Button>
          </div>
          <div className=" px-2">
            <Button variant="contained" color="success">
              Bungalow & Safari jeep Mng.
            </Button>
          </div>
          <div className=" px-2">
            <Button variant="contained" color="success">
              Marketing & promotion
            </Button>
          </div>
        </div>
      </Typography>
      <br/>
    </div>
  );
};

export default Header;
