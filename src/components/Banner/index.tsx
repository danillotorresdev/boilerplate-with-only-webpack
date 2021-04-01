import React, { useCallback, useState, useRef, useEffect } from 'react';
import { useAddress } from '../../contexts/address';
import {
  BannerWrapper,
  Banner,
  BannerContentWrapper,
  BannerTitle,
  AddAddressBtn,
  AddAddressModal,
  BackButton,
  AddAddressForm,
  AddAddressInput,
  SuggestionsListWrapper,
  SuggestionsList,
  SuggestionsListItem,
  AddressWrapper,
  NumberWrapper,
  ComplementInput,
  ComplementWrapper,
  FinalizingDeliveryAddress,
  CheckboxWrapper,
  Checkbox,
  SeeAvailableProductsButton,
  Loader,
} from './styles';

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import { useHistory } from 'react-router-dom';
import { RiMapPinLine } from 'react-icons/ri';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import useOutsideClick from '@rooks/use-outside-click';
import { useManualQuery } from 'graphql-hooks';

interface Structure {
  main_text: string;
  secondary_text: string;
}

interface Suggestion {
  id?: string;
  description: string;
  structured_formatting: Structure;
}

const Header: React.FC = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showAddAddressModal, setShowAddAddressModal] = useState(false);
  const [showComplementFields, setShowComplementFields] = useState(false);
  const [addressComplement, setAddressComplement] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [date] = useState<Date>(new Date());
  const [addressWithoutComplement, setAddressWithoutComplement] = useState(
    false,
  );
  const [addressNumber, setAddressNumber] = useState('');
  const [position, setPosition] = useState({ lat: '', lng: '' });
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const history = useHistory();

  const { setAddress } = useAddress();

  const {
    ready,
    value: addressValue,
    suggestions: { status, data: suggestionsData },
    setValue,
  } = usePlacesAutocomplete();

  const handleShowAddAddressModal = useCallback(() => {
    setShowAddAddressModal(!showAddAddressModal);
    setValue('');
    inputRef.current?.focus();
    setShowComplementFields(false);
  }, [setValue, showAddAddressModal]);

  useOutsideClick(formRef, handleShowAddAddressModal);

  const handleChangeAddressInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowSuggestions(true);
    setValue(e.target.value);
  };

  const handleSelect = useCallback(
    (suggestion: Suggestion) => () => {
      const { description } = suggestion;
      setValue(description, false);

      // Get latitude and longitude via utility functions
      getGeocode({ address: description })
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          const lati = lat.toString();
          const long = lng.toString();
          setShowSuggestions(false);
          setPosition({ lat: lati, lng: long });
          setShowComplementFields(true);
        })
        .catch((error) => {
          console.log('😱 Error: ', error);
        });
    },
    [setValue],
  );

  const renderSuggestions = () =>
    suggestionsData.map((suggestion) => {
      const {
        id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <SuggestionsListItem key={id} onClick={handleSelect(suggestion)}>
          <RiMapPinLine />
          <AddressWrapper>
            <strong>{main_text}</strong> <small>{secondary_text}</small>
          </AddressWrapper>
        </SuggestionsListItem>
      );
    });

  const handleChangeComplement = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const addressComplementValue = e.target.value;
      setAddressComplement(addressComplementValue);

      if (addressComplementValue.length > 0) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    },
    [setAddressComplement],
  );

  const handleAddressWithoutComplement = useCallback(() => {
    setAddressWithoutComplement(!addressWithoutComplement);
    setAddressComplement('');
    setIsDisabled(false);
  }, [addressWithoutComplement]);

  const handleChangeAddressNumber = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const addressNumberValue = e.target.value;
      setAddressNumber(addressNumberValue);
    },
    [setAddressNumber],
  );

  const SEARCH_QUERY = `query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
    pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
      __typename
      id
      status
      tradingName
      officialName
      deliveryTypes {
        __typename
        pocDeliveryTypeId
        deliveryTypeId
        price
        title
        subtitle
        active
      }
      paymentMethods {
        __typename
        pocPaymentMethodId
        paymentMethodId
        active
        title
        subtitle
      }
      pocWorkDay {
        __typename
        weekDay
        active
        workingInterval {
          __typename
          openingTime
          closingTime
        }
      }
      address {
        __typename
        address1
        address2
        number
        city
        province
        zip
        coordinates
      }
      phone {
        __typename
        phoneNumber
      }
    }
  }`;

  const [fetchAddress, { loading, data }] = useManualQuery(SEARCH_QUERY, {
    variables: {
      algorithm: 'NEAREST',
      lat: position.lat,
      long: position.lng,
      now: date,
    },
  });

  useEffect(() => {
    if (data) {
      const { pocSearch } = data;

      const addressToStorage = {
        addressId: pocSearch && pocSearch[0]?.id,
        addressValue,
        addressNumber,
      };

      setAddress({ ...addressToStorage });

      history.push('/products');
    }
  }, [
    addressComplement,
    addressNumber,
    addressValue,
    data,
    history,
    setAddress,
  ]);

  const handleSubmitAddress = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      fetchAddress();
    },
    [fetchAddress],
  );

  const hasAddress = localStorage.getItem('@ze-delivery-app/address');

  if (hasAddress) {
    history.push('/products');
  }

  return (
    <>
      <BannerWrapper>
        <Banner data-testid="banner">
          <BannerContentWrapper>
            <BannerTitle>
              <span>Bebidas geladas</span> a <span>preço</span> de mercado na
              sua casa <span>agora</span>
            </BannerTitle>
            <AddAddressBtn
              data-testid="show-modal-btn"
              onClick={handleShowAddAddressModal}
            >
              <RiMapPinLine /> Inserir endereço para ver preço
            </AddAddressBtn>
          </BannerContentWrapper>
        </Banner>
      </BannerWrapper>
      {showAddAddressModal && (
        <AddAddressModal data-testid="addressmodal">
          <AddAddressForm
            onSubmit={(e) => handleSubmitAddress(e)}
            ref={formRef}
          >
            <BackButton
              data-testid="close-modal-btn"
              onClick={handleShowAddAddressModal}
            >
              <AiOutlineArrowLeft size="20px" color="#000" />
            </BackButton>
            <AddAddressInput
              value={addressValue}
              onChange={handleChangeAddressInput}
              disabled={!ready}
              ref={inputRef}
              id="addressInput"
              placeholder="Insira o endereço com número"
            />
            <SuggestionsListWrapper>
              {status === 'OK' && (
                <SuggestionsList showSuggestions={showSuggestions}>
                  {renderSuggestions()}
                </SuggestionsList>
              )}
            </SuggestionsListWrapper>
            {showComplementFields && (
              <>
                <FinalizingDeliveryAddress
                  id="selectedAddress"
                  data-testid="complementAddress"
                >
                  <NumberWrapper>
                    <ComplementInput
                      type="text"
                      placeholder="Número"
                      id="numberValue"
                      value={addressNumber}
                      onChange={(e) => handleChangeAddressNumber(e)}
                    />
                  </NumberWrapper>
                  <ComplementWrapper>
                    <ComplementInput
                      type="text"
                      placeholder="Complemento"
                      id="complementValue"
                      value={addressComplement}
                      onChange={(e) => handleChangeComplement(e)}
                      disabled={addressWithoutComplement}
                    />
                    <CheckboxWrapper>
                      <Checkbox
                        type="checkbox"
                        id="checkbox"
                        checked={addressWithoutComplement}
                        onChange={handleAddressWithoutComplement}
                      />
                      <label htmlFor="checkbox">Não tenho complemento</label>
                    </CheckboxWrapper>
                  </ComplementWrapper>
                </FinalizingDeliveryAddress>
                <SeeAvailableProductsButton type="submit" disabled={isDisabled}>
                  {loading ? <Loader /> : 'Ver produtos disponíveis'}
                </SeeAvailableProductsButton>
              </>
            )}
          </AddAddressForm>
        </AddAddressModal>
      )}
    </>
  );
};

export default Header;
