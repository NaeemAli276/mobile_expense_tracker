import { LucideIcon } from "lucide-react-native";
import React from "react";

export type RootStackParamList = {
    index: undefined
    categories: undefined
    wallet: undefined
    analytics: undefined
    createCategory: undefined
    category: { name: string }
};

export type Category = {
    id: number,
    name: string,
}

export type Expense = {
    id: string
    icon: any
    category_id: string
    date: string
    amount: number
}