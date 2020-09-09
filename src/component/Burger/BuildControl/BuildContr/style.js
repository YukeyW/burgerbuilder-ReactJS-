import styled from 'styled-components';

export const BuildContr = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
`;

export const Button = styled.button`
    display: block;
    font: inherit;
    padding: 5px;
    margin: 0 5px;
    width: 80px;
    border: 1px solid #AA6817;
    cursor: pointer;
    outline: none;
    &.Less {  
        background-color: ${props => props.disabled ? '#AC9980' : '#D39952' };
        color: ${props => props.disabled ? '#ccc' : 'white' };
        cursor: ${props => props.disabled ? 'not-allowed' : 'pointer' };
    }
    &.More {
        background-color: #8F5E1E;
        color: white;
    }
`;

export const Label = styled.div`
    padding: 10px;
    font-weight: bold;
    width: 80px;
`;
