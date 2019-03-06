import React ,{Component} from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props=> (
 <tr>
   <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
   <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsibility}</td>
   <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
   <td><Link to={"/edit/"+props.todo._id}>Edit</Link></td>
 </tr>
)


 
export default class TodosList extends Component{
   
  constructor(props)
  {
    super(props);
    this.state = {todos:[]};
  }

  componentDidMount(){
    axios.get('http://localhost:4000/todos')
          .then(res=>{
            this.setState({todos:res.data})
          })
          .catch(err=>{
            console.log(err);
          })
  }

  componentDidUpdate()
  {
    axios.get('http://localhost:4000/todos')
    .then(res=>{
      this.setState({todos:res.data})
    })
    .catch(err=>{
      console.log(err);
    })
  }

   todoList(){
     return this.state.todos.map(function(cur,i){
       return <Todo todo={cur} key={i} />;
     });
   }
  render() {
      return (
          <div>
           <h3>LIST</h3>
           <table className="table table-striped">
    <thead>
      <tr>
        <th>description</th>
        <th>responsible</th>
        <th>priority</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
          {this.todoList()}
    </tbody>
  </table>
          </div>
    )
  }
}