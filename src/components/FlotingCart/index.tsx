import React, { useMemo } from 'react';
import {
  Container,
  WrapperBag,
  Bag,
  Total,
  CartValue,
  CartArrow,
  WrapperBagText,
  LineCart,
  Badge,
  Circle,
} from './styles';
import Icone from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/core';
import { useCart } from '~/hooks/cart';
import { formatValue } from '~/utils/formatValue';
import { Alert } from 'react-native';

const FlotingCart: React.FC = () => {
  const { products } = useCart();
  const { navigate } = useNavigation();
  const cartTotal = useMemo(() => {
    const itensTotal = products.reduce(
      (total, product) => total + product.quantity * product.price,
      0,
    );
    return itensTotal;
  }, [products]);

  const totalItensInCart = useMemo(() => {
    const itensQuantity = products.reduce(
      (total, product) => total + product.quantity,
      0,
    );
    return itensQuantity;
  }, [products]);

  const handleFinaly = () => {
    if (products.length === 0) {
      Alert.alert('Oops! Adicione um produto ao carrinho :)');
    } else {
      Alert.alert('', 'Deseja finalizar sua compra ?', [
        {
          text: 'Sim',
          onPress: () => navigate('congratulations'),
        },
        {
          text: 'Não',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ]);
    }
  };

  return (
    <Container onPress={() => navigate('Order')}>
      <WrapperBag>
        <Circle>
          <Badge>{totalItensInCart}</Badge>
        </Circle>
        <Bag>
          <Icone
            name="shopping-bag"
            size={24}
            color="#fff"
            onPress={() => navigate('Order')}
          />
        </Bag>
        <LineCart />
        <WrapperBagText>
          <Total>Total</Total>
          <CartValue>{formatValue(Number(cartTotal))}</CartValue>
        </WrapperBagText>
        <CartArrow onPress={() => handleFinaly()}>
          <Icone
            name="arrow-right"
            size={20}
            color="#fff"
            testID="navigate-to-cart-button"
          />
        </CartArrow>
      </WrapperBag>
    </Container>
  );
};

export { FlotingCart };
