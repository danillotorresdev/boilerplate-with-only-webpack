import React, { useCallback } from 'react';
import {
  Container,
  TopBar,
  BrandWrapper,
  BrandLogo,
  SignInWrapper,
  SignIn,
  BrandWrapperWithAddress,
  AddressInfoWrapper,
  AddressLabel,
  Address,
  AddressContent,
} from './styles';
import { IoIosArrowDown } from 'react-icons/io';

interface Address {
  addressValue: string;
  addressNumber: string;
  addressId: string;
}

interface StoredAddress {
  addressValue: string;
  addressNumber: string;
  addressId: string;
}

interface UserStoredAddress {
  userStoredAddress?: StoredAddress | null;
}

export const Header: React.FC<UserStoredAddress> = ({ userStoredAddress }) => {
  const valueAddress = userStoredAddress?.addressValue;

  const handleLimitOfString = (addressVal: string): string => {
    const text = addressVal;
    const count = 25;
    return text.slice(0, count) + (text.length > count ? '...' : '');
  };
  const handleAddressToShow = useCallback(() => {
    if (valueAddress) {
      return handleLimitOfString(valueAddress);
    }
  }, [valueAddress]);

  return (
    <TopBar>
      <Container>
        {!userStoredAddress && (
          <BrandWrapper>
            <BrandLogo src="https://courier-images-web.imgix.net/static/img/white-logo.png?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2&fm=png" />
          </BrandWrapper>
        )}

        {userStoredAddress && (
          <BrandWrapperWithAddress>
            <BrandLogo src="https://courier-images-web.imgix.net/static/img/small-logo.png?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2&fm=png" />
            <AddressInfoWrapper>
              <AddressContent>
                <AddressLabel>Receber agora em </AddressLabel>
                <Address data-testid="formmatedAddress">
                  {handleAddressToShow()}
                </Address>
              </AddressContent>
              <IoIosArrowDown />
            </AddressInfoWrapper>
          </BrandWrapperWithAddress>
        )}

        <SignInWrapper>
          <SignIn>Entrar</SignIn>
        </SignInWrapper>
      </Container>
    </TopBar>
  );
};

export default Header;
