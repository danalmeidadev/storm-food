import React, { useCallback, useState, useEffect } from 'react';
import { View } from 'react-native';
import { Images } from '~/assets/images';
import { api } from '~/services/api';
import {
  Container,
  RestaurantList,
  WrapperCard,
  Image,
  Title,
  Categories,
  WrapperDescription,
  Value,
  Avaliable,
  Location,
  Icon,
  Text,
  TextValue,
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

const CardRestaurant: React.FC<IRestaurant> = () => {
  const [restaurant, setRestaurant] = useState<IRestaurant[]>([]);

  const restaurants = useCallback(() => {
    api.get('restaurants').then(({ data }) => setRestaurant(data));
  }, []);

  useEffect(() => {
    restaurants();
  }, [restaurants]);

  console.log(restaurant);

  return (
    <Container>
      <RestaurantList
        data={restaurant}
        horizontal={true}
        /* eslint-disable */
        /* keyExtractor={data => data.id} */
        ListFooterComponent={<View />}
        showsHorizontalScrollIndicator={false}
       /* eslint-disable */
        renderItem={({item}) => (
          <WrapperCard>
            <Image source={Images.Shaking} />
            <Title>Tefste</Title>
            <Categories>Burger . Pasta . Pizza</Categories>
            <WrapperDescription>
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
            </WrapperDescription>
          </WrapperCard>
        )}
      />
    </Container>
  );
};

export {CardRestaurant};
