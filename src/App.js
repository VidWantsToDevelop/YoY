import './App.scss'
import Main from './Main'
import Cart from './components/Cart'
import * as RR from 'react-router-dom'
import Header from './components/header'

function App() {
  return (
    <RR.BrowserRouter>
      <Header />

      <RR.Routes>
        <RR.Route path='/' exact element={<Main />} />
        <RR.Route path='/cart' exact element={<Cart />} />
      </RR.Routes>
    </RR.BrowserRouter>
  )
}

export default App
