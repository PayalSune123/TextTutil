import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Upper case was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");

    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success");
    }
     const handleClearClick=()=>{
        let newText='';
        setText(newText);
        props.showAlert("Converted to all text is clear","success");
    }
    const handleCapitalizeClick=()=>{
        let words=text.toLowerCase().split(' ');
        for(let i=0;i<words.length;i++)
        {
            if(words[i].length>0)
            {
                words[i]=words[i][0].toUpperCase()+words[i].slice(1);

            }
        }
        let newText=words.join(' ');
        setText(newText);
        props.showAlert("each letter is capitalized ","success");
    }
    const handleReverseword=()=>{
        let words=text.split(' ');
        for(let i=0;i<words.length;i++ )
        {
            words[i]=words[i].split('').reverse().join('');
        }
        let newText=words.join(' ');
        setText(newText);
        props.showAlert("Converted to reversecase","success");
    }
    const handlecopy=()=>{
        navigator.clipboard.writeText(text)
        props.showAlert("copieed","success");
    
    }

    const handleChange=(e)=>{
        // console.log("Change text was clicked");
        setText(e.target.value);

    }
   
    const[text,setText]=useState("enter text here");
  return (
    <>
    <div class="container" style={{color:props.mode==='dark'?'white':'black'}}>
     <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}onChange={handleChange} id="mybox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert_to_UpperCase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert_to_LowerCase</button>
    <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear</button>
    <button className="btn btn-primary mx-2" onClick={handleCapitalizeClick}>CapitalizeFirst</button>
    <button className="btn btn-primary mx-2" onClick={handleReverseword}>Reverse each words</button>
    <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy to Clipboard</button>

    </div>
    
    <div classNmae="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text sumarry</h2>
        <p>{text.split(" ").length} words,{text.length} Charcters</p>
        
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"enter something to preview"}</p>

    </div>
    </>
    
  )
}
