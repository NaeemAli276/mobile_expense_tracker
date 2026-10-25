import { Category, Expense } from "@/constants/types";
import { createMMKV } from 'react-native-mmkv'

export const storage = createMMKV({
    id: 'finances-categories-storage'
})

const PREFIX = 'categories:'

export function saveCategory(category: Category): void {

    storage.set(PREFIX + category.name, JSON.stringify(category))

}

export function deleteCategory(id: string): void {

    storage.remove(id)

}

export function get_all_categories(): Category[] {

    return storage
        .getAllKeys()
        .filter((k) => k.startsWith(PREFIX))
        .map((k) => JSON.parse(storage.getString(k)!))

}

// categories.ts
export function get_expenses(category_id: string): Expense[] {
    return storage
        .getAllKeys()
        .filter((k) => k.startsWith('expenses:'))
        .map((k) => JSON.parse(storage.getString(k)!) as Expense)
        .filter((exp) => exp.category_id === category_id)
}

export function already_exists(name: string): boolean {
    return storage.contains(PREFIX + name)
}