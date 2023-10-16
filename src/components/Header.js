import React, { useState, useEffect } from "react";
import { default as Navbar } from "./Navbar";
import '../style/header.css';

export default function Header() {
  return (
    <>
      <div id='header'>
        <Navbar />
      </div>
    </>
  );
}
