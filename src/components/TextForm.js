import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')
    const handleUpClick = () => {
        console.log("sdsd")
        let nt = text.toUpperCase()
        setText(nt)
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleLowClick = () => {
        console.log("sdsd")
        let nt = text.toUpperCase()
        setText(nt)
        props.showAlert("Converted to Lowercase", "success")

    }
    const handleReset = () => {
        props.showAlert("Resetted", "success")

        setText("")
    }
    const handleOnChange = (event) => {
        console.log("on change")
        setText(event.target.value)
    }
    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}> <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? '#042743' : 'white' }} id="exampleFormControlTextarea1" rows="8"></textarea>

                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleReset}>Reset</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").filter(x => x.length > 0).length} words {text.length} characters</p>
                <p> {0.008 * text.split(" ").filter(x => x.length > 0).length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something to preview"}</p>
            </div>
        </>
    )
}
