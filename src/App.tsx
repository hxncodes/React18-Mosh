import './App.css'
import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import ListGroup from '../components/ListGroup'
import Alerts from '../components/Alerts'
import Button from '../components/Button'
import Btn from '../components/Btn'

const App = () => {

  let items = ['New York', 'San Fransicso', 'Tokyo', 'London', 'Paris']
  const handleSelectItem = (item: String) => {
    console.log(item);
  }

  const [alertVisibility, setAlertVisibility] = useState(false)
  return (
    <div>
      <NavBar />

      {alertVisibility && <Alerts onClose={() => setAlertVisibility(false)}>
        This is Alert message..!
      </Alerts>}

      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />

      <Button color="warning" onClick={() => setAlertVisibility(true)}>Get Alerts</Button>
      <Btn color="danger" onBtnClick={() => setAlertVisibility(true)}>Child</Btn>
  
    </div >
  )
}

export default App