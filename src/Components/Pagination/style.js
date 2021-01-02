import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    border: 2px solid green;
    height: 200px;
    display: flex;
    justify-content: ${(props) => {
        switch (props.justify) {
            case 'first':
                return 'flex-end';
            case 'last':
                return 'flex-start';
            default:
                return 'space-between';
        }
    }};
    background-color: ${(props) => (props.red ? 'red' : '')};
`;

export const WrapperLink = styled(Link)`
    text-decoration: none;
`;
