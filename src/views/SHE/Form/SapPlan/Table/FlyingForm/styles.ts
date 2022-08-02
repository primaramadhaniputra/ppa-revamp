import { fontFamilies, Grid } from '@hudoro/neron';
import styled from 'styled-components';
import { colors, fontSizing, fontWeights, mediaQueries } from 'utils/styles';

export const Wrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    /* bottom: -300px; */
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    padding: 20px;
    transition: 1s;
    z-index: 999;
    ${mediaQueries.lg} {
        /* bottom: -200px; */
    }
`;

export const Container = styled.form`
    background-color: white;
    margin: 30px auto;
    height: max-content;
    width: 100%;
    max-width: 700px;
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.3);
    transition: 1s;
`;

export const HeaderTextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const InputContainer = styled.div`
    padding: 30px 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const StyledLabel = styled.label`
    font-family: ${fontFamilies.poppins};
    font-weight: ${fontWeights.semi};
    font-size: ${fontSizing.sm.fontSize};
`;

export const Styledinput = styled.input`
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: ${colors.blueSky};
    padding: 7px 7px;
    outline: none;
    border-radius: 5px;
    font-family: ${fontFamilies.poppins};
    &:focus {
        border: 1px solid rgba(0, 0, 0, 0.3);
    }
`;

export const InputWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minMax(200px, 1fr));
    column-gap: 30px;
    row-gap: 20px;
    margin: 5px 0;
`;

export const SingleInputContainer = styled(Grid).attrs({
    container: true,
})`
    flex-direction: column;
    gap: 10px;
`;