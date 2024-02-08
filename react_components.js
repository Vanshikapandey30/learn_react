// Step: 1

// creating react component
  
function MyButton() {   //MyButton is a component

//this is JSX
    return (

      <button>This is a button</button>
      
    );
}

// nesting react components

  export default function MyApp() {   //default function is main component in file
    return (
      <div>
        <h1>Welcome to my app</h1>

        {/* React component names must always start with a capital letter */}
        {/* you have nested MyButton into another component */}

        <MyButton />                
      </div> 
    );
  }
  

