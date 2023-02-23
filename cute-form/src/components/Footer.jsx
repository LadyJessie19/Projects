const Footer = (props) => {
    return(
        <div className="footer">
            {props.array.map((item, index) => <span key={index}> {item} </span>)}
        </div>
    )
}

export default Footer