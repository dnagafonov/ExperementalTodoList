import React from 'react'

export default class SearchPanel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todoText: '',
            deadlineDate: '',
            startDate:''
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

    addStartDate = () => {
        let date = new Date();
        this.setState(({
            startDate: date.toDateString()
        }));
    };

    updateData = () => {
        this.onAddTextButtonClicked();
        this.addDeadlineDate();
        this.addStartDate();
    };

    render() {
        return(
            <div>
                <input type = "date" ref={this.deadlineDate}/>
                <input placeholder="Новый элемент" type = "text" ref={this.todoText}/>
                    <button onClick={this.updateData.bind(this)}>add</button>
            </div>
        )
    }
};