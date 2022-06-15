import { fontFamilies, Grid, Text } from '@hudoro/neron';
import styled from 'styled-components';

export const Wrapper = styled(Grid)`
    margin-top: 30px;
`;
export const WrapperInput = styled(Grid)`
    max-width: 250px;
`;

export const InputLabel = styled(Text)`
    margin-bottom: 5px;
    font-family: ${fontFamilies.openSans};
`;
