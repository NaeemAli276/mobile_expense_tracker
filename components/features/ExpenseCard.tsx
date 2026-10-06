import { View, Text } from 'react-native'
import React from 'react'
import { Expense, RootStackParamList } from '@/constants/types'
import PressableContainer from '../ui/PressableContainer'
// import { getLucideIcon } from '@/utils/icons'
import { Ban } from 'lucide-react-native' 
import DynamicIcon from '../atoms/DynamicIcon'
import { formatDate, formatMoney } from '@/utils/textutils'
import { useNavigation } from 'expo-router'
import { NativeStackNavigationProp } from '@react-navigation/native-stack' 
import { router } from 'expo-router' 

const ExpenseCard: React.FC<Expense> = ({
    icon,
    name,
    date,
    amount
}) => {

    const handleNavigate = (name: string): void => {
        router.push(`/${name}`)
    }

    return (
        <PressableContainer
            onPress={() => handleNavigate(name)}
        >
            <View
                className='w-full h-full flex flex-row items-center justify-between px-3.5'
            >

                {/* icon, name, date */}
                <View className='flex flex-row gap-3 flex-1 h-auto'>

                    <View className='bg-indigo-500 p-2 rounded-md'>
                        <DynamicIcon
                            color={'#ffffff'}
                            strokeWidth={1.2}
                            name={icon}
                        />
                    </View>

                    <View className='flex flex-col gap-1 flex-1 h-auto min-w-0'>
                        <Text
                            numberOfLines={1}
                            className='font-medium text-indigo-900 text-base/tight'
                        >
                            {name}
                        </Text>
                        <Text
                            className='text-sm/tight text-indigo-900/70 font-regular'
                        >
                            {formatDate(date)}
                        </Text>
                    </View>

                </View>

                <View className='flex flex-row items-center gap-1 ml-2'>
                    <Text
                        numberOfLines={1}
                        className={`text-rose-500 font-medium text-sm`}
                    >
                        -{formatMoney(Number(amount))}
                    </Text>
                    <DynamicIcon
                        name={'ChevronRight'}
                        size={20}
                        strokeWidth={1.2}
                    />
                </View>
            </View>
        </PressableContainer>
    )
}

export default ExpenseCard