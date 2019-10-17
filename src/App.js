import React from 'react';
import './App.css';
import Table from "./components/list/table/table";
import SearchPanel from "./components/list/add-peron-pannel";

export default class App extends React.Component{
    render() {
        return (
            <div style={{display: "inline"}}>
                <SearchPanel/>
            </div>
        );
    }
}
