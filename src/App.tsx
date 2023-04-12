import "./index.css";
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import ListGroup from "../components/ListGroup";
import Alerts from "../components/Alerts";
import Button from "../components/Button";
import Btn from "../components/Btn";
import ExpandableComponent from "../components/ExpandableComponent";
import MyForm from "./forms/MyForm";
import Form from "./forms/Form";
import ExpenseApp from "./expense-tracker/ExpenseApp";

const App = () => {
  let items = ["New York", "San Fransicso", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: String) => {
    console.log(item);
  };

  const [alertVisibility, setAlertVisibility] = useState(false);
  return (
    <div>
      <NavBar />
      <NavBar />
      {alertVisibility && (
        <Alerts onClose={() => setAlertVisibility(false)}>
          This is Alert message..!
        </Alerts>
      )}

      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      <Button color="warning" onClick={() => setAlertVisibility(true)}>
        Get Alerts
      </Button>
      <ExpandableComponent maxChars={50}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
        delectus veritatis eligendi repudiandae velit, illo hic aliquam,
        assumenda alias cumque officia dignissimos voluptates. Obcaecati esse
        numquam reiciendis quas iusto dolorem nobis vitae, ea deserunt illum
        praesentium eaque quod, minima exercitationem itaque ad? Aspernatur
        fugit, incidunt voluptatem, commodi tempora repudiandae animi ad, cum et
        voluptate eius. Unde et ullam voluptatibus distinctio doloremque harum
        tempora reprehenderit quos! Voluptatibus, tenetur officiis! Aut et qui
        eum non, recusandae magni distinctio minus fugit nulla! Sit fugiat iste
        quo ipsa laboriosam ratione magnam, neque corporis itaque cupiditate
        sapiente cum voluptate reprehenderit eaque facere officiis delectus
        ipsum.
      </ExpandableComponent>
      <Btn color="danger" onBtnClick={() => setAlertVisibility(true)}>
        Child
      </Btn>
      {/* <MyForm /> */}
      {/* <Form /> */}
      <ExpenseApp />
    </div>
  );
};

export default App;
