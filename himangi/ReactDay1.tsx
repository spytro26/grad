import { useState } from "react";
 

function CounterDisplay({ numb }) {
  return (
    <div
      style={{
        fontSize: "110px",
        fontFamily: "Pacifico, cursive",
        color: numb > 0 ? "#ad1457" : numb < 0 ? "#6a1b9a" : "#c2185b",
        textShadow: "3px 3px 0px rgba(0,0,0,0.08)",
        lineHeight: "1",
        transition: "color 0.3s",
      }}
    >
      {numb}
    </div>
 

function CounterLabel({ text }) {

  return (
    <div

      style={{

        fontSize: "13px",
        letterSpacing: "3px",

        textTransform: "uppercase",
        color: "#ad1457",

        fontWeight: "800",

        marginBottom: "10px",

        opacity: 0.7,
      }}

    >
      {text}

    </div>
  );
}

 
function App() {

  
  let [count, setCount] = useState(0);

 
  // function to increase the counter
  function increaseCount() {

    setCount(count + 1);
  }

 
  // function to decrease the counter

  function decreaseCount() {
    setCount(count - 1);

  }
 

  // function to clear / reset to zero
  function clearCount() {
    setCount(0);

  }
 
  return (

    <div
      style={{

        minHeight: "100vh",
        width:"300vh",

        background:
          "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 30%, #e1bee7 60%, #d1c4e9 100%)",

        display: "flex",
        alignItems: "center",

        justifyContent: "center",
        fontFamily: "Nunito, sans-serif",

      }}
    >

      <div
        style={{

          background: "rgba(255,255,255,0.65)",
          backdropFilter: "blur(16px)",

          borderRadius: "32px",
          padding: "50px 60px",
          textAlign: "center",

          boxShadow:
            "0 20px 60px rgba(173, 20, 87, 0.15), 0 0 0 1px rgba(255,255,255,0.8) inset",

          maxWidth: "420px",

          width: "100%",
          border: "1.5px solid rgba(255,255,255,0.9)",
        }}

      >
       

        <h1
          style={{
            fontFamily: "Pacifico, cursive",
            fontSize: "28px",

            color: "#880e4f",
            marginBottom: "6px",

          }}

        >
          🌷 My Counter App

        </h1>
 

        
 
        

        <div
          style={{

            background: "linear-gradient(135deg, #fce4ec, #f3e5f5)",

            borderRadius: "24px",

            padding: "30px 20px",

            marginBottom: "36px",

            border: "1.5px solid rgba(173,20,87,0.1)",
          }}

        >
          <CounterLabel text="current count" />

          <CounterDisplay numb={count} />
        </div>

 

        
        <div
          style={{
            display: "flex",

            gap: "12px",
            justifyContent: "center",

            marginBottom: "16px",
          }}
        >

          <button
            onClick={decreaseCount}
            style={{
              width: "70px",

              height: "70px",
              borderRadius: "50%",

              border: "none",
              background: "linear-gradient(135deg, #ce93d8, #ab47bc)",

              color: "white",
              fontSize: "30px",
              cursor: "pointer",

              boxShadow: "0 6px 20px rgba(171,71,188,0.35)",
              fontWeight: "bold",

            }}
          >
            −

          </button>
 

          
          <button
            onClick={increaseCount}
            style={{

              width: "70px",

              height: "70px",
              borderRadius: "50%",

              border: "none",
              background: "linear-gradient(135deg, #f48fb1, #e91e8c)",

              color: "white",

              fontSize: "30px",
              cursor: "pointer",

              boxShadow: "0 6px 20px rgba(233,30,140,0.35)",
              fontWeight: "bold",

            }}
          >

            +
          </button>
        </div>
 

       
        <button

          onClick={clearCount}
          style={{

            marginTop: "8px",
            padding: "10px 32px",

            borderRadius: "50px",

            border: "1.5px solid #f48fb1",
            background: "transparent",

            color: "#ad1457",

            fontSize: "13px",

            fontFamily: "Nunito, sans-serif",

            fontWeight: "700",

            letterSpacing: "1.5px",
            cursor: "pointer",

            textTransform: "uppercase",
          }}
        >
          🗑️ Reset to Zero

        </button>
 

        
      </div>
    </div>

  );
}
 

export default App;  
