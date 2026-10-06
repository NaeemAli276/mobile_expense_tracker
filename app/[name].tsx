import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router'

const category = () => {

    const { name } = useLocalSearchParams<{ name: string }>()

    useEffect(() => {
        console.log(name)
    }, [])

    return (
        <View>
            <Text>category</Text>
        </View>
    )
}

export default category