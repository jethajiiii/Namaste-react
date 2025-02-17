             //REACT IS A LIBRARY WHICH CAN WORK INDEPENDENTELY IN A SMALL PORTION OF YOUR CODE

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";





       
    






const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)  
 
        

