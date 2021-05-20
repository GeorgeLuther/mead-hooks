let isShown = false;

const onShowDetails=()=>{
    isShown = !isShown;
    render();    
}

const appRoot = document.getElementById('app');

const render=()=>{
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onShowDetails}>{isShown ? 'Hide details' : 'Show details'}</button>
            {isShown && <p className="details">I am the details!!</p>}
        </div>
    )
    ReactDOM.render(jsx, appRoot)
}

render();