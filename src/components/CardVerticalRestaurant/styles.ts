import styled from 'styled-components/native';
import Feathericons from 'react-native-vector-icons/Feather';
import {FlatList} from 'react-native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
`;
export const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
`;
export const Wrapper = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

export const RestaurantList = styled(FlatList).attrs({})``;
export const Image = styled.Image`
  width: 87px;
  height: 87px;
  border-radius: 10px;
`;
export const WrapperCard = styled.View`
  padding: 0 20px;
`;
export const TitleRestaurant = styled.Text`
  font-size: 18px;
  color: #2b3837;
  font-weight: 600;
  margin-bottom: 8px;
`;
export const Categories = styled.Text`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.6;
  margin-bottom: 16px;
`;
export const WrapperText = styled.View`
  flex-direction: row;
`;
export const Icon = styled(Feathericons)`
  font-size: 16px;
  margin-right: 4px;
`;

export const TextValue = styled.Text``;
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
