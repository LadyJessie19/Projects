import { Component } from "react"

class Exe2 extends Component{
    constructor(props){
        super(props)
    }

    state={
        variable: 'I Wanna It All'
    }

    showSomething(){
        const { variable } = this.state

        if(variable === 'I Wanna It All'){
            this.setState({variable: "Boys Don't Cry"})
        } else if(variable === "Boys Don't Cry"){
            this.setState({variable: 'Yes, She Does'})
        } else if(variable === 'Yes, She Does'){
            this.setState({variable: 'I Wanna It All'})
        }  
    }

    render(){
        const {variable} = this.state
        const {name, funcao, array} = this.props
        return(
            <>
                <p>Mister Mautheias</p>
                <button onClick={() => this.showSomething()}>Next</button>
                <p><strong>switch the songs</strong></p>
                <p>{variable}</p>
                <p>{name}</p>
                <button onClick={() => funcao(variable)}>Imprime no Console</button>
                <div className="items">
                {array.map((item, index) => <p key={index}>{item}</p>)}
                </div>
            </>
        )
    }
}

export default Exe2

