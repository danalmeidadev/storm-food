import styled from 'styled-components/native';
import { FlatList, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

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

export const Header = styled.StatusBar`
  width: 100%;
  height: 100%;
  padding: 0 16px;
`;

export const AddCart = styled.View`
  width: 100%;
  height: 50%;
  flex: 1;
  background: #fff;
`;

export const RestaurantImage = styled.View`
  width: 100%;
  height: 130px;
  background: rgba(27, 36, 65, 0.72);
`;
export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  padding-top: ${() =>
    Platform.OS === 'ios' ? getStatusBarHeight() : `${10}`}px;
  margin-top: ${() =>
    Platform.OS === 'ios' ? getStatusBarHeight() : `${10}`}px;
`;
export const Arrow = styled.View`
  margin-left: 20px; ;
`;
export const Mark = styled.View`
  margin-left: auto;
  margin-right: 20px;
`;
export const CardContainer = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 200px;
`;

export const ProductsList = styled(FlatList as new () => FlatList<Product>)`
  margin-bottom: 24px;
`;
export const TextProducts = styled.Text`
  margin-left: 32px;
  font-size: 20px;
  margin-top: 16px;
`;

export const Cart = styled.View`
  width: 335px;
  height: 86px;
  flex-direction: row;
  margin: 0 24px;
  background-color: rgba(0, 0, 0, 0.02);
  border-color: #ddd;
  border-radius: 6px;
  box-shadow: 1px 6px 6px #ddd;
`;
export const ProductImage = styled.Image`
  width: 60px;
  height: 60px;
  margin: 12px 16px;
`;
export const WrapperText = styled.View`
  width: 60%;
`;
export const ProductButtom = styled.TouchableOpacity`
  color: #000;
`;
export const ProductTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #2b3837;
  padding-top: 16px;
`;
export const ProductCategories = styled.Text``;
export const ProductValue = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;
export const ActionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: auto;
`;

export const ProductIcone = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.02);
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  margin-right: 10px;
`;
export const WrapperCart = styled.TouchableOpacity`
  margin-bottom: 12px;
`;
//
export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: ${() => (Platform.OS === 'ios' ? getStatusBarHeight() : `${100}`)}px;
`;
export const WrapperBag = styled.View`
  width: 85%;
  height: 64px;
  flex-direction: row;
  background-color: #30bb00;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
`;
export const Bag = styled.View`
  margin-left: 24px;
`;
export const WrapperBagText = styled.View`
  margin-left: 18px;
`;
export const LineCart = styled.Text`
  height: 35px;
  border-left-width: 2px;
  background-color: #fff;
  opacity: 0.6;
  margin-left: 18px;
`;
export const Total = styled.Text`
  color: #fff;
  opacity: 0.7;
`;
export const CartValue = styled.Text`
  padding-top: 4px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`;

export const CartArrow = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
  left: 270px;
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.09);
  border-radius: 50px;
`;
export const Circle = styled.View`
  width: 20px;
  height: 20px;
  background-color: red;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 40px;
  top: 10px;
  border-radius: 10px;
  z-index: 1;
`;
export const ModalizeListProducts = styled(
  FlatList as new () => FlatList<Product>,
)``;
export const ModalizeContainerModal = styled.View`
  width: 100%;
  height: 100%;
  margin-left: 20px;
  margin-top: ${() =>
    Platform.OS === 'ios' ? getStatusBarHeight() : `${33}`}px;
`;
export const Box = styled.View`
  flex-direction: row;
  width: 100%;
  flex: 1;
`;
export const TitleModal = styled.Text`
  font-size: 20px;
  margin-top: ${() =>
    Platform.OS === 'ios' ? getStatusBarHeight() : `${0}`}px;
  margin-bottom: 20px;
`;
export const LineModal = styled.Text`
  height: 1px;
  border-bottom-width: 1px;
  background-color: #ddd;
  opacity: 0.6;
  margin-bottom: 16px;
  opacity: 0.6;
`;
export const ModalizeContainer = styled.View`
  flex: 1;
`;
export const Quantity = styled.View`
  width: 40px;
  height: 40px;
  background-color: #ecf7e8;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;
export const WrapperModal = styled.View`
  margin-left: 12px;
`;
export const QuantityValue = styled.Text``;
export const WrapperEdit = styled.View`
  width: 100%;
  justify-content: space-around;
  align-items: flex-end;
  position: absolute;
  left: 300px;
`;
export const Edit = styled.Text`
  width: 100%;
  font-size: 16px;
  color: #30bb00;
  font-weight: 700;
  margin-right: auto;
`;

export const WrapperName = styled.Text`
  font-size: 16px;
  color: #2b3837;
  font-weight: 500;
`;
export const WrapperValue = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
