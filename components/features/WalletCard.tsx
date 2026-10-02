import { View, Text } from 'react-native'
import React from 'react'
import PressableContainer from '../ui/PressableContainer'
import { useNavigation } from 'expo-router'


const WalletCard = () => {

    const nav = useNavigation<Prop>()

    const handleNavigate = (): void => {

        nav.navigate('wallet')

    }

    return (
        <PressableContainer>

            <View
                className='flex w-full h-full justify-between flex-row items-center'
            >

            </View>

        </PressableContainer>
    )
}

export default WalletCard