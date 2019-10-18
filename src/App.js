import React from 'react';
import './App.css';
import SearchPanel from "./components/list/add-person-pannel";
import DoneTodoList from './components/DoneTodoList'

export default class App extends React.Component{
    render() {
        return (
            <div>
                <DoneTodoList/>
            </div>
        );
    }
}
