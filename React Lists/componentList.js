import React from 'react';
import ReactDOM  from 'react-dom';

function Navbar(props){

    const list = props.menuitems;
    const updatedNumbers = list.map((Items) =>{
        return <li>{Items}</li>
    });

    return <ul>{updatedNumbers}</ul>
}

const menuItems = [1,2,3,4,5];

ReactDOM.render(
    <Navbar menuitems={menuItems} />,
    document.getElementById('root')
);