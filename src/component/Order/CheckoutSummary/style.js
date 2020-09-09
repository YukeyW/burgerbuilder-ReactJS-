import styled from 'styled-components';

export const Content = styled.div`
    text-align: center;
    width: 80%;
    margin: auto;
    @media(min-width: 600px) {
        width: 500px;
    }
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
    &.Success {
        color: #5C9210;
    }
    &.Danger {
        color: #944317;
    }
`;

export const Food = styled.div`
    width: 100%;
    margin: auto;
`;


