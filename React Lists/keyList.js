import React from 'react';
import ReactDOM from 'react-dom';

function Navbar(props){
    const list = props.menuitems;

    const updateNumber = list.map((items) => {
        return(
            <li key = {items.toString()}>{items}</li>
        )
    });

    return(
        <ul>
            {updateNumber}
        </ul>
    )
}


const menuItems = [1,2,3,4,5];

ReactDOM.render(
    <Navbar menuitems = {menuItems} />,
    document.getElementById('root')
);