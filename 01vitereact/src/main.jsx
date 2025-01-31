import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return(
        <div>
            <h1>My App 2.0</h1>
        </div>
    )
}

const reactElement = {
    type: "a",
    props: {
      href: "https://www.google.com",
      target: "_blank",
    },
    children: ["Click me!"],
  };

  const anotherElement = (
    <a href="https://google.com" target='_blank'>GOOOOGLE</a>
  )

createRoot(document.getElementById('root')).render(
 
    // <MyApp />
    // MyApp()

    anotherElement
   
)