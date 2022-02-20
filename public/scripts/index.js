var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// import { renderSearchFormBlock } from './search-form.js'
// import { renderSearchStubBlock } from './search-results.js'
// import { renderUserBlock } from './user.js'
// import { renderToast } from './lib.js'
import { getTodosByCount } from './todos.js';
window.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    const todos = yield getTodosByCount(5);
    console.log(todos);
    // renderUserBlock('Maxim Sorokin', './img/avatar.png', 1)
    // renderSearchFormBlock()
    // renderSearchStubBlock()
    // renderToast(
    //   { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    //   { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
    // )
}));
