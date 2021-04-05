import React, { useCallback, useEffect, useState } from 'react';
import {
  Container,
  RestaurantImage,
  Wrapper,
  Arrow,
  Mark,
  Header,
  Card,
  Logo,
  WrapperCard,
  WrapperTitle,
  Title,
  WrapperCategories,
  Categories,
  CardContainer,
  Line,
  WrapperLine,
  Avaliable,
  Icon,
  Location,
  Text,
  Value,
  WrapperDescription,
  TextValue,
  ProductsList,
  TextProducts,
  WrapperCart,
  Cart,
  ProductCategories,
  ProductIcone,
  ProductImage,
  ProductTitle,
  ProductValue,
  WrapperText,
} from './styles';
import { formatValue } from '~/utils/formatValue';
import Icone from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Images } from '~/assets/images';
import { api } from '~/services/api';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useCart, Product as CartProduct } from '../../hooks/cart';
import { FlotingCart } from '~/components/FlotingCart';

interface Extra {
  id: number;
  name: string;
  value: number;
  quantity: number;
}

interface Product {
  id: number;
  restaurant_id: number;
  name: string;
  img: string;
  composition: string;
  price: number;
  extras: Extra[];
}

const RestaurantDetails: React.FC<Product> = () => {
  const { addToCart } = useCart();
  const { params } = useRoute<any>();
  const { goBack } = useNavigation();
  const [products, setProduct] = useState<Product[]>([]);

  const product = useCallback(() => {
    api
      .get('products', {
        params: {
          restaurant_id: params.data.id,
        },
      })
      .then(({ data }) => setProduct(data));
  }, [params.data.id]);

  const handleAddToCart = (item: CartProduct): void => {
    addToCart(item);
  };

  useEffect(() => {
    product();
  }, [product]);

  return (
    <>
      <Header barStyle="light-content" />
      <Container>
        <RestaurantImage source={Images.Shaking}>
          <Wrapper>
            <Arrow>
              <Icone
                name="arrow-left"
                size={20}
                color="#fff"
                onPress={() => goBack()}
              />
            </Arrow>
            <Mark>
              <FontAwesome name="bookmark" size={20} color="#fff" />
            </Mark>
          </Wrapper>
        </RestaurantImage>
        <CardContainer>
          <Card>
            <Logo source={Images.Fossa} />
            <WrapperCard>
              <WrapperTitle>
                <Title>{params.data.name}</Title>
              </WrapperTitle>
              <WrapperCategories>
                <Categories>{params.data.categories}</Categories>
              </WrapperCategories>
              <WrapperLine>
                <Line />
                <WrapperDescription>
                  <Value>
                    <Icon name="tag" color="#25A49D" />
                    <TextValue>$$$$</TextValue>
                  </Value>
                  <Avaliable>
                    <Icon name="star" color="#F2C522" />
                    <Text>4.6</Text>
                  </Avaliable>
                  <Location>
                    <Icon name="map-pin" color="#D94361" />
                    <Text>5.3 Km</Text>
                  </Location>
                </WrapperDescription>
              </WrapperLine>
            </WrapperCard>
          </Card>
        </CardContainer>
      </Container>
      <Container>
        <TextProducts>Popular Menu</TextProducts>
        <ProductsList
          data={products}
          keyExtractor={data => String(`${data.id}`)}
          renderItem={({ item }: { item: Product }) => (
            <WrapperCart>
              <Cart>
                <ProductImage source={{ uri: item.img }} />
                <WrapperText>
                  <ProductTitle>{item.name}</ProductTitle>
                  <ProductCategories>{item.composition}</ProductCategories>
                  <ProductValue>{formatValue(item.price)}</ProductValue>
                </WrapperText>
                <ProductIcone
                  testID={`add-to-cart-${item.id}`}
                  onPress={() => handleAddToCart(item)}>
                  <Icone name="plus" size={26} color="#30BB00" />
                </ProductIcone>
              </Cart>
            </WrapperCart>
          )}
        />
      </Container>
      <FlotingCart />
    </>
  );
};

export { RestaurantDetails };
