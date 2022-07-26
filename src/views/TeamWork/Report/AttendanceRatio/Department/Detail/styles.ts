import { Grid } from '@hudoro/neron';
import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 50px;
`;

export const ThItemContainer = styled(Grid).attrs({
    container: true,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 7,
})`
    width: 100%;
`;

export const ArrowUp = styled.div`
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;

    border-bottom: 6px solid black;
`;

export const ArrowDown = styled.div`
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    margin-top: 2px;
    border-top: 6px solid black;
`;
