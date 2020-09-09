import styled from 'styled-components';

export const NavigationItems = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    height: 100%;
    flex-flow: column;
    @media (min-width: 500px) {
        flex-flow: row;
    }
`;

export const NavigationItem = styled.li`
    margin: 10px 0;
    display: block;
    box-sizing: border-box;
    width: 100%;
    a {
        color: #8F5C2C;
        text-decoration: none;
        width: 100%;
        box-sizing: border-box;
        display: block;
    }
    .active,
    &:hover { 
        color: #40A4C8;
    }
    @media (min-width: 500px) {
        margin: 0;
        display: flex;
        height: 100%;
        width: auto;
        align-items: center;
        a {
            color: white;
            height: 100%;
            padding: 16px 10px;
            border-bottom: 4px solid transparent;
        }
        .active,
        &:hover {
            background-color: #8F5C2C;
            border-bottom: 4px solid #40A4C8; 
            color: white;
        }
    }
`;


