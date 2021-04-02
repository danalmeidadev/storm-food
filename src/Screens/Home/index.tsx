import React from 'react';
import {CardRestaurant} from '~/components/CardRestaurant';
import {Header} from '~/components/Header';
import {InputText} from '~/components/InputText';
import {Container, WrapperInput, WrapperTitle, Title, Subtitle} from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <WrapperInput>
          <InputText placeholder="Try Lasagna" />
        </WrapperInput>
        <WrapperTitle>
          <Title>Recommendation</Title>
          <Subtitle>See More</Subtitle>
        </WrapperTitle>
        <CardRestaurant />
      </Container>
    </>
  );
};

export {Home};
