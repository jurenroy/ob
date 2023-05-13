import React from "react";
import { useSelector } from "react-redux";
import Homepage from "./homepage";
import Dash from "./dashboard";

const Highway = () => {
    const isLoggedIn = useSelector ((state) =>  state.auth.isLoggedIn)
    return( 
        <div>
            {isLoggedIn ?  <Homepage/> : <Dash/>}
        </div>
    )
}

export default Highway