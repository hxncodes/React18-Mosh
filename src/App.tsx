import './App.css'
import React from 'react'
import NavBar from '../components/NavBar'
import ListGroup from '../components/ListGroup'
import Alerts from '../components/Alerts'

const App = () => {
  let items = ['New York', 'San Fransicso', 'Tokyo', 'London', 'Paris']
  const handleSelectItem = (item: String) => {
    console.log(item);

  }
  return (
    <div>
      <NavBar />
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
      <Alerts>
        Hello World <span>its me</span>
      </Alerts>
    </div>
  )
}

export default App