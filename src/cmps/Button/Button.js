// import "Button.css";
import { useState } from "react";

const Button = () => {

    const [textView, setTextView] = useState(true);

  return (
    <>
      <button onClick={()=>setTextView(!textView)}>View/Hide Text</button>

      {textView === true && <h2>The Text</h2>}
      </>
  );
};
export default Button;

// (show===true? show===false : show===true)

// (show===false? show===true : show===false)

{/* <button onClick={()=>setTextView(textView===false? textView===true : textView===false)}>View/Hide Text</button>

{textView === true && <h2>The Text</h2>} */}