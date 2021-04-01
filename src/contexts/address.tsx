import React, { createContext, useCallback, useState, useContext } from 'react';

interface Address {
  addressValue: string;
  addressNumber: string;
  addressId: string;
}

interface AddressContextData {
  address: Address;
  getAddress(): void;
  setAddress(address: Address): void;
}

// o as AddressContext é uma forma de burlar a tipagem do typescript para evitar q ele fique retornando erro
const AddressContext = createContext<AddressContextData>(
  {} as AddressContextData,
);

const AddressProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Address>(() => {
    const storedAddress = localStorage.getItem('@ze-delivery-app/address');

    if (storedAddress) {
      const parsedAddress = JSON.parse(storedAddress);
      const { addressValue, addressNumber, addressId } = parsedAddress;
      return { addressValue, addressNumber, addressId };
    }
    return {} as Address;
  });

  const getAddress = useCallback(async () => {
    const storedAddress = await localStorage.getItem(
      '@ze-delivery-app/address',
    );
    if (storedAddress) {
      const parsedAddress = JSON.parse(storedAddress);
      const { addressValue, addressNumber, addressId } = parsedAddress;
      setData({ addressValue, addressId, addressNumber });
    }
    return null;
  }, []);

  const setAddress = useCallback(
    async ({ addressValue, addressId, addressNumber }: Address) => {
      await localStorage.setItem(
        '@ze-delivery-app/address',
        JSON.stringify({ addressValue, addressId, addressNumber }),
      );
      setData({ addressValue, addressId, addressNumber });
    },
    [],
  );

  return (
    <AddressContext.Provider value={{ address: data, getAddress, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

function useAddress(): AddressContextData {
  const context = useContext(AddressContext);

  return context;
}

export { AddressProvider, useAddress };
