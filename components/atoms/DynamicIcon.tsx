import { View, Text } from 'react-native'
import React from 'react'
import type { LucideProps } from 'lucide-react-native';
import { 
    BanknoteArrowDown, 
    ShoppingCart,
    Wallet,
    Refrigerator,
    WashingMachine,
    UtilityPole,
    Droplet,
    Car,
    Ticket,
    Joystick,
    Film,
    Music,
    Banknote,
    Smartphone,
    ChevronRight
} from 'lucide-react-native'

const iconMap = {
    ShoppingCart,
    BanknoteArrowDown,
    Wallet,
    UtilityPole,
    Droplet,
    Car,
    Joystick,
    Film,
    Music,
    Refrigerator,
    WashingMachine,
    Ticket,
    Banknote,
    Smartphone,
    ChevronRight
} as const;

type IconName = keyof typeof iconMap;

interface DynamicIconProps extends LucideProps {
    name: IconName;
}

const DynamicIcon = ({ name, ...props }: DynamicIconProps) => {
    const IconComponent = iconMap[name];

    if (!IconComponent) {
        if (__DEV__) {
        console.warn(`Icon "${name}" is not in the iconMap.`);
    }
        return null;
    }

    return <IconComponent {...props} />;
};


export default DynamicIcon