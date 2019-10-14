import React from 'react';
import '../../App.css';
import {persons} from './persons'

export default class App extends React.Component{
    state= {
        persons:persons
    };

    displayPerson = person => {
        const newList = person.map((el,index) => {
            return(
                <li key={index}>
                    <div>{el.name}</div>
                    <ul>{this.displayPersonList(el.list)}</ul>
                </li>
            )
        });
        return (<ul>{newList}</ul>)
    };

    displayPersonList = list => {
        const newList = list.map((el,index) => {
            return(
                <li key={index}>
                    <p>{index}</p>
                    <ul>
                        <li key = '0'>{el.start}</li>
                        <li key = '1'>{el.end}</li>
                        <li key = '2'>{el.text}</li>
                    </ul>
                </li>
            )
        });
        return (<ul>{newList}</ul>)
    };

    render() {
        return (
            <div>
                {this.displayPerson(persons)}
            </div>
        );
    }
}