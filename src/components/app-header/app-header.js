import React from 'react'
import './app-header.css'
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;   
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'red' : 'black'};
        :hover {
            color: red;
        }
        text-decoration: none;
    } 
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = ({liked, allPosts}) => {
    return (
    <Header colored={false} as='a'>
        <h1>Azure Phoenix</h1>
        <h2>{allPosts} Записей, из них понравилось {liked}</h2>
    </Header>
    )
}

export default AppHeader;