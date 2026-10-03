import { View, Text } from 'react-native'
import React from 'react'
import { expense } from '@/constants/types'
import PressableContainer from '../ui/PressableContainer'

const ExpenseCard: React.FC<expense> = ({
    icon,
    name,
    date,
    amount
}) => {
    return (
        <PressableContainer>
            
        </PressableContainer>
    )
}

export default ExpenseCard