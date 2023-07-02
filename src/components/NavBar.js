import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Logo from './images/Logo.jpg'

export default function NavBar () {
    return (
        
        <nav className="nav">
          <img src={Logo} alt="Logo" style={{width: "150px", height: "70px"}} />
           
            <Link to="/" className="title">
                Ottawa Basketball Association
            </Link>
            <ul>

            <CustomLink to="/home">Home</CustomLink>
            <CustomLink to="/services">Services</CustomLink>
            <CustomLink to="/league">League</CustomLink>
            <CustomLink to="/staff">Staff</CustomLink>
            <CustomLink to="/facilities">Facilities</CustomLink>
            <CustomLink to="/contactUs">Contact Us</CustomLink>         
            <CustomLink to="/register">Register</CustomLink>
            
            
                   
                    


                    
                
            </ul>
        </nav>
    );
                    }

    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end: true })
      
        return (
          <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
              {children}
            </Link>
          </li>
        )
}


