import { renderHook } from '@testing-library/react-hooks';
import { useAddress, AddressProvider } from '../../contexts/address';

describe('Address context', () => {
  it('should be able to set address', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAddress(), {
      wrapper: AddressProvider,
    });
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    const response = {
      addressValue: 'Rua Americo Brasiliense',
      addressId: '123',
      addressNumber: '123',
    };

    result.current.setAddress({ ...response });

    await waitForNextUpdate();

    expect(setItemSpy).toHaveBeenCalledWith(
      '@ze-delivery-app/address',
      JSON.stringify({ ...response }),
    );
    expect(result.current.address.addressValue).toEqual(
      'Rua Americo Brasiliense',
    );
  });

  it('should restore saved data from storage when auth inits', () => {
    const response = {
      addressValue: 'Rua Americo Brasiliense',
      addressId: '123',
      addressNumber: '123',
    };
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
      switch (key) {
        case '@ze-delivery-app/address':
          return JSON.stringify({ ...response });
        default:
          return null;
      }
    });
    const { result } = renderHook(() => useAddress(), {
      wrapper: AddressProvider,
    });

    expect(result.current.address.addressValue).toEqual(
      'Rua Americo Brasiliense',
    );
  });

  it('should be able to get address', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAddress(), {
      wrapper: AddressProvider,
    });
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    const response = {
      addressValue: 'Rua Americo Brasiliense',
      addressId: '123',
      addressNumber: '123',
    };
    result.current.setAddress({ ...response });
    await waitForNextUpdate();

    result.current.getAddress();

    await waitForNextUpdate();

    expect(setItemSpy).toHaveBeenCalledWith(
      '@ze-delivery-app/address',
      JSON.stringify({ ...response }),
    );
    expect(result.current.address.addressValue).toEqual(
      'Rua Americo Brasiliense',
    );
  });
});
