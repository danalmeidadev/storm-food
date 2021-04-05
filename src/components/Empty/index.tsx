import React from 'react';
import { Images } from '~/assets/images';
import { Container, Image, ImageContainer, Text } from './styles';

const Empty: React.FC = () => {
  return (
    <Container>
      <ImageContainer>
        <Image source={Images.Empty} />
      </ImageContainer>
      <Text>Oops! Seu carrinho está vazio!</Text>
    </Container>
  );
};

export default Empty;
