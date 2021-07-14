import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { StyledBurger } from './burger.style.js';
import { StyledMenu } from './Menu.styled';



function Navbar(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return(
        <>
        <nav className ="navbar">
            <div className="navbar-container">
                <Link to="/CJ" className="navbar-logo">
                    Image
                </Link>
                <StyledBurger>
                <div />
                <div />
                <div />
                </StyledBurger>
                <StyledMenu>
                <a href="/">
                    <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
                    About us
                </a>
                <a href="/">
                    <span role="img" aria-label="price">&#x1f4b8;</span>
                    Pricing
                    </a>
                <a href="/">
                    <span role="img" aria-label="contact">&#x1f4e9;</span>
                    Contact
                    </a>
                </StyledMenu>
  )
                                        
            </div>
        </nav>
        </>
    )
}
 
export default Navbar