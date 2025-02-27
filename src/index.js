/**
 * Entry point of application, where App is rendered within the div with the id of "app" 
 */

import React from "react";
import { render } from "react-dom";

import App from "./App";

render(<App></App>, document.getElementById("app"));

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-in-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  elements.forEach((element) => {
    observer.observe(element);
  });
});
