import { fontFamilies } from "@hudoro/neron";
import styled from "styled-components";

export const Wrapper = styled.div`
  min-width: 200px;
  display: flex;
  align-items: flex-end;
  gap: 8px;
  position: relative;
`;

export const FormGroup = styled.div`
  position: relative;
  padding: 10px 0 0;
  margin-top: 10px;
  width: 50%;
`;

export const FormField = styled.input`
  font-family: ${fontFamilies.poppins};
  width: 100%;
  border: 0;
  border-bottom: 2px solid #e0e1e0;
  outline: 0;
  font-size: 13px;
  color: black;
  padding: 2px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ label {
    /* font-size: 1rem; */
    cursor: text;
    top: 20px;
  }

  &:focus {
    /* padding-bottom: 6px; */
    /* font-weight: 700; */
    /* border-width: 3px; */
    /* border-image: linear-gradient(to right, #ff0062, #00ffff); */
    /* border-image-slice: 1; */
  }

  &:focus ~ label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 12px;
    /* color: #2afadf; */
    /* font-weight: 700; */
  }
`;

export const FormLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 12px;
  font-family: Poppins;
  color: #9b9b9b;
`;

export const Container = styled.div`
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
  position: absolute;
  top: 39px;
`;
