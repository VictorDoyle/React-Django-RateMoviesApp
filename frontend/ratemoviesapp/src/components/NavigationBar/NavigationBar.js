import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import { Input, Menu } from 'semantic-ui-react'
import SearchBar from '../SearchBar/SearchBar'

function NavigationBar() {
    const [activeItem, setActiveItem ] = useState("home")

    let handleItemClick = (e, { name }) => setActiveItem(name)
    /* const { activeItem } = this.state */
    return(
        <>
            <Menu secondary>

                <Link to={'/'}>
                <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={handleItemClick}
                />
                </Link>

                <Link to={'/movies'}>
                <Menu.Item
                name='movies'
                active={activeItem === 'movies'}
                onClick={handleItemClick}
                />
                </Link>

                <Link to={'/ratings'}>
                <Menu.Item
                name='ratings'
                active={activeItem === 'ratings'}
                onClick={handleItemClick}
                />
                </Link>

                <Menu.Menu position='right'>
                <Menu.Item>
                    <SearchBar />
                </Menu.Item>
                <Menu.Item
                    name='logout'
                    active={activeItem === 'logout'}
                    onClick={handleItemClick}
                />
                </Menu.Menu>
            </Menu>
        </>
    )


  
}

export default NavigationBar