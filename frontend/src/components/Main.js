import { Component } from "react";
import './Main.css';

class Main extends Component{
    state = {
        input: '',
    };

    handleInputChange = (event) => {
        this.setState({
            input: event.target.value,
        });
    }

    render(){
        const { input } = this.state;

        return (
            <div className="main">
                <h1>exemplo { input }</h1>

                <form action="#">
                    <input onChange={this.handleInputChange} type="text"></input>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        );
    }
}

export default Main;