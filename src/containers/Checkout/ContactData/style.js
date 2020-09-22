import styled from 'styled-components';

export const Contact = styled.div`
    margin: 20px auto;
    width: 80%;
    text-align: center;
    box-shadow: 0  2px 3px #ccc;
    border: 1px solid #eee;
    padding:  10px;
    box-sizing: border-box;
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    color: #5C9210;
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
    &:disabled {
        color: #ccc;
        cursor: not-allowed;
    }
`;
