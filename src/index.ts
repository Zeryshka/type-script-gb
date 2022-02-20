// import { renderSearchFormBlock } from './search-form.js'
// import { renderSearchStubBlock } from './search-results.js'
// import { renderUserBlock } from './user.js'
// import { renderToast } from './lib.js'
import { getTodosByCount } from './todos.js'
import { todoInterface } from './interfaces.js';

window.addEventListener('DOMContentLoaded', async () => {
  const todos: todoInterface[] = await getTodosByCount(5);
  console.log(todos);

  // renderUserBlock('Maxim Sorokin', './img/avatar.png', 1)
  // renderSearchFormBlock()
  // renderSearchStubBlock()
  // renderToast(
  //   { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
  //   { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  // )
})
