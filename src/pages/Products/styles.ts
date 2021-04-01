import styled, { css } from 'styled-components';

export const ProductsWrapper = styled.div`
  padding-top: 70px;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  margin-top: 40px;
  padding: 20px 10px;
  min-height: 700px;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  cursor: pointer;
  flex-flow: column;
  position: relative;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(250, 250, 250);
  margin: 4px 8px 24px 16px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px 0px;
  font-size: 14px;
  text-align: left;
  height: 240px;
  width: 181px;
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  border-bottom: 1px solid #f3e1e1;
`;

export const CardImage = styled.img`
  object-fit: cover;
  height: 96px;
  align-self: center;
  padding: 4px;
`;
export const CardBottom = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  height: 150px;
`;

export const CardTitle = styled.h3`
  text-align: left;
  color: rgb(153, 153, 153);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 16px;
  max-height: 32px;
  font-size: 14px;
  font-weight: 400;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const CardPrice = styled.div`
  font-weight: bold;
  color: rgb(51, 51, 51);
`;

export const LoaderFromProductsWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loader = styled.div`
  border: 3px solid #f3f3f3;
  border-radius: 50%;
  border-top: 3px solid #ccced0;
  width: 25px;
  height: 25px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const CardButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CardButton = styled.button<{ remove?: boolean }>`
  background-color: #ffc500;
  border: none;
  color: #fff;
  border-radius: 3px;
  font-size: 12px;
  padding: 5px 13px;
  margin-top: 10px;
  ${(props) =>
    props.remove === true &&
    css`
      background-color: red;
    `};
`;
