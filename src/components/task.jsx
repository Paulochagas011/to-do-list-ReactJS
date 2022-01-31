import React, { Component } from "react";

class Task extends Component{
    constructor() {
        super();
        this.state = {};
        
    }

    render() {
        const {data} = this.props;
        const {title} = data;
        return(
            <div>
                <input type="checkbox" />
                {title}
                <button type="button">Remover</button>
            </div>
        );
    };

}

export default Task;