# Namaste Jethaji

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
