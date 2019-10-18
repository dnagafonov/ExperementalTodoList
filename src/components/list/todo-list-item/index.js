import React from 'react'
import {persons} from '../persons'

export default class TodoListItem extends React.Component{
    constructor(props){
        super(props);
        const {idOfItem} = this.props;
    }

    state = {
        persons: persons,
    }

    getPersonTodoList = (list,idOfItem, idOfPerson, persons) => {
        
    }

    render() {
        return(
            <div>

            </div>
        );
    };
};