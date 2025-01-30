function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.title)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
} 

const reactElement = {
    type: 'h1',
    props: {
        title: 'https://www.google.com',
        target: 'root'
    },
    children: ['Click me!']
}

const mainContainer = document.querySelector('#root') 

customRender(reactElement, mainContainer) 