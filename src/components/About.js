import React, { useState } from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btnText, setBtnText] = useState('Enable Dark Mode');

    const toggleStyle = () => {
        if(myStyle.color == 'white') {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
            })
            setBtnText('Enable Light Mode')
        }
        else {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
            })
            setBtnText('Enable Dark Mode')
        }
    }
    

  return (
    <div style={myStyle} className="p-4">
        <div classnName="accordion" id="accordionExample">
            <div classnName="accordion-item">
                <h2 classnName="accordion-header" id="headingOne">
                <button classnName="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" classnName="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div classnName="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div classnName="accordion-item">
                <h2 classnName="accordion-header" id="headingTwo">
                <button classnName="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" classnName="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div classnName="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div classnName="accordion-item">
                <h2 classnName="accordion-header" id="headingThree">
                <button classnName="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" classnName="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div classnName="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>

        <button onClick={toggleStyle} className='btn btn-primary'>{btnText}</button>
    </div>
  )
}
