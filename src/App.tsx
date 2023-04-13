import "./index.css";
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import StateMgt from "./stateMgt/StateMgt";
import MyForm from "./forms/MyForm";
import Form from "./forms/Form";
import ExpenseApp from "./expense-tracker/ExpenseApp";
import UseEffectApp from "./useEffect/UseEffectApp";
import axios from "axios";
import AxiosApp from "./axios/AxiosApp";

const App = () => {
  return (
    <div>
      <NavBar />
      {/* <StateMgt /> */}
      {/* <MyForm /> */}
      {/* <Form /> */}
      {/* <ExpenseApp /> */}
      {/* <UseEffectApp /> */}
      <AxiosApp />
    </div>
  );
};

export default App;
