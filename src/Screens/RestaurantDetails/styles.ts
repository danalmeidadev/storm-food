import styled from 'styled-components/native';
import { FlatList, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import Feathericons from 'react-native-vector-icons/Feather';

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

export const Header = styled.StatusBar`
  width: 100%;
  height: 100%;
  padding: 0 16px;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  background: #fff;
`;

export const RestaurantImage = styled.ImageBackground`
  width: 100%;
  height: 241px;
`;
export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  padding-top: ${() =>
    Platform.OS === 'ios' ? getStatusBarHeight() : `${20}`}px;
  margin-top: ${() =>
    Platform.OS === 'ios' ? getStatusBarHeight() : `${20}`}px;
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
export const Card = styled.View`
  width: 335px;
  height: 136px;
  flex-direction: row;
  border-color: #ddd;
  shadow-color: #000;
  border-top-width: 1px;
  background-color: rgb(246, 250, 251);
  border-radius: 5px;
  padding: 18px 18px;
`;
export const Logo = styled.Image`
  width: 70px;
  height: 70px;
`;
export const WrapperCard = styled.View`
  width: 100%;
  margin-left: 14px;
`;
export const WrapperTitle = styled.View``;
export const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;
export const WrapperCategories = styled.View``;
export const Categories = styled.Text`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.6;
`;

export const WrapperLine = styled.View`
  width: 70%;
  margin-top: 16px;
`;
export const Line = styled.Text`
  height: 1px;
  border-bottom-width: 1px;
  background-color: #ddd;
  opacity: 0.6;
`;

export const WrapperDescription = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 16px 0;
`;

export const Value = styled.View`
  flex-direction: row;
`;

export const Avaliable = styled.View`
  flex-direction: row;
  margin-left: 16px;
`;

export const Location = styled.View`
  flex-direction: row;
  margin-left: 16px;
`;

export const Icon = styled(Feathericons)`
  font-size: 16px;
  margin-right: 4px;
`;

export const Text = styled.Text`
  font-size: 14px;
`;

export const TextValue = styled.Text`
  font-size: 14px;
`;

export const ProductsList = styled(FlatList as new () => FlatList<Product>)`
  margin-bottom: 24px;
`;
export const TextProducts = styled.Text`
  margin-left: 32px;
  font-size: 20px;
  margin-bottom: 16px;
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
  border-radius: 8px;
  margin: 12px 16px;
`;
export const WrapperText = styled.View`
  width: 60%;
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
export const ProductIcone = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.02);
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin-top: 20px;
  left: 262px;
  position: absolute;
`;
export const WrapperCart = styled.View`
  margin-bottom: 12px;
`;
