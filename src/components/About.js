import React from 'react'

export default function About(props) {
    let myStyle={
      color: props.mode==='dark'?'white':'#042743',
      backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white'
    }

    // const [myStyle,setMyStyle] = useState({
    //     color:'white',
    //     backgroundColor:'black'
    // })

    // const [btnText,setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle=()=>{
    //     if(myStyle.color==='white'){
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    // }
  return (
    <div className="container p-5 rounded" style={myStyle}>
        <h1 className="mb-3">About Us</h1>
        <div className="accordion" id="accordionExample">
      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze your text</strong>
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            TextUtils gives you a way to analyse your text quickly and efficiently. Be it word count, character count or
          </div>
        </div>
      </div>
      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <strong>Free to use</strong>
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with words/character limit.
          </div>
        </div>
      </div>
      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          <strong>Browser Compatible</strong>
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            This word counter software works in any web browsers such as Chrome, FireFox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
          </div>
        </div>
      </div>
      </div>
      {/* <div className="container my-3">
      <button type="button" onClick={toggleStyle} className="btn btn-primary mb-3">{btnText}</button>
      </div> */}
    </div>
  )
}
