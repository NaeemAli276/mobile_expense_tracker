import { Expense } from "@/constants/types";
import { createMMKV } from 'react-native-mmkv'
import { randomString } from '../utils/textutils'

export const storage = createMMKV({
    id: 'finances-expenses-storage'
})

const PREFIX = 'expenses:'

export function saveExpense(expense: Expense): void {

    const expenseUpdated = {
        id: randomString(),
        icon: expense.icon,
        category_id: expense.category_id,
        date: expense.date,
        amount: expense.amount
    }

    storage.set(PREFIX + expense.id, JSON.stringify(expenseUpdated))

}

export function deleteExpense(id: number): void {

    storage.remove(PREFIX + id)

}

