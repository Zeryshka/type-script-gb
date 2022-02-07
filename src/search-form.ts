import { renderBlock } from './lib.js'

function addDay(date: Date, count: number) {
  const D = new Date(date);
  D.setDate(D.getDate() + count);
  return D;
}

function dateFormat(date: Date) {
  const options: object = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return date.toLocaleString('eu-EU', options).replace(/\//g, '-');
}

export function renderSearchFormBlock (dateFrom?: Date, dateTo?: Date) {
  const now = dateFormat(new Date());
  const plusTwoDays = dateFormat(addDay(new Date(), 2));
  
  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Москва" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${dateFrom}" min="${now}" "max="2022-05-01" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${dateTo}" min="${now}" max="${plusTwoDays}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
