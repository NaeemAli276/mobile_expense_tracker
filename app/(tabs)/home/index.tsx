import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import SafeViewContainer from '@/components/ui/SafeViewContainer'
import { formatCalendarDate } from '@/utils/textutils'
import { Calendar, ChartNoAxesCombined } from 'lucide-react-native'
import WalletCard from '@/components/features/WalletCard'
import { Expense } from '@/constants/types'
import ExpenseCard from '@/components/features/ExpenseCard'

const index = () => {

    const current_date = new Date().toISOString()

    const [monthly_spent, set_monthly_spent] = useState<number>(278.21)
    const [expenses, set_expenses] = useState<Expense[]>([
        {
            id: '0',
            icon: 'Music',
            name: 'Spotify Subscriptions',
            date: current_date,
            amount: 20.25
        },
        {
            id: '1',
            icon: 'Banknote',
            name: 'Halifax Balance Top up',
            date: current_date,
            amount: 7.50
        },
        {
            id: '2',
            icon: 'Smartphone',
            name: 'Voxi',
            date: current_date,
            amount: 10.00
        },
        {
            id: '3',
            icon: 'Film',
            name: 'Netflix',
            date: current_date,
            amount: 17.50
        },
    ])

    return (
        <SafeViewContainer>

            <View
                className='w-full h-full flex flex-col gap-12 '
            >
                
                {/* current date */}
                <View
                    className='flex items-center justify-center w-full h-auto flex-row gap-2'
                >
                    <Calendar
                        color={'#312e81'}
                        strokeWidth={1.5}
                        size={20}
                    />
                    <Text
                        className='text-lg text-indigo-900 font-medium'
                    >
                        {formatCalendarDate(current_date)}    
                    </Text>
                </View>

                {/* monthly spent */}
                <View
                    className='flex flex-col gap-2 w-auto h-auto items-center justify-center'
                >
                    
                    <Text
                        className='text-indigo-900/70 text-sm font-regular'
                    >
                        This Month Spend
                    </Text>

                    {/* number */}
                    <Text
                        className='text-4xl font-semibold text-indigo-800'
                    >
                        £{monthly_spent}
                    </Text>

                    {/* optional text */}
                    <View
                        className='flex flex-row items-center gap-2 w-auto h-auto'
                    >
                        <ChartNoAxesCombined
                            color={'#312e8180'}
                            strokeWidth={1.5}
                            size={16}
                        />
                        <Text
                            className='text-xs font-regular text-indigo-900/70'
                        >
                            24% below last month
                        </Text>
                    </View>

                </View>

                {/* wallet */}
                {/* <View
                    className='flex w-full h-auto'
                >
                    <WalletCard/>
                </View> */}

                {/* expenses */}
                <View
                    className='flex flex-col gap-3 w-full h-auto'
                >
                    
                    {/* title and see all btn */}
                    <View
                        className='flex flex-row items-center justify-between'
                    >
                        <Text
                            className='text-lg font-medium text-indigo-900'
                        >
                            Recent transactions
                        </Text>
                        <TouchableOpacity>
                            <Text
                                className='font-regular text-indigo-900'
                            >
                                See all
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* list */}
                    <FlatList
                        data={expenses}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <ExpenseCard
                                id={item.id}
                                icon={item.icon}
                                name={item.name}
                                date={item.date}
                                amount={item.amount}
                            />
                        )}
                        contentContainerClassName='flex gap-3'
                    />

                </View>

            </View> 

        </SafeViewContainer>
    )
}

export default index