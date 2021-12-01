import styled from "styled-components";
export interface ButtonBaseProps
  extends React.ComponentPropsWithoutRef<"button"> {}

export const Footer = styled.footer`
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 20px 20px;
  width: 100%;
  background: #ffffff;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 3;
  position: fixed;
  box-shadow: 0 0 10px #00000029;

  button {
    cursor: pointer;
    top: 704px;
    left: 551px;
    margin-right: 10px;
    width: 40px;
    height: 32px;
    background: #f5f5f5 0% 0% no-repeat padding-box;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    opacity: 1;
    transition: 0.4s;

    &:hover {
      color: #ffffff;
      background: #5ba1d0;
    }
  }
`;
