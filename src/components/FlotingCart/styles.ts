import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: ${() => (Platform.OS === 'ios' ? getStatusBarHeight() : `${25}`)}px;
  z-index: 9999;
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
export const Badge = styled.Text``;
