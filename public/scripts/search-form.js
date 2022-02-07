import { renderBlock } from './lib.js';
function addDay(date, count) {
    const D = new Date(date);
    D.setDate(D.getDate() + count);
    return D;
}
function dateFormat(date) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleString('eu-EU', options).replace(/\//g, '-');
}
export function renderSearchFormBlock(dateFrom, dateTo) {
    const now = dateFormat(new Date());
    const plusTwoDays = dateFormat(addDay(new Date(), 2));
    renderBlock('search-form-block', `
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
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUV0QyxTQUFTLE1BQU0sQ0FBQyxJQUFVLEVBQUUsS0FBYTtJQUN2QyxNQUFNLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUMvQixPQUFPLENBQUMsQ0FBQztBQUNYLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxJQUFVO0lBQzVCLE1BQU0sT0FBTyxHQUFXLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQztJQUM5RSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDbkUsQ0FBQztBQUVELE1BQU0sVUFBVSxxQkFBcUIsQ0FBRSxRQUFlLEVBQUUsTUFBYTtJQUNuRSxNQUFNLEdBQUcsR0FBRyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLE1BQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXRELFdBQVcsQ0FDVCxtQkFBbUIsRUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7OzJEQWlCdUQsUUFBUSxVQUFVLEdBQUc7Ozs7NERBSXBCLE1BQU0sVUFBVSxHQUFHLFVBQVUsV0FBVzs7Ozs7Ozs7Ozs7O0tBWS9GLENBQ0YsQ0FBQTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliLmpzJ1xuXG5mdW5jdGlvbiBhZGREYXkoZGF0ZTogRGF0ZSwgY291bnQ6IG51bWJlcikge1xuICBjb25zdCBEID0gbmV3IERhdGUoZGF0ZSk7XG4gIEQuc2V0RGF0ZShELmdldERhdGUoKSArIGNvdW50KTtcbiAgcmV0dXJuIEQ7XG59XG5cbmZ1bmN0aW9uIGRhdGVGb3JtYXQoZGF0ZTogRGF0ZSkge1xuICBjb25zdCBvcHRpb25zOiBvYmplY3QgPSB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICcyLWRpZ2l0JywgZGF5OiAnMi1kaWdpdCcgfTtcbiAgcmV0dXJuIGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2V1LUVVJywgb3B0aW9ucykucmVwbGFjZSgvXFwvL2csICctJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWFyY2hGb3JtQmxvY2sgKGRhdGVGcm9tPzogRGF0ZSwgZGF0ZVRvPzogRGF0ZSkge1xuICBjb25zdCBub3cgPSBkYXRlRm9ybWF0KG5ldyBEYXRlKCkpO1xuICBjb25zdCBwbHVzVHdvRGF5cyA9IGRhdGVGb3JtYXQoYWRkRGF5KG5ldyBEYXRlKCksIDIpKTtcbiAgXG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtZm9ybS1ibG9jaycsXG4gICAgYFxuICAgIDxmb3JtPlxuICAgICAgPGZpZWxkc2V0IGNsYXNzPVwic2VhcmNoLWZpbGVkc2V0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNpdHlcIj7Qk9C+0YDQvtC0PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNpdHlcIiB0eXBlPVwidGV4dFwiIGRpc2FibGVkIHZhbHVlPVwi0JzQvtGB0LrQstCwXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgZGlzYWJsZWQgdmFsdWU9XCI1OS45Mzg2LDMwLjMxNDFcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwicHJvdmlkZXJzXCI+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm92aWRlclwiIHZhbHVlPVwiaG9teVwiIGNoZWNrZWQgLz4gSG9teTwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm92aWRlclwiIHZhbHVlPVwiZmxhdC1yZW50XCIgY2hlY2tlZCAvPiBGbGF0UmVudDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+LS0hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2staW4tZGF0ZVwiPtCU0LDRgtCwINC30LDQtdC30LTQsDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaGVjay1pbi1kYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIiR7ZGF0ZUZyb219XCIgbWluPVwiJHtub3d9XCIgXCJtYXg9XCIyMDIyLTA1LTAxXCIgbmFtZT1cImNoZWNraW5cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2stb3V0LWRhdGVcIj7QlNCw0YLQsCDQstGL0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2stb3V0LWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPVwiJHtkYXRlVG99XCIgbWluPVwiJHtub3d9XCIgbWF4PVwiJHtwbHVzVHdvRGF5c31cIiBuYW1lPVwiY2hlY2tvdXRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibWF4LXByaWNlXCI+0JzQsNC60YEuINGG0LXQvdCwINGB0YPRgtC+0Lo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwibWF4LXByaWNlXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiIG5hbWU9XCJwcmljZVwiIGNsYXNzPVwibWF4LXByaWNlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj48YnV0dG9uPtCd0LDQudGC0Lg8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgIDwvZm9ybT5cbiAgICBgXG4gIClcbn1cbiJdfQ==