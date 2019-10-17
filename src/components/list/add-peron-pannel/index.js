import React from 'react'

export default class SearchPanel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todoText: '',
            deadlineDate: ''
        };
        this.deadlineDate = React.createRef();
        this.todoText = React.createRef();
    }
    onAddTextButtonClicked = e => {         //SHIT
        e.preventDefault();
        this.setState(state => ({
            text: this.todoText
        }));
        console.log(this.state);
    };

    onAddTextButtonClicked = e => {         //SHIT
        e.preventDefault();
        this.setState(state => ({
            text: this.deadlineDate
        }));
        console.log(this.state);
    };

    render() {
        return(
            <div>
                <input placeholder="Дата дедлайна" type = "date" ref={this.deadlineDate}/>
                <input placeholder="Новый элемент" type = "text" ref={this.todoText}/>
                    <button onClick={this.onAddButtonClicked.bind(this)}>add</button>
            </div>
        )
    }
};