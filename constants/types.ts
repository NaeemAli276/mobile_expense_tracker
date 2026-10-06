import { LucideIcon } from "lucide-react-native";
import React from "react";

export type RootStackParamList = {
    index: undefined
    categories: undefined,
    wallet: undefined,
    analytics: undefined,
    category: { name: string }
};

export type Category = {
    id: number,
    name: string,
    expenses: Expense[]
}

export type Expense = {
    id: string
    icon: any
    name: string
    date: string
    amount: string
}