import { View, Text, TouchableOpacity, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import SafeViewContainer from '@/components/ui/SafeViewContainer'
import DynamicIcon from '@/components/atoms/DynamicIcon'
import { useNavigation } from 'expo-router'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/constants/types'
import CustomTextInput from '@/components/ui/CustomTextInput'
import DropdownMenu from '@/components/ui/DropdownMenu'

const newCategory = () => {
    
    const nav = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    
    const [name_input, set_name_input] = useState<string>('')
    const [selected_icon, set_selected_icon] = useState<string>('')

    const handleChangeName = (text: string): void => {
        set_name_input(text)
    }

    const handleChangeIcon = (icon: string) => {
        set_selected_icon(icon)
    }

    const handleNavigate = (): void => {
        nav.goBack()
    }
    
    const icons: any[] = [
        "ShoppingCart",
        "BanknoteArrowDown",
        "Wallet",
        "UtilityPole",
        "Droplet",
        "Car",
        "Joystick",
        "Film",
        "Music",
        "Refrigerator",
        "WashingMachine",
        "Ticket",
        "Banknote",
        "Smartphone",
        "Plus",
    ]

    return (
        <SafeViewContainer>

            <View
                className='w-full h-full flex flex-col gap-10'
            >   

                {/* back btn and txt */}
                <View
                    className='flex items-start flex-row gap-4 justify-start w-auto h-auto'
                >
                    <TouchableOpacity
                        className='rotate-180 self-start bg-white rounded-lg p-1 flex items-center justify-center'
                        onPress={() => handleNavigate()}
                    >
                        <DynamicIcon
                            name='ChevronRight'
                            size={36}
                            strokeWidth={1.2}
                        />
                    </TouchableOpacity>

                    <View
                        className='flex flex-col gap-0.5 w-auto h-auto '
                    >
                        <Text
                            className='text-2xl/tight font-medium text-white'
                        >
                            Create category
                        </Text>
                        <Text
                            className='text-base/tight text-white/70'
                        >
                            Enter the fields to create a category
                        </Text>
                    </View>

                </View>

                {/* input fields */}
                <View
                    className='flex flex-col w-full h-full justify-between'
                >

                    {/* name field & icon field */}
                    <View
                        className='flex flex-col gap-8 w-full h-auto'
                    >   
                        <CustomTextInput
                            value={name_input}
                            onChange={handleChangeName}
                            placeholder='Enter a name...'
                            name='Name'
                        />

                        <DropdownMenu
                            selected_value={selected_icon}
                            name='Selected icon'
                        >
                            <FlatList
                                data={icons}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => (
                                    <Pressable
                                        className='flex flex-row items-center gap-4 w-full h-auto p-2 px-3'
                                        onPress={() => handleChangeIcon(item)}
                                    >
                                        <DynamicIcon
                                            name={item}
                                            strokeWidth={1.2}
                                            color={'#312e81'}
                                        />
                                        <Text
                                            className='text-indigo-900 font-regular'
                                        >
                                            {item}
                                        </Text>
                                    </Pressable> 
                                )}
                                contentContainerClassName='bg-white w-full rounded-lg'
                            />
                        </DropdownMenu>
                    </View>

                </View>

            </View>

        </SafeViewContainer>
    )
}

export default newCategory