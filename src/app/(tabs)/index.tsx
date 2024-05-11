import { View, Text } from 'react-native';

import { Header } from '../../modules/@home/components/Header';
import { AppBanner } from '../../modules/@home/components/AppBanner';
import { CategoriesList } from '../../modules/@home/components/CategoriesList';
import { RestaurantsList } from '../../modules/@home/components/RestaurantsList';
import { RestaurantSearch } from '../../modules/@home/components/RestaurantSearch';

export default function Tab() {
  return (
    <View className='px-4 mt-12'>
      <Header />
      <AppBanner />

      <Text className='font-semibold text-[20px] my-4'>Buscar restaurante</Text>

      <RestaurantSearch />
      <CategoriesList />

      <RestaurantsList />
    </View>
  );
}
