import styled from 'styled-components';

export const Logo = styled.div`
    background-color: white;
    padding: 8px;
    height: ${(props) => props.height};
    box-sizing: border-box;
    border-radius: 5px;
    img{
        height: 100%;
    }
    margin-bottom: ${(props) => props.height === '11%' ? '32px': null};
`;

