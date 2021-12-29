import React,{useEffect, useState} from 'react'
import './Nav.css';

export default function Nav() {
   const [show,handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100)
            {          
            handleShow(true);
            }
            else{
                handleShow(false);
            }
        })
        
    },[])
    return (
        <div>
            <div className={`nav ${show && "nav__black"}`}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix" className="nav__logo" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix-avatar" className="nav__avatar" />
            </div>
        </div>
    )
}
