const Header = (props) => {
    return(
        <div className="header">
            <h1>Jessie' Form, Mate!</h1>
            {props.name === ''? <h2>Fill the form</h2> : <h2>Hi, {props.name}</h2>}
        </div>
    )
}

export default Header