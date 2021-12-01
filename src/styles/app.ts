import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-5rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  width: 100%;
  background: #ffffff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
  box-shadow: 0 3px 6px #00000029;

  @media (max-width: 768px) {
    padding-bottom: 16px;
    padding-top: 16px;
  }

  .header-logo {
    height: auto;
    width: 96px;

    img {
      display: block;
      width: 100%;
    }
  }

  .header-text {
    align-items: center;
    display: flex;
    justify-content: flex-end;

    &__name {
      display: flex;
      flex-direction: column;

      @media (min-width: 769px) {
        flex-direction: row;
      }

      h2 {
        font-size: 12px;
        font-weight: 600;

        @media (min-width: 769px) {
          font-size: 14px;
          margin-right: 10px;
        }
      }

      strong {
        font-weight: 300;
        font-size: 12px;

        @media (min-width: 769px) {
          font-size: 14px;
        }
      }
    }

    &__logo {
      align-items: center;
      justify-content: center;
      display: flex;
      background: #f5f5f5;
      border-radius: 4px;
      height: 32px;
      width: 32px;
      font-weight: 600;
      font-size: 15px;
      color: #555555;
      margin-left: 16px;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  width: 100%;
  padding-top: 100px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    padding-top: 90px;
  }

  .container {
    margin: 0 auto;
    width: 100%;

    @media (min-width: 768px) {
      width: 750px;
    }

    @media (min-width: 992px) {
      width: 920px;
    }

    @media (min-width: 1200px) {
      width: 1140px;
    }

    .container-characters__list {
      display: flex;
      flex-direction: column;
      width: 100%;

      @media (max-width: 768px) {
        padding: 0 24px;
      }

      > li {
        animation-name: ${slideIn};
        animation-timing-function: cubic-bezier(2, 0, 0, 1);
        animation-duration: 0.2s;
        width: 100%;

        button {
          cursor: pointer;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          background: #ffffff;
          margin-bottom: 8px;
          padding: 24px;
          border-radius: 4px;
          box-shadow: 0px 1px 4px #00000033;
          width: 100%;
          text-align: left;
          transition: ease-in-out 0.3s;

          @media (max-width: 768px) {
            padding: 12px 16px;
          }

          &:hover {
            box-shadow: 0px 0px 10px #00000066;
          }

          @media (max-width: 768px) {
            grid-template-columns: 1fr;
          }
        }

        &:first-of-type {
          .character,
          .series,
          .events {
            position: relative;
            &::before {
              content: "Personagem";
              position: absolute;
              left: 72px;
              top: -45px;
              font-size: 12px;
              color: #8e8e8e;

              @media (max-width: 768px) {
                top: -36px;
              }
            }
          }

          .series {
            &::before {
              content: "Séries";
              left: 0;
            }
          }

          .events {
            &::before {
              content: "Eventos";
              left: 0;
            }
          }
        }

        &:nth-child(2) {
          animation-duration: 0.4s;
        }

        &:nth-child(3) {
          animation-duration: 0.6s;
        }

        &:nth-child(4) {
          animation-duration: 0.8s;
        }

        &:nth-child(5) {
          animation-duration: 1s;
        }

        &:nth-child(6) {
          animation-duration: 1.2s;
        }
      }

      img {
        border-radius: 4px;
        width: 48px;
        height: auto;
        display: inline-block;
        vertical-align: middle;
        margin-right: 24px;

        + h3 {
          color: #555555;
          font-size: 14px;
          display: inline-block;
          vertical-align: middle;

          @media (min-width: 769px) {
            font-size: 16px;
          }
        }
      }

      h3 {
        word-break: break-all;
        width: 150px;
      }

      .series,
      .events {
        @media (max-width: 768px) {
          display: none;
        }

        li {
          color: #555555;
          font-size: 14px;
          line-height: 18px;
        }
      }
    }

    .container-searchBar {
      display: block;
      margin-bottom: 60px;

      @media (max-width: 768px) {
        padding: 0 24px;
        text-align: center;
      }

      h1 {
        display: block;
        color: #555555;
        font-size: 24px;
        margin-bottom: 10px;

        @media (min-width: 769px) {
          font-size: 32px;
        }
      }

      label {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 100%;

        @media (min-width: 769px) {
          width: 295px;
        }

        &::after {
          content: "";
          width: 34px;
          height: 34px;
          position: absolute;
          bottom: -2px;
          right: 2px;
          opacity: 0.5;
          background: url("/images/magnify.svg") no-repeat center center;
        }

        span {
          color: #555555;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 5px;

          @media (min-width: 769px) {
            font-size: 16px;
          }
        }

        input {
          padding: 10px 14px;
          height: 32px;
          width: 100%;
          border-radius: 4px;
          font-weight: lighter;
          font-style: italic;
        }
      }
    }
  }
`;
