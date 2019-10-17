import React from 'react';
import {persons} from '../persons'
import "./table.css"

export default class Table extends React.Component{
    state= {
        persons: persons
    };

    displayPerson = person => {
        const newList = person.map((el,index) => {
            return(
                <>
                    <div className="name-style">
                        <h5>{el.name}</h5>
                    </div>
                    <div>
                        <div key={index} className="table-info">
                            <>{this.displayPersonList(el.list)}</>
                        </div>
                    </div>
                </>
            )
        });
        return (<div className='my-table'>{newList}</div>)
    };

    displayPersonList = list => {
        const newList = list.map((el,index) => {
            return(
                <div key={index}>
                    <p>{index+1}-ое задание</p>
                    <ul>
                        <li key = '0'>{el.start}</li>
                        <li key = '1'>{el.end}</li>
                        <li key = '2'>{el.text}</li>
                    </ul>
                </div>
            )
        });
        return <>{newList}</>
    };

    render() {
        return (
            <div>
                {this.displayPerson(persons)}
            </div>
        );
    }
}