import React,{useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('set text here');

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearText = () => {
        setText('');
    }

  return (
    <>
        <div>        
            <h4>{props.heading}</h4>
            <div className="mb-3">            
                <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button onClick={handleUpClick} className="btn btn-primary">Convert to Uppercase</button>
            <button onClick={handleLowClick} className="btn btn-primary mx-2">Convert to lowercase</button>
            <button onClick={handleClearText} className="btn btn-primary mx-2">Clear</button>
        </div>
        <div className='container my-4'>
            <h5>{text.split(" ").length - 1} words and {text.length}: characters</h5>
            <h5>Reading Time: {0.008 * text.split(" ").length}</h5>
        </div>
        <h5>Preview:</h5>
        <p>{text}</p>
    </>
  )
}
