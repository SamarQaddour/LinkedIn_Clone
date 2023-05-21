import React, {useEffect} from 'react'
import Login from './components/Login'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Home from "./components/Home";
import Header from "./components/Header";
import {getUserAuth} from './redux/actions/index'
import {connect} from "react-redux";
import RequireAuth from "./components/RequireAuth";
function App(props) {
    useEffect(()=>{
        getUserAuth()
        console.log(props.users,'newUser')
    },[props.users])
  return (
      <div className='app'>
          <Router>
              <Routes>
                  <Route path='/' element={<Login  />} />
                  <Route path='/home' element={
                      <RequireAuth>
                          <Header/>
                          <Home />
                      </RequireAuth>

                  } />
              </Routes>
          </Router>
      </div>

  );

}
const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return{
        getUserAuth: () => dispatch(getUserAuth())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
