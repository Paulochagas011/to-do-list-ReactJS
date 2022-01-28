import React,{ Component } from "react";

class AddTask extends Component {
    
    constructor() {
        super();
        this.state = {
            title: '',
        };
        this.handleInput = this.handleInput.bind(this);
    }
    
    handleInput(event) {
        this.setState({
            title: event.target.value,
        });
    }
    
    render(){
        const {title} = this.state;
        const {onCreate} = this.props;
        return(
            <form onSubmit={(event) => onCreate(event, this.state)}>
              <input type='text' value={title} onChange={this.handleInput}/>
              <button type='submit'>Adicionar tarefa</button>
          </form>
        );
    }
}

export default AddTask;