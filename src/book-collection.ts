import { Book } from './book.js'
import { Collection } from './collection.js'
import { Product } from './product.js'

// коллекция продуктов со специфичной функциональностью
export class ProductCollection<T extends Product> extends Collection<T> {
  public get price(): number {
    let totalPrice = 0
    const keys = Object.getOwnPropertyNames(this.items)

    for (const key of keys) {
      const item = this.items[key]
      totalPrice += item?.price ?? 0
    }
    
    return totalPrice
  }
}

// коллекция книг для удобной работы
// BookCollection в коде выглядит читабельнее чем Collection<Book>
export class BookCollection extends ProductCollection<Book> {
}
