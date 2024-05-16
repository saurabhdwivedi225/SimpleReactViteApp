import Image from "./image"; 
import Name from "./Name";   

const title = "We are visiting places";

function App(props) {
  return (
    <>
      {/* Display the application title with styles */}
      <h1 style={{ color: 'blue', fontSize: '20px' }}>{title}</h1>

      {/* Render the Name component, potentially passing a name prop */}
      <Name>
        <h1>{props.name}</h1> {/* Assuming Name component expects an h1 with name */}
      </Name>

      {/* Render the Image component, using the prop 'image' for the source */}
      <Image src={props.image} />
    </>
  );
}

export default App;
