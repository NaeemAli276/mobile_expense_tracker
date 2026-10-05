import { LucideIcon } from "lucide-react-native";
import React from "react";

export type RootStackParamList = {
    index: undefined
    categories: undefined,
    wallet: undefined,
    analytics: undefined
};

export type expense = {
    id: string
    icon: any
    name: string
    date: string
    amount: number
}