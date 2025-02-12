import React from "react";
import "../../styles/navbar.css";
import { useNavigate,useNavigation } from "react-router-dom";

export default function Navbar(){
    const navigate = useNavigate();

    return(

            <div className="navlinks">
                <ul>
                    <li onClick={() => navigate('/')}>Home</li>
                    <li onClick={() => navigate('/login')}>Login</li>
                </ul>
            </div>
       
    )
}
