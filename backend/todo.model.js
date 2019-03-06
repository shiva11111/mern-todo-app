const mongoose=require('mongoose');

const Schema=mongoose.Schema;

let todo =new Schema({
    todo_description:{type:String},
    todo_responsibility:{type:String},
    todo_priority:{type:String},
    todo_completed:{type:Boolean}
});

module.exports = mongoose.model('Todo',todo);