import styled from 'styled-components';

export const BuildControl = styled.div`
    width: 100%;
    background-color: #CF8F2E;
    display: flex;
    flex-flow: column;
    align-items: center;
    box-shadow: 0 2px 1px #ccc;
    margin: auto;
    padding: 10px 0;
`;

export const Button = styled.button`
    background-color: ${props => props.disabled ? '#C7C6C6' : '#DAD735' };
    outline: none;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer' };
    border: 1px solid #966909;
    color: ${props => props.disabled ? '#888888' : '#966909' };
    font-family: inherit;
    font-size: 1.2em;
    padding: 15px 30px;
    box-shadow: 2px 2px 2px #966909;
`;

