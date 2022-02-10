export function renderBlock(elementId, html) {
    const element = document.getElementById(elementId);
    element.innerHTML = html;
}
export function renderToast(message, action) {
    let messageText;
    if (message != null) {
        messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${(action === null || action === void 0 ? void 0 : action.name) || 'Закрыть'}</button>
      </div>
    `;
    }
    renderBlock('toast-block', messageText);
    const button = document.getElementById('toast-main-action');
    if (button != null) {
        button.onclick = function () {
            if (action != null && action.handler != null) {
                action.handler();
            }
            renderToast(null, null);
        };
    }
}
export function addDays(date, count) {
    const D = new Date(date);
    D.setDate(D.getDate() + count);
    return dateFormat(D);
}
export function dateFormat(date) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleString('eu-EU', options).replace(/\//g, '-');
}
export function lastDayOfNextMounth() {
    return dateFormat(new Date(new Date().getFullYear(), new Date().getMonth() + 2, 0));
}
