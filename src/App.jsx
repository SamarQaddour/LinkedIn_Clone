import React from 'react'
import Login from './components/Login'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from "./redux/app/store";
import Home from "./components/Home";
import Header from "./components/Header";
function App(props) {
  return (
  <Provider store={store}>
      <div className='app'>
          <Router>
              <Routes>
                  <Route path='/' element={<Login  />} />
                  <Route path='/home' element={
                      <>
                          <Header/>
                          <Home />
                      </>

                  } />
              </Routes>
          </Router>
      </div>
  </Provider>
  );

}

export default App
