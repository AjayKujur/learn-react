const divs = React.createElement('div',{ id: "parent"},
    React.createElement('div', {id : "child"}, 
        [React.createElement('h1', {id:"h1"}, 'I am an h1 tag'),
        React.createElement('h2', {id:"h2"}, 'I am an h2 tag')
        ]
    )
);


const header = React.createElement('h1', {id:"header"}, 'Hello, World from React separate JS file!');

console.log(header);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(divs);