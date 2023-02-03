import React from "react";
import "./Home.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
export default function Home() {
  return (
    <div>
      <NavBar />
      <div>Hola</div>
    </div>
  );
}
