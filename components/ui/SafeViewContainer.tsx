import { ImageBackground ,View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

interface SafeViewContainerProps {
    children: any
}

const SafeViewContainer: React.FC<SafeViewContainerProps> = ({
    children
}) => {
    return (
        <ImageBackground
            source={require('../../assets/images/background.png')}
            className='w-full h-screen '
        >
            <SafeAreaView
                className='w-full h-full p-5 px-7 bg-black/5'
            >
                {children}
            </SafeAreaView>
        </ImageBackground>
    )
}

export default SafeViewContainer
