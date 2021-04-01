import styled from 'styled-components';

export const FooterWrapper = styled.div`
  background-color: #333;
`;

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding-top: 20px;
`;

export const FooterTop = styled.div`
  height: 56px;
  width: 100%;
  background-color: #666;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #665;
`;

export const FooterColumn = styled.div`
  width: 24%;
  color: #fff;
  white-space: nowrap;
  align-items: center;
  &:nth-child(2) {
    justify-content: space-between;
  }
  svg {
    margin-right: 45px;
    & > * {
      fill: #fff;
    }
  }
`;

export const FooterLogo = styled.img`
  width: 176px;
  height: 56px;
`;

export const SocialNetworks = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const FooterBottom = styled.div`
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

export const BackToTop = styled.button`
  display: block;
  height: 100%;
  padding: 0 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;

export const FooterColumnTitle = styled.h2`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;

export const FooterList = styled.ul`
  list-style: none;
  margin-top: 5px;
`;

export const FooterListItem = styled.li``;

export const FooterLink = styled.a`
  color: #ffffff;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  text-decoration: underline;
  padding: 10px 0;
  margin-bottom: 5px;
  display: block;
`;

export const FooterStoresWrapper = styled.div`
  width: 63%;
  margin-left: auto;
  color: #fff;
  a {
    margin-top: 15px;
    display: block;
  }
`;

export const FooterStoresWrapperImage = styled.img`
  width: 136px;
  height: 40px;
  display: block;
`;

export const FooterColumnWrapper = styled.div`
  width: 63%;
  margin: 0 auto;
`;

export const FooterBottomColumn = styled.div`
  width: 30%;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 12px;
`;

export const FooterDrinkWithModerationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  color: #fff;
`;
