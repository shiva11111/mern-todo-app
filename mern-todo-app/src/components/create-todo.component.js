import React ,{Component} from 'react';
import axios from 'axios';

export default class CreateTodo extends Component
{
constructor(props) {
    super(props);


    this.onChangeDescription=this.onChangeDescription.bind(this);
    this.onChangeResponsibility=this.onChangeResponsibility.bind(this);
    this.onChangePriority=this.onChangePriority.bind(this);
    this.onSumbit=this.onSumbit.bind(this);     

this.state={
        todo_des:"",
        todo_res:"",
        todo_pri:"",
        todo_com:false
    }
}    
onChangeDescription(e)
{
    this.setState( {
        todo_des:e.target.value
    })
}
onChangeResponsibility(e)
{
    this.setState( {
        todo_res:e.target.value
    })
}
onChangePriority(e)
{
    this.setState( {
        todo_pri:e.target.value
    })
}

onSumbit(e)
{
    e.preventDefault();

     console.log(`todo des:${this.state.todo_des}`)
     console.log(`todo res:${this.state.todo_res}`)
     console.log(`todo pri:${this.state.todo_pri}`)
     console.log(`todo com:${this.state.todo_com}`)
     
     const newTodo ={
         todo_description:this.state.todo_des,
         todo_responsibility:this.state.todo_res,
         todo_priority:this.state.todo_pri,
         todo_completed:this.state.todo_com
     }

     axios.post('http://localhost:4000/todos/add',newTodo)
          .then(res=>{
              console.log(res.data);
          })
      
    this.setState({
        todo_des:"",
        todo_res:"",
        todo_pri:"",
        todo_com:false
    })

}
  render()  
  {
      return(
          <div>
        <form onSubmit={this.onSumbit}>
        <div className="form-group">
          <label >Description:</label>
          <input type="text" className="form-control" id="des"
             value={this.state.todo_des}
             onChange={this.onChangeDescription}
         / >
        </div>
        <div className="form-group">
          <label >Resonsibility:</label>
          <input type="text" className="form-control" id="res"
             value={this.state.todo_res}
             onChange={this.onChangeResponsibility}
       /   >
        </div>
        <div className="form-group">
        <div className="form-check form-check-inline">
          <label >low:</label>
          <input type="radio" value="Low" className="form-check-input" id="priL"
             checked={this.state.todo_pri==='Low'}
             onChange={this.onChangePriority}
        /  >
        </div>
    
        <div className="form-check form-check-inline">
          <label>med:</label>
          <input type="radio" value="Medium" className="form-check-input" id="priM"
             checked={this.state.todo_pri==='Medium'}
             onChange={this.onChangePriority}
        /  >
        </div>
        <div className="form-check form-check-inline">
          <label>high:</label>
          <input type="radio" value="High" className="form-check-input" id="priH"
             checked={this.state.todo_pri==='High'}
             onChange={this.onChangePriority} /  >
        </div>
        </div>

        <input type="submit" className="btn btn-primary" value="Create Todo" />
      </form>
     </div>
      )
  }
}