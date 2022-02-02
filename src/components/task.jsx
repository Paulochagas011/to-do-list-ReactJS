import React, { Component } from "react";

class Task extends Component{
    constructor() {
        super();
        this.state = {
            hasFinished: false,
        };
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    handleCheckbox(event){
        this.setState({
            hasFinished: event.target.checked,
        }) 
    }

    render() {
        const {hasFinished} = this.state;
        const {data, onRemove} = this.props;
        const {id,title} = data;
        return(
            <div>
                <input type="checkbox" onChange={this.handleCheckbox} checked={hasFinished} />
                {title}
                <button type="button" onClick={() => onRemove(id)}>Remover</button>
            </div>
        );
    };

}

export default Task;