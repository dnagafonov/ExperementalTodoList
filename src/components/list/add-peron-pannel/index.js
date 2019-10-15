import React from 'react'

export default class SearchPanel extends React.Component{
    state = {
        text: "standard text"
    }
    onAddButtonClicked = () => {
        console.log("SOSI", this.addInformation.value)
        this.setState({text: this.addInformation})
    }
    render() {
        return(
            <div>
                <input placeholder="Новый элемент" type = "text" ref={el => this.addInformation = el}/>
                    <button onClick={this.onAddButtonClicked.bind(this)}>addEl</button>
            </div>
        )
    }
};