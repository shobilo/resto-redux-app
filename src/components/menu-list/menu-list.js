import React from 'react';
import MenuListItem from '../menu-list-item';

import './menu-list.scss';

const MenuList = () => {
    return (
        <ul className="menu__list">
            <MenuListItem/>
        </ul>
    )
};


export default MenuList;