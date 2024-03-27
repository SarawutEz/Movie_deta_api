import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from './store/Stote'
import { Provider } from 'react-redux'
import reactLogo from './assets/react.svg'
import MovieDetail from './components/MovieDetail/MovieDetail';


// Components

import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Provider store={store}>
        <Router>

          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/movie/:id' element={<MovieDetail />} />
            </Routes>
          </div>

        </Router>
      </Provider>
    </div>
  )
}

export default App