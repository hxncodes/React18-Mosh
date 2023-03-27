import './App.css'
import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import ListGroup from '../components/ListGroup'
import Alerts from '../components/Alerts'
import Button from '../components/Button'
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
        hxn <span>Codes</span>
      </Alerts>}

      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />

      <Button color="warning" onClick={() => setAlertVisibility(true)}>Get Alerts</Button>
    </div >
  )
}

export default App