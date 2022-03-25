import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/gallery/img2.jpg";
import img3 from "../../assets/gallery/img3.jpg";
import img4 from "../../assets/gallery/img4.jpg";
import img5 from "../../assets/gallery/img5.jpg";
import img6 from "../../assets/gallery/img6.jpg";
import img7 from "../../assets/gallery/img7.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const card = (
  <>
    <React.Fragment>
      <CardContent className=" bg-neutral-800">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <div className=" text-right">
            <Button variant="contained">My Account</Button>
          </div>
        </Typography>
        <hr />
        <Typography variant="body2">
          <div className=" pl-14  flex pt-4 ">
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
      </CardContent>
    </React.Fragment>
    <div className=" text-center mt-10 ">
      <Box sx={{ px: 20, py: 4, color: "red", border: "2px dashed grey" }}>
        <h1 className=" text-5xl text-lime-500 font-semibold">
          Welcome to nature's paradise - NATUREHOLIC
        </h1>
      </Box>

      <div>
        <section class="text-gray-600 body-font overflow-hidde">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-full mx-auto flex flex-wrap shadow-2xl  border border-green-600">
              <img
                alt="ecommerce"
                class="lg:w-1/2 w-full lg:h-96 h-64 object-cover object-center rounded"
                src={img1}
              />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 class="text-gray-900 text-2xl title-font font-medium mb-1">
                  Image Description
                </h1>
                <p class="leading-relaxed pt-6">
                  Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                  sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                  juiceramps cornhole raw denim forage brooklyn. Everyday carry
                  +1 seitan poutine tumeric. Gastropub blue bottle austin
                  listicle pour-over, neutra jean shorts keytar banjo tattooed
                  umami cardigan.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Box
        sx={{
          px: 20,
          py: 4,
          color: "red",
          border: 1,
          borderColor: "primary.main",
        }}
      >
        <h1 className=" text-5xl text-lime-500 font-semibold">
          -Attractions and Promotions-
        </h1>
      </Box>
      <div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="flex flex-wrap md:-m-2 -m-1 shadow-2xl">
              <div class="flex flex-wrap w-1/2">
                <div class="md:p-2 p-1 w-1/2 border-4 cursor-pointer" data-aos="zoom-in">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src={img2}
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2 border-4" data-aos="zoom-in">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src={img3}
                  />
                </div>
                <div class="md:p-2 p-1 w-full border-4" data-aos="fade-right">
                  <img
                    alt="gallery"
                    class="w-full h-full object-cover object-center block"
                    src={img4}
                  />
                </div>
              </div>
              <div class="flex flex-wrap w-1/2">
                <div class="md:p-2 p-1 w-full border-4" data-aos="fade-left">
                  <img
                    alt="gallery"
                    class="w-full h-full object-cover object-center block"
                    src={img5}
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2 border-4" data-aos="zoom-in">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src={img6}
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2 border-4" data-aos="zoom-in">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src={img7}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </>
);

export default function Home() {
  return (
    <>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </>
  );
}