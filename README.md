# Namaste Jethaji 

  ##  REACT IS FAST BECAUSE  OF EFICIENT DOM MANUPULATION --- [because it has {VIRTUAL DOM}]
    It Uses DIFF ALGORITHM to do Efficiant DOM MANUPULATION

NMP => IT IS A PACKAGE MANAGER
~(tilde) ==> to update the major version of package(parcel) automatically
^(caret) ==> to update the minor version of package(parcel) automatically

package-lock.jason ==> locks the version and keeps the record of it 

node_module ==> has  all the fetch code from parcel

# [note] parcel as a project has its own dependencies and those dependencies has its own dependencies{"THIS IS KNOWN AS TRANSITIVE DEPENDENSIES"}

npm install -D parcel (to install parcel as a web dependency)

nmp init => package.json created(IT MAINTAINS THE VERSIONS OF DEPENDENCIES)
package-lock.json(IT HAVE UPDATED VERSION OF DEPENDENCIES)
npm install ==> node_modules install ho jayenge 

npx  parcel    index.html ==> IT WILL EXECUTE THE PARCEL
    (package)   (source)
npx means executing a package

## cdn links is not the best way to bring react in our system 
## { NOW WE USE NPM FOR THAT}
## npm install react ==>(WE ARE NOT USING -D BEACUSE IT IS A NORMAL DEPENDENCY NOT A WEB DEPENDENCY)


 # Parcel
 - dev build
 - Local server
 - HMR = Hot Module Replacemnt (AUTOMATICALLY REFRESHES LOCAL HOST 1234 SERVER PAGE)
 - File Watching Algorithm -- written in C++
 - Caching - faster Builds
 - Image Optimization
 - Minification of file
 - Bundling of File
 - Compressing of File
 - Consistant Hashing
 - Code Splitting
 - Differential Bundling - support older browsers
 - Error Handling
 - It Provides [HTTPs] Mode
 - Tree Shaking => it will remove unused code for you
 - Different Dev and Production Bundles



# when we execute parcel (npx parcel index.html) ==> IT GENERATES A DEVELOPMENT BUILD AND HOSTED IT IN localHost1234 ==> WHEN IT GENERATES A DEVELOPMENT BUILD IT PUTS IT UP IN [DIST] FOLDER


# FOR RUNNNING PROJECTS WE WRITE ==> npx parcel index.html
  ISKI JAGAH HAM SCRIPT ME JAKAR SCRIPT DEFINE KAR DENGE 

  FIR USSE USE KARNE KE LIYE ==> npm run start  OR  npm start {JO BHI SCRIPT KA NAAM HOGA}






                                          // BASICS //





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

        

           





  ##  Config Driven UI
     {API-data}
OUR UI CHANGES ACCORDING TO THE DATA GIVEN BY [API]









   Two Types Of Import / Export 

- Default 
  export default compomnent 
  import component from "path"

- Named
export const component 
import {component} from "path"





   ## React Hooks
  (Normal JavaScript Functions)
  - useState()  - super powerful state variables in react
       const [listOfRestaurant, setListOfRestaurant] = useState([{data:},{},{}])
                                (to update this list)
       -- It keeps the UI in Sync With the Data Layer     {whenever a state variable changes it will RERENDER the component}
       -- But if We Take a Normal JS Variable IT Will Not Able to Update UI 

  - useEffect() 
