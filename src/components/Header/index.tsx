import React from 'react';
import {
  Container,
  DeliveryAddress,
  Address,
  Wrapper,
  WrapperAdrres,
  WrapperImage,
  Image,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { Images } from '~/assets/images';

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Icon name="map-pin" size={24} color="#D94361" />
        <WrapperAdrres>
          <DeliveryAddress>Deliver to</DeliveryAddress>
          <Address>Calibara Street 43</Address>
        </WrapperAdrres>
        <WrapperImage>
          <Image source={Images.User} />
        </WrapperImage>
      </Wrapper>
    </Container>
  );
};

export { Header };
