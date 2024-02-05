import React, {useState} from 'react'

export default function Textform(props) {

    const upClick= ()=>{
        let newText=text.toUpperCase();
        setText(newText);
        {props.showAlert("Uppercase Converted","success")};
    }

    const lowClick= ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        {props.showAlert("lowercase converted","success")};
    }

    const handleClear= ()=>{
        setText("");
        {props.showAlert("cleared text","success")};
    }

    const copyText= ()=>{
        let text=document.getElementById("my-box");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        {props.showAlert("copied to clipboard","success")};
    }
    
    const removeExtraSpaces = () => { 
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        {props.showAlert("extra spaces removed","success")};
    }
    
    const handleOnChange= (event)=>{
        setText(event.target.value);
    }


    const[text,setText]=useState("");

    return (
    <>
    <div className="mb-3" style={{color: props.mode==='light'? 'black' : 'white'}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" id="my-box" rows="10" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="light"?'white' : 'rgb(49 49 78)', color: props.mode==='light'?'black':'white'}}></textarea>
        <div className="container my-3">
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={upClick}>Convert To Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={lowClick}>Convert To Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleClear}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={copyText}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        </div>
    </div>

    <div className="container my-3" style={{color: props.mode==='light'? 'black' : 'white'}}>
        <h2>Summary</h2>
        <p>{text.length}-charcters {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}-words</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text: "Enter the text above to preview"}</p>
    </div>
    </>
  )
}

