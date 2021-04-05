import styled from 'styled-components/native';
import Feathericons from 'react-native-vector-icons/Feather';
import { FlatList, TouchableOpacity } from 'react-native';

interface IRestaurant {
  id: number;
  name: string;
  categories: string;
  avaliable: number;
  long: number;
  lat: number;
  img: string;
}

export const Container = styled.View``;

export const RestaurantList = styled(
  FlatList as new () => FlatList<IRestaurant>,
)`
  flex-direction: row;
`;

export const WrapperCard = styled.View`
  margin-right: 16px;
`;

export const Image = styled.Image`
  width: 196px;
  height: 240px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #2b3837;
  margin-top: 20px;
  margin-bottom: 6px;
  font-weight: 600;
`;

export const Categories = styled.Text`
  font-size: 14px;
  color: #2b3837;
  opacity: 0.6;
  margin-bottom: 14px;
`;

export const WrapperDescription = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
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
export const TouchableOpacityTitle = styled(TouchableOpacity)`
  font-size: 14px;
`;
export const TextValue = styled.Text`
  font-size: 14px;
`;
