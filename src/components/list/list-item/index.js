import React from 'react';
import {persons} from '../persons';

export default class ListItem extends React.Component{
    state = {
        persons: persons
    }
    render() {
        return(
            <div></div>
        );
    }
}