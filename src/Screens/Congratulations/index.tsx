import React from 'react';
import { Images } from '~/assets/images';
import {
  Container,
  Thanks,
  Image,
  Title,
  Text,
  Buttom,
  TextButtom,
} from './styles';

const Congratulations: React.FC = () => {
  return (
    <Container>
      <Thanks>
        <Image source={Images.Thanks} />
        <Title>Thanks for Buying Food with Us!</Title>
        <Text>Your food will arrive in 3 min.</Text>
        <Buttom>
          <TextButtom>Track your order</TextButtom>
        </Buttom>
      </Thanks>
    </Container>
  );
};

export default Congratulations;
