import { renderBlock } from './lib.js'

class user {
  username: string
  avatarUrl: string
}

class favoritesAmount {
  favoritesAmount: number
}

export function getUser() {
  const data: unknown = localStorage.getItem('user');

  if (data instanceof user) {
    return data;
  } else {
    return 'Anonym';
  }
}

export function getFavoritesAmount() {
  const data: unknown = localStorage.getItem('user');

  if (data instanceof favoritesAmount) {
    return data;
  } else {
    return 'ничего нет';
  }
}

export function renderUserBlock(name: string, urlAvatar: string, favoriteItemsAmount?: number) {
  const favoritesCaption: string | number = favoriteItemsAmount >= 1 ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems: boolean = favoriteItemsAmount >= 1 ? true : false

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src=${urlAvatar} alt=${name} />
      <div class="info">
          <p class="name">${name}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
