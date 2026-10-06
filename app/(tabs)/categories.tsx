import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import SafeViewContainer from '@/components/ui/SafeViewContainer'
import DynamicIcon from '@/components/atoms/DynamicIcon'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Category, RootStackParamList } from '@/constants/types'
import { useNavigation } from 'expo-router'
import CategoryBtn from '@/components/ui/CategoryBtn'

const categories = () => {
  
  const [loaded_categories, set_loaded_categories] = useState<Category[]>([])

  const nav = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  
  const handleNavigate = (): void => {
    nav.push('newCategory')
  }

  return (
    <SafeViewContainer>

      <View
        className='w-full h-full flex flex-col gap-8 relative'
      >

        <Text
          className='text-2xl font-semibold text-white'
        >
          Select Category
        </Text>

        {/* no categories or categories */}
        <View
          className='w-full h-full'
        >
          {
            loaded_categories.length <= 0
            ? <View
                className='w-full flex items-center justify-center h-3/4 gap-4'
              >
                <View
                  className='bg-indigo-200 rounded-full p-5'
                >
                  <DynamicIcon
                    name='FaceExpressionless'
                    color={'#6366f1'}
                    strokeWidth={1.0}
                    size={4 * 20}
                  />
                </View>
                <View>
                  <Text
                    className='text-indigo-900 text-xl font-medium'
                  >
                    No categories currently
                  </Text>
                </View>
              </View>
            : <FlatList
                data={loaded_categories}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <CategoryBtn/>
                )}
              />
          }
        </View>


        <TouchableOpacity
          className='p-2 bg-indigo-500 rounded-full size-16 absolute bottom-24 right-0'
          onPress={() => handleNavigate()}
        >
          <DynamicIcon
            name='Plus'
            color={'#ffffff'}
            strokeWidth={1.0}
            size={4 * 10.5}
          />
        </TouchableOpacity>

      </View>

    </SafeViewContainer>
  )
}

export default categories