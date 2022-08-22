import React,{useState} from 'react'

export default function Textform(Props) {
    const Handleonclick = ()=>{
        // console.log('haha' + text)
        let Newtext = text.toUpperCase()
        setText(Newtext)

    }
    const Handleonclick2 = ()=>{
        // console.log('haha' + text)
        let Newtext = text.toLowerCase()
        setText(Newtext)

    }
    
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }
    const Handledelclick = ()=>{
        // console.log('haha' + text)
        let Newtext = text.slice(0,-1)
        setText(Newtext)

    }

    const Handleclclick = ()=>{
        // console.log('haha' + text)
        let Newtext =' '
        setText(Newtext)

    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    //   It is targetted by the button 'speak':

    const Handleonchange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState("Text please :)");
  return (
    <>
    <div className="container" style= {{color: Props.Mode==='dark'?'white':'black'}}>
        <h2>{Props.heading}</h2><br/>
        <div className="form-floating">
    <textarea className="form-control" style= {{background: Props.Mode==='dark'?'grey':'#f3f3f3'}} value={text} onChange={Handleonchange} placeholder="Leave a comment here" rows = "8" hight = "200px" id="floatingTextarea"></textarea>
    </div>
    <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>

    <button className="btn btn-dark mx-1" onClick={Handleonclick}>Capital letter</button>
    <button className="btn btn-dark mx-1" onClick={Handleonclick2}>Small letter</button>
    <button className="btn btn-dark mx-1" onClick={Handledelclick}>Delete</button>
    <button className="btn btn-dark mx-1" onClick={Handleclclick}>Clear all</button>
    <button className="btn btn-dark mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>

    {/* <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button> */}

  </div>
  <div className="container my-3"style= {{color: Props.Mode==='dark'?'white':'black'}}>
    <h2 >Your Text summary:</h2>

    <h3>Count</h3>
    <p>{text.split(' ').length-1} words and {text.length} characters</p>
    <h3>Preview</h3>
    <p>{text}</p>
  </div>
  </>
  )
}

