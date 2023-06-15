
import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('upper case was clicked' + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success")
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "success")
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Converted to UpperCase", "success")
        props.showAlert("All text has been cleared", "success")
    }

    const handleCopy = () => {
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value)
        props.showAlert("All text has been copied", "success")
    
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces between words has been removed", "success")
    
    }



    const handleOnChange = (event) => {

        // console.log("on Change");
        setText(event.target.value)

    }




    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>

        
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange}
                        style={{
                            backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                            color:props.mode==='dark'?'white':'black'
                        }}
                        id="myBox" rows="8" placeholder="enter the text & Convert">
                            
                    </textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-3 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Your text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter Something To preview it here" }</p>
            </div>
            </>
    )
}







