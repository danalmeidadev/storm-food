import React, { useCallback, useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Images } from '~/assets/images';
import { api } from '~/services/api';
import {
  Container,
  Wrapper,
  Image,
  WrapperCard,
  TitleRestaurant,
  Categories,
  WrapperText,
  Value,
  Icon,
  TextValue,
  Avaliable,
  Location,
  RestaurantList,
} from './styles';

interface IRestaurant {
  id: number;
  name: string;
  categories: string;
  avaliable: number;
  long: number;
  lat: number;
  img: string;
}

const CardVerticalRestaurant: React.FC = () => {
  const [restaurant, setRestaurant] = useState<IRestaurant[]>([]);

  const restaurants = useCallback(() => {
    api.get('restaurants').then(({ data }) => setRestaurant(data));
  }, []);

  useEffect(() => {
    restaurants();
  }, [restaurants]);

  return (
    <Container>
      <RestaurantList
        data={restaurant}
        /* eslint-disable */
        /* keyExtractor={data => data.id} */     
        ListFooterComponent={<View />}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Wrapper>
            <Image source={Images.Shaking} />
            <WrapperCard>
              <TitleRestaurant>Fossa Kitchen</TitleRestaurant>
              <Categories>Burger . Pasta . Pizza</Categories>
              <WrapperText>
                <Value>
                  <Icon name="tag" color="#25A49D" />
                  <TextValue>$$$$</TextValue>
                </Value>
                <Avaliable>
                  <Icon name="star" color="#F2C522" />
                  <Text>4.6</Text>
                </Avaliable>
                <Location>
                  <Icon name="map-pin" color="#D94361" />
                  <Text>5.3 Km</Text>
                </Location>
              </WrapperText>
            </WrapperCard>
          </Wrapper>
        )}
      />
    </Container>
  );
};

export {CardVerticalRestaurant};
