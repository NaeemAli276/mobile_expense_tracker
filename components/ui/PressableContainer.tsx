import { View, Text, Pressable } from 'react-native'
import React from 'react'

interface PressableContainerProps {
    onPress: () => void
    children: any
}

const PressableContainer: React.FC<PressableContainerProps> = ({
    onPress,
    children
}) => {
    return (
        <Pressable
            className='w-full h-[4.5rem] bg-white rounded-md shadow shadow-indigo-950'
        >
            {children}
        </Pressable>
    )
}

export default PressableContainer