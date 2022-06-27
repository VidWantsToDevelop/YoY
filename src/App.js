import './App.scss'
import Main from './Main'
import Cart from './components/Cart'
import * as RR from 'react-router-dom'
import Header from './components/header'
import Info from './components/Info'

function App() {
  return (
    <RR.BrowserRouter>
      <Header />

      <RR.Routes>
        <RR.Route path='/' exact element={<Main />} />
        <RR.Route path='/cart' exact element={<Cart />} />
      </RR.Routes>
      <Info />
    </RR.BrowserRouter>
  )
}

export default App
