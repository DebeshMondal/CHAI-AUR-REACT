function customRender(reactElement, container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.title)
    // domElement.setAttribute('target', reactElement.props.target)

    // container.appendChild(domElement)


    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
       if (prop === 'children')  continue;
          domElement.setAttribute(prop, reactElement.props[prop])  
        }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        title: 'https://www.google.com',
        target: 'root'
    },
    children: ['Click me!']
}

const mainContainer = document.querySelector('#root') 

customRender(reactElement, mainContainer) 