import { View, Text, Pressable } from 'react-native'
import React, { Children, useState } from 'react'
import DynamicIcon from '../atoms/DynamicIcon'


interface DropdownMenuProps {
    selected_value: string
    name: string
    children: any
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
    selected_value,
    name,
    children
}) => {

    const [is_dropdown_active, set_is_dropdown_active] = useState<boolean>(false)
    
    return (
        <View
            className='flex w-full h-auto relative'
        >
            {/* current value and pressable */}
            <Pressable
                className='w-full h-auto bg-white pl-4 py-2 pb-3 rounded-lg relative shadow shadow-indigo-900/40'
                onPress={() => set_is_dropdown_active(!is_dropdown_active)}
            >
                <Text
                    className='text-sm font-regular text-indigo-900/70'
                >
                    {name}
                </Text>
                <Text
                    className={`${selected_value.length <= 0 ? 'text-indigo-900/70' : 'text-indigo-900'} font-regular text-lg `}
                >
                    {
                        selected_value.length <= 0
                        ? 'No icon selected'
                        : selected_value
                    }
                </Text>
                <View
                    className={`${is_dropdown_active ? '-rotate-90' : 'rotate-90'} absolute top-5 right-4`}
                >
                    <DynamicIcon
                        name='ChevronRight'
                        color={'#a5b4fc'}
                        strokeWidth={1.2}
                    />
                </View>
            </Pressable>

            {/* menu */}
            <View
                className={`${is_dropdown_active ? 'flex' : 'hidden'} absolute top-20 left-0 bg-white w-full h-40 rounded-lg p-1 shadow shadow-indigo-900/40`}
            >
                {children}
            </View>
        </View>
    )
}

export default DropdownMenu