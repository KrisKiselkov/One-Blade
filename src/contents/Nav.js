import { NavLink } from "react-router-dom"

export function Nav() {
    return (
        <>
                <header>
                    <nav>
                        <img  alt="logo" id="logo"></img>
                    
                        <ul id="nav-list">
                            <NavLink to={'/'} className='nav-a'><li>Home</li></NavLink>
                            <NavLink to={'/products'} className='nav-a'><li>Products</li></NavLink>
                            <NavLink to={'/'} className='nav-a'><li>Contact Us</li></NavLink>
                            
                        </ul>

                        <h2>B</h2>
                    </nav>
                    <hr id="nav-hr"></hr>
                </header>
        </>
    );
}   