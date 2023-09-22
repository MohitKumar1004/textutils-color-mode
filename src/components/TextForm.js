import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('');

    // // To undo
    // const undo=()=>{
    //     let item=localStorage.getItem(1,text)
    //     setText(item)
    // }

    // To convert HTML to JSX
    const handleHTMLtoJSXClick=()=>{
        let newtext=text.replace("class=","className=").replace("href","to");
        setText(newtext);
        props.showAlert("HTML Converted to JSX!","success")
    };
    
    // Convert to Upper Case
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!","success")
    }

    // Convert to Lower Case
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase!","success")
    }

    // Clear Editor
    const handleClearClick=()=>{
        setText('')
        props.showAlert("Text Cleared!","success")
    }
    
    // Speak Sentances
    const handleSpeakClick=()=>{
        let msg=new SpeechSynthesisUtterance(text)
        window.speechSynthesis.speak(msg)
        // to stop speech mid way
        const toggle=document.getElementById('speaking')
        if(toggle.textContent==="Speak"){
            toggle.innerHTML="Stop"
            props.showAlert("Speech has been enabled!","success")
        }
        else {
            toggle.innerHTML="Speak"
            if(toggle.innerHTML==="Speak"){
                window.speechSynthesis.cancel()
                props.showAlert("Speech has been disabled!","success")
            }
        }
    }
    
    // Copy Complete Text
    const handleCopyClick=()=>{
        const copy = document.getElementById("myBox")
        copy.select()
        navigator.clipboard.writeText(copy.value)
        document.getSelection().removeAllRanges()
        props.showAlert("Copied to Clipboard!","success")
    }

    // Paste Complete Text
    const handlePasteClick = ()=>{
        const paste=navigator.clipboard.readText()
        setText(paste)
        props.showAlert("Pasted from Clipboard!","success")
    }

    // Remove Extra Spaces
    const handleExtraSpacesClick=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces removed!","success")
    }

    // Use of useState in OnChange of TextArea to Change Text in real time
    const handleOnChange=(event)=>{
        // console.log("SomeThing Changed")
        setText(event.target.value)
    }

    // To read a given file stored in system
    const handleReadTxtClick=(event)=>{
        let file=event.target.files[0]
        let reader=new FileReader()
        reader.onload=function(event){
            setText(event.target.result)
        }
        reader.readAsText(file)
        props.showAlert("File Read successfully!","success")
    }

    // To download as txt file
    const handleDownloadTxtFileClick = () => {
        const element=document.createElement("a");
        const file=new Blob([(text+"\n\t\t\tCreated By Mohit")], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "TextEditedFile.txt";
        element.click();
        props.showAlert("Downloaded file as txt!","success")
    }

    // To sort text
    const handleSortClick = ()=> {
        let newText = text.split(' ').filter((e)=>{return e!==""});
        const sortText = newText.sort()
        setText(sortText.join(" "));
        props.showAlert("All words are sorted!","success")
    }

    // To Capitalize each word
    const handleCapitalizeClick=()=> {
        let ans=""
        text.split(" ").forEach((word)=>{
            const lower = word.toLowerCase()
            ans+=(lower.charAt(0).toUpperCase() + lower.slice(1) + " ")
        })
        setText(ans)
        props.showAlert("All words are capitalized!","success")
    }

    // To remove Special Characters
    const handleRemSpclChClick = ()=>{
        setText(text.replace(/[^a-zA-Z0-9 ]/g,""))
        props.showAlert("Special Characters Removed!","success")
    }

    // To Create a Text to Morse Code
    const handleAlphaToMorseCodeClick=()=>{
        const morseCodeMapping = {
            A:".-",
            B:"-...",
            C:"-.-.",
            D:"-..",
            E:".",
            F:"..-.",
            G:"--.",
            H:"....",
            I:"..",
            J:".---",
            K:"-.-",
            L:".-..",
            M:"--",
            N:"-.",
            O:"---",
            P:".--.",
            Q:"--.-",
            R:".-.",
            S:"...",
            T:"-",
            U:"..-",
            V:"...-",
            W:".--",
            X:"-..-",
            Y:"-.--",
            Z:"--..",
        }
        let textToConvert=text.toUpperCase();
        let MorseCodeText="";
        for(let i=0;i<textToConvert.length;i++) {
            let character=textToConvert[i];
            if(character===" ") 
            {
                MorseCodeText+=" ";
            }
            else if(morseCodeMapping.hasOwnProperty(character)) 
            {
                MorseCodeText+=morseCodeMapping[character]+" "; 
            }
            else 
            {
                MorseCodeText="Invalid character";
                break;
            }
        }
        setText(MorseCodeText);
        props.showAlert("Converted to Morse Code!","success")
    }
    
    // To Create a Text to Morse Code
    const handleMorseToAlphaCodeClick=()=>{
        const MorseToAlphaMapping = {
            ".-":"a",
            "-...":"b",
            "-.-.":"c",
            "-..":"d",
            ".":"e",
            "..-.":"f",
            "--.":"g",
            "....":"h",
            "..":"i",
            ".---":"j",
            "-.-":"k",
            ".-..":"l",
            "--":"m",
            "-.":"n",
            "---":"o",
            ".--.":"p",
            "--.-":"q",
            ".-.":"r",
            "...":"s",
            "-":"t",
            "..-":"u",
            "...-":"v",
            ".--":"w",
            "-..-":"x",
            "-.--":"y",
            "--..":"z",
        }
        let MorseCodeText=text.split(" ").filter((e)=>e!=="");
        let newAlphabeticText="";
        for(let character of MorseCodeText) {
            if(character in MorseToAlphaMapping) 
            {
                newAlphabeticText+=MorseToAlphaMapping[character]; 
            }
            else 
            {
                newAlphabeticText="Invalid character"
                break
            }
            MorseCodeText+=" "
        }
        setText(newAlphabeticText);
        props.showAlert("Converted from Morse Code to Alphabets!","success")
    }

    // To encode text to base64
    function handleBase64EncodeClick() {
        setText(btoa(text));
        props.showAlert("Converted from Text to Base64!","success")
    }

    // To decode base64 to text
    function handleBase64DecodeClick() {
        setText(atob(text));
        props.showAlert("Converted from Base64 to Text!","success")
    }

    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
                <div className="mb-3">
                    <h1 className="mb-4">{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'#042743'}}></textarea>
                </div>
                <div className="grid text-center">
                    {/* <button className="btn btn-primary m-1 g-col-2" onClick={undo}>Undo</button> */}
                    <button disabled={text.length===0} className="btn btn-primary m-1 g-col-2" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button disabled={text.length===0} className="btn btn-primary m-1 g-col-2" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button disabled={text.length===0} className="btn btn-primary m-1 g-col-2" onClick={handleSpeakClick} id="speaking">Speak</button>
                    <button disabled={text.length===0} className="btn btn-primary m-1 g-col-2" onClick={handleClearClick}>Clear Text</button>
                    <button disabled={text.length===0} className="btn btn-primary m-1 g-col-2" onClick={handleCopyClick}>Copy Text</button>
                    <button disabled={text.length===0} className="btn btn-primary m-1 g-col-2" onClick={handlePasteClick}>Paste Text</button>
                    <button disabled={text.length===0} className="btn btn-primary m-1 g-col-2" onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
                    <button disabled={text.length===0} className="btn btn-primary m-1 g-col-2" onClick={handleRemSpclChClick}>Remove Special Characters</button>
                    <button disabled={text.length===0} className="btn btn-primary m-1 g-col-2" onClick={handleCapitalizeClick}>Capitalize all words</button>
                    <button disabled={text.length===0} className="btn btn-primary m-1 g-col-2" onClick={handleSortClick}>Sort all words</button>
                    <button disabled={text.length===0} className="btn btn-primary m-1 g-col-2" onClick={handleBase64EncodeClick}>Encode Base64</button>
                    <button disabled={text.length===0} className="btn btn-primary m-1 g-col-2" onClick={handleBase64DecodeClick}>Decode Base64</button>
                    <button disabled={text.length===0} className="btn btn-primary m-1 g-col-2" onClick={handleAlphaToMorseCodeClick}>Convert to Morse Code</button>
                    <button disabled={text.length===0} className="btn btn-primary m-1 g-col-2" onClick={handleMorseToAlphaCodeClick}>Convert from Morse Code to Alphabets</button>
                    <button disabled={text.length===0} className="btn btn-primary m-1 g-col-2" onClick={handleHTMLtoJSXClick}>Convert from HTML to JSX</button>
                    <button disabled={text.length===0} className="btn btn-primary m-1 g-col-2" onClick={handleDownloadTxtFileClick}>Download as txt File</button>
                    <input type="file" className="btn btn-primary m-1 g-col-2" accept="text/plain" onChange={handleReadTxtClick}/>
                </div>
            </div>
            <div className='container m-1' style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Your text summary</h2>
                <p>
                    Words count: {text.split(" ").filter((e)=>{return e!==""}).length}
                    <br/>
                    Characters count: {text.length}
                    <br/>
                    Sentence count: {text.split(/[.?!]\s/).filter((e)=>{return e!==""}).length}
                    <br/>
                    Paragraph count: {text.split(/\r\n|\r|\n/).filter((e)=>{return e!==""}).length}
                    <br/>
                    {0.008 * text.split(" ").filter((e)=>{return e!==""}).length} Minutes read
                </p>
                <h2>Preview</h2>
                <p>
                    {text.length>0?text:'Nothing to preview'}</p>
            </div>
        </>
    )
}