import { Category } from "@/constants/types";
import { getDatabase } from "@/storage/db";

export async function create_category(name: string): Promise<number> {

    const db = await getDatabase()

    const result = await db.runAsync(
        'INSERT INTO Categories (name) VALUES (?)',
        [name]
    )

    return result.lastInsertRowId

}

export async function get_all_categories(): Promise<Category[]> {

    const db = await getDatabase()

    const result = await db.runAsync(
        'SELECT * FROM Categories'
    )

    return []

}