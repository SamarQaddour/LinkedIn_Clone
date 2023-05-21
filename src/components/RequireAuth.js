import React, {useEffect} from "react";
import {connect} from 'react-redux'
import {useNavigate} from 'react-router-dom'
 const RequireAuth = ({user, children}) => {
    const navigate = useNavigate()
   useEffect(()=>{
       if(!user){
           navigate("/", {replace:true})
           return;
       }
   },[user])
    /*i say ifElse you show children "component inside wrap RequireAuth */
    return children
 }


 const mapStateToProps = (state) => {
     return{
         user : state.userState.user
     }
 }
 export default connect(mapStateToProps)(RequireAuth)