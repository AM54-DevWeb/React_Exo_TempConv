class Convertisseur extends React.Component {
    constructor(props) {
        super(props)
        this.state = { temp: 0 }
    }
    chgImpC(event) {
        this.setState({ temp: event.target.value })
    }
    chgImpF(event) {
        this.setState({ temp: ((event.target.value - 32) * 5 / 9) })
    }
    affBoue() {
        if (this.state.temp >= 100) {
            return <p>L'eau boue</p>
        }
        else {
            return <p>L'eau ne boue pas</p>
        }
    }
    render() {
        return (
            <div>
                <label htmlFor="celcius">Temperature en Celcius</label><br />
                <input type="text" id="celcius" value={this.state.temp} onChange={this.chgImpC.bind(this)} /><br />
                <label htmlFor="Fahrenheit">Temperature en Fahrenheit</label><br />
                <input type="text" id="Fahrenheit" value={((this.state.temp * 9 / 5) + 32)} onChange={this.chgImpF.bind(this)} /><br />
                {this.affBoue()}

            </div>
        )
    }
}

function Temperature(props){
    return(
        <div>
            <label htmlFor={props.unite}>Temperature en {props.unite}</label><br />
            <input type="text" id={props.unite} value={props.value} onChange={props.chg} /><br />

            <label htmlFor={props.unite}>Temperature en {props.unite}</label><br />
            <input type="text" id={props.unite} value={props.value} onChange={props.chg} /><br />
        </div>
    )
}


let texte = <Convertisseur></Convertisseur>

ReactDOM.render(texte, document.getElementById("app"))