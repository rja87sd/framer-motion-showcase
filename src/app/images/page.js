"use client";

import React from "react";
import NavBar from "../components/NavBar";
import Image1 from "./Image1"; // Import the Image1 component
import { motion } from "framer-motion";
import Image2 from "./Image2";
import Image3 from "./Image3";

export default function index() {
  const pics = [
    <Image1 key="1" src="/eclipse.png" />,
    <Image1 key="2" src="/eclipse.png" />,
    <Image1 key="3" src="/eclipse.png" />,
  ];

  return (
    <main className="min-h-screen p-24">
      <NavBar />
      <br />
      <hr />
      <br />

      {/* Flex container for Image1 components */}
      <div className="flex flex-row">
        {/* Map over the pics array and render each Image1 component */}
        {pics.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {item}
          </motion.div>
        ))}
      </div>
      <div style={{ width: "500px" }}>
        {/* Set the width to 500 pixels */}
        <Image2 src="/tower.png" alt="An image of a castle's towers seen from below."/>
      </div>
      <div>
        <Image3 src="/dragon.png" alt="An image of a three-headed dragon statue."/>
      </div>
    </main>
  );
}
