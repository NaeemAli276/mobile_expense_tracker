import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import SafeViewContainer from '@/components/ui/SafeViewContainer'
import { formatDate } from '@/utils/textutils'
import { Calendar, ChartNoAxesCombined } from 'lucide-react-native'
import WalletCard from '@/components/features/WalletCard'

const index = () => {

    const current_date = new Date().toISOString()

    const [monthly_spent, set_monthly_spent] = useState<number>(278.21)

    return (
        <SafeViewContainer>

            <View
                className='w-full h-full flex flex-col gap-20 '
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
                        {formatDate(current_date)}    
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
                <View
                    className='flex w-full h-auto'
                >
                    <WalletCard/>
                </View>

            </View> 

        </SafeViewContainer>
    )
}

export default index