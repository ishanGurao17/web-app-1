import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      Attendece Web Application {count}
      <button
        style={{
          backgroundColor: "lightblue",
          borderRadius: 5,
          color: "black",
          marginLeft: 5,
        }}
        onClick={() => setCount(count + 1)}
      >
        Click here to mark attendece
      </button>
    </>
  );
}

export default App;
