import styled, { css } from 'styled-components';

export const BannerWrapper = styled.section`
  padding-top: 70px;
`;

export const Banner = styled.div`
  height: 464px;
  background-image: url(https://courier-images-web.imgix.net/static/img/img-welcome-bg.png?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2&fm=png);
  background-position: bottom right;
  background-size: auto 700px;
`;

export const BannerContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 592px;
  margin: 0 auto;
  height: 100%;
  padding-top: 72px;
`;

export const BannerTitle = styled.h1`
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  font-weight: 400;

  span {
    font-weight: bold;
  }
`;

export const AddAddressBtn = styled.button`
  padding: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  border: 1px solid #999;
  border-radius: 8px;
  color: #737272;
  margin-top: 20px;
  svg {
    margin-right: 7px;
  }
`;

export const AddAddressModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const AddAddressForm = styled.form`
  max-width: 592px;
  margin: 0 auto;
  margin-top: 250px;
  position: relative;
`;

export const BackButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 15px;
  left: 20px;
  margin: auto;
  z-index: 1;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
`;

export const AddAddressInput = styled.input`
  padding: 10px;
  padding-left: 50px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  border: 1px solid #999;
  border-radius: 8px;
  color: #737272;
  font-size: 16px;
`;

export const SuggestionsListWrapper = styled.div`
  max-width: 592px;
  margin: 0 auto;
`;

export const SuggestionsList = styled.ul<{ showSuggestions?: boolean }>`
  background-color: #fff;
  border-radius: 8px;
  ${(props) =>
    props.showSuggestions === false &&
    css`
      display: none;
    `};
`;

export const SuggestionsListItem = styled.li`
  padding: 12px 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    opacity: 0.5;
  }
  &:last-of-type {
    border-bottom: none;
  }
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  small {
    margin-top: 5px;
  }
`;

export const FinalizingDeliveryAddress = styled.div`
  display: flex;
  margin: 10px 0;
`;

export const NumberWrapper = styled.div`
  width: 30%;
  margin-right: 10px;
`;

export const ComplementInput = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  font-weight: lighter;
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  background-color: rgb(255, 255, 255);
  font-size: 16px;
  line-height: 20px;
  font-family: Roboto;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
`;

export const ComplementWrapper = styled.div`
  width: 70%;
`;

export const CheckboxWrapper = styled.div`
  position: relative;
  cursor: pointer;
  label {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding-top: 11px;
    display: block;
  }
  label:before {
    content: '';
    -webkit-appearance: none;
    background-color: transparent;
    border: 2px solid #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 8px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 10px;
    border-radius: 3px;
  }
  input:checked + label:before {
    border: 2px solid rgb(255, 197, 0);
    background-color: rgb(255, 197, 0);
  }

  input:checked + label:after {
    content: '';
    display: block;
    position: absolute;
    top: 11px;
    left: 7px;
    width: 4px;
    height: 13px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

export const Checkbox = styled.input`
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
`;

export const SeeAvailableProductsButton = styled.button`
  outline: none;
  border-radius: 24px;
  font-size: 14px;
  padding: 12px 100px;
  font-family: Roboto;
  line-height: 20px;
  text-transform: uppercase;
  margin-left: auto;
  margin-right: auto;
  color: rgb(0, 0, 0);
  background-color: rgb(255, 197, 0);
  border: 1px solid rgb(255, 197, 0);
  display: block;
  margin-top: 25px;
  cursor: pointer;

  &:disabled {
    background-color: rgb(230, 230, 230);
    color: rgb(153, 153, 153);
    border: 1px solid rgb(230, 230, 230);
  }
`;

export const FooterBottomColumn = styled.div`
  width: 30%;
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
