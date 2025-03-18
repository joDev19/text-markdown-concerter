import { useEffect, useState } from 'react'
import './App.css'

const TextArea = ({text, handleChange}) => {
  
  
  return (<textarea id="editor" value={text} onChange={handleChange} ></textarea>)
}
const Preview = ({text}) => {
  text = text.replace(/\n/g, "<br />")
  text = {__html: text}
  return (<div id="preview" dangerouslySetInnerHTML={text}></div>)
}
function App() {
  const [text, setText] = useState("")
  let [html, setHtml] = useState("")
  useEffect(() => {
    let converter = new showdown.Converter()
    setHtml(converter.makeHtml(text));
  }, [text])

  const handleChange = (e) => {
    setText(e.target.value)
    console.log("generer un nouveau rendu")
   
  }

  return (
    <>
      <TextArea text={text} handleChange={e =>handleChange(e)}></TextArea>
      <Preview text={html}></Preview>
    </>
  )
}

export default App
