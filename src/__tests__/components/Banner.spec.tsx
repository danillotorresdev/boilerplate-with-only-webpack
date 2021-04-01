import React from 'react';
import Banner from '../../components/Banner';
import { render, fireEvent } from '@testing-library/react';
import usePlacesAutocomplete from 'use-places-autocomplete';
import { useManualQuery } from 'graphql-hooks';

jest.mock('use-places-autocomplete');
jest.mock('graphql-hooks');

(usePlacesAutocomplete as jest.Mock).mockReturnValue({
  ready: true,
  value: 'Rua Americo Brasiliense',
  suggestions: {
    status: 'OK',
    data: [
      {
        description:
          'Rua Américo Brasiliense - Chácara Santo Antônio (Zona Sul), São Paulo - SP, Brasil',
        matched_substrings: [
          {
            length: 7,
            offset: 0,
          },
        ],
        place_id:
          'ElZSdWEgQW3DqXJpY28gQnJhc2lsaWVuc2UgLSBDaMOhY2FyYSBTYW50byBBbnTDtG5pbyAoWm9uYSBTdWwpLCBTw6NvIFBhdWxvIC0gU1AsIEJyYXNpbCIuKiwKFAoSCeFSiFXvUM6UERuY1GMR594QEhQKEgkh20343VDOlBEeWdLD-5VhcA',
        reference:
          'ElZSdWEgQW3DqXJpY28gQnJhc2lsaWVuc2UgLSBDaMOhY2FyYSBTYW50byBBbnTDtG5pbyAoWm9uYSBTdWwpLCBTw6NvIFBhdWxvIC0gU1AsIEJyYXNpbCIuKiwKFAoSCeFSiFXvUM6UERuY1GMR594QEhQKEgkh20343VDOlBEeWdLD-5VhcA',
        structured_formatting: {
          main_text: 'Rua Américo Brasiliense',
          main_text_matched_substrings: [
            {
              length: 7,
              offset: 0,
            },
          ],
          secondary_text:
            'Chácara Santo Antônio (Zona Sul), São Paulo - SP, Brasil',
        },
        terms: [
          {
            offset: 0,
            value: 'Rua Américo Brasiliense',
          },
          {
            offset: 26,
            value: 'Chácara Santo Antônio (Zona Sul)',
          },
          {
            offset: 60,
            value: 'São Paulo',
          },
          {
            offset: 72,
            value: 'SP',
          },
          {
            offset: 76,
            value: 'Brasil',
          },
        ],
        types: ['route', 'geocode'],
      },
      {
        description:
          'Rua Américo Salvador Novelli - Itaquera, São Paulo - SP, Brasil',
        matched_substrings: [
          {
            length: 7,
            offset: 0,
          },
        ],
        place_id:
          'EkFSdWEgQW3DqXJpY28gU2FsdmFkb3IgTm92ZWxsaSAtIEl0YXF1ZXJhLCBTw6NvIFBhdWxvIC0gU1AsIEJyYXNpbCIuKiwKFAoSCWHjwsG-Zs6UEd11KCQDWUSfEhQKEgnduigSvWbOlBHJPh7vStki0A',
        reference:
          'EkFSdWEgQW3DqXJpY28gU2FsdmFkb3IgTm92ZWxsaSAtIEl0YXF1ZXJhLCBTw6NvIFBhdWxvIC0gU1AsIEJyYXNpbCIuKiwKFAoSCWHjwsG-Zs6UEd11KCQDWUSfEhQKEgnduigSvWbOlBHJPh7vStki0A',
        structured_formatting: {
          main_text: 'Rua Américo Salvador Novelli',
          main_text_matched_substrings: [
            {
              length: 7,
              offset: 0,
            },
          ],
          secondary_text: 'Itaquera, São Paulo - SP, Brasil',
        },
        terms: [
          {
            offset: 0,
            value: 'Rua Américo Salvador Novelli',
          },
          {
            offset: 31,
            value: 'Itaquera',
          },
          {
            offset: 41,
            value: 'São Paulo',
          },
          {
            offset: 53,
            value: 'SP',
          },
          {
            offset: 57,
            value: 'Brasil',
          },
        ],
        types: ['route', 'geocode'],
      },
      {
        description:
          'Rua Américo Brasiliense - Centro, São Bernardo do Campo - SP, Brasil',
        matched_substrings: [
          {
            length: 7,
            offset: 0,
          },
        ],
        place_id:
          'EkZSdWEgQW3DqXJpY28gQnJhc2lsaWVuc2UgLSBDZW50cm8sIFPDo28gQmVybmFyZG8gZG8gQ2FtcG8gLSBTUCwgQnJhc2lsIi4qLAoUChIJZyByloZBzpQR3At5qFqu-EUSFAoSCbEm68soQs6UEfMW5bnji0NE',
        reference:
          'EkZSdWEgQW3DqXJpY28gQnJhc2lsaWVuc2UgLSBDZW50cm8sIFPDo28gQmVybmFyZG8gZG8gQ2FtcG8gLSBTUCwgQnJhc2lsIi4qLAoUChIJZyByloZBzpQR3At5qFqu-EUSFAoSCbEm68soQs6UEfMW5bnji0NE',
        structured_formatting: {
          main_text: 'Rua Américo Brasiliense',
          main_text_matched_substrings: [
            {
              length: 7,
              offset: 0,
            },
          ],
          secondary_text: 'Centro, São Bernardo do Campo - SP, Brasil',
        },
        terms: [
          {
            offset: 0,
            value: 'Rua Américo Brasiliense',
          },
          {
            offset: 26,
            value: 'Centro',
          },
          {
            offset: 34,
            value: 'São Bernardo do Campo',
          },
          {
            offset: 58,
            value: 'SP',
          },
          {
            offset: 62,
            value: 'Brasil',
          },
        ],
        types: ['route', 'geocode'],
      },
      {
        description: 'Rua Amélia - Graças, Recife - PE, Brasil',
        matched_substrings: [
          {
            length: 7,
            offset: 0,
          },
        ],
        place_id:
          'EipSdWEgQW3DqWxpYSAtIEdyYcOnYXMsIFJlY2lmZSAtIFBFLCBCcmFzaWwiLiosChQKEgkr9wI0-xirBxE8bc2K7Dj4qxIUChIJD64BQPsYqwcRxre7vL1n4_Q',
        reference:
          'EipSdWEgQW3DqWxpYSAtIEdyYcOnYXMsIFJlY2lmZSAtIFBFLCBCcmFzaWwiLiosChQKEgkr9wI0-xirBxE8bc2K7Dj4qxIUChIJD64BQPsYqwcRxre7vL1n4_Q',
        structured_formatting: {
          main_text: 'Rua Amélia',
          main_text_matched_substrings: [
            {
              length: 7,
              offset: 0,
            },
          ],
          secondary_text: 'Graças, Recife - PE, Brasil',
        },
        terms: [
          {
            offset: 0,
            value: 'Rua Amélia',
          },
          {
            offset: 13,
            value: 'Graças',
          },
          {
            offset: 21,
            value: 'Recife',
          },
          {
            offset: 30,
            value: 'PE',
          },
          {
            offset: 34,
            value: 'Brasil',
          },
        ],
        types: ['route', 'geocode'],
      },
      {
        description: 'Rua Amélia Rey Colaço, Lisboa, Portugal',
        matched_substrings: [
          {
            length: 7,
            offset: 0,
          },
        ],
        place_id:
          'EilSdWEgQW3DqWxpYSBSZXkgQ29sYcOnbywgTGlzYm9hLCBQb3J0dWdhbCIuKiwKFAoSCZNP4f4mzR4NEQvi2ntfGo0sEhQKEgk78-RhGjMZDRHQNpDkvesABA',
        reference:
          'EilSdWEgQW3DqWxpYSBSZXkgQ29sYcOnbywgTGlzYm9hLCBQb3J0dWdhbCIuKiwKFAoSCZNP4f4mzR4NEQvi2ntfGo0sEhQKEgk78-RhGjMZDRHQNpDkvesABA',
        structured_formatting: {
          main_text: 'Rua Amélia Rey Colaço',
          main_text_matched_substrings: [
            {
              length: 7,
              offset: 0,
            },
          ],
          secondary_text: 'Lisboa, Portugal',
        },
        terms: [
          {
            offset: 0,
            value: 'Rua Amélia Rey Colaço',
          },
          {
            offset: 23,
            value: 'Lisboa',
          },
          {
            offset: 31,
            value: 'Portugal',
          },
        ],
        types: ['route', 'geocode'],
      },
    ],
  },
  setValue: () => {},
});

(useManualQuery as jest.Mock).mockReturnValue([
  () => {},
  {
    loading: false,
    error: false,
    data: null,
  },
]);

describe('Banner Component', () => {
  console.error = jest.fn();

  it('should render Banner', () => {
    render(<Banner />);
  });

  it('should open AddAddressModal', async () => {
    console.error = jest.fn();
    const { getByTestId, getByPlaceholderText } = render(<Banner />);

    const showModalBtn = getByTestId('show-modal-btn');

    fireEvent.click(showModalBtn);

    expect(getByPlaceholderText('Insira o endereço com número')).toBeTruthy();
  });

  it('should close AddAddressModal', async () => {
    console.error = jest.fn();
    const { getByTestId, getByPlaceholderText } = render(<Banner />);

    const showModalBtn = getByTestId('show-modal-btn');

    fireEvent.click(showModalBtn);

    // asserts that the modal exists
    expect(getByPlaceholderText('Insira o endereço com número')).toBeTruthy();

    const backButton = getByTestId('close-modal-btn');
    fireEvent.click(backButton);

    // asserts that the modal does not exist animore
    expect(() => {
      getByPlaceholderText('Insira o endereço com número');
    }).toThrow();
  });

  describe('On typing into the search input', () => {
    it('Correctly shows the autocomplete suggestions', async () => {
      const { getByTestId, getByPlaceholderText, findByText } = render(
        <Banner />,
      );

      const showModalBtn = getByTestId('show-modal-btn');

      // open modal
      fireEvent.click(showModalBtn);

      const inputElm = getByPlaceholderText('Insira o endereço com número');
      const changeEvt = { target: { value: 'Rua Americo Brasiliense' } };

      fireEvent.change(inputElm, changeEvt);

      // get Americo Brasiliense street
      await findByText(/santo/i);

      await findByText(/Zona sul/i);

      await findByText(/Lisboa, Portugal/i);
    });

    it('Chosing autocomplete option', async () => {
      const { getByTestId, getByPlaceholderText, findByText } = render(
        <Banner />,
      );

      const showModalBtn = getByTestId('show-modal-btn');

      // open modal
      fireEvent.click(showModalBtn);

      const inputElm = getByPlaceholderText('Insira o endereço com número');
      const changeEvt = { target: { value: 'Rua Americo Brasiliense' } };

      fireEvent.change(inputElm, changeEvt);

      // get Americo Brasiliense street
      const selectedAddress = await findByText(/santo/i);
      fireEvent.focus(selectedAddress);
      const newInput = (document.getElementById(
        'addressInput',
      ) as HTMLInputElement).value;
      expect(newInput).toBe('Rua Americo Brasiliense');
    });
  });
});
