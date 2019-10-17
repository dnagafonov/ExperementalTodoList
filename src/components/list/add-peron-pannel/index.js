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

    componentDidUpdate() {
        console.log(this.state)
    }

    onAddTextButtonClicked = () => {
        this.setState(({
            todoText: this.todoText.current.value
        }));
    };

    addDeadlineDate = () => {
        this.setState(({
            deadlineDate: this.deadlineDate.current.value
        }));
    };

    updateData = () => {
        this.onAddTextButtonClicked();
        this.addDeadlineDate();
    };

    render() {
        return(
            <div>
                <input type = "date" ref={this.addDeadlineDate}/>
                <input placeholder="Новый элемент" type = "text" ref={this.todoText}/>
                    <button onClick={this.updateData.bind(this)}>add</button>
            </div>
        )
    }
};