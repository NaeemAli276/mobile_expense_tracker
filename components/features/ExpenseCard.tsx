import { View, Text } from 'react-native'
import React from 'react'
import { expense } from '@/constants/types'
import PressableContainer from '../ui/PressableContainer'
// import { getLucideIcon } from '@/utils/icons'
import { Ban } from 'lucide-react-native' 
import DynamicIcon from '../ui/DynamicIcon'

const ExpenseCard: React.FC<expense> = ({
    icon,
    name,
    date,
    amount
}) => {

    // const Icon = getLucideIcon(icon)

    return (
        <PressableContainer
            onPress={() => {}}
        >
            <View
                className='w-full h-full flex flex-row items-center justify-between px-3.5'
            >

                {/* icon, name, date */}
                <View
                    className='flex flex-row gap-2 w-full h-auto'
                >

                    <View
                        className='bg-indigo-500 p-2 rounded-md'
                    >   
                        <DynamicIcon
                            color={'#ffffff'}
                            strokeWidth={1.2}
                            name={icon}
                        />
                        
                    </View>

                </View>

            </View>
        </PressableContainer>
    )
}

export default ExpenseCard