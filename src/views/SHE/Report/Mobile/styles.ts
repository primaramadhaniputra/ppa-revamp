import { fontFamilies } from '@hudoro/neron';
import styled from 'styled-components';
import { colors, fontWeights, mediaQueries } from 'utils/styles';

interface IProps {
    activeTab?: boolean;
}

export const Wrapper = styled.div``;

export const TabText = styled.p<IProps>`
    font-family: ${fontFamilies.poppins};
    font-size: 12px;
    cursor: pointer;
    padding: 5px 8px;
    border-bottom: ${(props) =>
        props.activeTab ? `2px solid ${colors.orange}` : `2px solid white`};
    color: ${(props) => (props.activeTab ? 'black' : '#bcbdbf')};
    font-weight: ${(props) => (props.activeTab ? fontWeights.bold : fontWeights.regular)};

    ${mediaQueries.md} {
        font-size: 15px;
    }
`;
