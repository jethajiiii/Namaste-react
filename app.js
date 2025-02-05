    //REACT IS A LIBRARY WHICH CAN WORK INDEPENDENTELY IN A SMALL PORTION OF YOUR CODE



const heading = React.createElement('h1', {id: 'heading'}, ['hello world from react', ' we can also pass an  array']);
        const root = ReactDOM.createRoot(document.getElementById('root'));
    console.log(heading) // OBJECT
        root.render(heading);  

           //RENDER 
    // TAKE THE OBJECT, CONVERT((replace) INTO HEADING TAG AND PUT IT INTO THE DOM

    const parent = React.createElement('div', {id:'heading'}, [
        React.createElement('h1', {id:'heading1'}, 'i am heading one'),
        React.createElement('h2', {id:'heading1'}, 'i am heading two'),
        React.createElement('h2', {id:'heading1'}, 'i am heading three')
    ])