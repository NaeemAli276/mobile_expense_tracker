import { View, Text } from 'react-native'
import React, { useState } from 'react'
import PressableContainer from '../ui/PressableContainer'
import { useNavigation } from 'expo-router'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/constants/types'
import { Wallet } from 'lucide-react-native'

const WalletCard = () => {

    const [wallet_amount, set_wallet_amount] = useState<number>(3245.70)

    const nav = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const handleNavigate = (): void => {

        nav.navigate('wallet')

    }

    return (
        <PressableContainer
            onPress={() => handleNavigate()}
        >

            <View
                className='flex w-full h-full justify-between flex-row items-center px-3.5'
            >

                {/* icon, name & date */}
                <View
                    className='flex flex-row gap-4 w-auto h-full items-center '
                >

                    {/* icon */}
                    <View
                        className='size-11 items-center justify-center flex p-2 rounded-md bg-indigo-200'
                    >
                        <Wallet
                            color={'#3128e1'}
                            strokeWidth={1.5}
                        />        
                    </View>

                    {/* name */}
                    <Text
                        className='font-medium text-xl text-indigo-900'
                    >
                        Wallet
                    </Text>

                </View>

            </View>

        </PressableContainer>
    )
}

export default WalletCard