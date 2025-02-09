             //REACT IS A LIBRARY WHICH CAN WORK INDEPENDENTELY IN A SMALL PORTION OF YOUR CODE

import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement('h1', {id:'heading'}, "Namaste Jethajiiii");
// WHEN WE RENDER THIS TO DOM IT WILL CREATE A HTML ELEMENT

                // JSX --[HTML like syntax] {jsx code id converted to React code by parcel-[Babel]}


                // React Element

const Title = () =>(
<h1 id="heading" className="h1">Namasate react  Using JSX</h1>
);

                // React Functional Component  ==========>  IT IS A JavaScript FUNCTION THAT RETURNS A PEICE OF JSX CODE
const number = 10000
const HeadingComponent = () => (
    <div id="container">
        {/* [it is component composition] */}
        <Title/>   
        {Title()}
        <Title></Title>
        
        <h1 className="heading">Namaste React from Functional Component</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeadingComponent />)  // everything is replaced from root in index.html

        

