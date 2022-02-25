type Data = {
    id?: string,
    title?: string,
    details?: string,
    photos?: string[],
    coordinates?: number[],
    bookedDates?: number[],
    price?: 12000
}

type Flat = {
    photos?: string[],
    totalPrice?: number,
    price?: number
}

export const database: Data[]
export const backendPort: number
export const localStorageKey: string

export function cloneDate(date: Date): Date
export function addDays(date: Date, days: number): Date

export class FlatRentSdk {
    // ??? constructor() - не нашёл ифны, как его типизировать. Буду благодарен за подсказку
    get(id: number): string
    search(parameters: Flat): boolean | boolean[] | Flat | void
    _formatFlatObject(flat: Flat, nightNumber: number): string[] | Flat
}

// остальное всё очень похоже. Сложно профилировать на основе кода без дебага и нормального понимании для чего эта либа
// все константы, функции, и несколько методов класса описал. Если описывать всё - очень долго