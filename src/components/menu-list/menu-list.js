import React from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux'
import WithRestoService from '../hoc'
import { menuLoaded, menuRequested } from '../../actions';
import {useEffect} from 'react'
import Spinner from '../spinner'
 
import './menu-list.scss';


const MenuList = (props) => {
    useEffect(() => {
        const {RestoService, menuLoaded} = props
        props.menuRequested()

        RestoService.getMenuItems()
        .then(res => menuLoaded(res))
    }, [])

    const {menuItems, loading} = props

    if (loading) {
        return <Spinner/>
    }

    return (
        <ul className="menu__list">
            {
                menuItems.map(menuItem => {
                    return <MenuListItem key={menuItem.id} menuItem={menuItem}/>
                })
            }
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));