import { View, Text, TextInput } from 'react-native'
import React from 'react'

interface CustomTextInputProps {
    name: string
    placeholder: string
    value: string
    onChange: (text: string) => void
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
    name = 'Name',
    placeholder = 'Enter a name...',
    value,
    onChange
}) => {
    return (
        <View
            className='flex flex-col gap-1 w-full h-auto relative'
        >
            <Text
                className='text-indigo-900/70 font-regular text-sm absolute top-1.5 left-4 z-20'
            >
                {name}
            </Text>
            <TextInput
                onChangeText={onChange}
                value={value}
                placeholder={placeholder}
                className='pt-7 shadow shadow-indigo-900/40 bg-white rounded-lg text-lg placeholder:text-indigo-900/70 pl-4 font-regular pb-2 text-indigo-900'
            />
        </View>
    )
}

export default CustomTextInput