import React, { useEffect } from 'react';
import { useManualQuery } from 'graphql-hooks';
import { useHistory } from 'react-router-dom';
import { useAddress } from '../../contexts/address';
import {
  ProductsWrapper,
  Container,
  Card,
  CardTop,
  CardImage,
  CardBottom,
  CardTitle,
  CardPrice,
  LoaderFromProductsWrapper,
  Loader,
  CardButtonsWrapper,
  CardButton,
} from './styles';
import Header from '../../components/Header';

const PRODUCTS_QUERY = `query poc($id: ID!, $categoryId: Int, $search: String){
  poc(id: $id) {
    id
    products(categoryId: $categoryId, search: $search) {
      id
      title
      rgb
      images {
        url
      }
      productVariants {
        availableDate
        productVariantId
        price
        inventoryItemId
        shortDescription
        title
        published
        volume
        volumeUnit
        description
        subtitle
        components {
          id
          productVariantId
          productVariant {
            id
            title
            description
            shortDescription
          }
        }
      }
    }
  }
}`;

interface Images {
  url: string;
}
interface ProductVariants {
  price: string;
}

interface Product {
  id: string;
  images: Array<Images>;
  title: string;
  productVariants: Array<ProductVariants>;
}

const Products: React.FC = () => {
  const { address } = useAddress();

  const [fetchProducts, { loading, data }] = useManualQuery(PRODUCTS_QUERY, {
    variables: {
      id: address.addressId,
      search: '',
      categoryId: null,
    },
  });

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  let pocData;
  if (data) {
    pocData = data && data.poc;
  }

  const userStoredAddress = localStorage.getItem('@ze-delivery-app/address');

  let parsedUserStoredAddress = {
    addressValue: '',
    addressNumber: '',
    addressId: '',
  };
  if (userStoredAddress) {
    parsedUserStoredAddress = JSON.parse(userStoredAddress);
  }

  const history = useHistory();

  if (!userStoredAddress) {
    history.push('/');
  }

  return (
    <>
      <Header userStoredAddress={parsedUserStoredAddress} />
      <ProductsWrapper>
        {loading ? (
          <LoaderFromProductsWrapper>
            <Loader />
          </LoaderFromProductsWrapper>
        ) : (
          <Container>
            {pocData &&
              pocData.products.map((product: Product) => (
                <Card key={product.id}>
                  <CardTop>
                    <CardImage
                      src={
                        product.images &&
                        product.images[0] &&
                        product.images[0].url
                      }
                      alt=""
                    />
                  </CardTop>
                  <CardBottom>
                    <CardTitle>{product.title}</CardTitle>
                    <CardPrice>
                      R${' '}
                      {product.productVariants &&
                        product.productVariants[0] &&
                        product.productVariants[0].price}
                    </CardPrice>
                    <CardButtonsWrapper>
                      <CardButton>Adicionar</CardButton>
                      <CardButton remove>Remover</CardButton>
                    </CardButtonsWrapper>
                  </CardBottom>
                </Card>
              ))}
          </Container>
        )}
      </ProductsWrapper>
    </>
  );
};

export default Products;
