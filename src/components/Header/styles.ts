import styled from 'styled-components';

export const TopBar = styled.header`
  background-color: #333;
  color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BrandWrapper = styled.div`
  padding: 15px 0;
  display: flex;
`;

export const BrandWrapperWithAddress = styled.div`
  padding: 15px 0;
  display: flex;
  align-items: center;

  img {
    width: 48px;
    height: auto;
  }
`;

export const BrandLogo = styled.img`
  width: 121px;
  height: 40px;
`;

export const SignInWrapper = styled.div``;
export const SignIn = styled.button`
  outline: none;
  border-radius: 24px;
  font-size: 14px;
  padding: 12px;
  text-transform: uppercase;
  border: 1px solid #ffc500;
  margin: 0;
  height: 48px;
  color: #ffc500;
  background-color: #333;
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    background-color: #ffc500;
    color: #333;
  }
`;

export const AddressInfoWrapper = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-left: 35px;
  svg {
    margin-left: 35px;
    & > * {
      fill: #fff;
    }
  }
`;

export const AddressContent = styled.div``;
export const AddressLabel = styled.div`
  color: #ffffff;
`;

export const Address = styled.div`
  font-size: 14px;
  color: #ffc500;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-top: 4px;
`;
