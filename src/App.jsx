
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import Button from './components/Button/Button'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import { faArrowCircleDown, faArrowDown, faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons'

function App() {


  return (
    <>
   <Header></Header>
   <Button>Sort By Date  <FontAwesomeIcon icon={faArrowDown} /></Button>
   <Card></Card>
 
    </>
  )
}

export default App
