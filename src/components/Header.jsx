const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://cdn.logojoy.com/wp-content/uploads/20200506163706/30-600x314.png"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;



// export const header = ()=>{}       NAMED EXPORT
 
     // HOW TO IMPORT NAMED EXPORT

// import {CDN_URL} from "../utils/constants"     