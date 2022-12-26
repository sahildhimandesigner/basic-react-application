import React,{useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('set text here');

    const handleOnChange = (event) => {
        console.log('on change');
        setText(event.target.value);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

  return (
    <div>        
        <h4>{props.heading}</h4>
        <div className="mb-3">            
            <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
        </div>
        <button onClick={handleUpClick} className="btn btn-primary">Convert to Uppercase</button>
    </div>
  )
}
