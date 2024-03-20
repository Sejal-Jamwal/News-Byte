import React, {useState} from 'react'


export default function Textform(props) {
   
    const[text, setText] = useState("Enter text area");

    const buttonOnClick=()=>{
        // console.log("Convert button was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.alertFunction("Converted to uppercase", "success");
    }

    const buttonDownClick=()=>{
       let newText = text.toLowerCase();
       setText(newText);
       props.alertFunction("Converted to lowercase", "success");
    }

    const handleOnChange=(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }

    const buttonDelete=()=>{
       setText(" ");
       props.alertFunction("Text deleted", "success");
    }
    
  return (
    <>
    <div>
<div className="container my-4" style={{color: props.mode==='dark' ? 'white':'black'}}>
<h1>{props.heading}</h1>
</div>


<div className="mb-3  mx-4 " style={{color: props.mode==='dark'?'white':'black'}}>
  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? 'grey':'white', color: props.mode==='dark' ? 'white':'black'}} ></textarea>
</div>

<button className="btn btn-primary mx-4" onClick = {buttonOnClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-4" onClick = {buttonDownClick}>Convert to Lowercase</button>
<button type="button" className="btn btn-secondary mx-4" onClick= {buttonDelete}>Delete Text</button>
      
    </div>
    
    <div className="container my-4" style={{color: props.mode==='dark' ? 'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>There are {text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>

    </div>

    </>
  )
}
