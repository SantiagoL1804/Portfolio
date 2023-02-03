import React from "react";
import "./NavBar.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <div>
        <ul>
          <NavLink to="/home">
            <li>Home</li>
          </NavLink>
          <NavLink to="/skills">
            <li>Habilidades</li>
          </NavLink>
          <NavLink to="/projects">
            <li>Proyectos</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contacto</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
