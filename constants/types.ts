import { LucideIcon } from "lucide-react-native";
import React from "react";

export type RootStackParamList = {
    index: undefined
    categories: undefined
    wallet: undefined
    analytics: undefined
    newCategory: undefined
    category: { name: string }
};

export type Category = {
    id: number,
    name: string,
}

export type Expense = {
    id: string
    icon: any
    name: string
    date: string
    amount: number
}