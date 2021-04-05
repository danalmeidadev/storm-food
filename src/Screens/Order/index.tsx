import React, { useRef } from 'react';
import {
  RestaurantImage,
  Wrapper,
  Arrow,
  Mark,
  Header,
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
  ActionContainer,
  TitleModal,
  LineModal,
  Quantity,
  QuantityValue,
  Edit,
  ModalizeContainerModal,
  WrapperModal,
  WrapperName,
  WrapperValue,
  Box,
  WrapperEdit,
} from './styles';
import { Modalize } from 'react-native-modalize';
import { formatValue } from '~/utils/formatValue';
import Icone from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../../hooks/cart';
import { FlotingCart } from '~/components/FlotingCart';
import Empty from '~/components/Empty';

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
  quantity: number;
  extras: Extra[];
}

const Order: React.FC<Product> = () => {
  const { increment, decrement, products } = useCart();
  const { goBack } = useNavigation();
  const modalizeRef = useRef<any>(null);

  const handleIncrement = (id: string): void => {
    increment(id);
  };

  const handleDecrement = (id: string): void => {
    decrement(id);
  };

  const isOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <>
      <Header barStyle="light-content" />
      <RestaurantImage>
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
      <TextProducts>Carrinho</TextProducts>
      <ProductsList
        data={products}
        keyExtractor={data => String(`${data.id}`)}
        ListEmptyComponent={<Empty />}
        renderItem={({ item }: { item: Product }) => (
          <>
            <WrapperCart onPress={isOpen}>
              <Cart>
                <ProductImage source={{ uri: item.img }} />
                <WrapperText>
                  <ProductTitle>{item.name}</ProductTitle>

                  <ProductCategories>{item.composition}</ProductCategories>
                  <ProductValue>
                    {formatValue(item.price * item.quantity)}
                  </ProductValue>
                </WrapperText>
                <ActionContainer>
                  <ProductIcone
                    testID={`increment-${item.id}`}
                    onPress={() => handleIncrement(`${item.id}`)}>
                    <Icone name="plus" size={26} color="#30BB00" />
                  </ProductIcone>
                  <ProductIcone
                    testID={`decrement-${item.id}`}
                    onPress={() => handleDecrement(`${item.id}`)}>
                    <Icone name="minus" size={26} color="#f00404" />
                  </ProductIcone>
                </ActionContainer>
              </Cart>
            </WrapperCart>
          </>
        )}
      />

      <Modalize ref={modalizeRef} snapPoint={280}>
        <ModalizeContainerModal>
          {products.map(item => (
            <>
              <TitleModal>{item.name}</TitleModal>
              <LineModal />

              <Box>
                <Quantity>
                  <QuantityValue>{item.quantity}</QuantityValue>
                </Quantity>
                <WrapperModal>
                  <WrapperName>{item.name}</WrapperName>
                  <WrapperValue>{formatValue(item.price)}</WrapperValue>
                </WrapperModal>
                <LineModal />

                <WrapperEdit>
                  <Edit>Edit</Edit>
                </WrapperEdit>
              </Box>
            </>
          ))}
        </ModalizeContainerModal>
      </Modalize>
      <FlotingCart />
    </>
  );
};

export { Order };
