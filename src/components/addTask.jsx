import React,{ Component } from "react";

class AddTask extends Component {
    
    constructor() {
        super();
        this.state = {

        };
    }
    
    
    render(){
        return(
            <form>
              <input type='text' onChange={(event) => console.log(event.target.value)}/>
              <button type='button'>Adicionar tarefa</button>
          </form>
        );
    }
}
 export default AddTask;