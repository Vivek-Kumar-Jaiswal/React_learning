import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return <div>
    <h1>This is a component</h1>
  </div>
}
const reactElement= {
  type: 'a',
  props: {
      href: "https://www.google.com",
      target: "_blank"
  },
  children: "Click me to visit Google"
}

const randomVar= "Or just go and play";
const reactElement2= React.createElement(
  'a', 
  {
    href: "https://www.google.com", 
    target: "_blank"
  }, 
  "Click me to visit Google",
  randomVar
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)
