import React, { Component } from 'react'
import ListTask from '../conponents/ListTask'
import NewTask from '../conponents/NewTask'
import '../TodoList.css';
export default class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [{ name: 'eat Beakfast', deadline: 'now', priority: 'hight' }],
            name: '',
            deadline: '',
            priority: ''
        }
    }

    handleChangedName = (e) => {
        console.log(e.target.value);
        this.setState({ name: e.target.value },
            console.log(this.state.name));
    }

    handleChangedDeadline = (e) => {
        console.log(e.target.value);
        this.setState({ deadline: e.target.value },
            () => console.log("finish" + this.state.deadline));
    }

    inputText = (title, setState) => {
        return (
            <div class="input">
                <h3>{title}</h3>
                <input type="text" onChange={title == 'Name' ? this.handleChangedName : this.handleChangedDeadline} />
            </div>
        )
    }

    handleChecked = (e) => {
        this.setState({ priority: e.target.value },
            () => console.log("priority " + this.state.priority));
    }

    checkPriority = () => {
        return (
            <div onChange={this.handleChecked}>
                <h3>Priority</h3>
                <input type='radio' id="hight" name="priority" value="hight" />
                <label for="hight">Hight</label><br></br>
                <input type='radio' id="medium" name="priority" value="medium" />
                <label for="medium">Medium</label><br></br>
                <input type='radio' id="low" name="priority" value="low" />
                <label for="low">Low</label><br></br>
            </div>
        )
    }

    addNewTask = () => {
        console.log(this.state.name + " :" + this.state.deadline + " : " + this.state.priority);
        const item = {
            name: this.state.name,
            deadline: this.state.deadline,
            priority: this.state.priority
        }
        this.setState({ items: [...this.state.items, item] },
            () => { console.log( this.state.items) })
    }

    renderAddNewTask() {
        return (
            <div class="box">
                <h2>NewTask</h2>
                {this.inputText('Name')}
                {this.inputText('Deadline')}
                {this.checkPriority()}
                <button class="btnAdd" onClick={this.addNewTask}>Add</button>
            </div>
        )
    }

    renderTaskList() {
        return (
            <div class="box">
                <h2>List Task</h2>
                <div>
                    {this.state.items.map((e) => {
                        return (
                            <div key = {e.name}>
                                <input type="radio" />
                                {e.priority}-{e.name}-{e.deadline}
                                <button>delete</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div class="container">
                {this.renderAddNewTask()}
                {this.renderTaskList()}
            </div>
        )
    }
}
