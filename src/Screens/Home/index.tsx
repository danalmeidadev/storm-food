import React from 'react';
import { CardRestaurant } from '~/components/CardRestaurant';
import { CardVerticalRestaurant } from '~/components/CardVerticalRestaurant';
import { Header } from '~/components/Header';
import { InputText } from '~/components/InputText';
import {
  Container,
  WrapperInput,
  WrapperTitle,
  Title,
  Subtitle,
  Near,
} from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <WrapperInput>
          <InputText placeholder="Try Lasagna" />
        </WrapperInput>
        <WrapperTitle>
          <Title>Recommendation</Title>
          <Subtitle>See More</Subtitle>
        </WrapperTitle>
        <CardRestaurant />
        <Near>Near by</Near>
        <CardVerticalRestaurant />
      </Container>
    </>
  );
};

export { Home };
