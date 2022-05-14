import React, { Component } from 'react'
import '../TodoList.css';

export default class NewTask extends Component {
    inputText = (title) => {
        return (
            <div class="input">
                <h3>{title}</h3>
                <input type="text" />
            </div>
        )
    }

    checkPriority = () => {
        return (
        <form>
            <input type='radio' id="hight" name="priority" value="hight"/>
            <label for="hight">Hight</label><br></br>
            <input type='radio' id="medium" name="priority" value="hight"/>
            <label for="medium">Medium</label><br></br>
            <input type='radio' id="low" name="priority" value="hight"/>
            <label for="low">Low</label><br></br>
        </form>
        )
    }

  render() {
    return (
      <div class="box">
        <h2>NewTask</h2>
        {this.inputText('Name')}
        {this.inputText('Deadline')}
        {this.checkPriority()}
        <button class="btnAdd">Add</button>
      </div>
    )
  }
}
