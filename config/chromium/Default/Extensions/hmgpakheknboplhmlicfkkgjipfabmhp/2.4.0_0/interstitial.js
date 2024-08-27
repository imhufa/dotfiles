var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
(function() {
  "use strict";
  var __vite_style__ = document.createElement("style");
  __vite_style__.textContent = `@charset "UTF-8";.navbar-nav[data-v-d9b52bde] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.bg[data-v-d9b52bde] {
  fill: #fff;
}
.mask[data-v-d9b52bde] {
  fill: #000;
}
[data-bs-theme=dark] .bg[data-v-d9b52bde] {
  fill: #000;
}
[data-bs-theme=dark] .mask[data-v-d9b52bde] {
  fill: #fff;
}.navbar-nav[data-v-e03f0445] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.logo-xs[data-v-e03f0445] {
  --size: 20px;
  --padding: 6px;
  --radius: 6px;
}
.logo-sm[data-v-e03f0445] {
  --size: 32px;
  --padding: 8px;
  --radius: 8px;
}
.logo-md[data-v-e03f0445] {
  --size: 40px;
  --padding: 10px;
  --radius: 12px;
}
.logo-lg[data-v-e03f0445] {
  --size: 48px;
  --padding: 12px;
  --radius: 14px;
}
.logo-xl[data-v-e03f0445] {
  --size: 56px;
  --padding: 12px;
  --radius: 16px;
}
.logo-xs[data-v-e03f0445] {
  --size: 20px;
  --padding: 6px;
  --font-size: 12px;
  --radius: 6px;
}
.logo-sm[data-v-e03f0445] {
  --size: 32px;
  --padding: 8px;
  --font-size: 14px;
  --radius: 8px;
}
.logo-md[data-v-e03f0445] {
  --size: 40px;
  --padding: 10px;
  --font-size: 16px;
  --radius: 12px;
}
.logo-lg[data-v-e03f0445] {
  --size: 48px;
  --padding: 12px;
  --font-size: 20px;
  --radius: 14px;
}
.logo-xl[data-v-e03f0445] {
  --size: 56px;
  --padding: 12px;
  --font-size: 24px;
  --radius: 16px;
}
.logo[data-v-e03f0445] {
  --border: 4px;
  height: var(--size);
  width: var(--size);
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  border-radius: var(--radius);
  overflow: hidden;
}
.logo[data-v-e03f0445]:not(.logo-component) {
  background-color: var(--bs-secondary-bg);
  color: rgb(184, 184, 204);
  padding: var(--padding);
  outline: var(--border) solid rgba(73, 73, 242, 0);
}
a > .logo[data-v-e03f0445]:hover {
  outline-color: rgba(73, 73, 242, 0.2);
  transition: outline 150ms cubic-bezier(0, 0, 0, 1);
}
.icon[data-v-e03f0445] {
  font-size: var(--font-size);
}
.img[data-v-e03f0445] {
  object-fit: contain;
  width: 100%;
  height: 100%;
  position: relative;
}
.logo-mcc .img[data-v-e03f0445] {
  filter: contrast(15%) brightness(175%) sepia(50%);
}
.svg[data-v-e03f0445] {
  width: 100%;
  height: 100%;
}.navbar-nav[data-v-9c935a55] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.badge[data-v-9c935a55] {
  line-height: 1.125rem;
}.navbar-nav[data-v-609c91ec] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.btn-link[data-v-609c91ec] {
  font-weight: 500;
}
.btn-icon[data-v-609c91ec] {
  width: 40px;
  height: 40px;
  padding: 10px;
  border: none;
  color: var(--bs-btn-hover-color);
  line-height: 1;
}
.btn-icon.btn-sm[data-v-609c91ec] {
  width: 24px;
  height: 24px;
  padding: 4px;
}
.btn-nav[data-v-609c91ec] {
  color: rgb(130, 130, 153);
}
.btn-nav[data-v-609c91ec]:hover {
  background-color: var(--bs-tertiary-bg);
}
[data-bs-theme=dark] .btn-nav[data-v-609c91ec] {
  color: rgb(184, 184, 204);
  background-color: rgb(50, 50, 66);
}
[data-bs-theme=dark] .btn-nav[data-v-609c91ec]:hover {
  background-color: #3a3a4d;
}.navbar-nav[data-v-ef6db6b8] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.card-list-item[data-v-ef6db6b8] {
  line-height: 1.125rem;
}
.card-list-item .card-controls[data-v-ef6db6b8] {
  display: none;
  align-items: center;
  justify-content: flex-end;
  flex-shrink: 0;
  flex-direction: row-reverse;
  margin-top: -16px;
}
.card-list-item[data-v-ef6db6b8]:hover {
  background-color: rgba(73, 73, 242, 0.05);
}
.card-list-item:hover .card-label[data-v-ef6db6b8] {
  display: none;
}
.card-list-item:hover .card-controls[data-v-ef6db6b8] {
  display: flex;
}
[data-bs-theme=dark] .card-list-item[data-v-ef6db6b8]:hover {
  background-color: rgba(73, 73, 242, 0.2);
}
.placeholder-logo[data-v-ef6db6b8] {
  height: 48px;
  width: 48px;
  border-radius: 14px;
}
.pan[data-v-ef6db6b8] {
  color: rgb(130, 130, 153);
}
.card-closed[data-v-ef6db6b8] .badge {
  background-color: rgb(130, 130, 153) !important;
  color: rgb(255, 255, 255);
}.navbar-nav[data-v-27dcccb6] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.alert[data-v-27dcccb6] {
  font-weight: 500;
}.navbar-nav[data-v-95127fbc] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
input[type=search][data-v-95127fbc]::-webkit-search-decoration:hover, input[type=search][data-v-95127fbc]::-webkit-search-cancel-button:hover {
  cursor: pointer;
}.navbar-nav[data-v-b6151d9f] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.input-group[data-v-b6151d9f] {
  border-radius: var(--bs-border-radius);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, color 0.15s ease-in-out;
}
.input-group[data-v-b6151d9f]:focus-within {
  box-shadow: 0 0 0 0.25rem rgba(73, 73, 242, 0.25);
}
.input-group[data-v-b6151d9f] .form-control {
  box-shadow: none !important;
  border: none !important;
}
.input-group-text[data-v-b6151d9f] {
  color: currentColor;
  background-color: var(--bs-secondary-bg) !important;
  border: none !important;
}.navbar-nav[data-v-a24065b1] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.user-prompt[data-v-a24065b1] {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--bs-body-secondary);
}
.card-list[data-v-a24065b1] {
  list-style: none;
  margin: 0;
  padding: 0;
}
.card-list[data-v-a24065b1] :nth-child(2 of li.card-loader) {
  opacity: 0.6;
}
.card-list[data-v-a24065b1] :nth-child(3 of li.card-loader) {
  opacity: 0.2;
}
.card-list[data-v-a24065b1] > :last-child {
  margin-bottom: 0 !important;
}
.card-item-link[data-v-a24065b1] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--bs-body-color);
}
.cards-search[data-v-a24065b1] {
  color: rgb(130, 130, 153);
}
.cards-search[data-v-a24065b1]:focus-within {
  color: rgb(50, 50, 66);
}
[data-bs-theme=dark] .cards-search[data-v-a24065b1]:focus-within {
  color: rgb(240, 240, 245);
}.navbar-nav[data-v-2df407ba] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.tooltip[data-v-2df407ba] {
  display: none;
  background-color: var(--bs-body-bg);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 6px 8px;
  z-index: 1;
}
.tooltip.show[data-v-2df407ba] {
  display: inline-block;
}
[data-bs-theme=dark] .tooltip[data-v-2df407ba] {
  box-shadow: 0 0 0 1px rgb(50, 50, 66), 0 4px 12px 0 rgba(0, 0, 0, 0.32);
}
.danger[data-v-2df407ba] {
  background-color: #f8d5db;
  color: rgb(219, 44, 73);
}.navbar-nav[data-v-5821a13f] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.transaction[data-v-5821a13f] {
  cursor: default;
}
.placeholder-logo[data-v-5821a13f] {
  height: 40px;
  width: 40px;
  border-radius: 14px;
}
.date[data-v-5821a13f] {
  color: rgb(130, 130, 153);
}
.descriptor[data-v-5821a13f],[data-v-5821a13f] .amount {
  color: var(--color-body-text);
  font-weight: 500;
}
.unconfirmed .descriptor[data-v-5821a13f] {
  color: rgb(130, 130, 153);
}
[data-v-5821a13f] .amount {
  white-space: nowrap;
}
.unconfirmed[data-v-5821a13f] .amount, .offset[data-v-5821a13f] .amount {
  color: rgb(130, 130, 153);
}
.bounced[data-v-5821a13f] .amount {
  color: rgb(219, 44, 73);
}
.blocked[data-v-5821a13f] .amount, .offset[data-v-5821a13f] .amount {
  text-decoration: line-through;
}
.refunded[data-v-5821a13f] .amount {
  color: rgb(40, 156, 92);
}.navbar-nav[data-v-273ac24d] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.transaction-list[data-v-273ac24d] {
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
}
.transaction-list[data-v-273ac24d] :nth-child(2 of li.transaction-loader) {
  opacity: 0.6;
}
.transaction-list[data-v-273ac24d] :nth-child(3 of li.transaction-loader) {
  opacity: 0.2;
}
.transaction-list[data-v-273ac24d] > :last-child {
  margin-bottom: 0 !important;
}
.user-prompt[data-v-273ac24d] {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--bs-body-secondary);
}.navbar-nav[data-v-c38dd3de] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.transactions-search[data-v-c38dd3de] {
  color: rgb(130, 130, 153);
}
.transactions-search[data-v-c38dd3de]:focus-within {
  color: rgb(50, 50, 66);
}
[data-bs-theme=dark] .transactions-search[data-v-c38dd3de]:focus-within {
  color: rgb(240, 240, 245);
}
.user-prompt[data-v-c38dd3de] {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--bs-body-secondary);
}.navbar-nav[data-v-ba35cb70] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.user-icon[data-v-ba35cb70] {
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
}
.icon-fallback[data-v-ba35cb70] {
  color: var(--bs-gray-300);
}
.small[data-v-ba35cb70] {
  width: 24px;
  height: 24px;
}
.small .icon-fallback[data-v-ba35cb70] {
  width: 12px;
  height: 12px;
}
.large[data-v-ba35cb70] {
  width: 64px;
  height: 64px;
}
.large .icon-fallback[data-v-ba35cb70] {
  width: 32px;
  height: 32px;
}
.user-image[data-v-ba35cb70] {
  width: 100%;
  height: 100%;
  object-fit: cover;
}.navbar-nav[data-v-e8c185d9] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.text-light-emphasis[data-v-e8c185d9] {
  color: rgb(130, 130, 153) !important;
}
.progress[data-v-e8c185d9] {
  height: 4px;
}.navbar-nav[data-v-94cf0b71] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.graphic[data-v-94cf0b71] {
  background-color: rgb(212, 245, 196);
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 160px;
  overflow: hidden;
  position: relative;
  color: rgb(50, 50, 66);
}
.arrow-icon[data-v-94cf0b71] {
  height: 12px;
  width: 12px;
}
.cards[data-v-94cf0b71] {
  position: absolute;
  bottom: 0;
  left: 4px;
}.navbar-nav[data-v-0ce65621] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
input[data-v-0ce65621] {
  -webkit-appearance: none;
  appearance: none;
  height: 1rem;
  width: 1rem;
  background-color: var(--bs-gray-400);
}
input[data-v-0ce65621]:checked {
  background-image: url("/assets/input-checkbox-checked.svg");
  background-size: cover;
  background-position: center;
  background-color: transparent;
}.navbar-nav[data-v-c2d9b60d] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.checkbox-wrapper[data-v-c2d9b60d] {
  font-weight: 400;
  padding: 10px 12px;
}
.checkbox-wrapper label[data-v-c2d9b60d] {
  cursor: pointer;
}.navbar-nav[data-v-fa6a5047] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.card-state-banner[data-v-fa6a5047] {
  padding: 8px;
  width: 100%;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
}
.paused[data-v-fa6a5047] {
  background-color: #3090f1;
}
.closed[data-v-fa6a5047] {
  background-color: #828299;
}.navbar-nav[data-v-a62c5a85] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.bg[data-v-a62c5a85] {
  fill: #fff;
}
.mask[data-v-a62c5a85] {
  fill: #000;
}
[data-bs-theme=dark] .bg[data-v-a62c5a85] {
  fill: #000;
}
[data-bs-theme=dark] .mask[data-v-a62c5a85] {
  fill: #fff;
}.navbar-nav[data-v-a033dd10] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.icon-tap-pay[data-v-a033dd10] {
  margin-left: 6px;
}.navbar-nav[data-v-ce33aa01] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.card-type-header[data-v-ce33aa01] {
  flex-grow: 3;
}
.card-type-label[data-v-ce33aa01] {
  background-color: rgba(27, 28, 38, 0.1);
  border-radius: 4px;
  padding: 4px 8px;
  align-items: center;
  font-size: 11px;
  font-family: "Graphik";
  font-weight: 500;
}
.card-icon-logo[data-v-ce33aa01] {
  max-height: 48px;
  max-width: 100px;
  object-fit: contain;
}
.card-icon-emoji[data-v-ce33aa01] {
  height: 48px;
  width: 48px;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(32px);
  border-radius: 8px;
  font-size: 32px;
}.navbar-nav[data-v-6ddf7410] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.placeholder-logo[data-v-6ddf7410] {
  height: 40px;
}
.card[data-v-6ddf7410] {
  height: 195px;
  border-radius: 16px;
  position: relative;
  color: var(--74560cd4);
  overflow: hidden;
}
.locked-default[data-v-6ddf7410] {
  background: url("/assets/card-locked-default.svg") center center, linear-gradient(292.13deg, #fbf5ef 0%, #4949f1 64%, #2121a4 100%);
  background-size: 100%;
}
.locked-custom[data-v-6ddf7410] {
  background-image: url("/assets/card-locked-custom.svg");
  background-size: 100%;
}
.single-use-card[data-v-6ddf7410] {
  background: linear-gradient(292deg, #ed8b72 0%, #c12943 80.5%);
  background-size: 100%;
}
.unlocked-card[data-v-6ddf7410] {
  background: url("/assets/card-unlocked-default.svg") center center, linear-gradient(292deg, #7221a4 0%, #4949f1 80%);
  background-size: 100%;
}
.digital-wallet[data-v-6ddf7410] {
  background: url("/assets/card-digital-wallet2.svg") center center, linear-gradient(292deg, #000 0%, #000 100%);
  background-size: 100%;
}
.attr[data-v-6ddf7410] {
  font-weight: 500;
}
.attr[data-v-6ddf7410]:not(.clickable) {
  pointer-events: none;
}
.card-bottom[data-v-6ddf7410] {
  font-family: "Graphik";
  font-size: 16px;
  font-weight: 500;
}
.card-bottom-custom[data-v-6ddf7410] {
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(32px);
}
.card-bottom-default[data-v-6ddf7410] {
  background-color: rgba(73, 73, 242, 0.1);
  backdrop-filter: blur(32px);
}
.merchant-category-description[data-v-6ddf7410] {
  background-color: var(--bs-body-bg);
  color: var(--bs-body-color);
  text-align: center;
  padding: 24px 16px 16px 16px;
}
.card-info .label[data-v-6ddf7410] {
  font-size: 14px;
  opacity: 50%;
}
.card-info-cvv[data-v-6ddf7410] {
  padding-left: 16px;
}
.card-info-exp[data-v-6ddf7410],
.card-info-cvv[data-v-6ddf7410] {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}
.card-network[data-v-6ddf7410] {
  height: 21px;
  width: 34px;
  object-fit: contain;
}
.expiring[data-v-6ddf7410]::before {
  content: "";
  width: 34px;
  height: 34px;
  position: absolute;
  right: 16px;
  top: 16px;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA7uSURBVHgB7VxrjFXFHZ9z7t29sC9Y2F1QXivLq4BUFrWgK1m1UZPGRyJq0qZNjH2k0ib9pLES1NYYCR980G/W1jb9Iti0fHOJFkpKFrXQoF1YGhaBXTCw4LoPlH3ce/r7/e/MuXPOnnvZu9zdvTH+k8mce86ZMzO/+c//NTNXqW/oGyoq8jzPucpzNZUUV5NA7KQDsm5FXXuhe55V3gsWnzhy1cQSe0EspJ7nn3/eMfkjjzzimufNzc28dnlfA+fod/3ymnPk99W4rGiIDdWN9RuOjrGzMSQXIDCP69/M4wCDeYlJ/L1u3boS89yUZa6/5aoMKCYVHdkj55qGawD8zu/fv7/2q6++emJkZOR1pN2pVOoUyvR4FvEenv2T7/Ddzs7OJRo0A45JPoeZuouCc6yRcq0UM50gCMPDw79hJ71xUjKZPGLAsbhHgLG4cEq5JTAyygJCadZvaWmpGxwc/G2YA66VAOyfOjo6lup6BBgCwuRpLvGmgFPs+StA6OnBRpZOBBBhYh2sy+aYCBkzro6Nt4zkAMI5efKke+jQIefYsWP1y5cv3wWtsCZb4c6zF1T3pR7VeQ55d48aHBpSg4PD8iyRKFFVlRWqqqpc1c2uVvOvr1UL5s3J2hB0+vTx48fvefjhh08dPXo0hbZ4q1at8gCMrarzMmzyAURsA82erMS17ruXL1/+UVlZ2XZczwwXZIcPf9yOdNzv/FipqrIcoNSpDbfcKNdhQr97+/r6fnLbbbftBihsl59I0sA8gMmXQ2wQTFkXAm/rtGnTng2/zM63fvSJAFEIWrXihqzADA0NvZhIJF5U6Y6nVAYYFZFnpbEaZuE56axcuVJkRzYw/gMQfv+X3QUDg9TW/qna+ff3JQ9TaWnpFsiVLVbbaPwFpvdYyMnjnbAgdS5duvTgrFmz3g4X2PevwwUFIooav71MNd++btT9/v7+nzY2Nv4ZAHmUKyo9zSV5aRciJ5dcDRDf1DamNKS6AwHqtre3U4AeVJbM4BTZ/e5+1QXBORlUW1OtHn3wbhHGhihTDh8+vP7mm28mG9nTJzUWQPLxZQSM3t5eUW3Lli1rUSEBunP3+3mDsWTxfLX5iU3qxz98QK7zoe6LPTIAgUY6zoy1a9e+PX/+fNe0WemB1cI1pwGXFRBt4MgHyB38MOSFc+LECebP4uOL7Pc5TdjAfKn59katbsvVvXd+R+VLHIB9Bw4F7rmuuwbqeAtBITcra5qzT16OEEM2QJwXXnhBEnU6f9POwJxkBTeEhWjb8U/HLTNsjZFIlKrx0OEj/xtV//Tp0zej/dUqKPfEdc41bbJyiBZEyrL+JK1evToARl//ZdX64Sdqqqn1o/8GbBxOnccee+wXKu1O+KBooy3rtIkCJEqrSDp48GA9pPcPgg35RECZahocHFKt//44cA+G4pNvvfUW5ZwvT9ra2oTzs30nChBhJ63D+RFVX1/vXHfddU5DQ8NG+0UCEWUTTBVx6oS5ZNOmTZtx6bIPnPa7du1yNOdHckkAEGN8mciWSssOFwaPCy/TnTlz5pP2++SOYqOwLAFH34HMOXXqlG828L52P0bFeMMcwpcEQSKp9FT57LPP1M6dO+vj8fiN9sudk2Rv5ENhQEpKSppefvnlWXPmzJFpQy4xIUs+DwvYACAmnqksOYKpIoVhDt9hv0swikF2hImypPPs+cC9xx9//Hvnz5/3QwOwZmnWK62Cc3KIoQB38D0IqIBL33Wu+LjDUPelLwK/ddulP0uWLFFalihLuPqg2ICYuWX/9g0azMXAdBmPETZZFB4sTJuFSvfjypUr0mfIEtfqq08+IMZ6o1pSo81bJxaLLbQL9vYV33QxdKE7OFiUfTNmzJA+dXV18RZlichL/YovR3xAKD6oXbQwFVWrn7tVVVUuAFlgV9I/MKCKlQaHgkEomPJV8MEceOZh20r6bZvyAkhIsAhyUFOqtrZWCiIiNUpfX8kz8jVWWokg0LUSBatNtEeYff755w76ZKaM9dhXJkHVY/wW82Z3d7eaaAqHFO+7a31BQIkg6TT7BO5XdFR5M9znXO6/PIMxJlMHC0h99sNpVgziWmhvyFMlXSsoUU5iRUWFdLqmpkaMNDiq9uPRMiQLOV98ISqM0aZe+wG0jioEHYXp/+4/Do66fy2gVFWWBX5joatzYGBABvbixYuKboh+JKGNKBlil6eulgK2EIL53ma/VFdTrQpFhQZlRlVF4DdWDjvBIR40jXQUtpXk2ow3JrzkRoaYsnLBIBBzCCEfKQDSaVfCpYFCUiFBqZ0dHCzIi7aBoFaU/lH10oll/w0GYS2TNVyPgHJg0tXMLhyHGMoGyp2IquVDXOCyqaenpw0coqB6/X7BFZEcZkakL2O7/DYoDmwQhx975ZVXWuyC5JBCCVabokAJ2xW5KL2wFVzt27NnT6vWpDLwCC16tlD1MntPMuomvfLnGEfOAapxzDXZygBA4mC5EqzO/RV+wXpThlGqiQoBNCDgTM5IQHi37G1VJ06eHVO5VSsWq3vvysRmsYDVVl1dfc+XX35JVEeYIFSTuDeilylSetlTUPG3VNnLfRo9n1MAhqyCgeVabUAa1yybMEA6TnZJypc23LI68Bsq9k2A4VVWVnrwcn2hqp1WIe3kZYQqydI0cgHjxV4KlPvPPPPMm7Y9Qn3fuGa5KhYid4SXOVtaWlqZGzCU7pOWIcYg9Ywc9ddqLU0TAMFOCBL1Atk/2BVyRCZCluRLBCLMHbCh3nn66afJZj4YMN0lDxlmvrVuC9XA4jBYzcNc82CL+M+gvlJRXLL+lqy7HyaNohbB33jjjVfZZmUtfsN0T9F0V3qJU2VMkACH+DdICLGZuWZsEVkKhPzwoKb6zp0790e7YsqSqZw6jWtWyM4Am+Dmv/bUU0+d0T+lD+COFAaZciVl+kjS3BGUIcqaT/v27fMwxzwg6a+LQigpCicEWJILFix4FfkxuwHNTY05N7dMFHF9t7lpbeAeAuJdS5cufRWXXnl5eRJ5ClolRccOg8w+KfTRLpLduTNRJKx8GQQFFMQUkspaON6xY8fPwg7fA/c1SQMni+ZjALjYbRPbtH379u9jwKStZvRhRpiFbxItVM+KmGW4JaIee0cfr+NW7icsZ8ZbW1sfvemmm7aFPzAp2yEwTcKcQTpw4MDPm5qa3lXa5jAJXm4S9tQwZSN8mBTM9pRenUzZ5SMXqsyaBQoGthMw4aPMk5w6WGV/58yZM6+HP8Dpc+/d6yN3+lwrcWGc348C4/Tp0zsAxh6VlndGmEr7EfFLMejF68WLF/v7RsLfiOIQ4Q6uXTBcz+0PcPb83cQqvdMwhikVh3SW3X/t7e2/WrRo0S/DH5J1X1izbe0nVSGIXEHVmohQ8wQDMu81leGKpApySUrfs7VOSkV0PuqeHy+AcI1x1V9pQOBCxwGSTBuCArUmG2j37t1738aNG19i/DL8QQMM10vyXcth5wkEtVgUEJQZR44ceWnDhg3vwCNPqdFTZQQxEB8MDHQKAjVgroc7P4qM1WZ8G8RHXIbvocpikNYx+jkqs2U7RnmC59wnuhB2CrczzVNZiAtcXCbg1kxG7vv6BwLbMum71NVyS2aduPG5wgyos33btm2bUe8Z3eEkpsoItOEItGIS0fYRpGQikUii7QYUf4uVGuPORAOUbJnWW7QZHpuGxFBUBcKKXFGfjUQ9y85ziYKGQAPS8o6Ojt95E0iIgPWyDtaFzjbouhfqtrBNNUgzwR2VbDOmEtteqvtilEZ+ZO0LiXG3MKaOAaUc1msVQcEoBEABp9ygG7hs69atd2P58G9eAckA8dBDD92KemgJNrBOJAPGXLSJYFD3c+qW6zaz7cLNXo69ITnJFLSOd3ACJ3QFFbrCmXo05kCezNMNq1dpTuF+9BVbtmz57gcffPBrsPExb5wEmfWhAQLfXK6/zTrqdZ3XwwCbQzAg46o5YAQDcY/pGowSFTxFkZWcHIDYHp9tl7gwf2Ow+LjwE4Npb2wU/+gGGhnTS4b+AjNzgDPv/vvvv3Xu3LnfAoOR3echXW/qpIBE/BPRhoF2COuzcBHa4Zq//9577/XzsRaCSQhPkQVKyw1aozQcmQBeCiv9I+BOW+2mLLmhVA7ZMZZtmbKNm1Ydlzm5r12rYkcDEMeocJmCpxFi6IyvogGMGwYGAtdB0MYGWYhRfH3f09eeiezjOmBTqIz6FEAoQGFnEJAUBiip74tapc9CraIyzqsdFYzs8NXI0dyiVIbd7AM8rvXbXNu/w5wiCZzBSL4yOQnXAoj+HXAdmANgqsokPVhyBSJ4KRW0LySHVkxhwAwY3li5w+5gVuIcNsCotA8gjURlxvgxBpB/jREL2AJMkDHD9m90eoTqMPyeChpUgTLggGGAYa6lPoYC4cXa9QsYKu3d2ruYx6RmrwqIFVqUj/L4BSvV3mLAtOfcZaPAvqMA0R0ZBjAExwcF3x/ByPu/mSwQ/XdZlvaFAYl1AIwkbCLaG76NodsjR0UYUTecMdZTnWNWPxFCVqL0cKkdgCNTAlKd7M/pQhdccjQ4cD4OrO6A1aO2XPjEuAs6r/Cup6cFY6IiVCknEAkLm99yTd/LctrCkb8JI/u0pZEZYrxZtgrVHW2ACm0ccfWdtsEslTboqKpr4Cgynucn/K6z7tXod2fpslTxVKf8HtV+ma6LgqfUHHg05++8STxRJeSlly3s79CqVRcuXHDh+zjcXwIu4QaVwE4ksLk0Vq8Z+x+AppLcXkxSVmgTwCr6JAxrQvaIN2utDnjmNNVzzz3n6T0fk3b4Od3S4BldOQQYOpYqHAOJb4w5cg1HVTgHqRJCT3LNRZK0UVXBZ5BJ5fr9Ml0+wW/qc3ZibOk6zQFEVQwkoGSZRnF2QE8lHxztW0zXlmQZRp0d9pN5rtJATtPl5BsajMizu6rIKLxdKQyOGdVSK7GjCYuLxO8wABpOCB1k9u0ai0un/E8UspHZlWOf1Q8ccFYZNrePtJdYyQ5Vxqxp6IYOLDvjdtSu1oFCk26oEWq2pevkaEe2IY4yt4uTHcZCIVYOj6x/TN2czlaj/+wgUFZ9XcmaUoacLPcnlf4PL1egD0xBOKkAAAAASUVORK5CYII=");
  background-size: contain;
}.navbar-nav[data-v-469c125e] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.dialog[data-v-469c125e] {
  padding: 0;
  color: var(--bs-body-color);
  background-color: var(--bs-body-bg);
  min-width: 280px;
  max-width: 90vw;
  text-align: center;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.08);
}
.dialog[data-v-469c125e]::backdrop {
  background: rgba(240, 240, 245, 0.5);
  backdrop-filter: blur(2px);
}
.dialog-close-btn[data-v-469c125e] {
  background: none !important;
  position: absolute;
  right: 8px;
  top: 8px;
}
.dialog-title[data-v-469c125e] {
  margin-bottom: 0;
}
[data-bs-theme=dark] .dialog[data-v-469c125e] {
  border-color: rgba(50, 50, 66, 0.8);
}
[data-bs-theme=dark] .dialog[data-v-469c125e]::backdrop {
  background: rgba(27, 28, 38, 0.6);
}
.dialog-footer[data-v-469c125e] {
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  gap: 0.5rem;
}.navbar-nav[data-v-ac35cafb] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.dropdown-menu[data-v-ac35cafb] {
  border: 1px solid rgba(0, 0, 0, 0.08);
}
.small-button[data-v-ac35cafb] {
  padding: 0 !important;
}
[data-bs-theme=dark] .dropdown-menu[data-v-ac35cafb] {
  border-color: rgb(50, 50, 66);
}.navbar-nav[data-v-6a6d56c5] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
[data-bs-theme=dark] .form-range[data-v-6a6d56c5]::-moz-range-track, [data-bs-theme=dark] .form-range[data-v-6a6d56c5]::-webkit-slider-runnable-track {
  background-color: var(--bs-tertiary-bg);
}.navbar-nav[data-v-d8d9d1f1] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.spend-limit-modal[data-v-d8d9d1f1] {
  width: 292px;
  /* Hide arrows from number input */
}
.spend-limit-modal input[data-v-d8d9d1f1]::-webkit-outer-spin-button,
.spend-limit-modal input[data-v-d8d9d1f1]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.spend-limit-modal input[type=number][data-v-d8d9d1f1] {
  -moz-appearance: textfield;
}
.slider[data-v-d8d9d1f1] {
  margin-top: 1px;
}
.form-group[data-v-d8d9d1f1] {
  background-color: var(--bs-secondary-bg);
}
.limit-amount[data-v-d8d9d1f1],
.duration-select[data-v-d8d9d1f1] .btn-secondary {
  border: none !important;
}
.duration-label[data-v-d8d9d1f1] {
  display: block;
  text-align: right;
  padding: 10px 12px;
  font-size: 14px;
  font-weight: 500;
}
.duration-select[data-v-d8d9d1f1] {
  display: block;
  text-align: right;
}
.limit-amount[data-v-d8d9d1f1] {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}.navbar-nav[data-v-b5d51b1b] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.spend-limit[data-v-b5d51b1b] {
  border: 1px solid rgba(0, 0, 0, 0.08);
}
.spend-limit-control[data-v-b5d51b1b] {
  text-align: left;
  border: 0;
  background: none;
  color: inherit;
}
[data-bs-theme=dark] .spend-limit[data-v-b5d51b1b] {
  border-color: rgb(50, 50, 66);
}.navbar-nav[data-v-a5a2cc71] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.nickname[data-v-a5a2cc71] {
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-radius: var(--bs-border-radius);
  display: block;
  line-height: unset;
}
.nickname[data-v-a5a2cc71]:hover {
  outline: 2px solid rgba(73, 73, 242, 0.25);
}
.nickname[data-v-a5a2cc71]:focus-within {
  box-shadow: 0 0 0 0.25rem rgba(73, 73, 242, 0.25);
  outline: none;
  transition: outline 0.15s ease-out;
}
.nickname:focus-within .memo[data-v-a5a2cc71] {
  position: absolute;
  left: -9999px;
}
.nickname:focus-within .nickname-input[data-v-a5a2cc71] {
  position: initial;
  left: initial;
}
.memo[data-v-a5a2cc71] {
  padding: 10px 12px;
  border: var(--bs-border-width) solid transparent;
  line-height: normal;
}
.nickname-input[data-v-a5a2cc71] {
  position: absolute;
  left: -9999px;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  line-height: normal;
}
.nickname-input[data-v-a5a2cc71]:focus {
  box-shadow: none !important;
}.navbar-nav[data-v-7b49cb28] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.funding[data-v-7b49cb28] {
  border: 1px solid rgba(0, 0, 0, 0.08);
}
.funding-control[data-v-7b49cb28] {
  text-align: left;
  border: 0;
  background: none;
  color: inherit;
}
[data-bs-theme=dark] .funding[data-v-7b49cb28] {
  border-color: rgb(50, 50, 66);
}
.funding-selected[data-v-7b49cb28] {
  background-color: rgba(73, 73, 242, 0.05);
}
[data-bs-theme=dark] .funding-selected[data-v-7b49cb28] {
  background-color: rgba(73, 73, 242, 0.2);
}
.icon-wrap[data-v-7b49cb28] {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 4px;
}
.icon-wrap.fallback[data-v-7b49cb28], .icon-wrap.icon-card[data-v-7b49cb28] {
  background-color: rgb(240, 240, 245);
  border-radius: 4px;
}
.icon[data-v-7b49cb28] {
  width: 20px;
  height: auto;
}
.icon.fallback[data-v-7b49cb28], .icon.icon-card[data-v-7b49cb28] {
  width: 14px;
  height: auto;
  margin-left: 3px;
}
.icon.icon-bank[data-v-7b49cb28] {
  border-radius: 4px;
}
.spacer[data-v-7b49cb28] {
  top: -0.2rem;
}.navbar-nav[data-v-4b2916bb] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.funding-modal[data-v-4b2916bb] {
  width: 292px;
}.navbar-nav[data-v-20afdb2a] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.base-pill[data-v-20afdb2a] {
  border-radius: 40px;
}.navbar-nav[data-v-89d95e56] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.note[data-v-89d95e56] {
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-radius: var(--bs-border-radius);
  display: block;
  line-height: 18.2px;
}
.note[data-v-89d95e56]:hover {
  outline: 2px solid rgba(73, 73, 242, 0.25);
}
.note[data-v-89d95e56]:focus-within {
  box-shadow: 0 0 0 0.25rem rgba(73, 73, 242, 0.25);
  outline: none;
  transition: outline 0.15s ease-out;
}
.note:focus-within .note-text[data-v-89d95e56] {
  position: absolute;
  left: -9999px;
}
.note:focus-within .note-input[data-v-89d95e56] {
  position: initial;
  left: initial;
}
.note-counter[data-v-89d95e56] {
  font-size: 12px;
  color: rgb(130, 130, 153);
}
.note-disabled[data-v-89d95e56] {
  cursor: not-allowed;
  background-color: rgb(240, 240, 245);
  color: rgb(130, 130, 153);
}
.note-input[data-v-89d95e56] {
  position: absolute;
  left: -9999px;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  line-height: normal;
}
.note-input[data-v-89d95e56]:focus {
  box-shadow: none !important;
}
.note-placeholder[data-v-89d95e56] {
  color: rgb(130, 130, 153);
}
.note-section[data-v-89d95e56] {
  border: 1px solid rgb(240, 240, 245);
}
.note-warning[data-v-89d95e56] {
  align-items: center;
  align-self: stretch;
  color: rgb(33, 33, 164);
  background-color: rgba(73, 73, 242, 0.1);
  border-radius: 8px;
}
.note-text[data-v-89d95e56] {
  padding: 10px 12px;
  border: var(--bs-border-width) solid transparent;
  border-radius: 8px;
  line-height: normal;
  word-wrap: break-word;
}
.note-upgrade[data-v-89d95e56] {
  background-color: rgb(240, 240, 245);
  color: rgb(130, 130, 153);
}
.note-upgrade .note-upgrade-text[data-v-89d95e56] {
  margin-left: 0.5rem;
}
[data-bs-theme=dark] .note-section[data-v-89d95e56] {
  border: 1px solid rgb(50, 50, 66);
}
[data-bs-theme=dark] .note-warning[data-v-89d95e56] {
  background-color: rgba(73, 73, 242, 0.1);
  color: rgb(181, 181, 249);
}
[data-bs-theme=dark] .note-disabled[data-v-89d95e56] {
  background-color: rgb(50, 50, 66);
  color: rgb(184, 184, 204);
}
[data-bs-theme=dark] .note-upgrade[data-v-89d95e56] {
  background-color: rgb(50, 50, 66);
  color: rgb(184, 184, 204);
}.navbar-nav[data-v-295229a8] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.privacy-card[data-v-295229a8] {
  margin: 0 auto;
}
.card-menu[data-v-295229a8] .dropdown-toggle::after {
  display: none;
}
.shared-label[data-v-295229a8] {
  font-size: 11px;
  letter-spacing: 1.1px;
  text-transform: uppercase;
  color: #3090f1;
  background-color: rgba(48, 144, 241, 0.1);
}
.category[data-v-295229a8] {
  border: 1px solid rgba(0, 0, 0, 0.08);
  color: rgb(184, 184, 204);
  display: flex;
  align-items: center;
  gap: 16px;
}
.category .category-pill[data-v-295229a8] {
  border-radius: 4px;
  background-color: rgb(240, 240, 245);
  color: rgb(50, 50, 66);
  font-size: 11px;
  max-width: calc(100% - 32px);
}
.category .category-text[data-v-295229a8] {
  letter-spacing: 1.1px;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
}
[data-v-295229a8] .transaction-list {
  margin-top: 24px;
}
[data-bs-theme=dark] .category[data-v-295229a8] {
  border-color: rgb(50, 50, 66);
}
[data-bs-theme=dark] .category .category-pill[data-v-295229a8] {
  background-color: rgb(50, 50, 66);
  color: rgb(240, 240, 245);
}.navbar-nav[data-v-94a5503f] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.pan[data-v-94a5503f],
.exp[data-v-94a5503f],
.cvv[data-v-94a5503f] {
  color: rgb(50, 50, 66);
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 0.75rem;
  letter-spacing: 0.06em;
}
.pan[data-v-94a5503f]:not(.clickable),
.exp[data-v-94a5503f]:not(.clickable),
.cvv[data-v-94a5503f]:not(.clickable) {
  pointer-events: none;
}
.pan .label[data-v-94a5503f],
.exp .label[data-v-94a5503f],
.cvv .label[data-v-94a5503f] {
  color: rgba(27, 28, 38, 0.5);
  font-size: 0.75rem;
}
[data-bs-theme=dark] .card[data-v-94a5503f] {
  border-color: rgb(50, 50, 66);
}
[data-bs-theme=dark] .pan[data-v-94a5503f],
[data-bs-theme=dark] .exp[data-v-94a5503f],
[data-bs-theme=dark] .cvv[data-v-94a5503f] {
  color: rgb(240, 240, 245);
}
[data-bs-theme=dark] .pan .label[data-v-94a5503f],
[data-bs-theme=dark] .exp .label[data-v-94a5503f],
[data-bs-theme=dark] .cvv .label[data-v-94a5503f] {
  color: rgba(240, 240, 245, 0.5);
}
[data-v-94a5503f] .expand {
  color: rgb(73, 73, 242);
}
[data-v-94a5503f] .expand:hover {
  background-color: rgba(73, 73, 242, 0.1);
}
.link-more svg[data-v-94a5503f] {
  vertical-align: text-bottom;
}.navbar-nav[data-v-ce222014] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.policy-link[data-v-ce222014] {
  color: rgb(130, 130, 153);
}
.policy-link a[data-v-ce222014] {
  color: inherit;
}
.content[data-v-ce222014] {
  max-width: 600px;
}
.content > h2[data-v-ce222014] {
  font-size: 24px;
  margin: 16px 0;
  text-align: center;
}
.content > p[data-v-ce222014] {
  font-size: 15px;
  line-height: 24px;
  margin-bottom: 30px;
  text-align: center;
}
.optin-option[data-v-ce222014] {
  border: 1px solid rgb(184, 184, 204);
  border-radius: 8px;
  margin-bottom: 10px;
}
.optin-header[data-v-ce222014] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
}
.optin-header span[data-v-ce222014] {
  flex: 0 0 85%;
}
.optin-title[data-v-ce222014] {
  font-weight: 500;
  color: var(--bs-body-color);
}
.optin-info[data-v-ce222014] {
  border-top: 1px solid rgb(240, 240, 245);
  padding: 16px;
  color: rgb(130, 130, 153);
  line-height: 22px;
}.navbar-nav[data-v-137b2f18] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.consent-wrapper[data-v-137b2f18] {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.consent-wrapper[data-v-137b2f18] .content {
  padding: 16px;
  overflow-y: auto;
}
@media (max-width: 575.98px) {
.consent-wrapper[data-v-137b2f18] .actions {
    flex-direction: column;
    align-items: center;
}
.consent-wrapper[data-v-137b2f18] .actions > button {
    width: 100% !important;
    margin: 5px 0px !important;
}
}.navbar-nav[data-v-b02496bb] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.category[data-v-b02496bb] {
  border-radius: 12px;
}
.primary[data-v-b02496bb] {
  background-color: var(--bs-body-bg);
}
.other[data-v-b02496bb] {
  background-color: rgb(240, 240, 245);
}
[data-bs-theme=dark] .other[data-v-b02496bb] {
  background-color: rgb(50, 50, 66);
}
.link[data-v-b02496bb] {
  padding: 16px;
  color: var(--bs-body-color);
}
.primary > .link[data-v-b02496bb] {
  padding-right: 24px;
}
.icon[data-v-b02496bb] {
  font-size: 18px;
  width: 24px;
  text-align: center;
}
.name[data-v-b02496bb] {
  font-size: 14px;
  font-weight: 500;
}.navbar-nav[data-v-6fd53ac3] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.container[data-v-6fd53ac3] {
  padding: 0 24px;
}
.categories-list[data-v-6fd53ac3] {
  list-style: none;
  padding: 0;
  margin-bottom: 8px;
}
.other-categories-list[data-v-6fd53ac3] {
  margin-top: 8px;
}
.other-container[data-v-6fd53ac3] {
  background-color: var(--bs-body-bg);
  border-radius: 12px;
  padding: 8px;
}
.other-header[data-v-6fd53ac3] {
  padding: 8px 16px 8px 8px;
  cursor: pointer;
  border: none;
  background-color: var(--bs-body-bg);
  width: 100%;
}
.other-header > h2[data-v-6fd53ac3] {
  margin-bottom: 0;
}.navbar-nav[data-v-fbbeaeae] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}.navbar-nav[data-v-998d4dff] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.data-settings[data-v-998d4dff] {
  border: 1px solid rgb(240, 240, 245);
  border-radius: 4px;
}
.theme[data-v-998d4dff] {
  width: 100%;
}
.theme[data-v-998d4dff] .dropdown-toggle {
  width: 100%;
}
.icon-sun[data-v-998d4dff] {
  height: 0.875rem;
  width: 0.875rem;
}.navbar-nav[data-v-38cb1a77] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.gray-background[data-v-38cb1a77] {
  background-color: rgb(240, 240, 245);
}
[data-bs-theme=dark] .gray-background[data-v-38cb1a77] {
  background-color: rgb(50, 50, 66);
}.navbar-nav[data-v-55990d64] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.details-header[data-v-55990d64] {
  justify-content: start !important;
}
.details-header[data-v-55990d64]:not(.has-close)::after {
  content: "";
  display: block;
  width: 24px;
}.navbar-nav[data-v-cf0851f7] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
p[data-v-cf0851f7]:last-child {
  margin-bottom: 0;
}.navbar-nav[data-v-0f1e8051] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.active .user-icon[data-v-0f1e8051] {
  outline: 2px solid var(--bs-primary);
  outline-offset: 2px;
}
.interstitial-logo[data-v-0f1e8051] {
  margin-left: 32px !important;
}.navbar-nav[data-v-a601a917] {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.navbar[data-v-a601a917] {
  font-family: "FK Grotesk";
}
.new-card[data-v-a601a917] .dropdown-toggle::after {
  display: none;
}
.new-card-option[data-v-a601a917] {
  color: var(--bs-body-color);
  font-family: "Graphik";
}
.card-type-icon[data-v-a601a917] {
  margin-right: 8px;
  width: 16px;
  color: rgb(184, 184, 204);
}
.navbar-nav {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
@font-face {
  font-family: "Graphik";
  src: url("/assets/graphik-regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Graphik";
  src: url("/assets/graphik-medium.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "FK Grotesk";
  src: url("/assets/fk-grotesk-bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
.navbar-nav {
  --bs-navbar-hover-color: rgb(73, 73, 242);
  --bs-navbar-active-color: rgb(73, 73, 242);
}
.clickable {
  cursor: pointer;
}
.min-w-0 {
  min-width: 0;
}
:root,
[data-bs-theme=light] {
  --bs-blue: rgb(73, 73, 242);
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: rgb(219, 44, 73);
  --bs-orange: #fd7e14;
  --bs-yellow: rgb(255, 193, 7);
  --bs-green: rgb(40, 156, 92);
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-black: #000;
  --bs-white: #fff;
  --bs-gray: rgb(130, 130, 153);
  --bs-gray-dark: rgb(50, 50, 66);
  --bs-gray-100: rgb(240, 240, 245);
  --bs-gray-200: rgb(240, 240, 245);
  --bs-gray-300: rgb(184, 184, 204);
  --bs-gray-400: rgb(130, 130, 153);
  --bs-gray-500: rgb(130, 130, 153);
  --bs-gray-600: rgb(130, 130, 153);
  --bs-gray-700: rgb(50, 50, 66);
  --bs-gray-800: rgb(50, 50, 66);
  --bs-gray-900: rgb(27, 28, 38);
  --bs-primary: rgb(73, 73, 242);
  --bs-secondary: rgb(240, 240, 245);
  --bs-success: rgb(40, 156, 92);
  --bs-info: #0dcaf0;
  --bs-warning: rgb(255, 193, 7);
  --bs-danger: rgb(219, 44, 73);
  --bs-light: rgb(240, 240, 245);
  --bs-dark: rgb(27, 28, 38);
  --bs-primary-rgb: 73, 73, 242;
  --bs-secondary-rgb: 240, 240, 245;
  --bs-success-rgb: 40, 156, 92;
  --bs-info-rgb: 13, 202, 240;
  --bs-warning-rgb: 255, 193, 7;
  --bs-danger-rgb: 219, 44, 73;
  --bs-light-rgb: 240, 240, 245;
  --bs-dark-rgb: 27, 28, 38;
  --bs-primary-text-emphasis: #1d1d61;
  --bs-secondary-text-emphasis: #606062;
  --bs-success-text-emphasis: #103e25;
  --bs-info-text-emphasis: #055160;
  --bs-warning-text-emphasis: #664d03;
  --bs-danger-text-emphasis: #58121d;
  --bs-light-text-emphasis: rgb(50, 50, 66);
  --bs-dark-text-emphasis: rgb(50, 50, 66);
  --bs-primary-bg-subtle: #dbdbfc;
  --bs-secondary-bg-subtle: #fcfcfd;
  --bs-success-bg-subtle: #d4ebde;
  --bs-info-bg-subtle: #cff4fc;
  --bs-warning-bg-subtle: #fff3cd;
  --bs-danger-bg-subtle: #f8d5db;
  --bs-light-bg-subtle: #f8f8fa;
  --bs-dark-bg-subtle: rgb(130, 130, 153);
  --bs-primary-border-subtle: #b6b6fa;
  --bs-secondary-border-subtle: #f9f9fb;
  --bs-success-border-subtle: #a9d7be;
  --bs-info-border-subtle: #9eeaf9;
  --bs-warning-border-subtle: #ffe69c;
  --bs-danger-border-subtle: #f1abb6;
  --bs-light-border-subtle: rgb(240, 240, 245);
  --bs-dark-border-subtle: rgb(130, 130, 153);
  --bs-white-rgb: 255, 255, 255;
  --bs-black-rgb: 0, 0, 0;
  --bs-font-sans-serif: "Graphik";
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
  --bs-body-font-family: var(--bs-font-sans-serif);
  --bs-body-font-size: 0.875rem;
  --bs-body-font-weight: 400;
  --bs-body-line-height: 1.3;
  --bs-body-color: rgb(50, 50, 66);
  --bs-body-color-rgb: 50, 50, 66;
  --bs-body-bg: #fff;
  --bs-body-bg-rgb: 255, 255, 255;
  --bs-emphasis-color: #000;
  --bs-emphasis-color-rgb: 0, 0, 0;
  --bs-secondary-color: rgba(50, 50, 66, 0.75);
  --bs-secondary-color-rgb: 50, 50, 66;
  --bs-secondary-bg: rgb(240, 240, 245);
  --bs-secondary-bg-rgb: 240, 240, 245;
  --bs-tertiary-color: rgba(50, 50, 66, 0.5);
  --bs-tertiary-color-rgb: 50, 50, 66;
  --bs-tertiary-bg: rgb(240, 240, 245);
  --bs-tertiary-bg-rgb: 240, 240, 245;
  --bs-heading-color: rgb(27, 28, 38);
  --bs-link-color: rgb(73, 73, 242);
  --bs-link-color-rgb: 73, 73, 242;
  --bs-link-decoration: none;
  --bs-link-hover-color: #3a3ac2;
  --bs-link-hover-color-rgb: 58, 58, 194;
  --bs-code-color: #d63384;
  --bs-highlight-bg: #fff3cd;
  --bs-border-width: 1px;
  --bs-border-style: solid;
  --bs-border-color: rgb(240, 240, 245);
  --bs-border-color-translucent: rgba(0, 0, 0, 0.175);
  --bs-border-radius: 8px;
  --bs-border-radius-sm: 4px;
  --bs-border-radius-lg: 12px;
  --bs-border-radius-xl: 1rem;
  --bs-border-radius-xxl: 2rem;
  --bs-border-radius-2xl: var(--bs-border-radius-xxl);
  --bs-border-radius-pill: 40px;
  --bs-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  --bs-box-shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
  --bs-box-shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.08);
  --bs-box-shadow-inset: inset 0 1px 2px rgba(0, 0, 0, 0.075);
  --bs-focus-ring-width: 0.25rem;
  --bs-focus-ring-opacity: 0.25;
  --bs-focus-ring-color: rgba(73, 73, 242, 0.25);
  --bs-form-valid-color: rgb(40, 156, 92);
  --bs-form-valid-border-color: rgb(40, 156, 92);
  --bs-form-invalid-color: rgb(219, 44, 73);
  --bs-form-invalid-border-color: rgb(219, 44, 73);
}
[data-bs-theme=dark] {
  color-scheme: dark;
  --bs-body-color: rgb(255, 255, 255);
  --bs-body-color-rgb: 255, 255, 255;
  --bs-body-bg: rgb(27, 28, 38);
  --bs-body-bg-rgb: 27, 28, 38;
  --bs-emphasis-color: #fff;
  --bs-emphasis-color-rgb: 255, 255, 255;
  --bs-secondary-color: rgba(255, 255, 255, 0.75);
  --bs-secondary-color-rgb: 255, 255, 255;
  --bs-secondary-bg: rgb(50, 50, 66);
  --bs-secondary-bg-rgb: 50, 50, 66;
  --bs-tertiary-color: rgba(255, 255, 255, 0.5);
  --bs-tertiary-color-rgb: 255, 255, 255;
  --bs-tertiary-bg: #272734;
  --bs-tertiary-bg-rgb: 39, 39, 52;
  --bs-primary-text-emphasis: #9292f7;
  --bs-secondary-text-emphasis: #f6f6f9;
  --bs-success-text-emphasis: #7ec49d;
  --bs-info-text-emphasis: #6edff6;
  --bs-warning-text-emphasis: #ffda6a;
  --bs-danger-text-emphasis: #e98092;
  --bs-light-text-emphasis: rgb(240, 240, 245);
  --bs-dark-text-emphasis: rgb(184, 184, 204);
  --bs-primary-bg-subtle: #0f0f30;
  --bs-secondary-bg-subtle: #303031;
  --bs-success-bg-subtle: #0c2f1c;
  --bs-info-bg-subtle: #032830;
  --bs-warning-bg-subtle: #4d3a02;
  --bs-danger-bg-subtle: #360b12;
  --bs-light-bg-subtle: rgb(50, 50, 66);
  --bs-dark-bg-subtle: #191921;
  --bs-primary-border-subtle: #2c2c91;
  --bs-secondary-border-subtle: #909093;
  --bs-success-border-subtle: rgba(40, 156, 92, 0.5);
  --bs-info-border-subtle: #087990;
  --bs-warning-border-subtle: rgba(77, 58, 2, 0.5);
  --bs-danger-border-subtle: rgba(219, 44, 73, 0.5);
  --bs-light-border-subtle: rgb(50, 50, 66);
  --bs-dark-border-subtle: rgb(50, 50, 66);
  --bs-heading-color: rgb(255, 255, 255);
  --bs-link-color: rgb(240, 240, 245);
  --bs-link-hover-color: rgb(240, 240, 245);
  --bs-link-color-rgb: 240, 240, 245;
  --bs-link-hover-color-rgb: 240, 240, 245;
  --bs-code-color: #e685b5;
  --bs-border-color: rgb(50, 50, 66);
  --bs-border-color-translucent: rgba(255, 255, 255, 0.15);
  --bs-form-valid-color: #7ec49d;
  --bs-form-valid-border-color: #7ec49d;
  --bs-form-invalid-color: #e98092;
  --bs-form-invalid-border-color: #e98092;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
@media (prefers-reduced-motion: no-preference) {
  :root {
    scroll-behavior: smooth;
  }
}
body {
  margin: 0;
  font-family: var(--bs-body-font-family);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-body-font-weight);
  line-height: var(--bs-body-line-height);
  color: var(--bs-body-color);
  text-align: var(--bs-body-text-align);
  background-color: var(--bs-body-bg);
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
hr {
  margin: 16px 0;
  color: inherit;
  border: 0;
  border-top: var(--bs-border-width) solid;
  opacity: 0.25;
}
h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {
  margin-top: 0;
  margin-bottom: 8px;
  font-family: "FK Grotesk";
  font-weight: 700;
  line-height: 1.2;
  color: var(--bs-heading-color);
}
h1, .h1 {
  font-size: 1rem;
}
h2, .h2 {
  font-size: 1rem;
}
h3, .h3 {
  font-size: 0.875rem;
}
h4, .h4 {
  font-size: calc(1.25625rem + 0.075vw);
}
@media (min-width: 1200px) {
  h4, .h4 {
    font-size: 1.3125rem;
  }
}
h5, .h5 {
  font-size: 1.09375rem;
}
h6, .h6 {
  font-size: 0.875rem;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}
abbr[title] {
  text-decoration: underline dotted;
  cursor: help;
  text-decoration-skip-ink: none;
}
address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}
ol,
ul {
  padding-left: 2rem;
}
ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}
ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}
dt {
  font-weight: 700;
}
dd {
  margin-bottom: 0.5rem;
  margin-left: 0;
}
blockquote {
  margin: 0 0 1rem;
}
b,
strong {
  font-weight: bolder;
}
small, .small {
  font-size: 0.875em;
}
mark, .mark {
  padding: 0.1875em;
  background-color: var(--bs-highlight-bg);
}
sub,
sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
a {
  color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1));
  text-decoration: none;
}
a:hover {
  --bs-link-color-rgb: var(--bs-link-hover-color-rgb);
}
a:not([href]):not([class]), a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}
pre,
code,
kbd,
samp {
  font-family: var(--bs-font-monospace);
  font-size: 1em;
}
pre {
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  font-size: 0.875em;
}
pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal;
}
code {
  font-size: 0.875em;
  color: var(--bs-code-color);
  word-wrap: break-word;
}
a > code {
  color: inherit;
}
kbd {
  padding: 0.1875rem 0.375rem;
  font-size: 0.875em;
  color: var(--bs-body-bg);
  background-color: var(--bs-body-color);
  border-radius: 4px;
}
kbd kbd {
  padding: 0;
  font-size: 1em;
}
figure {
  margin: 0 0 1rem;
}
img,
svg {
  vertical-align: middle;
}
table {
  caption-side: bottom;
  border-collapse: collapse;
}
caption {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: var(--bs-secondary-color);
  text-align: left;
}
th {
  text-align: inherit;
  text-align: -webkit-match-parent;
}
thead,
tbody,
tfoot,
tr,
td,
th {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}
label {
  display: inline-block;
}
button {
  border-radius: 0;
}
button:focus:not(:focus-visible) {
  outline: 0;
}
input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
button,
select {
  text-transform: none;
}
[role=button] {
  cursor: pointer;
}
select {
  word-wrap: normal;
}
select:disabled {
  opacity: 1;
}
[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator {
  display: none !important;
}
button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}
button:not(:disabled),
[type=button]:not(:disabled),
[type=reset]:not(:disabled),
[type=submit]:not(:disabled) {
  cursor: pointer;
}
::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
textarea {
  resize: vertical;
}
fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}
legend {
  float: left;
  width: 100%;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: calc(1.275rem + 0.3vw);
  line-height: inherit;
}
@media (min-width: 1200px) {
  legend {
    font-size: 1.5rem;
  }
}
legend + * {
  clear: left;
}
::-webkit-datetime-edit-fields-wrapper,
::-webkit-datetime-edit-text,
::-webkit-datetime-edit-minute,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-year-field {
  padding: 0;
}
::-webkit-inner-spin-button {
  height: auto;
}
[type=search] {
  outline-offset: -2px;
  -webkit-appearance: textfield;
}
/* rtl:raw:
[type="tel"],
[type="url"],
[type="email"],
[type="number"] {
  direction: ltr;
}
*/
::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-color-swatch-wrapper {
  padding: 0;
}
::file-selector-button {
  font: inherit;
  -webkit-appearance: button;
}
output {
  display: inline-block;
}
iframe {
  border: 0;
}
summary {
  display: list-item;
  cursor: pointer;
}
progress {
  vertical-align: baseline;
}
[hidden] {
  display: none !important;
}
.lead {
  font-size: 1.09375rem;
  font-weight: 300;
}
.display-1 {
  font-size: calc(1.625rem + 4.5vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-1 {
    font-size: 5rem;
  }
}
.display-2 {
  font-size: calc(1.575rem + 3.9vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-2 {
    font-size: 4.5rem;
  }
}
.display-3 {
  font-size: calc(1.525rem + 3.3vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-3 {
    font-size: 4rem;
  }
}
.display-4 {
  font-size: calc(1.475rem + 2.7vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-4 {
    font-size: 3.5rem;
  }
}
.display-5 {
  font-size: calc(1.425rem + 2.1vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-5 {
    font-size: 3rem;
  }
}
.display-6 {
  font-size: calc(1.375rem + 1.5vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-6 {
    font-size: 2.5rem;
  }
}
.list-unstyled {
  padding-left: 0;
  list-style: none;
}
.list-inline {
  padding-left: 0;
  list-style: none;
}
.list-inline-item {
  display: inline-block;
}
.list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}
.initialism {
  font-size: 0.875em;
  text-transform: uppercase;
}
.blockquote {
  margin-bottom: 16px;
  font-size: 1.09375rem;
}
.blockquote > :last-child {
  margin-bottom: 0;
}
.blockquote-footer {
  margin-top: -16px;
  margin-bottom: 16px;
  font-size: 0.875em;
  color: rgb(130, 130, 153);
}
.blockquote-footer::before {
  content: "— ";
}
.container,
.container-fluid,
.container-xxl,
.container-xl,
.container-lg,
.container-md,
.container-sm {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 576px) {
  .container-sm, .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container-md, .container-sm, .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container-lg, .container-md, .container-sm, .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1140px;
  }
}
@media (min-width: 1400px) {
  .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1320px;
  }
}
:root {
  --bs-breakpoint-xs: 0;
  --bs-breakpoint-sm: 576px;
  --bs-breakpoint-md: 768px;
  --bs-breakpoint-lg: 992px;
  --bs-breakpoint-xl: 1200px;
  --bs-breakpoint-xxl: 1400px;
}
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}
.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
}
.col {
  flex: 1 0 0%;
}
.row-cols-auto > * {
  flex: 0 0 auto;
  width: auto;
}
.row-cols-1 > * {
  flex: 0 0 auto;
  width: 100%;
}
.row-cols-2 > * {
  flex: 0 0 auto;
  width: 50%;
}
.row-cols-3 > * {
  flex: 0 0 auto;
  width: 33.3333333333%;
}
.row-cols-4 > * {
  flex: 0 0 auto;
  width: 25%;
}
.row-cols-5 > * {
  flex: 0 0 auto;
  width: 20%;
}
.row-cols-6 > * {
  flex: 0 0 auto;
  width: 16.6666666667%;
}
.col-auto {
  flex: 0 0 auto;
  width: auto;
}
.col-1 {
  flex: 0 0 auto;
  width: 8.33333333%;
}
.col-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}
.col-3 {
  flex: 0 0 auto;
  width: 25%;
}
.col-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}
.col-5 {
  flex: 0 0 auto;
  width: 41.66666667%;
}
.col-6 {
  flex: 0 0 auto;
  width: 50%;
}
.col-7 {
  flex: 0 0 auto;
  width: 58.33333333%;
}
.col-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
}
.col-9 {
  flex: 0 0 auto;
  width: 75%;
}
.col-10 {
  flex: 0 0 auto;
  width: 83.33333333%;
}
.col-11 {
  flex: 0 0 auto;
  width: 91.66666667%;
}
.col-12 {
  flex: 0 0 auto;
  width: 100%;
}
.offset-1 {
  margin-left: 8.33333333%;
}
.offset-2 {
  margin-left: 16.66666667%;
}
.offset-3 {
  margin-left: 25%;
}
.offset-4 {
  margin-left: 33.33333333%;
}
.offset-5 {
  margin-left: 41.66666667%;
}
.offset-6 {
  margin-left: 50%;
}
.offset-7 {
  margin-left: 58.33333333%;
}
.offset-8 {
  margin-left: 66.66666667%;
}
.offset-9 {
  margin-left: 75%;
}
.offset-10 {
  margin-left: 83.33333333%;
}
.offset-11 {
  margin-left: 91.66666667%;
}
.g-0,
.gx-0 {
  --bs-gutter-x: 0;
}
.g-0,
.gy-0 {
  --bs-gutter-y: 0;
}
.g-1,
.gx-1 {
  --bs-gutter-x: 4px;
}
.g-1,
.gy-1 {
  --bs-gutter-y: 4px;
}
.g-2,
.gx-2 {
  --bs-gutter-x: 8px;
}
.g-2,
.gy-2 {
  --bs-gutter-y: 8px;
}
.g-3,
.gx-3 {
  --bs-gutter-x: 16px;
}
.g-3,
.gy-3 {
  --bs-gutter-y: 16px;
}
.g-4,
.gx-4 {
  --bs-gutter-x: 24px;
}
.g-4,
.gy-4 {
  --bs-gutter-y: 24px;
}
.g-5,
.gx-5 {
  --bs-gutter-x: 48px;
}
.g-5,
.gy-5 {
  --bs-gutter-y: 48px;
}
@media (min-width: 576px) {
  .col-sm {
    flex: 1 0 0%;
  }
  .row-cols-sm-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-sm-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-sm-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-sm-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-sm-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-sm-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-sm-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-sm-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-sm-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-sm-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-sm-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-sm-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-sm-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-sm-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-sm-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-sm-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-sm-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-sm-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-sm-0 {
    margin-left: 0;
  }
  .offset-sm-1 {
    margin-left: 8.33333333%;
  }
  .offset-sm-2 {
    margin-left: 16.66666667%;
  }
  .offset-sm-3 {
    margin-left: 25%;
  }
  .offset-sm-4 {
    margin-left: 33.33333333%;
  }
  .offset-sm-5 {
    margin-left: 41.66666667%;
  }
  .offset-sm-6 {
    margin-left: 50%;
  }
  .offset-sm-7 {
    margin-left: 58.33333333%;
  }
  .offset-sm-8 {
    margin-left: 66.66666667%;
  }
  .offset-sm-9 {
    margin-left: 75%;
  }
  .offset-sm-10 {
    margin-left: 83.33333333%;
  }
  .offset-sm-11 {
    margin-left: 91.66666667%;
  }
  .g-sm-0,
  .gx-sm-0 {
    --bs-gutter-x: 0;
  }
  .g-sm-0,
  .gy-sm-0 {
    --bs-gutter-y: 0;
  }
  .g-sm-1,
  .gx-sm-1 {
    --bs-gutter-x: 4px;
  }
  .g-sm-1,
  .gy-sm-1 {
    --bs-gutter-y: 4px;
  }
  .g-sm-2,
  .gx-sm-2 {
    --bs-gutter-x: 8px;
  }
  .g-sm-2,
  .gy-sm-2 {
    --bs-gutter-y: 8px;
  }
  .g-sm-3,
  .gx-sm-3 {
    --bs-gutter-x: 16px;
  }
  .g-sm-3,
  .gy-sm-3 {
    --bs-gutter-y: 16px;
  }
  .g-sm-4,
  .gx-sm-4 {
    --bs-gutter-x: 24px;
  }
  .g-sm-4,
  .gy-sm-4 {
    --bs-gutter-y: 24px;
  }
  .g-sm-5,
  .gx-sm-5 {
    --bs-gutter-x: 48px;
  }
  .g-sm-5,
  .gy-sm-5 {
    --bs-gutter-y: 48px;
  }
}
@media (min-width: 768px) {
  .col-md {
    flex: 1 0 0%;
  }
  .row-cols-md-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-md-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-md-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-md-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-md-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-md-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-md-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-md-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-md-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-md-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-md-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-md-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-md-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-md-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-md-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-md-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-md-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-md-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-md-0 {
    margin-left: 0;
  }
  .offset-md-1 {
    margin-left: 8.33333333%;
  }
  .offset-md-2 {
    margin-left: 16.66666667%;
  }
  .offset-md-3 {
    margin-left: 25%;
  }
  .offset-md-4 {
    margin-left: 33.33333333%;
  }
  .offset-md-5 {
    margin-left: 41.66666667%;
  }
  .offset-md-6 {
    margin-left: 50%;
  }
  .offset-md-7 {
    margin-left: 58.33333333%;
  }
  .offset-md-8 {
    margin-left: 66.66666667%;
  }
  .offset-md-9 {
    margin-left: 75%;
  }
  .offset-md-10 {
    margin-left: 83.33333333%;
  }
  .offset-md-11 {
    margin-left: 91.66666667%;
  }
  .g-md-0,
  .gx-md-0 {
    --bs-gutter-x: 0;
  }
  .g-md-0,
  .gy-md-0 {
    --bs-gutter-y: 0;
  }
  .g-md-1,
  .gx-md-1 {
    --bs-gutter-x: 4px;
  }
  .g-md-1,
  .gy-md-1 {
    --bs-gutter-y: 4px;
  }
  .g-md-2,
  .gx-md-2 {
    --bs-gutter-x: 8px;
  }
  .g-md-2,
  .gy-md-2 {
    --bs-gutter-y: 8px;
  }
  .g-md-3,
  .gx-md-3 {
    --bs-gutter-x: 16px;
  }
  .g-md-3,
  .gy-md-3 {
    --bs-gutter-y: 16px;
  }
  .g-md-4,
  .gx-md-4 {
    --bs-gutter-x: 24px;
  }
  .g-md-4,
  .gy-md-4 {
    --bs-gutter-y: 24px;
  }
  .g-md-5,
  .gx-md-5 {
    --bs-gutter-x: 48px;
  }
  .g-md-5,
  .gy-md-5 {
    --bs-gutter-y: 48px;
  }
}
@media (min-width: 992px) {
  .col-lg {
    flex: 1 0 0%;
  }
  .row-cols-lg-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-lg-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-lg-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-lg-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-lg-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-lg-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-lg-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-lg-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-lg-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-lg-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-lg-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-lg-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-lg-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-lg-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-lg-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-lg-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-lg-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-lg-0 {
    margin-left: 0;
  }
  .offset-lg-1 {
    margin-left: 8.33333333%;
  }
  .offset-lg-2 {
    margin-left: 16.66666667%;
  }
  .offset-lg-3 {
    margin-left: 25%;
  }
  .offset-lg-4 {
    margin-left: 33.33333333%;
  }
  .offset-lg-5 {
    margin-left: 41.66666667%;
  }
  .offset-lg-6 {
    margin-left: 50%;
  }
  .offset-lg-7 {
    margin-left: 58.33333333%;
  }
  .offset-lg-8 {
    margin-left: 66.66666667%;
  }
  .offset-lg-9 {
    margin-left: 75%;
  }
  .offset-lg-10 {
    margin-left: 83.33333333%;
  }
  .offset-lg-11 {
    margin-left: 91.66666667%;
  }
  .g-lg-0,
  .gx-lg-0 {
    --bs-gutter-x: 0;
  }
  .g-lg-0,
  .gy-lg-0 {
    --bs-gutter-y: 0;
  }
  .g-lg-1,
  .gx-lg-1 {
    --bs-gutter-x: 4px;
  }
  .g-lg-1,
  .gy-lg-1 {
    --bs-gutter-y: 4px;
  }
  .g-lg-2,
  .gx-lg-2 {
    --bs-gutter-x: 8px;
  }
  .g-lg-2,
  .gy-lg-2 {
    --bs-gutter-y: 8px;
  }
  .g-lg-3,
  .gx-lg-3 {
    --bs-gutter-x: 16px;
  }
  .g-lg-3,
  .gy-lg-3 {
    --bs-gutter-y: 16px;
  }
  .g-lg-4,
  .gx-lg-4 {
    --bs-gutter-x: 24px;
  }
  .g-lg-4,
  .gy-lg-4 {
    --bs-gutter-y: 24px;
  }
  .g-lg-5,
  .gx-lg-5 {
    --bs-gutter-x: 48px;
  }
  .g-lg-5,
  .gy-lg-5 {
    --bs-gutter-y: 48px;
  }
}
@media (min-width: 1200px) {
  .col-xl {
    flex: 1 0 0%;
  }
  .row-cols-xl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-xl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-xl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-xl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-xl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-xl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-xl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-xl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-xl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xl-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-xl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-xl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-xl-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-xl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-xl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-xl-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-xl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-xl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-xl-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-xl-0 {
    margin-left: 0;
  }
  .offset-xl-1 {
    margin-left: 8.33333333%;
  }
  .offset-xl-2 {
    margin-left: 16.66666667%;
  }
  .offset-xl-3 {
    margin-left: 25%;
  }
  .offset-xl-4 {
    margin-left: 33.33333333%;
  }
  .offset-xl-5 {
    margin-left: 41.66666667%;
  }
  .offset-xl-6 {
    margin-left: 50%;
  }
  .offset-xl-7 {
    margin-left: 58.33333333%;
  }
  .offset-xl-8 {
    margin-left: 66.66666667%;
  }
  .offset-xl-9 {
    margin-left: 75%;
  }
  .offset-xl-10 {
    margin-left: 83.33333333%;
  }
  .offset-xl-11 {
    margin-left: 91.66666667%;
  }
  .g-xl-0,
  .gx-xl-0 {
    --bs-gutter-x: 0;
  }
  .g-xl-0,
  .gy-xl-0 {
    --bs-gutter-y: 0;
  }
  .g-xl-1,
  .gx-xl-1 {
    --bs-gutter-x: 4px;
  }
  .g-xl-1,
  .gy-xl-1 {
    --bs-gutter-y: 4px;
  }
  .g-xl-2,
  .gx-xl-2 {
    --bs-gutter-x: 8px;
  }
  .g-xl-2,
  .gy-xl-2 {
    --bs-gutter-y: 8px;
  }
  .g-xl-3,
  .gx-xl-3 {
    --bs-gutter-x: 16px;
  }
  .g-xl-3,
  .gy-xl-3 {
    --bs-gutter-y: 16px;
  }
  .g-xl-4,
  .gx-xl-4 {
    --bs-gutter-x: 24px;
  }
  .g-xl-4,
  .gy-xl-4 {
    --bs-gutter-y: 24px;
  }
  .g-xl-5,
  .gx-xl-5 {
    --bs-gutter-x: 48px;
  }
  .g-xl-5,
  .gy-xl-5 {
    --bs-gutter-y: 48px;
  }
}
@media (min-width: 1400px) {
  .col-xxl {
    flex: 1 0 0%;
  }
  .row-cols-xxl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-xxl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-xxl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-xxl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-xxl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-xxl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-xxl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-xxl-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-xxl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-xxl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xxl-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-xxl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-xxl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-xxl-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-xxl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-xxl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-xxl-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-xxl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-xxl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-xxl-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-xxl-0 {
    margin-left: 0;
  }
  .offset-xxl-1 {
    margin-left: 8.33333333%;
  }
  .offset-xxl-2 {
    margin-left: 16.66666667%;
  }
  .offset-xxl-3 {
    margin-left: 25%;
  }
  .offset-xxl-4 {
    margin-left: 33.33333333%;
  }
  .offset-xxl-5 {
    margin-left: 41.66666667%;
  }
  .offset-xxl-6 {
    margin-left: 50%;
  }
  .offset-xxl-7 {
    margin-left: 58.33333333%;
  }
  .offset-xxl-8 {
    margin-left: 66.66666667%;
  }
  .offset-xxl-9 {
    margin-left: 75%;
  }
  .offset-xxl-10 {
    margin-left: 83.33333333%;
  }
  .offset-xxl-11 {
    margin-left: 91.66666667%;
  }
  .g-xxl-0,
  .gx-xxl-0 {
    --bs-gutter-x: 0;
  }
  .g-xxl-0,
  .gy-xxl-0 {
    --bs-gutter-y: 0;
  }
  .g-xxl-1,
  .gx-xxl-1 {
    --bs-gutter-x: 4px;
  }
  .g-xxl-1,
  .gy-xxl-1 {
    --bs-gutter-y: 4px;
  }
  .g-xxl-2,
  .gx-xxl-2 {
    --bs-gutter-x: 8px;
  }
  .g-xxl-2,
  .gy-xxl-2 {
    --bs-gutter-y: 8px;
  }
  .g-xxl-3,
  .gx-xxl-3 {
    --bs-gutter-x: 16px;
  }
  .g-xxl-3,
  .gy-xxl-3 {
    --bs-gutter-y: 16px;
  }
  .g-xxl-4,
  .gx-xxl-4 {
    --bs-gutter-x: 24px;
  }
  .g-xxl-4,
  .gy-xxl-4 {
    --bs-gutter-y: 24px;
  }
  .g-xxl-5,
  .gx-xxl-5 {
    --bs-gutter-x: 48px;
  }
  .g-xxl-5,
  .gy-xxl-5 {
    --bs-gutter-y: 48px;
  }
}
.form-label {
  margin-bottom: 0.5rem;
}
.col-form-label {
  padding-top: calc(10px + var(--bs-border-width));
  padding-bottom: calc(10px + var(--bs-border-width));
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.3;
}
.col-form-label-lg {
  padding-top: calc(0.5rem + var(--bs-border-width));
  padding-bottom: calc(0.5rem + var(--bs-border-width));
  font-size: 1.09375rem;
}
.col-form-label-sm {
  padding-top: calc(0.25rem + var(--bs-border-width));
  padding-bottom: calc(0.25rem + var(--bs-border-width));
  font-size: 0.765625rem;
}
.form-text {
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: var(--bs-secondary-color);
}
.form-control {
  display: block;
  width: 100%;
  padding: 10px 12px;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.3;
  color: var(--bs-body-color);
  background-color: rgb(240, 240, 245);
  background-clip: padding-box;
  border: var(--bs-border-width) solid rgb(240, 240, 245);
  appearance: none;
  border-radius: var(--bs-border-radius);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}
.form-control[type=file] {
  overflow: hidden;
}
.form-control[type=file]:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.form-control:focus {
  color: var(--bs-body-color);
  background-color: rgb(240, 240, 245);
  border-color: #a4a4f9;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(73, 73, 242, 0.25);
}
.form-control::-webkit-date-and-time-value {
  min-width: 85px;
  height: 1.3em;
  margin: 0;
}
.form-control::-webkit-datetime-edit {
  display: block;
  padding: 0;
}
.form-control::placeholder {
  color: rgb(130, 130, 153);
  opacity: 1;
}
.form-control:disabled {
  background-color: var(--bs-secondary-bg);
  opacity: 1;
}
.form-control::file-selector-button {
  padding: 10px 12px;
  margin: -10px -12px;
  margin-inline-end: 12px;
  color: var(--bs-body-color);
  background-color: var(--bs-tertiary-bg);
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: var(--bs-border-width);
  border-radius: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control::file-selector-button {
    transition: none;
  }
}
.form-control:hover:not(:disabled):not([readonly])::file-selector-button {
  background-color: var(--bs-secondary-bg);
}
.form-control-plaintext {
  display: block;
  width: 100%;
  padding: 10px 0;
  margin-bottom: 0;
  line-height: 1.3;
  color: var(--bs-body-color);
  background-color: transparent;
  border: solid transparent;
  border-width: var(--bs-border-width) 0;
}
.form-control-plaintext:focus {
  outline: 0;
}
.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {
  padding-right: 0;
  padding-left: 0;
}
.form-control-sm {
  min-height: calc(1.3em + 0.5rem + calc(var(--bs-border-width) * 2));
  padding: 0.25rem 0.5rem;
  font-size: 0.765625rem;
  border-radius: var(--bs-border-radius-sm);
}
.form-control-sm::file-selector-button {
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  margin-inline-end: 0.5rem;
}
.form-control-lg {
  min-height: calc(1.3em + 1rem + calc(var(--bs-border-width) * 2));
  padding: 0.5rem 1rem;
  font-size: 1.09375rem;
  border-radius: var(--bs-border-radius-lg);
}
.form-control-lg::file-selector-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  margin-inline-end: 1rem;
}
textarea.form-control {
  min-height: calc(1.3em + 20px + calc(var(--bs-border-width) * 2));
}
textarea.form-control-sm {
  min-height: calc(1.3em + 0.5rem + calc(var(--bs-border-width) * 2));
}
textarea.form-control-lg {
  min-height: calc(1.3em + 1rem + calc(var(--bs-border-width) * 2));
}
.form-control-color {
  width: 3rem;
  height: calc(1.3em + 20px + calc(var(--bs-border-width) * 2));
  padding: 10px;
}
.form-control-color:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.form-control-color::-moz-color-swatch {
  border: 0 !important;
  border-radius: var(--bs-border-radius);
}
.form-control-color::-webkit-color-swatch {
  border: 0 !important;
  border-radius: var(--bs-border-radius);
}
.form-control-color.form-control-sm {
  height: calc(1.3em + 0.5rem + calc(var(--bs-border-width) * 2));
}
.form-control-color.form-control-lg {
  height: calc(1.3em + 1rem + calc(var(--bs-border-width) * 2));
}
.form-select {
  --bs-form-select-bg-img: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgb%2850, 50, 66%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  display: block;
  width: 100%;
  padding: 10px 36px 10px 12px;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.3;
  color: var(--bs-body-color);
  background-color: rgb(240, 240, 245);
  background-image: var(--bs-form-select-bg-img), var(--bs-form-select-bg-icon, none);
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 12px;
  border: var(--bs-border-width) solid rgb(240, 240, 245);
  border-radius: var(--bs-border-radius);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .form-select {
    transition: none;
  }
}
.form-select:focus {
  border-color: #a4a4f9;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(73, 73, 242, 0.25);
}
.form-select[multiple], .form-select[size]:not([size="1"]) {
  padding-right: 12px;
  background-image: none;
}
.form-select:disabled {
  background-color: var(--bs-secondary-bg);
}
.form-select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 var(--bs-body-color);
}
.form-select-sm {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  font-size: 0.765625rem;
  border-radius: var(--bs-border-radius-sm);
}
.form-select-lg {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  font-size: 1.09375rem;
  border-radius: var(--bs-border-radius-lg);
}
[data-bs-theme=dark] .form-select {
  --bs-form-select-bg-img: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgb%28255, 255, 255%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
}
.form-check {
  display: block;
  min-height: 1.1375rem;
  padding-left: 1.5em;
  margin-bottom: 0.125rem;
}
.form-check .form-check-input {
  float: left;
  margin-left: -1.5em;
}
.form-check-reverse {
  padding-right: 1.5em;
  padding-left: 0;
  text-align: right;
}
.form-check-reverse .form-check-input {
  float: right;
  margin-right: -1.5em;
  margin-left: 0;
}
.form-check-input {
  --bs-form-check-bg: rgb(240, 240, 245);
  width: 1em;
  height: 1em;
  margin-top: 0.15em;
  vertical-align: top;
  background-color: var(--bs-form-check-bg);
  background-image: var(--bs-form-check-bg-image);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: var(--bs-border-width) solid var(--bs-border-color);
  appearance: none;
  print-color-adjust: exact;
}
.form-check-input[type=checkbox] {
  border-radius: 0.25em;
}
.form-check-input[type=radio] {
  border-radius: 50%;
}
.form-check-input:active {
  filter: brightness(90%);
}
.form-check-input:focus {
  border-color: #a4a4f9;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(73, 73, 242, 0.25);
}
.form-check-input:checked {
  background-color: rgb(73, 73, 242);
  border-color: rgb(73, 73, 242);
}
.form-check-input:checked[type=checkbox] {
  --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
}
.form-check-input:checked[type=radio] {
  --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
}
.form-check-input[type=checkbox]:indeterminate {
  background-color: rgb(73, 73, 242);
  border-color: rgb(73, 73, 242);
  --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
}
.form-check-input:disabled {
  pointer-events: none;
  filter: none;
  opacity: 0.5;
}
.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {
  cursor: default;
  opacity: 0.5;
}
.form-switch {
  padding-left: 2.5em;
}
.form-switch .form-check-input {
  --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
  width: 2em;
  margin-left: -2.5em;
  background-image: var(--bs-form-switch-bg);
  background-position: left center;
  border-radius: 2em;
  transition: background-position 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-switch .form-check-input {
    transition: none;
  }
}
.form-switch .form-check-input:focus {
  --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23a4a4f9'/%3e%3c/svg%3e");
}
.form-switch .form-check-input:checked {
  background-position: right center;
  --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}
.form-switch.form-check-reverse {
  padding-right: 2.5em;
  padding-left: 0;
}
.form-switch.form-check-reverse .form-check-input {
  margin-right: -2.5em;
  margin-left: 0;
}
.form-check-inline {
  display: inline-block;
  margin-right: 1rem;
}
.btn-check {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
.btn-check[disabled] + .btn, .btn-check:disabled + .btn {
  pointer-events: none;
  filter: none;
  opacity: 0.65;
}
[data-bs-theme=dark] .form-switch .form-check-input:not(:checked):not(:focus) {
  --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%28255, 255, 255, 0.25%29'/%3e%3c/svg%3e");
}
.form-range {
  width: 100%;
  height: 2rem;
  padding: 0;
  background-color: transparent;
  appearance: none;
}
.form-range:focus {
  outline: 0;
}
.form-range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(73, 73, 242, 0.25);
}
.form-range:focus::-moz-range-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(73, 73, 242, 0.25);
}
.form-range::-moz-focus-outer {
  border: 0;
}
.form-range::-webkit-slider-thumb {
  width: 1.5rem;
  height: 1.5rem;
  margin-top: -0.65rem;
  background-color: var(--bs-secondary-bg);
  border: 0.125rem solid var(--bs-primary);
  border-radius: 0.6rem;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .form-range::-webkit-slider-thumb {
    transition: none;
  }
}
.form-range::-webkit-slider-thumb:active {
  background-color: #c8c8fb;
}
.form-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.2rem;
  color: transparent;
  cursor: pointer;
  background-color: rgb(184, 184, 204);
  border-color: transparent;
  border-radius: 1rem;
}
.form-range::-moz-range-thumb {
  width: 1.5rem;
  height: 1.5rem;
  background-color: var(--bs-secondary-bg);
  border: 0.125rem solid var(--bs-primary);
  border-radius: 0.6rem;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .form-range::-moz-range-thumb {
    transition: none;
  }
}
.form-range::-moz-range-thumb:active {
  background-color: #c8c8fb;
}
.form-range::-moz-range-track {
  width: 100%;
  height: 0.2rem;
  color: transparent;
  cursor: pointer;
  background-color: rgb(184, 184, 204);
  border-color: transparent;
  border-radius: 1rem;
}
.form-range:disabled {
  pointer-events: none;
}
.form-range:disabled::-webkit-slider-thumb {
  background-color: var(--bs-secondary-color);
}
.form-range:disabled::-moz-range-thumb {
  background-color: var(--bs-secondary-color);
}
.form-floating {
  position: relative;
}
.form-floating > .form-control,
.form-floating > .form-control-plaintext,
.form-floating > .form-select {
  height: calc(3.5rem + calc(var(--bs-border-width) * 2));
  min-height: calc(3.5rem + calc(var(--bs-border-width) * 2));
  line-height: 1.25;
}
.form-floating > label {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100%;
  padding: 1rem 12px;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
  white-space: nowrap;
  pointer-events: none;
  border: var(--bs-border-width) solid transparent;
  transform-origin: 0 0;
  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-floating > label {
    transition: none;
  }
}
.form-floating > .form-control,
.form-floating > .form-control-plaintext {
  padding: 1rem 12px;
}
.form-floating > .form-control::placeholder,
.form-floating > .form-control-plaintext::placeholder {
  color: transparent;
}
.form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown),
.form-floating > .form-control-plaintext:focus,
.form-floating > .form-control-plaintext:not(:placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:-webkit-autofill,
.form-floating > .form-control-plaintext:-webkit-autofill {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-select {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label,
.form-floating > .form-control-plaintext ~ label,
.form-floating > .form-select ~ label {
  color: rgba(var(--bs-body-color-rgb), 0.65);
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control:focus ~ label::after,
.form-floating > .form-control:not(:placeholder-shown) ~ label::after,
.form-floating > .form-control-plaintext ~ label::after,
.form-floating > .form-select ~ label::after {
  position: absolute;
  inset: 1rem 6px;
  z-index: -1;
  height: 1.5em;
  content: "";
  background-color: rgb(240, 240, 245);
  border-radius: var(--bs-border-radius);
}
.form-floating > .form-control:-webkit-autofill ~ label {
  color: rgba(var(--bs-body-color-rgb), 0.65);
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control-plaintext ~ label {
  border-width: var(--bs-border-width) 0;
}
.form-floating > :disabled ~ label {
  color: rgb(130, 130, 153);
}
.form-floating > :disabled ~ label::after {
  background-color: var(--bs-secondary-bg);
}
.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.input-group > .form-control,
.input-group > .form-select,
.input-group > .form-floating {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
}
.input-group > .form-control:focus,
.input-group > .form-select:focus,
.input-group > .form-floating:focus-within {
  z-index: 5;
}
.input-group .btn {
  position: relative;
  z-index: 2;
}
.input-group .btn:focus {
  z-index: 5;
}
.input-group-text {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.3;
  color: var(--bs-body-color);
  text-align: center;
  white-space: nowrap;
  background-color: var(--bs-tertiary-bg);
  border: var(--bs-border-width) solid rgb(240, 240, 245);
  border-radius: var(--bs-border-radius);
}
.input-group-lg > .form-control,
.input-group-lg > .form-select,
.input-group-lg > .input-group-text,
.input-group-lg > .btn {
  padding: 0.5rem 1rem;
  font-size: 1.09375rem;
  border-radius: var(--bs-border-radius-lg);
}
.input-group-sm > .form-control,
.input-group-sm > .form-select,
.input-group-sm > .input-group-text,
.input-group-sm > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.765625rem;
  border-radius: var(--bs-border-radius-sm);
}
.input-group-lg > .form-select,
.input-group-sm > .form-select {
  padding-right: 48px;
}
.input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),
.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3),
.input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-control,
.input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-select {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),
.input-group.has-validation > .dropdown-toggle:nth-last-child(n+4),
.input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-control,
.input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-select {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
  margin-left: calc(var(--bs-border-width) * -1);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.input-group > .form-floating:not(:first-child) > .form-control,
.input-group > .form-floating:not(:first-child) > .form-select {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: var(--bs-form-valid-color);
}
.valid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 4px 8px;
  margin-top: 0.1rem;
  font-size: 0.765625rem;
  color: #fff;
  background-color: var(--bs-success);
  border-radius: var(--bs-border-radius);
}
.was-validated :valid ~ .valid-feedback,
.was-validated :valid ~ .valid-tooltip,
.is-valid ~ .valid-feedback,
.is-valid ~ .valid-tooltip {
  display: block;
}
.was-validated .form-control:valid, .form-control.is-valid {
  border-color: var(--bs-form-valid-border-color);
  padding-right: calc(1.3em + 20px);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='rgb%2840, 156, 92%29' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.325em + 5px) center;
  background-size: calc(0.65em + 10px) calc(0.65em + 10px);
}
.was-validated .form-control:valid:focus, .form-control.is-valid:focus {
  border-color: var(--bs-form-valid-border-color);
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25);
}
.was-validated textarea.form-control:valid, textarea.form-control.is-valid {
  padding-right: calc(1.3em + 20px);
  background-position: top calc(0.325em + 5px) right calc(0.325em + 5px);
}
.was-validated .form-select:valid, .form-select.is-valid {
  border-color: var(--bs-form-valid-border-color);
}
.was-validated .form-select:valid:not([multiple]):not([size]), .was-validated .form-select:valid:not([multiple])[size="1"], .form-select.is-valid:not([multiple]):not([size]), .form-select.is-valid:not([multiple])[size="1"] {
  --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='rgb%2840, 156, 92%29' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  padding-right: 66px;
  background-position: right 12px center, center right 36px;
  background-size: 16px 12px, calc(0.65em + 10px) calc(0.65em + 10px);
}
.was-validated .form-select:valid:focus, .form-select.is-valid:focus {
  border-color: var(--bs-form-valid-border-color);
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25);
}
.was-validated .form-control-color:valid, .form-control-color.is-valid {
  width: calc(3rem + calc(1.3em + 20px));
}
.was-validated .form-check-input:valid, .form-check-input.is-valid {
  border-color: var(--bs-form-valid-border-color);
}
.was-validated .form-check-input:valid:checked, .form-check-input.is-valid:checked {
  background-color: var(--bs-form-valid-color);
}
.was-validated .form-check-input:valid:focus, .form-check-input.is-valid:focus {
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25);
}
.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {
  color: var(--bs-form-valid-color);
}
.form-check-inline .form-check-input ~ .valid-feedback {
  margin-left: 0.5em;
}
.was-validated .input-group > .form-control:not(:focus):valid, .input-group > .form-control:not(:focus).is-valid,
.was-validated .input-group > .form-select:not(:focus):valid,
.input-group > .form-select:not(:focus).is-valid,
.was-validated .input-group > .form-floating:not(:focus-within):valid,
.input-group > .form-floating:not(:focus-within).is-valid {
  z-index: 3;
}
.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: var(--bs-form-invalid-color);
}
.invalid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 4px 8px;
  margin-top: 0.1rem;
  font-size: 0.765625rem;
  color: #fff;
  background-color: var(--bs-danger);
  border-radius: var(--bs-border-radius);
}
.was-validated :invalid ~ .invalid-feedback,
.was-validated :invalid ~ .invalid-tooltip,
.is-invalid ~ .invalid-feedback,
.is-invalid ~ .invalid-tooltip {
  display: block;
}
.was-validated .form-control:invalid, .form-control.is-invalid {
  border-color: var(--bs-form-invalid-border-color);
  padding-right: calc(1.3em + 20px);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='rgb%28219, 44, 73%29'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='rgb%28219, 44, 73%29' stroke='none'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.325em + 5px) center;
  background-size: calc(0.65em + 10px) calc(0.65em + 10px);
}
.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {
  border-color: var(--bs-form-invalid-border-color);
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25);
}
.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {
  padding-right: calc(1.3em + 20px);
  background-position: top calc(0.325em + 5px) right calc(0.325em + 5px);
}
.was-validated .form-select:invalid, .form-select.is-invalid {
  border-color: var(--bs-form-invalid-border-color);
}
.was-validated .form-select:invalid:not([multiple]):not([size]), .was-validated .form-select:invalid:not([multiple])[size="1"], .form-select.is-invalid:not([multiple]):not([size]), .form-select.is-invalid:not([multiple])[size="1"] {
  --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='rgb%28219, 44, 73%29'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='rgb%28219, 44, 73%29' stroke='none'/%3e%3c/svg%3e");
  padding-right: 66px;
  background-position: right 12px center, center right 36px;
  background-size: 16px 12px, calc(0.65em + 10px) calc(0.65em + 10px);
}
.was-validated .form-select:invalid:focus, .form-select.is-invalid:focus {
  border-color: var(--bs-form-invalid-border-color);
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25);
}
.was-validated .form-control-color:invalid, .form-control-color.is-invalid {
  width: calc(3rem + calc(1.3em + 20px));
}
.was-validated .form-check-input:invalid, .form-check-input.is-invalid {
  border-color: var(--bs-form-invalid-border-color);
}
.was-validated .form-check-input:invalid:checked, .form-check-input.is-invalid:checked {
  background-color: var(--bs-form-invalid-color);
}
.was-validated .form-check-input:invalid:focus, .form-check-input.is-invalid:focus {
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25);
}
.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {
  color: var(--bs-form-invalid-color);
}
.form-check-inline .form-check-input ~ .invalid-feedback {
  margin-left: 0.5em;
}
.was-validated .input-group > .form-control:not(:focus):invalid, .input-group > .form-control:not(:focus).is-invalid,
.was-validated .input-group > .form-select:not(:focus):invalid,
.input-group > .form-select:not(:focus).is-invalid,
.was-validated .input-group > .form-floating:not(:focus-within):invalid,
.input-group > .form-floating:not(:focus-within).is-invalid {
  z-index: 4;
}
.btn {
  --bs-btn-padding-x: 12px;
  --bs-btn-padding-y: 10px;
  --bs-btn-font-family: ;
  --bs-btn-font-size: 0.875rem;
  --bs-btn-font-weight: 500;
  --bs-btn-line-height: 1.3;
  --bs-btn-color: var(--bs-body-color);
  --bs-btn-bg: transparent;
  --bs-btn-border-width: var(--bs-border-width);
  --bs-btn-border-color: transparent;
  --bs-btn-border-radius: var(--bs-border-radius);
  --bs-btn-hover-border-color: transparent;
  --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
  --bs-btn-disabled-opacity: 0.65;
  --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);
  display: inline-block;
  padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
  font-family: var(--bs-btn-font-family);
  font-size: var(--bs-btn-font-size);
  font-weight: var(--bs-btn-font-weight);
  line-height: var(--bs-btn-line-height);
  color: var(--bs-btn-color);
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
  border-radius: var(--bs-btn-border-radius);
  background-color: var(--bs-btn-bg);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
.btn:hover {
  color: var(--bs-btn-hover-color);
  background-color: var(--bs-btn-hover-bg);
  border-color: var(--bs-btn-hover-border-color);
}
.btn-check + .btn:hover {
  color: var(--bs-btn-color);
  background-color: var(--bs-btn-bg);
  border-color: var(--bs-btn-border-color);
}
.btn:focus-visible {
  color: var(--bs-btn-hover-color);
  background-color: var(--bs-btn-hover-bg);
  border-color: var(--bs-btn-hover-border-color);
  outline: 0;
  box-shadow: var(--bs-btn-focus-box-shadow);
}
.btn-check:focus-visible + .btn {
  border-color: var(--bs-btn-hover-border-color);
  outline: 0;
  box-shadow: var(--bs-btn-focus-box-shadow);
}
.btn-check:checked + .btn, :not(.btn-check) + .btn:active, .btn:first-child:active, .btn.active, .btn.show {
  color: var(--bs-btn-active-color);
  background-color: var(--bs-btn-active-bg);
  border-color: var(--bs-btn-active-border-color);
}
.btn-check:checked + .btn:focus-visible, :not(.btn-check) + .btn:active:focus-visible, .btn:first-child:active:focus-visible, .btn.active:focus-visible, .btn.show:focus-visible {
  box-shadow: var(--bs-btn-focus-box-shadow);
}
.btn:disabled, .btn.disabled, fieldset:disabled .btn {
  color: var(--bs-btn-disabled-color);
  pointer-events: none;
  background-color: var(--bs-btn-disabled-bg);
  border-color: var(--bs-btn-disabled-border-color);
  opacity: var(--bs-btn-disabled-opacity);
}
.btn-primary {
  --bs-btn-color: #fff;
  --bs-btn-bg: rgb(73, 73, 242);
  --bs-btn-border-color: rgb(73, 73, 242);
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #3e3ece;
  --bs-btn-hover-border-color: #3a3ac2;
  --bs-btn-focus-shadow-rgb: 100, 100, 244;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #3a3ac2;
  --bs-btn-active-border-color: #3737b6;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: rgb(73, 73, 242);
  --bs-btn-disabled-border-color: rgb(73, 73, 242);
}
.btn-secondary {
  --bs-btn-color: #000;
  --bs-btn-bg: rgb(240, 240, 245);
  --bs-btn-border-color: rgb(240, 240, 245);
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #f2f2f7;
  --bs-btn-hover-border-color: #f2f2f6;
  --bs-btn-focus-shadow-rgb: 204, 204, 208;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #f3f3f7;
  --bs-btn-active-border-color: #f2f2f6;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #000;
  --bs-btn-disabled-bg: rgb(240, 240, 245);
  --bs-btn-disabled-border-color: rgb(240, 240, 245);
}
.btn-success {
  --bs-btn-color: #fff;
  --bs-btn-bg: rgb(40, 156, 92);
  --bs-btn-border-color: rgb(40, 156, 92);
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #22854e;
  --bs-btn-hover-border-color: #207d4a;
  --bs-btn-focus-shadow-rgb: 72, 171, 116;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #207d4a;
  --bs-btn-active-border-color: #1e7545;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: rgb(40, 156, 92);
  --bs-btn-disabled-border-color: rgb(40, 156, 92);
}
.btn-info {
  --bs-btn-color: #000;
  --bs-btn-bg: #0dcaf0;
  --bs-btn-border-color: #0dcaf0;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #31d2f2;
  --bs-btn-hover-border-color: #25cff2;
  --bs-btn-focus-shadow-rgb: 11, 172, 204;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #3dd5f3;
  --bs-btn-active-border-color: #25cff2;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #000;
  --bs-btn-disabled-bg: #0dcaf0;
  --bs-btn-disabled-border-color: #0dcaf0;
}
.btn-warning {
  --bs-btn-color: #000;
  --bs-btn-bg: rgb(255, 193, 7);
  --bs-btn-border-color: rgb(255, 193, 7);
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #ffca2c;
  --bs-btn-hover-border-color: #ffc720;
  --bs-btn-focus-shadow-rgb: 217, 164, 6;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #ffcd39;
  --bs-btn-active-border-color: #ffc720;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #000;
  --bs-btn-disabled-bg: rgb(255, 193, 7);
  --bs-btn-disabled-border-color: rgb(255, 193, 7);
}
.btn-danger {
  --bs-btn-color: #fff;
  --bs-btn-bg: rgb(219, 44, 73);
  --bs-btn-border-color: rgb(219, 44, 73);
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #ba253e;
  --bs-btn-hover-border-color: #af233a;
  --bs-btn-focus-shadow-rgb: 224, 76, 100;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #af233a;
  --bs-btn-active-border-color: #a42137;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: rgb(219, 44, 73);
  --bs-btn-disabled-border-color: rgb(219, 44, 73);
}
.btn-light {
  --bs-btn-color: #000;
  --bs-btn-bg: rgb(240, 240, 245);
  --bs-btn-border-color: rgb(240, 240, 245);
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #ccccd0;
  --bs-btn-hover-border-color: #c0c0c4;
  --bs-btn-focus-shadow-rgb: 204, 204, 208;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #c0c0c4;
  --bs-btn-active-border-color: #b4b4b8;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #000;
  --bs-btn-disabled-bg: rgb(240, 240, 245);
  --bs-btn-disabled-border-color: rgb(240, 240, 245);
}
.btn-dark {
  --bs-btn-color: #fff;
  --bs-btn-bg: rgb(27, 28, 38);
  --bs-btn-border-color: rgb(27, 28, 38);
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #3d3e47;
  --bs-btn-hover-border-color: #32333c;
  --bs-btn-focus-shadow-rgb: 61, 62, 71;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #494951;
  --bs-btn-active-border-color: #32333c;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: rgb(27, 28, 38);
  --bs-btn-disabled-border-color: rgb(27, 28, 38);
}
.btn-outline-primary {
  --bs-btn-color: rgb(73, 73, 242);
  --bs-btn-border-color: rgb(73, 73, 242);
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: rgb(73, 73, 242);
  --bs-btn-hover-border-color: rgb(73, 73, 242);
  --bs-btn-focus-shadow-rgb: 73, 73, 242;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: rgb(73, 73, 242);
  --bs-btn-active-border-color: rgb(73, 73, 242);
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: rgb(73, 73, 242);
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: rgb(73, 73, 242);
  --bs-gradient: none;
}
.btn-outline-secondary {
  --bs-btn-color: rgb(240, 240, 245);
  --bs-btn-border-color: rgb(240, 240, 245);
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: rgb(240, 240, 245);
  --bs-btn-hover-border-color: rgb(240, 240, 245);
  --bs-btn-focus-shadow-rgb: 240, 240, 245;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: rgb(240, 240, 245);
  --bs-btn-active-border-color: rgb(240, 240, 245);
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: rgb(240, 240, 245);
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: rgb(240, 240, 245);
  --bs-gradient: none;
}
.btn-outline-success {
  --bs-btn-color: rgb(40, 156, 92);
  --bs-btn-border-color: rgb(40, 156, 92);
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: rgb(40, 156, 92);
  --bs-btn-hover-border-color: rgb(40, 156, 92);
  --bs-btn-focus-shadow-rgb: 40, 156, 92;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: rgb(40, 156, 92);
  --bs-btn-active-border-color: rgb(40, 156, 92);
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: rgb(40, 156, 92);
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: rgb(40, 156, 92);
  --bs-gradient: none;
}
.btn-outline-info {
  --bs-btn-color: #0dcaf0;
  --bs-btn-border-color: #0dcaf0;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #0dcaf0;
  --bs-btn-hover-border-color: #0dcaf0;
  --bs-btn-focus-shadow-rgb: 13, 202, 240;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #0dcaf0;
  --bs-btn-active-border-color: #0dcaf0;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #0dcaf0;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #0dcaf0;
  --bs-gradient: none;
}
.btn-outline-warning {
  --bs-btn-color: rgb(255, 193, 7);
  --bs-btn-border-color: rgb(255, 193, 7);
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: rgb(255, 193, 7);
  --bs-btn-hover-border-color: rgb(255, 193, 7);
  --bs-btn-focus-shadow-rgb: 255, 193, 7;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: rgb(255, 193, 7);
  --bs-btn-active-border-color: rgb(255, 193, 7);
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: rgb(255, 193, 7);
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: rgb(255, 193, 7);
  --bs-gradient: none;
}
.btn-outline-danger {
  --bs-btn-color: rgb(219, 44, 73);
  --bs-btn-border-color: rgb(219, 44, 73);
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: rgb(219, 44, 73);
  --bs-btn-hover-border-color: rgb(219, 44, 73);
  --bs-btn-focus-shadow-rgb: 219, 44, 73;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: rgb(219, 44, 73);
  --bs-btn-active-border-color: rgb(219, 44, 73);
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: rgb(219, 44, 73);
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: rgb(219, 44, 73);
  --bs-gradient: none;
}
.btn-outline-light {
  --bs-btn-color: rgb(240, 240, 245);
  --bs-btn-border-color: rgb(240, 240, 245);
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: rgb(240, 240, 245);
  --bs-btn-hover-border-color: rgb(240, 240, 245);
  --bs-btn-focus-shadow-rgb: 240, 240, 245;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: rgb(240, 240, 245);
  --bs-btn-active-border-color: rgb(240, 240, 245);
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: rgb(240, 240, 245);
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: rgb(240, 240, 245);
  --bs-gradient: none;
}
.btn-outline-dark {
  --bs-btn-color: rgb(27, 28, 38);
  --bs-btn-border-color: rgb(27, 28, 38);
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: rgb(27, 28, 38);
  --bs-btn-hover-border-color: rgb(27, 28, 38);
  --bs-btn-focus-shadow-rgb: 27, 28, 38;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: rgb(27, 28, 38);
  --bs-btn-active-border-color: rgb(27, 28, 38);
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: rgb(27, 28, 38);
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: rgb(27, 28, 38);
  --bs-gradient: none;
}
.btn-link {
  --bs-btn-font-weight: 400;
  --bs-btn-color: var(--bs-link-color);
  --bs-btn-bg: transparent;
  --bs-btn-border-color: transparent;
  --bs-btn-hover-color: var(--bs-link-hover-color);
  --bs-btn-hover-border-color: transparent;
  --bs-btn-active-color: var(--bs-link-hover-color);
  --bs-btn-active-border-color: transparent;
  --bs-btn-disabled-color: rgb(130, 130, 153);
  --bs-btn-disabled-border-color: transparent;
  --bs-btn-box-shadow: 0 0 0 #000;
  --bs-btn-focus-shadow-rgb: 100, 100, 244;
  text-decoration: none;
}
.btn-link:focus-visible {
  color: var(--bs-btn-color);
}
.btn-link:hover {
  color: var(--bs-btn-hover-color);
}
.btn-lg {
  --bs-btn-padding-y: 0.5rem;
  --bs-btn-padding-x: 1rem;
  --bs-btn-font-size: 1.09375rem;
  --bs-btn-border-radius: var(--bs-border-radius-lg);
}
.btn-sm {
  --bs-btn-padding-y: 0.25rem;
  --bs-btn-padding-x: 0.5rem;
  --bs-btn-font-size: 0.765625rem;
  --bs-btn-border-radius: var(--bs-border-radius-sm);
}
.fade {
  transition: opacity 0.15s linear;
}
@media (prefers-reduced-motion: reduce) {
  .fade {
    transition: none;
  }
}
.fade:not(.show) {
  opacity: 0;
}
.collapse:not(.show) {
  display: none;
}
.collapsing {
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .collapsing {
    transition: none;
  }
}
.collapsing.collapse-horizontal {
  width: 0;
  height: auto;
  transition: width 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .collapsing.collapse-horizontal {
    transition: none;
  }
}
.dropup,
.dropend,
.dropdown,
.dropstart,
.dropup-center,
.dropdown-center {
  position: relative;
}
.dropdown-toggle {
  white-space: nowrap;
}
.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}
.dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropdown-menu {
  --bs-dropdown-zindex: 1000;
  --bs-dropdown-min-width: 10rem;
  --bs-dropdown-padding-x: 0;
  --bs-dropdown-padding-y: 0.5rem;
  --bs-dropdown-spacer: 0.125rem;
  --bs-dropdown-font-size: 0.875rem;
  --bs-dropdown-color: var(--bs-body-color);
  --bs-dropdown-bg: var(--bs-body-bg);
  --bs-dropdown-border-color: var(--bs-border-color-translucent);
  --bs-dropdown-border-radius: var(--bs-border-radius);
  --bs-dropdown-border-width: var(--bs-border-width);
  --bs-dropdown-inner-border-radius: calc(var(--bs-border-radius) - var(--bs-border-width));
  --bs-dropdown-divider-bg: var(--bs-border-color-translucent);
  --bs-dropdown-divider-margin-y: 8px;
  --bs-dropdown-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  --bs-dropdown-link-color: var(--bs-body-color);
  --bs-dropdown-link-hover-color: var(--bs-body-color);
  --bs-dropdown-link-hover-bg: var(--bs-tertiary-bg);
  --bs-dropdown-link-active-color: var(--bs-dropdown-link-hover-color);
  --bs-dropdown-link-active-bg: var(--bs-dropdown-link-hover-bg);
  --bs-dropdown-link-disabled-color: var(--bs-tertiary-color);
  --bs-dropdown-item-padding-x: 16px;
  --bs-dropdown-item-padding-y: 11px;
  --bs-dropdown-header-color: rgb(130, 130, 153);
  --bs-dropdown-header-padding-x: 16px;
  --bs-dropdown-header-padding-y: 0.5rem;
  position: absolute;
  z-index: var(--bs-dropdown-zindex);
  display: none;
  min-width: var(--bs-dropdown-min-width);
  padding: var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);
  margin: 0;
  font-size: var(--bs-dropdown-font-size);
  color: var(--bs-dropdown-color);
  text-align: left;
  list-style: none;
  background-color: var(--bs-dropdown-bg);
  background-clip: padding-box;
  border: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);
  border-radius: var(--bs-dropdown-border-radius);
}
.dropdown-menu[data-bs-popper] {
  top: 100%;
  left: 0;
  margin-top: var(--bs-dropdown-spacer);
}
.dropdown-menu-start {
  --bs-position: start;
}
.dropdown-menu-start[data-bs-popper] {
  right: auto;
  left: 0;
}
.dropdown-menu-end {
  --bs-position: end;
}
.dropdown-menu-end[data-bs-popper] {
  right: 0;
  left: auto;
}
@media (min-width: 576px) {
  .dropdown-menu-sm-start {
    --bs-position: start;
  }
  .dropdown-menu-sm-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-sm-end {
    --bs-position: end;
  }
  .dropdown-menu-sm-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 768px) {
  .dropdown-menu-md-start {
    --bs-position: start;
  }
  .dropdown-menu-md-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-md-end {
    --bs-position: end;
  }
  .dropdown-menu-md-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 992px) {
  .dropdown-menu-lg-start {
    --bs-position: start;
  }
  .dropdown-menu-lg-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-lg-end {
    --bs-position: end;
  }
  .dropdown-menu-lg-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1200px) {
  .dropdown-menu-xl-start {
    --bs-position: start;
  }
  .dropdown-menu-xl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-xl-end {
    --bs-position: end;
  }
  .dropdown-menu-xl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1400px) {
  .dropdown-menu-xxl-start {
    --bs-position: start;
  }
  .dropdown-menu-xxl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-xxl-end {
    --bs-position: end;
  }
  .dropdown-menu-xxl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
.dropup .dropdown-menu[data-bs-popper] {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: var(--bs-dropdown-spacer);
}
.dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}
.dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropend .dropdown-menu[data-bs-popper] {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: var(--bs-dropdown-spacer);
}
.dropend .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}
.dropend .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropend .dropdown-toggle::after {
  vertical-align: 0;
}
.dropstart .dropdown-menu[data-bs-popper] {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: var(--bs-dropdown-spacer);
}
.dropstart .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
}
.dropstart .dropdown-toggle::after {
  display: none;
}
.dropstart .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent;
}
.dropstart .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropstart .dropdown-toggle::before {
  vertical-align: 0;
}
.dropdown-divider {
  height: 0;
  margin: var(--bs-dropdown-divider-margin-y) 0;
  overflow: hidden;
  border-top: 1px solid var(--bs-dropdown-divider-bg);
  opacity: 1;
}
.dropdown-item {
  display: block;
  width: 100%;
  padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
  clear: both;
  font-weight: 400;
  color: var(--bs-dropdown-link-color);
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  border-radius: var(--bs-dropdown-item-border-radius, 0);
}
.dropdown-item:hover, .dropdown-item:focus {
  color: var(--bs-dropdown-link-hover-color);
  background-color: var(--bs-dropdown-link-hover-bg);
}
.dropdown-item.active, .dropdown-item:active {
  color: var(--bs-dropdown-link-active-color);
  text-decoration: none;
  background-color: var(--bs-dropdown-link-active-bg);
}
.dropdown-item.disabled, .dropdown-item:disabled {
  color: var(--bs-dropdown-link-disabled-color);
  pointer-events: none;
  background-color: transparent;
}
.dropdown-menu.show {
  display: block;
}
.dropdown-header {
  display: block;
  padding: var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);
  margin-bottom: 0;
  font-size: 0.765625rem;
  color: var(--bs-dropdown-header-color);
  white-space: nowrap;
}
.dropdown-item-text {
  display: block;
  padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
  color: var(--bs-dropdown-link-color);
}
.dropdown-menu-dark {
  --bs-dropdown-color: rgb(184, 184, 204);
  --bs-dropdown-bg: rgb(50, 50, 66);
  --bs-dropdown-border-color: var(--bs-border-color-translucent);
  --bs-dropdown-box-shadow: ;
  --bs-dropdown-link-color: rgb(184, 184, 204);
  --bs-dropdown-link-hover-color: #fff;
  --bs-dropdown-divider-bg: var(--bs-border-color-translucent);
  --bs-dropdown-link-hover-bg: rgba(255, 255, 255, 0.15);
  --bs-dropdown-link-active-color: var(--bs-dropdown-link-hover-color);
  --bs-dropdown-link-active-bg: var(--bs-dropdown-link-hover-bg);
  --bs-dropdown-link-disabled-color: rgb(130, 130, 153);
  --bs-dropdown-header-color: rgb(130, 130, 153);
}
.nav {
  --bs-nav-link-padding-x: 1rem;
  --bs-nav-link-padding-y: 0;
  --bs-nav-link-font-size: 1rem;
  --bs-nav-link-font-weight: 700;
  --bs-nav-link-color: var(--bs-link-color);
  --bs-nav-link-hover-color: var(--bs-link-hover-color);
  --bs-nav-link-disabled-color: var(--bs-secondary-color);
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.nav-link {
  display: block;
  padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
  font-size: var(--bs-nav-link-font-size);
  font-weight: var(--bs-nav-link-font-weight);
  color: var(--bs-nav-link-color);
  background: none;
  border: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .nav-link {
    transition: none;
  }
}
.nav-link:hover, .nav-link:focus {
  color: var(--bs-nav-link-hover-color);
}
.nav-link:focus-visible {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(73, 73, 242, 0.25);
}
.nav-link.disabled {
  color: var(--bs-nav-link-disabled-color);
  pointer-events: none;
  cursor: default;
}
.nav-tabs {
  --bs-nav-tabs-border-width: var(--bs-border-width);
  --bs-nav-tabs-border-color: var(--bs-border-color);
  --bs-nav-tabs-border-radius: var(--bs-border-radius);
  --bs-nav-tabs-link-hover-border-color: var(--bs-secondary-bg) var(--bs-secondary-bg) var(--bs-border-color);
  --bs-nav-tabs-link-active-color: var(--bs-emphasis-color);
  --bs-nav-tabs-link-active-bg: var(--bs-body-bg);
  --bs-nav-tabs-link-active-border-color: var(--bs-border-color) var(--bs-border-color) var(--bs-body-bg);
  border-bottom: var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color);
}
.nav-tabs .nav-link {
  margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width));
  border: var(--bs-nav-tabs-border-width) solid transparent;
  border-top-left-radius: var(--bs-nav-tabs-border-radius);
  border-top-right-radius: var(--bs-nav-tabs-border-radius);
}
.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
  isolation: isolate;
  border-color: var(--bs-nav-tabs-link-hover-border-color);
}
.nav-tabs .nav-link.disabled, .nav-tabs .nav-link:disabled {
  color: var(--bs-nav-link-disabled-color);
  background-color: transparent;
  border-color: transparent;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: var(--bs-nav-tabs-link-active-color);
  background-color: var(--bs-nav-tabs-link-active-bg);
  border-color: var(--bs-nav-tabs-link-active-border-color);
}
.nav-tabs .dropdown-menu {
  margin-top: calc(-1 * var(--bs-nav-tabs-border-width));
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.nav-pills {
  --bs-nav-pills-border-radius: var(--bs-border-radius);
  --bs-nav-pills-link-active-color: #fff;
  --bs-nav-pills-link-active-bg: rgb(73, 73, 242);
}
.nav-pills .nav-link {
  border-radius: var(--bs-nav-pills-border-radius);
}
.nav-pills .nav-link:disabled {
  color: var(--bs-nav-link-disabled-color);
  background-color: transparent;
  border-color: transparent;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: var(--bs-nav-pills-link-active-color);
  background-color: var(--bs-nav-pills-link-active-bg);
}
.nav-underline {
  --bs-nav-underline-gap: 1rem;
  --bs-nav-underline-border-width: 0.125rem;
  --bs-nav-underline-link-active-color: var(--bs-emphasis-color);
  gap: var(--bs-nav-underline-gap);
}
.nav-underline .nav-link {
  padding-right: 0;
  padding-left: 0;
  border-bottom: var(--bs-nav-underline-border-width) solid transparent;
}
.nav-underline .nav-link:hover, .nav-underline .nav-link:focus {
  border-bottom-color: currentcolor;
}
.nav-underline .nav-link.active,
.nav-underline .show > .nav-link {
  font-weight: 700;
  color: var(--bs-nav-underline-link-active-color);
  border-bottom-color: currentcolor;
}
.nav-fill > .nav-link,
.nav-fill .nav-item {
  flex: 1 1 auto;
  text-align: center;
}
.nav-justified > .nav-link,
.nav-justified .nav-item {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
}
.nav-fill .nav-item .nav-link,
.nav-justified .nav-item .nav-link {
  width: 100%;
}
.tab-content > .tab-pane {
  display: none;
}
.tab-content > .active {
  display: block;
}
.navbar {
  --bs-navbar-padding-x: 0;
  --bs-navbar-padding-y: 0;
  --bs-navbar-color: rgba(var(--bs-emphasis-color-rgb), 0.65);
  --bs-navbar-hover-color: rgba(var(--bs-emphasis-color-rgb), 0.8);
  --bs-navbar-disabled-color: rgba(var(--bs-emphasis-color-rgb), 0.3);
  --bs-navbar-active-color: rgba(var(--bs-emphasis-color-rgb), 1);
  --bs-navbar-brand-padding-y: -0.1421875rem;
  --bs-navbar-brand-margin-end: 1rem;
  --bs-navbar-brand-font-size: 1.09375rem;
  --bs-navbar-brand-color: rgba(var(--bs-emphasis-color-rgb), 1);
  --bs-navbar-brand-hover-color: rgba(var(--bs-emphasis-color-rgb), 1);
  --bs-navbar-nav-link-padding-x: 0.5rem;
  --bs-navbar-toggler-padding-y: 0.25rem;
  --bs-navbar-toggler-padding-x: 0.75rem;
  --bs-navbar-toggler-font-size: 1.09375rem;
  --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2850, 50, 66, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  --bs-navbar-toggler-border-color: rgba(var(--bs-emphasis-color-rgb), 0.15);
  --bs-navbar-toggler-border-radius: var(--bs-border-radius);
  --bs-navbar-toggler-focus-width: 0.25rem;
  --bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x);
}
.navbar > .container,
.navbar > .container-fluid,
.navbar > .container-sm,
.navbar > .container-md,
.navbar > .container-lg,
.navbar > .container-xl,
.navbar > .container-xxl {
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
}
.navbar-brand {
  padding-top: var(--bs-navbar-brand-padding-y);
  padding-bottom: var(--bs-navbar-brand-padding-y);
  margin-right: var(--bs-navbar-brand-margin-end);
  font-size: var(--bs-navbar-brand-font-size);
  color: var(--bs-navbar-brand-color);
  white-space: nowrap;
}
.navbar-brand:hover, .navbar-brand:focus {
  color: var(--bs-navbar-brand-hover-color);
}
.navbar-nav {
  --bs-nav-link-padding-x: 0;
  --bs-nav-link-padding-y: 0;
  --bs-nav-link-font-size: 1rem;
  --bs-nav-link-font-weight: 700;
  --bs-nav-link-color: var(--bs-navbar-color);
  --bs-nav-link-hover-color: var(--bs-navbar-hover-color);
  --bs-nav-link-disabled-color: var(--bs-navbar-disabled-color);
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.navbar-nav .nav-link.active, .navbar-nav .nav-link.show {
  color: var(--bs-navbar-active-color);
}
.navbar-nav .dropdown-menu {
  position: static;
}
.navbar-text {
  padding-top: 0;
  padding-bottom: 0;
  color: var(--bs-navbar-color);
}
.navbar-text a,
.navbar-text a:hover,
.navbar-text a:focus {
  color: var(--bs-navbar-active-color);
}
.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}
.navbar-toggler {
  padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);
  font-size: var(--bs-navbar-toggler-font-size);
  line-height: 1;
  color: var(--bs-navbar-color);
  background-color: transparent;
  border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);
  border-radius: var(--bs-navbar-toggler-border-radius);
  transition: var(--bs-navbar-toggler-transition);
}
@media (prefers-reduced-motion: reduce) {
  .navbar-toggler {
    transition: none;
  }
}
.navbar-toggler:hover {
  text-decoration: none;
}
.navbar-toggler:focus {
  text-decoration: none;
  outline: 0;
  box-shadow: 0 0 0 var(--bs-navbar-toggler-focus-width);
}
.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-image: var(--bs-navbar-toggler-icon-bg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}
.navbar-nav-scroll {
  max-height: var(--bs-scroll-height, 75vh);
  overflow-y: auto;
}
@media (min-width: 576px) {
  .navbar-expand-sm {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-sm .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-sm .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-sm .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .navbar-expand-sm .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-sm .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-sm .navbar-toggler {
    display: none;
  }
  .navbar-expand-sm .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }
  .navbar-expand-sm .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand-sm .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 768px) {
  .navbar-expand-md {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-md .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-md .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .navbar-expand-md .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-md .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-md .navbar-toggler {
    display: none;
  }
  .navbar-expand-md .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }
  .navbar-expand-md .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand-md .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 992px) {
  .navbar-expand-lg {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-lg .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .navbar-expand-lg .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-lg .navbar-toggler {
    display: none;
  }
  .navbar-expand-lg .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }
  .navbar-expand-lg .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand-lg .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 1200px) {
  .navbar-expand-xl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-xl .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-xl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-xl .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .navbar-expand-xl .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-xl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-xl .navbar-toggler {
    display: none;
  }
  .navbar-expand-xl .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }
  .navbar-expand-xl .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand-xl .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 1400px) {
  .navbar-expand-xxl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-xxl .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-xxl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-xxl .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .navbar-expand-xxl .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-xxl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-xxl .navbar-toggler {
    display: none;
  }
  .navbar-expand-xxl .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }
  .navbar-expand-xxl .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand-xxl .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
.navbar-expand {
  flex-wrap: nowrap;
  justify-content: flex-start;
}
.navbar-expand .navbar-nav {
  flex-direction: row;
}
.navbar-expand .navbar-nav .dropdown-menu {
  position: absolute;
}
.navbar-expand .navbar-nav .nav-link {
  padding-right: var(--bs-navbar-nav-link-padding-x);
  padding-left: var(--bs-navbar-nav-link-padding-x);
}
.navbar-expand .navbar-nav-scroll {
  overflow: visible;
}
.navbar-expand .navbar-collapse {
  display: flex !important;
  flex-basis: auto;
}
.navbar-expand .navbar-toggler {
  display: none;
}
.navbar-expand .offcanvas {
  position: static;
  z-index: auto;
  flex-grow: 1;
  width: auto !important;
  height: auto !important;
  visibility: visible !important;
  background-color: transparent !important;
  border: 0 !important;
  transform: none !important;
  transition: none;
}
.navbar-expand .offcanvas .offcanvas-header {
  display: none;
}
.navbar-expand .offcanvas .offcanvas-body {
  display: flex;
  flex-grow: 0;
  padding: 0;
  overflow-y: visible;
}
.navbar-dark,
.navbar[data-bs-theme=dark] {
  --bs-navbar-color: rgba(255, 255, 255, 0.55);
  --bs-navbar-hover-color: rgba(255, 255, 255, 0.75);
  --bs-navbar-disabled-color: rgba(255, 255, 255, 0.25);
  --bs-navbar-active-color: #fff;
  --bs-navbar-brand-color: #fff;
  --bs-navbar-brand-hover-color: #fff;
  --bs-navbar-toggler-border-color: rgba(255, 255, 255, 0.1);
  --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
[data-bs-theme=dark] .navbar-toggler-icon {
  --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.badge {
  --bs-badge-padding-x: 0.375rem;
  --bs-badge-padding-y: 0.1875rem;
  --bs-badge-font-size: 0.875rem;
  --bs-badge-font-weight: 500;
  --bs-badge-color: rgb(50, 50, 66);
  --bs-badge-border-radius: 4px;
  display: inline-block;
  padding: var(--bs-badge-padding-y) var(--bs-badge-padding-x);
  font-size: var(--bs-badge-font-size);
  font-weight: var(--bs-badge-font-weight);
  line-height: 1;
  color: var(--bs-badge-color);
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: var(--bs-badge-border-radius);
}
.badge:empty {
  display: none;
}
.btn .badge {
  position: relative;
  top: -1px;
}
.alert {
  --bs-alert-bg: transparent;
  --bs-alert-padding-x: 16px;
  --bs-alert-padding-y: 16px;
  --bs-alert-margin-bottom: 1rem;
  --bs-alert-color: inherit;
  --bs-alert-border-color: transparent;
  --bs-alert-border: var(--bs-border-width) solid var(--bs-alert-border-color);
  --bs-alert-border-radius: var(--bs-border-radius);
  --bs-alert-link-color: inherit;
  position: relative;
  padding: var(--bs-alert-padding-y) var(--bs-alert-padding-x);
  margin-bottom: var(--bs-alert-margin-bottom);
  color: var(--bs-alert-color);
  background-color: var(--bs-alert-bg);
  border: var(--bs-alert-border);
  border-radius: var(--bs-alert-border-radius);
}
.alert-heading {
  color: inherit;
}
.alert-link {
  font-weight: 700;
  color: var(--bs-alert-link-color);
}
.alert-dismissible {
  padding-right: 48px;
}
.alert-dismissible .btn-close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 20px 16px;
}
.alert-primary {
  --bs-alert-color: var(--bs-primary-text-emphasis);
  --bs-alert-bg: var(--bs-primary-bg-subtle);
  --bs-alert-border-color: var(--bs-primary-border-subtle);
  --bs-alert-link-color: var(--bs-primary-text-emphasis);
}
.alert-secondary {
  --bs-alert-color: var(--bs-secondary-text-emphasis);
  --bs-alert-bg: var(--bs-secondary-bg-subtle);
  --bs-alert-border-color: var(--bs-secondary-border-subtle);
  --bs-alert-link-color: var(--bs-secondary-text-emphasis);
}
.alert-success {
  --bs-alert-color: var(--bs-success-text-emphasis);
  --bs-alert-bg: var(--bs-success-bg-subtle);
  --bs-alert-border-color: var(--bs-success-border-subtle);
  --bs-alert-link-color: var(--bs-success-text-emphasis);
}
.alert-info {
  --bs-alert-color: var(--bs-info-text-emphasis);
  --bs-alert-bg: var(--bs-info-bg-subtle);
  --bs-alert-border-color: var(--bs-info-border-subtle);
  --bs-alert-link-color: var(--bs-info-text-emphasis);
}
.alert-warning {
  --bs-alert-color: var(--bs-warning-text-emphasis);
  --bs-alert-bg: var(--bs-warning-bg-subtle);
  --bs-alert-border-color: var(--bs-warning-border-subtle);
  --bs-alert-link-color: var(--bs-warning-text-emphasis);
}
.alert-danger {
  --bs-alert-color: var(--bs-danger-text-emphasis);
  --bs-alert-bg: var(--bs-danger-bg-subtle);
  --bs-alert-border-color: var(--bs-danger-border-subtle);
  --bs-alert-link-color: var(--bs-danger-text-emphasis);
}
.alert-light {
  --bs-alert-color: var(--bs-light-text-emphasis);
  --bs-alert-bg: var(--bs-light-bg-subtle);
  --bs-alert-border-color: var(--bs-light-border-subtle);
  --bs-alert-link-color: var(--bs-light-text-emphasis);
}
.alert-dark {
  --bs-alert-color: var(--bs-dark-text-emphasis);
  --bs-alert-bg: var(--bs-dark-bg-subtle);
  --bs-alert-border-color: var(--bs-dark-border-subtle);
  --bs-alert-link-color: var(--bs-dark-text-emphasis);
}
@keyframes progress-bar-stripes {
  0% {
    background-position-x: 1rem;
  }
}
.progress,
.progress-stacked {
  --bs-progress-height: 1rem;
  --bs-progress-font-size: 0.65625rem;
  --bs-progress-bg: var(--bs-secondary-bg);
  --bs-progress-border-radius: var(--bs-border-radius);
  --bs-progress-box-shadow: var(--bs-box-shadow-inset);
  --bs-progress-bar-color: #fff;
  --bs-progress-bar-bg: rgb(73, 73, 242);
  --bs-progress-bar-transition: width 0.6s ease;
  display: flex;
  height: var(--bs-progress-height);
  overflow: hidden;
  font-size: var(--bs-progress-font-size);
  background-color: var(--bs-progress-bg);
  border-radius: var(--bs-progress-border-radius);
}
.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: var(--bs-progress-bar-color);
  text-align: center;
  white-space: nowrap;
  background-color: var(--bs-progress-bar-bg);
  transition: var(--bs-progress-bar-transition);
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar {
    transition: none;
  }
}
.progress-bar-striped {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: var(--bs-progress-height) var(--bs-progress-height);
}
.progress-stacked > .progress {
  overflow: visible;
}
.progress-stacked > .progress > .progress-bar {
  width: 100%;
}
.progress-bar-animated {
  animation: 1s linear infinite progress-bar-stripes;
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar-animated {
    animation: none;
  }
}
.list-group {
  --bs-list-group-color: var(--bs-body-color);
  --bs-list-group-bg: var(--bs-body-bg);
  --bs-list-group-border-color: var(--bs-border-color);
  --bs-list-group-border-width: var(--bs-border-width);
  --bs-list-group-border-radius: var(--bs-border-radius);
  --bs-list-group-item-padding-x: 16px;
  --bs-list-group-item-padding-y: 16px;
  --bs-list-group-action-color: var(--bs-secondary-color);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-tertiary-bg);
  --bs-list-group-action-active-color: var(--bs-body-color);
  --bs-list-group-action-active-bg: var(--bs-secondary-bg);
  --bs-list-group-disabled-color: var(--bs-secondary-color);
  --bs-list-group-disabled-bg: var(--bs-body-bg);
  --bs-list-group-active-color: #fff;
  --bs-list-group-active-bg: rgb(73, 73, 242);
  --bs-list-group-active-border-color: rgb(73, 73, 242);
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: var(--bs-list-group-border-radius);
}
.list-group-numbered {
  list-style-type: none;
  counter-reset: section;
}
.list-group-numbered > .list-group-item::before {
  content: counters(section, ".") ". ";
  counter-increment: section;
}
.list-group-item-action {
  width: 100%;
  color: var(--bs-list-group-action-color);
  text-align: inherit;
}
.list-group-item-action:hover, .list-group-item-action:focus {
  z-index: 1;
  color: var(--bs-list-group-action-hover-color);
  text-decoration: none;
  background-color: var(--bs-list-group-action-hover-bg);
}
.list-group-item-action:active {
  color: var(--bs-list-group-action-active-color);
  background-color: var(--bs-list-group-action-active-bg);
}
.list-group-item {
  position: relative;
  display: block;
  padding: var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);
  color: var(--bs-list-group-color);
  background-color: var(--bs-list-group-bg);
  border: var(--bs-list-group-border-width) solid var(--bs-list-group-border-color);
}
.list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.list-group-item:last-child {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}
.list-group-item.disabled, .list-group-item:disabled {
  color: var(--bs-list-group-disabled-color);
  pointer-events: none;
  background-color: var(--bs-list-group-disabled-bg);
}
.list-group-item.active {
  z-index: 2;
  color: var(--bs-list-group-active-color);
  background-color: var(--bs-list-group-active-bg);
  border-color: var(--bs-list-group-active-border-color);
}
.list-group-item + .list-group-item {
  border-top-width: 0;
}
.list-group-item + .list-group-item.active {
  margin-top: calc(-1 * var(--bs-list-group-border-width));
  border-top-width: var(--bs-list-group-border-width);
}
.list-group-horizontal {
  flex-direction: row;
}
.list-group-horizontal > .list-group-item:first-child:not(:last-child) {
  border-bottom-left-radius: var(--bs-list-group-border-radius);
  border-top-right-radius: 0;
}
.list-group-horizontal > .list-group-item:last-child:not(:first-child) {
  border-top-right-radius: var(--bs-list-group-border-radius);
  border-bottom-left-radius: 0;
}
.list-group-horizontal > .list-group-item.active {
  margin-top: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item {
  border-top-width: var(--bs-list-group-border-width);
  border-left-width: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item.active {
  margin-left: calc(-1 * var(--bs-list-group-border-width));
  border-left-width: var(--bs-list-group-border-width);
}
@media (min-width: 576px) {
  .list-group-horizontal-sm {
    flex-direction: row;
  }
  .list-group-horizontal-sm > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--bs-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item {
    border-top-width: var(--bs-list-group-border-width);
    border-left-width: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--bs-list-group-border-width));
    border-left-width: var(--bs-list-group-border-width);
  }
}
@media (min-width: 768px) {
  .list-group-horizontal-md {
    flex-direction: row;
  }
  .list-group-horizontal-md > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--bs-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item {
    border-top-width: var(--bs-list-group-border-width);
    border-left-width: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--bs-list-group-border-width));
    border-left-width: var(--bs-list-group-border-width);
  }
}
@media (min-width: 992px) {
  .list-group-horizontal-lg {
    flex-direction: row;
  }
  .list-group-horizontal-lg > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--bs-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item {
    border-top-width: var(--bs-list-group-border-width);
    border-left-width: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--bs-list-group-border-width));
    border-left-width: var(--bs-list-group-border-width);
  }
}
@media (min-width: 1200px) {
  .list-group-horizontal-xl {
    flex-direction: row;
  }
  .list-group-horizontal-xl > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--bs-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item {
    border-top-width: var(--bs-list-group-border-width);
    border-left-width: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--bs-list-group-border-width));
    border-left-width: var(--bs-list-group-border-width);
  }
}
@media (min-width: 1400px) {
  .list-group-horizontal-xxl {
    flex-direction: row;
  }
  .list-group-horizontal-xxl > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .list-group-horizontal-xxl > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--bs-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xxl > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-xxl > .list-group-item + .list-group-item {
    border-top-width: var(--bs-list-group-border-width);
    border-left-width: 0;
  }
  .list-group-horizontal-xxl > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--bs-list-group-border-width));
    border-left-width: var(--bs-list-group-border-width);
  }
}
.list-group-flush {
  border-radius: 0;
}
.list-group-flush > .list-group-item {
  border-width: 0 0 var(--bs-list-group-border-width);
}
.list-group-flush > .list-group-item:last-child {
  border-bottom-width: 0;
}
.list-group-item-primary {
  --bs-list-group-color: var(--bs-primary-text-emphasis);
  --bs-list-group-bg: var(--bs-primary-bg-subtle);
  --bs-list-group-border-color: var(--bs-primary-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-primary-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-primary-border-subtle);
  --bs-list-group-active-color: var(--bs-primary-bg-subtle);
  --bs-list-group-active-bg: var(--bs-primary-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-primary-text-emphasis);
}
.list-group-item-secondary {
  --bs-list-group-color: var(--bs-secondary-text-emphasis);
  --bs-list-group-bg: var(--bs-secondary-bg-subtle);
  --bs-list-group-border-color: var(--bs-secondary-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-secondary-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-secondary-border-subtle);
  --bs-list-group-active-color: var(--bs-secondary-bg-subtle);
  --bs-list-group-active-bg: var(--bs-secondary-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-secondary-text-emphasis);
}
.list-group-item-success {
  --bs-list-group-color: var(--bs-success-text-emphasis);
  --bs-list-group-bg: var(--bs-success-bg-subtle);
  --bs-list-group-border-color: var(--bs-success-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-success-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-success-border-subtle);
  --bs-list-group-active-color: var(--bs-success-bg-subtle);
  --bs-list-group-active-bg: var(--bs-success-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-success-text-emphasis);
}
.list-group-item-info {
  --bs-list-group-color: var(--bs-info-text-emphasis);
  --bs-list-group-bg: var(--bs-info-bg-subtle);
  --bs-list-group-border-color: var(--bs-info-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-info-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-info-border-subtle);
  --bs-list-group-active-color: var(--bs-info-bg-subtle);
  --bs-list-group-active-bg: var(--bs-info-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-info-text-emphasis);
}
.list-group-item-warning {
  --bs-list-group-color: var(--bs-warning-text-emphasis);
  --bs-list-group-bg: var(--bs-warning-bg-subtle);
  --bs-list-group-border-color: var(--bs-warning-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-warning-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-warning-border-subtle);
  --bs-list-group-active-color: var(--bs-warning-bg-subtle);
  --bs-list-group-active-bg: var(--bs-warning-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-warning-text-emphasis);
}
.list-group-item-danger {
  --bs-list-group-color: var(--bs-danger-text-emphasis);
  --bs-list-group-bg: var(--bs-danger-bg-subtle);
  --bs-list-group-border-color: var(--bs-danger-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-danger-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-danger-border-subtle);
  --bs-list-group-active-color: var(--bs-danger-bg-subtle);
  --bs-list-group-active-bg: var(--bs-danger-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-danger-text-emphasis);
}
.list-group-item-light {
  --bs-list-group-color: var(--bs-light-text-emphasis);
  --bs-list-group-bg: var(--bs-light-bg-subtle);
  --bs-list-group-border-color: var(--bs-light-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-light-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-light-border-subtle);
  --bs-list-group-active-color: var(--bs-light-bg-subtle);
  --bs-list-group-active-bg: var(--bs-light-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-light-text-emphasis);
}
.list-group-item-dark {
  --bs-list-group-color: var(--bs-dark-text-emphasis);
  --bs-list-group-bg: var(--bs-dark-bg-subtle);
  --bs-list-group-border-color: var(--bs-dark-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-dark-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-dark-border-subtle);
  --bs-list-group-active-color: var(--bs-dark-bg-subtle);
  --bs-list-group-active-bg: var(--bs-dark-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-dark-text-emphasis);
}
.spinner-grow,
.spinner-border {
  display: inline-block;
  width: var(--bs-spinner-width);
  height: var(--bs-spinner-height);
  vertical-align: var(--bs-spinner-vertical-align);
  border-radius: 50%;
  animation: var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name);
}
@keyframes spinner-border {
  to {
    transform: rotate(360deg) /* rtl:ignore */;
  }
}
.spinner-border {
  --bs-spinner-width: 2rem;
  --bs-spinner-height: 2rem;
  --bs-spinner-vertical-align: -0.125em;
  --bs-spinner-border-width: 0.25em;
  --bs-spinner-animation-speed: 0.75s;
  --bs-spinner-animation-name: spinner-border;
  border: var(--bs-spinner-border-width) solid currentcolor;
  border-right-color: transparent;
}
.spinner-border-sm {
  --bs-spinner-width: 1rem;
  --bs-spinner-height: 1rem;
  --bs-spinner-border-width: 0.2em;
}
@keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}
.spinner-grow {
  --bs-spinner-width: 2rem;
  --bs-spinner-height: 2rem;
  --bs-spinner-vertical-align: -0.125em;
  --bs-spinner-animation-speed: 0.75s;
  --bs-spinner-animation-name: spinner-grow;
  background-color: currentcolor;
  opacity: 0;
}
.spinner-grow-sm {
  --bs-spinner-width: 1rem;
  --bs-spinner-height: 1rem;
}
@media (prefers-reduced-motion: reduce) {
  .spinner-border,
  .spinner-grow {
    --bs-spinner-animation-speed: 1.5s;
  }
}
.placeholder {
  display: inline-block;
  min-height: 1em;
  vertical-align: middle;
  cursor: wait;
  background-color: currentcolor;
  opacity: 1;
}
.placeholder.btn::before {
  display: inline-block;
  content: "";
}
.placeholder-xs {
  min-height: 0.6em;
}
.placeholder-sm {
  min-height: 0.8em;
}
.placeholder-lg {
  min-height: 1.2em;
}
.placeholder-glow .placeholder {
  animation: placeholder-glow 2s ease-in-out infinite;
}
@keyframes placeholder-glow {
  50% {
    opacity: 0.5;
  }
}
.placeholder-wave {
  mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.5) 75%, #000 95%);
  mask-size: 200% 100%;
  animation: placeholder-wave 2s linear infinite;
}
@keyframes placeholder-wave {
  100% {
    mask-position: -200% 0%;
  }
}
.clearfix::after {
  display: block;
  clear: both;
  content: "";
}
.text-bg-primary {
  color: #fff !important;
  background-color: RGBA(73, 73, 242, var(--bs-bg-opacity, 1)) !important;
}
.text-bg-secondary {
  color: #000 !important;
  background-color: RGBA(240, 240, 245, var(--bs-bg-opacity, 1)) !important;
}
.text-bg-success {
  color: #fff !important;
  background-color: RGBA(40, 156, 92, var(--bs-bg-opacity, 1)) !important;
}
.text-bg-info {
  color: #000 !important;
  background-color: RGBA(13, 202, 240, var(--bs-bg-opacity, 1)) !important;
}
.text-bg-warning {
  color: #000 !important;
  background-color: RGBA(255, 193, 7, var(--bs-bg-opacity, 1)) !important;
}
.text-bg-danger {
  color: #fff !important;
  background-color: RGBA(219, 44, 73, var(--bs-bg-opacity, 1)) !important;
}
.text-bg-light {
  color: #000 !important;
  background-color: RGBA(240, 240, 245, var(--bs-bg-opacity, 1)) !important;
}
.text-bg-dark {
  color: #fff !important;
  background-color: RGBA(27, 28, 38, var(--bs-bg-opacity, 1)) !important;
}
.link-primary {
  color: RGBA(var(--bs-primary-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-primary-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-primary:hover, .link-primary:focus {
  color: RGBA(58, 58, 194, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(58, 58, 194, var(--bs-link-underline-opacity, 1)) !important;
}
.link-secondary {
  color: RGBA(var(--bs-secondary-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-secondary-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-secondary:hover, .link-secondary:focus {
  color: RGBA(243, 243, 247, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(243, 243, 247, var(--bs-link-underline-opacity, 1)) !important;
}
.link-success {
  color: RGBA(var(--bs-success-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-success-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-success:hover, .link-success:focus {
  color: RGBA(32, 125, 74, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(32, 125, 74, var(--bs-link-underline-opacity, 1)) !important;
}
.link-info {
  color: RGBA(var(--bs-info-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-info-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-info:hover, .link-info:focus {
  color: RGBA(61, 213, 243, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(61, 213, 243, var(--bs-link-underline-opacity, 1)) !important;
}
.link-warning {
  color: RGBA(var(--bs-warning-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-warning-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-warning:hover, .link-warning:focus {
  color: RGBA(255, 205, 57, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(255, 205, 57, var(--bs-link-underline-opacity, 1)) !important;
}
.link-danger {
  color: RGBA(var(--bs-danger-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-danger-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-danger:hover, .link-danger:focus {
  color: RGBA(175, 35, 58, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(175, 35, 58, var(--bs-link-underline-opacity, 1)) !important;
}
.link-light {
  color: RGBA(var(--bs-light-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-light-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-light:hover, .link-light:focus {
  color: RGBA(243, 243, 247, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(243, 243, 247, var(--bs-link-underline-opacity, 1)) !important;
}
.link-dark {
  color: RGBA(var(--bs-dark-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-dark-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-dark:hover, .link-dark:focus {
  color: RGBA(22, 22, 30, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(22, 22, 30, var(--bs-link-underline-opacity, 1)) !important;
}
.link-body-emphasis {
  color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-body-emphasis:hover, .link-body-emphasis:focus {
  color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-opacity, 0.75)) !important;
  text-decoration-color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-underline-opacity, 0.75)) !important;
}
.focus-ring:focus {
  outline: 0;
  box-shadow: var(--bs-focus-ring-x, 0) var(--bs-focus-ring-y, 0) var(--bs-focus-ring-blur, 0) var(--bs-focus-ring-width) var(--bs-focus-ring-color);
}
.icon-link {
  display: inline-flex;
  gap: 0.375rem;
  align-items: center;
  text-decoration-color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 0.5));
  text-underline-offset: 0.25em;
  backface-visibility: hidden;
}
.icon-link > .bi {
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  fill: currentcolor;
  transition: 0.2s ease-in-out transform;
}
@media (prefers-reduced-motion: reduce) {
  .icon-link > .bi {
    transition: none;
  }
}
.icon-link-hover:hover > .bi, .icon-link-hover:focus-visible > .bi {
  transform: var(--bs-icon-link-transform, translate3d(0.25em, 0, 0));
}
.ratio {
  position: relative;
  width: 100%;
}
.ratio::before {
  display: block;
  padding-top: var(--bs-aspect-ratio);
  content: "";
}
.ratio > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.ratio-1x1 {
  --bs-aspect-ratio: 100%;
}
.ratio-4x3 {
  --bs-aspect-ratio: 75%;
}
.ratio-16x9 {
  --bs-aspect-ratio: 56.25%;
}
.ratio-21x9 {
  --bs-aspect-ratio: 42.8571428571%;
}
.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}
.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}
.sticky-top {
  position: sticky;
  top: 0;
  z-index: 1020;
}
.sticky-bottom {
  position: sticky;
  bottom: 0;
  z-index: 1020;
}
@media (min-width: 576px) {
  .sticky-sm-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  .sticky-sm-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
}
@media (min-width: 768px) {
  .sticky-md-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  .sticky-md-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
}
@media (min-width: 992px) {
  .sticky-lg-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  .sticky-lg-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
}
@media (min-width: 1200px) {
  .sticky-xl-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  .sticky-xl-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
}
@media (min-width: 1400px) {
  .sticky-xxl-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  .sticky-xxl-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
}
.hstack {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
}
.vstack {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-self: stretch;
}
.visually-hidden,
.visually-hidden-focusable:not(:focus):not(:focus-within) {
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
.visually-hidden:not(caption),
.visually-hidden-focusable:not(:focus):not(:focus-within):not(caption) {
  position: absolute !important;
}
.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  content: "";
}
.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vr {
  display: inline-block;
  align-self: stretch;
  width: 1px;
  min-height: 1em;
  background-color: currentcolor;
  opacity: 0.25;
}
.align-baseline {
  vertical-align: baseline !important;
}
.align-top {
  vertical-align: top !important;
}
.align-middle {
  vertical-align: middle !important;
}
.align-bottom {
  vertical-align: bottom !important;
}
.align-text-bottom {
  vertical-align: text-bottom !important;
}
.align-text-top {
  vertical-align: text-top !important;
}
.float-start {
  float: left !important;
}
.float-end {
  float: right !important;
}
.float-none {
  float: none !important;
}
.object-fit-contain {
  object-fit: contain !important;
}
.object-fit-cover {
  object-fit: cover !important;
}
.object-fit-fill {
  object-fit: fill !important;
}
.object-fit-scale {
  object-fit: scale-down !important;
}
.object-fit-none {
  object-fit: none !important;
}
.opacity-0 {
  opacity: 0 !important;
}
.opacity-25 {
  opacity: 0.25 !important;
}
.opacity-50 {
  opacity: 0.5 !important;
}
.opacity-75 {
  opacity: 0.75 !important;
}
.opacity-100 {
  opacity: 1 !important;
}
.overflow-auto {
  overflow: auto !important;
}
.overflow-hidden {
  overflow: hidden !important;
}
.overflow-visible {
  overflow: visible !important;
}
.overflow-scroll {
  overflow: scroll !important;
}
.overflow-x-auto {
  overflow-x: auto !important;
}
.overflow-x-hidden {
  overflow-x: hidden !important;
}
.overflow-x-visible {
  overflow-x: visible !important;
}
.overflow-x-scroll {
  overflow-x: scroll !important;
}
.overflow-y-auto {
  overflow-y: auto !important;
}
.overflow-y-hidden {
  overflow-y: hidden !important;
}
.overflow-y-visible {
  overflow-y: visible !important;
}
.overflow-y-scroll {
  overflow-y: scroll !important;
}
.d-inline {
  display: inline !important;
}
.d-inline-block {
  display: inline-block !important;
}
.d-block {
  display: block !important;
}
.d-grid {
  display: grid !important;
}
.d-inline-grid {
  display: inline-grid !important;
}
.d-table {
  display: table !important;
}
.d-table-row {
  display: table-row !important;
}
.d-table-cell {
  display: table-cell !important;
}
.d-flex {
  display: flex !important;
}
.d-inline-flex {
  display: inline-flex !important;
}
.d-none {
  display: none !important;
}
.shadow {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
}
.shadow-sm {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08) !important;
}
.shadow-lg {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08) !important;
}
.shadow-none {
  box-shadow: none !important;
}
.focus-ring-primary {
  --bs-focus-ring-color: rgba(var(--bs-primary-rgb), var(--bs-focus-ring-opacity));
}
.focus-ring-secondary {
  --bs-focus-ring-color: rgba(var(--bs-secondary-rgb), var(--bs-focus-ring-opacity));
}
.focus-ring-success {
  --bs-focus-ring-color: rgba(var(--bs-success-rgb), var(--bs-focus-ring-opacity));
}
.focus-ring-info {
  --bs-focus-ring-color: rgba(var(--bs-info-rgb), var(--bs-focus-ring-opacity));
}
.focus-ring-warning {
  --bs-focus-ring-color: rgba(var(--bs-warning-rgb), var(--bs-focus-ring-opacity));
}
.focus-ring-danger {
  --bs-focus-ring-color: rgba(var(--bs-danger-rgb), var(--bs-focus-ring-opacity));
}
.focus-ring-light {
  --bs-focus-ring-color: rgba(var(--bs-light-rgb), var(--bs-focus-ring-opacity));
}
.focus-ring-dark {
  --bs-focus-ring-color: rgba(var(--bs-dark-rgb), var(--bs-focus-ring-opacity));
}
.position-static {
  position: static !important;
}
.position-relative {
  position: relative !important;
}
.position-absolute {
  position: absolute !important;
}
.position-fixed {
  position: fixed !important;
}
.position-sticky {
  position: sticky !important;
}
.top-0 {
  top: 0 !important;
}
.top-50 {
  top: 50% !important;
}
.top-100 {
  top: 100% !important;
}
.bottom-0 {
  bottom: 0 !important;
}
.bottom-50 {
  bottom: 50% !important;
}
.bottom-100 {
  bottom: 100% !important;
}
.start-0 {
  left: 0 !important;
}
.start-50 {
  left: 50% !important;
}
.start-100 {
  left: 100% !important;
}
.end-0 {
  right: 0 !important;
}
.end-50 {
  right: 50% !important;
}
.end-100 {
  right: 100% !important;
}
.translate-middle {
  transform: translate(-50%, -50%) !important;
}
.translate-middle-x {
  transform: translateX(-50%) !important;
}
.translate-middle-y {
  transform: translateY(-50%) !important;
}
.border {
  border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}
.border-0 {
  border: 0 !important;
}
.border-top {
  border-top: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}
.border-top-0 {
  border-top: 0 !important;
}
.border-end {
  border-right: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}
.border-end-0 {
  border-right: 0 !important;
}
.border-bottom {
  border-bottom: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}
.border-bottom-0 {
  border-bottom: 0 !important;
}
.border-start {
  border-left: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}
.border-start-0 {
  border-left: 0 !important;
}
.border-primary {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-primary-rgb), var(--bs-border-opacity)) !important;
}
.border-secondary {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-secondary-rgb), var(--bs-border-opacity)) !important;
}
.border-success {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-success-rgb), var(--bs-border-opacity)) !important;
}
.border-info {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-info-rgb), var(--bs-border-opacity)) !important;
}
.border-warning {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-warning-rgb), var(--bs-border-opacity)) !important;
}
.border-danger {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-danger-rgb), var(--bs-border-opacity)) !important;
}
.border-light {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-light-rgb), var(--bs-border-opacity)) !important;
}
.border-dark {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-dark-rgb), var(--bs-border-opacity)) !important;
}
.border-black {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-black-rgb), var(--bs-border-opacity)) !important;
}
.border-white {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-white-rgb), var(--bs-border-opacity)) !important;
}
.border-primary-subtle {
  border-color: var(--bs-primary-border-subtle) !important;
}
.border-secondary-subtle {
  border-color: var(--bs-secondary-border-subtle) !important;
}
.border-success-subtle {
  border-color: var(--bs-success-border-subtle) !important;
}
.border-info-subtle {
  border-color: var(--bs-info-border-subtle) !important;
}
.border-warning-subtle {
  border-color: var(--bs-warning-border-subtle) !important;
}
.border-danger-subtle {
  border-color: var(--bs-danger-border-subtle) !important;
}
.border-light-subtle {
  border-color: var(--bs-light-border-subtle) !important;
}
.border-dark-subtle {
  border-color: var(--bs-dark-border-subtle) !important;
}
.border-1 {
  border-width: 1px !important;
}
.border-2 {
  border-width: 2px !important;
}
.border-3 {
  border-width: 3px !important;
}
.border-4 {
  border-width: 4px !important;
}
.border-5 {
  border-width: 5px !important;
}
.border-opacity-10 {
  --bs-border-opacity: 0.1;
}
.border-opacity-25 {
  --bs-border-opacity: 0.25;
}
.border-opacity-50 {
  --bs-border-opacity: 0.5;
}
.border-opacity-75 {
  --bs-border-opacity: 0.75;
}
.border-opacity-100 {
  --bs-border-opacity: 1;
}
.w-25 {
  width: 25% !important;
}
.w-50 {
  width: 50% !important;
}
.w-75 {
  width: 75% !important;
}
.w-100 {
  width: 100% !important;
}
.w-auto {
  width: auto !important;
}
.mw-100 {
  max-width: 100% !important;
}
.vw-100 {
  width: 100vw !important;
}
.min-vw-100 {
  min-width: 100vw !important;
}
.h-25 {
  height: 25% !important;
}
.h-50 {
  height: 50% !important;
}
.h-75 {
  height: 75% !important;
}
.h-100 {
  height: 100% !important;
}
.h-auto {
  height: auto !important;
}
.mh-100 {
  max-height: 100% !important;
}
.vh-100 {
  height: 100vh !important;
}
.min-vh-100 {
  min-height: 100vh !important;
}
.flex-fill {
  flex: 1 1 auto !important;
}
.flex-row {
  flex-direction: row !important;
}
.flex-column {
  flex-direction: column !important;
}
.flex-row-reverse {
  flex-direction: row-reverse !important;
}
.flex-column-reverse {
  flex-direction: column-reverse !important;
}
.flex-grow-0 {
  flex-grow: 0 !important;
}
.flex-grow-1 {
  flex-grow: 1 !important;
}
.flex-shrink-0 {
  flex-shrink: 0 !important;
}
.flex-shrink-1 {
  flex-shrink: 1 !important;
}
.flex-wrap {
  flex-wrap: wrap !important;
}
.flex-nowrap {
  flex-wrap: nowrap !important;
}
.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}
.justify-content-start {
  justify-content: flex-start !important;
}
.justify-content-end {
  justify-content: flex-end !important;
}
.justify-content-center {
  justify-content: center !important;
}
.justify-content-between {
  justify-content: space-between !important;
}
.justify-content-around {
  justify-content: space-around !important;
}
.justify-content-evenly {
  justify-content: space-evenly !important;
}
.align-items-start {
  align-items: flex-start !important;
}
.align-items-end {
  align-items: flex-end !important;
}
.align-items-center {
  align-items: center !important;
}
.align-items-baseline {
  align-items: baseline !important;
}
.align-items-stretch {
  align-items: stretch !important;
}
.align-content-start {
  align-content: flex-start !important;
}
.align-content-end {
  align-content: flex-end !important;
}
.align-content-center {
  align-content: center !important;
}
.align-content-between {
  align-content: space-between !important;
}
.align-content-around {
  align-content: space-around !important;
}
.align-content-stretch {
  align-content: stretch !important;
}
.align-self-auto {
  align-self: auto !important;
}
.align-self-start {
  align-self: flex-start !important;
}
.align-self-end {
  align-self: flex-end !important;
}
.align-self-center {
  align-self: center !important;
}
.align-self-baseline {
  align-self: baseline !important;
}
.align-self-stretch {
  align-self: stretch !important;
}
.order-first {
  order: -1 !important;
}
.order-0 {
  order: 0 !important;
}
.order-1 {
  order: 1 !important;
}
.order-2 {
  order: 2 !important;
}
.order-3 {
  order: 3 !important;
}
.order-4 {
  order: 4 !important;
}
.order-5 {
  order: 5 !important;
}
.order-last {
  order: 6 !important;
}
.m-0 {
  margin: 0 !important;
}
.m-1 {
  margin: 4px !important;
}
.m-2 {
  margin: 8px !important;
}
.m-3 {
  margin: 16px !important;
}
.m-4 {
  margin: 24px !important;
}
.m-5 {
  margin: 48px !important;
}
.m-auto {
  margin: auto !important;
}
.mx-0 {
  margin-right: 0 !important;
  margin-left: 0 !important;
}
.mx-1 {
  margin-right: 4px !important;
  margin-left: 4px !important;
}
.mx-2 {
  margin-right: 8px !important;
  margin-left: 8px !important;
}
.mx-3 {
  margin-right: 16px !important;
  margin-left: 16px !important;
}
.mx-4 {
  margin-right: 24px !important;
  margin-left: 24px !important;
}
.mx-5 {
  margin-right: 48px !important;
  margin-left: 48px !important;
}
.mx-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}
.my-0 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
.my-1 {
  margin-top: 4px !important;
  margin-bottom: 4px !important;
}
.my-2 {
  margin-top: 8px !important;
  margin-bottom: 8px !important;
}
.my-3 {
  margin-top: 16px !important;
  margin-bottom: 16px !important;
}
.my-4 {
  margin-top: 24px !important;
  margin-bottom: 24px !important;
}
.my-5 {
  margin-top: 48px !important;
  margin-bottom: 48px !important;
}
.my-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;
}
.mt-0 {
  margin-top: 0 !important;
}
.mt-1 {
  margin-top: 4px !important;
}
.mt-2 {
  margin-top: 8px !important;
}
.mt-3 {
  margin-top: 16px !important;
}
.mt-4 {
  margin-top: 24px !important;
}
.mt-5 {
  margin-top: 48px !important;
}
.mt-auto {
  margin-top: auto !important;
}
.me-0 {
  margin-right: 0 !important;
}
.me-1 {
  margin-right: 4px !important;
}
.me-2 {
  margin-right: 8px !important;
}
.me-3 {
  margin-right: 16px !important;
}
.me-4 {
  margin-right: 24px !important;
}
.me-5 {
  margin-right: 48px !important;
}
.me-auto {
  margin-right: auto !important;
}
.mb-0 {
  margin-bottom: 0 !important;
}
.mb-1 {
  margin-bottom: 4px !important;
}
.mb-2 {
  margin-bottom: 8px !important;
}
.mb-3 {
  margin-bottom: 16px !important;
}
.mb-4 {
  margin-bottom: 24px !important;
}
.mb-5 {
  margin-bottom: 48px !important;
}
.mb-auto {
  margin-bottom: auto !important;
}
.ms-0 {
  margin-left: 0 !important;
}
.ms-1 {
  margin-left: 4px !important;
}
.ms-2 {
  margin-left: 8px !important;
}
.ms-3 {
  margin-left: 16px !important;
}
.ms-4 {
  margin-left: 24px !important;
}
.ms-5 {
  margin-left: 48px !important;
}
.ms-auto {
  margin-left: auto !important;
}
.p-0 {
  padding: 0 !important;
}
.p-1 {
  padding: 4px !important;
}
.p-2 {
  padding: 8px !important;
}
.p-3 {
  padding: 16px !important;
}
.p-4 {
  padding: 24px !important;
}
.p-5 {
  padding: 48px !important;
}
.px-0 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}
.px-1 {
  padding-right: 4px !important;
  padding-left: 4px !important;
}
.px-2 {
  padding-right: 8px !important;
  padding-left: 8px !important;
}
.px-3 {
  padding-right: 16px !important;
  padding-left: 16px !important;
}
.px-4 {
  padding-right: 24px !important;
  padding-left: 24px !important;
}
.px-5 {
  padding-right: 48px !important;
  padding-left: 48px !important;
}
.py-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
.py-1 {
  padding-top: 4px !important;
  padding-bottom: 4px !important;
}
.py-2 {
  padding-top: 8px !important;
  padding-bottom: 8px !important;
}
.py-3 {
  padding-top: 16px !important;
  padding-bottom: 16px !important;
}
.py-4 {
  padding-top: 24px !important;
  padding-bottom: 24px !important;
}
.py-5 {
  padding-top: 48px !important;
  padding-bottom: 48px !important;
}
.pt-0 {
  padding-top: 0 !important;
}
.pt-1 {
  padding-top: 4px !important;
}
.pt-2 {
  padding-top: 8px !important;
}
.pt-3 {
  padding-top: 16px !important;
}
.pt-4 {
  padding-top: 24px !important;
}
.pt-5 {
  padding-top: 48px !important;
}
.pe-0 {
  padding-right: 0 !important;
}
.pe-1 {
  padding-right: 4px !important;
}
.pe-2 {
  padding-right: 8px !important;
}
.pe-3 {
  padding-right: 16px !important;
}
.pe-4 {
  padding-right: 24px !important;
}
.pe-5 {
  padding-right: 48px !important;
}
.pb-0 {
  padding-bottom: 0 !important;
}
.pb-1 {
  padding-bottom: 4px !important;
}
.pb-2 {
  padding-bottom: 8px !important;
}
.pb-3 {
  padding-bottom: 16px !important;
}
.pb-4 {
  padding-bottom: 24px !important;
}
.pb-5 {
  padding-bottom: 48px !important;
}
.ps-0 {
  padding-left: 0 !important;
}
.ps-1 {
  padding-left: 4px !important;
}
.ps-2 {
  padding-left: 8px !important;
}
.ps-3 {
  padding-left: 16px !important;
}
.ps-4 {
  padding-left: 24px !important;
}
.ps-5 {
  padding-left: 48px !important;
}
.gap-0 {
  gap: 0 !important;
}
.gap-1 {
  gap: 4px !important;
}
.gap-2 {
  gap: 8px !important;
}
.gap-3 {
  gap: 16px !important;
}
.gap-4 {
  gap: 24px !important;
}
.gap-5 {
  gap: 48px !important;
}
.row-gap-0 {
  row-gap: 0 !important;
}
.row-gap-1 {
  row-gap: 4px !important;
}
.row-gap-2 {
  row-gap: 8px !important;
}
.row-gap-3 {
  row-gap: 16px !important;
}
.row-gap-4 {
  row-gap: 24px !important;
}
.row-gap-5 {
  row-gap: 48px !important;
}
.column-gap-0 {
  column-gap: 0 !important;
}
.column-gap-1 {
  column-gap: 4px !important;
}
.column-gap-2 {
  column-gap: 8px !important;
}
.column-gap-3 {
  column-gap: 16px !important;
}
.column-gap-4 {
  column-gap: 24px !important;
}
.column-gap-5 {
  column-gap: 48px !important;
}
.font-monospace {
  font-family: var(--bs-font-monospace) !important;
}
.fs-1 {
  font-size: 1rem !important;
}
.fs-2 {
  font-size: 1rem !important;
}
.fs-3 {
  font-size: 0.875rem !important;
}
.fs-4 {
  font-size: calc(1.25625rem + 0.075vw) !important;
}
.fs-5 {
  font-size: 1.09375rem !important;
}
.fs-6 {
  font-size: 0.875rem !important;
}
.fst-italic {
  font-style: italic !important;
}
.fst-normal {
  font-style: normal !important;
}
.fw-lighter {
  font-weight: lighter !important;
}
.fw-light {
  font-weight: 300 !important;
}
.fw-normal {
  font-weight: 400 !important;
}
.fw-medium {
  font-weight: 500 !important;
}
.fw-semibold {
  font-weight: 600 !important;
}
.fw-bold {
  font-weight: 700 !important;
}
.fw-bolder {
  font-weight: bolder !important;
}
.lh-1 {
  line-height: 1 !important;
}
.lh-sm {
  line-height: 1.25 !important;
}
.lh-base {
  line-height: 1.3 !important;
}
.lh-lg {
  line-height: 2 !important;
}
.text-start {
  text-align: left !important;
}
.text-end {
  text-align: right !important;
}
.text-center {
  text-align: center !important;
}
.text-decoration-none {
  text-decoration: none !important;
}
.text-decoration-underline {
  text-decoration: underline !important;
}
.text-decoration-line-through {
  text-decoration: line-through !important;
}
.text-lowercase {
  text-transform: lowercase !important;
}
.text-uppercase {
  text-transform: uppercase !important;
}
.text-capitalize {
  text-transform: capitalize !important;
}
.text-wrap {
  white-space: normal !important;
}
.text-nowrap {
  white-space: nowrap !important;
}
/* rtl:begin:remove */
.text-break {
  word-wrap: break-word !important;
  word-break: break-word !important;
}
/* rtl:end:remove */
.text-primary {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
}
.text-secondary {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important;
}
.text-success {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important;
}
.text-info {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important;
}
.text-warning {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important;
}
.text-danger {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important;
}
.text-light {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;
}
.text-dark {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important;
}
.text-black {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important;
}
.text-white {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;
}
.text-body {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-body-color-rgb), var(--bs-text-opacity)) !important;
}
.text-muted {
  --bs-text-opacity: 1;
  color: var(--bs-secondary-color) !important;
}
.text-black-50 {
  --bs-text-opacity: 1;
  color: rgba(0, 0, 0, 0.5) !important;
}
.text-white-50 {
  --bs-text-opacity: 1;
  color: rgba(255, 255, 255, 0.5) !important;
}
.text-body-secondary {
  --bs-text-opacity: 1;
  color: var(--bs-secondary-color) !important;
}
.text-body-tertiary {
  --bs-text-opacity: 1;
  color: var(--bs-tertiary-color) !important;
}
.text-body-emphasis {
  --bs-text-opacity: 1;
  color: var(--bs-emphasis-color) !important;
}
.text-reset {
  --bs-text-opacity: 1;
  color: inherit !important;
}
.text-opacity-25 {
  --bs-text-opacity: 0.25;
}
.text-opacity-50 {
  --bs-text-opacity: 0.5;
}
.text-opacity-75 {
  --bs-text-opacity: 0.75;
}
.text-opacity-100 {
  --bs-text-opacity: 1;
}
.text-primary-emphasis {
  color: var(--bs-primary-text-emphasis) !important;
}
.text-secondary-emphasis {
  color: var(--bs-secondary-text-emphasis) !important;
}
.text-success-emphasis {
  color: var(--bs-success-text-emphasis) !important;
}
.text-info-emphasis {
  color: var(--bs-info-text-emphasis) !important;
}
.text-warning-emphasis {
  color: var(--bs-warning-text-emphasis) !important;
}
.text-danger-emphasis {
  color: var(--bs-danger-text-emphasis) !important;
}
.text-light-emphasis {
  color: var(--bs-light-text-emphasis) !important;
}
.text-dark-emphasis {
  color: var(--bs-dark-text-emphasis) !important;
}
.link-opacity-10 {
  --bs-link-opacity: 0.1;
}
.link-opacity-10-hover:hover {
  --bs-link-opacity: 0.1;
}
.link-opacity-25 {
  --bs-link-opacity: 0.25;
}
.link-opacity-25-hover:hover {
  --bs-link-opacity: 0.25;
}
.link-opacity-50 {
  --bs-link-opacity: 0.5;
}
.link-opacity-50-hover:hover {
  --bs-link-opacity: 0.5;
}
.link-opacity-75 {
  --bs-link-opacity: 0.75;
}
.link-opacity-75-hover:hover {
  --bs-link-opacity: 0.75;
}
.link-opacity-100 {
  --bs-link-opacity: 1;
}
.link-opacity-100-hover:hover {
  --bs-link-opacity: 1;
}
.link-offset-1 {
  text-underline-offset: 0.125em !important;
}
.link-offset-1-hover:hover {
  text-underline-offset: 0.125em !important;
}
.link-offset-2 {
  text-underline-offset: 0.25em !important;
}
.link-offset-2-hover:hover {
  text-underline-offset: 0.25em !important;
}
.link-offset-3 {
  text-underline-offset: 0.375em !important;
}
.link-offset-3-hover:hover {
  text-underline-offset: 0.375em !important;
}
.link-underline-primary {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-primary-rgb), var(--bs-link-underline-opacity)) !important;
}
.link-underline-secondary {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-secondary-rgb), var(--bs-link-underline-opacity)) !important;
}
.link-underline-success {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-success-rgb), var(--bs-link-underline-opacity)) !important;
}
.link-underline-info {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-info-rgb), var(--bs-link-underline-opacity)) !important;
}
.link-underline-warning {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-warning-rgb), var(--bs-link-underline-opacity)) !important;
}
.link-underline-danger {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-danger-rgb), var(--bs-link-underline-opacity)) !important;
}
.link-underline-light {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-light-rgb), var(--bs-link-underline-opacity)) !important;
}
.link-underline-dark {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-dark-rgb), var(--bs-link-underline-opacity)) !important;
}
.link-underline {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-link-color-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-underline-opacity-0 {
  --bs-link-underline-opacity: 0;
}
.link-underline-opacity-0-hover:hover {
  --bs-link-underline-opacity: 0;
}
.link-underline-opacity-10 {
  --bs-link-underline-opacity: 0.1;
}
.link-underline-opacity-10-hover:hover {
  --bs-link-underline-opacity: 0.1;
}
.link-underline-opacity-25 {
  --bs-link-underline-opacity: 0.25;
}
.link-underline-opacity-25-hover:hover {
  --bs-link-underline-opacity: 0.25;
}
.link-underline-opacity-50 {
  --bs-link-underline-opacity: 0.5;
}
.link-underline-opacity-50-hover:hover {
  --bs-link-underline-opacity: 0.5;
}
.link-underline-opacity-75 {
  --bs-link-underline-opacity: 0.75;
}
.link-underline-opacity-75-hover:hover {
  --bs-link-underline-opacity: 0.75;
}
.link-underline-opacity-100 {
  --bs-link-underline-opacity: 1;
}
.link-underline-opacity-100-hover:hover {
  --bs-link-underline-opacity: 1;
}
.bg-primary {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important;
}
.bg-secondary {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important;
}
.bg-success {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;
}
.bg-info {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important;
}
.bg-warning {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important;
}
.bg-danger {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important;
}
.bg-light {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
}
.bg-dark {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;
}
.bg-black {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-black-rgb), var(--bs-bg-opacity)) !important;
}
.bg-white {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important;
}
.bg-body {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-body-bg-rgb), var(--bs-bg-opacity)) !important;
}
.bg-transparent {
  --bs-bg-opacity: 1;
  background-color: transparent !important;
}
.bg-body-secondary {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-secondary-bg-rgb), var(--bs-bg-opacity)) !important;
}
.bg-body-tertiary {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-tertiary-bg-rgb), var(--bs-bg-opacity)) !important;
}
.bg-opacity-10 {
  --bs-bg-opacity: 0.1;
}
.bg-opacity-25 {
  --bs-bg-opacity: 0.25;
}
.bg-opacity-50 {
  --bs-bg-opacity: 0.5;
}
.bg-opacity-75 {
  --bs-bg-opacity: 0.75;
}
.bg-opacity-100 {
  --bs-bg-opacity: 1;
}
.bg-primary-subtle {
  background-color: var(--bs-primary-bg-subtle) !important;
}
.bg-secondary-subtle {
  background-color: var(--bs-secondary-bg-subtle) !important;
}
.bg-success-subtle {
  background-color: var(--bs-success-bg-subtle) !important;
}
.bg-info-subtle {
  background-color: var(--bs-info-bg-subtle) !important;
}
.bg-warning-subtle {
  background-color: var(--bs-warning-bg-subtle) !important;
}
.bg-danger-subtle {
  background-color: var(--bs-danger-bg-subtle) !important;
}
.bg-light-subtle {
  background-color: var(--bs-light-bg-subtle) !important;
}
.bg-dark-subtle {
  background-color: var(--bs-dark-bg-subtle) !important;
}
.bg-gradient {
  background-image: var(--bs-gradient) !important;
}
.user-select-all {
  user-select: all !important;
}
.user-select-auto {
  user-select: auto !important;
}
.user-select-none {
  user-select: none !important;
}
.pe-none {
  pointer-events: none !important;
}
.pe-auto {
  pointer-events: auto !important;
}
.rounded {
  border-radius: var(--bs-border-radius) !important;
}
.rounded-0 {
  border-radius: 0 !important;
}
.rounded-1 {
  border-radius: var(--bs-border-radius-sm) !important;
}
.rounded-2 {
  border-radius: var(--bs-border-radius) !important;
}
.rounded-3 {
  border-radius: var(--bs-border-radius-lg) !important;
}
.rounded-4 {
  border-radius: var(--bs-border-radius-xl) !important;
}
.rounded-5 {
  border-radius: var(--bs-border-radius-xxl) !important;
}
.rounded-circle {
  border-radius: 50% !important;
}
.rounded-pill {
  border-radius: var(--bs-border-radius-pill) !important;
}
.rounded-top {
  border-top-left-radius: var(--bs-border-radius) !important;
  border-top-right-radius: var(--bs-border-radius) !important;
}
.rounded-top-0 {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}
.rounded-top-1 {
  border-top-left-radius: var(--bs-border-radius-sm) !important;
  border-top-right-radius: var(--bs-border-radius-sm) !important;
}
.rounded-top-2 {
  border-top-left-radius: var(--bs-border-radius) !important;
  border-top-right-radius: var(--bs-border-radius) !important;
}
.rounded-top-3 {
  border-top-left-radius: var(--bs-border-radius-lg) !important;
  border-top-right-radius: var(--bs-border-radius-lg) !important;
}
.rounded-top-4 {
  border-top-left-radius: var(--bs-border-radius-xl) !important;
  border-top-right-radius: var(--bs-border-radius-xl) !important;
}
.rounded-top-5 {
  border-top-left-radius: var(--bs-border-radius-xxl) !important;
  border-top-right-radius: var(--bs-border-radius-xxl) !important;
}
.rounded-top-circle {
  border-top-left-radius: 50% !important;
  border-top-right-radius: 50% !important;
}
.rounded-top-pill {
  border-top-left-radius: var(--bs-border-radius-pill) !important;
  border-top-right-radius: var(--bs-border-radius-pill) !important;
}
.rounded-end {
  border-top-right-radius: var(--bs-border-radius) !important;
  border-bottom-right-radius: var(--bs-border-radius) !important;
}
.rounded-end-0 {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}
.rounded-end-1 {
  border-top-right-radius: var(--bs-border-radius-sm) !important;
  border-bottom-right-radius: var(--bs-border-radius-sm) !important;
}
.rounded-end-2 {
  border-top-right-radius: var(--bs-border-radius) !important;
  border-bottom-right-radius: var(--bs-border-radius) !important;
}
.rounded-end-3 {
  border-top-right-radius: var(--bs-border-radius-lg) !important;
  border-bottom-right-radius: var(--bs-border-radius-lg) !important;
}
.rounded-end-4 {
  border-top-right-radius: var(--bs-border-radius-xl) !important;
  border-bottom-right-radius: var(--bs-border-radius-xl) !important;
}
.rounded-end-5 {
  border-top-right-radius: var(--bs-border-radius-xxl) !important;
  border-bottom-right-radius: var(--bs-border-radius-xxl) !important;
}
.rounded-end-circle {
  border-top-right-radius: 50% !important;
  border-bottom-right-radius: 50% !important;
}
.rounded-end-pill {
  border-top-right-radius: var(--bs-border-radius-pill) !important;
  border-bottom-right-radius: var(--bs-border-radius-pill) !important;
}
.rounded-bottom {
  border-bottom-right-radius: var(--bs-border-radius) !important;
  border-bottom-left-radius: var(--bs-border-radius) !important;
}
.rounded-bottom-0 {
  border-bottom-right-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}
.rounded-bottom-1 {
  border-bottom-right-radius: var(--bs-border-radius-sm) !important;
  border-bottom-left-radius: var(--bs-border-radius-sm) !important;
}
.rounded-bottom-2 {
  border-bottom-right-radius: var(--bs-border-radius) !important;
  border-bottom-left-radius: var(--bs-border-radius) !important;
}
.rounded-bottom-3 {
  border-bottom-right-radius: var(--bs-border-radius-lg) !important;
  border-bottom-left-radius: var(--bs-border-radius-lg) !important;
}
.rounded-bottom-4 {
  border-bottom-right-radius: var(--bs-border-radius-xl) !important;
  border-bottom-left-radius: var(--bs-border-radius-xl) !important;
}
.rounded-bottom-5 {
  border-bottom-right-radius: var(--bs-border-radius-xxl) !important;
  border-bottom-left-radius: var(--bs-border-radius-xxl) !important;
}
.rounded-bottom-circle {
  border-bottom-right-radius: 50% !important;
  border-bottom-left-radius: 50% !important;
}
.rounded-bottom-pill {
  border-bottom-right-radius: var(--bs-border-radius-pill) !important;
  border-bottom-left-radius: var(--bs-border-radius-pill) !important;
}
.rounded-start {
  border-bottom-left-radius: var(--bs-border-radius) !important;
  border-top-left-radius: var(--bs-border-radius) !important;
}
.rounded-start-0 {
  border-bottom-left-radius: 0 !important;
  border-top-left-radius: 0 !important;
}
.rounded-start-1 {
  border-bottom-left-radius: var(--bs-border-radius-sm) !important;
  border-top-left-radius: var(--bs-border-radius-sm) !important;
}
.rounded-start-2 {
  border-bottom-left-radius: var(--bs-border-radius) !important;
  border-top-left-radius: var(--bs-border-radius) !important;
}
.rounded-start-3 {
  border-bottom-left-radius: var(--bs-border-radius-lg) !important;
  border-top-left-radius: var(--bs-border-radius-lg) !important;
}
.rounded-start-4 {
  border-bottom-left-radius: var(--bs-border-radius-xl) !important;
  border-top-left-radius: var(--bs-border-radius-xl) !important;
}
.rounded-start-5 {
  border-bottom-left-radius: var(--bs-border-radius-xxl) !important;
  border-top-left-radius: var(--bs-border-radius-xxl) !important;
}
.rounded-start-circle {
  border-bottom-left-radius: 50% !important;
  border-top-left-radius: 50% !important;
}
.rounded-start-pill {
  border-bottom-left-radius: var(--bs-border-radius-pill) !important;
  border-top-left-radius: var(--bs-border-radius-pill) !important;
}
.visible {
  visibility: visible !important;
}
.invisible {
  visibility: hidden !important;
}
.z-n1 {
  z-index: -1 !important;
}
.z-0 {
  z-index: 0 !important;
}
.z-1 {
  z-index: 1 !important;
}
.z-2 {
  z-index: 2 !important;
}
.z-3 {
  z-index: 3 !important;
}
@media (min-width: 576px) {
  .float-sm-start {
    float: left !important;
  }
  .float-sm-end {
    float: right !important;
  }
  .float-sm-none {
    float: none !important;
  }
  .object-fit-sm-contain {
    object-fit: contain !important;
  }
  .object-fit-sm-cover {
    object-fit: cover !important;
  }
  .object-fit-sm-fill {
    object-fit: fill !important;
  }
  .object-fit-sm-scale {
    object-fit: scale-down !important;
  }
  .object-fit-sm-none {
    object-fit: none !important;
  }
  .d-sm-inline {
    display: inline !important;
  }
  .d-sm-inline-block {
    display: inline-block !important;
  }
  .d-sm-block {
    display: block !important;
  }
  .d-sm-grid {
    display: grid !important;
  }
  .d-sm-inline-grid {
    display: inline-grid !important;
  }
  .d-sm-table {
    display: table !important;
  }
  .d-sm-table-row {
    display: table-row !important;
  }
  .d-sm-table-cell {
    display: table-cell !important;
  }
  .d-sm-flex {
    display: flex !important;
  }
  .d-sm-inline-flex {
    display: inline-flex !important;
  }
  .d-sm-none {
    display: none !important;
  }
  .flex-sm-fill {
    flex: 1 1 auto !important;
  }
  .flex-sm-row {
    flex-direction: row !important;
  }
  .flex-sm-column {
    flex-direction: column !important;
  }
  .flex-sm-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-sm-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-sm-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-sm-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-sm-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-sm-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-sm-wrap {
    flex-wrap: wrap !important;
  }
  .flex-sm-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-sm-start {
    justify-content: flex-start !important;
  }
  .justify-content-sm-end {
    justify-content: flex-end !important;
  }
  .justify-content-sm-center {
    justify-content: center !important;
  }
  .justify-content-sm-between {
    justify-content: space-between !important;
  }
  .justify-content-sm-around {
    justify-content: space-around !important;
  }
  .justify-content-sm-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-sm-start {
    align-items: flex-start !important;
  }
  .align-items-sm-end {
    align-items: flex-end !important;
  }
  .align-items-sm-center {
    align-items: center !important;
  }
  .align-items-sm-baseline {
    align-items: baseline !important;
  }
  .align-items-sm-stretch {
    align-items: stretch !important;
  }
  .align-content-sm-start {
    align-content: flex-start !important;
  }
  .align-content-sm-end {
    align-content: flex-end !important;
  }
  .align-content-sm-center {
    align-content: center !important;
  }
  .align-content-sm-between {
    align-content: space-between !important;
  }
  .align-content-sm-around {
    align-content: space-around !important;
  }
  .align-content-sm-stretch {
    align-content: stretch !important;
  }
  .align-self-sm-auto {
    align-self: auto !important;
  }
  .align-self-sm-start {
    align-self: flex-start !important;
  }
  .align-self-sm-end {
    align-self: flex-end !important;
  }
  .align-self-sm-center {
    align-self: center !important;
  }
  .align-self-sm-baseline {
    align-self: baseline !important;
  }
  .align-self-sm-stretch {
    align-self: stretch !important;
  }
  .order-sm-first {
    order: -1 !important;
  }
  .order-sm-0 {
    order: 0 !important;
  }
  .order-sm-1 {
    order: 1 !important;
  }
  .order-sm-2 {
    order: 2 !important;
  }
  .order-sm-3 {
    order: 3 !important;
  }
  .order-sm-4 {
    order: 4 !important;
  }
  .order-sm-5 {
    order: 5 !important;
  }
  .order-sm-last {
    order: 6 !important;
  }
  .m-sm-0 {
    margin: 0 !important;
  }
  .m-sm-1 {
    margin: 4px !important;
  }
  .m-sm-2 {
    margin: 8px !important;
  }
  .m-sm-3 {
    margin: 16px !important;
  }
  .m-sm-4 {
    margin: 24px !important;
  }
  .m-sm-5 {
    margin: 48px !important;
  }
  .m-sm-auto {
    margin: auto !important;
  }
  .mx-sm-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-sm-1 {
    margin-right: 4px !important;
    margin-left: 4px !important;
  }
  .mx-sm-2 {
    margin-right: 8px !important;
    margin-left: 8px !important;
  }
  .mx-sm-3 {
    margin-right: 16px !important;
    margin-left: 16px !important;
  }
  .mx-sm-4 {
    margin-right: 24px !important;
    margin-left: 24px !important;
  }
  .mx-sm-5 {
    margin-right: 48px !important;
    margin-left: 48px !important;
  }
  .mx-sm-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-sm-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-sm-1 {
    margin-top: 4px !important;
    margin-bottom: 4px !important;
  }
  .my-sm-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }
  .my-sm-3 {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }
  .my-sm-4 {
    margin-top: 24px !important;
    margin-bottom: 24px !important;
  }
  .my-sm-5 {
    margin-top: 48px !important;
    margin-bottom: 48px !important;
  }
  .my-sm-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-sm-0 {
    margin-top: 0 !important;
  }
  .mt-sm-1 {
    margin-top: 4px !important;
  }
  .mt-sm-2 {
    margin-top: 8px !important;
  }
  .mt-sm-3 {
    margin-top: 16px !important;
  }
  .mt-sm-4 {
    margin-top: 24px !important;
  }
  .mt-sm-5 {
    margin-top: 48px !important;
  }
  .mt-sm-auto {
    margin-top: auto !important;
  }
  .me-sm-0 {
    margin-right: 0 !important;
  }
  .me-sm-1 {
    margin-right: 4px !important;
  }
  .me-sm-2 {
    margin-right: 8px !important;
  }
  .me-sm-3 {
    margin-right: 16px !important;
  }
  .me-sm-4 {
    margin-right: 24px !important;
  }
  .me-sm-5 {
    margin-right: 48px !important;
  }
  .me-sm-auto {
    margin-right: auto !important;
  }
  .mb-sm-0 {
    margin-bottom: 0 !important;
  }
  .mb-sm-1 {
    margin-bottom: 4px !important;
  }
  .mb-sm-2 {
    margin-bottom: 8px !important;
  }
  .mb-sm-3 {
    margin-bottom: 16px !important;
  }
  .mb-sm-4 {
    margin-bottom: 24px !important;
  }
  .mb-sm-5 {
    margin-bottom: 48px !important;
  }
  .mb-sm-auto {
    margin-bottom: auto !important;
  }
  .ms-sm-0 {
    margin-left: 0 !important;
  }
  .ms-sm-1 {
    margin-left: 4px !important;
  }
  .ms-sm-2 {
    margin-left: 8px !important;
  }
  .ms-sm-3 {
    margin-left: 16px !important;
  }
  .ms-sm-4 {
    margin-left: 24px !important;
  }
  .ms-sm-5 {
    margin-left: 48px !important;
  }
  .ms-sm-auto {
    margin-left: auto !important;
  }
  .p-sm-0 {
    padding: 0 !important;
  }
  .p-sm-1 {
    padding: 4px !important;
  }
  .p-sm-2 {
    padding: 8px !important;
  }
  .p-sm-3 {
    padding: 16px !important;
  }
  .p-sm-4 {
    padding: 24px !important;
  }
  .p-sm-5 {
    padding: 48px !important;
  }
  .px-sm-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-sm-1 {
    padding-right: 4px !important;
    padding-left: 4px !important;
  }
  .px-sm-2 {
    padding-right: 8px !important;
    padding-left: 8px !important;
  }
  .px-sm-3 {
    padding-right: 16px !important;
    padding-left: 16px !important;
  }
  .px-sm-4 {
    padding-right: 24px !important;
    padding-left: 24px !important;
  }
  .px-sm-5 {
    padding-right: 48px !important;
    padding-left: 48px !important;
  }
  .py-sm-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-sm-1 {
    padding-top: 4px !important;
    padding-bottom: 4px !important;
  }
  .py-sm-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }
  .py-sm-3 {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }
  .py-sm-4 {
    padding-top: 24px !important;
    padding-bottom: 24px !important;
  }
  .py-sm-5 {
    padding-top: 48px !important;
    padding-bottom: 48px !important;
  }
  .pt-sm-0 {
    padding-top: 0 !important;
  }
  .pt-sm-1 {
    padding-top: 4px !important;
  }
  .pt-sm-2 {
    padding-top: 8px !important;
  }
  .pt-sm-3 {
    padding-top: 16px !important;
  }
  .pt-sm-4 {
    padding-top: 24px !important;
  }
  .pt-sm-5 {
    padding-top: 48px !important;
  }
  .pe-sm-0 {
    padding-right: 0 !important;
  }
  .pe-sm-1 {
    padding-right: 4px !important;
  }
  .pe-sm-2 {
    padding-right: 8px !important;
  }
  .pe-sm-3 {
    padding-right: 16px !important;
  }
  .pe-sm-4 {
    padding-right: 24px !important;
  }
  .pe-sm-5 {
    padding-right: 48px !important;
  }
  .pb-sm-0 {
    padding-bottom: 0 !important;
  }
  .pb-sm-1 {
    padding-bottom: 4px !important;
  }
  .pb-sm-2 {
    padding-bottom: 8px !important;
  }
  .pb-sm-3 {
    padding-bottom: 16px !important;
  }
  .pb-sm-4 {
    padding-bottom: 24px !important;
  }
  .pb-sm-5 {
    padding-bottom: 48px !important;
  }
  .ps-sm-0 {
    padding-left: 0 !important;
  }
  .ps-sm-1 {
    padding-left: 4px !important;
  }
  .ps-sm-2 {
    padding-left: 8px !important;
  }
  .ps-sm-3 {
    padding-left: 16px !important;
  }
  .ps-sm-4 {
    padding-left: 24px !important;
  }
  .ps-sm-5 {
    padding-left: 48px !important;
  }
  .gap-sm-0 {
    gap: 0 !important;
  }
  .gap-sm-1 {
    gap: 4px !important;
  }
  .gap-sm-2 {
    gap: 8px !important;
  }
  .gap-sm-3 {
    gap: 16px !important;
  }
  .gap-sm-4 {
    gap: 24px !important;
  }
  .gap-sm-5 {
    gap: 48px !important;
  }
  .row-gap-sm-0 {
    row-gap: 0 !important;
  }
  .row-gap-sm-1 {
    row-gap: 4px !important;
  }
  .row-gap-sm-2 {
    row-gap: 8px !important;
  }
  .row-gap-sm-3 {
    row-gap: 16px !important;
  }
  .row-gap-sm-4 {
    row-gap: 24px !important;
  }
  .row-gap-sm-5 {
    row-gap: 48px !important;
  }
  .column-gap-sm-0 {
    column-gap: 0 !important;
  }
  .column-gap-sm-1 {
    column-gap: 4px !important;
  }
  .column-gap-sm-2 {
    column-gap: 8px !important;
  }
  .column-gap-sm-3 {
    column-gap: 16px !important;
  }
  .column-gap-sm-4 {
    column-gap: 24px !important;
  }
  .column-gap-sm-5 {
    column-gap: 48px !important;
  }
  .text-sm-start {
    text-align: left !important;
  }
  .text-sm-end {
    text-align: right !important;
  }
  .text-sm-center {
    text-align: center !important;
  }
}
@media (min-width: 768px) {
  .float-md-start {
    float: left !important;
  }
  .float-md-end {
    float: right !important;
  }
  .float-md-none {
    float: none !important;
  }
  .object-fit-md-contain {
    object-fit: contain !important;
  }
  .object-fit-md-cover {
    object-fit: cover !important;
  }
  .object-fit-md-fill {
    object-fit: fill !important;
  }
  .object-fit-md-scale {
    object-fit: scale-down !important;
  }
  .object-fit-md-none {
    object-fit: none !important;
  }
  .d-md-inline {
    display: inline !important;
  }
  .d-md-inline-block {
    display: inline-block !important;
  }
  .d-md-block {
    display: block !important;
  }
  .d-md-grid {
    display: grid !important;
  }
  .d-md-inline-grid {
    display: inline-grid !important;
  }
  .d-md-table {
    display: table !important;
  }
  .d-md-table-row {
    display: table-row !important;
  }
  .d-md-table-cell {
    display: table-cell !important;
  }
  .d-md-flex {
    display: flex !important;
  }
  .d-md-inline-flex {
    display: inline-flex !important;
  }
  .d-md-none {
    display: none !important;
  }
  .flex-md-fill {
    flex: 1 1 auto !important;
  }
  .flex-md-row {
    flex-direction: row !important;
  }
  .flex-md-column {
    flex-direction: column !important;
  }
  .flex-md-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-md-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-md-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-md-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-md-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-md-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-md-wrap {
    flex-wrap: wrap !important;
  }
  .flex-md-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-md-start {
    justify-content: flex-start !important;
  }
  .justify-content-md-end {
    justify-content: flex-end !important;
  }
  .justify-content-md-center {
    justify-content: center !important;
  }
  .justify-content-md-between {
    justify-content: space-between !important;
  }
  .justify-content-md-around {
    justify-content: space-around !important;
  }
  .justify-content-md-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-md-start {
    align-items: flex-start !important;
  }
  .align-items-md-end {
    align-items: flex-end !important;
  }
  .align-items-md-center {
    align-items: center !important;
  }
  .align-items-md-baseline {
    align-items: baseline !important;
  }
  .align-items-md-stretch {
    align-items: stretch !important;
  }
  .align-content-md-start {
    align-content: flex-start !important;
  }
  .align-content-md-end {
    align-content: flex-end !important;
  }
  .align-content-md-center {
    align-content: center !important;
  }
  .align-content-md-between {
    align-content: space-between !important;
  }
  .align-content-md-around {
    align-content: space-around !important;
  }
  .align-content-md-stretch {
    align-content: stretch !important;
  }
  .align-self-md-auto {
    align-self: auto !important;
  }
  .align-self-md-start {
    align-self: flex-start !important;
  }
  .align-self-md-end {
    align-self: flex-end !important;
  }
  .align-self-md-center {
    align-self: center !important;
  }
  .align-self-md-baseline {
    align-self: baseline !important;
  }
  .align-self-md-stretch {
    align-self: stretch !important;
  }
  .order-md-first {
    order: -1 !important;
  }
  .order-md-0 {
    order: 0 !important;
  }
  .order-md-1 {
    order: 1 !important;
  }
  .order-md-2 {
    order: 2 !important;
  }
  .order-md-3 {
    order: 3 !important;
  }
  .order-md-4 {
    order: 4 !important;
  }
  .order-md-5 {
    order: 5 !important;
  }
  .order-md-last {
    order: 6 !important;
  }
  .m-md-0 {
    margin: 0 !important;
  }
  .m-md-1 {
    margin: 4px !important;
  }
  .m-md-2 {
    margin: 8px !important;
  }
  .m-md-3 {
    margin: 16px !important;
  }
  .m-md-4 {
    margin: 24px !important;
  }
  .m-md-5 {
    margin: 48px !important;
  }
  .m-md-auto {
    margin: auto !important;
  }
  .mx-md-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-md-1 {
    margin-right: 4px !important;
    margin-left: 4px !important;
  }
  .mx-md-2 {
    margin-right: 8px !important;
    margin-left: 8px !important;
  }
  .mx-md-3 {
    margin-right: 16px !important;
    margin-left: 16px !important;
  }
  .mx-md-4 {
    margin-right: 24px !important;
    margin-left: 24px !important;
  }
  .mx-md-5 {
    margin-right: 48px !important;
    margin-left: 48px !important;
  }
  .mx-md-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-md-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-md-1 {
    margin-top: 4px !important;
    margin-bottom: 4px !important;
  }
  .my-md-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }
  .my-md-3 {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }
  .my-md-4 {
    margin-top: 24px !important;
    margin-bottom: 24px !important;
  }
  .my-md-5 {
    margin-top: 48px !important;
    margin-bottom: 48px !important;
  }
  .my-md-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-md-0 {
    margin-top: 0 !important;
  }
  .mt-md-1 {
    margin-top: 4px !important;
  }
  .mt-md-2 {
    margin-top: 8px !important;
  }
  .mt-md-3 {
    margin-top: 16px !important;
  }
  .mt-md-4 {
    margin-top: 24px !important;
  }
  .mt-md-5 {
    margin-top: 48px !important;
  }
  .mt-md-auto {
    margin-top: auto !important;
  }
  .me-md-0 {
    margin-right: 0 !important;
  }
  .me-md-1 {
    margin-right: 4px !important;
  }
  .me-md-2 {
    margin-right: 8px !important;
  }
  .me-md-3 {
    margin-right: 16px !important;
  }
  .me-md-4 {
    margin-right: 24px !important;
  }
  .me-md-5 {
    margin-right: 48px !important;
  }
  .me-md-auto {
    margin-right: auto !important;
  }
  .mb-md-0 {
    margin-bottom: 0 !important;
  }
  .mb-md-1 {
    margin-bottom: 4px !important;
  }
  .mb-md-2 {
    margin-bottom: 8px !important;
  }
  .mb-md-3 {
    margin-bottom: 16px !important;
  }
  .mb-md-4 {
    margin-bottom: 24px !important;
  }
  .mb-md-5 {
    margin-bottom: 48px !important;
  }
  .mb-md-auto {
    margin-bottom: auto !important;
  }
  .ms-md-0 {
    margin-left: 0 !important;
  }
  .ms-md-1 {
    margin-left: 4px !important;
  }
  .ms-md-2 {
    margin-left: 8px !important;
  }
  .ms-md-3 {
    margin-left: 16px !important;
  }
  .ms-md-4 {
    margin-left: 24px !important;
  }
  .ms-md-5 {
    margin-left: 48px !important;
  }
  .ms-md-auto {
    margin-left: auto !important;
  }
  .p-md-0 {
    padding: 0 !important;
  }
  .p-md-1 {
    padding: 4px !important;
  }
  .p-md-2 {
    padding: 8px !important;
  }
  .p-md-3 {
    padding: 16px !important;
  }
  .p-md-4 {
    padding: 24px !important;
  }
  .p-md-5 {
    padding: 48px !important;
  }
  .px-md-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-md-1 {
    padding-right: 4px !important;
    padding-left: 4px !important;
  }
  .px-md-2 {
    padding-right: 8px !important;
    padding-left: 8px !important;
  }
  .px-md-3 {
    padding-right: 16px !important;
    padding-left: 16px !important;
  }
  .px-md-4 {
    padding-right: 24px !important;
    padding-left: 24px !important;
  }
  .px-md-5 {
    padding-right: 48px !important;
    padding-left: 48px !important;
  }
  .py-md-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-md-1 {
    padding-top: 4px !important;
    padding-bottom: 4px !important;
  }
  .py-md-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }
  .py-md-3 {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }
  .py-md-4 {
    padding-top: 24px !important;
    padding-bottom: 24px !important;
  }
  .py-md-5 {
    padding-top: 48px !important;
    padding-bottom: 48px !important;
  }
  .pt-md-0 {
    padding-top: 0 !important;
  }
  .pt-md-1 {
    padding-top: 4px !important;
  }
  .pt-md-2 {
    padding-top: 8px !important;
  }
  .pt-md-3 {
    padding-top: 16px !important;
  }
  .pt-md-4 {
    padding-top: 24px !important;
  }
  .pt-md-5 {
    padding-top: 48px !important;
  }
  .pe-md-0 {
    padding-right: 0 !important;
  }
  .pe-md-1 {
    padding-right: 4px !important;
  }
  .pe-md-2 {
    padding-right: 8px !important;
  }
  .pe-md-3 {
    padding-right: 16px !important;
  }
  .pe-md-4 {
    padding-right: 24px !important;
  }
  .pe-md-5 {
    padding-right: 48px !important;
  }
  .pb-md-0 {
    padding-bottom: 0 !important;
  }
  .pb-md-1 {
    padding-bottom: 4px !important;
  }
  .pb-md-2 {
    padding-bottom: 8px !important;
  }
  .pb-md-3 {
    padding-bottom: 16px !important;
  }
  .pb-md-4 {
    padding-bottom: 24px !important;
  }
  .pb-md-5 {
    padding-bottom: 48px !important;
  }
  .ps-md-0 {
    padding-left: 0 !important;
  }
  .ps-md-1 {
    padding-left: 4px !important;
  }
  .ps-md-2 {
    padding-left: 8px !important;
  }
  .ps-md-3 {
    padding-left: 16px !important;
  }
  .ps-md-4 {
    padding-left: 24px !important;
  }
  .ps-md-5 {
    padding-left: 48px !important;
  }
  .gap-md-0 {
    gap: 0 !important;
  }
  .gap-md-1 {
    gap: 4px !important;
  }
  .gap-md-2 {
    gap: 8px !important;
  }
  .gap-md-3 {
    gap: 16px !important;
  }
  .gap-md-4 {
    gap: 24px !important;
  }
  .gap-md-5 {
    gap: 48px !important;
  }
  .row-gap-md-0 {
    row-gap: 0 !important;
  }
  .row-gap-md-1 {
    row-gap: 4px !important;
  }
  .row-gap-md-2 {
    row-gap: 8px !important;
  }
  .row-gap-md-3 {
    row-gap: 16px !important;
  }
  .row-gap-md-4 {
    row-gap: 24px !important;
  }
  .row-gap-md-5 {
    row-gap: 48px !important;
  }
  .column-gap-md-0 {
    column-gap: 0 !important;
  }
  .column-gap-md-1 {
    column-gap: 4px !important;
  }
  .column-gap-md-2 {
    column-gap: 8px !important;
  }
  .column-gap-md-3 {
    column-gap: 16px !important;
  }
  .column-gap-md-4 {
    column-gap: 24px !important;
  }
  .column-gap-md-5 {
    column-gap: 48px !important;
  }
  .text-md-start {
    text-align: left !important;
  }
  .text-md-end {
    text-align: right !important;
  }
  .text-md-center {
    text-align: center !important;
  }
}
@media (min-width: 992px) {
  .float-lg-start {
    float: left !important;
  }
  .float-lg-end {
    float: right !important;
  }
  .float-lg-none {
    float: none !important;
  }
  .object-fit-lg-contain {
    object-fit: contain !important;
  }
  .object-fit-lg-cover {
    object-fit: cover !important;
  }
  .object-fit-lg-fill {
    object-fit: fill !important;
  }
  .object-fit-lg-scale {
    object-fit: scale-down !important;
  }
  .object-fit-lg-none {
    object-fit: none !important;
  }
  .d-lg-inline {
    display: inline !important;
  }
  .d-lg-inline-block {
    display: inline-block !important;
  }
  .d-lg-block {
    display: block !important;
  }
  .d-lg-grid {
    display: grid !important;
  }
  .d-lg-inline-grid {
    display: inline-grid !important;
  }
  .d-lg-table {
    display: table !important;
  }
  .d-lg-table-row {
    display: table-row !important;
  }
  .d-lg-table-cell {
    display: table-cell !important;
  }
  .d-lg-flex {
    display: flex !important;
  }
  .d-lg-inline-flex {
    display: inline-flex !important;
  }
  .d-lg-none {
    display: none !important;
  }
  .flex-lg-fill {
    flex: 1 1 auto !important;
  }
  .flex-lg-row {
    flex-direction: row !important;
  }
  .flex-lg-column {
    flex-direction: column !important;
  }
  .flex-lg-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-lg-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-lg-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-lg-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-lg-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-lg-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-lg-wrap {
    flex-wrap: wrap !important;
  }
  .flex-lg-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-lg-start {
    justify-content: flex-start !important;
  }
  .justify-content-lg-end {
    justify-content: flex-end !important;
  }
  .justify-content-lg-center {
    justify-content: center !important;
  }
  .justify-content-lg-between {
    justify-content: space-between !important;
  }
  .justify-content-lg-around {
    justify-content: space-around !important;
  }
  .justify-content-lg-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-lg-start {
    align-items: flex-start !important;
  }
  .align-items-lg-end {
    align-items: flex-end !important;
  }
  .align-items-lg-center {
    align-items: center !important;
  }
  .align-items-lg-baseline {
    align-items: baseline !important;
  }
  .align-items-lg-stretch {
    align-items: stretch !important;
  }
  .align-content-lg-start {
    align-content: flex-start !important;
  }
  .align-content-lg-end {
    align-content: flex-end !important;
  }
  .align-content-lg-center {
    align-content: center !important;
  }
  .align-content-lg-between {
    align-content: space-between !important;
  }
  .align-content-lg-around {
    align-content: space-around !important;
  }
  .align-content-lg-stretch {
    align-content: stretch !important;
  }
  .align-self-lg-auto {
    align-self: auto !important;
  }
  .align-self-lg-start {
    align-self: flex-start !important;
  }
  .align-self-lg-end {
    align-self: flex-end !important;
  }
  .align-self-lg-center {
    align-self: center !important;
  }
  .align-self-lg-baseline {
    align-self: baseline !important;
  }
  .align-self-lg-stretch {
    align-self: stretch !important;
  }
  .order-lg-first {
    order: -1 !important;
  }
  .order-lg-0 {
    order: 0 !important;
  }
  .order-lg-1 {
    order: 1 !important;
  }
  .order-lg-2 {
    order: 2 !important;
  }
  .order-lg-3 {
    order: 3 !important;
  }
  .order-lg-4 {
    order: 4 !important;
  }
  .order-lg-5 {
    order: 5 !important;
  }
  .order-lg-last {
    order: 6 !important;
  }
  .m-lg-0 {
    margin: 0 !important;
  }
  .m-lg-1 {
    margin: 4px !important;
  }
  .m-lg-2 {
    margin: 8px !important;
  }
  .m-lg-3 {
    margin: 16px !important;
  }
  .m-lg-4 {
    margin: 24px !important;
  }
  .m-lg-5 {
    margin: 48px !important;
  }
  .m-lg-auto {
    margin: auto !important;
  }
  .mx-lg-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-lg-1 {
    margin-right: 4px !important;
    margin-left: 4px !important;
  }
  .mx-lg-2 {
    margin-right: 8px !important;
    margin-left: 8px !important;
  }
  .mx-lg-3 {
    margin-right: 16px !important;
    margin-left: 16px !important;
  }
  .mx-lg-4 {
    margin-right: 24px !important;
    margin-left: 24px !important;
  }
  .mx-lg-5 {
    margin-right: 48px !important;
    margin-left: 48px !important;
  }
  .mx-lg-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-lg-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-lg-1 {
    margin-top: 4px !important;
    margin-bottom: 4px !important;
  }
  .my-lg-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }
  .my-lg-3 {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }
  .my-lg-4 {
    margin-top: 24px !important;
    margin-bottom: 24px !important;
  }
  .my-lg-5 {
    margin-top: 48px !important;
    margin-bottom: 48px !important;
  }
  .my-lg-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-lg-0 {
    margin-top: 0 !important;
  }
  .mt-lg-1 {
    margin-top: 4px !important;
  }
  .mt-lg-2 {
    margin-top: 8px !important;
  }
  .mt-lg-3 {
    margin-top: 16px !important;
  }
  .mt-lg-4 {
    margin-top: 24px !important;
  }
  .mt-lg-5 {
    margin-top: 48px !important;
  }
  .mt-lg-auto {
    margin-top: auto !important;
  }
  .me-lg-0 {
    margin-right: 0 !important;
  }
  .me-lg-1 {
    margin-right: 4px !important;
  }
  .me-lg-2 {
    margin-right: 8px !important;
  }
  .me-lg-3 {
    margin-right: 16px !important;
  }
  .me-lg-4 {
    margin-right: 24px !important;
  }
  .me-lg-5 {
    margin-right: 48px !important;
  }
  .me-lg-auto {
    margin-right: auto !important;
  }
  .mb-lg-0 {
    margin-bottom: 0 !important;
  }
  .mb-lg-1 {
    margin-bottom: 4px !important;
  }
  .mb-lg-2 {
    margin-bottom: 8px !important;
  }
  .mb-lg-3 {
    margin-bottom: 16px !important;
  }
  .mb-lg-4 {
    margin-bottom: 24px !important;
  }
  .mb-lg-5 {
    margin-bottom: 48px !important;
  }
  .mb-lg-auto {
    margin-bottom: auto !important;
  }
  .ms-lg-0 {
    margin-left: 0 !important;
  }
  .ms-lg-1 {
    margin-left: 4px !important;
  }
  .ms-lg-2 {
    margin-left: 8px !important;
  }
  .ms-lg-3 {
    margin-left: 16px !important;
  }
  .ms-lg-4 {
    margin-left: 24px !important;
  }
  .ms-lg-5 {
    margin-left: 48px !important;
  }
  .ms-lg-auto {
    margin-left: auto !important;
  }
  .p-lg-0 {
    padding: 0 !important;
  }
  .p-lg-1 {
    padding: 4px !important;
  }
  .p-lg-2 {
    padding: 8px !important;
  }
  .p-lg-3 {
    padding: 16px !important;
  }
  .p-lg-4 {
    padding: 24px !important;
  }
  .p-lg-5 {
    padding: 48px !important;
  }
  .px-lg-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-lg-1 {
    padding-right: 4px !important;
    padding-left: 4px !important;
  }
  .px-lg-2 {
    padding-right: 8px !important;
    padding-left: 8px !important;
  }
  .px-lg-3 {
    padding-right: 16px !important;
    padding-left: 16px !important;
  }
  .px-lg-4 {
    padding-right: 24px !important;
    padding-left: 24px !important;
  }
  .px-lg-5 {
    padding-right: 48px !important;
    padding-left: 48px !important;
  }
  .py-lg-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-lg-1 {
    padding-top: 4px !important;
    padding-bottom: 4px !important;
  }
  .py-lg-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }
  .py-lg-3 {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }
  .py-lg-4 {
    padding-top: 24px !important;
    padding-bottom: 24px !important;
  }
  .py-lg-5 {
    padding-top: 48px !important;
    padding-bottom: 48px !important;
  }
  .pt-lg-0 {
    padding-top: 0 !important;
  }
  .pt-lg-1 {
    padding-top: 4px !important;
  }
  .pt-lg-2 {
    padding-top: 8px !important;
  }
  .pt-lg-3 {
    padding-top: 16px !important;
  }
  .pt-lg-4 {
    padding-top: 24px !important;
  }
  .pt-lg-5 {
    padding-top: 48px !important;
  }
  .pe-lg-0 {
    padding-right: 0 !important;
  }
  .pe-lg-1 {
    padding-right: 4px !important;
  }
  .pe-lg-2 {
    padding-right: 8px !important;
  }
  .pe-lg-3 {
    padding-right: 16px !important;
  }
  .pe-lg-4 {
    padding-right: 24px !important;
  }
  .pe-lg-5 {
    padding-right: 48px !important;
  }
  .pb-lg-0 {
    padding-bottom: 0 !important;
  }
  .pb-lg-1 {
    padding-bottom: 4px !important;
  }
  .pb-lg-2 {
    padding-bottom: 8px !important;
  }
  .pb-lg-3 {
    padding-bottom: 16px !important;
  }
  .pb-lg-4 {
    padding-bottom: 24px !important;
  }
  .pb-lg-5 {
    padding-bottom: 48px !important;
  }
  .ps-lg-0 {
    padding-left: 0 !important;
  }
  .ps-lg-1 {
    padding-left: 4px !important;
  }
  .ps-lg-2 {
    padding-left: 8px !important;
  }
  .ps-lg-3 {
    padding-left: 16px !important;
  }
  .ps-lg-4 {
    padding-left: 24px !important;
  }
  .ps-lg-5 {
    padding-left: 48px !important;
  }
  .gap-lg-0 {
    gap: 0 !important;
  }
  .gap-lg-1 {
    gap: 4px !important;
  }
  .gap-lg-2 {
    gap: 8px !important;
  }
  .gap-lg-3 {
    gap: 16px !important;
  }
  .gap-lg-4 {
    gap: 24px !important;
  }
  .gap-lg-5 {
    gap: 48px !important;
  }
  .row-gap-lg-0 {
    row-gap: 0 !important;
  }
  .row-gap-lg-1 {
    row-gap: 4px !important;
  }
  .row-gap-lg-2 {
    row-gap: 8px !important;
  }
  .row-gap-lg-3 {
    row-gap: 16px !important;
  }
  .row-gap-lg-4 {
    row-gap: 24px !important;
  }
  .row-gap-lg-5 {
    row-gap: 48px !important;
  }
  .column-gap-lg-0 {
    column-gap: 0 !important;
  }
  .column-gap-lg-1 {
    column-gap: 4px !important;
  }
  .column-gap-lg-2 {
    column-gap: 8px !important;
  }
  .column-gap-lg-3 {
    column-gap: 16px !important;
  }
  .column-gap-lg-4 {
    column-gap: 24px !important;
  }
  .column-gap-lg-5 {
    column-gap: 48px !important;
  }
  .text-lg-start {
    text-align: left !important;
  }
  .text-lg-end {
    text-align: right !important;
  }
  .text-lg-center {
    text-align: center !important;
  }
}
@media (min-width: 1200px) {
  .float-xl-start {
    float: left !important;
  }
  .float-xl-end {
    float: right !important;
  }
  .float-xl-none {
    float: none !important;
  }
  .object-fit-xl-contain {
    object-fit: contain !important;
  }
  .object-fit-xl-cover {
    object-fit: cover !important;
  }
  .object-fit-xl-fill {
    object-fit: fill !important;
  }
  .object-fit-xl-scale {
    object-fit: scale-down !important;
  }
  .object-fit-xl-none {
    object-fit: none !important;
  }
  .d-xl-inline {
    display: inline !important;
  }
  .d-xl-inline-block {
    display: inline-block !important;
  }
  .d-xl-block {
    display: block !important;
  }
  .d-xl-grid {
    display: grid !important;
  }
  .d-xl-inline-grid {
    display: inline-grid !important;
  }
  .d-xl-table {
    display: table !important;
  }
  .d-xl-table-row {
    display: table-row !important;
  }
  .d-xl-table-cell {
    display: table-cell !important;
  }
  .d-xl-flex {
    display: flex !important;
  }
  .d-xl-inline-flex {
    display: inline-flex !important;
  }
  .d-xl-none {
    display: none !important;
  }
  .flex-xl-fill {
    flex: 1 1 auto !important;
  }
  .flex-xl-row {
    flex-direction: row !important;
  }
  .flex-xl-column {
    flex-direction: column !important;
  }
  .flex-xl-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-xl-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-xl-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-xl-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-xl-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-xl-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-xl-wrap {
    flex-wrap: wrap !important;
  }
  .flex-xl-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-xl-start {
    justify-content: flex-start !important;
  }
  .justify-content-xl-end {
    justify-content: flex-end !important;
  }
  .justify-content-xl-center {
    justify-content: center !important;
  }
  .justify-content-xl-between {
    justify-content: space-between !important;
  }
  .justify-content-xl-around {
    justify-content: space-around !important;
  }
  .justify-content-xl-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-xl-start {
    align-items: flex-start !important;
  }
  .align-items-xl-end {
    align-items: flex-end !important;
  }
  .align-items-xl-center {
    align-items: center !important;
  }
  .align-items-xl-baseline {
    align-items: baseline !important;
  }
  .align-items-xl-stretch {
    align-items: stretch !important;
  }
  .align-content-xl-start {
    align-content: flex-start !important;
  }
  .align-content-xl-end {
    align-content: flex-end !important;
  }
  .align-content-xl-center {
    align-content: center !important;
  }
  .align-content-xl-between {
    align-content: space-between !important;
  }
  .align-content-xl-around {
    align-content: space-around !important;
  }
  .align-content-xl-stretch {
    align-content: stretch !important;
  }
  .align-self-xl-auto {
    align-self: auto !important;
  }
  .align-self-xl-start {
    align-self: flex-start !important;
  }
  .align-self-xl-end {
    align-self: flex-end !important;
  }
  .align-self-xl-center {
    align-self: center !important;
  }
  .align-self-xl-baseline {
    align-self: baseline !important;
  }
  .align-self-xl-stretch {
    align-self: stretch !important;
  }
  .order-xl-first {
    order: -1 !important;
  }
  .order-xl-0 {
    order: 0 !important;
  }
  .order-xl-1 {
    order: 1 !important;
  }
  .order-xl-2 {
    order: 2 !important;
  }
  .order-xl-3 {
    order: 3 !important;
  }
  .order-xl-4 {
    order: 4 !important;
  }
  .order-xl-5 {
    order: 5 !important;
  }
  .order-xl-last {
    order: 6 !important;
  }
  .m-xl-0 {
    margin: 0 !important;
  }
  .m-xl-1 {
    margin: 4px !important;
  }
  .m-xl-2 {
    margin: 8px !important;
  }
  .m-xl-3 {
    margin: 16px !important;
  }
  .m-xl-4 {
    margin: 24px !important;
  }
  .m-xl-5 {
    margin: 48px !important;
  }
  .m-xl-auto {
    margin: auto !important;
  }
  .mx-xl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-xl-1 {
    margin-right: 4px !important;
    margin-left: 4px !important;
  }
  .mx-xl-2 {
    margin-right: 8px !important;
    margin-left: 8px !important;
  }
  .mx-xl-3 {
    margin-right: 16px !important;
    margin-left: 16px !important;
  }
  .mx-xl-4 {
    margin-right: 24px !important;
    margin-left: 24px !important;
  }
  .mx-xl-5 {
    margin-right: 48px !important;
    margin-left: 48px !important;
  }
  .mx-xl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-xl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-xl-1 {
    margin-top: 4px !important;
    margin-bottom: 4px !important;
  }
  .my-xl-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }
  .my-xl-3 {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }
  .my-xl-4 {
    margin-top: 24px !important;
    margin-bottom: 24px !important;
  }
  .my-xl-5 {
    margin-top: 48px !important;
    margin-bottom: 48px !important;
  }
  .my-xl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-xl-0 {
    margin-top: 0 !important;
  }
  .mt-xl-1 {
    margin-top: 4px !important;
  }
  .mt-xl-2 {
    margin-top: 8px !important;
  }
  .mt-xl-3 {
    margin-top: 16px !important;
  }
  .mt-xl-4 {
    margin-top: 24px !important;
  }
  .mt-xl-5 {
    margin-top: 48px !important;
  }
  .mt-xl-auto {
    margin-top: auto !important;
  }
  .me-xl-0 {
    margin-right: 0 !important;
  }
  .me-xl-1 {
    margin-right: 4px !important;
  }
  .me-xl-2 {
    margin-right: 8px !important;
  }
  .me-xl-3 {
    margin-right: 16px !important;
  }
  .me-xl-4 {
    margin-right: 24px !important;
  }
  .me-xl-5 {
    margin-right: 48px !important;
  }
  .me-xl-auto {
    margin-right: auto !important;
  }
  .mb-xl-0 {
    margin-bottom: 0 !important;
  }
  .mb-xl-1 {
    margin-bottom: 4px !important;
  }
  .mb-xl-2 {
    margin-bottom: 8px !important;
  }
  .mb-xl-3 {
    margin-bottom: 16px !important;
  }
  .mb-xl-4 {
    margin-bottom: 24px !important;
  }
  .mb-xl-5 {
    margin-bottom: 48px !important;
  }
  .mb-xl-auto {
    margin-bottom: auto !important;
  }
  .ms-xl-0 {
    margin-left: 0 !important;
  }
  .ms-xl-1 {
    margin-left: 4px !important;
  }
  .ms-xl-2 {
    margin-left: 8px !important;
  }
  .ms-xl-3 {
    margin-left: 16px !important;
  }
  .ms-xl-4 {
    margin-left: 24px !important;
  }
  .ms-xl-5 {
    margin-left: 48px !important;
  }
  .ms-xl-auto {
    margin-left: auto !important;
  }
  .p-xl-0 {
    padding: 0 !important;
  }
  .p-xl-1 {
    padding: 4px !important;
  }
  .p-xl-2 {
    padding: 8px !important;
  }
  .p-xl-3 {
    padding: 16px !important;
  }
  .p-xl-4 {
    padding: 24px !important;
  }
  .p-xl-5 {
    padding: 48px !important;
  }
  .px-xl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-xl-1 {
    padding-right: 4px !important;
    padding-left: 4px !important;
  }
  .px-xl-2 {
    padding-right: 8px !important;
    padding-left: 8px !important;
  }
  .px-xl-3 {
    padding-right: 16px !important;
    padding-left: 16px !important;
  }
  .px-xl-4 {
    padding-right: 24px !important;
    padding-left: 24px !important;
  }
  .px-xl-5 {
    padding-right: 48px !important;
    padding-left: 48px !important;
  }
  .py-xl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-xl-1 {
    padding-top: 4px !important;
    padding-bottom: 4px !important;
  }
  .py-xl-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }
  .py-xl-3 {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }
  .py-xl-4 {
    padding-top: 24px !important;
    padding-bottom: 24px !important;
  }
  .py-xl-5 {
    padding-top: 48px !important;
    padding-bottom: 48px !important;
  }
  .pt-xl-0 {
    padding-top: 0 !important;
  }
  .pt-xl-1 {
    padding-top: 4px !important;
  }
  .pt-xl-2 {
    padding-top: 8px !important;
  }
  .pt-xl-3 {
    padding-top: 16px !important;
  }
  .pt-xl-4 {
    padding-top: 24px !important;
  }
  .pt-xl-5 {
    padding-top: 48px !important;
  }
  .pe-xl-0 {
    padding-right: 0 !important;
  }
  .pe-xl-1 {
    padding-right: 4px !important;
  }
  .pe-xl-2 {
    padding-right: 8px !important;
  }
  .pe-xl-3 {
    padding-right: 16px !important;
  }
  .pe-xl-4 {
    padding-right: 24px !important;
  }
  .pe-xl-5 {
    padding-right: 48px !important;
  }
  .pb-xl-0 {
    padding-bottom: 0 !important;
  }
  .pb-xl-1 {
    padding-bottom: 4px !important;
  }
  .pb-xl-2 {
    padding-bottom: 8px !important;
  }
  .pb-xl-3 {
    padding-bottom: 16px !important;
  }
  .pb-xl-4 {
    padding-bottom: 24px !important;
  }
  .pb-xl-5 {
    padding-bottom: 48px !important;
  }
  .ps-xl-0 {
    padding-left: 0 !important;
  }
  .ps-xl-1 {
    padding-left: 4px !important;
  }
  .ps-xl-2 {
    padding-left: 8px !important;
  }
  .ps-xl-3 {
    padding-left: 16px !important;
  }
  .ps-xl-4 {
    padding-left: 24px !important;
  }
  .ps-xl-5 {
    padding-left: 48px !important;
  }
  .gap-xl-0 {
    gap: 0 !important;
  }
  .gap-xl-1 {
    gap: 4px !important;
  }
  .gap-xl-2 {
    gap: 8px !important;
  }
  .gap-xl-3 {
    gap: 16px !important;
  }
  .gap-xl-4 {
    gap: 24px !important;
  }
  .gap-xl-5 {
    gap: 48px !important;
  }
  .row-gap-xl-0 {
    row-gap: 0 !important;
  }
  .row-gap-xl-1 {
    row-gap: 4px !important;
  }
  .row-gap-xl-2 {
    row-gap: 8px !important;
  }
  .row-gap-xl-3 {
    row-gap: 16px !important;
  }
  .row-gap-xl-4 {
    row-gap: 24px !important;
  }
  .row-gap-xl-5 {
    row-gap: 48px !important;
  }
  .column-gap-xl-0 {
    column-gap: 0 !important;
  }
  .column-gap-xl-1 {
    column-gap: 4px !important;
  }
  .column-gap-xl-2 {
    column-gap: 8px !important;
  }
  .column-gap-xl-3 {
    column-gap: 16px !important;
  }
  .column-gap-xl-4 {
    column-gap: 24px !important;
  }
  .column-gap-xl-5 {
    column-gap: 48px !important;
  }
  .text-xl-start {
    text-align: left !important;
  }
  .text-xl-end {
    text-align: right !important;
  }
  .text-xl-center {
    text-align: center !important;
  }
}
@media (min-width: 1400px) {
  .float-xxl-start {
    float: left !important;
  }
  .float-xxl-end {
    float: right !important;
  }
  .float-xxl-none {
    float: none !important;
  }
  .object-fit-xxl-contain {
    object-fit: contain !important;
  }
  .object-fit-xxl-cover {
    object-fit: cover !important;
  }
  .object-fit-xxl-fill {
    object-fit: fill !important;
  }
  .object-fit-xxl-scale {
    object-fit: scale-down !important;
  }
  .object-fit-xxl-none {
    object-fit: none !important;
  }
  .d-xxl-inline {
    display: inline !important;
  }
  .d-xxl-inline-block {
    display: inline-block !important;
  }
  .d-xxl-block {
    display: block !important;
  }
  .d-xxl-grid {
    display: grid !important;
  }
  .d-xxl-inline-grid {
    display: inline-grid !important;
  }
  .d-xxl-table {
    display: table !important;
  }
  .d-xxl-table-row {
    display: table-row !important;
  }
  .d-xxl-table-cell {
    display: table-cell !important;
  }
  .d-xxl-flex {
    display: flex !important;
  }
  .d-xxl-inline-flex {
    display: inline-flex !important;
  }
  .d-xxl-none {
    display: none !important;
  }
  .flex-xxl-fill {
    flex: 1 1 auto !important;
  }
  .flex-xxl-row {
    flex-direction: row !important;
  }
  .flex-xxl-column {
    flex-direction: column !important;
  }
  .flex-xxl-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-xxl-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-xxl-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-xxl-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-xxl-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-xxl-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-xxl-wrap {
    flex-wrap: wrap !important;
  }
  .flex-xxl-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-xxl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-xxl-start {
    justify-content: flex-start !important;
  }
  .justify-content-xxl-end {
    justify-content: flex-end !important;
  }
  .justify-content-xxl-center {
    justify-content: center !important;
  }
  .justify-content-xxl-between {
    justify-content: space-between !important;
  }
  .justify-content-xxl-around {
    justify-content: space-around !important;
  }
  .justify-content-xxl-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-xxl-start {
    align-items: flex-start !important;
  }
  .align-items-xxl-end {
    align-items: flex-end !important;
  }
  .align-items-xxl-center {
    align-items: center !important;
  }
  .align-items-xxl-baseline {
    align-items: baseline !important;
  }
  .align-items-xxl-stretch {
    align-items: stretch !important;
  }
  .align-content-xxl-start {
    align-content: flex-start !important;
  }
  .align-content-xxl-end {
    align-content: flex-end !important;
  }
  .align-content-xxl-center {
    align-content: center !important;
  }
  .align-content-xxl-between {
    align-content: space-between !important;
  }
  .align-content-xxl-around {
    align-content: space-around !important;
  }
  .align-content-xxl-stretch {
    align-content: stretch !important;
  }
  .align-self-xxl-auto {
    align-self: auto !important;
  }
  .align-self-xxl-start {
    align-self: flex-start !important;
  }
  .align-self-xxl-end {
    align-self: flex-end !important;
  }
  .align-self-xxl-center {
    align-self: center !important;
  }
  .align-self-xxl-baseline {
    align-self: baseline !important;
  }
  .align-self-xxl-stretch {
    align-self: stretch !important;
  }
  .order-xxl-first {
    order: -1 !important;
  }
  .order-xxl-0 {
    order: 0 !important;
  }
  .order-xxl-1 {
    order: 1 !important;
  }
  .order-xxl-2 {
    order: 2 !important;
  }
  .order-xxl-3 {
    order: 3 !important;
  }
  .order-xxl-4 {
    order: 4 !important;
  }
  .order-xxl-5 {
    order: 5 !important;
  }
  .order-xxl-last {
    order: 6 !important;
  }
  .m-xxl-0 {
    margin: 0 !important;
  }
  .m-xxl-1 {
    margin: 4px !important;
  }
  .m-xxl-2 {
    margin: 8px !important;
  }
  .m-xxl-3 {
    margin: 16px !important;
  }
  .m-xxl-4 {
    margin: 24px !important;
  }
  .m-xxl-5 {
    margin: 48px !important;
  }
  .m-xxl-auto {
    margin: auto !important;
  }
  .mx-xxl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-xxl-1 {
    margin-right: 4px !important;
    margin-left: 4px !important;
  }
  .mx-xxl-2 {
    margin-right: 8px !important;
    margin-left: 8px !important;
  }
  .mx-xxl-3 {
    margin-right: 16px !important;
    margin-left: 16px !important;
  }
  .mx-xxl-4 {
    margin-right: 24px !important;
    margin-left: 24px !important;
  }
  .mx-xxl-5 {
    margin-right: 48px !important;
    margin-left: 48px !important;
  }
  .mx-xxl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-xxl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-xxl-1 {
    margin-top: 4px !important;
    margin-bottom: 4px !important;
  }
  .my-xxl-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }
  .my-xxl-3 {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }
  .my-xxl-4 {
    margin-top: 24px !important;
    margin-bottom: 24px !important;
  }
  .my-xxl-5 {
    margin-top: 48px !important;
    margin-bottom: 48px !important;
  }
  .my-xxl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-xxl-0 {
    margin-top: 0 !important;
  }
  .mt-xxl-1 {
    margin-top: 4px !important;
  }
  .mt-xxl-2 {
    margin-top: 8px !important;
  }
  .mt-xxl-3 {
    margin-top: 16px !important;
  }
  .mt-xxl-4 {
    margin-top: 24px !important;
  }
  .mt-xxl-5 {
    margin-top: 48px !important;
  }
  .mt-xxl-auto {
    margin-top: auto !important;
  }
  .me-xxl-0 {
    margin-right: 0 !important;
  }
  .me-xxl-1 {
    margin-right: 4px !important;
  }
  .me-xxl-2 {
    margin-right: 8px !important;
  }
  .me-xxl-3 {
    margin-right: 16px !important;
  }
  .me-xxl-4 {
    margin-right: 24px !important;
  }
  .me-xxl-5 {
    margin-right: 48px !important;
  }
  .me-xxl-auto {
    margin-right: auto !important;
  }
  .mb-xxl-0 {
    margin-bottom: 0 !important;
  }
  .mb-xxl-1 {
    margin-bottom: 4px !important;
  }
  .mb-xxl-2 {
    margin-bottom: 8px !important;
  }
  .mb-xxl-3 {
    margin-bottom: 16px !important;
  }
  .mb-xxl-4 {
    margin-bottom: 24px !important;
  }
  .mb-xxl-5 {
    margin-bottom: 48px !important;
  }
  .mb-xxl-auto {
    margin-bottom: auto !important;
  }
  .ms-xxl-0 {
    margin-left: 0 !important;
  }
  .ms-xxl-1 {
    margin-left: 4px !important;
  }
  .ms-xxl-2 {
    margin-left: 8px !important;
  }
  .ms-xxl-3 {
    margin-left: 16px !important;
  }
  .ms-xxl-4 {
    margin-left: 24px !important;
  }
  .ms-xxl-5 {
    margin-left: 48px !important;
  }
  .ms-xxl-auto {
    margin-left: auto !important;
  }
  .p-xxl-0 {
    padding: 0 !important;
  }
  .p-xxl-1 {
    padding: 4px !important;
  }
  .p-xxl-2 {
    padding: 8px !important;
  }
  .p-xxl-3 {
    padding: 16px !important;
  }
  .p-xxl-4 {
    padding: 24px !important;
  }
  .p-xxl-5 {
    padding: 48px !important;
  }
  .px-xxl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-xxl-1 {
    padding-right: 4px !important;
    padding-left: 4px !important;
  }
  .px-xxl-2 {
    padding-right: 8px !important;
    padding-left: 8px !important;
  }
  .px-xxl-3 {
    padding-right: 16px !important;
    padding-left: 16px !important;
  }
  .px-xxl-4 {
    padding-right: 24px !important;
    padding-left: 24px !important;
  }
  .px-xxl-5 {
    padding-right: 48px !important;
    padding-left: 48px !important;
  }
  .py-xxl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-xxl-1 {
    padding-top: 4px !important;
    padding-bottom: 4px !important;
  }
  .py-xxl-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }
  .py-xxl-3 {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }
  .py-xxl-4 {
    padding-top: 24px !important;
    padding-bottom: 24px !important;
  }
  .py-xxl-5 {
    padding-top: 48px !important;
    padding-bottom: 48px !important;
  }
  .pt-xxl-0 {
    padding-top: 0 !important;
  }
  .pt-xxl-1 {
    padding-top: 4px !important;
  }
  .pt-xxl-2 {
    padding-top: 8px !important;
  }
  .pt-xxl-3 {
    padding-top: 16px !important;
  }
  .pt-xxl-4 {
    padding-top: 24px !important;
  }
  .pt-xxl-5 {
    padding-top: 48px !important;
  }
  .pe-xxl-0 {
    padding-right: 0 !important;
  }
  .pe-xxl-1 {
    padding-right: 4px !important;
  }
  .pe-xxl-2 {
    padding-right: 8px !important;
  }
  .pe-xxl-3 {
    padding-right: 16px !important;
  }
  .pe-xxl-4 {
    padding-right: 24px !important;
  }
  .pe-xxl-5 {
    padding-right: 48px !important;
  }
  .pb-xxl-0 {
    padding-bottom: 0 !important;
  }
  .pb-xxl-1 {
    padding-bottom: 4px !important;
  }
  .pb-xxl-2 {
    padding-bottom: 8px !important;
  }
  .pb-xxl-3 {
    padding-bottom: 16px !important;
  }
  .pb-xxl-4 {
    padding-bottom: 24px !important;
  }
  .pb-xxl-5 {
    padding-bottom: 48px !important;
  }
  .ps-xxl-0 {
    padding-left: 0 !important;
  }
  .ps-xxl-1 {
    padding-left: 4px !important;
  }
  .ps-xxl-2 {
    padding-left: 8px !important;
  }
  .ps-xxl-3 {
    padding-left: 16px !important;
  }
  .ps-xxl-4 {
    padding-left: 24px !important;
  }
  .ps-xxl-5 {
    padding-left: 48px !important;
  }
  .gap-xxl-0 {
    gap: 0 !important;
  }
  .gap-xxl-1 {
    gap: 4px !important;
  }
  .gap-xxl-2 {
    gap: 8px !important;
  }
  .gap-xxl-3 {
    gap: 16px !important;
  }
  .gap-xxl-4 {
    gap: 24px !important;
  }
  .gap-xxl-5 {
    gap: 48px !important;
  }
  .row-gap-xxl-0 {
    row-gap: 0 !important;
  }
  .row-gap-xxl-1 {
    row-gap: 4px !important;
  }
  .row-gap-xxl-2 {
    row-gap: 8px !important;
  }
  .row-gap-xxl-3 {
    row-gap: 16px !important;
  }
  .row-gap-xxl-4 {
    row-gap: 24px !important;
  }
  .row-gap-xxl-5 {
    row-gap: 48px !important;
  }
  .column-gap-xxl-0 {
    column-gap: 0 !important;
  }
  .column-gap-xxl-1 {
    column-gap: 4px !important;
  }
  .column-gap-xxl-2 {
    column-gap: 8px !important;
  }
  .column-gap-xxl-3 {
    column-gap: 16px !important;
  }
  .column-gap-xxl-4 {
    column-gap: 24px !important;
  }
  .column-gap-xxl-5 {
    column-gap: 48px !important;
  }
  .text-xxl-start {
    text-align: left !important;
  }
  .text-xxl-end {
    text-align: right !important;
  }
  .text-xxl-center {
    text-align: center !important;
  }
}
@media (min-width: 1200px) {
  .fs-4 {
    font-size: 1.3125rem !important;
  }
}
@media print {
  .d-print-inline {
    display: inline !important;
  }
  .d-print-inline-block {
    display: inline-block !important;
  }
  .d-print-block {
    display: block !important;
  }
  .d-print-grid {
    display: grid !important;
  }
  .d-print-inline-grid {
    display: inline-grid !important;
  }
  .d-print-table {
    display: table !important;
  }
  .d-print-table-row {
    display: table-row !important;
  }
  .d-print-table-cell {
    display: table-cell !important;
  }
  .d-print-flex {
    display: flex !important;
  }
  .d-print-inline-flex {
    display: inline-flex !important;
  }
  .d-print-none {
    display: none !important;
  }
}
html.interstitial {
  overflow: hidden;
}
html.interstitial,
html.interstitial body {
  height: 100vh;
}
html.popup,
html.popup body {
  height: 500px;
}
#app {
  width: 366px;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
  height: 100%;
}
.interstitial #app {
  width: unset;
}
@media only screen and (min-resolution: 2dppx) {
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}
.alert-info {
  --bs-alert-color: rgb(73, 73, 242);
  --bs-info-text-emphasis: rgb(73, 73, 242);
  --bs-info-bg-subtle: rgba(73, 73, 242, 0.1);
  --bs-alert-border-color: var(--bs-info-bg-subtle) !important;
}
[data-bs-theme=dark] .alert-info {
  --bs-alert-color: var(--bs-primary-text-emphasis);
  --bs-alert-bg: var(--bs-primary-bg-subtle);
  --bs-alert-border-color: var(--bs-primary-border-subtle);
  --bs-alert-link-color: var(--bs-primary-text-emphasis);
}
.list-group {
  --bs-list-group-border-color: rgb(240, 240, 245);
}
[data-bs-theme=dark] .list-group {
  --bs-list-group-border-color: rgb(50, 50, 66);
  --bs-list-group-color: rgb(240, 240, 245);
}
[data-bs-theme=dark] .navbar-nav {
  --bs-navbar-hover-color: #fff;
  --bs-navbar-active-color: #fff;
  --bs-nav-link-color: rgb(130, 130, 153);
}
[data-bs-theme=dark] .shadow {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
}
[data-bs-theme=dark] .shadow-sm {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.08) !important;
}
[data-bs-theme=dark] .shadow-lg {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1) !important;
}
.placeholder {
  background-color: rgb(240, 240, 245) !important;
}
[data-bs-theme=dark] .placeholder {
  background-color: rgb(50, 50, 66) !important;
}
.toastify.alert {
  position: fixed;
  font-weight: 500;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  z-index: 2147483647;
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  cursor: pointer;
  text-align: center;
  padding: 10px;
}
.toastify.on {
  opacity: 1;
}
.toast-close {
  opacity: 0.4;
}
.toastify-top {
  top: -150px;
}
.toast-close {
  border: none;
  background: transparent;
  color: currentColor;
  line-height: normal;
  font-weight: normal;
  margin-left: 0.875rem;
}
.toastify-center {
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  max-width: calc(100% - 48px);
}
[data-bs-theme=dark] .toastify.alert {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}
[data-bs-theme=dark] .btn-secondary {
  --bs-btn-color: rgb(240, 240, 245);
  --bs-btn-bg: rgb(50, 50, 66);
  --bs-btn-border-color: rgb(50, 50, 66);
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #51515e;
  --bs-btn-hover-border-color: #474755;
  --bs-btn-focus-shadow-rgb: 79, 79, 93;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #5b5b68;
  --bs-btn-active-border-color: #474755;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: rgb(50, 50, 66);
  --bs-btn-disabled-border-color: rgb(50, 50, 66);
}
[data-bs-theme=dark] .form-control {
  background-color: rgb(50, 50, 66);
  color: rgb(255, 255, 255);
  border: var(--bs-border-width) solid rgb(50, 50, 66);
}`;
  document.head.appendChild(__vite_style__);
  function makeMap(str, expectsLowerCase) {
    const map = /* @__PURE__ */ Object.create(null);
    const list2 = str.split(",");
    for (let i = 0; i < list2.length; i++) {
      map[list2[i]] = true;
    }
    return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
  }
  function normalizeStyle(value) {
    if (isArray$1(value)) {
      const res = {};
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
        if (normalized) {
          for (const key in normalized) {
            res[key] = normalized[key];
          }
        }
      }
      return res;
    } else if (isString(value)) {
      return value;
    } else if (isObject(value)) {
      return value;
    }
  }
  const listDelimiterRE = /;(?![^(]*\))/g;
  const propertyDelimiterRE = /:([^]+)/;
  const styleCommentRE = /\/\*.*?\*\//gs;
  function parseStringStyle(cssText) {
    const ret = {};
    cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
      if (item) {
        const tmp = item.split(propertyDelimiterRE);
        tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return ret;
  }
  function normalizeClass(value) {
    let res = "";
    if (isString(value)) {
      res = value;
    } else if (isArray$1(value)) {
      for (let i = 0; i < value.length; i++) {
        const normalized = normalizeClass(value[i]);
        if (normalized) {
          res += normalized + " ";
        }
      }
    } else if (isObject(value)) {
      for (const name in value) {
        if (value[name]) {
          res += name + " ";
        }
      }
    }
    return res.trim();
  }
  const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
  function includeBooleanAttr(value) {
    return !!value || value === "";
  }
  function looseCompareArrays(a, b) {
    if (a.length !== b.length)
      return false;
    let equal = true;
    for (let i = 0; equal && i < a.length; i++) {
      equal = looseEqual(a[i], b[i]);
    }
    return equal;
  }
  function looseEqual(a, b) {
    if (a === b)
      return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = isSymbol(a);
    bValidType = isSymbol(b);
    if (aValidType || bValidType) {
      return a === b;
    }
    aValidType = isArray$1(a);
    bValidType = isArray$1(b);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
      if (!aValidType || !bValidType) {
        return false;
      }
      const aKeysCount = Object.keys(a).length;
      const bKeysCount = Object.keys(b).length;
      if (aKeysCount !== bKeysCount) {
        return false;
      }
      for (const key in a) {
        const aHasKey = a.hasOwnProperty(key);
        const bHasKey = b.hasOwnProperty(key);
        if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
          return false;
        }
      }
    }
    return String(a) === String(b);
  }
  function looseIndexOf(arr, val) {
    return arr.findIndex((item) => looseEqual(item, val));
  }
  const toDisplayString = (val) => {
    return isString(val) ? val : val == null ? "" : isArray$1(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
  };
  const replacer = (_key, val) => {
    if (val && val.__v_isRef) {
      return replacer(_key, val.value);
    } else if (isMap(val)) {
      return {
        [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
          entries[`${key} =>`] = val2;
          return entries;
        }, {})
      };
    } else if (isSet(val)) {
      return {
        [`Set(${val.size})`]: [...val.values()]
      };
    } else if (isObject(val) && !isArray$1(val) && !isPlainObject$1(val)) {
      return String(val);
    }
    return val;
  };
  const EMPTY_OBJ = {};
  const EMPTY_ARR = [];
  const NOOP = () => {
  };
  const NO = () => false;
  const onRE = /^on[^a-z]/;
  const isOn = (key) => onRE.test(key);
  const isModelListener = (key) => key.startsWith("onUpdate:");
  const extend = Object.assign;
  const remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
      arr.splice(i, 1);
    }
  };
  const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty$1.call(val, key);
  const isArray$1 = Array.isArray;
  const isMap = (val) => toTypeString(val) === "[object Map]";
  const isSet = (val) => toTypeString(val) === "[object Set]";
  const isDate = (val) => toTypeString(val) === "[object Date]";
  const isFunction = (val) => typeof val === "function";
  const isString = (val) => typeof val === "string";
  const isSymbol = (val) => typeof val === "symbol";
  const isObject = (val) => val !== null && typeof val === "object";
  const isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
  };
  const objectToString = Object.prototype.toString;
  const toTypeString = (value) => objectToString.call(value);
  const toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  const isPlainObject$1 = (val) => toTypeString(val) === "[object Object]";
  const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  const isReservedProp = /* @__PURE__ */ makeMap(
    // the leading comma is intentional so empty string "" is also included
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  );
  const cacheStringFunction = (fn) => {
    const cache = /* @__PURE__ */ Object.create(null);
    return (str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  };
  const camelizeRE = /-(\w)/g;
  const camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
  });
  const hyphenateRE = /\B([A-Z])/g;
  const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
  const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
  const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
  const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
  const invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
      fns[i](arg);
    }
  };
  const def = (obj, key, value) => {
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: false,
      value
    });
  };
  const looseToNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
  };
  let _globalThis;
  const getGlobalThis = () => {
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
  };
  let activeEffectScope;
  class EffectScope {
    constructor(detached = false) {
      this.detached = detached;
      this._active = true;
      this.effects = [];
      this.cleanups = [];
      this.parent = activeEffectScope;
      if (!detached && activeEffectScope) {
        this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
      }
    }
    get active() {
      return this._active;
    }
    run(fn) {
      if (this._active) {
        const currentEffectScope = activeEffectScope;
        try {
          activeEffectScope = this;
          return fn();
        } finally {
          activeEffectScope = currentEffectScope;
        }
      }
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    on() {
      activeEffectScope = this;
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    off() {
      activeEffectScope = this.parent;
    }
    stop(fromParent) {
      if (this._active) {
        let i, l;
        for (i = 0, l = this.effects.length; i < l; i++) {
          this.effects[i].stop();
        }
        for (i = 0, l = this.cleanups.length; i < l; i++) {
          this.cleanups[i]();
        }
        if (this.scopes) {
          for (i = 0, l = this.scopes.length; i < l; i++) {
            this.scopes[i].stop(true);
          }
        }
        if (!this.detached && this.parent && !fromParent) {
          const last = this.parent.scopes.pop();
          if (last && last !== this) {
            this.parent.scopes[this.index] = last;
            last.index = this.index;
          }
        }
        this.parent = void 0;
        this._active = false;
      }
    }
  }
  function effectScope(detached) {
    return new EffectScope(detached);
  }
  function recordEffectScope(effect2, scope = activeEffectScope) {
    if (scope && scope.active) {
      scope.effects.push(effect2);
    }
  }
  function getCurrentScope() {
    return activeEffectScope;
  }
  function onScopeDispose(fn) {
    if (activeEffectScope) {
      activeEffectScope.cleanups.push(fn);
    }
  }
  const createDep = (effects) => {
    const dep = new Set(effects);
    dep.w = 0;
    dep.n = 0;
    return dep;
  };
  const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
  const newTracked = (dep) => (dep.n & trackOpBit) > 0;
  const initDepMarkers = ({ deps }) => {
    if (deps.length) {
      for (let i = 0; i < deps.length; i++) {
        deps[i].w |= trackOpBit;
      }
    }
  };
  const finalizeDepMarkers = (effect2) => {
    const { deps } = effect2;
    if (deps.length) {
      let ptr = 0;
      for (let i = 0; i < deps.length; i++) {
        const dep = deps[i];
        if (wasTracked(dep) && !newTracked(dep)) {
          dep.delete(effect2);
        } else {
          deps[ptr++] = dep;
        }
        dep.w &= ~trackOpBit;
        dep.n &= ~trackOpBit;
      }
      deps.length = ptr;
    }
  };
  const targetMap = /* @__PURE__ */ new WeakMap();
  let effectTrackDepth = 0;
  let trackOpBit = 1;
  const maxMarkerBits = 30;
  let activeEffect;
  const ITERATE_KEY = Symbol("");
  const MAP_KEY_ITERATE_KEY = Symbol("");
  class ReactiveEffect {
    constructor(fn, scheduler = null, scope) {
      this.fn = fn;
      this.scheduler = scheduler;
      this.active = true;
      this.deps = [];
      this.parent = void 0;
      recordEffectScope(this, scope);
    }
    run() {
      if (!this.active) {
        return this.fn();
      }
      let parent = activeEffect;
      let lastShouldTrack = shouldTrack;
      while (parent) {
        if (parent === this) {
          return;
        }
        parent = parent.parent;
      }
      try {
        this.parent = activeEffect;
        activeEffect = this;
        shouldTrack = true;
        trackOpBit = 1 << ++effectTrackDepth;
        if (effectTrackDepth <= maxMarkerBits) {
          initDepMarkers(this);
        } else {
          cleanupEffect(this);
        }
        return this.fn();
      } finally {
        if (effectTrackDepth <= maxMarkerBits) {
          finalizeDepMarkers(this);
        }
        trackOpBit = 1 << --effectTrackDepth;
        activeEffect = this.parent;
        shouldTrack = lastShouldTrack;
        this.parent = void 0;
        if (this.deferStop) {
          this.stop();
        }
      }
    }
    stop() {
      if (activeEffect === this) {
        this.deferStop = true;
      } else if (this.active) {
        cleanupEffect(this);
        if (this.onStop) {
          this.onStop();
        }
        this.active = false;
      }
    }
  }
  function cleanupEffect(effect2) {
    const { deps } = effect2;
    if (deps.length) {
      for (let i = 0; i < deps.length; i++) {
        deps[i].delete(effect2);
      }
      deps.length = 0;
    }
  }
  let shouldTrack = true;
  const trackStack = [];
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }
  function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
  }
  function track$1(target, type, key) {
    if (shouldTrack && activeEffect) {
      let depsMap = targetMap.get(target);
      if (!depsMap) {
        targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
      }
      let dep = depsMap.get(key);
      if (!dep) {
        depsMap.set(key, dep = createDep());
      }
      trackEffects(dep);
    }
  }
  function trackEffects(dep, debuggerEventExtraInfo) {
    let shouldTrack2 = false;
    if (effectTrackDepth <= maxMarkerBits) {
      if (!newTracked(dep)) {
        dep.n |= trackOpBit;
        shouldTrack2 = !wasTracked(dep);
      }
    } else {
      shouldTrack2 = !dep.has(activeEffect);
    }
    if (shouldTrack2) {
      dep.add(activeEffect);
      activeEffect.deps.push(dep);
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      return;
    }
    let deps = [];
    if (type === "clear") {
      deps = [...depsMap.values()];
    } else if (key === "length" && isArray$1(target)) {
      const newLength = Number(newValue);
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 >= newLength) {
          deps.push(dep);
        }
      });
    } else {
      if (key !== void 0) {
        deps.push(depsMap.get(key));
      }
      switch (type) {
        case "add":
          if (!isArray$1(target)) {
            deps.push(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isIntegerKey(key)) {
            deps.push(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!isArray$1(target)) {
            deps.push(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            deps.push(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
    if (deps.length === 1) {
      if (deps[0]) {
        {
          triggerEffects(deps[0]);
        }
      }
    } else {
      const effects = [];
      for (const dep of deps) {
        if (dep) {
          effects.push(...dep);
        }
      }
      {
        triggerEffects(createDep(effects));
      }
    }
  }
  function triggerEffects(dep, debuggerEventExtraInfo) {
    const effects = isArray$1(dep) ? dep : [...dep];
    for (const effect2 of effects) {
      if (effect2.computed) {
        triggerEffect(effect2);
      }
    }
    for (const effect2 of effects) {
      if (!effect2.computed) {
        triggerEffect(effect2);
      }
    }
  }
  function triggerEffect(effect2, debuggerEventExtraInfo) {
    if (effect2 !== activeEffect || effect2.allowRecurse) {
      if (effect2.scheduler) {
        effect2.scheduler();
      } else {
        effect2.run();
      }
    }
  }
  function getDepFromReactive(object, key) {
    var _a;
    return (_a = targetMap.get(object)) === null || _a === void 0 ? void 0 : _a.get(key);
  }
  const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
  const builtInSymbols = new Set(
    /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
  );
  const get$1 = /* @__PURE__ */ createGetter();
  const shallowGet = /* @__PURE__ */ createGetter(false, true);
  const readonlyGet = /* @__PURE__ */ createGetter(true);
  const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
  function createArrayInstrumentations() {
    const instrumentations = {};
    ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
      instrumentations[key] = function(...args) {
        const arr = toRaw(this);
        for (let i = 0, l = this.length; i < l; i++) {
          track$1(arr, "get", i + "");
        }
        const res = arr[key](...args);
        if (res === -1 || res === false) {
          return arr[key](...args.map(toRaw));
        } else {
          return res;
        }
      };
    });
    ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
      instrumentations[key] = function(...args) {
        pauseTracking();
        const res = toRaw(this)[key].apply(this, args);
        resetTracking();
        return res;
      };
    });
    return instrumentations;
  }
  function hasOwnProperty(key) {
    const obj = toRaw(this);
    track$1(obj, "has", key);
    return obj.hasOwnProperty(key);
  }
  function createGetter(isReadonly2 = false, shallow = false) {
    return function get2(target, key, receiver) {
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_isShallow") {
        return shallow;
      } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
        return target;
      }
      const targetIsArray = isArray$1(target);
      if (!isReadonly2) {
        if (targetIsArray && hasOwn(arrayInstrumentations, key)) {
          return Reflect.get(arrayInstrumentations, key, receiver);
        }
        if (key === "hasOwnProperty") {
          return hasOwnProperty;
        }
      }
      const res = Reflect.get(target, key, receiver);
      if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }
      if (!isReadonly2) {
        track$1(target, "get", key);
      }
      if (shallow) {
        return res;
      }
      if (isRef(res)) {
        return targetIsArray && isIntegerKey(key) ? res : res.value;
      }
      if (isObject(res)) {
        return isReadonly2 ? readonly(res) : reactive(res);
      }
      return res;
    };
  }
  const set$1 = /* @__PURE__ */ createSetter();
  const shallowSet = /* @__PURE__ */ createSetter(true);
  function createSetter(shallow = false) {
    return function set2(target, key, value, receiver) {
      let oldValue = target[key];
      if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
        return false;
      }
      if (!shallow) {
        if (!isShallow(value) && !isReadonly(value)) {
          oldValue = toRaw(oldValue);
          value = toRaw(value);
        }
        if (!isArray$1(target) && isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        }
      }
      const hadKey = isArray$1(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
      const result = Reflect.set(target, key, value, receiver);
      if (target === toRaw(receiver)) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value);
        }
      }
      return result;
    };
  }
  function deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0);
    }
    return result;
  }
  function has$1(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track$1(target, "has", key);
    }
    return result;
  }
  function ownKeys(target) {
    track$1(target, "iterate", isArray$1(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }
  const mutableHandlers = {
    get: get$1,
    set: set$1,
    deleteProperty,
    has: has$1,
    ownKeys
  };
  const readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
      return true;
    },
    deleteProperty(target, key) {
      return true;
    }
  };
  const shallowReactiveHandlers = /* @__PURE__ */ extend({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
  });
  const toShallow = (value) => value;
  const getProto = (v) => Reflect.getPrototypeOf(v);
  function get$2(target, key, isReadonly2 = false, isShallow2 = false) {
    target = target[
      "__v_raw"
      /* ReactiveFlags.RAW */
    ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (!isReadonly2) {
      if (key !== rawKey) {
        track$1(rawTarget, "get", key);
      }
      track$1(rawTarget, "get", rawKey);
    }
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) {
      return wrap(target.get(key));
    } else if (has2.call(rawTarget, rawKey)) {
      return wrap(target.get(rawKey));
    } else if (target !== rawTarget) {
      target.get(key);
    }
  }
  function has(key, isReadonly2 = false) {
    const target = this[
      "__v_raw"
      /* ReactiveFlags.RAW */
    ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (!isReadonly2) {
      if (key !== rawKey) {
        track$1(rawTarget, "has", key);
      }
      track$1(rawTarget, "has", rawKey);
    }
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
  }
  function size(target, isReadonly2 = false) {
    target = target[
      "__v_raw"
      /* ReactiveFlags.RAW */
    ];
    !isReadonly2 && track$1(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
  }
  function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
      target.add(value);
      trigger(target, "add", value, value);
    }
    return this;
  }
  function set(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get2 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    }
    const oldValue = get2.call(target, key);
    target.set(key, value);
    if (!hadKey) {
      trigger(target, "add", key, value);
    } else if (hasChanged(value, oldValue)) {
      trigger(target, "set", key, value);
    }
    return this;
  }
  function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get2 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    }
    get2 ? get2.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) {
      trigger(target, "delete", key, void 0);
    }
    return result;
  }
  function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const result = target.clear();
    if (hadItems) {
      trigger(target, "clear", void 0, void 0);
    }
    return result;
  }
  function createForEach(isReadonly2, isShallow2) {
    return function forEach(callback, thisArg) {
      const observed = this;
      const target = observed[
        "__v_raw"
        /* ReactiveFlags.RAW */
      ];
      const rawTarget = toRaw(target);
      const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
      !isReadonly2 && track$1(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    };
  }
  function createIterableMethod(method, isReadonly2, isShallow2) {
    return function(...args) {
      const target = this[
        "__v_raw"
        /* ReactiveFlags.RAW */
      ];
      const rawTarget = toRaw(target);
      const targetIsMap = isMap(rawTarget);
      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
      !isReadonly2 && track$1(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
      return {
        // iterator protocol
        next() {
          const { value, done } = innerIterator.next();
          return done ? { value, done } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        },
        // iterable protocol
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function createReadonlyMethod(type) {
    return function(...args) {
      return type === "delete" ? false : this;
    };
  }
  function createInstrumentations() {
    const mutableInstrumentations2 = {
      get(key) {
        return get$2(this, key);
      },
      get size() {
        return size(this);
      },
      has,
      add,
      set,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, false)
    };
    const shallowInstrumentations2 = {
      get(key) {
        return get$2(this, key, false, true);
      },
      get size() {
        return size(this);
      },
      has,
      add,
      set,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, true)
    };
    const readonlyInstrumentations2 = {
      get(key) {
        return get$2(this, key, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has.call(this, key, true);
      },
      add: createReadonlyMethod(
        "add"
        /* TriggerOpTypes.ADD */
      ),
      set: createReadonlyMethod(
        "set"
        /* TriggerOpTypes.SET */
      ),
      delete: createReadonlyMethod(
        "delete"
        /* TriggerOpTypes.DELETE */
      ),
      clear: createReadonlyMethod(
        "clear"
        /* TriggerOpTypes.CLEAR */
      ),
      forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations2 = {
      get(key) {
        return get$2(this, key, true, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has.call(this, key, true);
      },
      add: createReadonlyMethod(
        "add"
        /* TriggerOpTypes.ADD */
      ),
      set: createReadonlyMethod(
        "set"
        /* TriggerOpTypes.SET */
      ),
      delete: createReadonlyMethod(
        "delete"
        /* TriggerOpTypes.DELETE */
      ),
      clear: createReadonlyMethod(
        "clear"
        /* TriggerOpTypes.CLEAR */
      ),
      forEach: createForEach(true, true)
    };
    const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
    iteratorMethods.forEach((method) => {
      mutableInstrumentations2[method] = createIterableMethod(method, false, false);
      readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
      shallowInstrumentations2[method] = createIterableMethod(method, false, true);
      shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
    });
    return [
      mutableInstrumentations2,
      readonlyInstrumentations2,
      shallowInstrumentations2,
      shallowReadonlyInstrumentations2
    ];
  }
  const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
  function createInstrumentationGetter(isReadonly2, shallow) {
    const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver) => {
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_raw") {
        return target;
      }
      return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
  }
  const mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
  };
  const shallowCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, true)
  };
  const readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
  };
  const reactiveMap = /* @__PURE__ */ new WeakMap();
  const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
  const readonlyMap = /* @__PURE__ */ new WeakMap();
  const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function getTargetType(value) {
    return value[
      "__v_skip"
      /* ReactiveFlags.SKIP */
    ] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
  }
  function reactive(target) {
    if (isReadonly(target)) {
      return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
  }
  function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
  }
  function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
  }
  function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
      return target;
    }
    if (target[
      "__v_raw"
      /* ReactiveFlags.RAW */
    ] && !(isReadonly2 && target[
      "__v_isReactive"
      /* ReactiveFlags.IS_REACTIVE */
    ])) {
      return target;
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    const targetType = getTargetType(target);
    if (targetType === 0) {
      return target;
    }
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
  }
  function isReactive(value) {
    if (isReadonly(value)) {
      return isReactive(value[
        "__v_raw"
        /* ReactiveFlags.RAW */
      ]);
    }
    return !!(value && value[
      "__v_isReactive"
      /* ReactiveFlags.IS_REACTIVE */
    ]);
  }
  function isReadonly(value) {
    return !!(value && value[
      "__v_isReadonly"
      /* ReactiveFlags.IS_READONLY */
    ]);
  }
  function isShallow(value) {
    return !!(value && value[
      "__v_isShallow"
      /* ReactiveFlags.IS_SHALLOW */
    ]);
  }
  function isProxy(value) {
    return isReactive(value) || isReadonly(value);
  }
  function toRaw(observed) {
    const raw = observed && observed[
      "__v_raw"
      /* ReactiveFlags.RAW */
    ];
    return raw ? toRaw(raw) : observed;
  }
  function markRaw(value) {
    def(value, "__v_skip", true);
    return value;
  }
  const toReactive = (value) => isObject(value) ? reactive(value) : value;
  const toReadonly = (value) => isObject(value) ? readonly(value) : value;
  function trackRefValue(ref2) {
    if (shouldTrack && activeEffect) {
      ref2 = toRaw(ref2);
      {
        trackEffects(ref2.dep || (ref2.dep = createDep()));
      }
    }
  }
  function triggerRefValue(ref2, newVal) {
    ref2 = toRaw(ref2);
    const dep = ref2.dep;
    if (dep) {
      {
        triggerEffects(dep);
      }
    }
  }
  function isRef(r) {
    return !!(r && r.__v_isRef === true);
  }
  function ref(value) {
    return createRef(value, false);
  }
  function shallowRef(value) {
    return createRef(value, true);
  }
  function createRef(rawValue, shallow) {
    if (isRef(rawValue)) {
      return rawValue;
    }
    return new RefImpl(rawValue, shallow);
  }
  class RefImpl {
    constructor(value, __v_isShallow) {
      this.__v_isShallow = __v_isShallow;
      this.dep = void 0;
      this.__v_isRef = true;
      this._rawValue = __v_isShallow ? value : toRaw(value);
      this._value = __v_isShallow ? value : toReactive(value);
    }
    get value() {
      trackRefValue(this);
      return this._value;
    }
    set value(newVal) {
      const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
      newVal = useDirectValue ? newVal : toRaw(newVal);
      if (hasChanged(newVal, this._rawValue)) {
        this._rawValue = newVal;
        this._value = useDirectValue ? newVal : toReactive(newVal);
        triggerRefValue(this);
      }
    }
  }
  function unref(ref2) {
    return isRef(ref2) ? ref2.value : ref2;
  }
  const shallowUnwrapHandlers = {
    get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver) => {
      const oldValue = target[key];
      if (isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      } else {
        return Reflect.set(target, key, value, receiver);
      }
    }
  };
  function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
  }
  function toRefs(object) {
    const ret = isArray$1(object) ? new Array(object.length) : {};
    for (const key in object) {
      ret[key] = toRef(object, key);
    }
    return ret;
  }
  class ObjectRefImpl {
    constructor(_object, _key, _defaultValue) {
      this._object = _object;
      this._key = _key;
      this._defaultValue = _defaultValue;
      this.__v_isRef = true;
    }
    get value() {
      const val = this._object[this._key];
      return val === void 0 ? this._defaultValue : val;
    }
    set value(newVal) {
      this._object[this._key] = newVal;
    }
    get dep() {
      return getDepFromReactive(toRaw(this._object), this._key);
    }
  }
  function toRef(object, key, defaultValue) {
    const val = object[key];
    return isRef(val) ? val : new ObjectRefImpl(object, key, defaultValue);
  }
  var _a$1;
  class ComputedRefImpl {
    constructor(getter, _setter, isReadonly2, isSSR) {
      this._setter = _setter;
      this.dep = void 0;
      this.__v_isRef = true;
      this[_a$1] = false;
      this._dirty = true;
      this.effect = new ReactiveEffect(getter, () => {
        if (!this._dirty) {
          this._dirty = true;
          triggerRefValue(this);
        }
      });
      this.effect.computed = this;
      this.effect.active = this._cacheable = !isSSR;
      this[
        "__v_isReadonly"
        /* ReactiveFlags.IS_READONLY */
      ] = isReadonly2;
    }
    get value() {
      const self2 = toRaw(this);
      trackRefValue(self2);
      if (self2._dirty || !self2._cacheable) {
        self2._dirty = false;
        self2._value = self2.effect.run();
      }
      return self2._value;
    }
    set value(newValue) {
      this._setter(newValue);
    }
  }
  _a$1 = "__v_isReadonly";
  function computed$1(getterOrOptions, debugOptions, isSSR = false) {
    let getter;
    let setter;
    const onlyGetter = isFunction(getterOrOptions);
    if (onlyGetter) {
      getter = getterOrOptions;
      setter = NOOP;
    } else {
      getter = getterOrOptions.get;
      setter = getterOrOptions.set;
    }
    const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
    return cRef;
  }
  function warn(msg, ...args) {
    return;
  }
  function callWithErrorHandling(fn, instance, type, args) {
    let res;
    try {
      res = args ? fn(...args) : fn();
    } catch (err) {
      handleError(err, instance, type);
    }
    return res;
  }
  function callWithAsyncErrorHandling(fn, instance, type, args) {
    if (isFunction(fn)) {
      const res = callWithErrorHandling(fn, instance, type, args);
      if (res && isPromise(res)) {
        res.catch((err) => {
          handleError(err, instance, type);
        });
      }
      return res;
    }
    const values = [];
    for (let i = 0; i < fn.length; i++) {
      values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    }
    return values;
  }
  function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    if (instance) {
      let cur = instance.parent;
      const exposedInstance = instance.proxy;
      const errorInfo = type;
      while (cur) {
        const errorCapturedHooks = cur.ec;
        if (errorCapturedHooks) {
          for (let i = 0; i < errorCapturedHooks.length; i++) {
            if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
              return;
            }
          }
        }
        cur = cur.parent;
      }
      const appErrorHandler = instance.appContext.config.errorHandler;
      if (appErrorHandler) {
        callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
        return;
      }
    }
    logError(err, type, contextVNode, throwInDev);
  }
  function logError(err, type, contextVNode, throwInDev = true) {
    {
      console.error(err);
    }
  }
  let isFlushing = false;
  let isFlushPending = false;
  const queue = [];
  let flushIndex = 0;
  const pendingPostFlushCbs = [];
  let activePostFlushCbs = null;
  let postFlushIndex = 0;
  const resolvedPromise = /* @__PURE__ */ Promise.resolve();
  let currentFlushPromise = null;
  function nextTick(fn) {
    const p2 = currentFlushPromise || resolvedPromise;
    return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
  }
  function findInsertionIndex(id) {
    let start2 = flushIndex + 1;
    let end2 = queue.length;
    while (start2 < end2) {
      const middle = start2 + end2 >>> 1;
      const middleJobId = getId(queue[middle]);
      middleJobId < id ? start2 = middle + 1 : end2 = middle;
    }
    return start2;
  }
  function queueJob(job) {
    if (!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) {
      if (job.id == null) {
        queue.push(job);
      } else {
        queue.splice(findInsertionIndex(job.id), 0, job);
      }
      queueFlush();
    }
  }
  function queueFlush() {
    if (!isFlushing && !isFlushPending) {
      isFlushPending = true;
      currentFlushPromise = resolvedPromise.then(flushJobs);
    }
  }
  function invalidateJob(job) {
    const i = queue.indexOf(job);
    if (i > flushIndex) {
      queue.splice(i, 1);
    }
  }
  function queuePostFlushCb(cb) {
    if (!isArray$1(cb)) {
      if (!activePostFlushCbs || !activePostFlushCbs.includes(cb, cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex)) {
        pendingPostFlushCbs.push(cb);
      }
    } else {
      pendingPostFlushCbs.push(...cb);
    }
    queueFlush();
  }
  function flushPreFlushCbs(seen2, i = isFlushing ? flushIndex + 1 : 0) {
    for (; i < queue.length; i++) {
      const cb = queue[i];
      if (cb && cb.pre) {
        queue.splice(i, 1);
        i--;
        cb();
      }
    }
  }
  function flushPostFlushCbs(seen2) {
    if (pendingPostFlushCbs.length) {
      const deduped = [...new Set(pendingPostFlushCbs)];
      pendingPostFlushCbs.length = 0;
      if (activePostFlushCbs) {
        activePostFlushCbs.push(...deduped);
        return;
      }
      activePostFlushCbs = deduped;
      activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
      for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
        activePostFlushCbs[postFlushIndex]();
      }
      activePostFlushCbs = null;
      postFlushIndex = 0;
    }
  }
  const getId = (job) => job.id == null ? Infinity : job.id;
  const comparator = (a, b) => {
    const diff = getId(a) - getId(b);
    if (diff === 0) {
      if (a.pre && !b.pre)
        return -1;
      if (b.pre && !a.pre)
        return 1;
    }
    return diff;
  };
  function flushJobs(seen2) {
    isFlushPending = false;
    isFlushing = true;
    queue.sort(comparator);
    const check = NOOP;
    try {
      for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
        const job = queue[flushIndex];
        if (job && job.active !== false) {
          if (false)
            ;
          callWithErrorHandling(
            job,
            null,
            14
            /* ErrorCodes.SCHEDULER */
          );
        }
      }
    } finally {
      flushIndex = 0;
      queue.length = 0;
      flushPostFlushCbs();
      isFlushing = false;
      currentFlushPromise = null;
      if (queue.length || pendingPostFlushCbs.length) {
        flushJobs();
      }
    }
  }
  function emit(instance, event, ...rawArgs) {
    if (instance.isUnmounted)
      return;
    const props = instance.vnode.props || EMPTY_OBJ;
    let args = rawArgs;
    const isModelListener2 = event.startsWith("update:");
    const modelArg = isModelListener2 && event.slice(7);
    if (modelArg && modelArg in props) {
      const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
      const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
      if (trim) {
        args = rawArgs.map((a) => isString(a) ? a.trim() : a);
      }
      if (number) {
        args = rawArgs.map(looseToNumber);
      }
    }
    let handlerName;
    let handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
    props[handlerName = toHandlerKey(camelize(event))];
    if (!handler && isModelListener2) {
      handler = props[handlerName = toHandlerKey(hyphenate(event))];
    }
    if (handler) {
      callWithAsyncErrorHandling(handler, instance, 6, args);
    }
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
      if (!instance.emitted) {
        instance.emitted = {};
      } else if (instance.emitted[handlerName]) {
        return;
      }
      instance.emitted[handlerName] = true;
      callWithAsyncErrorHandling(onceHandler, instance, 6, args);
    }
  }
  function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.emitsCache;
    const cached = cache.get(comp);
    if (cached !== void 0) {
      return cached;
    }
    const raw = comp.emits;
    let normalized = {};
    let hasExtends = false;
    if (!isFunction(comp)) {
      const extendEmits = (raw2) => {
        const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
        if (normalizedFromExtend) {
          hasExtends = true;
          extend(normalized, normalizedFromExtend);
        }
      };
      if (!asMixin && appContext.mixins.length) {
        appContext.mixins.forEach(extendEmits);
      }
      if (comp.extends) {
        extendEmits(comp.extends);
      }
      if (comp.mixins) {
        comp.mixins.forEach(extendEmits);
      }
    }
    if (!raw && !hasExtends) {
      if (isObject(comp)) {
        cache.set(comp, null);
      }
      return null;
    }
    if (isArray$1(raw)) {
      raw.forEach((key) => normalized[key] = null);
    } else {
      extend(normalized, raw);
    }
    if (isObject(comp)) {
      cache.set(comp, normalized);
    }
    return normalized;
  }
  function isEmitListener(options, key) {
    if (!options || !isOn(key)) {
      return false;
    }
    key = key.slice(2).replace(/Once$/, "");
    return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
  }
  let currentRenderingInstance = null;
  let currentScopeId = null;
  function setCurrentRenderingInstance(instance) {
    const prev = currentRenderingInstance;
    currentRenderingInstance = instance;
    currentScopeId = instance && instance.type.__scopeId || null;
    return prev;
  }
  function pushScopeId(id) {
    currentScopeId = id;
  }
  function popScopeId() {
    currentScopeId = null;
  }
  function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
    if (!ctx)
      return fn;
    if (fn._n) {
      return fn;
    }
    const renderFnWithContext = (...args) => {
      if (renderFnWithContext._d) {
        setBlockTracking(-1);
      }
      const prevInstance = setCurrentRenderingInstance(ctx);
      let res;
      try {
        res = fn(...args);
      } finally {
        setCurrentRenderingInstance(prevInstance);
        if (renderFnWithContext._d) {
          setBlockTracking(1);
        }
      }
      return res;
    };
    renderFnWithContext._n = true;
    renderFnWithContext._c = true;
    renderFnWithContext._d = true;
    return renderFnWithContext;
  }
  function markAttrsAccessed() {
  }
  function renderComponentRoot(instance) {
    const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit: emit2, render, renderCache, data: data2, setupState, ctx, inheritAttrs } = instance;
    let result;
    let fallthroughAttrs;
    const prev = setCurrentRenderingInstance(instance);
    try {
      if (vnode.shapeFlag & 4) {
        const proxyToUse = withProxy || proxy;
        result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data2, ctx));
        fallthroughAttrs = attrs;
      } else {
        const render2 = Component;
        if (false)
          ;
        result = normalizeVNode(render2.length > 1 ? render2(props, false ? {
          get attrs() {
            markAttrsAccessed();
            return attrs;
          },
          slots,
          emit: emit2
        } : { attrs, slots, emit: emit2 }) : render2(
          props,
          null
          /* we know it doesn't need it */
        ));
        fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
      }
    } catch (err) {
      blockStack.length = 0;
      handleError(
        err,
        instance,
        1
        /* ErrorCodes.RENDER_FUNCTION */
      );
      result = createVNode(Comment);
    }
    let root = result;
    if (fallthroughAttrs && inheritAttrs !== false) {
      const keys = Object.keys(fallthroughAttrs);
      const { shapeFlag } = root;
      if (keys.length) {
        if (shapeFlag & (1 | 6)) {
          if (propsOptions && keys.some(isModelListener)) {
            fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
          }
          root = cloneVNode(root, fallthroughAttrs);
        }
      }
    }
    if (vnode.dirs) {
      root = cloneVNode(root);
      root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    }
    if (vnode.transition) {
      root.transition = vnode.transition;
    }
    {
      result = root;
    }
    setCurrentRenderingInstance(prev);
    return result;
  }
  const getFunctionalFallthrough = (attrs) => {
    let res;
    for (const key in attrs) {
      if (key === "class" || key === "style" || isOn(key)) {
        (res || (res = {}))[key] = attrs[key];
      }
    }
    return res;
  };
  const filterModelListeners = (attrs, props) => {
    const res = {};
    for (const key in attrs) {
      if (!isModelListener(key) || !(key.slice(9) in props)) {
        res[key] = attrs[key];
      }
    }
    return res;
  };
  function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps, children: prevChildren, component } = prevVNode;
    const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
    const emits = component.emitsOptions;
    if (nextVNode.dirs || nextVNode.transition) {
      return true;
    }
    if (optimized && patchFlag >= 0) {
      if (patchFlag & 1024) {
        return true;
      }
      if (patchFlag & 16) {
        if (!prevProps) {
          return !!nextProps;
        }
        return hasPropsChanged(prevProps, nextProps, emits);
      } else if (patchFlag & 8) {
        const dynamicProps = nextVNode.dynamicProps;
        for (let i = 0; i < dynamicProps.length; i++) {
          const key = dynamicProps[i];
          if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
            return true;
          }
        }
      }
    } else {
      if (prevChildren || nextChildren) {
        if (!nextChildren || !nextChildren.$stable) {
          return true;
        }
      }
      if (prevProps === nextProps) {
        return false;
      }
      if (!prevProps) {
        return !!nextProps;
      }
      if (!nextProps) {
        return true;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
  }
  function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) {
      return true;
    }
    for (let i = 0; i < nextKeys.length; i++) {
      const key = nextKeys[i];
      if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
        return true;
      }
    }
    return false;
  }
  function updateHOCHostEl({ vnode, parent }, el) {
    while (parent && parent.subTree === vnode) {
      (vnode = parent.vnode).el = el;
      parent = parent.parent;
    }
  }
  const isSuspense = (type) => type.__isSuspense;
  function queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
      if (isArray$1(fn)) {
        suspense.effects.push(...fn);
      } else {
        suspense.effects.push(fn);
      }
    } else {
      queuePostFlushCb(fn);
    }
  }
  function provide(key, value) {
    if (!currentInstance)
      ;
    else {
      let provides = currentInstance.provides;
      const parentProvides = currentInstance.parent && currentInstance.parent.provides;
      if (parentProvides === provides) {
        provides = currentInstance.provides = Object.create(parentProvides);
      }
      provides[key] = value;
    }
  }
  function inject(key, defaultValue, treatDefaultAsFactory = false) {
    const instance = currentInstance || currentRenderingInstance;
    if (instance) {
      const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
      if (provides && key in provides) {
        return provides[key];
      } else if (arguments.length > 1) {
        return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
      } else
        ;
    }
  }
  function watchEffect(effect2, options) {
    return doWatch(effect2, null, options);
  }
  function watchPostEffect(effect2, options) {
    return doWatch(effect2, null, { flush: "post" });
  }
  const INITIAL_WATCHER_VALUE = {};
  function watch(source, cb, options) {
    return doWatch(source, cb, options);
  }
  function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
    const instance = getCurrentScope() === (currentInstance === null || currentInstance === void 0 ? void 0 : currentInstance.scope) ? currentInstance : null;
    let getter;
    let forceTrigger = false;
    let isMultiSource = false;
    if (isRef(source)) {
      getter = () => source.value;
      forceTrigger = isShallow(source);
    } else if (isReactive(source)) {
      getter = () => source;
      deep = true;
    } else if (isArray$1(source)) {
      isMultiSource = true;
      forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
      getter = () => source.map((s) => {
        if (isRef(s)) {
          return s.value;
        } else if (isReactive(s)) {
          return traverse(s);
        } else if (isFunction(s)) {
          return callWithErrorHandling(
            s,
            instance,
            2
            /* ErrorCodes.WATCH_GETTER */
          );
        } else
          ;
      });
    } else if (isFunction(source)) {
      if (cb) {
        getter = () => callWithErrorHandling(
          source,
          instance,
          2
          /* ErrorCodes.WATCH_GETTER */
        );
      } else {
        getter = () => {
          if (instance && instance.isUnmounted) {
            return;
          }
          if (cleanup) {
            cleanup();
          }
          return callWithAsyncErrorHandling(source, instance, 3, [onCleanup]);
        };
      }
    } else {
      getter = NOOP;
    }
    if (cb && deep) {
      const baseGetter = getter;
      getter = () => traverse(baseGetter());
    }
    let cleanup;
    let onCleanup = (fn) => {
      cleanup = effect2.onStop = () => {
        callWithErrorHandling(
          fn,
          instance,
          4
          /* ErrorCodes.WATCH_CLEANUP */
        );
      };
    };
    let ssrCleanup;
    if (isInSSRComponentSetup) {
      onCleanup = NOOP;
      if (!cb) {
        getter();
      } else if (immediate) {
        callWithAsyncErrorHandling(cb, instance, 3, [
          getter(),
          isMultiSource ? [] : void 0,
          onCleanup
        ]);
      }
      if (flush === "sync") {
        const ctx = useSSRContext();
        ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
      } else {
        return NOOP;
      }
    }
    let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
    const job = () => {
      if (!effect2.active) {
        return;
      }
      if (cb) {
        const newValue = effect2.run();
        if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
          if (cleanup) {
            cleanup();
          }
          callWithAsyncErrorHandling(cb, instance, 3, [
            newValue,
            // pass undefined as the old value when it's changed for the first time
            oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
            onCleanup
          ]);
          oldValue = newValue;
        }
      } else {
        effect2.run();
      }
    };
    job.allowRecurse = !!cb;
    let scheduler;
    if (flush === "sync") {
      scheduler = job;
    } else if (flush === "post") {
      scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
    } else {
      job.pre = true;
      if (instance)
        job.id = instance.uid;
      scheduler = () => queueJob(job);
    }
    const effect2 = new ReactiveEffect(getter, scheduler);
    if (cb) {
      if (immediate) {
        job();
      } else {
        oldValue = effect2.run();
      }
    } else if (flush === "post") {
      queuePostRenderEffect(effect2.run.bind(effect2), instance && instance.suspense);
    } else {
      effect2.run();
    }
    const unwatch = () => {
      effect2.stop();
      if (instance && instance.scope) {
        remove(instance.scope.effects, effect2);
      }
    };
    if (ssrCleanup)
      ssrCleanup.push(unwatch);
    return unwatch;
  }
  function instanceWatch(source, value, options) {
    const publicThis = this.proxy;
    const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
    let cb;
    if (isFunction(value)) {
      cb = value;
    } else {
      cb = value.handler;
      options = value;
    }
    const cur = currentInstance;
    setCurrentInstance(this);
    const res = doWatch(getter, cb.bind(publicThis), options);
    if (cur) {
      setCurrentInstance(cur);
    } else {
      unsetCurrentInstance();
    }
    return res;
  }
  function createPathGetter(ctx, path) {
    const segments = path.split(".");
    return () => {
      let cur = ctx;
      for (let i = 0; i < segments.length && cur; i++) {
        cur = cur[segments[i]];
      }
      return cur;
    };
  }
  function traverse(value, seen2) {
    if (!isObject(value) || value[
      "__v_skip"
      /* ReactiveFlags.SKIP */
    ]) {
      return value;
    }
    seen2 = seen2 || /* @__PURE__ */ new Set();
    if (seen2.has(value)) {
      return value;
    }
    seen2.add(value);
    if (isRef(value)) {
      traverse(value.value, seen2);
    } else if (isArray$1(value)) {
      for (let i = 0; i < value.length; i++) {
        traverse(value[i], seen2);
      }
    } else if (isSet(value) || isMap(value)) {
      value.forEach((v) => {
        traverse(v, seen2);
      });
    } else if (isPlainObject$1(value)) {
      for (const key in value) {
        traverse(value[key], seen2);
      }
    }
    return value;
  }
  function defineComponent(options) {
    return isFunction(options) ? { setup: options, name: options.name } : options;
  }
  const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
  const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
  function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a", target);
  }
  function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da", target);
  }
  function registerKeepAliveHook(hook, type, target = currentInstance) {
    const wrappedHook = hook.__wdc || (hook.__wdc = () => {
      let current = target;
      while (current) {
        if (current.isDeactivated) {
          return;
        }
        current = current.parent;
      }
      return hook();
    });
    injectHook(type, wrappedHook, target);
    if (target) {
      let current = target.parent;
      while (current && current.parent) {
        if (isKeepAlive(current.parent.vnode)) {
          injectToKeepAliveRoot(wrappedHook, type, target, current);
        }
        current = current.parent;
      }
    }
  }
  function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    const injected = injectHook(
      type,
      hook,
      keepAliveRoot,
      true
      /* prepend */
    );
    onUnmounted(() => {
      remove(keepAliveRoot[type], injected);
    }, target);
  }
  function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
      const hooks = target[type] || (target[type] = []);
      const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
        if (target.isUnmounted) {
          return;
        }
        pauseTracking();
        setCurrentInstance(target);
        const res = callWithAsyncErrorHandling(hook, target, type, args);
        unsetCurrentInstance();
        resetTracking();
        return res;
      });
      if (prepend) {
        hooks.unshift(wrappedHook);
      } else {
        hooks.push(wrappedHook);
      }
      return wrappedHook;
    }
  }
  const createHook = (lifecycle) => (hook, target = currentInstance) => (
    // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
    (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, (...args) => hook(...args), target)
  );
  const onBeforeMount = createHook(
    "bm"
    /* LifecycleHooks.BEFORE_MOUNT */
  );
  const onMounted = createHook(
    "m"
    /* LifecycleHooks.MOUNTED */
  );
  const onBeforeUpdate = createHook(
    "bu"
    /* LifecycleHooks.BEFORE_UPDATE */
  );
  const onUpdated = createHook(
    "u"
    /* LifecycleHooks.UPDATED */
  );
  const onBeforeUnmount = createHook(
    "bum"
    /* LifecycleHooks.BEFORE_UNMOUNT */
  );
  const onUnmounted = createHook(
    "um"
    /* LifecycleHooks.UNMOUNTED */
  );
  const onServerPrefetch = createHook(
    "sp"
    /* LifecycleHooks.SERVER_PREFETCH */
  );
  const onRenderTriggered = createHook(
    "rtg"
    /* LifecycleHooks.RENDER_TRIGGERED */
  );
  const onRenderTracked = createHook(
    "rtc"
    /* LifecycleHooks.RENDER_TRACKED */
  );
  function onErrorCaptured(hook, target = currentInstance) {
    injectHook("ec", hook, target);
  }
  function withDirectives(vnode, directives) {
    const internalInstance = currentRenderingInstance;
    if (internalInstance === null) {
      return vnode;
    }
    const instance = getExposeProxy(internalInstance) || internalInstance.proxy;
    const bindings = vnode.dirs || (vnode.dirs = []);
    for (let i = 0; i < directives.length; i++) {
      let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
      if (dir) {
        if (isFunction(dir)) {
          dir = {
            mounted: dir,
            updated: dir
          };
        }
        if (dir.deep) {
          traverse(value);
        }
        bindings.push({
          dir,
          instance,
          value,
          oldValue: void 0,
          arg,
          modifiers
        });
      }
    }
    return vnode;
  }
  function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for (let i = 0; i < bindings.length; i++) {
      const binding = bindings[i];
      if (oldBindings) {
        binding.oldValue = oldBindings[i].value;
      }
      let hook = binding.dir[name];
      if (hook) {
        pauseTracking();
        callWithAsyncErrorHandling(hook, instance, 8, [
          vnode.el,
          binding,
          vnode,
          prevVNode
        ]);
        resetTracking();
      }
    }
  }
  const COMPONENTS = "components";
  function resolveComponent(name, maybeSelfReference) {
    return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
  }
  const NULL_DYNAMIC_COMPONENT = Symbol();
  function resolveDynamicComponent(component) {
    if (isString(component)) {
      return resolveAsset(COMPONENTS, component, false) || component;
    } else {
      return component || NULL_DYNAMIC_COMPONENT;
    }
  }
  function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
    const instance = currentRenderingInstance || currentInstance;
    if (instance) {
      const Component = instance.type;
      if (type === COMPONENTS) {
        const selfName = getComponentName(
          Component,
          false
          /* do not include inferred name to avoid breaking existing code */
        );
        if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
          return Component;
        }
      }
      const res = (
        // local registration
        // check instance[type] first which is resolved for options API
        resolve(instance[type] || Component[type], name) || // global registration
        resolve(instance.appContext[type], name)
      );
      if (!res && maybeSelfReference) {
        return Component;
      }
      return res;
    }
  }
  function resolve(registry, name) {
    return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
  }
  function renderList(source, renderItem, cache, index) {
    let ret;
    const cached = cache && cache[index];
    if (isArray$1(source) || isString(source)) {
      ret = new Array(source.length);
      for (let i = 0, l = source.length; i < l; i++) {
        ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
      }
    } else if (typeof source === "number") {
      ret = new Array(source);
      for (let i = 0; i < source; i++) {
        ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
      }
    } else if (isObject(source)) {
      if (source[Symbol.iterator]) {
        ret = Array.from(source, (item, i) => renderItem(item, i, void 0, cached && cached[i]));
      } else {
        const keys = Object.keys(source);
        ret = new Array(keys.length);
        for (let i = 0, l = keys.length; i < l; i++) {
          const key = keys[i];
          ret[i] = renderItem(source[key], key, i, cached && cached[i]);
        }
      }
    } else {
      ret = [];
    }
    if (cache) {
      cache[index] = ret;
    }
    return ret;
  }
  function renderSlot(slots, name, props = {}, fallback, noSlotted) {
    if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
      if (name !== "default")
        props.name = name;
      return createVNode("slot", props, fallback && fallback());
    }
    let slot = slots[name];
    if (slot && slot._c) {
      slot._d = false;
    }
    openBlock();
    const validSlotContent = slot && ensureValidVNode(slot(props));
    const rendered = createBlock(
      Fragment,
      {
        key: props.key || // slot content array of a dynamic conditional slot may have a branch
        // key attached in the `createSlots` helper, respect that
        validSlotContent && validSlotContent.key || `_${name}`
      },
      validSlotContent || (fallback ? fallback() : []),
      validSlotContent && slots._ === 1 ? 64 : -2
      /* PatchFlags.BAIL */
    );
    if (!noSlotted && rendered.scopeId) {
      rendered.slotScopeIds = [rendered.scopeId + "-s"];
    }
    if (slot && slot._c) {
      slot._d = true;
    }
    return rendered;
  }
  function ensureValidVNode(vnodes) {
    return vnodes.some((child) => {
      if (!isVNode(child))
        return true;
      if (child.type === Comment)
        return false;
      if (child.type === Fragment && !ensureValidVNode(child.children))
        return false;
      return true;
    }) ? vnodes : null;
  }
  const getPublicInstance = (i) => {
    if (!i)
      return null;
    if (isStatefulComponent(i))
      return getExposeProxy(i) || i.proxy;
    return getPublicInstance(i.parent);
  };
  const publicPropertiesMap = (
    // Move PURE marker to new line to workaround compiler discarding it
    // due to type annotation
    /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
      $: (i) => i,
      $el: (i) => i.vnode.el,
      $data: (i) => i.data,
      $props: (i) => i.props,
      $attrs: (i) => i.attrs,
      $slots: (i) => i.slots,
      $refs: (i) => i.refs,
      $parent: (i) => getPublicInstance(i.parent),
      $root: (i) => getPublicInstance(i.root),
      $emit: (i) => i.emit,
      $options: (i) => resolveMergedOptions(i),
      $forceUpdate: (i) => i.f || (i.f = () => queueJob(i.update)),
      $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
      $watch: (i) => instanceWatch.bind(i)
    })
  );
  const hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
  const PublicInstanceProxyHandlers = {
    get({ _: instance }, key) {
      const { ctx, setupState, data: data2, props, accessCache, type, appContext } = instance;
      let normalizedProps;
      if (key[0] !== "$") {
        const n = accessCache[key];
        if (n !== void 0) {
          switch (n) {
            case 1:
              return setupState[key];
            case 2:
              return data2[key];
            case 4:
              return ctx[key];
            case 3:
              return props[key];
          }
        } else if (hasSetupBinding(setupState, key)) {
          accessCache[key] = 1;
          return setupState[key];
        } else if (data2 !== EMPTY_OBJ && hasOwn(data2, key)) {
          accessCache[key] = 2;
          return data2[key];
        } else if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)
        ) {
          accessCache[key] = 3;
          return props[key];
        } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
          accessCache[key] = 4;
          return ctx[key];
        } else if (shouldCacheAccess) {
          accessCache[key] = 0;
        }
      }
      const publicGetter = publicPropertiesMap[key];
      let cssModule, globalProperties;
      if (publicGetter) {
        if (key === "$attrs") {
          track$1(instance, "get", key);
        }
        return publicGetter(instance);
      } else if (
        // css module (injected by vue-loader)
        (cssModule = type.__cssModules) && (cssModule = cssModule[key])
      ) {
        return cssModule;
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (
        // global properties
        globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)
      ) {
        {
          return globalProperties[key];
        }
      } else
        ;
    },
    set({ _: instance }, key, value) {
      const { data: data2, setupState, ctx } = instance;
      if (hasSetupBinding(setupState, key)) {
        setupState[key] = value;
        return true;
      } else if (data2 !== EMPTY_OBJ && hasOwn(data2, key)) {
        data2[key] = value;
        return true;
      } else if (hasOwn(instance.props, key)) {
        return false;
      }
      if (key[0] === "$" && key.slice(1) in instance) {
        return false;
      } else {
        {
          ctx[key] = value;
        }
      }
      return true;
    },
    has({ _: { data: data2, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
      let normalizedProps;
      return !!accessCache[key] || data2 !== EMPTY_OBJ && hasOwn(data2, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
    },
    defineProperty(target, key, descriptor) {
      if (descriptor.get != null) {
        target._.accessCache[key] = 0;
      } else if (hasOwn(descriptor, "value")) {
        this.set(target, key, descriptor.value, null);
      }
      return Reflect.defineProperty(target, key, descriptor);
    }
  };
  let shouldCacheAccess = true;
  function applyOptions(instance) {
    const options = resolveMergedOptions(instance);
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    shouldCacheAccess = false;
    if (options.beforeCreate) {
      callHook(
        options.beforeCreate,
        instance,
        "bc"
        /* LifecycleHooks.BEFORE_CREATE */
      );
    }
    const {
      // state
      data: dataOptions,
      computed: computedOptions,
      methods,
      watch: watchOptions,
      provide: provideOptions,
      inject: injectOptions,
      // lifecycle
      created,
      beforeMount,
      mounted,
      beforeUpdate,
      updated,
      activated,
      deactivated,
      beforeDestroy,
      beforeUnmount,
      destroyed,
      unmounted,
      render,
      renderTracked,
      renderTriggered,
      errorCaptured,
      serverPrefetch,
      // public API
      expose,
      inheritAttrs,
      // assets
      components,
      directives,
      filters
    } = options;
    const checkDuplicateProperties = null;
    if (injectOptions) {
      resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
    }
    if (methods) {
      for (const key in methods) {
        const methodHandler = methods[key];
        if (isFunction(methodHandler)) {
          {
            ctx[key] = methodHandler.bind(publicThis);
          }
        }
      }
    }
    if (dataOptions) {
      const data2 = dataOptions.call(publicThis, publicThis);
      if (!isObject(data2))
        ;
      else {
        instance.data = reactive(data2);
      }
    }
    shouldCacheAccess = true;
    if (computedOptions) {
      for (const key in computedOptions) {
        const opt = computedOptions[key];
        const get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
        const set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : NOOP;
        const c = computed({
          get: get2,
          set: set2
        });
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => c.value,
          set: (v) => c.value = v
        });
      }
    }
    if (watchOptions) {
      for (const key in watchOptions) {
        createWatcher(watchOptions[key], ctx, publicThis, key);
      }
    }
    if (provideOptions) {
      const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
      Reflect.ownKeys(provides).forEach((key) => {
        provide(key, provides[key]);
      });
    }
    if (created) {
      callHook(
        created,
        instance,
        "c"
        /* LifecycleHooks.CREATED */
      );
    }
    function registerLifecycleHook(register, hook) {
      if (isArray$1(hook)) {
        hook.forEach((_hook) => register(_hook.bind(publicThis)));
      } else if (hook) {
        register(hook.bind(publicThis));
      }
    }
    registerLifecycleHook(onBeforeMount, beforeMount);
    registerLifecycleHook(onMounted, mounted);
    registerLifecycleHook(onBeforeUpdate, beforeUpdate);
    registerLifecycleHook(onUpdated, updated);
    registerLifecycleHook(onActivated, activated);
    registerLifecycleHook(onDeactivated, deactivated);
    registerLifecycleHook(onErrorCaptured, errorCaptured);
    registerLifecycleHook(onRenderTracked, renderTracked);
    registerLifecycleHook(onRenderTriggered, renderTriggered);
    registerLifecycleHook(onBeforeUnmount, beforeUnmount);
    registerLifecycleHook(onUnmounted, unmounted);
    registerLifecycleHook(onServerPrefetch, serverPrefetch);
    if (isArray$1(expose)) {
      if (expose.length) {
        const exposed = instance.exposed || (instance.exposed = {});
        expose.forEach((key) => {
          Object.defineProperty(exposed, key, {
            get: () => publicThis[key],
            set: (val) => publicThis[key] = val
          });
        });
      } else if (!instance.exposed) {
        instance.exposed = {};
      }
    }
    if (render && instance.render === NOOP) {
      instance.render = render;
    }
    if (inheritAttrs != null) {
      instance.inheritAttrs = inheritAttrs;
    }
    if (components)
      instance.components = components;
    if (directives)
      instance.directives = directives;
  }
  function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP, unwrapRef = false) {
    if (isArray$1(injectOptions)) {
      injectOptions = normalizeInject(injectOptions);
    }
    for (const key in injectOptions) {
      const opt = injectOptions[key];
      let injected;
      if (isObject(opt)) {
        if ("default" in opt) {
          injected = inject(
            opt.from || key,
            opt.default,
            true
            /* treat default function as factory */
          );
        } else {
          injected = inject(opt.from || key);
        }
      } else {
        injected = inject(opt);
      }
      if (isRef(injected)) {
        if (unwrapRef) {
          Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: () => injected.value,
            set: (v) => injected.value = v
          });
        } else {
          ctx[key] = injected;
        }
      } else {
        ctx[key] = injected;
      }
    }
  }
  function callHook(hook, instance, type) {
    callWithAsyncErrorHandling(isArray$1(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
  }
  function createWatcher(raw, ctx, publicThis, key) {
    const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
    if (isString(raw)) {
      const handler = ctx[raw];
      if (isFunction(handler)) {
        watch(getter, handler);
      }
    } else if (isFunction(raw)) {
      watch(getter, raw.bind(publicThis));
    } else if (isObject(raw)) {
      if (isArray$1(raw)) {
        raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
      } else {
        const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
        if (isFunction(handler)) {
          watch(getter, handler, raw);
        }
      }
    } else
      ;
  }
  function resolveMergedOptions(instance) {
    const base = instance.type;
    const { mixins, extends: extendsOptions } = base;
    const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
    const cached = cache.get(base);
    let resolved;
    if (cached) {
      resolved = cached;
    } else if (!globalMixins.length && !mixins && !extendsOptions) {
      {
        resolved = base;
      }
    } else {
      resolved = {};
      if (globalMixins.length) {
        globalMixins.forEach((m) => mergeOptions$1(resolved, m, optionMergeStrategies, true));
      }
      mergeOptions$1(resolved, base, optionMergeStrategies);
    }
    if (isObject(base)) {
      cache.set(base, resolved);
    }
    return resolved;
  }
  function mergeOptions$1(to, from, strats, asMixin = false) {
    const { mixins, extends: extendsOptions } = from;
    if (extendsOptions) {
      mergeOptions$1(to, extendsOptions, strats, true);
    }
    if (mixins) {
      mixins.forEach((m) => mergeOptions$1(to, m, strats, true));
    }
    for (const key in from) {
      if (asMixin && key === "expose")
        ;
      else {
        const strat = internalOptionMergeStrats[key] || strats && strats[key];
        to[key] = strat ? strat(to[key], from[key]) : from[key];
      }
    }
    return to;
  }
  const internalOptionMergeStrats = {
    data: mergeDataFn,
    props: mergeObjectOptions,
    emits: mergeObjectOptions,
    // objects
    methods: mergeObjectOptions,
    computed: mergeObjectOptions,
    // lifecycle
    beforeCreate: mergeAsArray,
    created: mergeAsArray,
    beforeMount: mergeAsArray,
    mounted: mergeAsArray,
    beforeUpdate: mergeAsArray,
    updated: mergeAsArray,
    beforeDestroy: mergeAsArray,
    beforeUnmount: mergeAsArray,
    destroyed: mergeAsArray,
    unmounted: mergeAsArray,
    activated: mergeAsArray,
    deactivated: mergeAsArray,
    errorCaptured: mergeAsArray,
    serverPrefetch: mergeAsArray,
    // assets
    components: mergeObjectOptions,
    directives: mergeObjectOptions,
    // watch
    watch: mergeWatchOptions,
    // provide / inject
    provide: mergeDataFn,
    inject: mergeInject
  };
  function mergeDataFn(to, from) {
    if (!from) {
      return to;
    }
    if (!to) {
      return from;
    }
    return function mergedDataFn() {
      return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
    };
  }
  function mergeInject(to, from) {
    return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
  }
  function normalizeInject(raw) {
    if (isArray$1(raw)) {
      const res = {};
      for (let i = 0; i < raw.length; i++) {
        res[raw[i]] = raw[i];
      }
      return res;
    }
    return raw;
  }
  function mergeAsArray(to, from) {
    return to ? [...new Set([].concat(to, from))] : from;
  }
  function mergeObjectOptions(to, from) {
    return to ? extend(extend(/* @__PURE__ */ Object.create(null), to), from) : from;
  }
  function mergeWatchOptions(to, from) {
    if (!to)
      return from;
    if (!from)
      return to;
    const merged = extend(/* @__PURE__ */ Object.create(null), to);
    for (const key in from) {
      merged[key] = mergeAsArray(to[key], from[key]);
    }
    return merged;
  }
  function initProps(instance, rawProps, isStateful, isSSR = false) {
    const props = {};
    const attrs = {};
    def(attrs, InternalObjectKey, 1);
    instance.propsDefaults = /* @__PURE__ */ Object.create(null);
    setFullProps(instance, rawProps, props, attrs);
    for (const key in instance.propsOptions[0]) {
      if (!(key in props)) {
        props[key] = void 0;
      }
    }
    if (isStateful) {
      instance.props = isSSR ? props : shallowReactive(props);
    } else {
      if (!instance.type.props) {
        instance.props = attrs;
      } else {
        instance.props = props;
      }
    }
    instance.attrs = attrs;
  }
  function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const { props, attrs, vnode: { patchFlag } } = instance;
    const rawCurrentProps = toRaw(props);
    const [options] = instance.propsOptions;
    let hasAttrsChanged = false;
    if (
      // always force full diff in dev
      // - #1942 if hmr is enabled with sfc component
      // - vite#872 non-sfc component used by sfc component
      (optimized || patchFlag > 0) && !(patchFlag & 16)
    ) {
      if (patchFlag & 8) {
        const propsToUpdate = instance.vnode.dynamicProps;
        for (let i = 0; i < propsToUpdate.length; i++) {
          let key = propsToUpdate[i];
          if (isEmitListener(instance.emitsOptions, key)) {
            continue;
          }
          const value = rawProps[key];
          if (options) {
            if (hasOwn(attrs, key)) {
              if (value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
              }
            } else {
              const camelizedKey = camelize(key);
              props[camelizedKey] = resolvePropValue(
                options,
                rawCurrentProps,
                camelizedKey,
                value,
                instance,
                false
                /* isAbsent */
              );
            }
          } else {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          }
        }
      }
    } else {
      if (setFullProps(instance, rawProps, props, attrs)) {
        hasAttrsChanged = true;
      }
      let kebabKey;
      for (const key in rawCurrentProps) {
        if (!rawProps || // for camelCase
        !hasOwn(rawProps, key) && // it's possible the original props was passed in as kebab-case
        // and converted to camelCase (#955)
        ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
          if (options) {
            if (rawPrevProps && // for camelCase
            (rawPrevProps[key] !== void 0 || // for kebab-case
            rawPrevProps[kebabKey] !== void 0)) {
              props[key] = resolvePropValue(
                options,
                rawCurrentProps,
                key,
                void 0,
                instance,
                true
                /* isAbsent */
              );
            }
          } else {
            delete props[key];
          }
        }
      }
      if (attrs !== rawCurrentProps) {
        for (const key in attrs) {
          if (!rawProps || !hasOwn(rawProps, key) && true) {
            delete attrs[key];
            hasAttrsChanged = true;
          }
        }
      }
    }
    if (hasAttrsChanged) {
      trigger(instance, "set", "$attrs");
    }
  }
  function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    let hasAttrsChanged = false;
    let rawCastValues;
    if (rawProps) {
      for (let key in rawProps) {
        if (isReservedProp(key)) {
          continue;
        }
        const value = rawProps[key];
        let camelKey;
        if (options && hasOwn(options, camelKey = camelize(key))) {
          if (!needCastKeys || !needCastKeys.includes(camelKey)) {
            props[camelKey] = value;
          } else {
            (rawCastValues || (rawCastValues = {}))[camelKey] = value;
          }
        } else if (!isEmitListener(instance.emitsOptions, key)) {
          if (!(key in attrs) || value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
    if (needCastKeys) {
      const rawCurrentProps = toRaw(props);
      const castValues = rawCastValues || EMPTY_OBJ;
      for (let i = 0; i < needCastKeys.length; i++) {
        const key = needCastKeys[i];
        props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
      }
    }
    return hasAttrsChanged;
  }
  function resolvePropValue(options, props, key, value, instance, isAbsent) {
    const opt = options[key];
    if (opt != null) {
      const hasDefault = hasOwn(opt, "default");
      if (hasDefault && value === void 0) {
        const defaultValue = opt.default;
        if (opt.type !== Function && isFunction(defaultValue)) {
          const { propsDefaults } = instance;
          if (key in propsDefaults) {
            value = propsDefaults[key];
          } else {
            setCurrentInstance(instance);
            value = propsDefaults[key] = defaultValue.call(null, props);
            unsetCurrentInstance();
          }
        } else {
          value = defaultValue;
        }
      }
      if (opt[
        0
        /* BooleanFlags.shouldCast */
      ]) {
        if (isAbsent && !hasDefault) {
          value = false;
        } else if (opt[
          1
          /* BooleanFlags.shouldCastTrue */
        ] && (value === "" || value === hyphenate(key))) {
          value = true;
        }
      }
    }
    return value;
  }
  function normalizePropsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.propsCache;
    const cached = cache.get(comp);
    if (cached) {
      return cached;
    }
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    let hasExtends = false;
    if (!isFunction(comp)) {
      const extendProps = (raw2) => {
        hasExtends = true;
        const [props, keys] = normalizePropsOptions(raw2, appContext, true);
        extend(normalized, props);
        if (keys)
          needCastKeys.push(...keys);
      };
      if (!asMixin && appContext.mixins.length) {
        appContext.mixins.forEach(extendProps);
      }
      if (comp.extends) {
        extendProps(comp.extends);
      }
      if (comp.mixins) {
        comp.mixins.forEach(extendProps);
      }
    }
    if (!raw && !hasExtends) {
      if (isObject(comp)) {
        cache.set(comp, EMPTY_ARR);
      }
      return EMPTY_ARR;
    }
    if (isArray$1(raw)) {
      for (let i = 0; i < raw.length; i++) {
        const normalizedKey = camelize(raw[i]);
        if (validatePropName(normalizedKey)) {
          normalized[normalizedKey] = EMPTY_OBJ;
        }
      }
    } else if (raw) {
      for (const key in raw) {
        const normalizedKey = camelize(key);
        if (validatePropName(normalizedKey)) {
          const opt = raw[key];
          const prop = normalized[normalizedKey] = isArray$1(opt) || isFunction(opt) ? { type: opt } : Object.assign({}, opt);
          if (prop) {
            const booleanIndex = getTypeIndex(Boolean, prop.type);
            const stringIndex = getTypeIndex(String, prop.type);
            prop[
              0
              /* BooleanFlags.shouldCast */
            ] = booleanIndex > -1;
            prop[
              1
              /* BooleanFlags.shouldCastTrue */
            ] = stringIndex < 0 || booleanIndex < stringIndex;
            if (booleanIndex > -1 || hasOwn(prop, "default")) {
              needCastKeys.push(normalizedKey);
            }
          }
        }
      }
    }
    const res = [normalized, needCastKeys];
    if (isObject(comp)) {
      cache.set(comp, res);
    }
    return res;
  }
  function validatePropName(key) {
    if (key[0] !== "$") {
      return true;
    }
    return false;
  }
  function getType(ctor) {
    const match = ctor && ctor.toString().match(/^\s*(function|class) (\w+)/);
    return match ? match[2] : ctor === null ? "null" : "";
  }
  function isSameType(a, b) {
    return getType(a) === getType(b);
  }
  function getTypeIndex(type, expectedTypes) {
    if (isArray$1(expectedTypes)) {
      return expectedTypes.findIndex((t) => isSameType(t, type));
    } else if (isFunction(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1;
    }
    return -1;
  }
  const isInternalKey = (key) => key[0] === "_" || key === "$stable";
  const normalizeSlotValue = (value) => isArray$1(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
  const normalizeSlot$1 = (key, rawSlot, ctx) => {
    if (rawSlot._n) {
      return rawSlot;
    }
    const normalized = withCtx((...args) => {
      if (false)
        ;
      return normalizeSlotValue(rawSlot(...args));
    }, ctx);
    normalized._c = false;
    return normalized;
  };
  const normalizeObjectSlots = (rawSlots, slots, instance) => {
    const ctx = rawSlots._ctx;
    for (const key in rawSlots) {
      if (isInternalKey(key))
        continue;
      const value = rawSlots[key];
      if (isFunction(value)) {
        slots[key] = normalizeSlot$1(key, value, ctx);
      } else if (value != null) {
        const normalized = normalizeSlotValue(value);
        slots[key] = () => normalized;
      }
    }
  };
  const normalizeVNodeSlots = (instance, children) => {
    const normalized = normalizeSlotValue(children);
    instance.slots.default = () => normalized;
  };
  const initSlots = (instance, children) => {
    if (instance.vnode.shapeFlag & 32) {
      const type = children._;
      if (type) {
        instance.slots = toRaw(children);
        def(children, "_", type);
      } else {
        normalizeObjectSlots(children, instance.slots = {});
      }
    } else {
      instance.slots = {};
      if (children) {
        normalizeVNodeSlots(instance, children);
      }
    }
    def(instance.slots, InternalObjectKey, 1);
  };
  const updateSlots = (instance, children, optimized) => {
    const { vnode, slots } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = EMPTY_OBJ;
    if (vnode.shapeFlag & 32) {
      const type = children._;
      if (type) {
        if (optimized && type === 1) {
          needDeletionCheck = false;
        } else {
          extend(slots, children);
          if (!optimized && type === 1) {
            delete slots._;
          }
        }
      } else {
        needDeletionCheck = !children.$stable;
        normalizeObjectSlots(children, slots);
      }
      deletionComparisonTarget = children;
    } else if (children) {
      normalizeVNodeSlots(instance, children);
      deletionComparisonTarget = { default: 1 };
    }
    if (needDeletionCheck) {
      for (const key in slots) {
        if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
          delete slots[key];
        }
      }
    }
  };
  function createAppContext() {
    return {
      app: null,
      config: {
        isNativeTag: NO,
        performance: false,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {}
      },
      mixins: [],
      components: {},
      directives: {},
      provides: /* @__PURE__ */ Object.create(null),
      optionsCache: /* @__PURE__ */ new WeakMap(),
      propsCache: /* @__PURE__ */ new WeakMap(),
      emitsCache: /* @__PURE__ */ new WeakMap()
    };
  }
  let uid$1 = 0;
  function createAppAPI(render, hydrate) {
    return function createApp2(rootComponent, rootProps = null) {
      if (!isFunction(rootComponent)) {
        rootComponent = Object.assign({}, rootComponent);
      }
      if (rootProps != null && !isObject(rootProps)) {
        rootProps = null;
      }
      const context = createAppContext();
      const installedPlugins = /* @__PURE__ */ new Set();
      let isMounted = false;
      const app2 = context.app = {
        _uid: uid$1++,
        _component: rootComponent,
        _props: rootProps,
        _container: null,
        _context: context,
        _instance: null,
        version,
        get config() {
          return context.config;
        },
        set config(v) {
        },
        use(plugin, ...options) {
          if (installedPlugins.has(plugin))
            ;
          else if (plugin && isFunction(plugin.install)) {
            installedPlugins.add(plugin);
            plugin.install(app2, ...options);
          } else if (isFunction(plugin)) {
            installedPlugins.add(plugin);
            plugin(app2, ...options);
          } else
            ;
          return app2;
        },
        mixin(mixin) {
          {
            if (!context.mixins.includes(mixin)) {
              context.mixins.push(mixin);
            }
          }
          return app2;
        },
        component(name, component) {
          if (!component) {
            return context.components[name];
          }
          context.components[name] = component;
          return app2;
        },
        directive(name, directive) {
          if (!directive) {
            return context.directives[name];
          }
          context.directives[name] = directive;
          return app2;
        },
        mount(rootContainer, isHydrate, isSVG) {
          if (!isMounted) {
            const vnode = createVNode(rootComponent, rootProps);
            vnode.appContext = context;
            if (isHydrate && hydrate) {
              hydrate(vnode, rootContainer);
            } else {
              render(vnode, rootContainer, isSVG);
            }
            isMounted = true;
            app2._container = rootContainer;
            rootContainer.__vue_app__ = app2;
            return getExposeProxy(vnode.component) || vnode.component.proxy;
          }
        },
        unmount() {
          if (isMounted) {
            render(null, app2._container);
            delete app2._container.__vue_app__;
          }
        },
        provide(key, value) {
          context.provides[key] = value;
          return app2;
        }
      };
      return app2;
    };
  }
  function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
    if (isArray$1(rawRef)) {
      rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray$1(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
      return;
    }
    if (isAsyncWrapper(vnode) && !isUnmount) {
      return;
    }
    const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
    const value = isUnmount ? null : refValue;
    const { i: owner, r: ref2 } = rawRef;
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
    const setupState = owner.setupState;
    if (oldRef != null && oldRef !== ref2) {
      if (isString(oldRef)) {
        refs[oldRef] = null;
        if (hasOwn(setupState, oldRef)) {
          setupState[oldRef] = null;
        }
      } else if (isRef(oldRef)) {
        oldRef.value = null;
      }
    }
    if (isFunction(ref2)) {
      callWithErrorHandling(ref2, owner, 12, [value, refs]);
    } else {
      const _isString = isString(ref2);
      const _isRef = isRef(ref2);
      if (_isString || _isRef) {
        const doSet = () => {
          if (rawRef.f) {
            const existing = _isString ? hasOwn(setupState, ref2) ? setupState[ref2] : refs[ref2] : ref2.value;
            if (isUnmount) {
              isArray$1(existing) && remove(existing, refValue);
            } else {
              if (!isArray$1(existing)) {
                if (_isString) {
                  refs[ref2] = [refValue];
                  if (hasOwn(setupState, ref2)) {
                    setupState[ref2] = refs[ref2];
                  }
                } else {
                  ref2.value = [refValue];
                  if (rawRef.k)
                    refs[rawRef.k] = ref2.value;
                }
              } else if (!existing.includes(refValue)) {
                existing.push(refValue);
              }
            }
          } else if (_isString) {
            refs[ref2] = value;
            if (hasOwn(setupState, ref2)) {
              setupState[ref2] = value;
            }
          } else if (_isRef) {
            ref2.value = value;
            if (rawRef.k)
              refs[rawRef.k] = value;
          } else
            ;
        };
        if (value) {
          doSet.id = -1;
          queuePostRenderEffect(doSet, parentSuspense);
        } else {
          doSet();
        }
      }
    }
  }
  const queuePostRenderEffect = queueEffectWithSuspense;
  function createRenderer(options) {
    return baseCreateRenderer(options);
  }
  function baseCreateRenderer(options, createHydrationFns) {
    const target = getGlobalThis();
    target.__VUE__ = true;
    const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, insertStaticContent: hostInsertStaticContent } = options;
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
      if (n1 === n2) {
        return;
      }
      if (n1 && !isSameVNodeType(n1, n2)) {
        anchor = getNextHostNode(n1);
        unmount(n1, parentComponent, parentSuspense, true);
        n1 = null;
      }
      if (n2.patchFlag === -2) {
        optimized = false;
        n2.dynamicChildren = null;
      }
      const { type, ref: ref2, shapeFlag } = n2;
      switch (type) {
        case Text:
          processText(n1, n2, container, anchor);
          break;
        case Comment:
          processCommentNode(n1, n2, container, anchor);
          break;
        case Static:
          if (n1 == null) {
            mountStaticNode(n2, container, anchor, isSVG);
          }
          break;
        case Fragment:
          processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          break;
        default:
          if (shapeFlag & 1) {
            processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else if (shapeFlag & 6) {
            processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else if (shapeFlag & 64) {
            type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
          } else if (shapeFlag & 128) {
            type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
          } else
            ;
      }
      if (ref2 != null && parentComponent) {
        setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
      }
    };
    const processText = (n1, n2, container, anchor) => {
      if (n1 == null) {
        hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
      } else {
        const el = n2.el = n1.el;
        if (n2.children !== n1.children) {
          hostSetText(el, n2.children);
        }
      }
    };
    const processCommentNode = (n1, n2, container, anchor) => {
      if (n1 == null) {
        hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
      } else {
        n2.el = n1.el;
      }
    };
    const mountStaticNode = (n2, container, anchor, isSVG) => {
      [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
    };
    const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
      let next;
      while (el && el !== anchor) {
        next = hostNextSibling(el);
        hostInsert(el, container, nextSibling);
        el = next;
      }
      hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el, anchor }) => {
      let next;
      while (el && el !== anchor) {
        next = hostNextSibling(el);
        hostRemove(el);
        el = next;
      }
      hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      isSVG = isSVG || n2.type === "svg";
      if (n1 == null) {
        mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      let el;
      let vnodeHook;
      const { type, props, shapeFlag, transition, dirs } = vnode;
      el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
      if (shapeFlag & 8) {
        hostSetElementText(el, vnode.children);
      } else if (shapeFlag & 16) {
        mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== "foreignObject", slotScopeIds, optimized);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
      if (props) {
        for (const key in props) {
          if (key !== "value" && !isReservedProp(key)) {
            hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
        if ("value" in props) {
          hostPatchProp(el, "value", null, props.value);
        }
        if (vnodeHook = props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
      }
      const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
      if (needCallTransitionHooks) {
        transition.beforeEnter(el);
      }
      hostInsert(el, container, anchor);
      if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
          needCallTransitionHooks && transition.enter(el);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
      }
    };
    const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
      if (scopeId) {
        hostSetScopeId(el, scopeId);
      }
      if (slotScopeIds) {
        for (let i = 0; i < slotScopeIds.length; i++) {
          hostSetScopeId(el, slotScopeIds[i]);
        }
      }
      if (parentComponent) {
        let subTree = parentComponent.subTree;
        if (vnode === subTree) {
          const parentVNode = parentComponent.vnode;
          setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
        }
      }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start2 = 0) => {
      for (let i = start2; i < children.length; i++) {
        const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
        patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      const el = n2.el = n1.el;
      let { patchFlag, dynamicChildren, dirs } = n2;
      patchFlag |= n1.patchFlag & 16;
      const oldProps = n1.props || EMPTY_OBJ;
      const newProps = n2.props || EMPTY_OBJ;
      let vnodeHook;
      parentComponent && toggleRecurse(parentComponent, false);
      if (vnodeHook = newProps.onVnodeBeforeUpdate) {
        invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
      }
      if (dirs) {
        invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
      }
      parentComponent && toggleRecurse(parentComponent, true);
      const areChildrenSVG = isSVG && n2.type !== "foreignObject";
      if (dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
      } else if (!optimized) {
        patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
      }
      if (patchFlag > 0) {
        if (patchFlag & 16) {
          patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
        } else {
          if (patchFlag & 2) {
            if (oldProps.class !== newProps.class) {
              hostPatchProp(el, "class", null, newProps.class, isSVG);
            }
          }
          if (patchFlag & 4) {
            hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
          }
          if (patchFlag & 8) {
            const propsToUpdate = n2.dynamicProps;
            for (let i = 0; i < propsToUpdate.length; i++) {
              const key = propsToUpdate[i];
              const prev = oldProps[key];
              const next = newProps[key];
              if (next !== prev || key === "value") {
                hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
              }
            }
          }
        }
        if (patchFlag & 1) {
          if (n1.children !== n2.children) {
            hostSetElementText(el, n2.children);
          }
        }
      } else if (!optimized && dynamicChildren == null) {
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
      }
      if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
          dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
        }, parentSuspense);
      }
    };
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
      for (let i = 0; i < newChildren.length; i++) {
        const oldVNode = oldChildren[i];
        const newVNode = newChildren[i];
        const container = (
          // oldVNode may be an errored async setup() component inside Suspense
          // which will not have a mounted element
          oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
          // of the Fragment itself so it can move its children.
          (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
          // which also requires the correct parent container
          !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
          oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : (
            // In other cases, the parent container is not actually used so we
            // just pass the block element here to avoid a DOM parentNode call.
            fallbackContainer
          )
        );
        patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
      }
    };
    const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
      if (oldProps !== newProps) {
        if (oldProps !== EMPTY_OBJ) {
          for (const key in oldProps) {
            if (!isReservedProp(key) && !(key in newProps)) {
              hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
        }
        for (const key in newProps) {
          if (isReservedProp(key))
            continue;
          const next = newProps[key];
          const prev = oldProps[key];
          if (next !== prev && key !== "value") {
            hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
        if ("value" in newProps) {
          hostPatchProp(el, "value", oldProps.value, newProps.value);
        }
      }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
      const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
      let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
      if (fragmentSlotScopeIds) {
        slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
      }
      if (n1 == null) {
        hostInsert(fragmentStartAnchor, container, anchor);
        hostInsert(fragmentEndAnchor, container, anchor);
        mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
        // of renderSlot() with no valid children
        n1.dynamicChildren) {
          patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
          if (
            // #2080 if the stable fragment has a key, it's a <template v-for> that may
            //  get moved around. Make sure all root level vnodes inherit el.
            // #2134 or if it's a component root, it may also get moved around
            // as the component is being moved.
            n2.key != null || parentComponent && n2 === parentComponent.subTree
          ) {
            traverseStaticChildren(
              n1,
              n2,
              true
              /* shallow */
            );
          }
        } else {
          patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      }
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      n2.slotScopeIds = slotScopeIds;
      if (n1 == null) {
        if (n2.shapeFlag & 512) {
          parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
        } else {
          mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        }
      } else {
        updateComponent(n1, n2, optimized);
      }
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
      const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
      if (isKeepAlive(initialVNode)) {
        instance.ctx.renderer = internals;
      }
      {
        setupComponent(instance);
      }
      if (instance.asyncDep) {
        parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
        if (!initialVNode.el) {
          const placeholder = instance.subTree = createVNode(Comment);
          processCommentNode(null, placeholder, container, anchor);
        }
        return;
      }
      setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
    };
    const updateComponent = (n1, n2, optimized) => {
      const instance = n2.component = n1.component;
      if (shouldUpdateComponent(n1, n2, optimized)) {
        if (instance.asyncDep && !instance.asyncResolved) {
          updateComponentPreRender(instance, n2, optimized);
          return;
        } else {
          instance.next = n2;
          invalidateJob(instance.update);
          instance.update();
        }
      } else {
        n2.el = n1.el;
        instance.vnode = n2;
      }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
      const componentUpdateFn = () => {
        if (!instance.isMounted) {
          let vnodeHook;
          const { el, props } = initialVNode;
          const { bm, m, parent } = instance;
          const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
          toggleRecurse(instance, false);
          if (bm) {
            invokeArrayFns(bm);
          }
          if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
            invokeVNodeHook(vnodeHook, parent, initialVNode);
          }
          toggleRecurse(instance, true);
          if (el && hydrateNode) {
            const hydrateSubTree = () => {
              instance.subTree = renderComponentRoot(instance);
              hydrateNode(el, instance.subTree, instance, parentSuspense, null);
            };
            if (isAsyncWrapperVNode) {
              initialVNode.type.__asyncLoader().then(
                // note: we are moving the render call into an async callback,
                // which means it won't track dependencies - but it's ok because
                // a server-rendered async wrapper is already in resolved state
                // and it will never need to change.
                () => !instance.isUnmounted && hydrateSubTree()
              );
            } else {
              hydrateSubTree();
            }
          } else {
            const subTree = instance.subTree = renderComponentRoot(instance);
            patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
            initialVNode.el = subTree.el;
          }
          if (m) {
            queuePostRenderEffect(m, parentSuspense);
          }
          if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
            const scopedInitialVNode = initialVNode;
            queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
          }
          if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
            instance.a && queuePostRenderEffect(instance.a, parentSuspense);
          }
          instance.isMounted = true;
          initialVNode = container = anchor = null;
        } else {
          let { next, bu, u, parent, vnode } = instance;
          let originNext = next;
          let vnodeHook;
          toggleRecurse(instance, false);
          if (next) {
            next.el = vnode.el;
            updateComponentPreRender(instance, next, optimized);
          } else {
            next = vnode;
          }
          if (bu) {
            invokeArrayFns(bu);
          }
          if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
            invokeVNodeHook(vnodeHook, parent, next, vnode);
          }
          toggleRecurse(instance, true);
          const nextTree = renderComponentRoot(instance);
          const prevTree = instance.subTree;
          instance.subTree = nextTree;
          patch(
            prevTree,
            nextTree,
            // parent may have changed if it's in a teleport
            hostParentNode(prevTree.el),
            // anchor may have changed if it's in a fragment
            getNextHostNode(prevTree),
            instance,
            parentSuspense,
            isSVG
          );
          next.el = nextTree.el;
          if (originNext === null) {
            updateHOCHostEl(instance, nextTree.el);
          }
          if (u) {
            queuePostRenderEffect(u, parentSuspense);
          }
          if (vnodeHook = next.props && next.props.onVnodeUpdated) {
            queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
          }
        }
      };
      const effect2 = instance.effect = new ReactiveEffect(
        componentUpdateFn,
        () => queueJob(update2),
        instance.scope
        // track it in component's effect scope
      );
      const update2 = instance.update = () => effect2.run();
      update2.id = instance.uid;
      toggleRecurse(instance, true);
      update2();
    };
    const updateComponentPreRender = (instance, nextVNode, optimized) => {
      nextVNode.component = instance;
      const prevProps = instance.vnode.props;
      instance.vnode = nextVNode;
      instance.next = null;
      updateProps(instance, nextVNode.props, prevProps, optimized);
      updateSlots(instance, nextVNode.children, optimized);
      pauseTracking();
      flushPreFlushCbs();
      resetTracking();
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
      const c1 = n1 && n1.children;
      const prevShapeFlag = n1 ? n1.shapeFlag : 0;
      const c2 = n2.children;
      const { patchFlag, shapeFlag } = n2;
      if (patchFlag > 0) {
        if (patchFlag & 128) {
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          return;
        } else if (patchFlag & 256) {
          patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          return;
        }
      }
      if (shapeFlag & 8) {
        if (prevShapeFlag & 16) {
          unmountChildren(c1, parentComponent, parentSuspense);
        }
        if (c2 !== c1) {
          hostSetElementText(container, c2);
        }
      } else {
        if (prevShapeFlag & 16) {
          if (shapeFlag & 16) {
            patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else {
            unmountChildren(c1, parentComponent, parentSuspense, true);
          }
        } else {
          if (prevShapeFlag & 8) {
            hostSetElementText(container, "");
          }
          if (shapeFlag & 16) {
            mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          }
        }
      }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      c1 = c1 || EMPTY_ARR;
      c2 = c2 || EMPTY_ARR;
      const oldLength = c1.length;
      const newLength = c2.length;
      const commonLength = Math.min(oldLength, newLength);
      let i;
      for (i = 0; i < commonLength; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
      if (oldLength > newLength) {
        unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
      } else {
        mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
      }
    };
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      let i = 0;
      const l2 = c2.length;
      let e1 = c1.length - 1;
      let e2 = l2 - 1;
      while (i <= e1 && i <= e2) {
        const n1 = c1[i];
        const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (isSameVNodeType(n1, n2)) {
          patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          break;
        }
        i++;
      }
      while (i <= e1 && i <= e2) {
        const n1 = c1[e1];
        const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
        if (isSameVNodeType(n1, n2)) {
          patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          break;
        }
        e1--;
        e2--;
      }
      if (i > e1) {
        if (i <= e2) {
          const nextPos = e2 + 1;
          const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
          while (i <= e2) {
            patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            i++;
          }
        }
      } else if (i > e2) {
        while (i <= e1) {
          unmount(c1[i], parentComponent, parentSuspense, true);
          i++;
        }
      } else {
        const s1 = i;
        const s2 = i;
        const keyToNewIndexMap = /* @__PURE__ */ new Map();
        for (i = s2; i <= e2; i++) {
          const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
          if (nextChild.key != null) {
            keyToNewIndexMap.set(nextChild.key, i);
          }
        }
        let j;
        let patched = 0;
        const toBePatched = e2 - s2 + 1;
        let moved = false;
        let maxNewIndexSoFar = 0;
        const newIndexToOldIndexMap = new Array(toBePatched);
        for (i = 0; i < toBePatched; i++)
          newIndexToOldIndexMap[i] = 0;
        for (i = s1; i <= e1; i++) {
          const prevChild = c1[i];
          if (patched >= toBePatched) {
            unmount(prevChild, parentComponent, parentSuspense, true);
            continue;
          }
          let newIndex;
          if (prevChild.key != null) {
            newIndex = keyToNewIndexMap.get(prevChild.key);
          } else {
            for (j = s2; j <= e2; j++) {
              if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                newIndex = j;
                break;
              }
            }
          }
          if (newIndex === void 0) {
            unmount(prevChild, parentComponent, parentSuspense, true);
          } else {
            newIndexToOldIndexMap[newIndex - s2] = i + 1;
            if (newIndex >= maxNewIndexSoFar) {
              maxNewIndexSoFar = newIndex;
            } else {
              moved = true;
            }
            patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            patched++;
          }
        }
        const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
        j = increasingNewIndexSequence.length - 1;
        for (i = toBePatched - 1; i >= 0; i--) {
          const nextIndex = s2 + i;
          const nextChild = c2[nextIndex];
          const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
          if (newIndexToOldIndexMap[i] === 0) {
            patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else if (moved) {
            if (j < 0 || i !== increasingNewIndexSequence[j]) {
              move(
                nextChild,
                container,
                anchor,
                2
                /* MoveType.REORDER */
              );
            } else {
              j--;
            }
          }
        }
      }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
      const { el, type, transition, children, shapeFlag } = vnode;
      if (shapeFlag & 6) {
        move(vnode.component.subTree, container, anchor, moveType);
        return;
      }
      if (shapeFlag & 128) {
        vnode.suspense.move(container, anchor, moveType);
        return;
      }
      if (shapeFlag & 64) {
        type.move(vnode, container, anchor, internals);
        return;
      }
      if (type === Fragment) {
        hostInsert(el, container, anchor);
        for (let i = 0; i < children.length; i++) {
          move(children[i], container, anchor, moveType);
        }
        hostInsert(vnode.anchor, container, anchor);
        return;
      }
      if (type === Static) {
        moveStaticNode(vnode, container, anchor);
        return;
      }
      const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
      if (needTransition) {
        if (moveType === 0) {
          transition.beforeEnter(el);
          hostInsert(el, container, anchor);
          queuePostRenderEffect(() => transition.enter(el), parentSuspense);
        } else {
          const { leave, delayLeave, afterLeave } = transition;
          const remove3 = () => hostInsert(el, container, anchor);
          const performLeave = () => {
            leave(el, () => {
              remove3();
              afterLeave && afterLeave();
            });
          };
          if (delayLeave) {
            delayLeave(el, remove3, performLeave);
          } else {
            performLeave();
          }
        }
      } else {
        hostInsert(el, container, anchor);
      }
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
      const { type, props, ref: ref2, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
      if (ref2 != null) {
        setRef(ref2, null, parentSuspense, vnode, true);
      }
      if (shapeFlag & 256) {
        parentComponent.ctx.deactivate(vnode);
        return;
      }
      const shouldInvokeDirs = shapeFlag & 1 && dirs;
      const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
      let vnodeHook;
      if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
      if (shapeFlag & 6) {
        unmountComponent(vnode.component, parentSuspense, doRemove);
      } else {
        if (shapeFlag & 128) {
          vnode.suspense.unmount(parentSuspense, doRemove);
          return;
        }
        if (shouldInvokeDirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
        }
        if (shapeFlag & 64) {
          vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
        } else if (dynamicChildren && // #1153: fast path should not be taken for non-stable (v-for) fragments
        (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
          unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
        } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
          unmountChildren(children, parentComponent, parentSuspense);
        }
        if (doRemove) {
          remove2(vnode);
        }
      }
      if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
          shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
        }, parentSuspense);
      }
    };
    const remove2 = (vnode) => {
      const { type, el, anchor, transition } = vnode;
      if (type === Fragment) {
        {
          removeFragment(el, anchor);
        }
        return;
      }
      if (type === Static) {
        removeStaticNode(vnode);
        return;
      }
      const performRemove = () => {
        hostRemove(el);
        if (transition && !transition.persisted && transition.afterLeave) {
          transition.afterLeave();
        }
      };
      if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
        const { leave, delayLeave } = transition;
        const performLeave = () => leave(el, performRemove);
        if (delayLeave) {
          delayLeave(vnode.el, performRemove, performLeave);
        } else {
          performLeave();
        }
      } else {
        performRemove();
      }
    };
    const removeFragment = (cur, end2) => {
      let next;
      while (cur !== end2) {
        next = hostNextSibling(cur);
        hostRemove(cur);
        cur = next;
      }
      hostRemove(end2);
    };
    const unmountComponent = (instance, parentSuspense, doRemove) => {
      const { bum, scope, update: update2, subTree, um } = instance;
      if (bum) {
        invokeArrayFns(bum);
      }
      scope.stop();
      if (update2) {
        update2.active = false;
        unmount(subTree, instance, parentSuspense, doRemove);
      }
      if (um) {
        queuePostRenderEffect(um, parentSuspense);
      }
      queuePostRenderEffect(() => {
        instance.isUnmounted = true;
      }, parentSuspense);
      if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
        parentSuspense.deps--;
        if (parentSuspense.deps === 0) {
          parentSuspense.resolve();
        }
      }
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start2 = 0) => {
      for (let i = start2; i < children.length; i++) {
        unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
      }
    };
    const getNextHostNode = (vnode) => {
      if (vnode.shapeFlag & 6) {
        return getNextHostNode(vnode.component.subTree);
      }
      if (vnode.shapeFlag & 128) {
        return vnode.suspense.next();
      }
      return hostNextSibling(vnode.anchor || vnode.el);
    };
    const render = (vnode, container, isSVG) => {
      if (vnode == null) {
        if (container._vnode) {
          unmount(container._vnode, null, null, true);
        }
      } else {
        patch(container._vnode || null, vnode, container, null, null, null, isSVG);
      }
      flushPreFlushCbs();
      flushPostFlushCbs();
      container._vnode = vnode;
    };
    const internals = {
      p: patch,
      um: unmount,
      m: move,
      r: remove2,
      mt: mountComponent,
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      n: getNextHostNode,
      o: options
    };
    let hydrate;
    let hydrateNode;
    if (createHydrationFns) {
      [hydrate, hydrateNode] = createHydrationFns(internals);
    }
    return {
      render,
      hydrate,
      createApp: createAppAPI(render, hydrate)
    };
  }
  function toggleRecurse({ effect: effect2, update: update2 }, allowed) {
    effect2.allowRecurse = update2.allowRecurse = allowed;
  }
  function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if (isArray$1(ch1) && isArray$1(ch2)) {
      for (let i = 0; i < ch1.length; i++) {
        const c1 = ch1[i];
        let c2 = ch2[i];
        if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
          if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
            c2 = ch2[i] = cloneIfMounted(ch2[i]);
            c2.el = c1.el;
          }
          if (!shallow)
            traverseStaticChildren(c1, c2);
        }
        if (c2.type === Text) {
          c2.el = c1.el;
        }
      }
    }
  }
  function getSequence(arr) {
    const p2 = arr.slice();
    const result = [0];
    let i, j, u, v, c;
    const len = arr.length;
    for (i = 0; i < len; i++) {
      const arrI = arr[i];
      if (arrI !== 0) {
        j = result[result.length - 1];
        if (arr[j] < arrI) {
          p2[i] = j;
          result.push(i);
          continue;
        }
        u = 0;
        v = result.length - 1;
        while (u < v) {
          c = u + v >> 1;
          if (arr[result[c]] < arrI) {
            u = c + 1;
          } else {
            v = c;
          }
        }
        if (arrI < arr[result[u]]) {
          if (u > 0) {
            p2[i] = result[u - 1];
          }
          result[u] = i;
        }
      }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
      result[u] = v;
      v = p2[v];
    }
    return result;
  }
  const isTeleport = (type) => type.__isTeleport;
  const Fragment = Symbol(void 0);
  const Text = Symbol(void 0);
  const Comment = Symbol(void 0);
  const Static = Symbol(void 0);
  const blockStack = [];
  let currentBlock = null;
  function openBlock(disableTracking = false) {
    blockStack.push(currentBlock = disableTracking ? null : []);
  }
  function closeBlock() {
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
  }
  let isBlockTreeEnabled = 1;
  function setBlockTracking(value) {
    isBlockTreeEnabled += value;
  }
  function setupBlock(vnode) {
    vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
    closeBlock();
    if (isBlockTreeEnabled > 0 && currentBlock) {
      currentBlock.push(vnode);
    }
    return vnode;
  }
  function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
    return setupBlock(createBaseVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      true
      /* isBlock */
    ));
  }
  function createBlock(type, props, children, patchFlag, dynamicProps) {
    return setupBlock(createVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      true
      /* isBlock: prevent a block from tracking itself */
    ));
  }
  function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
  }
  function isSameVNodeType(n1, n2) {
    return n1.type === n2.type && n1.key === n2.key;
  }
  const InternalObjectKey = `__vInternal`;
  const normalizeKey = ({ key }) => key != null ? key : null;
  const normalizeRef = ({ ref: ref2, ref_key, ref_for }) => {
    return ref2 != null ? isString(ref2) || isRef(ref2) || isFunction(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null;
  };
  function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
    const vnode = {
      __v_isVNode: true,
      __v_skip: true,
      type,
      props,
      key: props && normalizeKey(props),
      ref: props && normalizeRef(props),
      scopeId: currentScopeId,
      slotScopeIds: null,
      children,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag,
      patchFlag,
      dynamicProps,
      dynamicChildren: null,
      appContext: null,
      ctx: currentRenderingInstance
    };
    if (needFullChildrenNormalization) {
      normalizeChildren(vnode, children);
      if (shapeFlag & 128) {
        type.normalize(vnode);
      }
    } else if (children) {
      vnode.shapeFlag |= isString(children) ? 8 : 16;
    }
    if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
    !isBlockNode && // has current parent block
    currentBlock && // presence of a patch flag indicates this node needs patching on updates.
    // component nodes also should always be patched, because even if the
    // component doesn't need to update, it needs to persist the instance on to
    // the next vnode so that it can be properly unmounted later.
    (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
    // vnode should not be considered dynamic due to handler caching.
    vnode.patchFlag !== 32) {
      currentBlock.push(vnode);
    }
    return vnode;
  }
  const createVNode = _createVNode;
  function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
      type = Comment;
    }
    if (isVNode(type)) {
      const cloned = cloneVNode(
        type,
        props,
        true
        /* mergeRef: true */
      );
      if (children) {
        normalizeChildren(cloned, children);
      }
      if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
        if (cloned.shapeFlag & 6) {
          currentBlock[currentBlock.indexOf(type)] = cloned;
        } else {
          currentBlock.push(cloned);
        }
      }
      cloned.patchFlag |= -2;
      return cloned;
    }
    if (isClassComponent(type)) {
      type = type.__vccOpts;
    }
    if (props) {
      props = guardReactiveProps(props);
      let { class: klass, style } = props;
      if (klass && !isString(klass)) {
        props.class = normalizeClass(klass);
      }
      if (isObject(style)) {
        if (isProxy(style) && !isArray$1(style)) {
          style = extend({}, style);
        }
        props.style = normalizeStyle(style);
      }
    }
    const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
    return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
  }
  function guardReactiveProps(props) {
    if (!props)
      return null;
    return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
  }
  function cloneVNode(vnode, extraProps, mergeRef = false) {
    const { props, ref: ref2, patchFlag, children } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
    const cloned = {
      __v_isVNode: true,
      __v_skip: true,
      type: vnode.type,
      props: mergedProps,
      key: mergedProps && normalizeKey(mergedProps),
      ref: extraProps && extraProps.ref ? (
        // #2078 in the case of <component :is="vnode" ref="extra"/>
        // if the vnode itself already has a ref, cloneVNode will need to merge
        // the refs so the single vnode can be set on multiple refs
        mergeRef && ref2 ? isArray$1(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps)
      ) : ref2,
      scopeId: vnode.scopeId,
      slotScopeIds: vnode.slotScopeIds,
      children,
      target: vnode.target,
      targetAnchor: vnode.targetAnchor,
      staticCount: vnode.staticCount,
      shapeFlag: vnode.shapeFlag,
      // if the vnode is cloned with extra props, we can no longer assume its
      // existing patch flag to be reliable and need to add the FULL_PROPS flag.
      // note: preserve flag for fragments since they use the flag for children
      // fast paths only.
      patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
      dynamicProps: vnode.dynamicProps,
      dynamicChildren: vnode.dynamicChildren,
      appContext: vnode.appContext,
      dirs: vnode.dirs,
      transition: vnode.transition,
      // These should technically only be non-null on mounted VNodes. However,
      // they *should* be copied for kept-alive vnodes. So we just always copy
      // them since them being non-null during a mount doesn't affect the logic as
      // they will simply be overwritten.
      component: vnode.component,
      suspense: vnode.suspense,
      ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
      ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
      el: vnode.el,
      anchor: vnode.anchor,
      ctx: vnode.ctx,
      ce: vnode.ce
    };
    return cloned;
  }
  function createTextVNode(text = " ", flag = 0) {
    return createVNode(Text, null, text, flag);
  }
  function createStaticVNode(content, numberOfNodes) {
    const vnode = createVNode(Static, null, content);
    vnode.staticCount = numberOfNodes;
    return vnode;
  }
  function createCommentVNode(text = "", asBlock = false) {
    return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
  }
  function normalizeVNode(child) {
    if (child == null || typeof child === "boolean") {
      return createVNode(Comment);
    } else if (isArray$1(child)) {
      return createVNode(
        Fragment,
        null,
        // #3666, avoid reference pollution when reusing vnode
        child.slice()
      );
    } else if (typeof child === "object") {
      return cloneIfMounted(child);
    } else {
      return createVNode(Text, null, String(child));
    }
  }
  function cloneIfMounted(child) {
    return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
  }
  function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag } = vnode;
    if (children == null) {
      children = null;
    } else if (isArray$1(children)) {
      type = 16;
    } else if (typeof children === "object") {
      if (shapeFlag & (1 | 64)) {
        const slot = children.default;
        if (slot) {
          slot._c && (slot._d = false);
          normalizeChildren(vnode, slot());
          slot._c && (slot._d = true);
        }
        return;
      } else {
        type = 32;
        const slotFlag = children._;
        if (!slotFlag && !(InternalObjectKey in children)) {
          children._ctx = currentRenderingInstance;
        } else if (slotFlag === 3 && currentRenderingInstance) {
          if (currentRenderingInstance.slots._ === 1) {
            children._ = 1;
          } else {
            children._ = 2;
            vnode.patchFlag |= 1024;
          }
        }
      }
    } else if (isFunction(children)) {
      children = { default: children, _ctx: currentRenderingInstance };
      type = 32;
    } else {
      children = String(children);
      if (shapeFlag & 64) {
        type = 16;
        children = [createTextVNode(children)];
      } else {
        type = 8;
      }
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
  }
  function mergeProps(...args) {
    const ret = {};
    for (let i = 0; i < args.length; i++) {
      const toMerge = args[i];
      for (const key in toMerge) {
        if (key === "class") {
          if (ret.class !== toMerge.class) {
            ret.class = normalizeClass([ret.class, toMerge.class]);
          }
        } else if (key === "style") {
          ret.style = normalizeStyle([ret.style, toMerge.style]);
        } else if (isOn(key)) {
          const existing = ret[key];
          const incoming = toMerge[key];
          if (incoming && existing !== incoming && !(isArray$1(existing) && existing.includes(incoming))) {
            ret[key] = existing ? [].concat(existing, incoming) : incoming;
          }
        } else if (key !== "") {
          ret[key] = toMerge[key];
        }
      }
    }
    return ret;
  }
  function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7, [
      vnode,
      prevVNode
    ]);
  }
  const emptyAppContext = createAppContext();
  let uid = 0;
  function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
      uid: uid++,
      vnode,
      type,
      parent,
      appContext,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new EffectScope(
        true
        /* detached */
      ),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: parent ? parent.provides : Object.create(appContext.provides),
      accessCache: null,
      renderCache: [],
      // local resolved assets
      components: null,
      directives: null,
      // resolved props and emits options
      propsOptions: normalizePropsOptions(type, appContext),
      emitsOptions: normalizeEmitsOptions(type, appContext),
      // emit
      emit: null,
      emitted: null,
      // props default value
      propsDefaults: EMPTY_OBJ,
      // inheritAttrs
      inheritAttrs: type.inheritAttrs,
      // state
      ctx: EMPTY_OBJ,
      data: EMPTY_OBJ,
      props: EMPTY_OBJ,
      attrs: EMPTY_OBJ,
      slots: EMPTY_OBJ,
      refs: EMPTY_OBJ,
      setupState: EMPTY_OBJ,
      setupContext: null,
      // suspense related
      suspense,
      suspenseId: suspense ? suspense.pendingId : 0,
      asyncDep: null,
      asyncResolved: false,
      // lifecycle hooks
      // not using enums here because it results in computed properties
      isMounted: false,
      isUnmounted: false,
      isDeactivated: false,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
    {
      instance.ctx = { _: instance };
    }
    instance.root = parent ? parent.root : instance;
    instance.emit = emit.bind(null, instance);
    if (vnode.ce) {
      vnode.ce(instance);
    }
    return instance;
  }
  let currentInstance = null;
  const getCurrentInstance = () => currentInstance || currentRenderingInstance;
  const setCurrentInstance = (instance) => {
    currentInstance = instance;
    instance.scope.on();
  };
  const unsetCurrentInstance = () => {
    currentInstance && currentInstance.scope.off();
    currentInstance = null;
  };
  function isStatefulComponent(instance) {
    return instance.vnode.shapeFlag & 4;
  }
  let isInSSRComponentSetup = false;
  function setupComponent(instance, isSSR = false) {
    isInSSRComponentSetup = isSSR;
    const { props, children } = instance.vnode;
    const isStateful = isStatefulComponent(instance);
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children);
    const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
    isInSSRComponentSetup = false;
    return setupResult;
  }
  function setupStatefulComponent(instance, isSSR) {
    const Component = instance.type;
    instance.accessCache = /* @__PURE__ */ Object.create(null);
    instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
    const { setup } = Component;
    if (setup) {
      const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
      setCurrentInstance(instance);
      pauseTracking();
      const setupResult = callWithErrorHandling(setup, instance, 0, [instance.props, setupContext]);
      resetTracking();
      unsetCurrentInstance();
      if (isPromise(setupResult)) {
        setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
        if (isSSR) {
          return setupResult.then((resolvedResult) => {
            handleSetupResult(instance, resolvedResult, isSSR);
          }).catch((e) => {
            handleError(
              e,
              instance,
              0
              /* ErrorCodes.SETUP_FUNCTION */
            );
          });
        } else {
          instance.asyncDep = setupResult;
        }
      } else {
        handleSetupResult(instance, setupResult, isSSR);
      }
    } else {
      finishComponentSetup(instance, isSSR);
    }
  }
  function handleSetupResult(instance, setupResult, isSSR) {
    if (isFunction(setupResult)) {
      if (instance.type.__ssrInlineRender) {
        instance.ssrRender = setupResult;
      } else {
        instance.render = setupResult;
      }
    } else if (isObject(setupResult)) {
      instance.setupState = proxyRefs(setupResult);
    } else
      ;
    finishComponentSetup(instance, isSSR);
  }
  let compile;
  function finishComponentSetup(instance, isSSR, skipOptions) {
    const Component = instance.type;
    if (!instance.render) {
      if (!isSSR && compile && !Component.render) {
        const template = Component.template || resolveMergedOptions(instance).template;
        if (template) {
          const { isCustomElement, compilerOptions } = instance.appContext.config;
          const { delimiters, compilerOptions: componentCompilerOptions } = Component;
          const finalCompilerOptions = extend(extend({
            isCustomElement,
            delimiters
          }, compilerOptions), componentCompilerOptions);
          Component.render = compile(template, finalCompilerOptions);
        }
      }
      instance.render = Component.render || NOOP;
    }
    {
      setCurrentInstance(instance);
      pauseTracking();
      applyOptions(instance);
      resetTracking();
      unsetCurrentInstance();
    }
  }
  function createAttrsProxy(instance) {
    return new Proxy(instance.attrs, {
      get(target, key) {
        track$1(instance, "get", "$attrs");
        return target[key];
      }
    });
  }
  function createSetupContext(instance) {
    const expose = (exposed) => {
      instance.exposed = exposed || {};
    };
    let attrs;
    {
      return {
        get attrs() {
          return attrs || (attrs = createAttrsProxy(instance));
        },
        slots: instance.slots,
        emit: instance.emit,
        expose
      };
    }
  }
  function getExposeProxy(instance) {
    if (instance.exposed) {
      return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
        get(target, key) {
          if (key in target) {
            return target[key];
          } else if (key in publicPropertiesMap) {
            return publicPropertiesMap[key](instance);
          }
        },
        has(target, key) {
          return key in target || key in publicPropertiesMap;
        }
      }));
    }
  }
  function getComponentName(Component, includeInferred = true) {
    return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
  }
  function isClassComponent(value) {
    return isFunction(value) && "__vccOpts" in value;
  }
  const computed = (getterOrOptions, debugOptions) => {
    return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
  };
  function useSlots() {
    return getContext().slots;
  }
  function getContext() {
    const i = getCurrentInstance();
    return i.setupContext || (i.setupContext = createSetupContext(i));
  }
  function h(type, propsOrChildren, children) {
    const l = arguments.length;
    if (l === 2) {
      if (isObject(propsOrChildren) && !isArray$1(propsOrChildren)) {
        if (isVNode(propsOrChildren)) {
          return createVNode(type, null, [propsOrChildren]);
        }
        return createVNode(type, propsOrChildren);
      } else {
        return createVNode(type, null, propsOrChildren);
      }
    } else {
      if (l > 3) {
        children = Array.prototype.slice.call(arguments, 2);
      } else if (l === 3 && isVNode(children)) {
        children = [children];
      }
      return createVNode(type, propsOrChildren, children);
    }
  }
  const ssrContextKey = Symbol(``);
  const useSSRContext = () => {
    {
      const ctx = inject(ssrContextKey);
      return ctx;
    }
  };
  const version = "3.2.47";
  const svgNS = "http://www.w3.org/2000/svg";
  const doc = typeof document !== "undefined" ? document : null;
  const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
  const nodeOps = {
    insert: (child, parent, anchor) => {
      parent.insertBefore(child, anchor || null);
    },
    remove: (child) => {
      const parent = child.parentNode;
      if (parent) {
        parent.removeChild(child);
      }
    },
    createElement: (tag, isSVG, is, props) => {
      const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? { is } : void 0);
      if (tag === "select" && props && props.multiple != null) {
        el.setAttribute("multiple", props.multiple);
      }
      return el;
    },
    createText: (text) => doc.createTextNode(text),
    createComment: (text) => doc.createComment(text),
    setText: (node, text) => {
      node.nodeValue = text;
    },
    setElementText: (el, text) => {
      el.textContent = text;
    },
    parentNode: (node) => node.parentNode,
    nextSibling: (node) => node.nextSibling,
    querySelector: (selector) => doc.querySelector(selector),
    setScopeId(el, id) {
      el.setAttribute(id, "");
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent(content, parent, anchor, isSVG, start2, end2) {
      const before = anchor ? anchor.previousSibling : parent.lastChild;
      if (start2 && (start2 === end2 || start2.nextSibling)) {
        while (true) {
          parent.insertBefore(start2.cloneNode(true), anchor);
          if (start2 === end2 || !(start2 = start2.nextSibling))
            break;
        }
      } else {
        templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
        const template = templateContainer.content;
        if (isSVG) {
          const wrapper = template.firstChild;
          while (wrapper.firstChild) {
            template.appendChild(wrapper.firstChild);
          }
          template.removeChild(wrapper);
        }
        parent.insertBefore(template, anchor);
      }
      return [
        // first
        before ? before.nextSibling : parent.firstChild,
        // last
        anchor ? anchor.previousSibling : parent.lastChild
      ];
    }
  };
  function patchClass(el, value, isSVG) {
    const transitionClasses = el._vtc;
    if (transitionClasses) {
      value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
    }
    if (value == null) {
      el.removeAttribute("class");
    } else if (isSVG) {
      el.setAttribute("class", value);
    } else {
      el.className = value;
    }
  }
  function patchStyle(el, prev, next) {
    const style = el.style;
    const isCssString = isString(next);
    if (next && !isCssString) {
      if (prev && !isString(prev)) {
        for (const key in prev) {
          if (next[key] == null) {
            setStyle(style, key, "");
          }
        }
      }
      for (const key in next) {
        setStyle(style, key, next[key]);
      }
    } else {
      const currentDisplay = style.display;
      if (isCssString) {
        if (prev !== next) {
          style.cssText = next;
        }
      } else if (prev) {
        el.removeAttribute("style");
      }
      if ("_vod" in el) {
        style.display = currentDisplay;
      }
    }
  }
  const importantRE = /\s*!important$/;
  function setStyle(style, name, val) {
    if (isArray$1(val)) {
      val.forEach((v) => setStyle(style, name, v));
    } else {
      if (val == null)
        val = "";
      if (name.startsWith("--")) {
        style.setProperty(name, val);
      } else {
        const prefixed = autoPrefix(style, name);
        if (importantRE.test(val)) {
          style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
        } else {
          style[prefixed] = val;
        }
      }
    }
  }
  const prefixes = ["Webkit", "Moz", "ms"];
  const prefixCache = {};
  function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) {
      return cached;
    }
    let name = camelize(rawName);
    if (name !== "filter" && name in style) {
      return prefixCache[rawName] = name;
    }
    name = capitalize(name);
    for (let i = 0; i < prefixes.length; i++) {
      const prefixed = prefixes[i] + name;
      if (prefixed in style) {
        return prefixCache[rawName] = prefixed;
      }
    }
    return rawName;
  }
  const xlinkNS = "http://www.w3.org/1999/xlink";
  function patchAttr(el, key, value, isSVG, instance) {
    if (isSVG && key.startsWith("xlink:")) {
      if (value == null) {
        el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      const isBoolean = isSpecialBooleanAttr(key);
      if (value == null || isBoolean && !includeBooleanAttr(value)) {
        el.removeAttribute(key);
      } else {
        el.setAttribute(key, isBoolean ? "" : value);
      }
    }
  }
  function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
    if (key === "innerHTML" || key === "textContent") {
      if (prevChildren) {
        unmountChildren(prevChildren, parentComponent, parentSuspense);
      }
      el[key] = value == null ? "" : value;
      return;
    }
    if (key === "value" && el.tagName !== "PROGRESS" && // custom elements may use _value internally
    !el.tagName.includes("-")) {
      el._value = value;
      const newValue = value == null ? "" : value;
      if (el.value !== newValue || // #4956: always set for OPTION elements because its value falls back to
      // textContent if no value attribute is present. And setting .value for
      // OPTION has no side effect
      el.tagName === "OPTION") {
        el.value = newValue;
      }
      if (value == null) {
        el.removeAttribute(key);
      }
      return;
    }
    let needRemove = false;
    if (value === "" || value == null) {
      const type = typeof el[key];
      if (type === "boolean") {
        value = includeBooleanAttr(value);
      } else if (value == null && type === "string") {
        value = "";
        needRemove = true;
      } else if (type === "number") {
        value = 0;
        needRemove = true;
      }
    }
    try {
      el[key] = value;
    } catch (e) {
    }
    needRemove && el.removeAttribute(key);
  }
  function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
  }
  function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
  }
  function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    const invokers = el._vei || (el._vei = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) {
      existingInvoker.value = nextValue;
    } else {
      const [name, options] = parseName(rawName);
      if (nextValue) {
        const invoker = invokers[rawName] = createInvoker(nextValue, instance);
        addEventListener(el, name, invoker, options);
      } else if (existingInvoker) {
        removeEventListener(el, name, existingInvoker, options);
        invokers[rawName] = void 0;
      }
    }
  }
  const optionsModifierRE = /(?:Once|Passive|Capture)$/;
  function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
      options = {};
      let m;
      while (m = name.match(optionsModifierRE)) {
        name = name.slice(0, name.length - m[0].length);
        options[m[0].toLowerCase()] = true;
      }
    }
    const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
    return [event, options];
  }
  let cachedNow = 0;
  const p = /* @__PURE__ */ Promise.resolve();
  const getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
  function createInvoker(initialValue, instance) {
    const invoker = (e) => {
      if (!e._vts) {
        e._vts = Date.now();
      } else if (e._vts <= invoker.attached) {
        return;
      }
      callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5, [e]);
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
  }
  function patchStopImmediatePropagation(e, value) {
    if (isArray$1(value)) {
      const originalStop = e.stopImmediatePropagation;
      e.stopImmediatePropagation = () => {
        originalStop.call(e);
        e._stopped = true;
      };
      return value.map((fn) => (e2) => !e2._stopped && fn && fn(e2));
    } else {
      return value;
    }
  }
  const nativeOnRE = /^on[a-z]/;
  const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
    if (key === "class") {
      patchClass(el, nextValue, isSVG);
    } else if (key === "style") {
      patchStyle(el, prevValue, nextValue);
    } else if (isOn(key)) {
      if (!isModelListener(key)) {
        patchEvent(el, key, prevValue, nextValue, parentComponent);
      }
    } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
      patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
    } else {
      if (key === "true-value") {
        el._trueValue = nextValue;
      } else if (key === "false-value") {
        el._falseValue = nextValue;
      }
      patchAttr(el, key, nextValue, isSVG);
    }
  };
  function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
      if (key === "innerHTML" || key === "textContent") {
        return true;
      }
      if (key in el && nativeOnRE.test(key) && isFunction(value)) {
        return true;
      }
      return false;
    }
    if (key === "spellcheck" || key === "draggable" || key === "translate") {
      return false;
    }
    if (key === "form") {
      return false;
    }
    if (key === "list" && el.tagName === "INPUT") {
      return false;
    }
    if (key === "type" && el.tagName === "TEXTAREA") {
      return false;
    }
    if (nativeOnRE.test(key) && isString(value)) {
      return false;
    }
    return key in el;
  }
  function useCssVars(getter) {
    const instance = getCurrentInstance();
    if (!instance) {
      return;
    }
    const updateTeleports = instance.ut = (vars = getter(instance.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${instance.uid}"]`)).forEach((node) => setVarsOnNode(node, vars));
    };
    const setVars = () => {
      const vars = getter(instance.proxy);
      setVarsOnVNode(instance.subTree, vars);
      updateTeleports(vars);
    };
    watchPostEffect(setVars);
    onMounted(() => {
      const ob = new MutationObserver(setVars);
      ob.observe(instance.subTree.el.parentNode, { childList: true });
      onUnmounted(() => ob.disconnect());
    });
  }
  function setVarsOnVNode(vnode, vars) {
    if (vnode.shapeFlag & 128) {
      const suspense = vnode.suspense;
      vnode = suspense.activeBranch;
      if (suspense.pendingBranch && !suspense.isHydrating) {
        suspense.effects.push(() => {
          setVarsOnVNode(suspense.activeBranch, vars);
        });
      }
    }
    while (vnode.component) {
      vnode = vnode.component.subTree;
    }
    if (vnode.shapeFlag & 1 && vnode.el) {
      setVarsOnNode(vnode.el, vars);
    } else if (vnode.type === Fragment) {
      vnode.children.forEach((c) => setVarsOnVNode(c, vars));
    } else if (vnode.type === Static) {
      let { el, anchor } = vnode;
      while (el) {
        setVarsOnNode(el, vars);
        if (el === anchor)
          break;
        el = el.nextSibling;
      }
    }
  }
  function setVarsOnNode(el, vars) {
    if (el.nodeType === 1) {
      const style = el.style;
      for (const key in vars) {
        style.setProperty(`--${key}`, vars[key]);
      }
    }
  }
  const getModelAssigner = (vnode) => {
    const fn = vnode.props["onUpdate:modelValue"] || false;
    return isArray$1(fn) ? (value) => invokeArrayFns(fn, value) : fn;
  };
  function onCompositionStart(e) {
    e.target.composing = true;
  }
  function onCompositionEnd(e) {
    const target = e.target;
    if (target.composing) {
      target.composing = false;
      target.dispatchEvent(new Event("input"));
    }
  }
  const vModelText = {
    created(el, { modifiers: { lazy, trim, number } }, vnode) {
      el._assign = getModelAssigner(vnode);
      const castToNumber = number || vnode.props && vnode.props.type === "number";
      addEventListener(el, lazy ? "change" : "input", (e) => {
        if (e.target.composing)
          return;
        let domValue = el.value;
        if (trim) {
          domValue = domValue.trim();
        }
        if (castToNumber) {
          domValue = looseToNumber(domValue);
        }
        el._assign(domValue);
      });
      if (trim) {
        addEventListener(el, "change", () => {
          el.value = el.value.trim();
        });
      }
      if (!lazy) {
        addEventListener(el, "compositionstart", onCompositionStart);
        addEventListener(el, "compositionend", onCompositionEnd);
        addEventListener(el, "change", onCompositionEnd);
      }
    },
    // set value on mounted so it's after min/max for type="range"
    mounted(el, { value }) {
      el.value = value == null ? "" : value;
    },
    beforeUpdate(el, { value, modifiers: { lazy, trim, number } }, vnode) {
      el._assign = getModelAssigner(vnode);
      if (el.composing)
        return;
      if (document.activeElement === el && el.type !== "range") {
        if (lazy) {
          return;
        }
        if (trim && el.value.trim() === value) {
          return;
        }
        if ((number || el.type === "number") && looseToNumber(el.value) === value) {
          return;
        }
      }
      const newValue = value == null ? "" : value;
      if (el.value !== newValue) {
        el.value = newValue;
      }
    }
  };
  const vModelCheckbox = {
    // #4096 array checkboxes need to be deep traversed
    deep: true,
    created(el, _, vnode) {
      el._assign = getModelAssigner(vnode);
      addEventListener(el, "change", () => {
        const modelValue = el._modelValue;
        const elementValue = getValue(el);
        const checked = el.checked;
        const assign2 = el._assign;
        if (isArray$1(modelValue)) {
          const index = looseIndexOf(modelValue, elementValue);
          const found = index !== -1;
          if (checked && !found) {
            assign2(modelValue.concat(elementValue));
          } else if (!checked && found) {
            const filtered = [...modelValue];
            filtered.splice(index, 1);
            assign2(filtered);
          }
        } else if (isSet(modelValue)) {
          const cloned = new Set(modelValue);
          if (checked) {
            cloned.add(elementValue);
          } else {
            cloned.delete(elementValue);
          }
          assign2(cloned);
        } else {
          assign2(getCheckboxValue(el, checked));
        }
      });
    },
    // set initial checked on mount to wait for true-value/false-value
    mounted: setChecked,
    beforeUpdate(el, binding, vnode) {
      el._assign = getModelAssigner(vnode);
      setChecked(el, binding, vnode);
    }
  };
  function setChecked(el, { value, oldValue }, vnode) {
    el._modelValue = value;
    if (isArray$1(value)) {
      el.checked = looseIndexOf(value, vnode.props.value) > -1;
    } else if (isSet(value)) {
      el.checked = value.has(vnode.props.value);
    } else if (value !== oldValue) {
      el.checked = looseEqual(value, getCheckboxValue(el, true));
    }
  }
  function getValue(el) {
    return "_value" in el ? el._value : el.value;
  }
  function getCheckboxValue(el, checked) {
    const key = checked ? "_trueValue" : "_falseValue";
    return key in el ? el[key] : checked;
  }
  const systemModifiers = ["ctrl", "shift", "alt", "meta"];
  const modifierGuards = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, modifiers) => systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m))
  };
  const withModifiers = (fn, modifiers) => {
    return (event, ...args) => {
      for (let i = 0; i < modifiers.length; i++) {
        const guard = modifierGuards[modifiers[i]];
        if (guard && guard(event, modifiers))
          return;
      }
      return fn(event, ...args);
    };
  };
  const keyNames = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  };
  const withKeys = (fn, modifiers) => {
    return (event) => {
      if (!("key" in event)) {
        return;
      }
      const eventKey = hyphenate(event.key);
      if (modifiers.some((k) => k === eventKey || keyNames[k] === eventKey)) {
        return fn(event);
      }
    };
  };
  const vShow = {
    beforeMount(el, { value }, { transition }) {
      el._vod = el.style.display === "none" ? "" : el.style.display;
      if (transition && value) {
        transition.beforeEnter(el);
      } else {
        setDisplay(el, value);
      }
    },
    mounted(el, { value }, { transition }) {
      if (transition && value) {
        transition.enter(el);
      }
    },
    updated(el, { value, oldValue }, { transition }) {
      if (!value === !oldValue)
        return;
      if (transition) {
        if (value) {
          transition.beforeEnter(el);
          setDisplay(el, true);
          transition.enter(el);
        } else {
          transition.leave(el, () => {
            setDisplay(el, false);
          });
        }
      } else {
        setDisplay(el, value);
      }
    },
    beforeUnmount(el, { value }) {
      setDisplay(el, value);
    }
  };
  function setDisplay(el, value) {
    el.style.display = value ? el._vod : "none";
  }
  const rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
  let renderer;
  function ensureRenderer() {
    return renderer || (renderer = createRenderer(rendererOptions));
  }
  const createApp = (...args) => {
    const app2 = ensureRenderer().createApp(...args);
    const { mount } = app2;
    app2.mount = (containerOrSelector) => {
      const container = normalizeContainer(containerOrSelector);
      if (!container)
        return;
      const component = app2._component;
      if (!isFunction(component) && !component.render && !component.template) {
        component.template = container.innerHTML;
      }
      container.innerHTML = "";
      const proxy = mount(container, false, container instanceof SVGElement);
      if (container instanceof Element) {
        container.removeAttribute("v-cloak");
        container.setAttribute("data-v-app", "");
      }
      return proxy;
    };
    return app2;
  };
  function normalizeContainer(container) {
    if (isString(container)) {
      const res = document.querySelector(container);
      return res;
    }
    return container;
  }
  var isVue2 = false;
  /*!
    * pinia v2.0.30
    * (c) 2023 Eduardo San Martin Morote
    * @license MIT
    */
  let activePinia;
  const setActivePinia = (pinia) => activePinia = pinia;
  const piniaSymbol = (
    /* istanbul ignore next */
    Symbol()
  );
  function isPlainObject(o) {
    return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
  }
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  function createPinia() {
    const scope = effectScope(true);
    const state = scope.run(() => ref({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia = markRaw({
      install(app2) {
        setActivePinia(pinia);
        {
          pinia._a = app2;
          app2.provide(piniaSymbol, pinia);
          app2.config.globalProperties.$pinia = pinia;
          toBeInstalled.forEach((plugin) => _p.push(plugin));
          toBeInstalled = [];
        }
      },
      use(plugin) {
        if (!this._a && !isVue2) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      // it's actually undefined here
      // @ts-expect-error
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    return pinia;
  }
  const noop$1 = () => {
  };
  function addSubscription(subscriptions, callback, detached, onCleanup = noop$1) {
    subscriptions.push(callback);
    const removeSubscription = () => {
      const idx = subscriptions.indexOf(callback);
      if (idx > -1) {
        subscriptions.splice(idx, 1);
        onCleanup();
      }
    };
    if (!detached && getCurrentScope()) {
      onScopeDispose(removeSubscription);
    }
    return removeSubscription;
  }
  function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
      callback(...args);
    });
  }
  function mergeReactiveObjects(target, patchToApply) {
    if (target instanceof Map && patchToApply instanceof Map) {
      patchToApply.forEach((value, key) => target.set(key, value));
    }
    if (target instanceof Set && patchToApply instanceof Set) {
      patchToApply.forEach(target.add, target);
    }
    for (const key in patchToApply) {
      if (!patchToApply.hasOwnProperty(key))
        continue;
      const subPatch = patchToApply[key];
      const targetValue = target[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
        target[key] = mergeReactiveObjects(targetValue, subPatch);
      } else {
        target[key] = subPatch;
      }
    }
    return target;
  }
  const skipHydrateSymbol = (
    /* istanbul ignore next */
    Symbol()
  );
  function shouldHydrate(obj) {
    return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
  }
  const { assign: assign$1 } = Object;
  function isComputed(o) {
    return !!(isRef(o) && o.effect);
  }
  function createOptionsStore(id, options, pinia, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia.state.value[id];
    let store2;
    function setup() {
      if (!initialState && true) {
        {
          pinia.state.value[id] = state ? state() : {};
        }
      }
      const localState = toRefs(pinia.state.value[id]);
      return assign$1(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
        computedGetters[name] = markRaw(computed(() => {
          setActivePinia(pinia);
          const store3 = pinia._s.get(id);
          return getters[name].call(store3, store3);
        }));
        return computedGetters;
      }, {}));
    }
    store2 = createSetupStore(id, setup, options, pinia, hot, true);
    store2.$reset = function $reset() {
      const newState = state ? state() : {};
      this.$patch(($state) => {
        assign$1($state, newState);
      });
    };
    return store2;
  }
  function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign$1({ actions: {} }, options);
    const $subscribeOptions = {
      deep: true
      // flush: 'post',
    };
    let isListening;
    let isSyncListening;
    let subscriptions = markRaw([]);
    let actionSubscriptions = markRaw([]);
    let debuggerEvents;
    const initialState = pinia.state.value[$id];
    if (!isOptionsStore && !initialState && true) {
      {
        pinia.state.value[$id] = {};
      }
    }
    ref({});
    let activeListener;
    function $patch(partialStateOrMutator) {
      let subscriptionMutation;
      isListening = isSyncListening = false;
      if (typeof partialStateOrMutator === "function") {
        partialStateOrMutator(pinia.state.value[$id]);
        subscriptionMutation = {
          type: MutationType.patchFunction,
          storeId: $id,
          events: debuggerEvents
        };
      } else {
        mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
        subscriptionMutation = {
          type: MutationType.patchObject,
          payload: partialStateOrMutator,
          storeId: $id,
          events: debuggerEvents
        };
      }
      const myListenerId = activeListener = Symbol();
      nextTick().then(() => {
        if (activeListener === myListenerId) {
          isListening = true;
        }
      });
      isSyncListening = true;
      triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
    }
    const $reset = noop$1;
    function $dispose() {
      scope.stop();
      subscriptions = [];
      actionSubscriptions = [];
      pinia._s.delete($id);
    }
    function wrapAction(name, action) {
      return function() {
        setActivePinia(pinia);
        const args = Array.from(arguments);
        const afterCallbackList = [];
        const onErrorCallbackList = [];
        function after(callback) {
          afterCallbackList.push(callback);
        }
        function onError(callback) {
          onErrorCallbackList.push(callback);
        }
        triggerSubscriptions(actionSubscriptions, {
          args,
          name,
          store: store2,
          after,
          onError
        });
        let ret;
        try {
          ret = action.apply(this && this.$id === $id ? this : store2, args);
        } catch (error2) {
          triggerSubscriptions(onErrorCallbackList, error2);
          throw error2;
        }
        if (ret instanceof Promise) {
          return ret.then((value) => {
            triggerSubscriptions(afterCallbackList, value);
            return value;
          }).catch((error2) => {
            triggerSubscriptions(onErrorCallbackList, error2);
            return Promise.reject(error2);
          });
        }
        triggerSubscriptions(afterCallbackList, ret);
        return ret;
      };
    }
    const partialStore = {
      _p: pinia,
      // _s: scope,
      $id,
      $onAction: addSubscription.bind(null, actionSubscriptions),
      $patch,
      $reset,
      $subscribe(callback, options2 = {}) {
        const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
        const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
          if (options2.flush === "sync" ? isSyncListening : isListening) {
            callback({
              storeId: $id,
              type: MutationType.direct,
              events: debuggerEvents
            }, state);
          }
        }, assign$1({}, $subscribeOptions, options2)));
        return removeSubscription;
      },
      $dispose
    };
    const store2 = reactive(partialStore);
    pinia._s.set($id, store2);
    const setupStore = pinia._e.run(() => {
      scope = effectScope();
      return scope.run(() => setup());
    });
    for (const key in setupStore) {
      const prop = setupStore[key];
      if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
        if (!isOptionsStore) {
          if (initialState && shouldHydrate(prop)) {
            if (isRef(prop)) {
              prop.value = initialState[key];
            } else {
              mergeReactiveObjects(prop, initialState[key]);
            }
          }
          {
            pinia.state.value[$id][key] = prop;
          }
        }
      } else if (typeof prop === "function") {
        const actionValue = wrapAction(key, prop);
        {
          setupStore[key] = actionValue;
        }
        optionsForPlugin.actions[key] = prop;
      } else
        ;
    }
    {
      assign$1(store2, setupStore);
      assign$1(toRaw(store2), setupStore);
    }
    Object.defineProperty(store2, "$state", {
      get: () => pinia.state.value[$id],
      set: (state) => {
        $patch(($state) => {
          assign$1($state, state);
        });
      }
    });
    pinia._p.forEach((extender) => {
      {
        assign$1(store2, scope.run(() => extender({
          store: store2,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        })));
      }
    });
    if (initialState && isOptionsStore && options.hydrate) {
      options.hydrate(store2.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store2;
  }
  function defineStore(idOrOptions, setup, setupOptions) {
    let id;
    let options;
    const isSetupStore = typeof setup === "function";
    if (typeof idOrOptions === "string") {
      id = idOrOptions;
      options = isSetupStore ? setupOptions : setup;
    } else {
      options = idOrOptions;
      id = idOrOptions.id;
    }
    function useStore(pinia, hot) {
      const currentInstance2 = getCurrentInstance();
      pinia = // in test mode, ignore the argument provided as we can always retrieve a
      // pinia instance with getActivePinia()
      pinia || currentInstance2 && inject(piniaSymbol, null);
      if (pinia)
        setActivePinia(pinia);
      pinia = activePinia;
      if (!pinia._s.has(id)) {
        if (isSetupStore) {
          createSetupStore(id, setup, options, pinia);
        } else {
          createOptionsStore(id, options, pinia);
        }
      }
      const store2 = pinia._s.get(id);
      return store2;
    }
    useStore.$id = id;
    return useStore;
  }
  class Management {
    constructor(context) {
      __publicField(this, "context");
      this.context = context;
    }
    uninstall() {
      var _a;
      const options = {
        showConfirmDialog: true
      };
      return (_a = this.context) == null ? void 0 : _a.management.uninstallSelf(options);
    }
  }
  class Message {
    constructor(namepsace, context) {
      __publicField(this, "context");
      __publicField(this, "namespace");
      this.namespace = namepsace;
      this.context = context;
    }
    async send(message) {
      var _a, _b;
      const data2 = {
        ...message,
        from: this.namespace
      };
      return await ((_b = (_a = this.context) == null ? void 0 : _a.runtime) == null ? void 0 : _b.sendMessage(data2));
    }
    addListener(callback) {
      var _a, _b, _c;
      (_c = (_b = (_a = this.context) == null ? void 0 : _a.runtime) == null ? void 0 : _b.onMessage) == null ? void 0 : _c.addListener(callback);
    }
  }
  const UPDATE_KEY = "updatesViewed";
  const CONSENT_KEY = "dataConsentAgreed";
  const ACTIVITY_CONSENT_KEY = "activityConsentAgreed";
  class Storage {
    constructor(context) {
      __publicField(this, "context");
      this.context = context;
    }
    async set(items) {
      var _a;
      for (const key in items) {
        items[key] = JSON.stringify(items[key]);
      }
      if ((_a = this.context) == null ? void 0 : _a.storage) {
        await this.context.storage.local.set(items);
        return;
      }
      for (const key in items) {
        localStorage.setItem(key, items[key]);
      }
    }
    async get(keys) {
      var _a;
      let items = {};
      const includesDefaults = !!(keys && typeof keys !== "string" && !Array.isArray(keys));
      if ((_a = this.context) == null ? void 0 : _a.storage) {
        items = await this.context.storage.local.get(keys);
        for (const key in items) {
          if (typeof items[key] === "string") {
            items[key] = JSON.parse(items[key]);
          }
        }
        return items;
      }
      let iterableKeys = keys;
      if (typeof keys === "string") {
        iterableKeys = [keys];
      } else if (keys && !Array.isArray(keys)) {
        iterableKeys = Object.keys(keys);
      }
      if (!iterableKeys) {
        items = { ...localStorage };
      } else {
        iterableKeys.forEach((key) => {
          items[key] = localStorage.getItem(key);
          if (includesDefaults && !items[key]) {
            items[key] = keys[key];
          }
        });
      }
      for (const key in items) {
        if (typeof items[key] === "string") {
          items[key] = JSON.parse(items[key]);
        }
      }
      return items;
    }
    async remove(keys) {
      var _a;
      if ((_a = this.context) == null ? void 0 : _a.storage) {
        await this.context.storage.local.remove(keys);
        return;
      }
      const iterableKeys = Array.isArray(keys) ? keys : [keys];
      iterableKeys.forEach((key) => localStorage.removeItem(key));
    }
    async clear({ keepDeviceId = false } = {}) {
      var _a;
      const { deviceId } = await this.get("deviceId");
      const updates = await this.get(UPDATE_KEY);
      const dataConsent = await this.get(CONSENT_KEY);
      if ((_a = this.context) == null ? void 0 : _a.storage) {
        await this.context.storage.local.clear();
      } else {
        localStorage.clear();
      }
      if (deviceId && keepDeviceId) {
        await this.set({ deviceId });
      }
      if (updates[UPDATE_KEY]) {
        await this.set(updates);
      }
      if (dataConsent[CONSENT_KEY]) {
        await this.set(dataConsent);
      }
    }
  }
  class ExtensionApi {
    constructor(namespace) {
      __publicField(this, "_context");
      __publicField(this, "storage");
      __publicField(this, "message");
      __publicField(this, "management");
      var _a;
      if (typeof browser !== "undefined") {
        this._context = browser;
      } else if (typeof chrome !== "undefined") {
        this._context = chrome;
      }
      if (this._context) {
        (_a = this._context.runtime) == null ? void 0 : _a.connect();
      }
      this.storage = new Storage(this._context);
      this.message = new Message(namespace, this._context);
      this.management = new Management(this._context);
    }
    get context() {
      return this._context;
    }
    get popup() {
      var _a, _b, _c, _d, _e;
      if ((_b = (_a = this.context) == null ? void 0 : _a.extension) == null ? void 0 : _b.getViews) {
        return !!((_e = (_d = (_c = this.context) == null ? void 0 : _c.extension) == null ? void 0 : _d.getViews({ type: "popup" })) == null ? void 0 : _e.length);
      }
      return false;
    }
    getManifest() {
      if (!this.context) {
        return {};
      }
      return this.context.runtime.getManifest();
    }
    getURL(url) {
      var _a;
      if (!this.context) {
        return "";
      }
      return (_a = this.context.runtime) == null ? void 0 : _a.getURL(url);
    }
    async getBrowserInfo() {
      var _a, _b;
      if ((_b = (_a = this.context) == null ? void 0 : _a.runtime) == null ? void 0 : _b.getBrowserInfo) {
        return this.context.runtime.getBrowserInfo();
      }
      return {
        name: "",
        vendor: "",
        version: "",
        buildID: ""
      };
    }
    addListener(event, callback) {
      if (!this.context) {
        return;
      }
      this.context.runtime[event].addListener(callback);
    }
    addBrowserActionListener(callback) {
      if (!this.context) {
        return;
      }
      this.context.action.onClicked.addListener(callback);
    }
    async getCurrentTab() {
      if (!this.context || !this.context.tabs) {
        return;
      }
      const [tab] = await this.context.tabs.query({
        active: true,
        currentWindow: true
      });
      return tab;
    }
    addTabListener(listener) {
      var _a, _b;
      (_b = (_a = this.context) == null ? void 0 : _a.tabs) == null ? void 0 : _b.onUpdated.addListener(listener);
    }
  }
  const appExtensionApi = new ExtensionApi("app");
  let getRandomValues;
  const rnds8 = new Uint8Array(16);
  function rng() {
    if (!getRandomValues) {
      getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
      if (!getRandomValues) {
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
    }
    return getRandomValues(rnds8);
  }
  const byteToHex = [];
  for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 256).toString(16).slice(1));
  }
  function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  }
  const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
  const native = {
    randomUUID
  };
  function v4(options, buf, offset) {
    if (native.randomUUID && !buf && !options) {
      return native.randomUUID();
    }
    options = options || {};
    const rnds = options.random || (options.rng || rng)();
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = rnds[i];
      }
      return buf;
    }
    return unsafeStringify(rnds);
  }
  function removeEmptyParams(params = {}) {
    return Object.fromEntries(
      Object.entries(params || {}).filter(([, value]) => value !== void 0)
    );
  }
  const apiUrl$1 = "https://app.privacy.com";
  class PrivacyApi {
    constructor(version2 = "1") {
      __publicField(this, "appVersion", "");
      __publicField(this, "apiVersion");
      __publicField(this, "baseURL");
      var _a;
      try {
        this.appVersion = ((_a = appExtensionApi.getManifest()) == null ? void 0 : _a.version) || this.appVersion;
      } catch (err) {
      }
      this.apiVersion = version2;
      this.baseURL = `${apiUrl$1}/api/v${version2}/extension`;
    }
    get(url, params, config2) {
      return this.request(url, "GET", config2, params);
    }
    post(url, data2, config2) {
      return this.request(url, "POST", config2, {}, data2);
    }
    patch(url, data2, config2) {
      return this.request(url, "PATCH", config2, {}, data2);
    }
    put(url, data2, config2) {
      return this.request(url, "PUT", config2, {}, data2);
    }
    delete(url, config2) {
      return this.request(url, "DELETE", config2, {});
    }
    // Wrap fetch to automatically include request headers
    // and to handle error responses
    async request(url, method, config2 = {}, params, body) {
      config2 = JSON.parse(JSON.stringify(config2));
      body = JSON.parse(JSON.stringify(body || {}));
      params = removeEmptyParams(params);
      await PrivacyApi.authTokenInterceptor(config2);
      await PrivacyApi.setSessionIdInterceptor(config2);
      PrivacyApi.setApiHeaders(config2);
      url = this.baseURL + url;
      return appExtensionApi.message.send({
        event: "sendApiRequest",
        payload: { url, method, params, body, config: config2 }
      }).then(PrivacyApi.responseInterceptor);
    }
    static async responseInterceptor(response) {
      var _a;
      if (response.ok) {
        return response;
      }
      const isLogin = (_a = response.url) == null ? void 0 : _a.endsWith("/auth/login");
      if (!isLogin && response.status === 401) {
        try {
          await appExtensionApi.storage.clear({ keepDeviceId: true });
        } catch (err) {
        } finally {
          window.location.assign(
            appExtensionApi.popup ? "/index.html" : "/interstitial.html"
          );
        }
        return response;
      }
      const errorData = response.data || { message: response.text };
      return Promise.reject(errorData);
    }
    static async authTokenInterceptor(config2) {
      try {
        const { token } = await appExtensionApi.storage.get("token");
        if (token) {
          config2.headers = {
            ...config2.headers,
            Authorization: `Bearer ${token}`
          };
        }
      } catch (err) {
      }
      return config2;
    }
    static async setSessionIdInterceptor(config2) {
      let sessionID;
      try {
        const { sessionID: session } = await appExtensionApi.storage.get(
          "sessionID"
        );
        sessionID = session;
      } catch (err) {
      }
      if (!sessionID) {
        sessionID = v4();
        try {
          await appExtensionApi.storage.set({ sessionID });
        } catch (err) {
        }
      }
      config2.headers = {
        ...config2.headers,
        sessionID
      };
      return config2;
    }
    static setApiHeaders(config2) {
      var _a;
      config2.headers = {
        "Content-Type": "application/json",
        "x-extension-id": "djEuMC4x",
        "x-extension-version": ((_a = appExtensionApi.getManifest()) == null ? void 0 : _a.version) || "",
        ...config2.headers
      };
      return config2;
    }
  }
  const v1Api = new PrivacyApi();
  const v2Api = new PrivacyApi("2");
  const AUTH_ROUTE = "/auth";
  const AUTH_ENDPOINTS = {
    login: `${AUTH_ROUTE}/login`,
    logout: `${AUTH_ROUTE}/logout`,
    tfaLogin: `${AUTH_ROUTE}/login/tfa`,
    sendVerifySms: `${AUTH_ROUTE}/send-verify-sms`,
    removeTFA: `${AUTH_ROUTE}/tfa/reset`,
    sendOneTimeCode: `${AUTH_ROUTE}/tfa/resend`,
    passwordReset: `${AUTH_ROUTE}/password-reset`,
    shortLivedAuthToken: `${AUTH_ROUTE}/token`
  };
  const login = async (user) => {
    const { deviceId } = await appExtensionApi.storage.get("deviceId");
    const config2 = {};
    if (deviceId) {
      config2.headers = { "x-tfa-deviceid": deviceId };
    }
    return await v2Api.post(AUTH_ENDPOINTS.login, user, config2);
  };
  const logout = () => {
    return v2Api.post(AUTH_ENDPOINTS.logout);
  };
  const tfaLogin = (data2) => {
    const { code, userToken, rememberDevice } = data2;
    return v2Api.post(AUTH_ENDPOINTS.tfaLogin, {
      token: code,
      userToken,
      rememberDevice
    });
  };
  const oneTimeCodeLogin = (data2) => {
    const { code, userToken, rememberDevice } = data2;
    return v2Api.post(AUTH_ENDPOINTS.tfaLogin, {
      code,
      userToken,
      rememberDevice
    });
  };
  const sendVerifySms = (data2) => {
    const { userToken } = data2;
    return v1Api.post(AUTH_ENDPOINTS.sendVerifySms, { userToken });
  };
  const removeTFA = (data2) => {
    return v2Api.post(AUTH_ENDPOINTS.removeTFA, data2);
  };
  const sendOneTimeCode = (data2) => {
    const { userToken } = data2;
    return v2Api.post(AUTH_ENDPOINTS.sendOneTimeCode, { userToken });
  };
  const sendPasswordResetEmail = (data2) => {
    const { email } = data2;
    return v1Api.post(AUTH_ENDPOINTS.passwordReset, { email });
  };
  const getShortLivedToken = () => {
    return v2Api.post(AUTH_ENDPOINTS.shortLivedAuthToken);
  };
  const V1_USER_ROUTE = "/user";
  const USER_ENDPOINTS = {
    me: `${V1_USER_ROUTE}/me`
  };
  const me = () => {
    return v1Api.get(USER_ENDPOINTS.me);
  };
  function debounce$1(func, timeout = 500) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }
  function isIPhone() {
    return navigator.userAgent.includes("iPhone");
  }
  function isFirefox() {
    return navigator.userAgent.includes("Firefox") && navigator.userAgent.includes("rv:");
  }
  const hasDataConsent = async () => {
    const dataConsent = await appExtensionApi.storage.get(CONSENT_KEY) || {};
    return !!dataConsent[CONSENT_KEY];
  };
  const setDataConsent = () => {
    return appExtensionApi.storage.set({
      [CONSENT_KEY]: true
    });
  };
  const hasActivityConsent = async () => {
    if (!isFirefox()) {
      return true;
    }
    const activityConsent = await appExtensionApi.storage.get(ACTIVITY_CONSENT_KEY) || {};
    return !!activityConsent[ACTIVITY_CONSENT_KEY];
  };
  const isActivityConsentSet = async () => {
    if (!isFirefox()) {
      return true;
    }
    const activityConsent = await appExtensionApi.storage.get(
      ACTIVITY_CONSENT_KEY
    );
    return activityConsent !== void 0;
  };
  const setActivityConsent = (value) => {
    return appExtensionApi.storage.set({
      [ACTIVITY_CONSENT_KEY]: value
    });
  };
  const EVENT_ROUTE = "/event";
  const EVENT_ENDPOINTS = {
    track: `${EVENT_ROUTE}/track`,
    log: `${EVENT_ROUTE}/log`,
    error: `${EVENT_ROUTE}/error`
  };
  const track = async (event) => {
    const activityConsent = await hasActivityConsent();
    if (!activityConsent) {
      return;
    }
    return v1Api.post(EVENT_ENDPOINTS.track, { event });
  };
  const log = (events) => {
    return recordLog(events, false);
  };
  const error = (events) => {
    return recordLog(events, true);
  };
  const recordLog = async (events, isError = false) => {
    const activityConsent = await hasActivityConsent();
    if (!activityConsent) {
      return;
    }
    const body = {
      events
    };
    if (isError) {
      return v1Api.post(EVENT_ENDPOINTS.error, body);
    } else {
      return v1Api.post(EVENT_ENDPOINTS.log, body);
    }
  };
  const resource$2 = "/cards";
  function list$4(params) {
    if ((params == null ? void 0 : params.month) instanceof Date) {
      const month = (params.month.getMonth() + 1).toString().padStart(2, "0");
      params.month = params.month.getFullYear() + "-" + month;
    }
    return v2Api.get(resource$2, params);
  }
  function create(data2) {
    return v2Api.post(resource$2, data2);
  }
  function get(cardUuid, params) {
    return v2Api.get(`${resource$2}/${cardUuid}`, params);
  }
  function update(cardUuid, data2) {
    return v2Api.patch(`${resource$2}/${cardUuid}`, data2);
  }
  function setState(cardUuid, data2) {
    return v2Api.patch(`${resource$2}/${cardUuid}/state`, data2);
  }
  function setNote(cardUuid, data2) {
    return v2Api.put(`${resource$2}/${cardUuid}/note`, data2);
  }
  const NOTIFICATION_ENDPOINTS = {
    notifications: `/notifications`
  };
  const list$3 = () => {
    return v2Api.get(NOTIFICATION_ENDPOINTS.notifications);
  };
  const resource$1 = "/funding";
  function list$2() {
    return v2Api.get(resource$1);
  }
  const resource = "/transactions";
  function list$1(params) {
    return v2Api.get(resource, params);
  }
  const METRIC_ROUTE = "/metric";
  const metric = () => {
    return v1Api.get(METRIC_ROUTE);
  };
  const useEventStore = defineStore("event", () => {
    async function track$12(event) {
      return track(event).catch(() => {
      });
    }
    async function log$1(data2) {
      return log(data2).catch(() => {
      });
    }
    async function error$1(data2) {
      return error(data2).catch(() => {
      });
    }
    function $reset() {
    }
    return { track: track$12, log: log$1, error: error$1, $reset };
  });
  var EXTENSION_EVENTS = /* @__PURE__ */ ((EXTENSION_EVENTS2) => {
    EXTENSION_EVENTS2["CONSENT_SHOWN"] = "Extension: Consent Shown";
    EXTENSION_EVENTS2["CONSENT_ACCEPTED"] = "Extension: Consent Accepted";
    EXTENSION_EVENTS2["CONSENT_DECLINED"] = "Extension: Consent Declined";
    EXTENSION_EVENTS2["CONSENT_DECLINE_CANCELLED"] = "Extension: Consent Decline Cancelled";
    EXTENSION_EVENTS2["OPENED"] = "Extension: Opened";
    EXTENSION_EVENTS2["DISMISSED"] = "Extension: Dismissed";
    EXTENSION_EVENTS2["SIGN_UP"] = "Extension: Sign Up";
    EXTENSION_EVENTS2["ACCOUNT_REDIRECT"] = "Extension: Account Redirect";
    EXTENSION_EVENTS2["CHECKOUT"] = "Extension: Checkout";
    EXTENSION_EVENTS2["DETECTED_CHECKOUT_FORM"] = "Extension: Detected Checkout Form";
    EXTENSION_EVENTS2["FILL_CHECKOUT"] = "Extension: Fill Checkout";
    EXTENSION_EVENTS2["FILL_CHECKOUT_NO_FORM"] = "Extension: Fill Checkout No Form Detected";
    EXTENSION_EVENTS2["FILL_CHECKOUT_INPUT_FORMAT"] = "Extension: Unable to Determine Input Field Format";
    return EXTENSION_EVENTS2;
  })(EXTENSION_EVENTS || {});
  var USER_EVENTS = /* @__PURE__ */ ((USER_EVENTS2) => {
    USER_EVENTS2["LOGOUT"] = "Extension: User Logout";
    return USER_EVENTS2;
  })(USER_EVENTS || {});
  var CARD_EVENTS = /* @__PURE__ */ ((CARD_EVENTS2) => {
    CARD_EVENTS2["CLOSED"] = "Extension: Card Closed";
    CARD_EVENTS2["CREATED"] = "Extension: Card Created";
    CARD_EVENTS2["CREATED_BLOCKED"] = "Extension: Card Create Blocked";
    CARD_EVENTS2["PAUSED"] = "Extension: Card Paused";
    CARD_EVENTS2["RESUMED"] = "Extension: Card Resumed";
    CARD_EVENTS2["PAN_COPIED"] = "Extension: Card PAN Copied";
    CARD_EVENTS2["EXP_COPIED"] = "Extension: Card EXP Copied";
    CARD_EVENTS2["CVV_COPIED"] = "Extension: Card CVV Copied";
    CARD_EVENTS2["SET_FUNDING_SOURCE"] = "Extension: Card Set Funding Source";
    CARD_EVENTS2["SET_NICKNAME"] = "Extension: Card Set Nickname";
    CARD_EVENTS2["SET_NOTE"] = "Extension: Card Set Note";
    CARD_EVENTS2["SET_SPEND_LIMIT"] = "Extension: Card Set Spend Limit";
    CARD_EVENTS2["SHARED"] = "Extension: Card Shared";
    CARD_EVENTS2["VIEWED"] = "Extension: Card Viewed";
    return CARD_EVENTS2;
  })(CARD_EVENTS || {});
  var ERROR_EVENTS = /* @__PURE__ */ ((ERROR_EVENTS2) => {
    ERROR_EVENTS2["UNHANDLED"] = "Extension: Unhandled Error";
    return ERROR_EVENTS2;
  })(ERROR_EVENTS || {});
  var NOTIFICATION_EVENTS = /* @__PURE__ */ ((NOTIFICATION_EVENTS2) => {
    NOTIFICATION_EVENTS2["REQUESTED"] = "Extension: Notifications Requested";
    return NOTIFICATION_EVENTS2;
  })(NOTIFICATION_EVENTS || {});
  var SUBSCRIPTION_EVENTS = /* @__PURE__ */ ((SUBSCRIPTION_EVENTS2) => {
    SUBSCRIPTION_EVENTS2["UPGRADE_CLICKED"] = "Extension: Subscription Upgrade Clicked";
    return SUBSCRIPTION_EVENTS2;
  })(SUBSCRIPTION_EVENTS || {});
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var toastifyExports = {};
  var toastify = {
    get exports() {
      return toastifyExports;
    },
    set exports(v) {
      toastifyExports = v;
    }
  };
  /*!
   * Toastify js 1.12.0
   * https://github.com/apvarun/toastify-js
   * @license MIT licensed
   *
   * Copyright (C) 2018 Varun A P
   */
  (function(module) {
    (function(root, factory) {
      if (module.exports) {
        module.exports = factory();
      } else {
        root.Toastify = factory();
      }
    })(commonjsGlobal, function(global2) {
      var Toastify2 = function(options) {
        return new Toastify2.lib.init(options);
      }, version2 = "1.12.0";
      Toastify2.defaults = {
        oldestFirst: true,
        text: "Toastify is awesome!",
        node: void 0,
        duration: 3e3,
        selector: void 0,
        callback: function() {
        },
        destination: void 0,
        newWindow: false,
        close: false,
        gravity: "toastify-top",
        positionLeft: false,
        position: "",
        backgroundColor: "",
        avatar: "",
        className: "",
        stopOnFocus: true,
        onClick: function() {
        },
        offset: { x: 0, y: 0 },
        escapeMarkup: true,
        ariaLive: "polite",
        style: { background: "" }
      };
      Toastify2.lib = Toastify2.prototype = {
        toastify: version2,
        constructor: Toastify2,
        // Initializing the object with required parameters
        init: function(options) {
          if (!options) {
            options = {};
          }
          this.options = {};
          this.toastElement = null;
          this.options.text = options.text || Toastify2.defaults.text;
          this.options.node = options.node || Toastify2.defaults.node;
          this.options.duration = options.duration === 0 ? 0 : options.duration || Toastify2.defaults.duration;
          this.options.selector = options.selector || Toastify2.defaults.selector;
          this.options.callback = options.callback || Toastify2.defaults.callback;
          this.options.destination = options.destination || Toastify2.defaults.destination;
          this.options.newWindow = options.newWindow || Toastify2.defaults.newWindow;
          this.options.close = options.close || Toastify2.defaults.close;
          this.options.gravity = options.gravity === "bottom" ? "toastify-bottom" : Toastify2.defaults.gravity;
          this.options.positionLeft = options.positionLeft || Toastify2.defaults.positionLeft;
          this.options.position = options.position || Toastify2.defaults.position;
          this.options.backgroundColor = options.backgroundColor || Toastify2.defaults.backgroundColor;
          this.options.avatar = options.avatar || Toastify2.defaults.avatar;
          this.options.className = options.className || Toastify2.defaults.className;
          this.options.stopOnFocus = options.stopOnFocus === void 0 ? Toastify2.defaults.stopOnFocus : options.stopOnFocus;
          this.options.onClick = options.onClick || Toastify2.defaults.onClick;
          this.options.offset = options.offset || Toastify2.defaults.offset;
          this.options.escapeMarkup = options.escapeMarkup !== void 0 ? options.escapeMarkup : Toastify2.defaults.escapeMarkup;
          this.options.ariaLive = options.ariaLive || Toastify2.defaults.ariaLive;
          this.options.style = options.style || Toastify2.defaults.style;
          if (options.backgroundColor) {
            this.options.style.background = options.backgroundColor;
          }
          return this;
        },
        // Building the DOM element
        buildToast: function() {
          if (!this.options) {
            throw "Toastify is not initialized";
          }
          var divElement = document.createElement("div");
          divElement.className = "toastify on " + this.options.className;
          if (!!this.options.position) {
            divElement.className += " toastify-" + this.options.position;
          } else {
            if (this.options.positionLeft === true) {
              divElement.className += " toastify-left";
              console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.");
            } else {
              divElement.className += " toastify-right";
            }
          }
          divElement.className += " " + this.options.gravity;
          if (this.options.backgroundColor) {
            console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');
          }
          for (var property in this.options.style) {
            divElement.style[property] = this.options.style[property];
          }
          if (this.options.ariaLive) {
            divElement.setAttribute("aria-live", this.options.ariaLive);
          }
          if (this.options.node && this.options.node.nodeType === Node.ELEMENT_NODE) {
            divElement.appendChild(this.options.node);
          } else {
            if (this.options.escapeMarkup) {
              divElement.innerText = this.options.text;
            } else {
              divElement.innerHTML = this.options.text;
            }
            if (this.options.avatar !== "") {
              var avatarElement = document.createElement("img");
              avatarElement.src = this.options.avatar;
              avatarElement.className = "toastify-avatar";
              if (this.options.position == "left" || this.options.positionLeft === true) {
                divElement.appendChild(avatarElement);
              } else {
                divElement.insertAdjacentElement("afterbegin", avatarElement);
              }
            }
          }
          if (this.options.close === true) {
            var closeElement = document.createElement("button");
            closeElement.type = "button";
            closeElement.setAttribute("aria-label", "Close");
            closeElement.className = "toast-close";
            closeElement.innerHTML = "&#10006;";
            closeElement.addEventListener(
              "click",
              function(event) {
                event.stopPropagation();
                this.removeElement(this.toastElement);
                window.clearTimeout(this.toastElement.timeOutValue);
              }.bind(this)
            );
            var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
            if ((this.options.position == "left" || this.options.positionLeft === true) && width > 360) {
              divElement.insertAdjacentElement("afterbegin", closeElement);
            } else {
              divElement.appendChild(closeElement);
            }
          }
          if (this.options.stopOnFocus && this.options.duration > 0) {
            var self2 = this;
            divElement.addEventListener(
              "mouseover",
              function(event) {
                window.clearTimeout(divElement.timeOutValue);
              }
            );
            divElement.addEventListener(
              "mouseleave",
              function() {
                divElement.timeOutValue = window.setTimeout(
                  function() {
                    self2.removeElement(divElement);
                  },
                  self2.options.duration
                );
              }
            );
          }
          if (typeof this.options.destination !== "undefined") {
            divElement.addEventListener(
              "click",
              function(event) {
                event.stopPropagation();
                if (this.options.newWindow === true) {
                  window.open(this.options.destination, "_blank");
                } else {
                  window.location = this.options.destination;
                }
              }.bind(this)
            );
          }
          if (typeof this.options.onClick === "function" && typeof this.options.destination === "undefined") {
            divElement.addEventListener(
              "click",
              function(event) {
                event.stopPropagation();
                this.options.onClick();
              }.bind(this)
            );
          }
          if (typeof this.options.offset === "object") {
            var x = getAxisOffsetAValue("x", this.options);
            var y = getAxisOffsetAValue("y", this.options);
            var xOffset = this.options.position == "left" ? x : "-" + x;
            var yOffset = this.options.gravity == "toastify-top" ? y : "-" + y;
            divElement.style.transform = "translate(" + xOffset + "," + yOffset + ")";
          }
          return divElement;
        },
        // Displaying the toast
        showToast: function() {
          this.toastElement = this.buildToast();
          var rootElement;
          if (typeof this.options.selector === "string") {
            rootElement = document.getElementById(this.options.selector);
          } else if (this.options.selector instanceof HTMLElement || typeof ShadowRoot !== "undefined" && this.options.selector instanceof ShadowRoot) {
            rootElement = this.options.selector;
          } else {
            rootElement = document.body;
          }
          if (!rootElement) {
            throw "Root element is not defined";
          }
          var elementToInsert = Toastify2.defaults.oldestFirst ? rootElement.firstChild : rootElement.lastChild;
          rootElement.insertBefore(this.toastElement, elementToInsert);
          Toastify2.reposition();
          if (this.options.duration > 0) {
            this.toastElement.timeOutValue = window.setTimeout(
              function() {
                this.removeElement(this.toastElement);
              }.bind(this),
              this.options.duration
            );
          }
          return this;
        },
        hideToast: function() {
          if (this.toastElement.timeOutValue) {
            clearTimeout(this.toastElement.timeOutValue);
          }
          this.removeElement(this.toastElement);
        },
        // Removing the element from the DOM
        removeElement: function(toastElement) {
          toastElement.className = toastElement.className.replace(" on", "");
          window.setTimeout(
            function() {
              if (this.options.node && this.options.node.parentNode) {
                this.options.node.parentNode.removeChild(this.options.node);
              }
              if (toastElement.parentNode) {
                toastElement.parentNode.removeChild(toastElement);
              }
              this.options.callback.call(toastElement);
              Toastify2.reposition();
            }.bind(this),
            400
          );
        }
      };
      Toastify2.reposition = function() {
        var topLeftOffsetSize = {
          top: 15,
          bottom: 15
        };
        var topRightOffsetSize = {
          top: 15,
          bottom: 15
        };
        var offsetSize = {
          top: 15,
          bottom: 15
        };
        var allToasts = document.getElementsByClassName("toastify");
        var classUsed;
        for (var i = 0; i < allToasts.length; i++) {
          if (containsClass(allToasts[i], "toastify-top") === true) {
            classUsed = "toastify-top";
          } else {
            classUsed = "toastify-bottom";
          }
          var height = allToasts[i].offsetHeight;
          classUsed = classUsed.substr(9, classUsed.length - 1);
          var offset = 15;
          var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
          if (width <= 360) {
            allToasts[i].style[classUsed] = offsetSize[classUsed] + "px";
            offsetSize[classUsed] += height + offset;
          } else {
            if (containsClass(allToasts[i], "toastify-left") === true) {
              allToasts[i].style[classUsed] = topLeftOffsetSize[classUsed] + "px";
              topLeftOffsetSize[classUsed] += height + offset;
            } else {
              allToasts[i].style[classUsed] = topRightOffsetSize[classUsed] + "px";
              topRightOffsetSize[classUsed] += height + offset;
            }
          }
        }
        return this;
      };
      function getAxisOffsetAValue(axis, options) {
        if (options.offset[axis]) {
          if (isNaN(options.offset[axis])) {
            return options.offset[axis];
          } else {
            return options.offset[axis] + "px";
          }
        }
        return "0px";
      }
      function containsClass(elem, yourClass) {
        if (!elem || typeof yourClass !== "string") {
          return false;
        } else if (elem.className && elem.className.trim().split(/\s+/gi).indexOf(yourClass) > -1) {
          return true;
        } else {
          return false;
        }
      }
      Toastify2.lib.init.prototype = Toastify2.lib;
      return Toastify2;
    });
  })(toastify);
  const Toastify = toastifyExports;
  function popupAlert(message, variant = "danger", options = {
    gravity: "bottom",
    style: {}
  }) {
    const toast = Toastify({
      text: message,
      className: `alert alert-${variant}`,
      duration: 1500,
      onClick: () => toast.hideToast(),
      gravity: options.gravity,
      style: options.style,
      position: "center"
    }).showToast();
  }
  const setTheme = async (theme2) => {
    renderTheme(theme2);
    await appExtensionApi.storage.set({ theme: theme2 });
  };
  const getTheme = async () => {
    return (await appExtensionApi.storage.get("theme")).theme || "auto";
  };
  const init = () => {
    getTheme().then(renderTheme);
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => getTheme().then(renderTheme));
  };
  const renderTheme = (theme2) => {
    if ({}.STORYBOOK === "true") {
      return;
    }
    if (theme2 === "auto") {
      const osTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      document.documentElement.setAttribute("data-bs-theme", osTheme);
    } else {
      document.documentElement.setAttribute("data-bs-theme", theme2);
    }
  };
  init();
  /*!
    * vue-router v4.2.5
    * (c) 2023 Eduardo San Martin Morote
    * @license MIT
    */
  const isBrowser = typeof window !== "undefined";
  function isESModule(obj) {
    return obj.__esModule || obj[Symbol.toStringTag] === "Module";
  }
  const assign = Object.assign;
  function applyToParams(fn, params) {
    const newParams = {};
    for (const key in params) {
      const value = params[key];
      newParams[key] = isArray(value) ? value.map(fn) : fn(value);
    }
    return newParams;
  }
  const noop = () => {
  };
  const isArray = Array.isArray;
  const TRAILING_SLASH_RE = /\/$/;
  const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
  function parseURL(parseQuery2, location, currentLocation = "/") {
    let path, query = {}, searchString = "", hash2 = "";
    const hashPos = location.indexOf("#");
    let searchPos = location.indexOf("?");
    if (hashPos < searchPos && hashPos >= 0) {
      searchPos = -1;
    }
    if (searchPos > -1) {
      path = location.slice(0, searchPos);
      searchString = location.slice(searchPos + 1, hashPos > -1 ? hashPos : location.length);
      query = parseQuery2(searchString);
    }
    if (hashPos > -1) {
      path = path || location.slice(0, hashPos);
      hash2 = location.slice(hashPos, location.length);
    }
    path = resolveRelativePath(path != null ? path : location, currentLocation);
    return {
      fullPath: path + (searchString && "?") + searchString + hash2,
      path,
      query,
      hash: hash2
    };
  }
  function stringifyURL(stringifyQuery2, location) {
    const query = location.query ? stringifyQuery2(location.query) : "";
    return location.path + (query && "?") + query + (location.hash || "");
  }
  function isSameRouteLocation(stringifyQuery2, a, b) {
    const aLastIndex = a.matched.length - 1;
    const bLastIndex = b.matched.length - 1;
    return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery2(a.query) === stringifyQuery2(b.query) && a.hash === b.hash;
  }
  function isSameRouteRecord(a, b) {
    return (a.aliasOf || a) === (b.aliasOf || b);
  }
  function isSameRouteLocationParams(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length)
      return false;
    for (const key in a) {
      if (!isSameRouteLocationParamsValue(a[key], b[key]))
        return false;
    }
    return true;
  }
  function isSameRouteLocationParamsValue(a, b) {
    return isArray(a) ? isEquivalentArray(a, b) : isArray(b) ? isEquivalentArray(b, a) : a === b;
  }
  function isEquivalentArray(a, b) {
    return isArray(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
  }
  function resolveRelativePath(to, from) {
    if (to.startsWith("/"))
      return to;
    if (!to)
      return from;
    const fromSegments = from.split("/");
    const toSegments = to.split("/");
    const lastToSegment = toSegments[toSegments.length - 1];
    if (lastToSegment === ".." || lastToSegment === ".") {
      toSegments.push("");
    }
    let position = fromSegments.length - 1;
    let toPosition;
    let segment;
    for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
      segment = toSegments[toPosition];
      if (segment === ".")
        continue;
      if (segment === "..") {
        if (position > 1)
          position--;
      } else
        break;
    }
    return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
  }
  var NavigationType;
  (function(NavigationType2) {
    NavigationType2["pop"] = "pop";
    NavigationType2["push"] = "push";
  })(NavigationType || (NavigationType = {}));
  var NavigationDirection;
  (function(NavigationDirection2) {
    NavigationDirection2["back"] = "back";
    NavigationDirection2["forward"] = "forward";
    NavigationDirection2["unknown"] = "";
  })(NavigationDirection || (NavigationDirection = {}));
  const START = "";
  function normalizeBase(base) {
    if (!base) {
      if (isBrowser) {
        const baseEl = document.querySelector("base");
        base = baseEl && baseEl.getAttribute("href") || "/";
        base = base.replace(/^\w+:\/\/[^\/]+/, "");
      } else {
        base = "/";
      }
    }
    if (base[0] !== "/" && base[0] !== "#")
      base = "/" + base;
    return removeTrailingSlash(base);
  }
  const BEFORE_HASH_RE = /^[^#]+#/;
  function createHref(base, location) {
    return base.replace(BEFORE_HASH_RE, "#") + location;
  }
  function getElementPosition(el, offset) {
    const docRect = document.documentElement.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    return {
      behavior: offset.behavior,
      left: elRect.left - docRect.left - (offset.left || 0),
      top: elRect.top - docRect.top - (offset.top || 0)
    };
  }
  const computeScrollPosition = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
  });
  function scrollToPosition(position) {
    let scrollToOptions;
    if ("el" in position) {
      const positionEl = position.el;
      const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
      const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
      if (!el) {
        return;
      }
      scrollToOptions = getElementPosition(el, position);
    } else {
      scrollToOptions = position;
    }
    if ("scrollBehavior" in document.documentElement.style)
      window.scrollTo(scrollToOptions);
    else {
      window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
    }
  }
  function getScrollKey(path, delta) {
    const position = history.state ? history.state.position - delta : -1;
    return position + path;
  }
  const scrollPositions = /* @__PURE__ */ new Map();
  function saveScrollPosition(key, scrollPosition) {
    scrollPositions.set(key, scrollPosition);
  }
  function getSavedScrollPosition(key) {
    const scroll = scrollPositions.get(key);
    scrollPositions.delete(key);
    return scroll;
  }
  function createMemoryHistory(base = "") {
    let listeners = [];
    let queue2 = [START];
    let position = 0;
    base = normalizeBase(base);
    function setLocation(location) {
      position++;
      if (position !== queue2.length) {
        queue2.splice(position);
      }
      queue2.push(location);
    }
    function triggerListeners(to, from, { direction, delta }) {
      const info = {
        direction,
        delta,
        type: NavigationType.pop
      };
      for (const callback of listeners) {
        callback(to, from, info);
      }
    }
    const routerHistory = {
      // rewritten by Object.defineProperty
      location: START,
      // TODO: should be kept in queue
      state: {},
      base,
      createHref: createHref.bind(null, base),
      replace(to) {
        queue2.splice(position--, 1);
        setLocation(to);
      },
      push(to, data2) {
        setLocation(to);
      },
      listen(callback) {
        listeners.push(callback);
        return () => {
          const index = listeners.indexOf(callback);
          if (index > -1)
            listeners.splice(index, 1);
        };
      },
      destroy() {
        listeners = [];
        queue2 = [START];
        position = 0;
      },
      go(delta, shouldTrigger = true) {
        const from = this.location;
        const direction = (
          // we are considering delta === 0 going forward, but in abstract mode
          // using 0 for the delta doesn't make sense like it does in html5 where
          // it reloads the page
          delta < 0 ? NavigationDirection.back : NavigationDirection.forward
        );
        position = Math.max(0, Math.min(position + delta, queue2.length - 1));
        if (shouldTrigger) {
          triggerListeners(this.location, from, {
            direction,
            delta
          });
        }
      }
    };
    Object.defineProperty(routerHistory, "location", {
      enumerable: true,
      get: () => queue2[position]
    });
    return routerHistory;
  }
  function isRouteLocation(route) {
    return typeof route === "string" || route && typeof route === "object";
  }
  function isRouteName(name) {
    return typeof name === "string" || typeof name === "symbol";
  }
  const START_LOCATION_NORMALIZED = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  };
  const NavigationFailureSymbol = Symbol("");
  var NavigationFailureType;
  (function(NavigationFailureType2) {
    NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
    NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
    NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
  })(NavigationFailureType || (NavigationFailureType = {}));
  function createRouterError(type, params) {
    {
      return assign(new Error(), {
        type,
        [NavigationFailureSymbol]: true
      }, params);
    }
  }
  function isNavigationFailure(error2, type) {
    return error2 instanceof Error && NavigationFailureSymbol in error2 && (type == null || !!(error2.type & type));
  }
  const BASE_PARAM_PATTERN = "[^/]+?";
  const BASE_PATH_PARSER_OPTIONS = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  };
  const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
  function tokensToParser(segments, extraOptions) {
    const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
    const score = [];
    let pattern = options.start ? "^" : "";
    const keys = [];
    for (const segment of segments) {
      const segmentScores = segment.length ? [] : [
        90
        /* PathScore.Root */
      ];
      if (options.strict && !segment.length)
        pattern += "/";
      for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
        const token = segment[tokenIndex];
        let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
        if (token.type === 0) {
          if (!tokenIndex)
            pattern += "/";
          pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
          subSegmentScore += 40;
        } else if (token.type === 1) {
          const { value, repeatable, optional, regexp } = token;
          keys.push({
            name: value,
            repeatable,
            optional
          });
          const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
          if (re2 !== BASE_PARAM_PATTERN) {
            subSegmentScore += 10;
            try {
              new RegExp(`(${re2})`);
            } catch (err) {
              throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
            }
          }
          let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
          if (!tokenIndex)
            subPattern = // avoid an optional / if there are more segments e.g. /:p?-static
            // or /:p?-:p2
            optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
          if (optional)
            subPattern += "?";
          pattern += subPattern;
          subSegmentScore += 20;
          if (optional)
            subSegmentScore += -8;
          if (repeatable)
            subSegmentScore += -20;
          if (re2 === ".*")
            subSegmentScore += -50;
        }
        segmentScores.push(subSegmentScore);
      }
      score.push(segmentScores);
    }
    if (options.strict && options.end) {
      const i = score.length - 1;
      score[i][score[i].length - 1] += 0.7000000000000001;
    }
    if (!options.strict)
      pattern += "/?";
    if (options.end)
      pattern += "$";
    else if (options.strict)
      pattern += "(?:/|$)";
    const re = new RegExp(pattern, options.sensitive ? "" : "i");
    function parse(path) {
      const match = path.match(re);
      const params = {};
      if (!match)
        return null;
      for (let i = 1; i < match.length; i++) {
        const value = match[i] || "";
        const key = keys[i - 1];
        params[key.name] = value && key.repeatable ? value.split("/") : value;
      }
      return params;
    }
    function stringify(params) {
      let path = "";
      let avoidDuplicatedSlash = false;
      for (const segment of segments) {
        if (!avoidDuplicatedSlash || !path.endsWith("/"))
          path += "/";
        avoidDuplicatedSlash = false;
        for (const token of segment) {
          if (token.type === 0) {
            path += token.value;
          } else if (token.type === 1) {
            const { value, repeatable, optional } = token;
            const param = value in params ? params[value] : "";
            if (isArray(param) && !repeatable) {
              throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
            }
            const text = isArray(param) ? param.join("/") : param;
            if (!text) {
              if (optional) {
                if (segment.length < 2) {
                  if (path.endsWith("/"))
                    path = path.slice(0, -1);
                  else
                    avoidDuplicatedSlash = true;
                }
              } else
                throw new Error(`Missing required param "${value}"`);
            }
            path += text;
          }
        }
      }
      return path || "/";
    }
    return {
      re,
      score,
      keys,
      parse,
      stringify
    };
  }
  function compareScoreArray(a, b) {
    let i = 0;
    while (i < a.length && i < b.length) {
      const diff = b[i] - a[i];
      if (diff)
        return diff;
      i++;
    }
    if (a.length < b.length) {
      return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
    } else if (a.length > b.length) {
      return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
    }
    return 0;
  }
  function comparePathParserScore(a, b) {
    let i = 0;
    const aScore = a.score;
    const bScore = b.score;
    while (i < aScore.length && i < bScore.length) {
      const comp = compareScoreArray(aScore[i], bScore[i]);
      if (comp)
        return comp;
      i++;
    }
    if (Math.abs(bScore.length - aScore.length) === 1) {
      if (isLastScoreNegative(aScore))
        return 1;
      if (isLastScoreNegative(bScore))
        return -1;
    }
    return bScore.length - aScore.length;
  }
  function isLastScoreNegative(score) {
    const last = score[score.length - 1];
    return score.length > 0 && last[last.length - 1] < 0;
  }
  const ROOT_TOKEN = {
    type: 0,
    value: ""
  };
  const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
  function tokenizePath(path) {
    if (!path)
      return [[]];
    if (path === "/")
      return [[ROOT_TOKEN]];
    if (!path.startsWith("/")) {
      throw new Error(`Invalid path "${path}"`);
    }
    function crash(message) {
      throw new Error(`ERR (${state})/"${buffer}": ${message}`);
    }
    let state = 0;
    let previousState = state;
    const tokens = [];
    let segment;
    function finalizeSegment() {
      if (segment)
        tokens.push(segment);
      segment = [];
    }
    let i = 0;
    let char;
    let buffer = "";
    let customRe = "";
    function consumeBuffer() {
      if (!buffer)
        return;
      if (state === 0) {
        segment.push({
          type: 0,
          value: buffer
        });
      } else if (state === 1 || state === 2 || state === 3) {
        if (segment.length > 1 && (char === "*" || char === "+"))
          crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
        segment.push({
          type: 1,
          value: buffer,
          regexp: customRe,
          repeatable: char === "*" || char === "+",
          optional: char === "*" || char === "?"
        });
      } else {
        crash("Invalid state to consume buffer");
      }
      buffer = "";
    }
    function addCharToBuffer() {
      buffer += char;
    }
    while (i < path.length) {
      char = path[i++];
      if (char === "\\" && state !== 2) {
        previousState = state;
        state = 4;
        continue;
      }
      switch (state) {
        case 0:
          if (char === "/") {
            if (buffer) {
              consumeBuffer();
            }
            finalizeSegment();
          } else if (char === ":") {
            consumeBuffer();
            state = 1;
          } else {
            addCharToBuffer();
          }
          break;
        case 4:
          addCharToBuffer();
          state = previousState;
          break;
        case 1:
          if (char === "(") {
            state = 2;
          } else if (VALID_PARAM_RE.test(char)) {
            addCharToBuffer();
          } else {
            consumeBuffer();
            state = 0;
            if (char !== "*" && char !== "?" && char !== "+")
              i--;
          }
          break;
        case 2:
          if (char === ")") {
            if (customRe[customRe.length - 1] == "\\")
              customRe = customRe.slice(0, -1) + char;
            else
              state = 3;
          } else {
            customRe += char;
          }
          break;
        case 3:
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i--;
          customRe = "";
          break;
        default:
          crash("Unknown state");
          break;
      }
    }
    if (state === 2)
      crash(`Unfinished custom RegExp for param "${buffer}"`);
    consumeBuffer();
    finalizeSegment();
    return tokens;
  }
  function createRouteRecordMatcher(record, parent, options) {
    const parser = tokensToParser(tokenizePath(record.path), options);
    const matcher = assign(parser, {
      record,
      parent,
      // these needs to be populated by the parent
      children: [],
      alias: []
    });
    if (parent) {
      if (!matcher.record.aliasOf === !parent.record.aliasOf)
        parent.children.push(matcher);
    }
    return matcher;
  }
  function createRouterMatcher(routes2, globalOptions) {
    const matchers = [];
    const matcherMap = /* @__PURE__ */ new Map();
    globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
    function getRecordMatcher(name) {
      return matcherMap.get(name);
    }
    function addRoute(record, parent, originalRecord) {
      const isRootAdd = !originalRecord;
      const mainNormalizedRecord = normalizeRouteRecord(record);
      mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
      const options = mergeOptions(globalOptions, record);
      const normalizedRecords = [
        mainNormalizedRecord
      ];
      if ("alias" in record) {
        const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
        for (const alias of aliases) {
          normalizedRecords.push(assign({}, mainNormalizedRecord, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
            path: alias,
            // we might be the child of an alias
            aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
            // the aliases are always of the same kind as the original since they
            // are defined on the same record
          }));
        }
      }
      let matcher;
      let originalMatcher;
      for (const normalizedRecord of normalizedRecords) {
        const { path } = normalizedRecord;
        if (parent && path[0] !== "/") {
          const parentPath = parent.record.path;
          const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
          normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
        }
        matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
        if (originalRecord) {
          originalRecord.alias.push(matcher);
        } else {
          originalMatcher = originalMatcher || matcher;
          if (originalMatcher !== matcher)
            originalMatcher.alias.push(matcher);
          if (isRootAdd && record.name && !isAliasRecord(matcher))
            removeRoute(record.name);
        }
        if (mainNormalizedRecord.children) {
          const children = mainNormalizedRecord.children;
          for (let i = 0; i < children.length; i++) {
            addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
          }
        }
        originalRecord = originalRecord || matcher;
        if (matcher.record.components && Object.keys(matcher.record.components).length || matcher.record.name || matcher.record.redirect) {
          insertMatcher(matcher);
        }
      }
      return originalMatcher ? () => {
        removeRoute(originalMatcher);
      } : noop;
    }
    function removeRoute(matcherRef) {
      if (isRouteName(matcherRef)) {
        const matcher = matcherMap.get(matcherRef);
        if (matcher) {
          matcherMap.delete(matcherRef);
          matchers.splice(matchers.indexOf(matcher), 1);
          matcher.children.forEach(removeRoute);
          matcher.alias.forEach(removeRoute);
        }
      } else {
        const index = matchers.indexOf(matcherRef);
        if (index > -1) {
          matchers.splice(index, 1);
          if (matcherRef.record.name)
            matcherMap.delete(matcherRef.record.name);
          matcherRef.children.forEach(removeRoute);
          matcherRef.alias.forEach(removeRoute);
        }
      }
    }
    function getRoutes() {
      return matchers;
    }
    function insertMatcher(matcher) {
      let i = 0;
      while (i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0 && // Adding children with empty path should still appear before the parent
      // https://github.com/vuejs/router/issues/1124
      (matcher.record.path !== matchers[i].record.path || !isRecordChildOf(matcher, matchers[i])))
        i++;
      matchers.splice(i, 0, matcher);
      if (matcher.record.name && !isAliasRecord(matcher))
        matcherMap.set(matcher.record.name, matcher);
    }
    function resolve2(location, currentLocation) {
      let matcher;
      let params = {};
      let path;
      let name;
      if ("name" in location && location.name) {
        matcher = matcherMap.get(location.name);
        if (!matcher)
          throw createRouterError(1, {
            location
          });
        name = matcher.record.name;
        params = assign(
          // paramsFromLocation is a new object
          paramsFromLocation(
            currentLocation.params,
            // only keep params that exist in the resolved location
            // TODO: only keep optional params coming from a parent record
            matcher.keys.filter((k) => !k.optional).map((k) => k.name)
          ),
          // discard any existing params in the current location that do not exist here
          // #1497 this ensures better active/exact matching
          location.params && paramsFromLocation(location.params, matcher.keys.map((k) => k.name))
        );
        path = matcher.stringify(params);
      } else if ("path" in location) {
        path = location.path;
        matcher = matchers.find((m) => m.re.test(path));
        if (matcher) {
          params = matcher.parse(path);
          name = matcher.record.name;
        }
      } else {
        matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
        if (!matcher)
          throw createRouterError(1, {
            location,
            currentLocation
          });
        name = matcher.record.name;
        params = assign({}, currentLocation.params, location.params);
        path = matcher.stringify(params);
      }
      const matched = [];
      let parentMatcher = matcher;
      while (parentMatcher) {
        matched.unshift(parentMatcher.record);
        parentMatcher = parentMatcher.parent;
      }
      return {
        name,
        path,
        params,
        matched,
        meta: mergeMetaFields(matched)
      };
    }
    routes2.forEach((route) => addRoute(route));
    return { addRoute, resolve: resolve2, removeRoute, getRoutes, getRecordMatcher };
  }
  function paramsFromLocation(params, keys) {
    const newParams = {};
    for (const key of keys) {
      if (key in params)
        newParams[key] = params[key];
    }
    return newParams;
  }
  function normalizeRouteRecord(record) {
    return {
      path: record.path,
      redirect: record.redirect,
      name: record.name,
      meta: record.meta || {},
      aliasOf: void 0,
      beforeEnter: record.beforeEnter,
      props: normalizeRecordProps(record),
      children: record.children || [],
      instances: {},
      leaveGuards: /* @__PURE__ */ new Set(),
      updateGuards: /* @__PURE__ */ new Set(),
      enterCallbacks: {},
      components: "components" in record ? record.components || null : record.component && { default: record.component }
    };
  }
  function normalizeRecordProps(record) {
    const propsObject = {};
    const props = record.props || false;
    if ("component" in record) {
      propsObject.default = props;
    } else {
      for (const name in record.components)
        propsObject[name] = typeof props === "object" ? props[name] : props;
    }
    return propsObject;
  }
  function isAliasRecord(record) {
    while (record) {
      if (record.record.aliasOf)
        return true;
      record = record.parent;
    }
    return false;
  }
  function mergeMetaFields(matched) {
    return matched.reduce((meta, record) => assign(meta, record.meta), {});
  }
  function mergeOptions(defaults, partialOptions) {
    const options = {};
    for (const key in defaults) {
      options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
    }
    return options;
  }
  function isRecordChildOf(record, parent) {
    return parent.children.some((child) => child === record || isRecordChildOf(record, child));
  }
  const HASH_RE = /#/g;
  const AMPERSAND_RE = /&/g;
  const SLASH_RE = /\//g;
  const EQUAL_RE = /=/g;
  const IM_RE = /\?/g;
  const PLUS_RE = /\+/g;
  const ENC_BRACKET_OPEN_RE = /%5B/g;
  const ENC_BRACKET_CLOSE_RE = /%5D/g;
  const ENC_CARET_RE = /%5E/g;
  const ENC_BACKTICK_RE = /%60/g;
  const ENC_CURLY_OPEN_RE = /%7B/g;
  const ENC_PIPE_RE = /%7C/g;
  const ENC_CURLY_CLOSE_RE = /%7D/g;
  const ENC_SPACE_RE = /%20/g;
  function commonEncode(text) {
    return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
  }
  function encodeHash(text) {
    return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
  }
  function encodeQueryValue(text) {
    return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
  }
  function encodeQueryKey(text) {
    return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
  }
  function encodePath(text) {
    return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
  }
  function encodeParam(text) {
    return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
  }
  function decode(text) {
    try {
      return decodeURIComponent("" + text);
    } catch (err) {
    }
    return "" + text;
  }
  function parseQuery(search) {
    const query = {};
    if (search === "" || search === "?")
      return query;
    const hasLeadingIM = search[0] === "?";
    const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
    for (let i = 0; i < searchParams.length; ++i) {
      const searchParam = searchParams[i].replace(PLUS_RE, " ");
      const eqPos = searchParam.indexOf("=");
      const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
      const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
      if (key in query) {
        let currentValue = query[key];
        if (!isArray(currentValue)) {
          currentValue = query[key] = [currentValue];
        }
        currentValue.push(value);
      } else {
        query[key] = value;
      }
    }
    return query;
  }
  function stringifyQuery(query) {
    let search = "";
    for (let key in query) {
      const value = query[key];
      key = encodeQueryKey(key);
      if (value == null) {
        if (value !== void 0) {
          search += (search.length ? "&" : "") + key;
        }
        continue;
      }
      const values = isArray(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)];
      values.forEach((value2) => {
        if (value2 !== void 0) {
          search += (search.length ? "&" : "") + key;
          if (value2 != null)
            search += "=" + value2;
        }
      });
    }
    return search;
  }
  function normalizeQuery(query) {
    const normalizedQuery = {};
    for (const key in query) {
      const value = query[key];
      if (value !== void 0) {
        normalizedQuery[key] = isArray(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
      }
    }
    return normalizedQuery;
  }
  const matchedRouteKey = Symbol("");
  const viewDepthKey = Symbol("");
  const routerKey = Symbol("");
  const routeLocationKey = Symbol("");
  const routerViewLocationKey = Symbol("");
  function useCallbacks() {
    let handlers = [];
    function add2(handler) {
      handlers.push(handler);
      return () => {
        const i = handlers.indexOf(handler);
        if (i > -1)
          handlers.splice(i, 1);
      };
    }
    function reset() {
      handlers = [];
    }
    return {
      add: add2,
      list: () => handlers.slice(),
      reset
    };
  }
  function guardToPromiseFn(guard, to, from, record, name) {
    const enterCallbackArray = record && // name is defined if record is because of the function overload
    (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
    return () => new Promise((resolve2, reject) => {
      const next = (valid) => {
        if (valid === false) {
          reject(createRouterError(4, {
            from,
            to
          }));
        } else if (valid instanceof Error) {
          reject(valid);
        } else if (isRouteLocation(valid)) {
          reject(createRouterError(2, {
            from: to,
            to: valid
          }));
        } else {
          if (enterCallbackArray && // since enterCallbackArray is truthy, both record and name also are
          record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") {
            enterCallbackArray.push(valid);
          }
          resolve2();
        }
      };
      const guardReturn = guard.call(record && record.instances[name], to, from, next);
      let guardCall = Promise.resolve(guardReturn);
      if (guard.length < 3)
        guardCall = guardCall.then(next);
      guardCall.catch((err) => reject(err));
    });
  }
  function extractComponentsGuards(matched, guardType, to, from) {
    const guards = [];
    for (const record of matched) {
      for (const name in record.components) {
        let rawComponent = record.components[name];
        if (guardType !== "beforeRouteEnter" && !record.instances[name])
          continue;
        if (isRouteComponent(rawComponent)) {
          const options = rawComponent.__vccOpts || rawComponent;
          const guard = options[guardType];
          guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
        } else {
          let componentPromise = rawComponent();
          guards.push(() => componentPromise.then((resolved) => {
            if (!resolved)
              return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
            const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
            record.components[name] = resolvedComponent;
            const options = resolvedComponent.__vccOpts || resolvedComponent;
            const guard = options[guardType];
            return guard && guardToPromiseFn(guard, to, from, record, name)();
          }));
        }
      }
    }
    return guards;
  }
  function isRouteComponent(component) {
    return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
  }
  function useLink(props) {
    const router2 = inject(routerKey);
    const currentRoute = inject(routeLocationKey);
    const route = computed(() => router2.resolve(unref(props.to)));
    const activeRecordIndex = computed(() => {
      const { matched } = route.value;
      const { length } = matched;
      const routeMatched = matched[length - 1];
      const currentMatched = currentRoute.matched;
      if (!routeMatched || !currentMatched.length)
        return -1;
      const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
      if (index > -1)
        return index;
      const parentRecordPath = getOriginalPath(matched[length - 2]);
      return (
        // we are dealing with nested routes
        length > 1 && // if the parent and matched route have the same path, this link is
        // referring to the empty child. Or we currently are on a different
        // child of the same parent
        getOriginalPath(routeMatched) === parentRecordPath && // avoid comparing the child with its parent
        currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index
      );
    });
    const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
    const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
    function navigate(e = {}) {
      if (guardEvent(e)) {
        return router2[unref(props.replace) ? "replace" : "push"](
          unref(props.to)
          // avoid uncaught errors are they are logged anyway
        ).catch(noop);
      }
      return Promise.resolve();
    }
    return {
      route,
      href: computed(() => route.value.href),
      isActive,
      isExactActive,
      navigate
    };
  }
  const RouterLinkImpl = /* @__PURE__ */ defineComponent({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: {
        type: [String, Object],
        required: true
      },
      replace: Boolean,
      activeClass: String,
      // inactiveClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      }
    },
    useLink,
    setup(props, { slots }) {
      const link = reactive(useLink(props));
      const { options } = inject(routerKey);
      const elClass = computed(() => ({
        [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
        // [getLinkClass(
        //   props.inactiveClass,
        //   options.linkInactiveClass,
        //   'router-link-inactive'
        // )]: !link.isExactActive,
        [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
      }));
      return () => {
        const children = slots.default && slots.default(link);
        return props.custom ? children : h("a", {
          "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
          href: link.href,
          // this would override user added attrs but Vue will still add
          // the listener, so we end up triggering both
          onClick: link.navigate,
          class: elClass.value
        }, children);
      };
    }
  });
  const RouterLink = RouterLinkImpl;
  function guardEvent(e) {
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
      return;
    if (e.defaultPrevented)
      return;
    if (e.button !== void 0 && e.button !== 0)
      return;
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const target = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(target))
        return;
    }
    if (e.preventDefault)
      e.preventDefault();
    return true;
  }
  function includesParams(outer, inner) {
    for (const key in inner) {
      const innerValue = inner[key];
      const outerValue = outer[key];
      if (typeof innerValue === "string") {
        if (innerValue !== outerValue)
          return false;
      } else {
        if (!isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i]))
          return false;
      }
    }
    return true;
  }
  function getOriginalPath(record) {
    return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
  }
  const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
  const RouterViewImpl = /* @__PURE__ */ defineComponent({
    name: "RouterView",
    // #674 we manually inherit them
    inheritAttrs: false,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    // Better compat for @vue/compat users
    // https://github.com/vuejs/router/issues/1315
    compatConfig: { MODE: 3 },
    setup(props, { attrs, slots }) {
      const injectedRoute = inject(routerViewLocationKey);
      const routeToDisplay = computed(() => props.route || injectedRoute.value);
      const injectedDepth = inject(viewDepthKey, 0);
      const depth = computed(() => {
        let initialDepth = unref(injectedDepth);
        const { matched } = routeToDisplay.value;
        let matchedRoute;
        while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) {
          initialDepth++;
        }
        return initialDepth;
      });
      const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth.value]);
      provide(viewDepthKey, computed(() => depth.value + 1));
      provide(matchedRouteKey, matchedRouteRef);
      provide(routerViewLocationKey, routeToDisplay);
      const viewRef = ref();
      watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
        if (to) {
          to.instances[name] = instance;
          if (from && from !== to && instance && instance === oldInstance) {
            if (!to.leaveGuards.size) {
              to.leaveGuards = from.leaveGuards;
            }
            if (!to.updateGuards.size) {
              to.updateGuards = from.updateGuards;
            }
          }
        }
        if (instance && to && // if there is no instance but to and from are the same this might be
        // the first visit
        (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
          (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
        }
      }, { flush: "post" });
      return () => {
        const route = routeToDisplay.value;
        const currentName = props.name;
        const matchedRoute = matchedRouteRef.value;
        const ViewComponent = matchedRoute && matchedRoute.components[currentName];
        if (!ViewComponent) {
          return normalizeSlot(slots.default, { Component: ViewComponent, route });
        }
        const routePropsOption = matchedRoute.props[currentName];
        const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
        const onVnodeUnmounted = (vnode) => {
          if (vnode.component.isUnmounted) {
            matchedRoute.instances[currentName] = null;
          }
        };
        const component = h(ViewComponent, assign({}, routeProps, attrs, {
          onVnodeUnmounted,
          ref: viewRef
        }));
        return (
          // pass the vnode to the slot as a prop.
          // h and <component :is="..."> both accept vnodes
          normalizeSlot(slots.default, { Component: component, route }) || component
        );
      };
    }
  });
  function normalizeSlot(slot, data2) {
    if (!slot)
      return null;
    const slotContent = slot(data2);
    return slotContent.length === 1 ? slotContent[0] : slotContent;
  }
  const RouterView = RouterViewImpl;
  function createRouter(options) {
    const matcher = createRouterMatcher(options.routes, options);
    const parseQuery$1 = options.parseQuery || parseQuery;
    const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
    const routerHistory = options.history;
    const beforeGuards = useCallbacks();
    const beforeResolveGuards = useCallbacks();
    const afterGuards = useCallbacks();
    const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
    let pendingLocation = START_LOCATION_NORMALIZED;
    if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
    const encodeParams = applyToParams.bind(null, encodeParam);
    const decodeParams = (
      // @ts-expect-error: intentionally avoid the type check
      applyToParams.bind(null, decode)
    );
    function addRoute(parentOrRoute, route) {
      let parent;
      let record;
      if (isRouteName(parentOrRoute)) {
        parent = matcher.getRecordMatcher(parentOrRoute);
        record = route;
      } else {
        record = parentOrRoute;
      }
      return matcher.addRoute(record, parent);
    }
    function removeRoute(name) {
      const recordMatcher = matcher.getRecordMatcher(name);
      if (recordMatcher) {
        matcher.removeRoute(recordMatcher);
      }
    }
    function getRoutes() {
      return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
    }
    function hasRoute(name) {
      return !!matcher.getRecordMatcher(name);
    }
    function resolve2(rawLocation, currentLocation) {
      currentLocation = assign({}, currentLocation || currentRoute.value);
      if (typeof rawLocation === "string") {
        const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
        const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
        const href2 = routerHistory.createHref(locationNormalized.fullPath);
        return assign(locationNormalized, matchedRoute2, {
          params: decodeParams(matchedRoute2.params),
          hash: decode(locationNormalized.hash),
          redirectedFrom: void 0,
          href: href2
        });
      }
      let matcherLocation;
      if ("path" in rawLocation) {
        matcherLocation = assign({}, rawLocation, {
          path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
        });
      } else {
        const targetParams = assign({}, rawLocation.params);
        for (const key in targetParams) {
          if (targetParams[key] == null) {
            delete targetParams[key];
          }
        }
        matcherLocation = assign({}, rawLocation, {
          params: encodeParams(targetParams)
        });
        currentLocation.params = encodeParams(currentLocation.params);
      }
      const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
      const hash2 = rawLocation.hash || "";
      matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
      const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
        hash: encodeHash(hash2),
        path: matchedRoute.path
      }));
      const href = routerHistory.createHref(fullPath);
      return assign({
        fullPath,
        // keep the hash encoded so fullPath is effectively path + encodedQuery +
        // hash
        hash: hash2,
        query: (
          // if the user is using a custom query lib like qs, we might have
          // nested objects, so we keep the query as is, meaning it can contain
          // numbers at `$route.query`, but at the point, the user will have to
          // use their own type anyway.
          // https://github.com/vuejs/router/issues/328#issuecomment-649481567
          stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
        )
      }, matchedRoute, {
        redirectedFrom: void 0,
        href
      });
    }
    function locationAsObject(to) {
      return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
    }
    function checkCanceledNavigation(to, from) {
      if (pendingLocation !== to) {
        return createRouterError(8, {
          from,
          to
        });
      }
    }
    function push(to) {
      return pushWithRedirect(to);
    }
    function replace(to) {
      return push(assign(locationAsObject(to), { replace: true }));
    }
    function handleRedirectRecord(to) {
      const lastMatched = to.matched[to.matched.length - 1];
      if (lastMatched && lastMatched.redirect) {
        const { redirect } = lastMatched;
        let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
        if (typeof newTargetLocation === "string") {
          newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : (
            // force empty params
            { path: newTargetLocation }
          );
          newTargetLocation.params = {};
        }
        return assign({
          query: to.query,
          hash: to.hash,
          // avoid transferring params if the redirect has a path
          params: "path" in newTargetLocation ? {} : to.params
        }, newTargetLocation);
      }
    }
    function pushWithRedirect(to, redirectedFrom) {
      const targetLocation = pendingLocation = resolve2(to);
      const from = currentRoute.value;
      const data2 = to.state;
      const force = to.force;
      const replace2 = to.replace === true;
      const shouldRedirect = handleRedirectRecord(targetLocation);
      if (shouldRedirect)
        return pushWithRedirect(
          assign(locationAsObject(shouldRedirect), {
            state: typeof shouldRedirect === "object" ? assign({}, data2, shouldRedirect.state) : data2,
            force,
            replace: replace2
          }),
          // keep original redirectedFrom if it exists
          redirectedFrom || targetLocation
        );
      const toLocation = targetLocation;
      toLocation.redirectedFrom = redirectedFrom;
      let failure;
      if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
        failure = createRouterError(16, { to: toLocation, from });
        handleScroll(
          from,
          from,
          // this is a push, the only way for it to be triggered from a
          // history.listen is with a redirect, which makes it become a push
          true,
          // This cannot be the first navigation because the initial location
          // cannot be manually navigated to
          false
        );
      }
      return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error2) => isNavigationFailure(error2) ? (
        // navigation redirects still mark the router as ready
        isNavigationFailure(
          error2,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ) ? error2 : markAsReady(error2)
      ) : (
        // reject any unknown error
        triggerError(error2, toLocation, from)
      )).then((failure2) => {
        if (failure2) {
          if (isNavigationFailure(
            failure2,
            2
            /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
          )) {
            return pushWithRedirect(
              // keep options
              assign({
                // preserve an existing replacement but allow the redirect to override it
                replace: replace2
              }, locationAsObject(failure2.to), {
                state: typeof failure2.to === "object" ? assign({}, data2, failure2.to.state) : data2,
                force
              }),
              // preserve the original redirectedFrom if any
              redirectedFrom || toLocation
            );
          }
        } else {
          failure2 = finalizeNavigation(toLocation, from, true, replace2, data2);
        }
        triggerAfterEach(toLocation, from, failure2);
        return failure2;
      });
    }
    function checkCanceledNavigationAndReject(to, from) {
      const error2 = checkCanceledNavigation(to, from);
      return error2 ? Promise.reject(error2) : Promise.resolve();
    }
    function runWithContext(fn) {
      const app2 = installedApps.values().next().value;
      return app2 && typeof app2.runWithContext === "function" ? app2.runWithContext(fn) : fn();
    }
    function navigate(to, from) {
      let guards;
      const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
      guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
      for (const record of leavingRecords) {
        record.leaveGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards).then(() => {
        guards = [];
        for (const guard of beforeGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
        for (const record of updatingRecords) {
          record.updateGuards.forEach((guard) => {
            guards.push(guardToPromiseFn(guard, to, from));
          });
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const record of enteringRecords) {
          if (record.beforeEnter) {
            if (isArray(record.beforeEnter)) {
              for (const beforeEnter of record.beforeEnter)
                guards.push(guardToPromiseFn(beforeEnter, to, from));
            } else {
              guards.push(guardToPromiseFn(record.beforeEnter, to, from));
            }
          }
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        to.matched.forEach((record) => record.enterCallbacks = {});
        guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const guard of beforeResolveGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).catch((err) => isNavigationFailure(
        err,
        8
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? err : Promise.reject(err));
    }
    function triggerAfterEach(to, from, failure) {
      afterGuards.list().forEach((guard) => runWithContext(() => guard(to, from, failure)));
    }
    function finalizeNavigation(toLocation, from, isPush, replace2, data2) {
      const error2 = checkCanceledNavigation(toLocation, from);
      if (error2)
        return error2;
      const isFirstNavigation = from === START_LOCATION_NORMALIZED;
      const state = !isBrowser ? {} : history.state;
      if (isPush) {
        if (replace2 || isFirstNavigation)
          routerHistory.replace(toLocation.fullPath, assign({
            scroll: isFirstNavigation && state && state.scroll
          }, data2));
        else
          routerHistory.push(toLocation.fullPath, data2);
      }
      currentRoute.value = toLocation;
      handleScroll(toLocation, from, isPush, isFirstNavigation);
      markAsReady();
    }
    let removeHistoryListener;
    function setupListeners() {
      if (removeHistoryListener)
        return;
      removeHistoryListener = routerHistory.listen((to, _from, info) => {
        if (!router2.listening)
          return;
        const toLocation = resolve2(to);
        const shouldRedirect = handleRedirectRecord(toLocation);
        if (shouldRedirect) {
          pushWithRedirect(assign(shouldRedirect, { replace: true }), toLocation).catch(noop);
          return;
        }
        pendingLocation = toLocation;
        const from = currentRoute.value;
        if (isBrowser) {
          saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
        }
        navigate(toLocation, from).catch((error2) => {
          if (isNavigationFailure(
            error2,
            4 | 8
            /* ErrorTypes.NAVIGATION_CANCELLED */
          )) {
            return error2;
          }
          if (isNavigationFailure(
            error2,
            2
            /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
          )) {
            pushWithRedirect(
              error2.to,
              toLocation
              // avoid an uncaught rejection, let push call triggerError
            ).then((failure) => {
              if (isNavigationFailure(
                failure,
                4 | 16
                /* ErrorTypes.NAVIGATION_DUPLICATED */
              ) && !info.delta && info.type === NavigationType.pop) {
                routerHistory.go(-1, false);
              }
            }).catch(noop);
            return Promise.reject();
          }
          if (info.delta) {
            routerHistory.go(-info.delta, false);
          }
          return triggerError(error2, toLocation, from);
        }).then((failure) => {
          failure = failure || finalizeNavigation(
            // after navigation, all matched components are resolved
            toLocation,
            from,
            false
          );
          if (failure) {
            if (info.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
            // entry while a different route is displayed
            !isNavigationFailure(
              failure,
              8
              /* ErrorTypes.NAVIGATION_CANCELLED */
            )) {
              routerHistory.go(-info.delta, false);
            } else if (info.type === NavigationType.pop && isNavigationFailure(
              failure,
              4 | 16
              /* ErrorTypes.NAVIGATION_DUPLICATED */
            )) {
              routerHistory.go(-1, false);
            }
          }
          triggerAfterEach(toLocation, from, failure);
        }).catch(noop);
      });
    }
    let readyHandlers = useCallbacks();
    let errorListeners = useCallbacks();
    let ready;
    function triggerError(error2, to, from) {
      markAsReady(error2);
      const list2 = errorListeners.list();
      if (list2.length) {
        list2.forEach((handler) => handler(error2, to, from));
      } else {
        console.error(error2);
      }
      return Promise.reject(error2);
    }
    function isReady() {
      if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
        return Promise.resolve();
      return new Promise((resolve3, reject) => {
        readyHandlers.add([resolve3, reject]);
      });
    }
    function markAsReady(err) {
      if (!ready) {
        ready = !err;
        setupListeners();
        readyHandlers.list().forEach(([resolve3, reject]) => err ? reject(err) : resolve3());
        readyHandlers.reset();
      }
      return err;
    }
    function handleScroll(to, from, isPush, isFirstNavigation) {
      const { scrollBehavior } = options;
      if (!isBrowser || !scrollBehavior)
        return Promise.resolve();
      const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
      return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err) => triggerError(err, to, from));
    }
    const go = (delta) => routerHistory.go(delta);
    let started;
    const installedApps = /* @__PURE__ */ new Set();
    const router2 = {
      currentRoute,
      listening: true,
      addRoute,
      removeRoute,
      hasRoute,
      getRoutes,
      resolve: resolve2,
      options,
      push,
      replace,
      go,
      back: () => go(-1),
      forward: () => go(1),
      beforeEach: beforeGuards.add,
      beforeResolve: beforeResolveGuards.add,
      afterEach: afterGuards.add,
      onError: errorListeners.add,
      isReady,
      install(app2) {
        const router3 = this;
        app2.component("RouterLink", RouterLink);
        app2.component("RouterView", RouterView);
        app2.config.globalProperties.$router = router3;
        Object.defineProperty(app2.config.globalProperties, "$route", {
          enumerable: true,
          get: () => unref(currentRoute)
        });
        if (isBrowser && // used for the initial navigation client side to avoid pushing
        // multiple times when the router is used in multiple apps
        !started && currentRoute.value === START_LOCATION_NORMALIZED) {
          started = true;
          push(routerHistory.location).catch((err) => {
          });
        }
        const reactiveRoute = {};
        for (const key in START_LOCATION_NORMALIZED) {
          Object.defineProperty(reactiveRoute, key, {
            get: () => currentRoute.value[key],
            enumerable: true
          });
        }
        app2.provide(routerKey, router3);
        app2.provide(routeLocationKey, shallowReactive(reactiveRoute));
        app2.provide(routerViewLocationKey, currentRoute);
        const unmountApp = app2.unmount;
        installedApps.add(app2);
        app2.unmount = function() {
          installedApps.delete(app2);
          if (installedApps.size < 1) {
            pendingLocation = START_LOCATION_NORMALIZED;
            removeHistoryListener && removeHistoryListener();
            removeHistoryListener = null;
            currentRoute.value = START_LOCATION_NORMALIZED;
            started = false;
            ready = false;
          }
          unmountApp();
        };
      }
    };
    function runGuardQueue(guards) {
      return guards.reduce((promise, guard) => promise.then(() => runWithContext(guard)), Promise.resolve());
    }
    return router2;
  }
  function extractChangingRecords(to, from) {
    const leavingRecords = [];
    const updatingRecords = [];
    const enteringRecords = [];
    const len = Math.max(from.matched.length, to.matched.length);
    for (let i = 0; i < len; i++) {
      const recordFrom = from.matched[i];
      if (recordFrom) {
        if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
          updatingRecords.push(recordFrom);
        else
          leavingRecords.push(recordFrom);
      }
      const recordTo = to.matched[i];
      if (recordTo) {
        if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
          enteringRecords.push(recordTo);
        }
      }
    }
    return [leavingRecords, updatingRecords, enteringRecords];
  }
  function useRouter() {
    return inject(routerKey);
  }
  function useRoute() {
    return inject(routeLocationKey);
  }
  const __default__$5 = {
    name: "TheAppLayout"
  };
  const _sfc_main$1z = /* @__PURE__ */ defineComponent({
    ...__default__$5,
    setup(__props) {
      const route = useRoute();
      const layout = computed(() => {
        var _a, _b;
        const requiresAuth = (_a = route == null ? void 0 : route.meta) == null ? void 0 : _a.requiresAuth;
        let layout2 = (_b = route == null ? void 0 : route.meta) == null ? void 0 : _b.layout;
        if (requiresAuth && !layout2) {
          layout2 = "Section";
        }
        if (layout2) {
          return `The${layout2}Layout`;
        }
        return `TheDefaultLayout`;
      });
      return (_ctx, _cache) => {
        const _component_router_view = resolveComponent("router-view");
        return openBlock(), createBlock(resolveDynamicComponent(unref(layout)), null, {
          default: withCtx(() => [
            createVNode(_component_router_view)
          ]),
          _: 1
          /* STABLE */
        });
      };
    }
  });
  const _sfc_main$1y = /* @__PURE__ */ defineComponent({
    __name: "InterstitialApp",
    setup(__props) {
      const eventStore2 = useEventStore();
      onMounted(async () => {
        const tab = await appExtensionApi.message.send({ event: "getCurrentTab" });
        eventStore2.track({
          name: EXTENSION_EVENTS.CHECKOUT,
          data: { url: tab == null ? void 0 : tab.url }
        });
        appExtensionApi.message.addListener((e) => {
          const { event: eventName, payload } = e;
          if (eventName === "interstitialAlert") {
            popupAlert(payload.message, payload.type);
          }
        });
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(_sfc_main$1z);
      };
    }
  });
  const useCardsStore = defineStore("cards", () => {
    const cardsState = ref({});
    const listsState = ref({});
    const card = computed(() => (cardUuid) => cardsState.value[cardUuid]);
    async function list2(params = {}) {
      params = {
        fullInfo: true,
        spentThisMonth: true,
        ...params
      };
      const cacheKey = JSON.stringify(params);
      if (listsState.value[cacheKey]) {
        return Promise.resolve({
          total: listsState.value[cacheKey].total,
          data: listsState.value[cacheKey].cards.map(
            (cardUuid) => cardsState.value[cardUuid]
          )
        });
      }
      const { data: data2 } = await list$4(params);
      const cardUuids = [];
      data2.data.forEach((card2) => {
        cardsState.value[card2.cardUuid] = card2;
        cardUuids.push(card2.cardUuid);
      });
      listsState.value[cacheKey] = {
        total: data2.total,
        cards: cardUuids
      };
      return data2;
    }
    async function get$12(cardUuid, params = {}) {
      params = {
        fullInfo: true,
        spentThisMonth: true,
        ...params
      };
      if (cardsState.value[cardUuid]) {
        return Promise.resolve(cardsState.value[cardUuid]);
      }
      const { data: data2 } = await get(cardUuid, params);
      cardsState.value[data2.cardUuid] = data2;
      return data2;
    }
    async function create$1(params) {
      const { data: data2 } = await create(params);
      cardsState.value[data2.cardUuid] = data2;
      listsState.value = {};
      return data2;
    }
    async function update$1(cardUuid, params) {
      const { data: data2 } = await update(cardUuid, params);
      cardsState.value[data2.cardUuid] = data2;
      return data2;
    }
    function $reset() {
      cardsState.value = {};
      listsState.value = {};
    }
    async function setState$1(cardUuid, params) {
      const current = cardsState.value[cardUuid];
      cardsState.value[cardUuid] = { ...current, ...params };
      try {
        const { data: data2 } = await setState(cardUuid, params);
        cardsState.value[data2.cardUuid] = data2;
        if (params.state === "CLOSED") {
          listsState.value = {};
        }
        return data2;
      } catch (error2) {
        cardsState.value[cardUuid] = current;
        throw error2;
      }
    }
    async function setNote$1(cardUuid, params) {
      const { data: data2 } = await setNote(cardUuid, params);
      cardsState.value[data2.cardUuid] = data2;
      return data2;
    }
    return {
      // actions
      $reset,
      create: create$1,
      get: get$12,
      list: list2,
      update: update$1,
      setState: setState$1,
      setNote: setNote$1,
      // getters
      card,
      // states
      lists: listsState,
      cards: cardsState
    };
  });
  var AccountPurposes = /* @__PURE__ */ ((AccountPurposes2) => {
    AccountPurposes2["PERSONAL"] = "PERSONAL";
    AccountPurposes2["BUSINESS"] = "BUSINESS";
    return AccountPurposes2;
  })(AccountPurposes || {});
  const useUserStore = defineStore("user", () => {
    const userState = ref({});
    const user = computed(() => userState.value);
    const completedOnboarding = computed(() => {
      const {
        _id,
        accountPurpose,
        chargeTermsAcceptTime,
        commercialChargeTermsAcceptTime
      } = userState.value;
      return !!(_id && (accountPurpose !== AccountPurposes.BUSINESS && chargeTermsAcceptTime || accountPurpose === AccountPurposes.BUSINESS && commercialChargeTermsAcceptTime));
    });
    async function init2() {
      const { token } = await appExtensionApi.storage.get("token");
      if (token) {
        void getUser();
      }
    }
    async function getUser() {
      const { data: data2 } = await me();
      userState.value = data2;
      return data2;
    }
    function $reset() {
      userState.value = {};
    }
    return {
      // actions
      init: init2,
      getUser,
      $reset,
      // getters
      user,
      completedOnboarding,
      // state
      userState
    };
  });
  const userStore = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    useUserStore
  }, Symbol.toStringTag, { value: "Module" }));
  var CardType = /* @__PURE__ */ ((CardType2) => {
    CardType2["SINGLE_USE"] = "SINGLE_USE";
    CardType2["MERCHANT_LOCKED"] = "MERCHANT_LOCKED";
    CardType2["UNLOCKED"] = "UNLOCKED";
    CardType2["PHYSICAL"] = "PHYSICAL";
    CardType2["DIGITAL_WALLET"] = "DIGITAL_WALLET";
    return CardType2;
  })(CardType || {});
  var CardState = /* @__PURE__ */ ((CardState2) => {
    CardState2["CACHED"] = "CACHED";
    CardState2["OPEN"] = "OPEN";
    CardState2["PAUSED"] = "PAUSED";
    CardState2["CLOSED_PENDING_REISSUE"] = "CLOSED_PENDING_REISSUE";
    CardState2["CLOSED_REISSUED"] = "CLOSED_REISSUED";
    CardState2["PRE_ACTIVE_PENDING_FULFILLMENT"] = "PRE_ACTIVE_PENDING_FULFILLMENT";
    CardState2["PRE_ACTIVE_FULFILLED"] = "PRE_ACTIVE_FULFILLED";
    CardState2["LOST"] = "LOST";
    CardState2["CLOSED"] = "CLOSED";
    return CardState2;
  })(CardState || {});
  var PrivacyCardNetwork = /* @__PURE__ */ ((PrivacyCardNetwork2) => {
    PrivacyCardNetwork2["VISA"] = "visa";
    PrivacyCardNetwork2["MASTERCARD"] = "mastercard";
    return PrivacyCardNetwork2;
  })(PrivacyCardNetwork || {});
  var SpendLimitDuration = /* @__PURE__ */ ((SpendLimitDuration2) => {
    SpendLimitDuration2["TRANSACTION"] = "TRANSACTION";
    SpendLimitDuration2["MONTHLY"] = "MONTHLY";
    SpendLimitDuration2["ANNUALLY"] = "ANNUALLY";
    SpendLimitDuration2["FOREVER"] = "FOREVER";
    return SpendLimitDuration2;
  })(SpendLimitDuration || {});
  var CardLogoSize = /* @__PURE__ */ ((CardLogoSize2) => {
    CardLogoSize2["X_SMALL"] = "xs";
    CardLogoSize2["SMALL"] = "sm";
    CardLogoSize2["MEDIUM"] = "md";
    CardLogoSize2["LARGE"] = "lg";
    CardLogoSize2["X_LARGE"] = "xl";
    return CardLogoSize2;
  })(CardLogoSize || {});
  function useCardNickname(card) {
    const nickname = computed(() => {
      var _a;
      const current = card.value;
      const lastOption = current.type === CardType.SINGLE_USE ? "New Burner" : "New Card";
      return (current == null ? void 0 : current.memo) || (current == null ? void 0 : current.hostname) || ((_a = current == null ? void 0 : current.meta) == null ? void 0 : _a.hostname) || lastOption;
    });
    return nickname;
  }
  const digitalWalletIconFilename = "/assets/card-digital-wallet.svg";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$1x = {};
  const _hoisted_1$1k = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "49",
    fill: "none"
  };
  const _hoisted_2$11 = /* @__PURE__ */ createStaticVNode('<rect width="48" height="48" y=".5" fill="url(#a)" rx="14"></rect><path fill="#fff" fill-rule="evenodd" d="M20.68 32.211c-2.212-.988-3.717-2.933-3.717-5.171 0-5.864 6.411-4.661 3.664-10.54 0 0 5.936 1.815 3.399 8.1.005.019 3.492-.865 2.319-4.597 1.484.424 4.695 2.346 4.695 7.036h-.004c0 2.239-1.505 4.184-3.717 5.172.129-.29.199-.603.199-.928-.01-1.808-1.188-2.726-1.188-2.726s-.31.827-.93 1.144c0 0-1.4-1.511-1.4-3.834-2.727 1.691-3.519 3.873-3.519 5.416 0 .325.07.638.2.928" clip-rule="evenodd"></path><defs><linearGradient id="a" x1="48" x2="-9.938" y1="48.5" y2="24.94" gradientUnits="userSpaceOnUse"><stop stop-color="#ED8B72"></stop><stop offset=".805" stop-color="#C12943"></stop></linearGradient></defs>', 3);
  const _hoisted_5$o = [
    _hoisted_2$11
  ];
  function _sfc_render$E(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1k, _hoisted_5$o);
  }
  const IconSingleUseCard = /* @__PURE__ */ _export_sfc(_sfc_main$1x, [["render", _sfc_render$E]]);
  const _sfc_main$1w = {};
  const _hoisted_1$1j = {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$10 = /* @__PURE__ */ createStaticVNode('<rect width="48" height="48" rx="14" fill="url(#paint0_linear_1911_2517)"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M24 16C21.581 16 19.5633 17.7178 19.1 20H21.1707C21.5825 18.8348 22.6938 18 24 18C25.6569 18 27 19.3431 27 21V23H21H19H17V32H31V23H29V21C29 18.2386 26.7614 16 24 16Z" fill="white"></path><defs><linearGradient id="paint0_linear_1911_2517" x1="0" y1="0" x2="58.1715" y2="23.9773" gradientUnits="userSpaceOnUse"><stop offset="0.225" stop-color="#7221A4"></stop><stop offset="0.915" stop-color="#4949F1"></stop></linearGradient></defs>', 3);
  const _hoisted_5$n = [
    _hoisted_2$10
  ];
  function _sfc_render$D(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1j, _hoisted_5$n);
  }
  const IconUnlockedCard = /* @__PURE__ */ _export_sfc(_sfc_main$1w, [["render", _sfc_render$D]]);
  const _sfc_main$1v = {};
  const _hoisted_1$1i = {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$$ = /* @__PURE__ */ createStaticVNode('<rect width="48" height="48" rx="14" fill="url(#paint0_linear_1911_2747)"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M19 21C19 18.2386 21.2386 16 24 16C26.7614 16 29 18.2386 29 21V23H31V32H17V23H19V21ZM27 23H21V21C21 19.3431 22.3431 18 24 18C25.6569 18 27 19.3431 27 21V23Z" fill="white"></path><defs><linearGradient id="paint0_linear_1911_2747" x1="48" y1="48" x2="-9.93827" y2="24.4401" gradientUnits="userSpaceOnUse"><stop stop-color="#FBF5EF"></stop><stop offset="0.64" stop-color="#4949F1"></stop><stop offset="1" stop-color="#2121A4"></stop></linearGradient></defs>', 3);
  const _hoisted_5$m = [
    _hoisted_2$$
  ];
  function _sfc_render$C(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1i, _hoisted_5$m);
  }
  const IconLockedCard = /* @__PURE__ */ _export_sfc(_sfc_main$1v, [["render", _sfc_render$C]]);
  const IconPrivacyLogoSquare_vue_vue_type_style_index_0_scoped_d9b52bde_lang = "";
  const _sfc_main$1u = {};
  const _hoisted_1$1h = {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$_ = /* @__PURE__ */ createStaticVNode('<rect x="0.5" y="0.5" width="47" height="47" rx="13.5" fill="black" data-v-d9b52bde></rect><rect x="0.5" y="0.5" width="47" height="47" rx="13.5" stroke="#323242" data-v-d9b52bde></rect><g clip-path="url(#clip0_1386_40844)" data-v-d9b52bde><rect width="24" height="24" transform="translate(12 12)" fill="black" data-v-d9b52bde></rect><path d="M36 12H12V36H36V12Z" fill="#232320" data-v-d9b52bde></path><path fill-rule="evenodd" clip-rule="evenodd" d="M36 12V36H12V12H36ZM23.7362 18.0006H19.2V30.0282H21.7774V26.0763H23.7362C27.1956 26.0763 28.9252 24.7303 28.9252 22.0384C28.9252 19.3465 27.1956 18.0006 23.7362 18.0006ZM23.8564 20.2686C25.483 20.2686 26.2963 20.8586 26.2963 22.0384C26.2963 23.2183 25.483 23.8082 23.8564 23.8082H21.7774V20.2686H23.8564Z" fill="white" data-v-d9b52bde></path></g><defs data-v-d9b52bde><clipPath id="clip0_1386_40844" data-v-d9b52bde><rect width="24" height="24" fill="white" transform="translate(12 12)" data-v-d9b52bde></rect></clipPath></defs>', 4);
  const _hoisted_6$j = [
    _hoisted_2$_
  ];
  function _sfc_render$B(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1h, _hoisted_6$j);
  }
  const IconPrivacyLogoSquare = /* @__PURE__ */ _export_sfc(_sfc_main$1u, [["render", _sfc_render$B], ["__scopeId", "data-v-d9b52bde"]]);
  const _sfc_main$1t = {};
  const _hoisted_1$1g = {
    width: "12",
    height: "13",
    viewBox: "0 0 12 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$Z = /* @__PURE__ */ createBaseVNode(
    "g",
    { id: "locked-16" },
    [
      /* @__PURE__ */ createBaseVNode("path", {
        id: "vector",
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M2.25 4.25C2.25 2.17893 3.92893 0.5 6 0.5C8.07107 0.5 9.75 2.17893 9.75 4.25V5.75H11.25V12.5H0.75V5.75H2.25V4.25ZM8.25 5.75H3.75V4.25C3.75 3.00736 4.75736 2 6 2C7.24264 2 8.25 3.00736 8.25 4.25V5.75Z",
        fill: "currentColor"
      })
    ],
    -1
    /* HOISTED */
  );
  const _hoisted_3$U = [
    _hoisted_2$Z
  ];
  function _sfc_render$A(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1g, _hoisted_3$U);
  }
  const IconPadlock$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1t, [["render", _sfc_render$A]]);
  const _sfc_main$1s = {};
  const _hoisted_1$1f = {
    width: "12",
    height: "12",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$Y = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      fill: "currentColor",
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M4.68 15.711C2.468 14.723.963 12.778.963 10.54.963 4.676 7.375 5.879 4.627 0c0 0 5.937 1.815 3.4 8.1.004.019 3.491-.865 2.318-4.597 1.484.424 4.695 2.346 4.695 7.036h-.004c0 2.239-1.505 4.184-3.717 5.172.129-.29.199-.603.199-.928-.01-1.808-1.188-2.726-1.188-2.726s-.31.826-.93 1.144c0 0-1.4-1.511-1.4-3.834-2.726 1.691-3.519 3.873-3.519 5.416 0 .325.07.638.2.928"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$T = [
    _hoisted_2$Y
  ];
  function _sfc_render$z(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1f, _hoisted_3$T);
  }
  const IconFlame = /* @__PURE__ */ _export_sfc(_sfc_main$1s, [["render", _sfc_render$z]]);
  const _sfc_main$1r = {};
  const _hoisted_1$1e = {
    width: "12",
    height: "13",
    viewBox: "0 0 12 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$X = /* @__PURE__ */ createBaseVNode(
    "g",
    { id: "unlocked-16" },
    [
      /* @__PURE__ */ createBaseVNode("path", {
        id: "vector",
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M6 0.5C4.18578 0.5 2.67247 1.78832 2.32501 3.5H3.87803C4.18691 2.62611 5.02034 2 6 2C7.24264 2 8.25 3.00736 8.25 4.25V5.75H3.75H2.25H0.75V12.5H11.25V5.75H9.75V4.25C9.75 2.17893 8.07107 0.5 6 0.5Z",
        fill: "currentColor"
      })
    ],
    -1
    /* HOISTED */
  );
  const _hoisted_3$S = [
    _hoisted_2$X
  ];
  function _sfc_render$y(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1e, _hoisted_3$S);
  }
  const IconUnlocked = /* @__PURE__ */ _export_sfc(_sfc_main$1r, [["render", _sfc_render$y]]);
  const baseImageBucket = "https://s3.amazonaws.com/privacy-web/images/";
  const CARD_IMAGES = baseImageBucket + "cards/";
  const MCC_ICONS = baseImageBucket + "streamline/";
  function logoFilename({
    type,
    style
  }) {
    if (type === CardType.DIGITAL_WALLET) {
      return digitalWalletIconFilename;
    } else {
      return style == null ? void 0 : style.filename;
    }
  }
  function cardBgColor({
    type,
    style,
    merchantCategory
  }) {
    let color = style == null ? void 0 : style.bgColor;
    const isUnlocked = type === CardType.UNLOCKED && !merchantCategory;
    if ([CardType.DIGITAL_WALLET, CardType.SINGLE_USE].includes(type) || isUnlocked) {
      color = null;
    }
    color && (color = "#" + color);
    return color;
  }
  function getPseudoRandomColor(mccInput, alpha) {
    const mcc = Number(mccInput);
    let x = Math.sin(mcc) * 1e4;
    x -= Math.floor(x);
    const hue = Math.floor(x * 360);
    const saturation = 100;
    const lightness = Math.floor(x * 25) + 45;
    return alpha ? `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})` : `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
  function logoAltText({
    type,
    friendlyNames,
    strippedHostname = ""
  }) {
    let alt = "";
    if (type === CardType.DIGITAL_WALLET) {
      alt = "Digital Wallet";
    } else if (type === CardType.SINGLE_USE) {
      alt = "Single-Use";
    } else if (type === CardType.UNLOCKED) {
      alt = "Unlocked";
    }
    alt || (alt = (friendlyNames == null ? void 0 : friendlyNames[0]) || "");
    alt || (alt = strippedHostname);
    return alt;
  }
  function useBackgroundColor({
    mcc,
    mccIconUrl,
    style,
    type,
    merchantCategory
  }) {
    const backgroundColor = ref({});
    let color = cardBgColor({
      type,
      style,
      merchantCategory
    });
    if (mcc && mccIconUrl && type) {
      const hasLogoFile = !!logoFilename({ type, style });
      if (!(style == null ? void 0 : style.icon) && !hasLogoFile && !color) {
        color = getPseudoRandomColor(mcc, "10%");
      }
    }
    if (color) {
      backgroundColor.value = {
        backgroundColor: color
      };
    }
    return backgroundColor.value;
  }
  const componentLogos = {
    DEFAULT: IconLockedCard,
    [CardType.SINGLE_USE]: IconSingleUseCard,
    [CardType.UNLOCKED]: IconUnlockedCard,
    [CardType.DIGITAL_WALLET]: IconPrivacyLogoSquare
  };
  function useLogo({
    mccIconUrl,
    type,
    merchantCategory,
    style = {}
  }) {
    const { friendlyNames, icon, lastModified, strippedHostname } = style;
    const filename = logoFilename({ type, style });
    const logo = shallowRef({});
    const isUnlocked = type === CardType.UNLOCKED && !merchantCategory;
    if (type === CardType.SINGLE_USE || isUnlocked || type === CardType.DIGITAL_WALLET) {
      logo.value = {
        type: "component",
        src: componentLogos[type],
        alt: logoAltText({ type, friendlyNames, strippedHostname })
      };
      return logo.value;
    }
    if (icon) {
      logo.value = {
        type: "icon",
        src: icon,
        alt: logoAltText({ type, friendlyNames, strippedHostname })
      };
      return logo.value;
    }
    if (filename) {
      const image = type === CardType.MERCHANT_LOCKED ? `${CARD_IMAGES}${filename}${lastModified ? `?lastModified=${lastModified}` : ""}` : filename;
      logo.value = {
        type: "image",
        src: image,
        alt: logoAltText({ type, friendlyNames, strippedHostname })
      };
      return logo.value;
    }
    if (mccIconUrl) {
      logo.value = {
        type: "mcc",
        src: `${MCC_ICONS}${mccIconUrl}`,
        alt: logoAltText({ type, friendlyNames, strippedHostname })
      };
      return logo.value;
    }
    logo.value = {
      type: "component",
      src: componentLogos.DEFAULT,
      alt: ""
    };
    return logo.value;
  }
  const getCustomCardColors = (bgColor) => {
    const customBgColor = bgColor ? bgColor : "FFFFFF";
    const r = parseInt(customBgColor.substring(0, 2), 16);
    const g = parseInt(customBgColor.substring(2, 4), 16);
    const b = parseInt(customBgColor.substring(4, 6), 16);
    const isDarkBackground = r * 0.299 + g * 0.587 + b * 0.114 < 186;
    const cardColors = {
      bgColor: `#${customBgColor}`,
      textColor: "#000000",
      isDarkBg: false
    };
    if (isDarkBackground) {
      cardColors.textColor = "#FFFFFF";
      cardColors.isDarkBg = true;
    }
    return cardColors;
  };
  const getLabelIcon = (type, merchantCategory) => {
    if (type === CardType.SINGLE_USE) {
      return IconFlame;
    }
    if (type === CardType.UNLOCKED) {
      return merchantCategory ? IconPadlock$1 : IconUnlocked;
    }
    if (type === CardType.DIGITAL_WALLET) {
      return "";
    }
    return IconPadlock$1;
  };
  const getLabelText = (type, merchantCategory) => {
    if (type === CardType.SINGLE_USE) {
      return "SINGLE USE";
    }
    if (type === CardType.UNLOCKED && !merchantCategory) {
      return "UNLOCKED";
    }
    if (type === CardType.UNLOCKED && merchantCategory) {
      return "CATEGORY LOCKED";
    }
    if (type === CardType.DIGITAL_WALLET) {
      return "DIGITAL WALLET";
    }
    return "MERCHANT LOCKED";
  };
  const _hoisted_1$1d = {
    key: 0,
    class: "icon",
    "data-test": "card-icon"
  };
  const _hoisted_2$W = ["src", "alt"];
  const _sfc_main$1q = /* @__PURE__ */ defineComponent({
    __name: "PrivacyCardLogo",
    props: {
      mcc: null,
      mccIconUrl: null,
      size: { default: CardLogoSize.MEDIUM },
      style: null,
      type: null,
      merchantCategory: null
    },
    setup(__props) {
      const props = __props;
      const inlineStyles = computed(
        () => useBackgroundColor({
          mcc: props.mcc,
          mccIconUrl: props.mccIconUrl,
          style: props.style,
          type: props.type,
          merchantCategory: props.merchantCategory
        })
      );
      const logo = computed(
        () => useLogo({
          mcc: props.mcc,
          mccIconUrl: props.mccIconUrl,
          style: props.style,
          type: props.type,
          merchantCategory: props.merchantCategory
        })
      );
      const useComponent = computed(() => {
        return logo.value.type === "component" || logo.value.type === "default";
      });
      const classNames = computed(() => [
        "logo",
        `logo-${props.size}`,
        {
          "logo-mcc": logo.value.type === "mcc",
          "logo-component": logo.value.type === "component"
        }
      ]);
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock(
          "div",
          {
            class: normalizeClass(unref(classNames)),
            style: normalizeStyle(unref(inlineStyles))
          },
          [
            unref(logo).type === "icon" ? (openBlock(), createElementBlock(
              "div",
              _hoisted_1$1d,
              toDisplayString(unref(logo).src),
              1
              /* TEXT */
            )) : unref(useComponent) ? (openBlock(), createBlock(resolveDynamicComponent(unref(logo).src), {
              key: 1,
              class: "svg",
              "aria-label": unref(logo).alt
            }, null, 8, ["aria-label"])) : (openBlock(), createElementBlock("img", {
              key: 2,
              class: "img",
              src: unref(logo).src,
              alt: unref(logo).alt,
              loading: "lazy",
              "data-test": "card-logo"
            }, null, 8, _hoisted_2$W))
          ],
          6
          /* CLASS, STYLE */
        );
      };
    }
  });
  const PrivacyCardLogo_vue_vue_type_style_index_0_scoped_e03f0445_lang = "";
  const PrivacyCardLogo = /* @__PURE__ */ _export_sfc(_sfc_main$1q, [["__scopeId", "data-v-e03f0445"]]);
  const BaseLabel_vue_vue_type_style_index_0_scoped_9c935a55_lang = "";
  const _sfc_main$1p = {};
  const _hoisted_1$1c = { class: "badge bg-secondary" };
  function _sfc_render$x(_ctx, _cache) {
    return openBlock(), createElementBlock("div", _hoisted_1$1c, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]);
  }
  const BaseLabel = /* @__PURE__ */ _export_sfc(_sfc_main$1p, [["render", _sfc_render$x], ["__scopeId", "data-v-9c935a55"]]);
  function useFoundPaymentInputs() {
    const found = ref(false);
    appExtensionApi.message.send({
      target: "checkout",
      event: "paymentInputsFound"
    }).then((inputsFound) => {
      found.value = !!(inputsFound == null ? void 0 : inputsFound.success);
    }).catch(() => {
    });
    return found;
  }
  async function useFillCheckout(card, user, checkoutDetected = true) {
    const eventStore2 = useEventStore();
    let tab;
    try {
      tab = await appExtensionApi.message.send({ event: "getCurrentTab" });
      eventStore2.track({
        name: EXTENSION_EVENTS.FILL_CHECKOUT,
        data: { cardUuid: card.cardUuid, url: tab == null ? void 0 : tab.url }
      });
      if (!checkoutDetected) {
        eventStore2.track({
          name: EXTENSION_EVENTS.FILL_CHECKOUT_NO_FORM,
          data: { url: tab == null ? void 0 : tab.url }
        });
        throw new Error("Payment fields not found");
      } else {
        appExtensionApi.message.send({
          event: "fillCheckout",
          target: "checkout",
          payload: {
            cardUuid: card.cardUuid,
            pan: card.PAN,
            cvv: card.CVV,
            expMonth: card.expMonth,
            expYear: card.expYear,
            expiry: `${card.expMonth}/${card.expYear}`,
            ...user
          }
        });
      }
    } catch (err) {
      eventStore2.error([
        {
          name: EXTENSION_EVENTS.FILL_CHECKOUT,
          data: {
            cardUuid: card.cardUuid,
            url: tab == null ? void 0 : tab.url,
            error: err.message
          }
        }
      ]);
      popupAlert("Unable to fill checkout");
    }
  }
  async function useShowCollapsedCard(id, interstitial) {
    if (interstitial) {
      router.push({
        name: "card-collapsed",
        query: { uuid: id }
      });
      return;
    }
    await appExtensionApi.message.send({
      event: "removeInterstitial",
      target: "checkout"
    });
    appExtensionApi.message.send({
      target: "checkout",
      event: "showCollapsedCard",
      payload: { cardUuid: id }
    });
    window.close();
  }
  const _hoisted_1$1b = ["href"];
  const _hoisted_2$V = ["title"];
  const _sfc_main$1o = /* @__PURE__ */ defineComponent({
    __name: "BaseButton",
    props: {
      variant: { default: "primary" },
      size: null,
      to: null,
      title: null
    },
    setup(__props, { expose }) {
      const props = __props;
      const element = ref(null);
      const externalHostRegex = /^https?:\/\//i;
      const isExternalLink = computed(
        () => externalHostRegex.test(props.to)
      );
      const href = computed(() => props.to);
      const classes = computed(() => {
        const classes2 = {
          btn: true,
          [`btn-${props.variant}`]: props.variant
        };
        if (props.size) {
          classes2[`btn-${props.size}`] = true;
        }
        if (props.variant === "nav") {
          classes2["btn-icon"] = true;
          classes2["rounded-2"] = true;
        }
        return classes2;
      });
      expose({ element });
      return (_ctx, _cache) => {
        return unref(isExternalLink) ? (openBlock(), createElementBlock("a", {
          key: 0,
          href: unref(href),
          class: normalizeClass(unref(classes)),
          target: "_blank",
          ref: (el) => element.value = el
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 10, _hoisted_1$1b)) : __props.to ? (openBlock(), createBlock(unref(RouterLink), {
          key: 1,
          to: __props.to,
          class: normalizeClass(unref(classes)),
          ref: (el) => element.value = el
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["to", "class"])) : (openBlock(), createElementBlock("button", {
          key: 2,
          type: "button",
          title: props.title,
          class: normalizeClass(unref(classes)),
          ref: (el) => element.value = el
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 10, _hoisted_2$V));
      };
    }
  });
  const BaseButton_vue_vue_type_style_index_0_scoped_609c91ec_lang = "";
  const BaseButton = /* @__PURE__ */ _export_sfc(_sfc_main$1o, [["__scopeId", "data-v-609c91ec"]]);
  var CONTEXT = /* @__PURE__ */ ((CONTEXT2) => {
    CONTEXT2["POPUP"] = "popup";
    CONTEXT2["INTERSTITIAL"] = "interstitial";
    return CONTEXT2;
  })(CONTEXT || {});
  const _sfc_main$1n = {};
  const _hoisted_1$1a = {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$U = /* @__PURE__ */ createBaseVNode(
    "rect",
    {
      width: "32",
      height: "32",
      rx: "8",
      fill: "#D1D1DF"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$R = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11 10.8402C11 10.4611 11.4053 10.2199 11.7385 10.4007L21.23 15.5513C21.5784 15.7404 21.5788 16.2404 21.2306 16.4299L11.7391 21.5976C11.4059 21.779 11 21.5378 11 21.1585V10.8402Z",
      fill: "#323242"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_4$y = [
    _hoisted_2$U,
    _hoisted_3$R
  ];
  function _sfc_render$w(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1a, _hoisted_4$y);
  }
  const IconPlay$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1n, [["render", _sfc_render$w]]);
  const _sfc_main$1m = {};
  const _hoisted_1$19 = {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$T = /* @__PURE__ */ createBaseVNode(
    "rect",
    {
      width: "32",
      height: "32",
      rx: "8",
      fill: "#D1D1DF"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$Q = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M14 10H10V22H14V10ZM22 10H18V22H22V10Z",
      fill: "#323242"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_4$x = [
    _hoisted_2$T,
    _hoisted_3$Q
  ];
  function _sfc_render$v(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$19, _hoisted_4$x);
  }
  const IconPause$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1m, [["render", _sfc_render$v]]);
  const _sfc_main$1l = {};
  const _hoisted_1$18 = {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$S = /* @__PURE__ */ createBaseVNode(
    "rect",
    {
      width: "32",
      height: "32",
      rx: "8",
      fill: "#4949F2"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$P = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M8 11C8 10.4477 8.44772 10 9 10H23C23.5523 10 24 10.4477 24 11V12H8V11ZM8 14V21C8 21.5523 8.44772 22 9 22H23C23.5523 22 24 21.5523 24 21V14H8ZM10 18C10 17.4477 10.4477 17 11 17H13C13.5523 17 14 17.4477 14 18V19C14 19.5523 13.5523 20 13 20H11C10.4477 20 10 19.5523 10 19V18Z",
      fill: "white"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_4$w = [
    _hoisted_2$S,
    _hoisted_3$P
  ];
  function _sfc_render$u(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$18, _hoisted_4$w);
  }
  const IconAutofill = /* @__PURE__ */ _export_sfc(_sfc_main$1l, [["render", _sfc_render$u]]);
  const _hoisted_1$17 = {
    key: 0,
    "data-test": "card-list-item-loading"
  };
  const _hoisted_2$R = /* @__PURE__ */ createStaticVNode('<div class="row gx-0 align-items-center placeholder-glow px-4 py-2" data-v-ef6db6b8><div class="placeholder placeholder-logo me-2" data-v-ef6db6b8></div><div class="col-6" data-v-ef6db6b8><div class="rounded-1 placeholder col-12 mb-2" data-v-ef6db6b8></div><div class="rounded-1 placeholder col-6" data-v-ef6db6b8></div></div></div>', 1);
  const _hoisted_3$O = [
    _hoisted_2$R
  ];
  const _hoisted_4$v = { class: "d-flex min-w-0 w-100 align-items-center me-2" };
  const _hoisted_5$l = { class: "min-w-0 w-100" };
  const _hoisted_6$i = {
    class: "text-truncate fw-medium mb-1",
    "data-test": "card-list-item-name"
  };
  const _hoisted_7$g = {
    class: "pan",
    "data-test": "card-list-item-pan"
  };
  const _hoisted_8$e = { class: "d-flex align-items-center" };
  const _hoisted_9$9 = { class: "card-controls" };
  const _sfc_main$1k = /* @__PURE__ */ defineComponent({
    __name: "CardListItem",
    props: {
      cardUuid: null,
      user: null,
      loading: { type: Boolean, default: false },
      showUseCard: { type: Boolean }
    },
    setup(__props) {
      const props = __props;
      const cardsStore = useCardsStore();
      const eventStore2 = useEventStore();
      const interstitial = inject("context") === CONTEXT.INTERSTITIAL;
      const card = computed(() => cardsStore.card(props.cardUuid) || {});
      const cardUser = computed(
        () => props.user ? {
          name: props.user.firstName + " " + props.user.lastName,
          firstName: props.user.firstName,
          lastName: props.user.lastName,
          streetAddress: props.user.address1 + " " + props.user.address2,
          addressLine1: props.user.address1,
          addressLine2: props.user.address2,
          addressLevel2: props.user.city,
          addressLevel1: props.user.state,
          postalCode: props.user.zipcode
        } : {}
      );
      const nickname = useCardNickname(card);
      const isPaused = computed(() => card.value.state === CardState.PAUSED);
      const isOpen = computed(() => card.value.state === CardState.OPEN);
      const isClosed = computed(() => {
        return card.value.state === CardState.CLOSED_PENDING_REISSUE || card.value.state == CardState.CLOSED_REISSUED;
      });
      const labelText = computed(() => isPaused.value ? "Paused" : "Closed");
      async function fillAndRedirect() {
        await useFillCheckout(card.value, cardUser.value, true);
        useShowCollapsedCard(card.value.cardUuid, interstitial);
      }
      async function togglePause() {
        const state = isOpen.value ? CardState.PAUSED : CardState.OPEN;
        const event = state === CardState.OPEN ? CARD_EVENTS.PAUSED : CARD_EVENTS.RESUMED;
        try {
          await cardsStore.setState(card.value.cardUuid, { state });
          eventStore2.track({
            name: event,
            data: { cardUuid: card.value.cardUuid }
          });
          const status = state === CardState.OPEN ? "resumed" : state.toLowerCase();
          popupAlert("Card " + status, "success");
        } catch (err) {
          eventStore2.error([
            {
              name: event,
              data: {
                cardUuid: card.value.cardUuid,
                state,
                error: err
              }
            }
          ]);
          popupAlert("Unable to update card");
        }
      }
      return (_ctx, _cache) => {
        return __props.loading ? (openBlock(), createElementBlock("div", _hoisted_1$17, _hoisted_3$O)) : (openBlock(), createElementBlock(
          "div",
          {
            key: 1,
            class: normalizeClass(["card-list-item d-flex w-100 min-w-0 px-4 py-2", {
              "card-closed": unref(isClosed),
              "card-paused": unref(isPaused)
            }])
          },
          [
            createVNode(PrivacyCardLogo, {
              type: unref(card).type,
              mcc: unref(card).mcc,
              "mcc-icon-url": unref(card).mccIconUrl,
              style: normalizeStyle(unref(card).style),
              size: unref(CardLogoSize).LARGE,
              "merchant-category": unref(card).merchantCategory,
              class: "flex-shrink-0 me-3",
              "data-test": "card-list-item-logo"
            }, null, 8, ["type", "mcc", "mcc-icon-url", "style", "size", "merchant-category"]),
            createBaseVNode("div", _hoisted_4$v, [
              createBaseVNode("div", _hoisted_5$l, [
                createBaseVNode(
                  "div",
                  _hoisted_6$i,
                  toDisplayString(unref(nickname)),
                  1
                  /* TEXT */
                ),
                createBaseVNode(
                  "div",
                  _hoisted_7$g,
                  toDisplayString(unref(card).lastFour),
                  1
                  /* TEXT */
                )
              ])
            ]),
            createBaseVNode("div", _hoisted_8$e, [
              unref(isClosed) || unref(isPaused) ? (openBlock(), createBlock(BaseLabel, {
                key: 0,
                "data-test": "card-list-item-state",
                class: "card-label"
              }, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString(unref(labelText)),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })) : createCommentVNode("v-if", true),
              createBaseVNode("div", _hoisted_9$9, [
                createVNode(BaseButton, {
                  class: "card-state me-3",
                  variant: "icon",
                  size: "sm",
                  onClick: withModifiers(togglePause, ["stop", "prevent"]),
                  "data-test": "resume-pause",
                  title: unref(isOpen) ? "Pause Card" : "Resume card"
                }, {
                  default: withCtx(() => [
                    unref(isOpen) ? (openBlock(), createBlock(IconPause$1, {
                      key: 0,
                      "aria-label": "Pause card"
                    })) : createCommentVNode("v-if", true),
                    unref(isPaused) ? (openBlock(), createBlock(IconPlay$1, {
                      key: 1,
                      "aria-label": "Resume card"
                    })) : createCommentVNode("v-if", true)
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["onClick", "title"]),
                __props.showUseCard && !unref(isPaused) ? (openBlock(), createBlock(BaseButton, {
                  key: 0,
                  class: "autofill me-3",
                  variant: "icon",
                  size: "sm",
                  disabled: unref(isPaused),
                  onClick: withModifiers(fillAndRedirect, ["stop", "prevent"]),
                  "aria-label": "Fill payment form with this card",
                  title: "Fill payment form with this card"
                }, {
                  default: withCtx(() => [
                    createVNode(IconAutofill)
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled", "onClick"])) : createCommentVNode("v-if", true)
              ])
            ])
          ],
          2
          /* CLASS */
        ));
      };
    }
  });
  const CardListItem_vue_vue_type_style_index_0_scoped_ef6db6b8_lang = "";
  const CardListItem = /* @__PURE__ */ _export_sfc(_sfc_main$1k, [["__scopeId", "data-v-ef6db6b8"]]);
  const _sfc_main$1j = /* @__PURE__ */ defineComponent({
    __name: "BaseAlert",
    props: {
      variant: null
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock(
          "div",
          {
            class: normalizeClass(`alert alert-${__props.variant}`)
          },
          [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          2
          /* CLASS */
        );
      };
    }
  });
  const BaseAlert_vue_vue_type_style_index_0_scoped_27dcccb6_lang = "";
  const BaseAlert = /* @__PURE__ */ _export_sfc(_sfc_main$1j, [["__scopeId", "data-v-27dcccb6"]]);
  const _hoisted_1$16 = ["type", "value"];
  const _sfc_main$1i = /* @__PURE__ */ defineComponent({
    __name: "BaseInput",
    props: {
      modelValue: { default: "" },
      type: { default: "text" }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit: emit2 }) {
      const emitValue = ($event) => emit2("update:modelValue", $event.target.value);
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock("input", {
          type: __props.type,
          class: "form-control",
          value: __props.modelValue,
          onInput: emitValue
        }, null, 40, _hoisted_1$16);
      };
    }
  });
  const BaseInput_vue_vue_type_style_index_0_scoped_95127fbc_lang = "";
  const BaseInput = /* @__PURE__ */ _export_sfc(_sfc_main$1i, [["__scopeId", "data-v-95127fbc"]]);
  const _sfc_main$1h = {};
  const _hoisted_1$15 = {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$Q = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.7489 10.3347C12.5356 9.25973 13 7.9341 13 6.5C13 2.91015 10.0899 0 6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C7.9341 13 9.25973 12.5356 10.3347 11.7489L14.2929 15.7071L15.7071 14.2929L11.7489 10.3347ZM6.5 11C8.98528 11 11 8.98528 11 6.5C11 4.01472 8.98528 2 6.5 2C4.01472 2 2 4.01472 2 6.5C2 8.98528 4.01472 11 6.5 11Z",
      fill: "currentColor"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$N = [
    _hoisted_2$Q
  ];
  function _sfc_render$t(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$15, _hoisted_3$N);
  }
  const IconMagnifyingGlass = /* @__PURE__ */ _export_sfc(_sfc_main$1h, [["render", _sfc_render$t]]);
  const _hoisted_1$14 = { class: "input-group" };
  const _hoisted_2$P = {
    key: 0,
    class: "input-group-text pe-1"
  };
  const _hoisted_3$M = {
    key: 1,
    class: "input-group-text ps-1"
  };
  const _sfc_main$1g = /* @__PURE__ */ defineComponent({
    __name: "BaseInputGroup",
    props: {
      prefix: null,
      suffix: null
    },
    setup(__props) {
      const slots = useSlots();
      const hasPrefix = !!slots.prefix;
      const hasSuffix = !!slots.suffix;
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock("div", _hoisted_1$14, [
          hasPrefix || __props.prefix ? (openBlock(), createElementBlock("span", _hoisted_2$P, [
            renderSlot(_ctx.$slots, "prefix", {}, () => [
              createTextVNode(
                toDisplayString(__props.prefix),
                1
                /* TEXT */
              )
            ], true)
          ])) : createCommentVNode("v-if", true),
          renderSlot(_ctx.$slots, "default", {}, void 0, true),
          hasSuffix || __props.suffix ? (openBlock(), createElementBlock("span", _hoisted_3$M, [
            renderSlot(_ctx.$slots, "suffix", {}, () => [
              createTextVNode(
                toDisplayString(__props.suffix),
                1
                /* TEXT */
              )
            ], true)
          ])) : createCommentVNode("v-if", true)
        ]);
      };
    }
  });
  const BaseInputGroup_vue_vue_type_style_index_0_scoped_b6151d9f_lang = "";
  const BaseInputGroup = /* @__PURE__ */ _export_sfc(_sfc_main$1g, [["__scopeId", "data-v-b6151d9f"]]);
  const _withScopeId$g = (n) => (pushScopeId("data-v-a24065b1"), n = n(), popScopeId(), n);
  const _hoisted_1$13 = {
    key: 0,
    class: "user-prompt px-4"
  };
  const _hoisted_2$O = /* @__PURE__ */ _withScopeId$g(() => /* @__PURE__ */ createBaseVNode(
    "p",
    null,
    "Please complete onboarding to view and create cards.",
    -1
    /* HOISTED */
  ));
  const _hoisted_3$L = {
    key: 1,
    class: "user-prompt px-4"
  };
  const _hoisted_4$u = /* @__PURE__ */ _withScopeId$g(() => /* @__PURE__ */ createBaseVNode(
    "p",
    null,
    "You don't have any cards",
    -1
    /* HOISTED */
  ));
  const _hoisted_5$k = [
    _hoisted_4$u
  ];
  const _hoisted_6$h = { class: "px-4" };
  const _hoisted_7$f = {
    key: 0,
    class: "px-4 mb-3"
  };
  const _hoisted_8$d = /* @__PURE__ */ _withScopeId$g(() => /* @__PURE__ */ createBaseVNode(
    "h2",
    null,
    "Suggestions",
    -1
    /* HOISTED */
  ));
  const _hoisted_9$8 = [
    _hoisted_8$d
  ];
  const _hoisted_10$6 = {
    key: 1,
    class: "card-list mb-3",
    "data-test": "suggested-card-list"
  };
  const _hoisted_11$4 = {
    key: 2,
    class: "px-4 mb-3"
  };
  const _hoisted_12$4 = /* @__PURE__ */ _withScopeId$g(() => /* @__PURE__ */ createBaseVNode(
    "h2",
    null,
    "All Cards",
    -1
    /* HOISTED */
  ));
  const _hoisted_13$4 = [
    _hoisted_12$4
  ];
  const _hoisted_14$3 = ["aria-busy"];
  const _hoisted_15$3 = {
    key: 0,
    class: "card-loader"
  };
  const _hoisted_16$3 = {
    key: 4,
    class: "text-center text-body-secondary"
  };
  const _hoisted_17$2 = /* @__PURE__ */ _withScopeId$g(() => /* @__PURE__ */ createBaseVNode(
    "p",
    null,
    "No matching cards found",
    -1
    /* HOISTED */
  ));
  const _hoisted_18$2 = [
    _hoisted_17$2
  ];
  const _hoisted_19$2 = {
    key: 0,
    class: "visually-hidden"
  };
  const _hoisted_20$2 = {
    key: 3,
    class: "text-center"
  };
  const _sfc_main$1f = /* @__PURE__ */ defineComponent({
    __name: "CardsView",
    setup(__props) {
      const privacyUrl = "https://app.privacy.com";
      const router2 = useRouter();
      const route = useRoute();
      const cardsStore = useCardsStore();
      const userStore2 = useUserStore();
      const loadingError = ref("");
      const loader = ref(null);
      const loading = ref(true);
      const allDataLoaded = ref(false);
      const query = ref(route.query.q);
      const searching = ref(false);
      const initialLoad = ref(true);
      const paymentInputsFound = useFoundPaymentInputs();
      const suggestionsRoute = computed(() => route.name === "suggestions");
      const activeCardStates = [CardState.OPEN, CardState.PAUSED];
      const limit = 20;
      let offset = 0;
      let total = 0;
      const cards = ref(new Array(3).fill({}));
      const suggestedCards = ref([]);
      const showNoCards = computed(() => {
        return !cards.value.length && !loading.value && !loadingError.value && !query.value && !searching.value;
      });
      const userLoaded = computed(() => !!userStore2.user._id);
      const completedOnboarding = computed(() => userStore2.completedOnboarding);
      const user = computed(() => userStore2.user);
      const unwatch = watchEffect(() => {
        if (userLoaded.value && loader.value) {
          observeLoader();
          unwatch();
        }
      });
      const unwatchRoute = watch(
        () => route.query,
        async () => {
          query.value = route.query.q;
          reset();
          await loadCards();
          observeLoader(true);
        }
      );
      function search() {
        searching.value = true;
        debouncedUpdateQuery();
      }
      const debouncedUpdateQuery = debounce$1(updateQuery, 350);
      function updateQuery() {
        if (!query.value) {
          router2.push({ query: {} });
          return;
        }
        router2.push({ query: { q: query.value } });
        searching.value = false;
      }
      function reset() {
        initialLoad.value = true;
        allDataLoaded.value = false;
        offset = 0;
        total = 0;
      }
      async function loadSuggestedCards() {
        var _a;
        if (!await hasActivityConsent()) {
          return;
        }
        if (suggestionsRoute.value) {
          return;
        }
        try {
          const tab = await appExtensionApi.message.send(
            {
              event: "getCurrentTab"
            }
          );
          if (!((_a = tab == null ? void 0 : tab.url) == null ? void 0 : _a.startsWith("http"))) {
            return;
          }
          const url = new URL(tab.url);
          const host = url.hostname.replace("www.", "");
          const results = await cardsStore.list({
            limit,
            offset,
            query: host
          });
          suggestedCards.value = results.data.filter(
            (card) => activeCardStates.includes(card.state)
          );
        } catch (err) {
        }
      }
      async function loadCards() {
        loadingError.value = "";
        loading.value = true;
        try {
          const [results] = await Promise.all([
            cardsStore.list({
              limit,
              offset,
              query: query.value || void 0
            }),
            // If on the suggestions route this will exit early
            loadSuggestedCards()
          ]);
          const activeCards = results.data.filter(
            (card) => activeCardStates.includes(card.state) && !suggestedCards.value.some(
              (sgCard) => sgCard.cardUuid === card.cardUuid
            )
          );
          total = results.total;
          cards.value = initialLoad.value ? activeCards : [...cards.value, ...activeCards];
          offset += limit;
          if (offset >= total || activeCards.length < results.data.length) {
            allDataLoaded.value = true;
          }
        } catch (err) {
          if (initialLoad.value) {
            cards.value = [];
          }
          loadingError.value = "Unable to load cards";
        } finally {
          loading.value = false;
          initialLoad.value = false;
        }
      }
      async function observeLoader(observeOnly = false) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(async (entry) => {
            if (entry.isIntersecting || initialLoad.value) {
              observer.unobserve(loader.value);
              if (!observeOnly) {
                await loadCards();
                if (shouldRedirectToNewCard.value) {
                  unwatchRoute();
                  router2.replace({
                    name: "new-card",
                    params: { type: CardType.MERCHANT_LOCKED }
                  });
                  return;
                }
              }
              if (!allDataLoaded.value && !loadingError.value) {
                observeLoader();
              }
            }
          });
        });
        await nextTick();
        observer.observe(loader.value);
      }
      const shouldRedirectToNewCard = computed(() => {
        return suggestionsRoute.value && cards.value.length === 0;
      });
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock(
          Fragment,
          null,
          [
            unref(userLoaded) && !unref(completedOnboarding) ? (openBlock(), createElementBlock("div", _hoisted_1$13, [
              _hoisted_2$O,
              createVNode(BaseButton, {
                to: unref(privacyUrl),
                variant: "primary"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Complete Onboarding ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["to"])
            ])) : unref(showNoCards) ? (openBlock(), createElementBlock("div", _hoisted_3$L, _hoisted_5$k)) : unref(completedOnboarding) ? (openBlock(), createElementBlock(
              Fragment,
              { key: 2 },
              [
                createBaseVNode("div", _hoisted_6$h, [
                  !unref(suggestionsRoute) ? (openBlock(), createBlock(BaseInputGroup, {
                    key: 0,
                    class: "mb-3 cards-search"
                  }, {
                    prefix: withCtx(() => [
                      createVNode(IconMagnifyingGlass)
                    ]),
                    default: withCtx(() => [
                      createVNode(BaseInput, {
                        type: "search",
                        "aria-label": "Search cards",
                        placeholder: "Search",
                        modelValue: query.value,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => query.value = $event),
                        onInput: search
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  })) : createCommentVNode("v-if", true)
                ]),
                unref(suggestionsRoute) || suggestedCards.value.length ? (openBlock(), createElementBlock("div", _hoisted_7$f, _hoisted_9$8)) : createCommentVNode("v-if", true),
                suggestedCards.value.length ? (openBlock(), createElementBlock("ul", _hoisted_10$6, [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList(suggestedCards.value, (card, index) => {
                      return openBlock(), createElementBlock("li", {
                        key: card.cardUuid || index
                      }, [
                        card.cardUuid ? (openBlock(), createBlock(unref(RouterLink), {
                          key: 0,
                          class: "card-item-link",
                          to: { name: "card-details", params: { uuid: card.cardUuid } }
                        }, {
                          default: withCtx(() => [
                            createVNode(CardListItem, {
                              cardUuid: card.cardUuid,
                              "show-use-card": unref(paymentInputsFound)
                            }, null, 8, ["cardUuid", "show-use-card"])
                          ]),
                          _: 2
                          /* DYNAMIC */
                        }, 1032, ["to"])) : createCommentVNode("v-if", true)
                      ]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : createCommentVNode("v-if", true),
                !unref(suggestionsRoute) ? (openBlock(), createElementBlock("div", _hoisted_11$4, _hoisted_13$4)) : createCommentVNode("v-if", true),
                cards.value.length ? (openBlock(), createElementBlock("ul", {
                  key: 3,
                  class: "card-list",
                  "data-test": "card-list",
                  "aria-busy": loading.value
                }, [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList(cards.value, (card, index) => {
                      return openBlock(), createElementBlock(
                        "li",
                        {
                          key: card.cardUuid || index,
                          class: normalizeClass({ "card-loader": !card.cardUuid && initialLoad.value })
                        },
                        [
                          card.cardUuid ? (openBlock(), createBlock(unref(RouterLink), {
                            key: 0,
                            class: "card-item-link",
                            to: { name: "card-details", params: { uuid: card.cardUuid } }
                          }, {
                            default: withCtx(() => [
                              createVNode(CardListItem, {
                                cardUuid: card.cardUuid,
                                user: unref(user),
                                "show-use-card": unref(paymentInputsFound)
                              }, null, 8, ["cardUuid", "user", "show-use-card"])
                            ]),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["to"])) : (openBlock(), createBlock(CardListItem, {
                            key: 1,
                            loading: loading.value,
                            "aria-hidden": "true"
                          }, null, 8, ["loading"]))
                        ],
                        2
                        /* CLASS */
                      );
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  )),
                  loading.value && !initialLoad.value ? (openBlock(), createElementBlock("li", _hoisted_15$3, [
                    createVNode(CardListItem, {
                      loading: loading.value,
                      "aria-hidden": "true"
                    }, null, 8, ["loading"])
                  ])) : createCommentVNode("v-if", true)
                ], 8, _hoisted_14$3)) : !loadingError.value ? (openBlock(), createElementBlock("div", _hoisted_16$3, _hoisted_18$2)) : createCommentVNode("v-if", true),
                createBaseVNode(
                  "div",
                  {
                    ref_key: "loader",
                    ref: loader
                  },
                  [
                    loading.value ? (openBlock(), createElementBlock("span", _hoisted_19$2, "Loading cards...")) : createCommentVNode("v-if", true)
                  ],
                  512
                  /* NEED_PATCH */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            )) : createCommentVNode("v-if", true),
            loadingError.value ? (openBlock(), createElementBlock("div", _hoisted_20$2, [
              createVNode(BaseAlert, { variant: "warning" }, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString(loadingError.value),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(BaseButton, {
                variant: "primary",
                class: "mt-3",
                onClick: _cache[1] || (_cache[1] = () => observeLoader()),
                disabled: loading.value,
                "data-test": "retry"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Try again ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["disabled"])
            ])) : createCommentVNode("v-if", true)
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  });
  const CardsView_vue_vue_type_style_index_0_scoped_a24065b1_lang = "";
  const CardsView = /* @__PURE__ */ _export_sfc(_sfc_main$1f, [["__scopeId", "data-v-a24065b1"]]);
  var DisputeStates = /* @__PURE__ */ ((DisputeStates2) => {
    DisputeStates2["DISPUTE_OPEN"] = "DISPUTE_OPEN";
    DisputeStates2["DISPUTE_PENDING"] = "DISPUTE_PENDING";
    DisputeStates2["DISPUTE_REJECTED"] = "DISPUTE_REJECTED";
    DisputeStates2["DISPUTE_APPROVED"] = "DISPUTE_APPROVED";
    DisputeStates2["DISPUTE_CLOSED"] = "DISPUTE_CLOSED";
    DisputeStates2["CHARGEBACK_PENDING"] = "CHARGEBACK_PENDING";
    DisputeStates2["CHARGEBACK_APPROVED"] = "CHARGEBACK_APPROVED";
    DisputeStates2["CHARGEBACK_REJECTED"] = "CHARGEBACK_REJECTED";
    DisputeStates2["INTERNAL_CHARGEBACK_PENDING"] = "INTERNAL_CHARGEBACK_PENDING";
    DisputeStates2["INTERNAL_CHARGEBACK_APPROVED"] = "INTERNAL_CHARGEBACK_APPROVED";
    DisputeStates2["INTERNAL_CHARGEBACK_REJECTED"] = "INTERNAL_CHARGEBACK_REJECTED";
    DisputeStates2["ACTIVE"] = "ACTIVE";
    return DisputeStates2;
  })(DisputeStates || {});
  var TransactionResultFilter = /* @__PURE__ */ ((TransactionResultFilter2) => {
    TransactionResultFilter2["APPROVALS"] = "APPROVALS";
    TransactionResultFilter2["DECLINES"] = "DECLINES";
    TransactionResultFilter2["ALL"] = "ALL";
    return TransactionResultFilter2;
  })(TransactionResultFilter || {});
  var DeclineReasons = /* @__PURE__ */ ((DeclineReasons2) => {
    DeclineReasons2["CARD_PAUSED"] = "CARD_PAUSED";
    DeclineReasons2["CARD_CLOSED"] = "CARD_CLOSED";
    DeclineReasons2["GLOBAL_TRANSACTION_LIMIT"] = "GLOBAL_TRANSACTION_LIMIT";
    DeclineReasons2["GLOBAL_MONTHLY_LIMIT"] = "GLOBAL_MONTHLY_LIMIT";
    DeclineReasons2["USER_TRANSACTION_LIMIT"] = "USER_TRANSACTION_LIMIT";
    DeclineReasons2["UNAUTHORIZED_MERCHANT"] = "UNAUTHORIZED_MERCHANT";
    DeclineReasons2["SINGLE_USE_RECHARGED"] = "SINGLE_USE_RECHARGED";
    DeclineReasons2["BANK_CONNECTION_ERROR"] = "BANK_CONNECTION_ERROR";
    DeclineReasons2["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS";
    DeclineReasons2["INSUFFICIENT_FUNDS_JIT"] = "INSUFFICIENT_FUNDS_JIT";
    DeclineReasons2["MERCHANT_BLACKLIST"] = "MERCHANT_BLACKLIST";
    DeclineReasons2["INVALID_CARD_DETAILS"] = "INVALID_CARD_DETAILS";
    DeclineReasons2["BANK_NOT_VERIFIED"] = "BANK_NOT_VERIFIED";
    DeclineReasons2["ACCOUNT_STATE_REVIEW"] = "ACCOUNT_STATE_REVIEW";
    DeclineReasons2["INACTIVE_ACCOUNT"] = "INACTIVE_ACCOUNT";
    DeclineReasons2["ACCOUNT_STATE_TRANSACTION_FAIL"] = "ACCOUNT_STATE_TRANSACTION_FAIL";
    DeclineReasons2["FOREIGN_MERCHANT_VELOCITY"] = "FOREIGN_MERCHANT_VELOCITY";
    DeclineReasons2["MERCHANT_ABUSE"] = "MERCHANT_ABUSE";
    return DeclineReasons2;
  })(DeclineReasons || {});
  const useTransactionsStore = defineStore("transactions", () => {
    const transactionsState = ref({});
    const listsState = ref({});
    async function list2(params = {}) {
      const cacheKey = JSON.stringify(params);
      if (listsState.value[cacheKey]) {
        return {
          total: listsState.value[cacheKey].total,
          data: listsState.value[cacheKey].transactions.map(
            (txnUuid) => transactionsState.value[txnUuid]
          )
        };
      }
      const { data: data2 } = await list$1(params);
      const txnUuids = [];
      data2.data.forEach((txn) => {
        transactionsState.value[txn.transactionUuid] = txn;
        txnUuids.push(txn.transactionUuid);
      });
      listsState.value[cacheKey] = {
        total: data2.total,
        transactions: txnUuids
      };
      return data2;
    }
    return {
      // actions
      list: list2,
      // states
      lists: listsState,
      transactions: transactionsState
    };
  });
  const _sfc_main$1e = {};
  const _hoisted_1$12 = {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$N = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      d: "M2 5L8 11L14 5",
      stroke: "currentColor",
      "stroke-width": "2"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$K = [
    _hoisted_2$N
  ];
  function _sfc_render$s(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$12, _hoisted_3$K);
  }
  const IconChevronDown = /* @__PURE__ */ _export_sfc(_sfc_main$1e, [["render", _sfc_render$s]]);
  var dayjs_minExports = {};
  var dayjs_min = {
    get exports() {
      return dayjs_minExports;
    },
    set exports(v) {
      dayjs_minExports = v;
    }
  };
  (function(module, exports) {
    !function(t, e) {
      module.exports = e();
    }(commonjsGlobal, function() {
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h2 = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m = function(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, v = { s: m, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date())
          return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: c, y: h2, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p2 = function(t2) {
        return t2 instanceof b;
      }, S = function t2(e2, n2, r2) {
        var i2;
        if (!e2)
          return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1)
            return t2(u2[0]);
        } else {
          var a2 = e2.name;
          D[a2] = e2, i2 = a2;
        }
        return !r2 && i2 && (g = i2), i2 || !r2 && g;
      }, w = function(t2, e2) {
        if (p2(t2))
          return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new b(n2);
      }, O = v;
      O.l = S, O.i = p2, O.w = function(t2, e2) {
        return w(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var b = function() {
        function M2(t2) {
          this.$L = S(t2.locale, null, true), this.parse(t2);
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2)
              return new Date(NaN);
            if (O.u(e2))
              return new Date();
            if (e2 instanceof Date)
              return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r2 = e2.match($);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e2);
          }(t2), this.$x = t2.x || {}, this.init();
        }, m2.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m2.$utils = function() {
          return O;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t2, e2) {
          var n2 = w(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m2.isAfter = function(t2, e2) {
          return w(t2) < this.startOf(e2);
        }, m2.isBefore = function(t2, e2) {
          return this.endOf(e2) < w(t2);
        }, m2.$g = function(t2, e2, n2) {
          return O.u(t2) ? this[e2] : this.set(n2, t2);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t2, e2) {
          var n2 = this, r2 = !!O.u(e2) || e2, f2 = O.p(t2), l2 = function(t3, e3) {
            var i2 = O.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a);
          }, $2 = function(t3, e3) {
            return O.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f2) {
            case h2:
              return r2 ? l2(1, 0) : l2(31, 11);
            case c:
              return r2 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $2(v2 + "Hours", 0);
            case u:
              return $2(v2 + "Minutes", 1);
            case s:
              return $2(v2 + "Seconds", 2);
            case i:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e2) {
          var n2, o2 = O.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h2] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h2) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else
            l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m2.get = function(t2) {
          return this[O.p(t2)]();
        }, m2.add = function(r2, f2) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $2 = O.p(f2), y2 = function(t2) {
            var e2 = w(l2);
            return O.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
          };
          if ($2 === c)
            return this.set(c, this.$M + r2);
          if ($2 === h2)
            return this.set(h2, this.$y + r2);
          if ($2 === a)
            return y2(1);
          if ($2 === o)
            return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
          return O.w(m3, this);
        }, m2.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m2.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid())
            return n2.invalidDate || l;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = O.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h3 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return O.s(s2 % 12 || 12, t3, "0");
          }, $2 = f2 || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          };
          return r2.replace(y, function(t3, r3) {
            return r3 || function(t4) {
              switch (t4) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return O.s(e2.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return O.s(a2 + 1, 2, "0");
                case "MMM":
                  return h3(n2.monthsShort, a2, c2, 3);
                case "MMMM":
                  return h3(c2, a2);
                case "D":
                  return e2.$D;
                case "DD":
                  return O.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h3(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h3(n2.weekdaysShort, e2.$W, o2, 3);
                case "dddd":
                  return o2[e2.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return O.s(s2, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $2(s2, u2, true);
                case "A":
                  return $2(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return O.s(u2, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return O.s(e2.$s, 2, "0");
                case "SSS":
                  return O.s(e2.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            }(t3) || i2.replace(":", "");
          });
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r2, d2, l2) {
          var $2, y2 = this, M3 = O.p(d2), m3 = w(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
            return O.m(y2, m3);
          };
          switch (M3) {
            case h2:
              $2 = D2() / 12;
              break;
            case c:
              $2 = D2();
              break;
            case f:
              $2 = D2() / 3;
              break;
            case o:
              $2 = (g2 - v2) / 6048e5;
              break;
            case a:
              $2 = (g2 - v2) / 864e5;
              break;
            case u:
              $2 = g2 / n;
              break;
            case s:
              $2 = g2 / e;
              break;
            case i:
              $2 = g2 / t;
              break;
            default:
              $2 = g2;
          }
          return l2 ? $2 : O.a($2);
        }, m2.daysInMonth = function() {
          return this.endOf(c).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t2, e2) {
          if (!t2)
            return this.$L;
          var n2 = this.clone(), r2 = S(t2, e2, true);
          return r2 && (n2.$L = r2), n2;
        }, m2.clone = function() {
          return O.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      }(), _ = b.prototype;
      return w.prototype = _, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h2], ["$D", d]].forEach(function(t2) {
        _[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      }), w.extend = function(t2, e2) {
        return t2.$i || (t2(e2, b, w), t2.$i = true), w;
      }, w.locale = S, w.isDayjs = p2, w.unix = function(t2) {
        return w(1e3 * t2);
      }, w.en = D[g], w.Ls = D, w.p = {}, w;
    });
  })(dayjs_min);
  const dayjs = dayjs_minExports;
  var utcExports = {};
  var utc = {
    get exports() {
      return utcExports;
    },
    set exports(v) {
      utcExports = v;
    }
  };
  (function(module, exports) {
    !function(t, i) {
      module.exports = i();
    }(commonjsGlobal, function() {
      var t = "minute", i = /[+-]\d\d(?::?\d\d)?/g, e = /([+-]|\d\d)/g;
      return function(s, f, n) {
        var u = f.prototype;
        n.utc = function(t2) {
          var i2 = { date: t2, utc: true, args: arguments };
          return new f(i2);
        }, u.utc = function(i2) {
          var e2 = n(this.toDate(), { locale: this.$L, utc: true });
          return i2 ? e2.add(this.utcOffset(), t) : e2;
        }, u.local = function() {
          return n(this.toDate(), { locale: this.$L, utc: false });
        };
        var o = u.parse;
        u.parse = function(t2) {
          t2.utc && (this.$u = true), this.$utils().u(t2.$offset) || (this.$offset = t2.$offset), o.call(this, t2);
        };
        var r = u.init;
        u.init = function() {
          if (this.$u) {
            var t2 = this.$d;
            this.$y = t2.getUTCFullYear(), this.$M = t2.getUTCMonth(), this.$D = t2.getUTCDate(), this.$W = t2.getUTCDay(), this.$H = t2.getUTCHours(), this.$m = t2.getUTCMinutes(), this.$s = t2.getUTCSeconds(), this.$ms = t2.getUTCMilliseconds();
          } else
            r.call(this);
        };
        var a = u.utcOffset;
        u.utcOffset = function(s2, f2) {
          var n2 = this.$utils().u;
          if (n2(s2))
            return this.$u ? 0 : n2(this.$offset) ? a.call(this) : this.$offset;
          if ("string" == typeof s2 && (s2 = function(t2) {
            void 0 === t2 && (t2 = "");
            var s3 = t2.match(i);
            if (!s3)
              return null;
            var f3 = ("" + s3[0]).match(e) || ["-", 0, 0], n3 = f3[0], u3 = 60 * +f3[1] + +f3[2];
            return 0 === u3 ? 0 : "+" === n3 ? u3 : -u3;
          }(s2), null === s2))
            return this;
          var u2 = Math.abs(s2) <= 16 ? 60 * s2 : s2, o2 = this;
          if (f2)
            return o2.$offset = u2, o2.$u = 0 === s2, o2;
          if (0 !== s2) {
            var r2 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
            (o2 = this.local().add(u2 + r2, t)).$offset = u2, o2.$x.$localOffset = r2;
          } else
            o2 = this.utc();
          return o2;
        };
        var h2 = u.format;
        u.format = function(t2) {
          var i2 = t2 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return h2.call(this, i2);
        }, u.valueOf = function() {
          var t2 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * t2;
        }, u.isUTC = function() {
          return !!this.$u;
        }, u.toISOString = function() {
          return this.toDate().toISOString();
        }, u.toString = function() {
          return this.toDate().toUTCString();
        };
        var l = u.toDate;
        u.toDate = function(t2) {
          return "s" === t2 && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this);
        };
        var c = u.diff;
        u.diff = function(t2, i2, e2) {
          if (t2 && this.$u === t2.$u)
            return c.call(this, t2, i2, e2);
          var s2 = this.local(), f2 = n(t2).local();
          return c.call(s2, f2, i2, e2);
        };
      };
    });
  })(utc);
  const dayjsUtc = utcExports;
  dayjs.extend(dayjsUtc);
  function getDate(date, inputFormat) {
    return dayjs(date, inputFormat);
  }
  function utcDate(date, inputFormat) {
    return getDate(date, inputFormat).utc();
  }
  function formatCurrency(value, options = {}) {
    const locale = options.locale || "en-US";
    const formatOptions = {
      currency: "USD",
      ...options.formatOptions,
      style: "currency"
    };
    let num = value;
    if (typeof num === "string") {
      num = Number(num);
    }
    if (isNaN(num)) {
      throw new Error("Invalid number");
    }
    return new Intl.NumberFormat(locale, formatOptions).format(num);
  }
  const declineReasonMap = {
    [DeclineReasons.CARD_PAUSED]: "Card was paused at time of transaction.",
    [DeclineReasons.CARD_CLOSED]: "Card was closed at time of transaction.",
    [DeclineReasons.GLOBAL_TRANSACTION_LIMIT]: "Transaction exceeded your global spend limit.",
    [DeclineReasons.GLOBAL_MONTHLY_LIMIT]: "Transaction exceeded your monthly spend limit.",
    [DeclineReasons.USER_TRANSACTION_LIMIT]: "Transaction exceeded your card's spend limit.",
    [DeclineReasons.UNAUTHORIZED_MERCHANT]: "An unauthorized merchant charged your card.",
    [DeclineReasons.SINGLE_USE_RECHARGED]: "A single-use card was charged multiple times.",
    [DeclineReasons.BANK_CONNECTION_ERROR]: "We were unable to connect to your funding source.",
    [DeclineReasons.INSUFFICIENT_FUNDS]: "Your funding source didn't appear to have enough funds for this transaction.",
    [DeclineReasons.INSUFFICIENT_FUNDS_JIT]: "Your funding source didn't appear to have enough funds for this transaction.",
    [DeclineReasons.MERCHANT_BLACKLIST]: "This merchant is not permitted to make charges on Privacy cards.",
    [DeclineReasons.INVALID_CARD_DETAILS]: "Incorrect card details. The card form may have been filled out incorrectly.",
    [DeclineReasons.BANK_NOT_VERIFIED]: "Your funding source had not yet been verified.",
    [DeclineReasons.ACCOUNT_STATE_REVIEW]: "Your account was paused at the time of this transaction.",
    [DeclineReasons.INACTIVE_ACCOUNT]: "Your account was paused at the time of this transaction.",
    [DeclineReasons.ACCOUNT_STATE_TRANSACTION_FAIL]: "Your account was paused at the time of this transaction.",
    [DeclineReasons.FOREIGN_MERCHANT_VELOCITY]: "Your account was paused at the time of this transaction.",
    [DeclineReasons.MERCHANT_ABUSE]: "Suspicious merchant activity"
  };
  function parseDeclineReason(reasonCode) {
    return declineReasonMap[reasonCode] ?? "Declined";
  }
  const _sfc_main$1d = {};
  const _hoisted_1$11 = {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$M = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      d: "M14 3H6C3.79086 3 2 4.79086 2 7V7C2 9.20914 3.79086 11 6 11H13",
      stroke: "currentColor",
      "stroke-width": "2"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$J = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      d: "M9 7L13 11L9 15",
      stroke: "currentColor",
      "stroke-width": "2"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_4$t = [
    _hoisted_2$M,
    _hoisted_3$J
  ];
  function _sfc_render$r(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$11, _hoisted_4$t);
  }
  const IconReturn = /* @__PURE__ */ _export_sfc(_sfc_main$1d, [["render", _sfc_render$r]]);
  var top = "top";
  var bottom = "bottom";
  var right = "right";
  var left = "left";
  var auto = "auto";
  var basePlacements = [top, bottom, right, left];
  var start = "start";
  var end = "end";
  var clippingParents = "clippingParents";
  var viewport = "viewport";
  var popper = "popper";
  var reference = "reference";
  var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []);
  var beforeRead = "beforeRead";
  var read = "read";
  var afterRead = "afterRead";
  var beforeMain = "beforeMain";
  var main = "main";
  var afterMain = "afterMain";
  var beforeWrite = "beforeWrite";
  var write = "write";
  var afterWrite = "afterWrite";
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
  function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
  }
  function getWindow(node) {
    if (node == null) {
      return window;
    }
    if (node.toString() !== "[object Window]") {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
  }
  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }
  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }
  function isShadowRoot(node) {
    if (typeof ShadowRoot === "undefined") {
      return false;
    }
    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }
  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name];
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(name2) {
        var value = attributes[name2];
        if (value === false) {
          element.removeAttribute(name2);
        } else {
          element.setAttribute(name2, value === true ? "" : value);
        }
      });
    });
  }
  function effect$1(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
    return function() {
      Object.keys(state.elements).forEach(function(name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
        var style = styleProperties.reduce(function(style2, property) {
          style2[property] = "";
          return style2;
        }, {});
        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  }
  const applyStyles$1 = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect: effect$1,
    requires: ["computeStyles"]
  };
  function getBasePlacement(placement) {
    return placement.split("-")[0];
  }
  var max = Math.max;
  var min = Math.min;
  var round = Math.round;
  function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
      return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
      }).join(" ");
    }
    return navigator.userAgent;
  }
  function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString());
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && isHTMLElement(element)) {
      scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
      scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
      width,
      height,
      top: y,
      right: x + width,
      bottom: y + height,
      left: x,
      x,
      y
    };
  }
  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element);
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }
    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }
    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width,
      height
    };
  }
  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode();
    if (parent.contains(child)) {
      return true;
    } else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;
      do {
        if (next && parent.isSameNode(next)) {
          return true;
        }
        next = next.parentNode || next.host;
      } while (next);
    }
    return false;
  }
  function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function isTableElement(element) {
    return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
  }
  function getDocumentElement(element) {
    return ((isElement(element) ? element.ownerDocument : (
      // $FlowFixMe[prop-missing]
      element.document
    )) || window.document).documentElement;
  }
  function getParentNode(element) {
    if (getNodeName(element) === "html") {
      return element;
    }
    return (
      // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || // DOM Element detected
      (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element)
    );
  }
  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle$1(element).position === "fixed") {
      return null;
    }
    return element.offsetParent;
  }
  function getContainingBlock(element) {
    var isFirefox2 = /firefox/i.test(getUAString());
    var isIE = /Trident/i.test(getUAString());
    if (isIE && isHTMLElement(element)) {
      var elementCss = getComputedStyle$1(element);
      if (elementCss.position === "fixed") {
        return null;
      }
    }
    var currentNode = getParentNode(element);
    if (isShadowRoot(currentNode)) {
      currentNode = currentNode.host;
    }
    while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle$1(currentNode);
      if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox2 && css.willChange === "filter" || isFirefox2 && css.filter && css.filter !== "none") {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }
    return null;
  }
  function getOffsetParent(element) {
    var window2 = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
      offsetParent = getTrueOffsetParent(offsetParent);
    }
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static")) {
      return window2;
    }
    return offsetParent || getContainingBlock(element) || window2;
  }
  function getMainAxisFromPlacement(placement) {
    return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
  }
  function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1));
  }
  function withinMaxClamp(min2, value, max2) {
    var v = within(min2, value, max2);
    return v > max2 ? max2 : v;
  }
  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }
  function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }
  function getVariation(placement) {
    return placement.split("-")[1];
  }
  var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x, y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(x * dpr) / dpr || 0,
      y: round(y * dpr) / dpr || 0
    };
  }
  function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
      x,
      y
    }) : {
      x,
      y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = left;
    var sideY = top;
    var win = window;
    if (adaptive) {
      var offsetParent = getOffsetParent(popper2);
      var heightProp = "clientHeight";
      var widthProp = "clientWidth";
      if (offsetParent === getWindow(popper2)) {
        offsetParent = getDocumentElement(popper2);
        if (getComputedStyle$1(offsetParent).position !== "static" && position === "absolute") {
          heightProp = "scrollHeight";
          widthProp = "scrollWidth";
        }
      }
      offsetParent = offsetParent;
      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom;
        var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
          // $FlowFixMe[prop-missing]
          offsetParent[heightProp]
        );
        y -= offsetY - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }
      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right;
        var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
          // $FlowFixMe[prop-missing]
          offsetParent[widthProp]
        );
        x -= offsetX - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }
    var commonStyles = Object.assign({
      position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
      x,
      y
    }, getWindow(popper2)) : {
      x,
      y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
      var _Object$assign;
      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
  }
  function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration,
      isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive,
        roundOffsets
      })));
    }
    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets
      })));
    }
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-placement": state.placement
    });
  }
  const computeStyles$1 = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
  };
  var passive = {
    passive: true
  };
  function effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window2 = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.addEventListener("resize", instance.update, passive);
    }
    return function() {
      if (scroll) {
        scrollParents.forEach(function(scrollParent) {
          scrollParent.removeEventListener("scroll", instance.update, passive);
        });
      }
      if (resize) {
        window2.removeEventListener("resize", instance.update, passive);
      }
    };
  }
  const eventListeners = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {
    },
    effect,
    data: {}
  };
  var hash$1 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
      return hash$1[matched];
    });
  }
  var hash = {
    start: "end",
    end: "start"
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
      return hash[matched];
    });
  }
  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft,
      scrollTop
    };
  }
  function getWindowScrollBarX(element) {
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }
  function getViewportRect(element, strategy) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      var layoutViewport = isLayoutViewport();
      if (layoutViewport || !layoutViewport && strategy === "fixed") {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x: x + getWindowScrollBarX(element),
      y
    };
  }
  function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;
    if (getComputedStyle$1(body || html).direction === "rtl") {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }
    return {
      width,
      height,
      x,
      y
    };
  }
  function isScrollParent(element) {
    var _getComputedStyle = getComputedStyle$1(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }
  function getScrollParent(node) {
    if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
      return node.ownerDocument.body;
    }
    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }
    return getScrollParent(getParentNode(node));
  }
  function listScrollParents(element, list2) {
    var _element$ownerDocumen;
    if (list2 === void 0) {
      list2 = [];
    }
    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list2.concat(target);
    return isBody ? updatedList : (
      // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
      updatedList.concat(listScrollParents(getParentNode(target)))
    );
  }
  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }
  function getInnerBoundingClientRect(element, strategy) {
    var rect = getBoundingClientRect(element, false, strategy === "fixed");
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }
  function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  }
  function getClippingParents(element) {
    var clippingParents2 = listScrollParents(getParentNode(element));
    var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle$1(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
    if (!isElement(clipperElement)) {
      return [];
    }
    return clippingParents2.filter(function(clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
    });
  }
  function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents2[0];
    var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }
  function computeOffsets(_ref) {
    var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference2.x + reference2.width / 2 - element.width / 2;
    var commonY = reference2.y + reference2.height / 2 - element.height / 2;
    var offsets;
    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference2.y - element.height
        };
        break;
      case bottom:
        offsets = {
          x: commonX,
          y: reference2.y + reference2.height
        };
        break;
      case right:
        offsets = {
          x: reference2.x + reference2.width,
          y: commonY
        };
        break;
      case left:
        offsets = {
          x: reference2.x - element.width,
          y: commonY
        };
        break;
      default:
        offsets = {
          x: reference2.x,
          y: reference2.y
        };
    }
    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
    if (mainAxis != null) {
      var len = mainAxis === "y" ? "height" : "width";
      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
          break;
        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
          break;
      }
    }
    return offsets;
  }
  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets2 = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: "absolute",
      placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset;
    if (elementContext === popper && offsetData) {
      var offset = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function(key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
        overflowOffsets[key] += offset[axis] * multiply;
      });
    }
    return overflowOffsets;
  }
  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
      return getVariation(placement2) === variation;
    }) : basePlacements;
    var allowedPlacements = placements$1.filter(function(placement2) {
      return allowedAutoPlacements.indexOf(placement2) >= 0;
    });
    if (allowedPlacements.length === 0) {
      allowedPlacements = placements$1;
    }
    var overflows = allowedPlacements.reduce(function(acc, placement2) {
      acc[placement2] = detectOverflow(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding
      })[getBasePlacement(placement2)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
      return overflows[a] - overflows[b];
    });
  }
  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }
    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }
  function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) {
      return;
    }
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
      return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding,
        flipVariations,
        allowedAutoPlacements
      }) : placement2);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = /* @__PURE__ */ new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements2[0];
    for (var i = 0; i < placements2.length; i++) {
      var placement = placements2[i];
      var _basePlacement = getBasePlacement(placement);
      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? "width" : "height";
      var overflow = detectOverflow(state, {
        placement,
        boundary,
        rootBoundary,
        altBoundary,
        padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }
      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];
      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }
      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }
      if (checks.every(function(check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }
      checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
      var numberOfChecks = flipVariations ? 3 : 1;
      var _loop = function _loop2(_i2) {
        var fittingPlacement = placements2.find(function(placement2) {
          var checks2 = checksMap.get(placement2);
          if (checks2) {
            return checks2.slice(0, _i2).every(function(check) {
              return check;
            });
          }
        });
        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };
      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);
        if (_ret === "break")
          break;
      }
    }
    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  }
  const flip$1 = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: ["offset"],
    data: {
      _skip: false
    }
  };
  function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: "absolute",
      placement: state.placement
    });
  }
  const popperOffsets$1 = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
  };
  function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
  }
  function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary,
      rootBoundary,
      padding,
      altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
      mainAxis: tetherOffsetValue,
      altAxis: tetherOffsetValue
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data2 = {
      x: 0,
      y: 0
    };
    if (!popperOffsets2) {
      return;
    }
    if (checkMainAxis) {
      var _offsetModifierState$;
      var mainSide = mainAxis === "y" ? top : left;
      var altSide = mainAxis === "y" ? bottom : right;
      var len = mainAxis === "y" ? "height" : "width";
      var offset = popperOffsets2[mainAxis];
      var min$1 = offset + overflow[mainSide];
      var max$1 = offset - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide];
      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
      var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = offset + maxOffset - offsetModifierValue;
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets2[mainAxis] = preventedOffset;
      data2[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
      var _offsetModifierState$2;
      var _mainSide = mainAxis === "x" ? top : left;
      var _altSide = mainAxis === "x" ? bottom : right;
      var _offset = popperOffsets2[altAxis];
      var _len = altAxis === "y" ? "height" : "width";
      var _min = _offset + overflow[_mainSide];
      var _max = _offset - overflow[_altSide];
      var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
      var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
      var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
      var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
      var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
      popperOffsets2[altAxis] = _preventedOffset;
      data2[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data2;
  }
  const preventOverflow$1 = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: ["offset"]
  };
  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }
  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = round(rect.width) / element.offsetWidth || 1;
    var scaleY = round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  }
  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }
  function order(modifiers) {
    var map = /* @__PURE__ */ new Map();
    var visited = /* @__PURE__ */ new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
      map.set(modifier.name, modifier);
    });
    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function(dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);
          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
      if (!visited.has(modifier.name)) {
        sort(modifier);
      }
    });
    return result;
  }
  function orderModifiers(modifiers) {
    var orderedModifiers = order(modifiers);
    return modifierPhases.reduce(function(acc, phase) {
      return acc.concat(orderedModifiers.filter(function(modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }
  function debounce(fn) {
    var pending;
    return function() {
      if (!pending) {
        pending = new Promise(function(resolve2) {
          Promise.resolve().then(function() {
            pending = void 0;
            resolve2(fn());
          });
        });
      }
      return pending;
    };
  }
  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged2, current) {
      var existing = merged2[current.name];
      merged2[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged2;
    }, {});
    return Object.keys(merged).map(function(key) {
      return merged[key];
    });
  }
  var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return !args.some(function(element) {
      return !(element && typeof element.getBoundingClientRect === "function");
    });
  }
  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper2(reference2, popper2, options) {
      if (options === void 0) {
        options = defaultOptions;
      }
      var state = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference2,
          popper: popper2
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state,
        setOptions: function setOptions(setOptionsAction) {
          var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options2);
          state.scrollParents = {
            reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
            popper: listScrollParents(popper2)
          };
          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
          state.orderedModifiers = orderedModifiers.filter(function(m) {
            return m.enabled;
          });
          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }
          var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
          if (!areValidElements(reference3, popper3)) {
            return;
          }
          state.rects = {
            reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
            popper: getLayoutRect(popper3)
          };
          state.reset = false;
          state.placement = state.options.placement;
          state.orderedModifiers.forEach(function(modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });
          for (var index = 0; index < state.orderedModifiers.length; index++) {
            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }
            var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
            if (typeof fn === "function") {
              state = fn({
                state,
                options: _options,
                name,
                instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function() {
          return new Promise(function(resolve2) {
            instance.forceUpdate();
            resolve2(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };
      if (!areValidElements(reference2, popper2)) {
        return instance;
      }
      instance.setOptions(options).then(function(state2) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state2);
        }
      });
      function runModifierEffects() {
        state.orderedModifiers.forEach(function(_ref) {
          var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect2 = _ref.effect;
          if (typeof effect2 === "function") {
            var cleanupFn = effect2({
              state,
              name,
              instance,
              options: options2
            });
            var noopFn = function noopFn2() {
            };
            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }
      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function(fn) {
          return fn();
        });
        effectCleanupFns = [];
      }
      return instance;
    };
  }
  var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
  var createPopper = /* @__PURE__ */ popperGenerator({
    defaultModifiers
  });
  const _hoisted_1$10 = ["aria-hidden"];
  const __default__$4 = {
    inheritAttrs: false
  };
  const _sfc_main$1c = /* @__PURE__ */ defineComponent({
    ...__default__$4,
    __name: "BaseTooltip",
    props: {
      tag: { default: "div" },
      tooltip: null,
      variant: { default: "info" }
    },
    setup(__props) {
      let popper2 = null;
      const id = `tooltip-${Math.random().toString(36).substring(2)}`;
      const visible = ref(false);
      const tooltipEl = ref(null);
      const triggerEl = ref(null);
      const updateTooltip = async (show = true) => {
        if (!popper2) {
          popper2 = createPopper(triggerEl.value, tooltipEl.value, {
            placement: "top-end",
            modifiers: [flip$1, preventOverflow$1]
          });
        }
        visible.value = show;
        await nextTick();
        popper2.update();
      };
      watchEffect(() => {
        if (triggerEl.value) {
          triggerEl.value.addEventListener("mouseenter", () => {
            updateTooltip(true);
          });
          triggerEl.value.addEventListener("mouseleave", () => {
            updateTooltip(false);
          });
        }
      });
      onUnmounted(() => {
        popper2 == null ? void 0 : popper2.destroy();
      });
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock(
          Fragment,
          null,
          [
            (openBlock(), createBlock(
              resolveDynamicComponent(__props.tag),
              mergeProps({
                ref_key: "triggerEl",
                ref: triggerEl
              }, _ctx.$attrs, { "aria-describedby": id }),
              {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {}, void 0, true)
                ]),
                _: 3
                /* FORWARDED */
              },
              16
              /* FULL_PROPS */
            )),
            createBaseVNode("div", {
              class: normalizeClass(["tooltip fw-medium", [__props.variant, { show: visible.value }]]),
              ref_key: "tooltipEl",
              ref: tooltipEl,
              "aria-hidden": !visible.value,
              id
            }, [
              renderSlot(_ctx.$slots, "content", {}, () => [
                createTextVNode(
                  toDisplayString(__props.tooltip),
                  1
                  /* TEXT */
                )
              ], true)
            ], 10, _hoisted_1$10)
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  });
  const BaseTooltip_vue_vue_type_style_index_0_scoped_2df407ba_lang = "";
  const BaseTooltip = /* @__PURE__ */ _export_sfc(_sfc_main$1c, [["__scopeId", "data-v-2df407ba"]]);
  const _hoisted_1$$ = {
    key: 0,
    class: "transaction",
    "data-test": "txn-list-item-loading"
  };
  const _hoisted_2$L = /* @__PURE__ */ createStaticVNode('<div class="row gx-0 align-items-center placeholder-glow" data-v-5821a13f><div class="placeholder placeholder-logo me-2" data-v-5821a13f></div><div class="col-6" data-v-5821a13f><div class="rounded-1 placeholder col-12 mb-2" data-v-5821a13f></div><div class="rounded-1 placeholder col-6" data-v-5821a13f></div></div><div class="col-2 ms-4" data-v-5821a13f><div class="rounded-1 placeholder col-12" data-v-5821a13f></div></div></div>', 1);
  const _hoisted_3$I = [
    _hoisted_2$L
  ];
  const _hoisted_4$s = {
    key: 1,
    class: "me-3"
  };
  const _hoisted_5$j = { class: "description min-w-0 w-100" };
  const _hoisted_6$g = {
    class: "descriptor text-truncate mb-1",
    "data-test": "txn-list-item-descriptor"
  };
  const _hoisted_7$e = {
    class: "date",
    "data-test": "txn-list-item-date"
  };
  const _sfc_main$1b = /* @__PURE__ */ defineComponent({
    __name: "TransactionListItem",
    props: {
      transaction: null,
      loading: { type: Boolean, default: false },
      showCardLink: { type: Boolean, default: true }
    },
    setup(__props) {
      const props = __props;
      const transaction = computed(() => props.transaction || {});
      const txnDateFormatted = computed(() => {
        const date = transaction.value.dateAuthorized || transaction.value.dateSettled || "";
        return date ? utcDate(date).local().format("MMM D, h:mma") : null;
      });
      const hasRefunds = computed(() => {
        const { amount, refunds = [] } = transaction.value;
        return amount >= 0 && refunds.length > 0;
      });
      const amountFormatted = computed(() => {
        var _a;
        const amount = transaction.value.amount || 0;
        const promoCredit = transaction.value.promoCreditAmount || 0;
        const originalAuthAmount = (_a = transaction.value.originalAuth) == null ? void 0 : _a.amount;
        if (hasRefunds.value && originalAuthAmount) {
          return originalAuthAmount;
        }
        return formatCurrency((amount - promoCredit) / 100);
      });
      const isRefunded = computed(() => {
        return transaction.value.state === DisputeStates.DISPUTE_CLOSED || transaction.value.amount < 0;
      });
      const isPending = computed(() => {
        return transaction.value.state === DisputeStates.ACTIVE && !transaction.value.dateSettled;
      });
      const isDecline = computed(() => {
        return !!transaction.value.declineReason;
      });
      const transactionClasses = computed(() => {
        const { accepted, achResult, dateSettled, hasBounced, state } = transaction.value;
        return {
          blocked: !accepted,
          bounced: hasBounced,
          offset: achResult === "-2",
          refunded: isRefunded.value,
          unconfirmed: state === DisputeStates.ACTIVE && !dateSettled
        };
      });
      const tooltipText = computed(() => {
        if (isDecline.value) {
          return parseDeclineReason(transaction.value.declineReason);
        } else if (isRefunded.value) {
          return "Refunded";
        } else if (isPending.value) {
          return "Pending";
        }
        return "Settled";
      });
      return (_ctx, _cache) => {
        const _component_RouterLink = resolveComponent("RouterLink");
        return __props.loading ? (openBlock(), createElementBlock("div", _hoisted_1$$, _hoisted_3$I)) : (openBlock(), createElementBlock(
          "div",
          {
            key: 1,
            class: normalizeClass(["transaction d-flex align-items-center", unref(transactionClasses)])
          },
          [
            __props.showCardLink ? (openBlock(), createBlock(_component_RouterLink, {
              key: 0,
              to: { name: "card-details", params: { uuid: unref(transaction).cardUuid } },
              class: "me-3"
            }, {
              default: withCtx(() => [
                createVNode(PrivacyCardLogo, {
                  mcc: unref(transaction).mcc,
                  mccIconUrl: unref(transaction).mccIconUrl,
                  merchantCategory: unref(transaction).merchantCategory,
                  size: unref(CardLogoSize).MEDIUM,
                  style: normalizeStyle(unref(transaction).cardStyle),
                  type: unref(transaction).cardType,
                  "data-test": "txn-list-item-card-logo"
                }, null, 8, ["mcc", "mccIconUrl", "merchantCategory", "size", "style", "type"])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["to"])) : (openBlock(), createElementBlock("span", _hoisted_4$s, [
              createVNode(PrivacyCardLogo, {
                mcc: unref(transaction).mcc,
                mccIconUrl: unref(transaction).mccIconUrl,
                merchantCategory: unref(transaction).merchantCategory,
                size: unref(CardLogoSize).MEDIUM,
                style: normalizeStyle(unref(transaction).cardStyle),
                type: unref(transaction).cardType,
                "data-test": "txn-list-item-card-logo"
              }, null, 8, ["mcc", "mccIconUrl", "merchantCategory", "size", "style", "type"])
            ])),
            createBaseVNode("div", _hoisted_5$j, [
              createBaseVNode(
                "div",
                _hoisted_6$g,
                toDisplayString(unref(transaction).descriptor),
                1
                /* TEXT */
              ),
              createBaseVNode(
                "div",
                _hoisted_7$e,
                toDisplayString(unref(txnDateFormatted)),
                1
                /* TEXT */
              )
            ]),
            createVNode(BaseTooltip, {
              variant: unref(isDecline) ? "danger" : "info",
              tooltip: unref(tooltipText),
              class: "amount ms-3",
              "data-test": "txn-list-item-amount"
            }, {
              default: withCtx(() => [
                unref(isRefunded) ? (openBlock(), createBlock(IconReturn, {
                  key: 0,
                  "data-test": "txn-list-item-refunded"
                })) : createCommentVNode("v-if", true),
                createTextVNode(
                  " " + toDisplayString(unref(amountFormatted)),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["variant", "tooltip"])
          ],
          2
          /* CLASS */
        ));
      };
    }
  });
  const TransactionListItem_vue_vue_type_style_index_0_scoped_5821a13f_lang = "";
  const TransactionListItem = /* @__PURE__ */ _export_sfc(_sfc_main$1b, [["__scopeId", "data-v-5821a13f"]]);
  const _withScopeId$f = (n) => (pushScopeId("data-v-273ac24d"), n = n(), popScopeId(), n);
  const _hoisted_1$_ = {
    key: 1,
    class: "user-prompt mt-2 p-2",
    "data-test": "collapsed-list-no-transactions"
  };
  const _hoisted_2$K = /* @__PURE__ */ _withScopeId$f(() => /* @__PURE__ */ createBaseVNode(
    "p",
    null,
    "This card has no transactions yet",
    -1
    /* HOISTED */
  ));
  const _hoisted_3$H = [
    _hoisted_2$K
  ];
  const _hoisted_4$r = {
    key: 0,
    class: "user-prompt",
    "data-test": "transaction-list-no-transactions"
  };
  const _hoisted_5$i = /* @__PURE__ */ _withScopeId$f(() => /* @__PURE__ */ createBaseVNode(
    "p",
    null,
    "You don't have any transactions",
    -1
    /* HOISTED */
  ));
  const _hoisted_6$f = [
    _hoisted_5$i
  ];
  const _hoisted_7$d = ["aria-busy"];
  const _hoisted_8$c = {
    key: 0,
    class: "transaction-loader px-4"
  };
  const _hoisted_9$7 = {
    key: 2,
    class: "text-center text-body-secondary",
    "data-test": "transaction-list-no-results"
  };
  const _hoisted_10$5 = /* @__PURE__ */ _withScopeId$f(() => /* @__PURE__ */ createBaseVNode(
    "p",
    null,
    "No matching transactions found",
    -1
    /* HOISTED */
  ));
  const _hoisted_11$3 = [
    _hoisted_10$5
  ];
  const _hoisted_12$3 = {
    key: 0,
    class: "visually-hidden"
  };
  const _hoisted_13$3 = {
    key: 3,
    class: "text-center"
  };
  const _sfc_main$1a = /* @__PURE__ */ defineComponent({
    __name: "TransactionList",
    props: {
      cardId: null,
      isCollapsed: { type: Boolean, default: false },
      query: { default: "" },
      showCardLink: { type: Boolean, default: true }
    },
    setup(__props) {
      const props = __props;
      const { list: listTransactions } = useTransactionsStore();
      const allDataLoaded = ref(false);
      const expanded = ref(!props.isCollapsed);
      const initialLoad = ref(true);
      const loader = ref(null);
      const loading = ref(false);
      const loadingError = ref("");
      const searching = ref(false);
      const transactions = ref(new Array(3).fill({}));
      const limit = 20;
      let offset = 0;
      let total = 0;
      const showTxnsButton = computed(() => {
        return !expanded.value && transactions.value.length && !initialLoad.value;
      });
      const showCollapsedNoTxnsMessage = computed(() => {
        return !expanded.value && !transactions.value.length && !initialLoad.value;
      });
      const showNoTransactions = computed(() => {
        return !transactions.value.length && !loading.value && !loadingError.value && !props.query && !searching.value;
      });
      onMounted(() => {
        observeLoader();
      });
      function reset() {
        initialLoad.value = true;
        allDataLoaded.value = false;
        offset = 0;
        total = 0;
      }
      const loadTransactions = async () => {
        loading.value = true;
        loadingError.value = "";
        try {
          const params = {
            fullInfo: true,
            limit,
            offset,
            transactionFilter: TransactionResultFilter.ALL
          };
          if (props.cardId) {
            params.cardID = props.cardId;
          }
          if (props.query) {
            params.query = props.query;
          }
          const { data: data2, total: totalLoaded } = await listTransactions(params);
          transactions.value = initialLoad.value ? data2 : [...transactions.value, ...data2];
          offset += limit;
          total = totalLoaded;
          if (offset >= total) {
            allDataLoaded.value = true;
          }
        } catch (err) {
          if (initialLoad.value) {
            transactions.value = [];
          }
          loadingError.value = "Unable to load transactions";
        } finally {
          initialLoad.value = false;
          loading.value = false;
        }
      };
      async function observeLoader(observeOnly = false) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(async (entry) => {
            if (entry.isIntersecting || initialLoad.value) {
              observer.unobserve(loader.value);
              if (!observeOnly) {
                await loadTransactions();
              }
              if (!allDataLoaded.value && !loadingError.value) {
                observeLoader();
              }
            }
          });
        });
        await nextTick();
        observer.observe(loader.value);
      }
      const debouncedUpdateQuery = debounce$1(async () => {
        searching.value = false;
        updateQuery();
        await loadTransactions();
        observeLoader(true);
      }, 350);
      function updateQuery() {
        if (!props.query) {
          router.push({ query: {} });
          return;
        }
        router.push({ query: { q: props.query } });
      }
      watch(
        () => props.query,
        () => {
          reset();
          searching.value = true;
          debouncedUpdateQuery();
        }
      );
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock("div", null, [
          unref(showTxnsButton) ? (openBlock(), createBlock(BaseButton, {
            key: 0,
            class: "w-100 text-center mt-2",
            variant: "link",
            onClick: _cache[0] || (_cache[0] = ($event) => expanded.value = true),
            "data-test": "show-transactions-button"
          }, {
            default: withCtx(() => [
              createVNode(IconChevronDown, { class: "me-1" }),
              createTextVNode(" Show transactions ")
            ]),
            _: 1
            /* STABLE */
          })) : unref(showCollapsedNoTxnsMessage) ? (openBlock(), createElementBlock("div", _hoisted_1$_, _hoisted_3$H)) : createCommentVNode("v-if", true),
          withDirectives(createBaseVNode(
            "div",
            null,
            [
              unref(showNoTransactions) ? (openBlock(), createElementBlock("div", _hoisted_4$r, _hoisted_6$f)) : createCommentVNode("v-if", true),
              transactions.value.length ? (openBlock(), createElementBlock("ul", {
                key: 1,
                class: "transaction-list",
                "data-test": "transaction-list",
                "aria-busy": loading.value
              }, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(transactions.value, (txn, index) => {
                    return openBlock(), createElementBlock(
                      "li",
                      {
                        key: txn.transactionUuid || index,
                        class: normalizeClass(["mb-3", {
                          "transaction-loader": !txn.transactionUuid && initialLoad.value,
                          "px-4": !__props.cardId
                        }])
                      },
                      [
                        createVNode(TransactionListItem, {
                          transaction: txn,
                          loading: !txn.transactionUuid,
                          "show-card-link": __props.showCardLink,
                          "aria-hidden": "true"
                        }, null, 8, ["transaction", "loading", "show-card-link"])
                      ],
                      2
                      /* CLASS */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )),
                loading.value && !initialLoad.value ? (openBlock(), createElementBlock("li", _hoisted_8$c, [
                  createVNode(TransactionListItem, {
                    loading: loading.value,
                    "aria-hidden": "true"
                  }, null, 8, ["loading"])
                ])) : createCommentVNode("v-if", true)
              ], 8, _hoisted_7$d)) : !loadingError.value && props.query.length ? (openBlock(), createElementBlock("div", _hoisted_9$7, _hoisted_11$3)) : createCommentVNode("v-if", true),
              createBaseVNode(
                "div",
                {
                  ref_key: "loader",
                  ref: loader
                },
                [
                  loading.value ? (openBlock(), createElementBlock("span", _hoisted_12$3, " Loading transactions... ")) : createCommentVNode("v-if", true)
                ],
                512
                /* NEED_PATCH */
              ),
              loadingError.value ? (openBlock(), createElementBlock("div", _hoisted_13$3, [
                createVNode(BaseAlert, { variant: "warning" }, {
                  default: withCtx(() => [
                    createTextVNode(
                      toDisplayString(loadingError.value),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(BaseButton, {
                  variant: "primary",
                  class: "mt-3",
                  onClick: _cache[1] || (_cache[1] = () => observeLoader()),
                  disabled: loading.value,
                  "data-test": "retry"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Try again ")
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled"])
              ])) : createCommentVNode("v-if", true)
            ],
            512
            /* NEED_PATCH */
          ), [
            [vShow, expanded.value]
          ])
        ]);
      };
    }
  });
  const TransactionList_vue_vue_type_style_index_0_scoped_273ac24d_lang = "";
  const TransactionList = /* @__PURE__ */ _export_sfc(_sfc_main$1a, [["__scopeId", "data-v-273ac24d"]]);
  const _withScopeId$e = (n) => (pushScopeId("data-v-c38dd3de"), n = n(), popScopeId(), n);
  const _hoisted_1$Z = { class: "px-4" };
  const _hoisted_2$J = {
    key: 0,
    class: "user-prompt"
  };
  const _hoisted_3$G = /* @__PURE__ */ _withScopeId$e(() => /* @__PURE__ */ createBaseVNode(
    "p",
    null,
    "Please complete onboarding to view transactions",
    -1
    /* HOISTED */
  ));
  const _sfc_main$19 = /* @__PURE__ */ defineComponent({
    __name: "TransactionsView",
    setup(__props) {
      const route = useRoute();
      const privacyUrl = "https://app.privacy.com";
      const userStore2 = useUserStore();
      const userLoaded = computed(() => !!userStore2.user._id);
      const completedOnboarding = computed(() => userStore2.completedOnboarding);
      const query = ref(route.query.q);
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock(
          Fragment,
          null,
          [
            createBaseVNode("div", _hoisted_1$Z, [
              unref(userLoaded) && unref(completedOnboarding) ? (openBlock(), createBlock(BaseInputGroup, {
                key: 0,
                class: "transactions-search mb-3"
              }, {
                prefix: withCtx(() => [
                  createVNode(IconMagnifyingGlass)
                ]),
                default: withCtx(() => [
                  createVNode(BaseInput, {
                    type: "search",
                    "aria-label": "Search transactions",
                    placeholder: "Search",
                    modelValue: query.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => query.value = $event)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })) : createCommentVNode("v-if", true)
            ]),
            unref(userLoaded) && !unref(completedOnboarding) ? (openBlock(), createElementBlock("div", _hoisted_2$J, [
              _hoisted_3$G,
              createVNode(BaseButton, {
                to: unref(privacyUrl),
                variant: "primary"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Complete Onboarding ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["to"])
            ])) : unref(completedOnboarding) ? (openBlock(), createBlock(TransactionList, {
              key: 1,
              query: query.value
            }, null, 8, ["query"])) : createCommentVNode("v-if", true)
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  });
  const TransactionsView_vue_vue_type_style_index_0_scoped_c38dd3de_lang = "";
  const TransactionsView = /* @__PURE__ */ _export_sfc(_sfc_main$19, [["__scopeId", "data-v-c38dd3de"]]);
  const _sfc_main$18 = {};
  const _hoisted_1$Y = {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$I = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M8 10C10.7614 10 13 7.76142 13 5C13 2.23858 10.7614 0 8 0C5.23858 0 3 2.23858 3 5C3 7.76142 5.23858 10 8 10ZM16 14V16H0V14C0 12.3431 1.34315 11 3 11H13C14.6569 11 16 12.3431 16 14Z",
      fill: "currentColor"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$F = [
    _hoisted_2$I
  ];
  function _sfc_render$q(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$Y, _hoisted_3$F);
  }
  const IconPerson = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["render", _sfc_render$q]]);
  const _hoisted_1$X = ["src"];
  const _sfc_main$17 = /* @__PURE__ */ defineComponent({
    __name: "UserIcon",
    props: {
      url: null,
      size: { default: "small" }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock(
          "div",
          {
            class: normalizeClass(["user-icon rounded-circle", __props.size]),
            "data-test": "user-icon-container"
          },
          [
            __props.url ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: __props.url,
              alt: "",
              class: "user-image"
            }, null, 8, _hoisted_1$X)) : (openBlock(), createBlock(IconPerson, {
              key: 1,
              class: "icon-fallback",
              "data-test": "default-user-icon"
            }))
          ],
          2
          /* CLASS */
        );
      };
    }
  });
  const UserIcon_vue_vue_type_style_index_0_scoped_ba35cb70_lang = "";
  const UserIcon = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["__scopeId", "data-v-ba35cb70"]]);
  function isTfaLoginResponse(res) {
    const tfaRes = res;
    return tfaRes.twoFactorAuth === true && !!tfaRes.userToken;
  }
  function isOtcLoginResponse(res) {
    const otcRes = res;
    return otcRes.oneTimeCode === true && !!otcRes.userToken;
  }
  const useAuthStore = defineStore("auth", () => {
    const token = ref("");
    const userToken = ref("");
    const tfaMessage = ref("");
    async function init2() {
      token.value = (await appExtensionApi.storage.get("token")).token || token.value;
      userToken.value = (await appExtensionApi.storage.get("userToken")).userToken || userToken.value;
    }
    async function login$1({ email, password }) {
      const { data: data2 } = await login({ email, password });
      if (isTfaLoginResponse(data2)) {
        await appExtensionApi.storage.set({
          userToken: data2.userToken,
          startPage: "tfa",
          secondaryAuthType: "tfa"
        });
        tfaMessage.value = data2.message;
        userToken.value = data2.userToken;
      } else if (isOtcLoginResponse(data2)) {
        await appExtensionApi.storage.set({
          userToken: data2.userToken,
          startPage: "tfa",
          secondaryAuthType: "otc"
        });
        tfaMessage.value = data2.message;
        userToken.value = data2.userToken;
      } else {
        await appExtensionApi.storage.set({ token: data2.token });
        token.value = data2.token;
      }
      return data2;
    }
    async function logout$1() {
      await logout();
      $reset();
    }
    async function postTfaLogin(data2, headers = {}) {
      if (data2.token) {
        await appExtensionApi.storage.set({ token: data2.token });
        if (headers["x-tfa-deviceid"]) {
          await appExtensionApi.storage.set({
            deviceId: headers["x-tfa-deviceid"]
          });
        }
        await clearTwoFactorAuth();
        token.value = data2.token;
      }
      return data2;
    }
    async function tfaLogin$1({ code, rememberDevice }) {
      const { data: data2, headers } = await tfaLogin({
        code,
        rememberDevice,
        userToken: userToken.value
      });
      return postTfaLogin(data2, headers);
    }
    async function oneTimeCodeLogin$1(payload) {
      const { data: data2, headers } = await oneTimeCodeLogin({
        ...payload,
        userToken: userToken.value
      });
      return postTfaLogin(data2, headers);
    }
    async function sendVerifySms$1() {
      const { data: data2 } = await sendVerifySms({
        userToken: userToken.value
      });
      await appExtensionApi.storage.set({ startPage: "tfa-recovery-confirm" });
      return data2;
    }
    async function removeTFA$1(verificationCode) {
      const { data: data2 } = await removeTFA({
        verificationCode,
        userToken: userToken.value
      });
      await clearTwoFactorAuth();
      return data2;
    }
    async function sendOneTimeCode$1() {
      const { data: data2 } = await sendOneTimeCode({
        userToken: userToken.value
      });
      return data2;
    }
    async function sendPasswordResetEmail$1(email) {
      await sendPasswordResetEmail({ email });
    }
    async function clearTwoFactorAuth() {
      userToken.value = "";
      tfaMessage.value = "";
      await appExtensionApi.storage.remove([
        "userToken",
        "startPage",
        "secondaryAuthType"
      ]);
    }
    async function getShortLivedAuthToken() {
      const { data: data2 } = await getShortLivedToken();
      return data2.token;
    }
    function $reset() {
      token.value = "";
      userToken.value = "";
      tfaMessage.value = "";
    }
    return {
      // state
      token,
      userToken,
      tfaMessage,
      // actions
      clearTwoFactorAuth,
      init: init2,
      login: login$1,
      logout: logout$1,
      tfaLogin: tfaLogin$1,
      oneTimeCodeLogin: oneTimeCodeLogin$1,
      sendVerifySms: sendVerifySms$1,
      removeTFA: removeTFA$1,
      sendOneTimeCode: sendOneTimeCode$1,
      sendPasswordResetEmail: sendPasswordResetEmail$1,
      $reset,
      getShortLivedAuthToken
    };
  });
  const authStore = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    useAuthStore
  }, Symbol.toStringTag, { value: "Module" }));
  const _sfc_main$16 = /* @__PURE__ */ defineComponent({
    __name: "TheLogout",
    setup(__props) {
      const authStore2 = useAuthStore();
      const eventStore2 = useEventStore();
      const interstitial = inject("context") === CONTEXT.INTERSTITIAL;
      const redirect = interstitial ? "/interstitial.html" : "/index.html";
      async function logout2() {
        try {
          await authStore2.logout();
          await appExtensionApi.storage.clear();
          window.location.assign(redirect);
        } catch (error2) {
          eventStore2.error([
            {
              name: USER_EVENTS.LOGOUT,
              data: {
                message: error2.message,
                error: error2
              }
            }
          ]);
          popupAlert("Unable to logout, please try again");
        }
      }
      return (_ctx, _cache) => {
        return openBlock(), createBlock(BaseButton, {
          variant: "link",
          "data-test": "logout",
          onClick: logout2
        }, {
          default: withCtx(() => [
            createTextVNode(" Logout ")
          ]),
          _: 1
          /* STABLE */
        });
      };
    }
  });
  const _sfc_main$15 = {};
  const _hoisted_1$W = {
    height: "16",
    width: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$H = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      d: "M3 13L13 3",
      stroke: "currentColor",
      "stroke-width": "2"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$E = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      d: "M13 13L13 3L3 3",
      stroke: "currentColor",
      "stroke-width": "2"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_4$q = [
    _hoisted_2$H,
    _hoisted_3$E
  ];
  function _sfc_render$p(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$W, _hoisted_4$q);
  }
  const IconArrowUpRight = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["render", _sfc_render$p]]);
  var SubscriptionFeaturesEnum = /* @__PURE__ */ ((SubscriptionFeaturesEnum2) => {
    SubscriptionFeaturesEnum2["CARD_CREATE_COST"] = "cardCreateCost";
    SubscriptionFeaturesEnum2["CARD_NOTES"] = "cardNotes";
    SubscriptionFeaturesEnum2["CARD_SHARING"] = "cardSharing";
    SubscriptionFeaturesEnum2["CARD_SHARING_SPEND_LIMIT"] = "cardSharingSpendLimit";
    SubscriptionFeaturesEnum2["CATEGORY_CARDS"] = "categoryCards";
    SubscriptionFeaturesEnum2["DISCREET_MERCHANTS"] = "discreetMerchants";
    SubscriptionFeaturesEnum2["FREE_MONTHS"] = "freeMonths";
    SubscriptionFeaturesEnum2["MONTHLY_CARD_COUNT_LIMIT"] = "monthlyCardCountLimit";
    SubscriptionFeaturesEnum2["MONTHLY_CARD_CREATES_INCLUDED"] = "monthlyCardCreatesIncluded";
    SubscriptionFeaturesEnum2["ORGANIZATION"] = "organization";
    return SubscriptionFeaturesEnum2;
  })(SubscriptionFeaturesEnum || {});
  var SubscriptionType = /* @__PURE__ */ ((SubscriptionType2) => {
    SubscriptionType2["API_ISSUING"] = "API_ISSUING";
    SubscriptionType2["CONSUMER_PLUS"] = "CONSUMER_PLUS";
    SubscriptionType2["FREE"] = "FREE";
    SubscriptionType2["PROSUMER"] = "PROSUMER";
    SubscriptionType2["SMB_ENTERPRISE"] = "SMB_ENTERPRISE";
    SubscriptionType2["SMB_TEAM"] = "SMB_TEAM";
    SubscriptionType2["STARTER_ISSUING"] = "STARTER_ISSUING";
    return SubscriptionType2;
  })(SubscriptionType || {});
  const _withScopeId$d = (n) => (pushScopeId("data-v-e8c185d9"), n = n(), popScopeId(), n);
  const _hoisted_1$V = {
    key: 0,
    class: "text-center mb-1"
  };
  const _hoisted_2$G = { class: "text-center mb-3" };
  const _hoisted_3$D = { class: "d-grid mb-3" };
  const _hoisted_4$p = { class: "list-group mb-3 fw-medium" };
  const _hoisted_5$h = {
    key: 0,
    class: "list-group-item d-flex justify-content-between",
    "data-test": "credit"
  };
  const _hoisted_6$e = /* @__PURE__ */ _withScopeId$d(() => /* @__PURE__ */ createBaseVNode(
    "span",
    { class: "text-light-emphasis" },
    "Credit",
    -1
    /* HOISTED */
  ));
  const _hoisted_7$c = {
    key: 1,
    class: "list-group-item d-flex justify-content-between",
    "data-test": "cashback"
  };
  const _hoisted_8$b = /* @__PURE__ */ _withScopeId$d(() => /* @__PURE__ */ createBaseVNode(
    "span",
    { class: "text-light-emphasis" },
    "Cashback",
    -1
    /* HOISTED */
  ));
  const _hoisted_9$6 = {
    key: 2,
    class: "list-group-item"
  };
  const _hoisted_10$4 = /* @__PURE__ */ _withScopeId$d(() => /* @__PURE__ */ createBaseVNode(
    "div",
    { class: "row gx-0 placeholder-glow" },
    [
      /* @__PURE__ */ createBaseVNode("div", { class: "rounded-1 placeholder col-12 mb-2" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "rounded-1 placeholder col-6" })
    ],
    -1
    /* HOISTED */
  ));
  const _hoisted_11$2 = [
    _hoisted_10$4
  ];
  const _hoisted_12$2 = {
    key: 3,
    class: "list-group-item"
  };
  const _hoisted_13$2 = /* @__PURE__ */ _withScopeId$d(() => /* @__PURE__ */ createBaseVNode(
    "div",
    { class: "row gx-0 placeholder-glow" },
    [
      /* @__PURE__ */ createBaseVNode("div", { class: "rounded-1 placeholder col-12 mb-2" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "rounded-1 placeholder col-6" })
    ],
    -1
    /* HOISTED */
  ));
  const _hoisted_14$2 = [
    _hoisted_13$2
  ];
  const _hoisted_15$2 = ["data-test"];
  const _hoisted_16$2 = { class: "text-light-emphasis text-capitalize mb-2" };
  const _hoisted_17$1 = { class: "mb-2" };
  const _hoisted_18$1 = { class: "text-light-emphasis" };
  const _hoisted_19$1 = { class: "progress" };
  const _hoisted_20$1 = {
    key: 4,
    class: "list-group-item",
    "data-test": "plan-limits"
  };
  const _hoisted_21 = /* @__PURE__ */ _withScopeId$d(() => /* @__PURE__ */ createBaseVNode(
    "div",
    { class: "text-light-emphasis text-capitalize mb-2" },
    "Monthly Cards",
    -1
    /* HOISTED */
  ));
  const _hoisted_22 = { class: "mb-2" };
  const _hoisted_23 = { class: "text-light-emphasis" };
  const _hoisted_24 = { class: "progress" };
  const _hoisted_25 = { class: "d-grid" };
  const _sfc_main$14 = /* @__PURE__ */ defineComponent({
    __name: "TheAccount",
    props: {
      theme: null,
      photoUrl: null,
      email: null,
      fullName: null,
      credit: null,
      cashback: null,
      spendLimits: null,
      showLimits: { type: Boolean },
      subscription: null
    },
    setup(__props) {
      const appUrl = "https://app.privacy.com";
      const authStore2 = useAuthStore();
      const eventStore2 = useEventStore();
      const toCurrency = (num, round2 = false) => {
        if (round2) {
          return "$" + num.toLocaleString("en-US");
        } else {
          return num.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
          });
        }
      };
      const upgradeHandler = async () => {
        const token = await authStore2.getShortLivedAuthToken();
        try {
          await appExtensionApi.message.send({
            event: "addShortLivedAuthCookie",
            payload: {
              url: appUrl,
              name: "token",
              value: token
            }
          });
        } catch (error2) {
        }
        eventStore2.track({ name: SUBSCRIPTION_EVENTS.UPGRADE_CLICKED });
        window.open(`${appUrl}/select-plan`, "_blank");
      };
      return (_ctx, _cache) => {
        var _a, _b;
        return openBlock(), createElementBlock(
          Fragment,
          null,
          [
            createVNode(UserIcon, {
              size: "large",
              url: __props.photoUrl,
              class: "m-auto mb-3"
            }, null, 8, ["url"]),
            __props.fullName ? (openBlock(), createElementBlock(
              "h3",
              _hoisted_1$V,
              toDisplayString(__props.fullName),
              1
              /* TEXT */
            )) : createCommentVNode("v-if", true),
            createBaseVNode(
              "div",
              _hoisted_2$G,
              toDisplayString(__props.email),
              1
              /* TEXT */
            ),
            createBaseVNode("div", _hoisted_3$D, [
              createVNode(BaseButton, {
                to: `${unref(appUrl)}/account`,
                target: "_blank"
              }, {
                default: withCtx(() => [
                  createTextVNode(" My Account "),
                  createVNode(IconArrowUpRight, { class: "ms-1" })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["to"]),
              createVNode(BaseButton, {
                variant: "secondary",
                class: "mt-2",
                onClick: upgradeHandler,
                target: "_blank",
                "data-test": "upgrade-button"
              }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createTextVNode(
                      toDisplayString(((_a2 = __props.subscription) == null ? void 0 : _a2.subscriptionType) === unref(SubscriptionType).FREE ? "Upgrade" : "Change Plan") + " ",
                      1
                      /* TEXT */
                    ),
                    createVNode(IconArrowUpRight, { class: "ms-1" })
                  ];
                }),
                _: 1
                /* STABLE */
              })
            ]),
            createBaseVNode("ul", _hoisted_4$p, [
              __props.credit !== void 0 ? (openBlock(), createElementBlock("li", _hoisted_5$h, [
                _hoisted_6$e,
                createBaseVNode(
                  "span",
                  null,
                  toDisplayString(toCurrency(__props.credit)),
                  1
                  /* TEXT */
                )
              ])) : createCommentVNode("v-if", true),
              __props.cashback !== void 0 ? (openBlock(), createElementBlock("li", _hoisted_7$c, [
                _hoisted_8$b,
                createBaseVNode(
                  "span",
                  null,
                  toDisplayString(toCurrency(__props.cashback)),
                  1
                  /* TEXT */
                )
              ])) : createCommentVNode("v-if", true),
              __props.showLimits && !((_a = __props.spendLimits) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("li", _hoisted_9$6, _hoisted_11$2)) : createCommentVNode("v-if", true),
              __props.showLimits && !((_b = __props.spendLimits) == null ? void 0 : _b.length) ? (openBlock(), createElementBlock("li", _hoisted_12$2, _hoisted_14$2)) : createCommentVNode("v-if", true),
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(__props.spendLimits, (spendLimit) => {
                  return openBlock(), createElementBlock("li", {
                    key: spendLimit.frequency,
                    class: "list-group-item",
                    "data-test": spendLimit.frequency + "-spend-limit"
                  }, [
                    createBaseVNode(
                      "div",
                      _hoisted_16$2,
                      toDisplayString(spendLimit.frequency) + " Spend Limit ",
                      1
                      /* TEXT */
                    ),
                    createBaseVNode("div", _hoisted_17$1, [
                      createTextVNode(
                        toDisplayString(toCurrency(spendLimit.total)) + " ",
                        1
                        /* TEXT */
                      ),
                      createBaseVNode(
                        "span",
                        _hoisted_18$1,
                        " of " + toDisplayString(toCurrency(spendLimit.limit, true)),
                        1
                        /* TEXT */
                      )
                    ]),
                    createBaseVNode("div", _hoisted_19$1, [
                      createBaseVNode(
                        "div",
                        {
                          class: "progress-bar",
                          style: normalizeStyle(`width: ${spendLimit.total / spendLimit.limit * 100}%`)
                        },
                        null,
                        4
                        /* STYLE */
                      )
                    ])
                  ], 8, _hoisted_15$2);
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              __props.showLimits && __props.subscription ? (openBlock(), createElementBlock("li", _hoisted_20$1, [
                _hoisted_21,
                createBaseVNode("div", _hoisted_22, [
                  createTextVNode(
                    toDisplayString(__props.subscription.cardsCreatedLast30) + " ",
                    1
                    /* TEXT */
                  ),
                  createBaseVNode(
                    "span",
                    _hoisted_23,
                    " of " + toDisplayString(__props.subscription.cardsPerMonth),
                    1
                    /* TEXT */
                  )
                ]),
                createBaseVNode("div", _hoisted_24, [
                  createBaseVNode(
                    "div",
                    {
                      class: "progress-bar",
                      style: normalizeStyle(`width: ${__props.subscription.cardsCreatedLast30 / __props.subscription.cardsPerMonth * 100}%`)
                    },
                    null,
                    4
                    /* STYLE */
                  )
                ])
              ])) : createCommentVNode("v-if", true)
            ]),
            createBaseVNode("div", _hoisted_25, [
              createVNode(_sfc_main$16)
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  });
  const TheAccount_vue_vue_type_style_index_0_scoped_e8c185d9_lang = "";
  const TheAccount = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["__scopeId", "data-v-e8c185d9"]]);
  const SUBSCRIPTION_ROUTE = "/subscriptions";
  const subscription = () => {
    return v2Api.get(SUBSCRIPTION_ROUTE);
  };
  const useMetricStore = defineStore("metric", () => {
    const metricState = ref();
    async function init2() {
      const { token } = await appExtensionApi.storage.get("token");
      if (token) {
        getMetrics();
      }
    }
    function $reset() {
      metricState.value = void 0;
    }
    async function getMetrics() {
      const { data: data2 } = await metric();
      metricState.value = data2;
      return data2;
    }
    return {
      // actions
      init: init2,
      getMetrics,
      // state
      data: metricState,
      $reset
    };
  });
  const metricStore = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    useMetricStore
  }, Symbol.toStringTag, { value: "Module" }));
  const _hoisted_1$U = { class: "px-4" };
  const _sfc_main$13 = /* @__PURE__ */ defineComponent({
    __name: "AccountView",
    setup(__props) {
      const userStore2 = useUserStore();
      const metricStore2 = useMetricStore();
      const user = computed(() => userStore2.user);
      const metric2 = computed(() => metricStore2.data);
      const photoUrl = computed(() => {
        return user.value.photo ? `${"https://app.privacy.com"}/api/v1/user/getAccountPhoto/${user.value.photo}` : void 0;
      });
      const theme2 = ref();
      getTheme().then((storedTheme) => theme2.value = storedTheme).catch(() => {
        theme2.value = "auto";
        setTheme(theme2.value);
      });
      const subscription$1 = ref();
      subscription().then(({ data: data2 }) => subscription$1.value = data2.data[0]).catch(() => {
      });
      const credit = computed(
        () => {
          var _a;
          return ((_a = user.value) == null ? void 0 : _a.promoCredits) ? Number(user.value.promoCredits.amount) : void 0;
        }
      );
      const fullName = computed(() => {
        const { preferredName = "", lastName = "" } = user.value;
        return `${preferredName} ${lastName}`.trim();
      });
      const cashback = computed(
        () => {
          var _a, _b, _c;
          return ((_b = (_a = user.value) == null ? void 0 : _a.cashbackProgram) == null ? void 0 : _b.enabled) ? Number(((_c = metric2.value) == null ? void 0 : _c.metricList.totalPendingCashback) || 0) / 100 : void 0;
        }
      );
      const spendLimits = computed(() => {
        const spendLimits2 = [];
        if (user.value.shouldShowLimits && metric2.value) {
          if (user.value.isLimitWeekly) {
            spendLimits2.push({
              frequency: "weekly",
              total: Number(metric2.value.metricList.weekTotal) / 100,
              limit: Number(user.value.dailySpendLimit || 0)
            });
          } else {
            spendLimits2.push({
              frequency: "daily",
              total: Number(metric2.value.metricList.dayTotal) / 100,
              limit: Number(user.value.dailySpendLimit || 0)
            });
          }
          spendLimits2.push({
            frequency: "monthly",
            total: Number(metric2.value.metricList.monthTotal) / 100,
            limit: Number(user.value.monthlySpendLimit || 0)
          });
        }
        return spendLimits2;
      });
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock("div", _hoisted_1$U, [
          theme2.value && unref(user).email ? (openBlock(), createBlock(TheAccount, {
            key: 0,
            theme: theme2.value,
            photoUrl: unref(photoUrl),
            email: unref(user).email,
            fullName: unref(fullName),
            credit: unref(credit),
            cashback: unref(cashback),
            spendLimits: unref(spendLimits),
            showLimits: unref(user).shouldShowLimits,
            subscription: subscription$1.value
          }, null, 8, ["theme", "photoUrl", "email", "fullName", "credit", "cashback", "spendLimits", "showLimits", "subscription"])) : createCommentVNode("v-if", true)
        ]);
      };
    }
  });
  const _imports_0 = "/assets/privacy-cards@1x.webp";
  const _imports_1 = "/assets/privacy-cards@2x.webp";
  const _imports_2 = "/assets/privacy-cards@1x.png";
  const _imports_3 = "/assets/privacy-cards@2x.png";
  const useError = () => {
    const errorMessage = ref("");
    const getErrorMessage = (err) => {
      if (err instanceof Error) {
        return err.message;
      }
    };
    const setError = (err, defaultMessage = "An unknown error occurred") => {
      errorMessage.value = getErrorMessage(err) || defaultMessage;
    };
    const resetError = () => {
      errorMessage.value = "";
    };
    return { errorMessage, setError, resetError };
  };
  const _sfc_main$12 = {};
  const _hoisted_1$T = {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$F = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      d: "M1 8L14 8",
      stroke: "currentColor",
      "stroke-width": "2"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$C = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      d: "M8 14L14 8L8 2",
      stroke: "currentColor",
      "stroke-width": "2"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_4$o = [
    _hoisted_2$F,
    _hoisted_3$C
  ];
  function _sfc_render$o(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$T, _hoisted_4$o);
  }
  const IconArrowRight = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["render", _sfc_render$o]]);
  const _withScopeId$c = (n) => (pushScopeId("data-v-94cf0b71"), n = n(), popScopeId(), n);
  const _hoisted_1$S = _imports_0 + " 1x, " + _imports_1 + " 2x";
  const _hoisted_2$E = _imports_2 + " 1x, " + _imports_3 + " 2x";
  const _hoisted_3$B = { class: "px-4" };
  const _hoisted_4$n = /* @__PURE__ */ _withScopeId$c(() => /* @__PURE__ */ createBaseVNode(
    "h1",
    { class: "mb-4" },
    "Login",
    -1
    /* HOISTED */
  ));
  const _hoisted_5$g = ["onSubmit"];
  const _hoisted_6$d = { class: "graphic p-4 mt-2 fw-medium" };
  const _hoisted_7$b = /* @__PURE__ */ _withScopeId$c(() => /* @__PURE__ */ createBaseVNode(
    "div",
    { class: "mb-2" },
    "Don't have an account?",
    -1
    /* HOISTED */
  ));
  const _hoisted_8$a = ["href"];
  const _hoisted_9$5 = /* @__PURE__ */ _withScopeId$c(() => /* @__PURE__ */ createBaseVNode(
    "span",
    { class: "text-success" },
    "Sign Up",
    -1
    /* HOISTED */
  ));
  const _hoisted_10$3 = /* @__PURE__ */ _withScopeId$c(() => /* @__PURE__ */ createBaseVNode(
    "picture",
    null,
    [
      /* @__PURE__ */ createBaseVNode("source", {
        type: "image/webp",
        srcset: _hoisted_1$S
      }),
      /* @__PURE__ */ createBaseVNode("source", {
        type: "image/png",
        srcset: _hoisted_2$E
      }),
      /* @__PURE__ */ createBaseVNode("img", {
        src: _imports_2,
        class: "cards",
        alt: "A stack of Privacy cards for different vendors"
      })
    ],
    -1
    /* HOISTED */
  ));
  const _sfc_main$11 = /* @__PURE__ */ defineComponent({
    __name: "LoginView",
    setup(__props) {
      const appUrl = "https://app.privacy.com";
      const authStore2 = useAuthStore();
      const userStore2 = useUserStore();
      const eventStore2 = useEventStore();
      const metricStore2 = useMetricStore();
      const { errorMessage, setError } = useError();
      const router2 = useRouter();
      const route = useRoute();
      const email = ref("");
      const password = ref("");
      const login2 = async () => {
        var _a;
        try {
          await authStore2.login({ email: email.value, password: password.value });
        } catch (err) {
          setError(err, "Invalid email or password");
          return;
        }
        if (authStore2.userToken) {
          const tfa = { name: "tfa" };
          if ((_a = route.query) == null ? void 0 : _a.redirect) {
            tfa.query = { redirect: route.query.redirect };
          }
          return router2.push(tfa);
        }
        try {
          await Promise.all([userStore2.getUser(), metricStore2.getMetrics()]);
          const { redirect, ...otherParams } = route.query || {};
          router2.push({
            name: redirect || "cards",
            query: otherParams
          });
        } catch (err) {
          setError(err, "Failed to get user");
        }
      };
      function trackSignup() {
        eventStore2.track({ name: EXTENSION_EVENTS.SIGN_UP });
      }
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock("div", _hoisted_3$B, [
          _hoisted_4$n,
          unref(errorMessage) ? (openBlock(), createBlock(BaseAlert, {
            key: 0,
            variant: "danger",
            class: "mb-2",
            "data-test": "error-message"
          }, {
            default: withCtx(() => [
              createTextVNode(
                toDisplayString(unref(errorMessage)),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          })) : createCommentVNode("v-if", true),
          createBaseVNode("form", {
            onSubmit: withModifiers(login2, ["prevent"]),
            class: "d-grid gap-2"
          }, [
            createVNode(BaseInput, {
              modelValue: email.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => email.value = $event),
              required: "",
              "aria-label": "Email",
              type: "email",
              "data-test": "email",
              placeholder: "Email"
            }, null, 8, ["modelValue"]),
            createVNode(BaseInput, {
              modelValue: password.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => password.value = $event),
              required: "",
              "aria-label": "Password",
              type: "password",
              "data-test": "password",
              placeholder: "Password"
            }, null, 8, ["modelValue"]),
            createVNode(BaseButton, {
              variant: "primary",
              type: "submit",
              "data-test": "submit"
            }, {
              default: withCtx(() => [
                createTextVNode(" Log In ")
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(BaseButton, {
              variant: "link",
              to: { name: "password-reset" },
              "data-test": "reset"
            }, {
              default: withCtx(() => [
                createTextVNode(" Reset Password ")
              ]),
              _: 1
              /* STABLE */
            })
          ], 40, _hoisted_5$g),
          createBaseVNode("section", _hoisted_6$d, [
            _hoisted_7$b,
            createBaseVNode("a", {
              href: `${unref(appUrl)}/signup`,
              onClick: trackSignup,
              class: "text-success",
              "data-test": "signup",
              target: "_blank"
            }, [
              _hoisted_9$5,
              createVNode(IconArrowRight, { class: "ms-1 arrow-icon" })
            ], 8, _hoisted_8$a),
            _hoisted_10$3
          ])
        ]);
      };
    }
  });
  const LoginView_vue_vue_type_style_index_0_scoped_94cf0b71_lang = "";
  const LoginView = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["__scopeId", "data-v-94cf0b71"]]);
  const _hoisted_1$R = ["checked"];
  const _sfc_main$10 = /* @__PURE__ */ defineComponent({
    __name: "BaseCheckbox",
    props: {
      modelValue: { type: Boolean }
    },
    emits: ["update:modelValue"],
    setup(__props) {
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock("input", {
          type: "checkbox",
          checked: __props.modelValue,
          onChange: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:modelValue", $event.target.checked)),
          class: "rounded-1"
        }, null, 40, _hoisted_1$R);
      };
    }
  });
  const BaseCheckbox_vue_vue_type_style_index_0_scoped_0ce65621_lang = "";
  const BaseCheckbox = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["__scopeId", "data-v-0ce65621"]]);
  const _withScopeId$b = (n) => (pushScopeId("data-v-c2d9b60d"), n = n(), popScopeId(), n);
  const _hoisted_1$Q = { class: "px-4" };
  const _hoisted_2$D = /* @__PURE__ */ _withScopeId$b(() => /* @__PURE__ */ createBaseVNode(
    "h1",
    { class: "mb-4" },
    "Two-Factor Auth",
    -1
    /* HOISTED */
  ));
  const _hoisted_3$A = { key: 0 };
  const _hoisted_4$m = { key: 1 };
  const _hoisted_5$f = ["onSubmit"];
  const _hoisted_6$c = { class: "btn btn-secondary checkbox-wrapper d-flex align-items-center" };
  const _hoisted_7$a = /* @__PURE__ */ _withScopeId$b(() => /* @__PURE__ */ createBaseVNode(
    "label",
    { for: "remember-device" },
    "Remember device for 90 days",
    -1
    /* HOISTED */
  ));
  const _hoisted_8$9 = { class: "d-flex justify-content-between" };
  const _sfc_main$$ = /* @__PURE__ */ defineComponent({
    __name: "TFAView",
    setup(__props) {
      const authStore2 = useAuthStore();
      const userStore2 = useUserStore();
      const metricStore2 = useMetricStore();
      const route = useRoute();
      const router2 = useRouter();
      const { errorMessage, setError } = useError();
      const authType = ref("tfa");
      const code = ref("");
      const rememberDevice = ref(false);
      const sendingVerifySms = ref(false);
      const isTFACode = computed(() => authType.value === "tfa");
      const isSubmitDisabled = computed(() => code.value.length !== 6);
      onMounted(async () => {
        const { secondaryAuthType } = await appExtensionApi.storage.get(
          "secondaryAuthType"
        );
        if (secondaryAuthType) {
          authType.value = secondaryAuthType;
        }
      });
      async function login2() {
        var _a;
        const params = {
          code: code.value,
          rememberDevice: rememberDevice.value
        };
        try {
          if (isTFACode.value) {
            await authStore2.tfaLogin(params);
          } else {
            await authStore2.oneTimeCodeLogin(params);
          }
        } catch (err) {
          setError(err, "Code is invalid");
          return;
        }
        try {
          await Promise.all([userStore2.getUser(), metricStore2.getMetrics()]);
          router2.push({ name: ((_a = route.query) == null ? void 0 : _a.redirect) || "cards" });
        } catch (err) {
          setError(err, "Failed to get user");
        }
      }
      async function sendVerifySms2() {
        sendingVerifySms.value = true;
        try {
          await authStore2.sendVerifySms();
          sendingVerifySms.value = false;
          router2.push({ name: "tfa-recovery-confirm" });
        } catch (err) {
          sendingVerifySms.value = false;
          setError(err, "Failed to send verify sms code");
        }
      }
      async function resendOtc() {
        sendingVerifySms.value = true;
        try {
          await authStore2.sendOneTimeCode();
          popupAlert("One time code sent to your email", "success");
        } catch (err) {
          setError(err, "Failed to resend one time code");
        }
        sendingVerifySms.value = false;
      }
      async function navigateToLogin() {
        await authStore2.clearTwoFactorAuth();
        router2.push({ name: "login" });
      }
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock("div", _hoisted_1$Q, [
          _hoisted_2$D,
          unref(authStore2).tfaMessage ? (openBlock(), createElementBlock(
            "p",
            _hoisted_3$A,
            toDisplayString(unref(authStore2).tfaMessage),
            1
            /* TEXT */
          )) : (openBlock(), createElementBlock("p", _hoisted_4$m, "Please enter your 2FA code below.")),
          createBaseVNode("form", {
            onSubmit: withModifiers(login2, ["prevent"]),
            class: "d-grid gap-2 mb-2"
          }, [
            unref(errorMessage) ? (openBlock(), createBlock(BaseAlert, {
              key: 0,
              variant: "danger",
              "data-test": "tfa-error-message"
            }, {
              default: withCtx(() => [
                createTextVNode(
                  toDisplayString(unref(errorMessage)),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            })) : createCommentVNode("v-if", true),
            createVNode(BaseInput, {
              modelValue: code.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => code.value = $event),
              placeholder: "6 Digit code",
              maxlength: "6",
              "data-test": "tfa-code-input",
              "aria-label": "6 Digit code",
              autocomplete: "one-time-code",
              inputmode: "numeric"
            }, null, 8, ["modelValue"]),
            createBaseVNode("div", _hoisted_6$c, [
              createVNode(BaseCheckbox, {
                modelValue: rememberDevice.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => rememberDevice.value = $event),
                class: "me-1",
                id: "remember-device",
                "data-test": "tfa-remember-device"
              }, null, 8, ["modelValue"]),
              _hoisted_7$a
            ]),
            createVNode(BaseButton, {
              variant: "primary",
              type: "submit",
              "data-test": "tfa-submit",
              disabled: unref(isSubmitDisabled)
            }, {
              default: withCtx(() => [
                createTextVNode(" Log In ")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["disabled"])
          ], 40, _hoisted_5$f),
          createBaseVNode("div", _hoisted_8$9, [
            createVNode(BaseButton, {
              variant: "link",
              onClick: navigateToLogin,
              "data-test": "to-login",
              "aria-label": "Go to login page"
            }, {
              default: withCtx(() => [
                createTextVNode(" Back ")
              ]),
              _: 1
              /* STABLE */
            }),
            unref(isTFACode) ? (openBlock(), createBlock(BaseButton, {
              key: 0,
              variant: "link",
              disabled: sendingVerifySms.value,
              "data-test": "tfa-send-verify-sms",
              onClick: sendVerifySms2
            }, {
              default: withCtx(() => [
                createTextVNode(" Don't Have a Code? ")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["disabled"])) : (openBlock(), createBlock(BaseButton, {
              key: 1,
              variant: "link",
              disabled: sendingVerifySms.value,
              "data-test": "resend-otc",
              onClick: resendOtc
            }, {
              default: withCtx(() => [
                createTextVNode(" Resend Code ")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["disabled"]))
          ])
        ]);
      };
    }
  });
  const TFAView_vue_vue_type_style_index_0_scoped_c2d9b60d_lang = "";
  const TFAView = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["__scopeId", "data-v-c2d9b60d"]]);
  const _sfc_main$_ = {};
  const _hoisted_1$P = {
    height: "16",
    width: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$C = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      d: "M1 7L6 12L15 3",
      stroke: "currentColor",
      "stroke-width": "2"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$z = [
    _hoisted_2$C
  ];
  function _sfc_render$n(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$P, _hoisted_3$z);
  }
  const IconCheck = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["render", _sfc_render$n]]);
  const _hoisted_1$O = { class: "px-4" };
  const _hoisted_2$B = /* @__PURE__ */ createBaseVNode(
    "h1",
    { class: "mb-4" },
    "TFA Reset",
    -1
    /* HOISTED */
  );
  const _hoisted_3$y = /* @__PURE__ */ createBaseVNode(
    "p",
    null,
    " We've sent the TFA Recovery Code via SMS. Enter it below to reset your TFA. ",
    -1
    /* HOISTED */
  );
  const _hoisted_4$l = ["onSubmit"];
  const _sfc_main$Z = /* @__PURE__ */ defineComponent({
    __name: "TFARecoveryConfirm",
    setup(__props) {
      const router2 = useRouter();
      const authStore2 = useAuthStore();
      const { errorMessage, setError, resetError } = useError();
      const resetCompleted = ref(false);
      const code = ref("");
      const isSubmitDisabled = computed(() => code.value.length !== 5);
      const removeTFA2 = async () => {
        try {
          resetError();
          await authStore2.removeTFA(code.value);
          resetCompleted.value = true;
        } catch (err) {
          setError(err, "Error confirming verification code");
        }
      };
      async function toTFAView() {
        await appExtensionApi.storage.set({ startPage: "tfa" });
        router2.push({ name: "tfa" });
      }
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock("div", _hoisted_1$O, [
          _hoisted_2$B,
          _hoisted_3$y,
          createBaseVNode("form", {
            onSubmit: withModifiers(removeTFA2, ["prevent"]),
            class: "d-grid gap-2"
          }, [
            unref(errorMessage) ? (openBlock(), createBlock(BaseAlert, {
              key: 0,
              variant: "danger",
              "data-test": "confirm-error"
            }, {
              default: withCtx(() => [
                createTextVNode(
                  toDisplayString(unref(errorMessage)),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            })) : createCommentVNode("v-if", true),
            createVNode(BaseInput, {
              modelValue: code.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => code.value = $event),
              placeholder: "5 Digit code",
              maxlength: "5",
              "data-test": "confirm-code-input",
              "aria-label": "5 Digit code",
              disabled: resetCompleted.value,
              autocomplete: "one-time-code",
              inputmode: "numeric"
            }, null, 8, ["modelValue", "disabled"]),
            resetCompleted.value ? (openBlock(), createBlock(BaseButton, {
              key: 1,
              variant: "success",
              type: "button",
              "data-test": "submit-success",
              class: "pe-none",
              readonly: ""
            }, {
              default: withCtx(() => [
                createVNode(IconCheck, { class: "me-2" }),
                createTextVNode(" TFA Reset ")
              ]),
              _: 1
              /* STABLE */
            })) : createCommentVNode("v-if", true),
            resetCompleted.value ? (openBlock(), createBlock(BaseButton, {
              key: 2,
              to: { name: "login" },
              "data-test": "to-login"
            }, {
              default: withCtx(() => [
                createTextVNode(" Go to Login ")
              ]),
              _: 1
              /* STABLE */
            })) : (openBlock(), createBlock(BaseButton, {
              key: 3,
              variant: "primary",
              type: "submit",
              class: "mb-2",
              "data-test": "confirm-submit",
              disabled: unref(isSubmitDisabled)
            }, {
              default: withCtx(() => [
                createTextVNode(" Reset TFA ")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["disabled"]))
          ], 40, _hoisted_4$l),
          !resetCompleted.value ? (openBlock(), createBlock(BaseButton, {
            key: 0,
            class: "w-100",
            variant: "link",
            "data-test": "confirm-go-back",
            onClick: toTFAView
          }, {
            default: withCtx(() => [
              createTextVNode(" Back ")
            ]),
            _: 1
            /* STABLE */
          })) : createCommentVNode("v-if", true)
        ]);
      };
    }
  });
  const _hoisted_1$N = /* @__PURE__ */ createBaseVNode(
    "h1",
    null,
    "Reset Password",
    -1
    /* HOISTED */
  );
  const _hoisted_2$A = /* @__PURE__ */ createBaseVNode(
    "p",
    null,
    " We'll send you an email with a link to reset the password to your account. ",
    -1
    /* HOISTED */
  );
  const _hoisted_3$x = ["disabled"];
  const __default__$3 = {
    inheritAttrs: false
  };
  const _sfc_main$Y = /* @__PURE__ */ defineComponent({
    ...__default__$3,
    __name: "ThePasswordReset",
    props: {
      errorMsg: null,
      resetCompleted: { type: Boolean }
    },
    setup(__props) {
      const email = ref("");
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock(
          Fragment,
          null,
          [
            _hoisted_1$N,
            _hoisted_2$A,
            createBaseVNode(
              "form",
              {
                onSubmit: _cache[1] || (_cache[1] = withModifiers(($event) => _ctx.$emit("submit", email.value), ["prevent"])),
                class: "d-grid gap-2"
              },
              [
                __props.errorMsg ? (openBlock(), createBlock(BaseAlert, {
                  key: 0,
                  variant: "danger",
                  "data-test": "password-reset-error"
                }, {
                  default: withCtx(() => [
                    createTextVNode(
                      toDisplayString(__props.errorMsg),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })) : createCommentVNode("v-if", true),
                withDirectives(createBaseVNode("input", {
                  class: "form-control",
                  type: "email",
                  id: "email",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => email.value = $event),
                  placeholder: "Email",
                  required: "",
                  "data-test": "password-reset-email",
                  disabled: __props.resetCompleted
                }, null, 8, _hoisted_3$x), [
                  [vModelText, email.value]
                ]),
                __props.resetCompleted ? (openBlock(), createBlock(BaseButton, {
                  key: 1,
                  variant: "success",
                  "data-test": "password-reset-submit-success",
                  class: "pe-none"
                }, {
                  default: withCtx(() => [
                    createVNode(IconCheck, {
                      id: "check-icon",
                      class: "pe-2"
                    }),
                    createTextVNode(" Reset Email Sent ")
                  ]),
                  _: 1
                  /* STABLE */
                })) : (openBlock(), createBlock(BaseButton, {
                  key: 2,
                  variant: "primary",
                  type: "submit",
                  "data-test": "password-reset-button"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Reset ")
                  ]),
                  _: 1
                  /* STABLE */
                })),
                createVNode(BaseButton, {
                  variant: "link",
                  to: { name: "login" },
                  "data-test": "password-submit-go-back"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Back ")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ],
              32
              /* HYDRATE_EVENTS */
            )
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  });
  const _hoisted_1$M = { class: "px-4" };
  const _sfc_main$X = /* @__PURE__ */ defineComponent({
    __name: "PasswordReset",
    setup(__props) {
      const { sendPasswordResetEmail: sendPasswordResetEmail2 } = useAuthStore();
      const { errorMessage, resetError, setError } = useError();
      const resetCompleted = ref(false);
      const resetPassword = async (email) => {
        resetError();
        try {
          await sendPasswordResetEmail2(email);
          resetCompleted.value = true;
        } catch (err) {
          setError(err, "Error sending password reset email");
        }
      };
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock("div", _hoisted_1$M, [
          createVNode(_sfc_main$Y, {
            "reset-completed": resetCompleted.value,
            "error-msg": unref(errorMessage),
            onSubmit: resetPassword
          }, null, 8, ["reset-completed", "error-msg"])
        ]);
      };
    }
  });
  const copyToClipboard = async (text, type, eventName) => {
    try {
      await navigator.clipboard.writeText(text);
      popupAlert(`Copied ${type} to clipboard`, "success");
    } catch (err) {
      popupAlert("Failed to copy to clipboard", "danger");
    }
    try {
      await track({ name: eventName });
    } catch (e) {
    }
  };
  function useClickToCopy({
    exp,
    cvv,
    pan
  }) {
    const copyExp = () => copyToClipboard(exp.value, "expiration", CARD_EVENTS.EXP_COPIED);
    const copyCVV = () => copyToClipboard(cvv.value, "CVV", CARD_EVENTS.CVV_COPIED);
    const copyPAN = () => copyToClipboard(pan.value, "card number", CARD_EVENTS.PAN_COPIED);
    return {
      copyExp,
      copyCVV,
      copyPAN
    };
  }
  const _sfc_main$W = {};
  const _hoisted_1$L = {
    width: "31",
    height: "10",
    viewBox: "0 0 31 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$z = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      d: "M11.7566 0.176752L7.70274 9.84873H5.05791L3.063 2.13005C2.94189 1.65463 2.83658 1.48045 2.46824 1.28016C1.86686 0.953909 0.873761 0.64782 0 0.457844L0.0593473 0.176752H4.31672C4.85939 0.176752 5.34723 0.537995 5.47044 1.16291L6.52402 6.75961L9.12789 0.17659H11.7566V0.176752ZM22.1195 6.69091C22.1301 4.13818 18.5896 3.99755 18.614 2.85721C18.6215 2.51016 18.952 2.14118 19.6753 2.04699C20.0338 2.00006 21.0216 1.96426 22.1419 2.47984L22.5814 0.428815C21.9793 0.210295 21.2048 0 20.241 0C17.7679 0 16.0275 1.31467 16.0128 3.19717C15.9969 4.58957 17.2551 5.36657 18.203 5.82925C19.1782 6.30306 19.5055 6.60754 19.5017 7.03135C19.4948 7.68014 18.7239 7.96655 18.0035 7.97784C16.746 7.99719 16.0162 7.63756 15.4345 7.36711L14.981 9.48603C15.5656 9.75423 16.6447 9.98823 17.7634 10C20.392 10 22.1114 8.70162 22.1195 6.69091ZM28.65 9.84873H30.964L28.9441 0.176752H26.8082C26.328 0.176752 25.9229 0.456393 25.7435 0.886338L21.989 9.84873H24.6163L25.1378 8.40408H28.3479L28.65 9.84873ZM25.8582 6.42175L27.1751 2.79029L27.9331 6.42175H25.8582ZM15.3315 0.176752L13.2625 9.84873H10.7606L12.8303 0.176752H15.3315Z",
      fill: "currentColor"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$w = [
    _hoisted_2$z
  ];
  function _sfc_render$m(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$L, _hoisted_3$w);
  }
  const IconVisa = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["render", _sfc_render$m]]);
  const _sfc_main$V = {};
  const _hoisted_1$K = {
    width: "23",
    height: "14",
    viewBox: "0 0 23 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$y = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      d: "M7.95606 1.49677H14.6942V12.5021H7.95606V1.49677Z",
      fill: "#FF5F00"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$v = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      d: "M8.65009 7.0004C8.64925 5.94068 8.88948 4.89466 9.35259 3.9415C9.8157 2.98833 10.4896 2.153 11.3232 1.49871C8.45374 -0.756395 4.33311 -0.427849 1.85697 2.2532C-0.618988 4.93445 -0.618988 9.06829 1.85697 11.7495C4.33311 14.4306 8.45374 14.7589 11.3232 12.504C10.4893 11.8495 9.81529 11.0139 9.35217 10.0604C8.88905 9.10684 8.64896 8.06044 8.65009 7.0004Z",
      fill: "#EB001B"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_4$k = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      d: "M21.9786 11.3376V11.1121H22.0758V11.0654H21.8444V11.1121H21.9358V11.3376H21.9786ZM22.4276 11.3376V11.0654H22.3576L22.276 11.2598L22.1943 11.0654H22.1244V11.3376H22.1749V11.1315L22.2507 11.3084H22.3032L22.379 11.1315V11.3376H22.4276ZM22.6473 7.00039C22.6473 8.31364 22.2778 9.60039 21.581 10.7135C20.8842 11.8267 19.8883 12.7214 18.707 13.2952C17.5258 13.8691 16.207 14.0991 14.9012 13.9588C13.5955 13.8186 12.3556 13.3137 11.3232 12.5021C12.1565 11.8472 12.8301 11.0116 13.2934 10.0584C13.7566 9.10521 13.9973 8.05924 13.9973 6.99942C13.9973 5.93961 13.7566 4.89363 13.2934 3.94042C12.8301 2.9872 12.1565 2.15163 11.3232 1.49677C12.3556 0.685104 13.5955 0.180293 14.9012 0.0400343C16.207 -0.100224 17.5258 0.129729 18.707 0.70361C19.8883 1.27749 20.8842 2.17214 21.581 3.2853C22.2778 4.39846 22.6473 5.6852 22.6473 6.99845V7.00039Z",
      fill: "#F79E1B"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_5$e = [
    _hoisted_2$y,
    _hoisted_3$v,
    _hoisted_4$k
  ];
  function _sfc_render$l(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$K, _hoisted_5$e);
  }
  const IconMastercard = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["render", _sfc_render$l]]);
  const _sfc_main$U = {};
  const _hoisted_1$J = {
    width: "16",
    height: "17",
    viewBox: "0 0 16 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$x = /* @__PURE__ */ createBaseVNode(
    "g",
    { id: "copy-16" },
    [
      /* @__PURE__ */ createBaseVNode("path", {
        id: "vector",
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M1 0.5H12V13.5H1V0.5ZM3 2.5H10V11.5H3V2.5ZM15 3.5H13V5.5V14.5H6H4V16.5H15V3.5Z",
        fill: "currentColor"
      })
    ],
    -1
    /* HOISTED */
  );
  const _hoisted_3$u = [
    _hoisted_2$x
  ];
  function _sfc_render$k(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$J, _hoisted_3$u);
  }
  const IconCopy = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["render", _sfc_render$k]]);
  const _sfc_main$T = /* @__PURE__ */ defineComponent({
    __name: "CardStateBanner",
    props: {
      state: null
    },
    setup(__props) {
      const props = __props;
      const cardStateStr = computed(() => {
        if (props.state === CardState.PAUSED) {
          return "paused";
        }
        if (props.state === CardState.CLOSED) {
          return "closed";
        }
        return "";
      });
      return (_ctx, _cache) => {
        return unref(cardStateStr) ? (openBlock(), createElementBlock(
          "div",
          {
            key: 0,
            class: normalizeClass(["card-state-banner", unref(cardStateStr)])
          },
          toDisplayString(unref(cardStateStr)),
          3
          /* TEXT, CLASS */
        )) : createCommentVNode("v-if", true);
      };
    }
  });
  const CardStateBanner_vue_vue_type_style_index_0_scoped_fa6a5047_lang = "";
  const CardStateBanner = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["__scopeId", "data-v-fa6a5047"]]);
  const _sfc_main$S = {};
  const _hoisted_1$I = {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$w = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      d: "M36 4H4V36H36V4Z",
      fill: "black"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$t = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M36 4V36H4V4H36ZM19.6482 12.0007H13.6V28.0377H17.0365V22.7684H19.6482C24.2608 22.7684 26.567 20.9738 26.567 17.3846C26.567 13.7953 24.2608 12.0007 19.6482 12.0007ZM19.8086 15.0248C21.9774 15.0248 23.0618 15.8114 23.0618 17.3846C23.0618 18.9577 21.9774 19.7443 19.8086 19.7443H17.0365V15.0248H19.8086Z",
      fill: "white"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_4$j = [
    _hoisted_2$w,
    _hoisted_3$t
  ];
  function _sfc_render$j(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$I, _hoisted_4$j);
  }
  const IconCardLogoBase = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["render", _sfc_render$j]]);
  const IconPrivacyLogo_vue_vue_type_style_index_0_scoped_a62c5a85_lang = "";
  const _sfc_main$R = {};
  const _withScopeId$a = (n) => (pushScopeId("data-v-a62c5a85"), n = n(), popScopeId(), n);
  const _hoisted_1$H = {
    width: "80",
    height: "20",
    viewBox: "0 0 80 20",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$v = /* @__PURE__ */ _withScopeId$a(() => /* @__PURE__ */ createBaseVNode(
    "rect",
    {
      width: "80",
      height: "20",
      class: "bg"
    },
    null,
    -1
    /* HOISTED */
  ));
  const _hoisted_3$s = /* @__PURE__ */ _withScopeId$a(() => /* @__PURE__ */ createBaseVNode(
    "path",
    {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      class: "mask",
      d: "M80 0V20H0V0H80ZM59.7975 4.8C59.1102 4.8 58.4515 4.90739 57.8215 5.12217C57.1915 5.33695 56.6211 5.65435 56.1104 6.07436C55.5997 6.49438 55.1893 7.05519 54.879 7.75681C54.5688 8.45843 54.4137 9.24833 54.4137 10.1265C54.4137 10.9666 54.5688 11.7207 54.879 12.3889C55.1893 13.0571 55.6045 13.5917 56.1248 13.9926C56.645 14.3935 57.2201 14.699 57.8502 14.909C58.4802 15.119 59.1388 15.224 59.8261 15.224C60.8762 15.224 61.8451 15.0092 62.7328 14.5797V12.4748C62.1219 13.0285 61.2628 13.3053 60.1555 13.3053C59.7068 13.3053 59.2749 13.2409 58.8596 13.112C58.4444 12.9831 58.0673 12.7946 57.7285 12.5464C57.3896 12.2982 57.1199 11.9665 56.9194 11.5513C56.719 11.136 56.6188 10.6611 56.6188 10.1265C56.6188 9.00014 56.9648 8.14819 57.6569 7.57066C58.3489 6.99314 59.1818 6.70438 60.1555 6.70438C61.1482 6.70438 61.9835 6.96689 62.6612 7.49191V5.44434C61.8021 5.01478 60.8475 4.8 59.7975 4.8ZM10.7801 5.00046H7V15.0235H9.1478V11.7302H10.7801C13.663 11.7302 15.1044 10.6086 15.1044 8.36535C15.1044 6.12208 13.663 5.00046 10.7801 5.00046ZM21.6648 5.00046H17.5411V15.0235H19.6889V11.5155H21.2639L23.9701 15.0235H26.4473L23.4547 11.2434C24.9152 10.7757 25.6454 9.78291 25.6454 8.26512C25.6454 7.65419 25.5333 7.12917 25.3089 6.69007C25.0846 6.25096 24.7744 5.91209 24.3782 5.67344C23.9821 5.43479 23.5621 5.26297 23.1182 5.15797C22.6743 5.05296 22.1899 5.00046 21.6648 5.00046ZM30.8027 5.00046H28.6549V15.0235H30.8027V5.00046ZM35.4879 5.00046H33.1683L37.063 15.0235H39.268L43.177 5.00046H40.8574L38.1655 12.5035L35.4879 5.00046ZM49.4288 5.00046H47.1091L43.014 15.0235H45.2334L45.978 13.1478H50.5599L51.2902 15.0235H53.5096L49.4288 5.00046ZM66.68 5.00046H64.2602L68.1835 11.4725V15.0235H70.317V11.4725L74.226 5.00046H71.8061L69.2431 9.49653L66.68 5.00046ZM48.269 6.99076C48.3167 7.2485 48.3883 7.511 48.4837 7.77829L49.887 11.3723H46.6509L48.0399 7.77829C48.1353 7.54919 48.2117 7.28668 48.269 6.99076ZM10.8804 6.89053C12.2359 6.89053 12.9136 7.38213 12.9136 8.36535C12.9136 9.34857 12.2359 9.84018 10.8804 9.84018H9.1478V6.89053H10.8804ZM21.7651 6.89053C22.2615 6.89053 22.6671 7.00508 22.9822 7.23418C23.2972 7.46328 23.4547 7.82124 23.4547 8.30808C23.4547 8.78537 23.2948 9.14095 22.975 9.37482C22.6552 9.60869 22.2519 9.72563 21.7651 9.72563H19.6889V6.89053H21.7651Z"
    },
    null,
    -1
    /* HOISTED */
  ));
  const _hoisted_4$i = [
    _hoisted_2$v,
    _hoisted_3$s
  ];
  function _sfc_render$i(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$H, _hoisted_4$i);
  }
  const PrivacyLogo = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["render", _sfc_render$i], ["__scopeId", "data-v-a62c5a85"]]);
  const _withScopeId$9 = (n) => (pushScopeId("data-v-a033dd10"), n = n(), popScopeId(), n);
  const _hoisted_1$G = { class: "digital-wallet-logo" };
  const _hoisted_2$u = /* @__PURE__ */ _withScopeId$9(() => /* @__PURE__ */ createBaseVNode(
    "div",
    { class: "mt-2 icon-tap-pay" },
    [
      /* @__PURE__ */ createBaseVNode("svg", {
        width: "54",
        height: "32",
        viewBox: "0 0 54 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        /* @__PURE__ */ createBaseVNode("path", {
          d: "M19.9461 31.9532C13.5191 31.3898 7.84791 29.0056 4.15421 25.3145C2.04976 23.2114 0.773135 20.9302 0.196038 18.2409C-0.0665449 17.0176 -0.0651692 14.9874 0.199133 13.7538C1.00012 10.0147 3.41633 6.74384 7.22111 4.24888C15.8985 -1.44144 29.1914 -1.4129 37.787 4.31474C38.9288 5.07549 39.666 5.67941 40.6988 6.69931C42.002 7.98642 42.9184 9.26495 43.8854 11.1453C43.9211 11.215 44.0984 11.3028 44.2793 11.3403C44.8889 11.4669 45.7014 11.9415 46.3566 12.5532C46.864 13.0271 47.2577 13.544 48.2267 15.0093C49.2037 16.4866 53.6267 23.3165 53.8957 23.7632C54.0002 23.9369 53.7935 24.2163 53.5603 24.2163C53.3949 24.2163 53.2773 24.1061 53.0333 23.722C52.8605 23.4501 51.7324 21.6992 50.5263 19.8314C46.2586 13.2212 46.0264 12.9144 44.8378 12.32L44.2126 12.0072H42.3773C40.5443 12.0072 40.5418 12.0074 40.4972 12.2006C40.2536 13.258 40.209 13.517 40.262 13.5662C40.2959 13.5976 41.3374 14.1907 42.5764 14.8842L44.8294 16.1452L44.6886 16.4407C44.611 16.6032 44.5221 16.7361 44.4908 16.7361C44.4595 16.7361 42.5637 15.6864 40.2778 14.4033C37.9919 13.1201 35.9881 12.0337 35.8249 11.9886C35.1747 11.8091 34.176 12.5294 34.176 13.1779C34.176 13.8348 34.371 14.0263 38.3871 17.3152C40.8931 19.3674 42.3264 20.6002 42.5453 20.8915C42.9435 21.4215 43.3461 22.2023 43.7175 23.1653C44.3704 24.8583 45.4323 25.8028 47.1737 26.2396L47.7472 26.3834L47.6989 26.697C47.6723 26.8695 47.6355 27.0282 47.6169 27.0494C47.5433 27.134 46.3884 26.7655 45.72 26.4444C44.675 25.9423 43.9574 25.2269 43.2517 23.9847C43.2465 23.9756 42.8371 24.1159 42.3417 24.2965C41.4619 24.6173 41.4217 24.6438 40.5906 25.4548C37.0486 28.911 31.9691 31.1195 25.8358 31.8703C24.8417 31.992 21.0051 32.0458 19.9461 31.9532ZM26.0507 30.8889C28.8648 30.5176 31.0468 29.9586 33.331 29.0235C35.7284 28.0419 37.989 26.6315 39.5709 25.1301L40.1942 24.5386L38.6251 23.789C36.9487 22.988 36.7836 22.8553 36.5688 22.1392C36.4333 21.687 36.5867 21.2067 37.0147 20.7422L37.3483 20.3803L36.6211 19.8279C36.0454 19.3906 35.8648 19.1992 35.7541 18.9093C35.5749 18.4402 35.6395 17.9328 35.9305 17.5238L36.1516 17.2129L33.8524 16.8083C32.5878 16.586 31.409 16.3614 31.2329 16.3093C30.8881 16.2075 30.5373 15.8154 30.4465 15.4307C30.3977 15.2244 31.5245 9.72253 31.7763 8.93771C31.8889 8.58639 32.3706 8.16182 32.7334 8.0939C33.1134 8.02271 39.8906 9.21405 40.2279 9.41128C40.762 9.72339 40.9309 10.2252 40.7615 10.9969L40.6907 11.3193L41.0657 11.3188C41.2719 11.3187 41.7603 11.2936 42.1506 11.2631L42.8605 11.2077L42.5085 10.5543C41.4425 8.57521 39.5179 6.58444 37.1418 5.00275C36.0331 4.2647 33.666 3.09881 32.2409 2.58843C30.2147 1.86311 27.7624 1.31971 25.4055 1.07398C24.1131 0.939339 20.7277 0.941231 19.4729 1.07742C16.4655 1.40363 13.7337 2.08442 11.3461 3.10225C5.81844 5.45913 2.1017 9.36331 1.15024 13.8129C0.901589 14.9759 0.882157 17.0116 1.10966 18.0689C1.61281 20.4069 2.71112 22.4307 4.49933 24.3145C8.14144 28.1516 13.7045 30.5087 20.376 31.0418C21.2692 31.1131 25.1419 31.0089 26.0507 30.8889ZM24.8325 26.7015C24.4885 26.6019 24.1397 26.1925 24.0665 25.8016C24.0187 25.5471 24.077 25.3705 24.4417 24.665C25.9156 21.8139 26.5561 19.1901 26.5561 16.0054C26.5561 12.9277 25.989 10.533 24.5801 7.6628C24.2776 7.04666 24.0302 6.47455 24.0302 6.39184C24.0302 6.08644 24.2857 5.64364 24.5624 5.46996C24.9419 5.2318 25.5778 5.27634 25.8822 5.56213C25.9991 5.67202 26.3031 6.17104 26.5576 6.67076C27.5657 8.65019 28.2564 10.8219 28.5974 13.0823C28.8084 14.4812 28.8504 17.1325 28.6819 18.413C28.3708 20.7754 27.7473 22.8833 26.7489 24.9484C26.1455 26.1966 25.7666 26.7101 25.4495 26.7101C25.3861 26.7101 25.2826 26.7259 25.2196 26.7454C25.1563 26.7644 24.9823 26.7448 24.8325 26.7015ZM20.7301 24.5553C20.2024 24.4017 19.8218 23.7543 19.9743 23.2692C20.0113 23.1517 20.2598 22.6107 20.5263 22.067C21.6552 19.7648 22.1249 17.2968 21.8948 14.8738C21.7056 12.8828 21.3488 11.6272 20.45 9.78994C19.8469 8.55733 19.8189 8.36628 20.1695 7.87001C20.5029 7.39815 21.3351 7.32163 21.7722 7.72264C22.0752 8.00053 23.0175 9.96843 23.3812 11.0829C24.5849 14.7711 24.4013 18.7303 22.8586 22.3535C22.0685 24.2095 21.5137 24.7833 20.7301 24.5553ZM16.4995 22.3788C16.1735 22.2317 15.8929 21.887 15.8165 21.5394C15.7699 21.3278 15.8501 21.0935 16.237 20.3101C17.6579 17.4323 17.6732 14.6605 16.2837 11.8497C15.6736 10.6152 15.6602 10.3694 16.1763 9.88263C16.4309 9.6424 16.5391 9.59992 16.8968 9.59992C17.4967 9.59992 17.8078 9.90137 18.344 11.0026C19.1685 12.6964 19.5061 14.1658 19.5033 16.0484C19.5004 17.9835 19.1849 19.3119 18.3039 21.098C17.7994 22.1207 17.5501 22.3906 17.045 22.4599C16.8909 22.4811 16.6455 22.4445 16.4995 22.3788ZM12.5519 20.3514C12.2936 20.2444 11.9987 19.8929 11.911 19.5873C11.8131 19.2458 11.8933 18.9748 12.281 18.3372C12.7797 17.5171 12.8958 17.0771 12.8958 16.0053C12.8958 14.9336 12.7797 14.4934 12.281 13.6733C12.112 13.3952 11.9423 13.0622 11.9038 12.933C11.7431 12.3926 12.1935 11.7302 12.7985 11.6167C13.3112 11.5204 13.6634 11.7492 14.1349 12.4852C15.5001 14.6162 15.4999 17.4628 14.1342 19.5757C13.6526 20.3211 13.1154 20.5845 12.5519 20.3514ZM41.9637 23.6616C42.4204 23.4984 42.8152 23.3438 42.8409 23.3182C42.8665 23.2926 42.7784 23.0006 42.645 22.6694C42.3712 21.9893 42.4156 22.0068 41.4437 22.1929C40.3942 22.3937 39.785 22.2147 38.6363 21.3689C38.3231 21.1383 38 20.9494 37.9185 20.9494C37.8368 20.9494 37.6578 21.0696 37.5206 21.2165C37.2262 21.5317 37.1818 22.0254 37.4216 22.3174C37.63 22.5712 40.5146 23.9438 40.8571 23.952C41.009 23.9555 41.5068 23.825 41.9637 23.6616ZM41.5097 21.4538C41.9374 21.3678 41.9843 21.3384 41.9109 21.2014C41.8289 21.048 37.8391 17.7367 37.4931 17.5345C37.2075 17.3679 36.9757 17.4066 36.7389 17.6604C36.0459 18.4034 36.1267 18.559 37.9218 19.9354C40.0866 21.5953 40.3177 21.6933 41.5097 21.4538ZM36.1534 16.4403C36.1534 16.4195 35.7008 16.0297 35.1477 15.5743C33.7812 14.4492 33.488 14.0293 33.488 13.1972C33.488 12.5024 33.9514 11.8313 34.6975 11.4454C35.0679 11.2538 35.7283 11.1933 36.1019 11.3166C36.3662 11.4038 37.5577 12.0485 39.2099 12.9978L39.558 13.1978L39.8448 11.8375C40.1385 10.4442 40.1438 10.079 39.872 9.99423C39.7893 9.96843 38.1968 9.67902 36.3329 9.3511C33.0233 8.76884 32.6622 8.73411 32.5081 8.98345C32.4261 9.11603 31.167 14.9511 31.1669 15.1993C31.1667 15.3234 31.2298 15.4777 31.3072 15.5418C31.3844 15.606 32.4581 15.8393 33.6931 16.0605C36.0792 16.4878 36.1534 16.4993 36.1534 16.4403Z",
          fill: "white"
        })
      ])
    ],
    -1
    /* HOISTED */
  ));
  const _sfc_main$Q = /* @__PURE__ */ defineComponent({
    __name: "IconDigitalWalletDefault",
    setup(__props) {
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock("div", _hoisted_1$G, [
          createVNode(PrivacyLogo),
          _hoisted_2$u
        ]);
      };
    }
  });
  const IconDigitalWalletDefault_vue_vue_type_style_index_0_scoped_a033dd10_lang = "";
  const IconDigitalWalletDefault = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-a033dd10"]]);
  const _hoisted_1$F = { class: "d-flex justify-content-between align-items-start card-type-header p-3" };
  const _hoisted_2$t = {
    key: 0,
    class: "card-icon-emoji d-flex align-items-center justify-content-center",
    "data-test": "card-icon"
  };
  const _hoisted_3$r = ["src", "alt"];
  const _hoisted_4$h = { class: "card-type-label d-flex" };
  const _hoisted_5$d = {
    class: "d-flex me-2",
    "data-test": "label-icon"
  };
  const _hoisted_6$b = { "data-test": "label-text" };
  const _sfc_main$P = /* @__PURE__ */ defineComponent({
    __name: "CardHeader",
    props: {
      mccIconUrl: null,
      type: null,
      style: null,
      merchantCategory: null
    },
    setup(__props) {
      const props = __props;
      const labelIcon = computed(
        () => getLabelIcon(props.type, props.merchantCategory)
      );
      const labelText = computed(
        () => getLabelText(props.type, props.merchantCategory)
      );
      const logo = computed(
        () => useLogo({
          mccIconUrl: props.mccIconUrl,
          style: props.style,
          type: props.type,
          merchantCategory: props.merchantCategory
        })
      );
      const useComponent = computed(() => {
        return logo.value.type === "component" || logo.value.type === "default";
      });
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock("div", _hoisted_1$F, [
          unref(logo).type === "icon" ? (openBlock(), createElementBlock(
            "div",
            _hoisted_2$t,
            toDisplayString(unref(logo).src),
            1
            /* TEXT */
          )) : props.type === unref(CardType).DIGITAL_WALLET ? (openBlock(), createBlock(IconDigitalWalletDefault, {
            key: 1,
            class: "card-icon-logo",
            "data-test": "card-logo"
          })) : unref(useComponent) ? (openBlock(), createBlock(IconCardLogoBase, {
            key: 2,
            class: "card-icon-default",
            "data-test": "card-logo"
          })) : (openBlock(), createElementBlock("img", {
            key: 3,
            class: "card-icon-logo",
            src: unref(logo).src,
            alt: unref(logo).alt,
            loading: "lazy",
            "data-test": "card-logo"
          }, null, 8, _hoisted_3$r)),
          createBaseVNode("div", _hoisted_4$h, [
            createBaseVNode("span", _hoisted_5$d, [
              (openBlock(), createBlock(resolveDynamicComponent(unref(labelIcon))))
            ]),
            createBaseVNode(
              "span",
              _hoisted_6$b,
              toDisplayString(unref(labelText)),
              1
              /* TEXT */
            )
          ])
        ]);
      };
    }
  });
  const CardHeader_vue_vue_type_style_index_0_scoped_ce33aa01_lang = "";
  const CardHeader = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["__scopeId", "data-v-ce33aa01"]]);
  const _withScopeId$8 = (n) => (pushScopeId("data-v-6ddf7410"), n = n(), popScopeId(), n);
  const _hoisted_1$E = {
    key: 0,
    class: "card p-3",
    "data-test": "placeholder"
  };
  const _hoisted_2$s = /* @__PURE__ */ createStaticVNode('<div class="placeholder-glow" data-v-6ddf7410><span class="placeholder col-3 placeholder-logo mb-3" data-v-6ddf7410></span></div><div class="placeholder-glow mb-2" data-v-6ddf7410><span class="placeholder col-10" data-v-6ddf7410></span></div><div class="placeholder-glow" data-v-6ddf7410><span class="placeholder col-5" data-v-6ddf7410></span><span class="placeholder col-4 offset-1" data-v-6ddf7410></span></div>', 3);
  const _hoisted_5$c = [
    _hoisted_2$s
  ];
  const _hoisted_6$a = {
    key: 0,
    class: "merchant-category-description"
  };
  const _hoisted_7$9 = { class: "card-info d-flex align-items-center" };
  const _hoisted_8$8 = { class: "d-flex card-info align-items-center mt-2" };
  const _hoisted_9$4 = /* @__PURE__ */ _withScopeId$8(() => /* @__PURE__ */ createBaseVNode(
    "span",
    { class: "label me-1" },
    "EXP",
    -1
    /* HOISTED */
  ));
  const _hoisted_10$2 = /* @__PURE__ */ _withScopeId$8(() => /* @__PURE__ */ createBaseVNode(
    "span",
    { class: "label me-1" },
    "CVV",
    -1
    /* HOISTED */
  ));
  const _sfc_main$O = /* @__PURE__ */ defineComponent({
    __name: "PrivacyCard",
    props: {
      loading: { type: Boolean, default: false },
      copyInfo: { type: Boolean, default: true },
      cvv: null,
      expMonth: null,
      expYear: null,
      isExpiring: { type: Boolean },
      mcc: null,
      mccIconUrl: null,
      network: null,
      newCard: { type: Boolean, default: false },
      pan: null,
      type: null,
      style: null,
      state: null,
      merchantCategory: null
    },
    setup(__props) {
      var _a, _b, _c, _d;
      const props = __props;
      useCssVars((_ctx) => ({
        "74560cd4": unref(textColor)
      }));
      const cardNetworkMap = {
        [PrivacyCardNetwork.VISA]: IconVisa,
        [PrivacyCardNetwork.MASTERCARD]: IconMastercard
      };
      const networkIcon = computed(() => {
        return cardNetworkMap[props.network];
      });
      const formattedPAN = computed(() => {
        const pan2 = props.pan || "•".repeat(16);
        return pan2.replace(/(.{4})/g, "$1 ").trim();
      });
      const cvv = computed(() => props.cvv || "•••");
      const pan = computed(() => props.pan || "");
      const exp = computed(() => {
        let expString = "••/••";
        if (props.expMonth && props.expYear) {
          expString = `${props.expMonth}/${props.expYear.slice(-2)}`;
        }
        return expString;
      });
      const isUnlocked = computed(
        () => props.type === CardType.UNLOCKED && !props.merchantCategory
      );
      const isCategoryLocked = computed(
        () => props.type === CardType.UNLOCKED && !!props.merchantCategory
      );
      const isCustomizableCard = computed(() => {
        return props.type === CardType.MERCHANT_LOCKED || isCategoryLocked.value;
      });
      const { copyExp, copyCVV, copyPAN } = useClickToCopy({ cvv, exp, pan });
      let bgColor = "";
      let textColor = "#FFFFFF";
      const isCustomCard = !!((_a = props.style) == null ? void 0 : _a.bgColor) || !!((_b = props.style) == null ? void 0 : _b.filename) || !!((_c = props.style) == null ? void 0 : _c.icon);
      if (isCustomCard) {
        const customColors = getCustomCardColors((_d = props.style) == null ? void 0 : _d.bgColor);
        if (customColors) {
          bgColor = customColors.bgColor;
          textColor = customColors.textColor;
        }
      }
      const cardBgClasses = computed(() => {
        const classes = {};
        if (props.type === CardType.SINGLE_USE) {
          classes["single-use-card"] = true;
        }
        if (isUnlocked.value) {
          classes["unlocked-card"] = true;
        }
        if (props.type === CardType.DIGITAL_WALLET) {
          classes["digital-wallet"] = true;
        }
        if (isCustomizableCard.value && isCustomCard) {
          classes["locked-custom"] = true;
        }
        if (isCustomizableCard.value && !isCustomCard) {
          classes["locked-default"] = true;
        }
        if (props.isExpiring) {
          classes["expiring"] = true;
        }
        return classes;
      });
      const cardBottomClasses = computed(() => {
        const classes = {};
        if (props.type === CardType.MERCHANT_LOCKED) {
          if (isCustomCard) {
            classes["card-bottom-custom"] = true;
          } else {
            classes["card-bottom-default"] = true;
          }
        } else if (isCategoryLocked.value) {
          classes["card-bottom-custom"] = true;
        }
        return classes;
      });
      return (_ctx, _cache) => {
        return __props.loading ? (openBlock(), createElementBlock("div", _hoisted_1$E, _hoisted_5$c)) : (openBlock(), createElementBlock(
          "div",
          {
            key: 1,
            class: normalizeClass(["card d-flex flex-column justify-content-between shadow-sm", unref(cardBgClasses)]),
            "data-test": "privacy-card",
            style: normalizeStyle({ backgroundColor: unref(bgColor) })
          },
          [
            createVNode(CardHeader, {
              type: __props.type,
              style: normalizeStyle(__props.style),
              mccIconUrl: __props.mccIconUrl,
              "merchant-category": __props.merchantCategory
            }, null, 8, ["type", "style", "mccIconUrl", "merchant-category"]),
            createVNode(CardStateBanner, { state: __props.state }, null, 8, ["state"]),
            __props.newCard && __props.merchantCategory ? (openBlock(), createElementBlock(
              "div",
              _hoisted_6$a,
              toDisplayString(__props.merchantCategory.description),
              1
              /* TEXT */
            )) : (openBlock(), createElementBlock(
              "div",
              {
                key: 1,
                class: normalizeClass(["card-bottom p-3", unref(cardBottomClasses)])
              },
              [
                createBaseVNode("div", _hoisted_7$9, [
                  createBaseVNode(
                    "div",
                    {
                      class: normalizeClass(["attr card-info-pan", { clickable: __props.copyInfo }]),
                      onClick: _cache[0] || (_cache[0] = //@ts-ignore
                      (...args) => unref(copyPAN) && unref(copyPAN)(...args)),
                      "data-test": "card-pan"
                    },
                    [
                      createVNode(IconCopy),
                      createTextVNode(
                        " " + toDisplayString(unref(formattedPAN)),
                        1
                        /* TEXT */
                      )
                    ],
                    2
                    /* CLASS */
                  )
                ]),
                createBaseVNode("div", _hoisted_8$8, [
                  createBaseVNode(
                    "div",
                    {
                      class: normalizeClass(["attr card-info-exp", { clickable: __props.copyInfo }]),
                      onClick: _cache[1] || (_cache[1] = //@ts-ignore
                      (...args) => unref(copyExp) && unref(copyExp)(...args)),
                      "data-test": "card-exp"
                    },
                    [
                      _hoisted_9$4,
                      createTextVNode(
                        " " + toDisplayString(unref(exp)),
                        1
                        /* TEXT */
                      )
                    ],
                    2
                    /* CLASS */
                  ),
                  createBaseVNode(
                    "div",
                    {
                      class: normalizeClass(["attr card-info-cvv", { clickable: __props.copyInfo }]),
                      onClick: _cache[2] || (_cache[2] = //@ts-ignore
                      (...args) => unref(copyCVV) && unref(copyCVV)(...args)),
                      "data-test": "card-cvv"
                    },
                    [
                      _hoisted_10$2,
                      createTextVNode(
                        " " + toDisplayString(unref(cvv)),
                        1
                        /* TEXT */
                      )
                    ],
                    2
                    /* CLASS */
                  ),
                  unref(networkIcon) ? (openBlock(), createBlock(resolveDynamicComponent(unref(networkIcon)), {
                    key: 0,
                    class: "ms-auto mt-auto card-network",
                    "aria-label": __props.network
                  }, null, 8, ["aria-label"])) : createCommentVNode("v-if", true)
                ])
              ],
              2
              /* CLASS */
            ))
          ],
          6
          /* CLASS, STYLE */
        ));
      };
    }
  });
  const PrivacyCard_vue_vue_type_style_index_0_scoped_6ddf7410_lang = "";
  const PrivacyCard = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["__scopeId", "data-v-6ddf7410"]]);
  const _sfc_main$N = {};
  const _hoisted_1$D = {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$r = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      d: "M8.00015 7L3.00015 2L1.58594 3.41421L6.58594 8.41421L1.68644 13.3137L3.10066 14.7279L8.00015 9.82843L12.8996 14.7279L14.3139 13.3137L9.41436 8.41421L14.4144 3.41421L13.0002 2L8.00015 7Z",
      fill: "currentColor"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$q = [
    _hoisted_2$r
  ];
  function _sfc_render$h(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$D, _hoisted_3$q);
  }
  const IconCross = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["render", _sfc_render$h]]);
  const _hoisted_1$C = {
    key: 0,
    class: "dialog-header pb-4"
  };
  const _hoisted_2$q = { class: "dialog-title h2" };
  const _hoisted_3$p = { class: "dialog-body" };
  const _hoisted_4$g = {
    key: 1,
    class: "dialog-footer pt-4"
  };
  const _sfc_main$M = /* @__PURE__ */ defineComponent({
    __name: "BaseModal",
    props: {
      open: { type: Boolean },
      overflow: { default: "auto" },
      showFooter: { type: Boolean, default: true },
      showHeader: { type: Boolean, default: true },
      showCloseButton: { type: Boolean, default: false },
      title: null,
      padSides: { type: Boolean, default: true }
    },
    setup(__props) {
      const props = __props;
      const dialog = ref(null);
      const classes = computed(() => ({
        [`overflow-${props.overflow}`]: props.overflow
      }));
      function closeModal() {
        var _a, _b;
        (_b = (_a = dialog.value) == null ? void 0 : _a.close) == null ? void 0 : _b.call(_a);
      }
      function clickCloseDialog(event) {
        if (event.target === dialog.value) {
          closeModal();
        }
      }
      watchEffect(() => {
        var _a, _b;
        if (props.open && dialog.value) {
          (_b = (_a = dialog.value).showModal) == null ? void 0 : _b.call(_a);
          dialog.value.addEventListener("click", clickCloseDialog, { capture: true });
        } else {
          closeModal();
        }
      });
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock(
          "dialog",
          {
            ref_key: "dialog",
            ref: dialog,
            class: normalizeClass(["dialog shadow-lg overflow-y-scroll", unref(classes)])
          },
          [
            createBaseVNode(
              "div",
              {
                class: normalizeClass(`${__props.padSides ? "p-4" : "py-4"} content`)
              },
              [
                __props.showHeader ? (openBlock(), createElementBlock("header", _hoisted_1$C, [
                  renderSlot(_ctx.$slots, "header", {}, () => [
                    createBaseVNode(
                      "h5",
                      _hoisted_2$q,
                      toDisplayString(__props.title),
                      1
                      /* TEXT */
                    )
                  ], true),
                  __props.showCloseButton ? (openBlock(), createBlock(BaseButton, {
                    key: 0,
                    variant: "nav",
                    size: "sm",
                    onClick: closeModal,
                    class: "dialog-close-btn"
                  }, {
                    default: withCtx(() => [
                      createVNode(IconCross)
                    ]),
                    _: 1
                    /* STABLE */
                  })) : createCommentVNode("v-if", true)
                ])) : createCommentVNode("v-if", true),
                createBaseVNode("div", _hoisted_3$p, [
                  renderSlot(_ctx.$slots, "default", {}, void 0, true)
                ]),
                __props.showFooter ? (openBlock(), createElementBlock("div", _hoisted_4$g, [
                  renderSlot(_ctx.$slots, "footer", {}, void 0, true)
                ])) : createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            )
          ],
          2
          /* CLASS */
        );
      };
    }
  });
  const BaseModal_vue_vue_type_style_index_0_scoped_469c125e_lang = "";
  const BaseModal = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__scopeId", "data-v-469c125e"]]);
  const _sfc_main$L = /* @__PURE__ */ defineComponent({
    __name: "BaseDropdown",
    props: {
      label: { default: "Select item" },
      toggleVariant: { default: "secondary" },
      split: { type: Boolean, default: false },
      smallButton: { type: Boolean }
    },
    setup(__props) {
      onUnmounted(() => unbindClickOutside());
      const show = ref(false);
      const dropdown = ref(null);
      const trigger2 = ref(null);
      const menu = ref(null);
      let popper2 = null;
      async function toggleMenu() {
        if (!popper2) {
          popper2 = createPopper(trigger2.value.element, menu.value, {
            placement: "bottom-end",
            modifiers: [flip$1, preventOverflow$1]
          });
        }
        show.value = !show.value;
        await nextTick();
        popper2.update();
      }
      function bindClickOutside() {
        const el = dropdown.value;
        el.clickOutside = function handler(event) {
          if (!(el === event.target || el.contains(event.target))) {
            show.value = false;
          }
        };
        document.body.addEventListener("click", el.clickOutside);
      }
      function unbindClickOutside() {
        popper2 == null ? void 0 : popper2.destroy();
        const el = dropdown.value;
        if (!el) {
          return;
        }
        document.body.removeEventListener("click", el.clickOutside);
      }
      watchEffect(() => {
        if (dropdown.value) {
          bindClickOutside();
        }
      });
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock(
          "div",
          {
            ref_key: "dropdown",
            ref: dropdown,
            class: "dropdown"
          },
          [
            createVNode(BaseButton, {
              ref_key: "trigger",
              ref: trigger2,
              variant: __props.toggleVariant,
              class: normalizeClass(["dropdown-toggle", { show: show.value, "rounded-start-0": __props.split, "small-button": __props.smallButton }]),
              "aria-expanded": show.value,
              onClick: toggleMenu,
              size: __props.smallButton ? "sm" : void 0,
              "data-test": "dropdown-trigger"
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "button", {}, () => [
                  createTextVNode(
                    toDisplayString(__props.label),
                    1
                    /* TEXT */
                  )
                ], true)
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["variant", "class", "aria-expanded", "size"]),
            createBaseVNode(
              "ul",
              {
                ref_key: "menu",
                ref: menu,
                class: normalizeClass(["dropdown-menu shadow", { show: show.value }]),
                role: "listbox",
                tabindex: "0",
                onClick: toggleMenu
              },
              [
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ],
              2
              /* CLASS */
            )
          ],
          512
          /* NEED_PATCH */
        );
      };
    }
  });
  const BaseDropdown_vue_vue_type_style_index_0_scoped_ac35cafb_lang = "";
  const BaseDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["__scopeId", "data-v-ac35cafb"]]);
  const _sfc_main$K = {
    inheritAttrs: false
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return openBlock(), createElementBlock("li", null, [
      createBaseVNode(
        "div",
        mergeProps({
          role: "option",
          class: "dropdown-item clickable fw-medium"
        }, _ctx.$attrs),
        [
          renderSlot(_ctx.$slots, "default")
        ],
        16
        /* FULL_PROPS */
      )
    ]);
  }
  const BaseDropdownItem = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["render", _sfc_render$g]]);
  const _hoisted_1$B = ["name", "value"];
  const _sfc_main$J = /* @__PURE__ */ defineComponent({
    __name: "BaseSelectList",
    props: {
      label: { default: "Select item" },
      modelValue: null,
      name: null,
      options: null
    },
    emits: ["update:modelValue", "select"],
    setup(__props, { emit: emit2 }) {
      const props = __props;
      const label = computed(() => {
        var _a;
        const selected = (_a = props.options.find(
          (option) => option.value === props.modelValue
        )) == null ? void 0 : _a.label;
        return selected || props.label;
      });
      function select(value) {
        if (value === props.modelValue) {
          return;
        }
        emit2("select", value);
        emit2("update:modelValue", value);
      }
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock("div", null, [
          createBaseVNode("input", {
            type: "hidden",
            name: props.name,
            value: props.modelValue
          }, null, 8, _hoisted_1$B),
          createVNode(unref(BaseDropdown), { class: "theme" }, {
            button: withCtx(() => [
              createTextVNode(
                toDisplayString(unref(label)),
                1
                /* TEXT */
              )
            ]),
            default: withCtx(() => [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(__props.options, (option) => {
                  return openBlock(), createBlock(unref(BaseDropdownItem), {
                    key: option.value,
                    "aria-selected": option.value === __props.modelValue,
                    class: normalizeClass({ active: option.value === __props.modelValue }),
                    onClick: ($event) => select(option.value)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(
                        toDisplayString(option.label),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["aria-selected", "class", "onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          })
        ]);
      };
    }
  });
  const _hoisted_1$A = ["name", "min", "max", "step", "value"];
  const _sfc_main$I = /* @__PURE__ */ defineComponent({
    __name: "BaseRangeInput",
    props: {
      max: null,
      min: null,
      modelValue: null,
      name: null,
      step: null,
      steps: null
    },
    emits: ["update:modelValue"],
    setup(__props, { emit: emit2 }) {
      function onInput(event) {
        emit2("update:modelValue", event.target.valueAsNumber);
      }
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock("input", {
          class: "form-range",
          type: "range",
          name: __props.name,
          min: __props.min,
          max: __props.max,
          step: __props.step,
          value: __props.modelValue,
          onInputPassive: onInput
        }, null, 40, _hoisted_1$A);
      };
    }
  });
  const BaseRangeInput_vue_vue_type_style_index_0_scoped_6a6d56c5_lang = "";
  const BaseRangeInput = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["__scopeId", "data-v-6a6d56c5"]]);
  const _hoisted_1$z = { class: "container-fluid p-0" };
  const _hoisted_2$p = { class: "row form-group rounded-top gx-1" };
  const _hoisted_3$o = { class: "col" };
  const _hoisted_4$f = ["value", "max"];
  const _hoisted_5$b = { class: "col" };
  const _hoisted_6$9 = {
    key: 0,
    class: "duration-label",
    "data-test": "duration-label"
  };
  const _hoisted_7$8 = { class: "row slider gx-1" };
  const _hoisted_8$7 = { class: "form-group py-2 px-3 rounded-bottom" };
  const limits = Object.entries(SpendLimitDuration).map(
    ([key, value]) => {
      let label = key.charAt(0).toUpperCase() + key.slice(1).toLowerCase();
      if (key === SpendLimitDuration.TRANSACTION) {
        label = `Per ${label}`;
      }
      return {
        value,
        label
      };
    }
  );
  const _sfc_main$H = /* @__PURE__ */ defineComponent({
    __name: "SpendLimitModal",
    props: {
      isSingleUse: { type: Boolean },
      amount: null,
      cardIsShared: { type: Boolean },
      duration: null,
      maxAmount: { default: 5e3 },
      open: { type: Boolean }
    },
    emits: ["submit"],
    setup(__props, { emit: emit2 }) {
      const props = __props;
      const currentDuration = ref("");
      const currentAmount = ref(props.amount || 1);
      const invalid = ref("");
      const amountInput = ref(null);
      const form = ref(null);
      const limitOptions = computed(() => {
        const options = limits.slice();
        if (props.cardIsShared) {
          const txnIndex = options.findIndex(
            (option) => option.value === SpendLimitDuration.TRANSACTION
          );
          options.splice(txnIndex, 1);
        }
        return options;
      });
      watchEffect(() => {
        currentAmount.value = props.amount || 1;
        currentDuration.value = props.duration;
      });
      function updateAmount(event) {
        var _a;
        const target = event.target;
        currentAmount.value = target.valueAsNumber;
        invalid.value = ((_a = amountInput.value) == null ? void 0 : _a.validationMessage) || "";
      }
      function onSubmit(event) {
        event.preventDefault();
        emit2("submit", {
          amount: currentAmount.value,
          duration: currentDuration.value
        });
      }
      function onRemove() {
        emit2("submit", {
          amount: null,
          duration: "REMOVE"
        });
      }
      function reset() {
        currentDuration.value = props.duration || "";
        currentAmount.value = props.amount || 1;
        invalid.value = "";
      }
      return (_ctx, _cache) => {
        return openBlock(), createBlock(BaseModal, {
          class: "spend-limit-modal",
          title: "Spend Limit",
          open: props.open,
          overflow: "visible",
          onClose: reset,
          showCloseButton: true
        }, {
          footer: withCtx(() => [
            createVNode(BaseButton, {
              variant: "primary",
              type: "submit",
              form: "spend-limits",
              disabled: !!invalid.value
            }, {
              default: withCtx(() => [
                createTextVNode(" Done ")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["disabled"]),
            !__props.cardIsShared && !__props.isSingleUse ? (openBlock(), createBlock(BaseButton, {
              key: 0,
              "data-test": "remove-limit",
              variant: "secondary",
              onClick: onRemove
            }, {
              default: withCtx(() => [
                createTextVNode(" Remove ")
              ]),
              _: 1
              /* STABLE */
            })) : createCommentVNode("v-if", true)
          ]),
          default: withCtx(() => [
            createBaseVNode(
              "form",
              {
                id: "spend-limits",
                ref_key: "form",
                ref: form,
                novalidate: "",
                onSubmit
              },
              [
                invalid.value ? (openBlock(), createBlock(BaseAlert, {
                  key: 0,
                  variant: "danger",
                  class: "mb-2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(
                      toDisplayString(invalid.value),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })) : createCommentVNode("v-if", true),
                __props.cardIsShared ? (openBlock(), createBlock(BaseAlert, {
                  key: 1,
                  variant: "info",
                  class: "mb-2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(
                      " The spend limit for Shared Cards cannot exceed $" + toDisplayString(new Intl.NumberFormat("en-US").format(__props.maxAmount)) + ". ",
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })) : createCommentVNode("v-if", true),
                __props.isSingleUse ? (openBlock(), createBlock(BaseAlert, {
                  key: 2,
                  variant: "info",
                  class: "mb-2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Single-Use cards close shortly after the first transaction. ")
                  ]),
                  _: 1
                  /* STABLE */
                })) : createCommentVNode("v-if", true),
                createBaseVNode("div", _hoisted_1$z, [
                  createBaseVNode("div", _hoisted_2$p, [
                    createBaseVNode("div", _hoisted_3$o, [
                      createVNode(BaseInputGroup, { prefix: "$" }, {
                        default: withCtx(() => [
                          createBaseVNode("input", {
                            ref_key: "amountInput",
                            ref: amountInput,
                            type: "number",
                            inputmode: "numeric",
                            class: "form-control limit-amount ps-1",
                            id: "spend-limit",
                            name: "amount",
                            min: "1",
                            required: "",
                            "aria-label": "Amount",
                            value: currentAmount.value,
                            onInput: updateAmount,
                            max: __props.maxAmount
                          }, null, 40, _hoisted_4$f)
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    createBaseVNode("div", _hoisted_5$b, [
                      __props.isSingleUse ? (openBlock(), createElementBlock("div", _hoisted_6$9, " Single Use ")) : (openBlock(), createBlock(_sfc_main$J, {
                        key: 1,
                        class: "duration-select",
                        modelValue: currentDuration.value,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currentDuration.value = $event),
                        name: "duration",
                        "data-test": "duration-select",
                        options: unref(limitOptions)
                      }, null, 8, ["modelValue", "options"]))
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_7$8, [
                    createBaseVNode("div", _hoisted_8$7, [
                      createVNode(BaseRangeInput, {
                        name: "amount",
                        modelValue: currentAmount.value,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => currentAmount.value = $event),
                        min: 1,
                        max: __props.maxAmount,
                        onInput: updateAmount
                      }, null, 8, ["modelValue", "max"])
                    ])
                  ])
                ])
              ],
              544
              /* HYDRATE_EVENTS, NEED_PATCH */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["open"]);
      };
    }
  });
  const SpendLimitModal_vue_vue_type_style_index_0_scoped_d8d9d1f1_lang = "";
  const SpendLimitModal = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__scopeId", "data-v-d8d9d1f1"]]);
  const _withScopeId$7 = (n) => (pushScopeId("data-v-b5d51b1b"), n = n(), popScopeId(), n);
  const _hoisted_1$y = { class: "spend-limit rounded-3" };
  const _hoisted_2$o = {
    key: 0,
    class: "p-3",
    "aria-hidden": "true",
    "data-test": "placeholder"
  };
  const _hoisted_3$n = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode(
    "div",
    { class: "placeholder-glow mb-1" },
    [
      /* @__PURE__ */ createBaseVNode("span", { class: "placeholder col-10" })
    ],
    -1
    /* HOISTED */
  ));
  const _hoisted_4$e = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode(
    "div",
    { class: "placeholder-glow" },
    [
      /* @__PURE__ */ createBaseVNode("span", { class: "placeholder col-8" })
    ],
    -1
    /* HOISTED */
  ));
  const _hoisted_5$a = [
    _hoisted_3$n,
    _hoisted_4$e
  ];
  const _hoisted_6$8 = ["disabled"];
  const _hoisted_7$7 = {
    class: "fw-medium mb-0",
    "data-test": "title"
  };
  const _hoisted_8$6 = {
    key: 0,
    class: "mb-0 mt-2",
    "data-test": "status"
  };
  const spendLimitMap = {
    [SpendLimitDuration.ANNUALLY]: "Yearly",
    [SpendLimitDuration.FOREVER]: "Total",
    [CardType.SINGLE_USE]: "Total",
    [SpendLimitDuration.MONTHLY]: "Monthly",
    [SpendLimitDuration.TRANSACTION]: "Transaction",
    REMOVE: null
  };
  const spendLimitAmountMap = {
    [SpendLimitDuration.ANNUALLY]: "spentThisYearRolling",
    [SpendLimitDuration.FOREVER]: "spentTotal",
    [CardType.SINGLE_USE]: "spentTotal",
    [SpendLimitDuration.MONTHLY]: "spentThisMonthRolling",
    [SpendLimitDuration.TRANSACTION]: null,
    REMOVE: null
  };
  const _sfc_main$G = /* @__PURE__ */ defineComponent({
    __name: "SpendLimitButton",
    props: {
      isSingleUse: { type: Boolean },
      cardIsShared: { type: Boolean, default: false },
      cardSharingSpendLimit: { default: 1e3 },
      disabled: { type: Boolean },
      loading: { type: Boolean, default: false },
      spendLimit: { default: 0 },
      spendLimitDuration: { default: SpendLimitDuration.TRANSACTION },
      spentThisMonthRolling: { default: 0 },
      spentThisWeek: { default: 0 },
      spentThisYearRolling: { default: 0 },
      spentTotal: { default: 0 }
    },
    emits: ["update"],
    setup(__props, { emit: emit2 }) {
      const props = __props;
      const effectiveSpendLimitDuration = computed(() => {
        return props.isSingleUse ? SpendLimitDuration.FOREVER : props.spendLimitDuration;
      });
      const modalOpen = ref(false);
      const spendLimitTitle = computed(() => {
        const { spendLimit } = props;
        let title = "Add Spend Limit";
        if (spendLimit) {
          title = `${spendLimitMap[effectiveSpendLimitDuration.value]} Spend Limit`;
        }
        return title;
      });
      const spendLimitStatus = computed(() => {
        const { spendLimit } = props;
        if (!spendLimit) {
          return;
        }
        const amountKey = spendLimitAmountMap[effectiveSpendLimitDuration.value];
        const limit = formatLimits(spendLimit);
        if (!amountKey) {
          return limit;
        }
        const amount = props[amountKey];
        return `${formatLimits(amount)} of ${formatLimits(spendLimit)}`;
      });
      function formatLimits(amount) {
        return formatCurrency(amount, {
          formatOptions: {
            maximumFractionDigits: 0
          }
        });
      }
      function updateSpendLimit(data2) {
        emit2("update", data2);
        modalOpen.value = false;
      }
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock("section", _hoisted_1$y, [
          __props.loading ? (openBlock(), createElementBlock("div", _hoisted_2$o, _hoisted_5$a)) : (openBlock(), createElementBlock("button", {
            key: 1,
            disabled: __props.disabled,
            "aria-label": "Adjust spend limits",
            class: "spend-limit-control w-100 p-3 rounded-3",
            onClick: _cache[0] || (_cache[0] = ($event) => modalOpen.value = true)
          }, [
            createBaseVNode(
              "p",
              _hoisted_7$7,
              toDisplayString(unref(spendLimitTitle)),
              1
              /* TEXT */
            ),
            unref(spendLimitStatus) ? (openBlock(), createElementBlock(
              "p",
              _hoisted_8$6,
              toDisplayString(unref(spendLimitStatus)),
              1
              /* TEXT */
            )) : createCommentVNode("v-if", true)
          ], 8, _hoisted_6$8)),
          createVNode(SpendLimitModal, {
            open: modalOpen.value,
            amount: __props.spendLimit,
            duration: unref(effectiveSpendLimitDuration),
            onSubmit: updateSpendLimit,
            onClose: _cache[1] || (_cache[1] = ($event) => modalOpen.value = false),
            "is-single-use": __props.isSingleUse,
            "card-is-shared": __props.cardIsShared,
            "max-amount": __props.cardIsShared ? __props.cardSharingSpendLimit : void 0
          }, null, 8, ["open", "amount", "duration", "is-single-use", "card-is-shared", "max-amount"])
        ]);
      };
    }
  });
  const SpendLimitButton_vue_vue_type_style_index_0_scoped_b5d51b1b_lang = "";
  const SpendLimitButton = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-b5d51b1b"]]);
  var FundingCardType = /* @__PURE__ */ ((FundingCardType2) => {
    FundingCardType2["STANDARD"] = "STANDARD";
    FundingCardType2["SUBSCRIPTION"] = "SUBSCRIPTION";
    return FundingCardType2;
  })(FundingCardType || {});
  var FundingType = /* @__PURE__ */ ((FundingType2) => {
    FundingType2["BANK_ACCOUNT"] = "BANK_ACCOUNT";
    FundingType2["CARD"] = "CARD";
    return FundingType2;
  })(FundingType || {});
  const useFundingStore = defineStore("funding", () => {
    const listState = ref([]);
    const source = computed(
      () => (uuidOrID) => {
        let funding2 = listState.value.find(
          (item) => item.uuid === uuidOrID || item.bankAccountID === uuidOrID
        );
        if (!funding2) {
          funding2 = listState.value.find((item) => item.default);
        }
        return funding2;
      }
    );
    const all = computed(() => listState.value);
    async function list2() {
      if (listState.value.length) {
        return Promise.resolve(listState.value);
      }
      const { data: data2 } = await list$2();
      const filteredData = data2.data.filter((fundingSource) => {
        if (fundingSource.fundingType === FundingCardType.SUBSCRIPTION) {
          return false;
        }
        return true;
      });
      listState.value = filteredData;
      return filteredData;
    }
    function $reset() {
      listState.value = [];
    }
    return {
      // actions
      $reset,
      list: list2,
      // getters
      source,
      all,
      // states
      data: listState
    };
  });
  const _sfc_main$F = {};
  const _hoisted_1$x = {
    width: "16",
    height: "16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$n = /* @__PURE__ */ createBaseVNode(
    "path",
    { d: "M3 2.8402C3 2.46115 3.40532 2.21995 3.73848 2.40074L13.23 7.55134C13.5784 7.74042 13.5788 8.24039 13.2306 8.42994L3.73908 13.5976C3.40591 13.779 3 13.5378 3 13.1585V2.8402Z" },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$m = [
    _hoisted_2$n
  ];
  function _sfc_render$f(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$x, _hoisted_3$m);
  }
  const IconPlay = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$f]]);
  const _sfc_main$E = {};
  const _hoisted_1$w = {
    width: "16",
    height: "16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$m = /* @__PURE__ */ createBaseVNode(
    "path",
    { d: "M6 2H2V14H6V2ZM14 2H10V14H14V2Z" },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$l = [
    _hoisted_2$m
  ];
  function _sfc_render$e(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$w, _hoisted_3$l);
  }
  const IconPause = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$e]]);
  const _sfc_main$D = {};
  const _hoisted_1$v = {
    width: "16",
    height: "16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$l = /* @__PURE__ */ createBaseVNode(
    "path",
    { d: "M0 8C0 6.89543 0.89543 6 2 6C3.10457 6 4 6.89543 4 8C4 9.10457 3.10457 10 2 10C0.89543 10 0 9.10457 0 8ZM6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8ZM14 6C12.8954 6 12 6.89543 12 8C12 9.10457 12.8954 10 14 10C15.1046 10 16 9.10457 16 8C16 6.89543 15.1046 6 14 6Z" },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$k = [
    _hoisted_2$l
  ];
  function _sfc_render$d(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$v, _hoisted_3$k);
  }
  const IconEllipses = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$d]]);
  function useUpdateSpendLimit(card) {
    const current = computed(() => card.value);
    const cardType = computed(() => current.value.type);
    return function({ amount, duration }) {
      if (cardType.value === CardType.SINGLE_USE && !amount) {
        throw new Error("Can not remove limits on a Single-Use card");
      }
      const updateData = {
        spendLimit: amount
      };
      if (duration === "REMOVE") {
        updateData.spendLimitDuration = SpendLimitDuration.TRANSACTION;
      } else {
        updateData.spendLimitDuration = duration;
      }
      return updateData;
    };
  }
  const _hoisted_1$u = {
    class: "h1 nickname clickable w-100 m-0",
    "aria-label": "Card Nickname"
  };
  const _hoisted_2$k = {
    class: "memo text-truncate",
    "aria-hidden": "true",
    "data-test": "nickname-label"
  };
  const _sfc_main$C = /* @__PURE__ */ defineComponent({
    __name: "CardNickname",
    props: {
      value: null
    },
    emits: ["update"],
    setup(__props, { emit: emit2 }) {
      const props = __props;
      const nickname = ref(props.value);
      function handleUpdate() {
        if (nickname.value === "") {
          nickname.value = props.value;
          return;
        }
        emit2("update", nickname.value.trim());
      }
      function handleKeyUp(event) {
        const target = event.target;
        target.blur();
      }
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock("label", _hoisted_1$u, [
          createBaseVNode(
            "div",
            _hoisted_2$k,
            toDisplayString(nickname.value),
            1
            /* TEXT */
          ),
          createVNode(BaseInput, {
            class: "nickname-input",
            maxlength: "255",
            name: "nickname",
            modelValue: nickname.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => nickname.value = $event),
            onKeyup: withKeys(withModifiers(handleKeyUp, ["stop", "prevent"]), ["enter"]),
            onBlur: handleUpdate
          }, null, 8, ["modelValue", "onKeyup"])
        ]);
      };
    }
  });
  const CardNickname_vue_vue_type_style_index_0_scoped_a5a2cc71_lang = "";
  const CardNickname = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__scopeId", "data-v-a5a2cc71"]]);
  const _hoisted_1$t = /* @__PURE__ */ createBaseVNode(
    "p",
    null,
    "This can't be undone.",
    -1
    /* HOISTED */
  );
  const _sfc_main$B = /* @__PURE__ */ defineComponent({
    __name: "ModalCloseCard",
    props: {
      open: { type: Boolean }
    },
    emits: ["confirm", "close"],
    setup(__props) {
      return (_ctx, _cache) => {
        return openBlock(), createBlock(BaseModal, {
          class: "close-card-modal",
          title: "Permanently close this card?",
          open: __props.open,
          onClose: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("close"))
        }, {
          footer: withCtx(() => [
            createVNode(BaseButton, {
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("confirm"))
            }, {
              default: withCtx(() => [
                createTextVNode("Close Card")
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(BaseButton, {
              variant: "secondary",
              onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("close"))
            }, {
              default: withCtx(() => [
                createTextVNode(" Cancel ")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          default: withCtx(() => [
            _hoisted_1$t
          ]),
          _: 1
          /* STABLE */
        }, 8, ["open"]);
      };
    }
  });
  const _withScopeId$6 = (n) => (pushScopeId("data-v-7b49cb28"), n = n(), popScopeId(), n);
  const _hoisted_1$s = {
    key: 0,
    class: "p-3",
    "aria-hidden": "true",
    "data-test": "placeholder"
  };
  const _hoisted_2$j = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode(
    "div",
    { class: "placeholder-glow mb-1" },
    [
      /* @__PURE__ */ createBaseVNode("span", { class: "placeholder col-10" })
    ],
    -1
    /* HOISTED */
  ));
  const _hoisted_3$j = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode(
    "div",
    { class: "placeholder-glow" },
    [
      /* @__PURE__ */ createBaseVNode("span", { class: "placeholder col-8" })
    ],
    -1
    /* HOISTED */
  ));
  const _hoisted_4$d = [
    _hoisted_2$j,
    _hoisted_3$j
  ];
  const _hoisted_5$9 = ["disabled"];
  const _hoisted_6$7 = {
    class: "fw-medium mb-0",
    "data-test": "title"
  };
  const _hoisted_7$6 = { class: "mt-2" };
  const _hoisted_8$5 = ["src"];
  const _hoisted_9$3 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode(
    "sup",
    { class: "spacer" },
    "…",
    -1
    /* HOISTED */
  ));
  const apiUrl = "https://app.privacy.com";
  const _sfc_main$A = /* @__PURE__ */ defineComponent({
    __name: "FundingButton",
    props: {
      loading: { type: Boolean, default: false },
      disabled: { type: Boolean, default: true },
      isSelected: { type: Boolean, default: false },
      showBorder: { type: Boolean, default: true },
      source: null
    },
    setup(__props) {
      const props = __props;
      const icon = computed(() => {
        var _a, _b, _c;
        if ((_b = (_a = props.source) == null ? void 0 : _a.icon) == null ? void 0 : _b.startsWith("/")) {
          return apiUrl + props.source.icon;
        }
        return (_c = props.source) == null ? void 0 : _c.icon;
      });
      const fundingType = computed(() => {
        var _a;
        if (((_a = props.source) == null ? void 0 : _a.type) === FundingType.BANK_ACCOUNT) {
          return "bank";
        }
        return "card";
      });
      const fundingName = computed(() => {
        var _a;
        return (((_a = props.source) == null ? void 0 : _a.name) || "Funding Source").slice(0, 20);
      });
      const fundingInstitution = computed(() => {
        var _a;
        return (((_a = props.source) == null ? void 0 : _a.institution) || "").slice(0, 20);
      });
      const fallbackIcon = ref("");
      function iconError() {
        fallbackIcon.value = apiUrl + "/assets/images/icons/bank-40.svg";
      }
      return (_ctx, _cache) => {
        var _a;
        return openBlock(), createElementBlock(
          "section",
          {
            class: normalizeClass(
              (__props.showBorder ? "funding rounded-3 " : "px-4 ") + (__props.isSelected ? "funding-selected " : "")
            )
          },
          [
            __props.loading ? (openBlock(), createElementBlock("div", _hoisted_1$s, _hoisted_4$d)) : (openBlock(), createElementBlock("button", {
              key: 1,
              disabled: __props.disabled,
              class: "funding-control w-100 p-3 rounded-3"
            }, [
              createBaseVNode(
                "p",
                _hoisted_6$7,
                toDisplayString(unref(fundingName)),
                1
                /* TEXT */
              ),
              createBaseVNode("div", _hoisted_7$6, [
                createBaseVNode(
                  "div",
                  {
                    class: normalizeClass(["icon-wrap", {
                      fallback: fallbackIcon.value,
                      [`icon-${unref(fundingType)}`]: true
                    }])
                  },
                  [
                    unref(icon) ? (openBlock(), createElementBlock("img", {
                      key: 0,
                      class: normalizeClass(["icon me-1", {
                        fallback: fallbackIcon.value,
                        [`icon-${unref(fundingType)}`]: true
                      }]),
                      src: fallbackIcon.value || unref(icon),
                      alt: "",
                      onError: iconError
                    }, null, 42, _hoisted_8$5)) : createCommentVNode("v-if", true)
                  ],
                  2
                  /* CLASS */
                ),
                createTextVNode(
                  " " + toDisplayString(unref(fundingInstitution)) + " ",
                  1
                  /* TEXT */
                ),
                _hoisted_9$3,
                createTextVNode(
                  " " + toDisplayString((_a = __props.source) == null ? void 0 : _a.number),
                  1
                  /* TEXT */
                )
              ])
            ], 8, _hoisted_5$9))
          ],
          2
          /* CLASS */
        );
      };
    }
  });
  const FundingButton_vue_vue_type_style_index_0_scoped_7b49cb28_lang = "";
  const FundingButton = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-7b49cb28"]]);
  const _hoisted_1$r = { class: "container-fluid p-0" };
  const _sfc_main$z = /* @__PURE__ */ defineComponent({
    __name: "FundingModal",
    props: {
      bankAccountID: null,
      fundingSources: null,
      open: { type: Boolean }
    },
    emits: ["update"],
    setup(__props, { emit: emit2 }) {
      const props = __props;
      const currentBankAccountID = ref();
      watchEffect(() => {
        currentBankAccountID.value = props.bankAccountID;
      });
      function reset() {
        currentBankAccountID.value = props.bankAccountID;
      }
      function updateHandler(fundingSource, event) {
        currentBankAccountID.value = fundingSource.bankAccountID;
        event.preventDefault();
        emit2("update", currentBankAccountID.value);
      }
      return (_ctx, _cache) => {
        return openBlock(), createBlock(BaseModal, {
          class: "funding-modal",
          title: "Funding Source",
          open: props.open,
          overflow: "visible",
          padSides: false,
          showCloseButton: true,
          onClose: reset
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1$r, [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(__props.fundingSources, (source) => {
                  return openBlock(), createBlock(FundingButton, {
                    showBorder: false,
                    isSelected: source.bankAccountID === currentBankAccountID.value,
                    disabled: false,
                    key: source.uuid,
                    source,
                    onClick: (event) => updateHandler(source, event)
                  }, null, 8, ["isSelected", "source", "onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["open"]);
      };
    }
  });
  const FundingModal_vue_vue_type_style_index_0_scoped_4b2916bb_lang = "";
  const FundingModal = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-4b2916bb"]]);
  const BasePill_vue_vue_type_style_index_0_scoped_20afdb2a_lang = "";
  const _sfc_main$y = {};
  const _hoisted_1$q = { class: "badge badge-pill base-pill" };
  function _sfc_render$c(_ctx, _cache) {
    return openBlock(), createElementBlock("span", _hoisted_1$q, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]);
  }
  const BasePill = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$c], ["__scopeId", "data-v-20afdb2a"]]);
  const _sfc_main$x = {};
  const _hoisted_1$p = {
    width: "16",
    height: "16",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$i = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      d: "M3 5C3 2.23858 5.23858 0 8 0C10.7614 0 13 2.23858 13 5V7H15V16H1V7H3V5ZM11 7H5V5C5 3.34315 6.34315 2 8 2C9.65685 2 11 3.34315 11 5V7Z",
      fill: "currentColor",
      "fill-rule": "evenodd"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$i = [
    _hoisted_2$i
  ];
  function _sfc_render$b(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$p, _hoisted_3$i);
  }
  const IconPadlock = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$b]]);
  const _hoisted_1$o = ["value"];
  const _sfc_main$w = /* @__PURE__ */ defineComponent({
    __name: "BaseTextArea",
    props: {
      modelValue: { default: "" }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit: emit2 }) {
      const emitValue = ($event) => emit2("update:modelValue", $event.target.value);
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock("textarea", {
          class: "form-control",
          value: __props.modelValue,
          onInput: emitValue
        }, null, 40, _hoisted_1$o);
      };
    }
  });
  const _withScopeId$5 = (n) => (pushScopeId("data-v-89d95e56"), n = n(), popScopeId(), n);
  const _hoisted_1$n = { class: "note-section rounded-3" };
  const _hoisted_2$h = {
    key: 0,
    class: "p-3",
    "aria-hidden": "true"
  };
  const _hoisted_3$h = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode(
    "div",
    { class: "placeholder-glow" },
    [
      /* @__PURE__ */ createBaseVNode("span", { class: "placeholder col-10" })
    ],
    -1
    /* HOISTED */
  ));
  const _hoisted_4$c = [
    _hoisted_3$h
  ];
  const _hoisted_5$8 = {
    key: 1,
    class: "note clickable m-0 w-100",
    "aria-label": "Card Note"
  };
  const _hoisted_6$6 = {
    key: 0,
    "data-test": "note-edit"
  };
  const _hoisted_7$5 = {
    class: "note-counter m-0 p-2",
    "data-test": "note-counter"
  };
  const _hoisted_8$4 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode(
    "p",
    {
      class: "note-warning m-0 p-2",
      "data-test": "note-warning"
    },
    [
      /* @__PURE__ */ createBaseVNode("span", { class: "fw-medium" }, "Please note:"),
      /* @__PURE__ */ createTextVNode(" For your security, avoid entering sensitive account information here, such as passwords or credit card numbers. ")
    ],
    -1
    /* HOISTED */
  ));
  const _hoisted_9$2 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode(
    "span",
    { class: "note-upgrade-text" },
    "Upgrade to edit notes",
    -1
    /* HOISTED */
  ));
  const _sfc_main$v = /* @__PURE__ */ defineComponent({
    __name: "CardNote",
    props: {
      value: null,
      loading: { type: Boolean, default: false },
      hasCardNoteFeature: { type: Boolean, default: false }
    },
    emits: ["update"],
    setup(__props, { emit: emit2 }) {
      const props = __props;
      const MAX_NOTE_LENGTH = 300;
      const MAX_ROWS = 12;
      const note = ref(props.value ?? "");
      const isFocused = ref(false);
      const charactersLeft = computed(
        () => {
          var _a;
          return MAX_NOTE_LENGTH - (((_a = note == null ? void 0 : note.value) == null ? void 0 : _a.length) ?? 0);
        }
      );
      function handleUpdate() {
        isFocused.value = false;
        if (note.value === props.value) {
          return;
        }
        emit2("update", note.value);
      }
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock("div", null, [
          createBaseVNode("section", _hoisted_1$n, [
            __props.loading ? (openBlock(), createElementBlock("div", _hoisted_2$h, _hoisted_4$c)) : (openBlock(), createElementBlock("label", _hoisted_5$8, [
              createBaseVNode(
                "p",
                {
                  class: normalizeClass([
                    "note-text",
                    "m-0",
                    "p-3",
                    {
                      "note-placeholder": !note.value,
                      "note-disabled": !__props.hasCardNoteFeature
                    }
                  ]),
                  "aria-hidden": "true",
                  "data-test": "note-label"
                },
                toDisplayString(!!note.value ? note.value : "Add a note..."),
                3
                /* TEXT, CLASS */
              ),
              createVNode(_sfc_main$w, {
                class: "note-input p-3",
                maxlength: MAX_NOTE_LENGTH,
                rows: MAX_ROWS,
                name: "note",
                modelValue: note.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => note.value = $event),
                onBlur: handleUpdate,
                onFocus: _cache[1] || (_cache[1] = ($event) => isFocused.value = true),
                disabled: !__props.hasCardNoteFeature
              }, null, 8, ["modelValue", "disabled"])
            ]))
          ]),
          isFocused.value ? (openBlock(), createElementBlock("div", _hoisted_6$6, [
            createBaseVNode(
              "p",
              _hoisted_7$5,
              toDisplayString(unref(charactersLeft)) + " / " + toDisplayString(MAX_NOTE_LENGTH),
              1
              /* TEXT */
            ),
            _hoisted_8$4
          ])) : createCommentVNode("v-if", true),
          !__props.hasCardNoteFeature ? (openBlock(), createBlock(BasePill, {
            key: 1,
            class: "note-upgrade mt-2 px-3 py-2 fw-medium badge-secondary",
            "data-test": "note-upgrade"
          }, {
            default: withCtx(() => [
              createVNode(IconPadlock),
              _hoisted_9$2
            ]),
            _: 1
            /* STABLE */
          })) : createCommentVNode("v-if", true)
        ]);
      };
    }
  });
  const CardNote_vue_vue_type_style_index_0_scoped_89d95e56_lang = "";
  const CardNote = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-89d95e56"]]);
  const useSubscriptionsStore = defineStore("subscriptions", () => {
    const subscriptionState = ref();
    const hasFeature = computed(
      () => (feature) => {
        var _a, _b;
        return !!((_b = (_a = subscriptionState.value) == null ? void 0 : _a.features) == null ? void 0 : _b[feature]);
      }
    );
    const featureValue = computed(
      () => (feature) => {
        var _a, _b;
        return (_b = (_a = subscriptionState.value) == null ? void 0 : _a.features) == null ? void 0 : _b[feature];
      }
    );
    async function get2() {
      const { data: data2 } = await subscription();
      const subscription$1 = data2.data[0];
      subscriptionState.value = subscription$1;
      return subscription$1;
    }
    return {
      // actions
      get: get2,
      // getters
      hasFeature,
      featureValue,
      // state
      subscriptionState
    };
  });
  const _withScopeId$4 = (n) => (pushScopeId("data-v-295229a8"), n = n(), popScopeId(), n);
  const _hoisted_1$m = { class: "px-4" };
  const _hoisted_2$g = {
    key: 0,
    class: "text-center"
  };
  const _hoisted_3$g = { class: "mb-3" };
  const _hoisted_4$b = {
    key: 0,
    "aria-hidden": "true",
    class: "placeholder-glow",
    "data-test": "details-placeholder"
  };
  const _hoisted_5$7 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode(
    "span",
    { class: "placeholder col-7" },
    null,
    -1
    /* HOISTED */
  ));
  const _hoisted_6$5 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode(
    "span",
    { class: "placeholder col-4 offset-1" },
    null,
    -1
    /* HOISTED */
  ));
  const _hoisted_7$4 = [
    _hoisted_5$7,
    _hoisted_6$5
  ];
  const _hoisted_8$3 = {
    key: 1,
    class: "d-flex"
  };
  const _hoisted_9$1 = { class: "min-w-0 w-100" };
  const _hoisted_10$1 = {
    key: 0,
    class: "h1 text-truncate"
  };
  const _hoisted_11$1 = {
    key: 0,
    class: "d-flex flex-shrink-1 text-end"
  };
  const _hoisted_12$1 = { class: "mb-3" };
  const _hoisted_13$1 = { key: 1 };
  const _hoisted_14$1 = { key: 2 };
  const _hoisted_15$1 = {
    key: 3,
    class: "category p-3 rounded-3 mt-2"
  };
  const _hoisted_16$1 = ["title"];
  const _sfc_main$u = /* @__PURE__ */ defineComponent({
    __name: "CardDetails",
    setup(__props) {
      const route = useRoute();
      const cardsStore = useCardsStore();
      const userStore2 = useUserStore();
      const eventStore2 = useEventStore();
      const fundingStore = useFundingStore();
      const subscriptionsStore = useSubscriptionsStore();
      const cardUuid = route.params.uuid;
      const loadingCard = ref(true);
      const loadingFunding = ref(true);
      const loadingSubscription = ref(true);
      const loadingError = ref("");
      const fundingError = ref("");
      const updating = ref(false);
      const showCloseCardModal = ref(false);
      const showFundingModal = ref(false);
      const paymentInputsFound = useFoundPaymentInputs();
      const interstitial = inject("context") === CONTEXT.INTERSTITIAL;
      onMounted(async () => {
        loadCard();
        loadFunding();
        loadSubscription();
      });
      const card = computed(() => cardsStore.card(cardUuid) || {});
      const cardUser = computed(() => ({
        name: userStore2.user.firstName + " " + userStore2.user.lastName,
        firstName: userStore2.user.firstName,
        lastName: userStore2.user.lastName,
        streetAddress: userStore2.user.address1 + " " + userStore2.user.address2,
        addressLine1: userStore2.user.address1,
        addressLine2: userStore2.user.address2,
        addressLevel2: userStore2.user.city,
        addressLevel1: userStore2.user.state,
        postalCode: userStore2.user.zipcode
      }));
      const funding = computed(
        () => fundingStore.source(card.value.bankAccountUuid || card.value.fundingAccount)
      );
      const fundingSources = computed(() => fundingStore.all);
      const nickname = useCardNickname(card);
      const note = ref(card.value.note || "");
      const updateSpendLimit = useUpdateSpendLimit(card);
      const hasCardNoteFeature = computed(
        () => subscriptionsStore.hasFeature(SubscriptionFeaturesEnum.CARD_NOTES)
      );
      const cardIsShared = computed(() => {
        var _a, _b;
        return !!((_b = (_a = card.value) == null ? void 0 : _a.sharedWithRecipients) == null ? void 0 : _b.length);
      });
      const cardSharingSpendLimit = computed(() => {
        return subscriptionsStore.featureValue(
          SubscriptionFeaturesEnum.CARD_SHARING_SPEND_LIMIT
        );
      });
      const isCategoryCard = computed(
        () => card.value.type === CardType.UNLOCKED && !!card.value.merchantCategory && card.value.merchantCategory.name
      );
      const categoryName = computed(() => {
        return card.value.merchantCategory.name.toUpperCase();
      });
      const paused = computed(() => card.value.state === CardState.PAUSED);
      const active = computed(() => {
        const { state } = card.value;
        return state === CardState.OPEN || paused.value;
      });
      const showUseCard = computed(() => {
        return paymentInputsFound.value && active.value;
      });
      async function loadCard() {
        loadingError.value = "";
        loadingCard.value = true;
        try {
          await cardsStore.get(cardUuid);
          eventStore2.track({
            name: CARD_EVENTS.VIEWED,
            data: { cardUuid }
          });
        } catch (err) {
          loadingError.value = "Unable to load card details";
          eventStore2.error([
            {
              name: CARD_EVENTS.VIEWED,
              data: {
                cardUuid,
                error: err
              }
            }
          ]);
        } finally {
          loadingCard.value = false;
        }
      }
      async function loadFunding() {
        loadingFunding.value = true;
        fundingError.value = "";
        try {
          await fundingStore.list();
        } catch (err) {
          fundingError.value = "Unable to load funding source";
        } finally {
          loadingFunding.value = false;
        }
      }
      async function loadSubscription() {
        loadingSubscription.value = true;
        try {
          await subscriptionsStore.get();
        } catch (err) {
        } finally {
          loadingSubscription.value = false;
        }
      }
      async function togglePause() {
        const state = card.value.state === CardState.OPEN ? CardState.PAUSED : CardState.OPEN;
        const event = state === CardState.OPEN ? CARD_EVENTS.PAUSED : CARD_EVENTS.RESUMED;
        try {
          updating.value = true;
          await cardsStore.setState(cardUuid, { state });
          eventStore2.track({
            name: event,
            data: { cardUuid }
          });
          const status = state === CardState.OPEN ? "resumed" : state.toLowerCase();
          popupAlert("Card " + status, "success");
        } catch (err) {
          eventStore2.error([
            {
              name: event,
              data: {
                cardUuid,
                state,
                error: err
              }
            }
          ]);
          popupAlert("Unable to update card");
        } finally {
          updating.value = false;
        }
      }
      async function closeCard() {
        try {
          updating.value = true;
          await cardsStore.setState(cardUuid, { state: "CLOSED" });
          showCloseCardModal.value = false;
          popupAlert("Card closed", "success");
          eventStore2.track({
            name: CARD_EVENTS.CLOSED,
            data: { cardUuid }
          });
        } catch (err) {
          eventStore2.error([
            {
              name: CARD_EVENTS.CLOSED,
              data: {
                cardUuid,
                error: err
              }
            }
          ]);
          popupAlert("Unable to close card");
        } finally {
          updating.value = false;
        }
      }
      async function handleSpendLimitUpdate(event) {
        let updateData;
        try {
          updateData = updateSpendLimit(event);
        } catch (err) {
          popupAlert(err.message);
          return;
        }
        try {
          updating.value = true;
          await cardsStore.update(cardUuid, updateData);
          popupAlert("Spend limit updated", "success");
          eventStore2.track({
            name: CARD_EVENTS.SET_SPEND_LIMIT,
            data: { cardUuid, ...updateData }
          });
        } catch (err) {
          eventStore2.error([
            {
              name: CARD_EVENTS.SET_SPEND_LIMIT,
              data: {
                cardUuid,
                ...updateData,
                error: err
              }
            }
          ]);
          const error2 = err;
          popupAlert(error2.message || "Unable to update spend limits");
        } finally {
          updating.value = false;
        }
      }
      async function handleFundingSourceUpdate(bankAccountID) {
        var _a;
        if (!bankAccountID || bankAccountID === ((_a = funding.value) == null ? void 0 : _a.bankAccountID)) {
          return;
        }
        try {
          updating.value = true;
          await cardsStore.update(cardUuid, { bankAccountID });
          eventStore2.track({
            name: CARD_EVENTS.SET_FUNDING_SOURCE,
            data: { cardUuid, bankAccountID }
          });
          showFundingModal.value = false;
        } catch (err) {
          eventStore2.error([
            {
              name: CARD_EVENTS.SET_FUNDING_SOURCE,
              data: {
                cardUuid,
                bankAccountID,
                error: err
              }
            }
          ]);
          popupAlert("Unable to update funding source");
        } finally {
          updating.value = false;
        }
      }
      async function handleNicknameUpdate(value) {
        if (value === nickname.value) {
          return;
        }
        try {
          updating.value = true;
          await cardsStore.update(cardUuid, { memo: value });
          eventStore2.track({
            name: CARD_EVENTS.SET_NICKNAME,
            data: { cardUuid, nickname: value }
          });
        } catch (err) {
          eventStore2.error([
            {
              name: CARD_EVENTS.SET_NICKNAME,
              data: {
                cardUuid,
                nickname: value,
                error: err
              }
            }
          ]);
          popupAlert("Unable to update nickname");
        } finally {
          updating.value = false;
        }
      }
      async function handleNoteUpdate(value) {
        if (value === note.value) {
          return;
        }
        try {
          updating.value = true;
          await cardsStore.setNote(cardUuid, { note: value });
          eventStore2.track({
            name: CARD_EVENTS.SET_NOTE,
            data: { cardUuid }
          });
        } catch (err) {
          eventStore2.error([
            {
              name: CARD_EVENTS.SET_NOTE,
              data: {
                cardUuid,
                error: err
              }
            }
          ]);
          popupAlert("Unable to set note");
        } finally {
          updating.value = false;
        }
      }
      async function fillAndRedirect() {
        await useFillCheckout(card.value, cardUser.value, paymentInputsFound.value);
        useShowCollapsedCard(card.value.cardUuid, interstitial);
      }
      return (_ctx, _cache) => {
        var _a;
        return openBlock(), createElementBlock("div", _hoisted_1$m, [
          loadingError.value ? (openBlock(), createElementBlock("div", _hoisted_2$g, [
            createVNode(BaseAlert, { variant: "warning" }, {
              default: withCtx(() => [
                createTextVNode(
                  toDisplayString(loadingError.value),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(BaseButton, {
              variant: "primary",
              class: "mt-3",
              onClick: loadCard,
              disabled: loadingCard.value
            }, {
              default: withCtx(() => [
                createTextVNode(" Try again ")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["disabled"])
          ])) : (openBlock(), createElementBlock(
            Fragment,
            { key: 1 },
            [
              createBaseVNode("header", _hoisted_3$g, [
                loadingCard.value ? (openBlock(), createElementBlock("div", _hoisted_4$b, _hoisted_7$4)) : (openBlock(), createElementBlock("div", _hoisted_8$3, [
                  createBaseVNode("div", _hoisted_9$1, [
                    !unref(active) ? (openBlock(), createElementBlock(
                      "div",
                      _hoisted_10$1,
                      toDisplayString(unref(nickname)),
                      1
                      /* TEXT */
                    )) : (openBlock(), createBlock(CardNickname, {
                      key: 1,
                      class: "nickname",
                      value: unref(nickname),
                      onUpdate: handleNicknameUpdate
                    }, null, 8, ["value"]))
                  ]),
                  unref(active) ? (openBlock(), createElementBlock("div", _hoisted_11$1, [
                    createVNode(BaseButton, {
                      class: "card-state",
                      variant: "icon",
                      onClick: togglePause,
                      disabled: updating.value,
                      "data-test": "resume-pause"
                    }, {
                      default: withCtx(() => [
                        !unref(paused) ? (openBlock(), createBlock(IconPause, {
                          key: 0,
                          "aria-label": "Pause card"
                        })) : (openBlock(), createBlock(IconPlay, {
                          key: 1,
                          "aria-label": "Resume card"
                        }))
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["disabled"]),
                    createVNode(unref(BaseDropdown), {
                      class: "card-menu",
                      "toggle-variant": "icon",
                      disabled: updating.value
                    }, {
                      button: withCtx(() => [
                        createVNode(IconEllipses, { "aria-label": "Card menu" })
                      ]),
                      default: withCtx(() => [
                        createVNode(unref(BaseDropdownItem), {
                          onClick: _cache[0] || (_cache[0] = ($event) => showCloseCardModal.value = true),
                          "data-test": "menu-close-card"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Close Card ")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        interstitial ? (openBlock(), createBlock(unref(BaseDropdownItem), {
                          key: 0,
                          onClick: _cache[1] || (_cache[1] = ($event) => unref(useShowCollapsedCard)(unref(card).cardUuid, interstitial)),
                          "data-test": "menu-show-collapsed-card"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Collapse Card ")
                          ]),
                          _: 1
                          /* STABLE */
                        })) : createCommentVNode("v-if", true)
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["disabled"])
                  ])) : (openBlock(), createBlock(BaseLabel, {
                    key: 1,
                    "data-test": "card-closed"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Closed")
                    ]),
                    _: 1
                    /* STABLE */
                  }))
                ]))
              ]),
              createBaseVNode("section", _hoisted_12$1, [
                createVNode(PrivacyCard, {
                  class: "privacy-card",
                  "copy-info": unref(active),
                  loading: loadingCard.value,
                  cvv: unref(card).CVV,
                  "exp-month": unref(card).expMonth,
                  "exp-year": unref(card).expYear,
                  mcc: unref(card).mcc,
                  "mcc-icon-url": unref(card).mccIconUrl,
                  network: unref(card).network,
                  pan: unref(card).PAN,
                  type: unref(card).type,
                  style: normalizeStyle(unref(card).style),
                  state: unref(card).state,
                  "merchant-category": unref(card).merchantCategory
                }, null, 8, ["copy-info", "loading", "cvv", "exp-month", "exp-year", "mcc", "mcc-icon-url", "network", "pan", "type", "style", "state", "merchant-category"])
              ]),
              unref(cardIsShared) ? (openBlock(), createBlock(BaseLabel, {
                key: 0,
                class: "mb-2 shared-label"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Shared Card ")
                ]),
                _: 1
                /* STABLE */
              })) : createCommentVNode("v-if", true),
              createBaseVNode("section", null, [
                unref(hasCardNoteFeature) || !!unref(card).note || loadingSubscription.value ? (openBlock(), createBlock(CardNote, {
                  key: 0,
                  class: "mb-2",
                  value: note.value,
                  loading: loadingSubscription.value,
                  hasCardNoteFeature: unref(hasCardNoteFeature),
                  onUpdate: handleNoteUpdate
                }, null, 8, ["value", "loading", "hasCardNoteFeature"])) : createCommentVNode("v-if", true)
              ]),
              createVNode(SpendLimitButton, {
                class: "mb-2",
                "is-single-use": unref(card).type === unref(CardType).SINGLE_USE,
                "card-is-shared": unref(cardIsShared),
                "card-sharing-spend-limit": unref(cardSharingSpendLimit),
                disabled: updating.value || !unref(active),
                loading: loadingCard.value,
                "spend-limit": unref(card).spendLimit,
                "spend-limit-duration": unref(card).spendLimitDuration,
                "spent-this-month-rolling": unref(card).spentThisMonthRolling,
                "spent-this-week": unref(card).spentThisWeek,
                "spent-this-year-rolling": unref(card).spentThisYearRolling,
                "spent-total": unref(card).spentTotal,
                onUpdate: handleSpendLimitUpdate
              }, null, 8, ["is-single-use", "card-is-shared", "card-sharing-spend-limit", "disabled", "loading", "spend-limit", "spend-limit-duration", "spent-this-month-rolling", "spent-this-week", "spent-this-year-rolling", "spent-total"]),
              fundingError.value ? (openBlock(), createElementBlock("div", _hoisted_13$1, [
                createBaseVNode(
                  "p",
                  null,
                  toDisplayString(fundingError.value),
                  1
                  /* TEXT */
                )
              ])) : (openBlock(), createElementBlock("div", _hoisted_14$1, [
                createVNode(FundingButton, {
                  loading: loadingFunding.value,
                  source: unref(funding),
                  disabled: unref(fundingSources).length <= 1,
                  onClick: _cache[2] || (_cache[2] = ($event) => showFundingModal.value = true)
                }, null, 8, ["loading", "source", "disabled"]),
                createVNode(FundingModal, {
                  loading: loadingFunding.value,
                  fundingSources: unref(fundingSources),
                  bankAccountID: (_a = unref(funding)) == null ? void 0 : _a.bankAccountID,
                  open: showFundingModal.value,
                  onUpdate: handleFundingSourceUpdate,
                  onClose: _cache[3] || (_cache[3] = ($event) => showFundingModal.value = false)
                }, null, 8, ["loading", "fundingSources", "bankAccountID", "open"])
              ])),
              unref(isCategoryCard) ? (openBlock(), createElementBlock("section", _hoisted_15$1, [
                createVNode(IconPadlock),
                createVNode(BasePill, { class: "category-pill" }, {
                  default: withCtx(() => [
                    createBaseVNode("span", {
                      class: "category-text",
                      "data-test": "category-badge",
                      title: unref(categoryName)
                    }, toDisplayString(unref(categoryName)), 9, _hoisted_16$1)
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])) : createCommentVNode("v-if", true),
              unref(showUseCard) && !unref(paused) ? (openBlock(), createBlock(BaseButton, {
                key: 4,
                "aria-label": "Fill payment form with this card",
                class: "w-100 mt-3",
                onClick: fillAndRedirect,
                "data-test": "use-card"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Autofill Card ")
                ]),
                _: 1
                /* STABLE */
              })) : createCommentVNode("v-if", true),
              createVNode(_sfc_main$B, {
                open: showCloseCardModal.value,
                onConfirm: closeCard,
                onClose: _cache[4] || (_cache[4] = ($event) => showCloseCardModal.value = false)
              }, null, 8, ["open"]),
              unref(card).cardID ? (openBlock(), createBlock(TransactionList, {
                key: 5,
                "card-id": unref(card).cardID,
                "is-collapsed": true,
                "show-card-link": false
              }, null, 8, ["card-id"])) : createCommentVNode("v-if", true)
            ],
            64
            /* STABLE_FRAGMENT */
          ))
        ]);
      };
    }
  });
  const CardDetails_vue_vue_type_style_index_0_scoped_295229a8_lang = "";
  const CardDetails = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-295229a8"]]);
  const MERCHANT_CATEGORIES_ROUTE = "/merchantCategories";
  function list() {
    return v2Api.get(MERCHANT_CATEGORIES_ROUTE);
  }
  const useMerchantCategoriesStore = defineStore("merchantCategories", () => {
    const merchantCategoriesState = ref({});
    async function list$12() {
      const { data: data2 } = await list();
      data2.data.forEach((category) => {
        merchantCategoriesState.value[category._id] = category;
      });
      return data2;
    }
    return {
      // actions
      list: list$12,
      // states
      merchantCategories: merchantCategoriesState
    };
  });
  const _hoisted_1$l = { class: "px-4" };
  const _hoisted_2$f = { class: "mb-3" };
  const _hoisted_3$f = { class: "mb-3" };
  const _hoisted_4$a = { class: "mb-3" };
  const _hoisted_5$6 = { key: 0 };
  const _hoisted_6$4 = { key: 1 };
  const _hoisted_7$3 = {
    key: 1,
    class: "d-flex",
    "data-test": "split-create"
  };
  const _hoisted_8$2 = /* @__PURE__ */ createBaseVNode(
    "span",
    { class: "visually-hidden" },
    "Toggle Dropdown",
    -1
    /* HOISTED */
  );
  const _sfc_main$t = /* @__PURE__ */ defineComponent({
    __name: "NewCard",
    setup(__props) {
      var _a, _b, _c;
      const cardsStore = useCardsStore();
      const fundingStore = useFundingStore();
      const userStore2 = useUserStore();
      const eventStore2 = useEventStore();
      const merchantCategoryStore = useMerchantCategoriesStore();
      const router2 = useRouter();
      const route = useRoute();
      const merchantCategory = ((_a = route == null ? void 0 : route.params) == null ? void 0 : _a.merchantCategory) ? merchantCategoryStore.merchantCategories[route.params.merchantCategory] : void 0;
      const card = ref({
        type: ((_b = route == null ? void 0 : route.params) == null ? void 0 : _b.type) || CardType.MERCHANT_LOCKED,
        merchantCategory,
        memo: "",
        hostname: "",
        meta: {},
        spendLimit: ((_c = route == null ? void 0 : route.params) == null ? void 0 : _c.type) === CardType.SINGLE_USE ? 100 : null,
        style: merchantCategory ? {
          icon: merchantCategory.icon,
          bgColor: merchantCategory.color
        } : null
      });
      const cardUser = computed(() => ({
        name: userStore2.user.firstName + " " + userStore2.user.lastName,
        firstName: userStore2.user.firstName,
        lastName: userStore2.user.lastName,
        streetAddress: userStore2.user.address1 + " " + userStore2.user.address2,
        addressLine1: userStore2.user.address1,
        addressLine2: userStore2.user.address2,
        addressLevel2: userStore2.user.city,
        addressLevel1: userStore2.user.state,
        postalCode: userStore2.user.zipcode
      }));
      const updateSpendLimit = useUpdateSpendLimit(card);
      const creating = ref(false);
      const paymentInputsFound = useFoundPaymentInputs();
      const interstitial = inject("context") === CONTEXT.INTERSTITIAL;
      const loadingFunding = ref(true);
      const fundingError = ref("");
      const showFundingModal = ref(false);
      const funding = computed(() => fundingStore.source(card.value.bankAccountID));
      const fundingSources = computed(() => fundingStore.all);
      onMounted(async () => {
        var _a2;
        loadFunding();
        let name = "Nickname";
        const activityConsent = await hasActivityConsent();
        if (merchantCategory) {
          name = merchantCategory.name;
        } else if (activityConsent) {
          try {
            const tab = await appExtensionApi.message.send({ event: "getCurrentTab" });
            if ((_a2 = tab == null ? void 0 : tab.url) == null ? void 0 : _a2.startsWith("http")) {
              const url = new URL(tab == null ? void 0 : tab.url);
              name = url.hostname.replace("www.", "");
              card.value.hostname = name;
              card.value.meta.hostname = name;
            }
          } catch (error2) {
          }
        }
        card.value.memo = name;
      });
      async function loadFunding() {
        loadingFunding.value = true;
        fundingError.value = "";
        try {
          await fundingStore.list();
        } catch (err) {
          fundingError.value = "Unable to load funding source";
        } finally {
          loadingFunding.value = false;
        }
      }
      function handleNickNameUpdate(value) {
        card.value.memo = value;
      }
      function handleSpendLimitUpdate(event) {
        let updateData;
        try {
          updateData = updateSpendLimit(event);
        } catch (err) {
          popupAlert(err.message);
          return;
        }
        card.value.spendLimit = updateData.spendLimit;
        card.value.spendLimitDuration = updateData.spendLimitDuration;
      }
      async function handleFundingSourceUpdate(bankAccountID) {
        var _a2;
        if (!bankAccountID || bankAccountID === ((_a2 = funding.value) == null ? void 0 : _a2.bankAccountID)) {
          return;
        }
        card.value.bankAccountID = bankAccountID;
        showFundingModal.value = false;
      }
      function getCardCreateData(card2) {
        const { merchantCategory: merchantCategory2, style, ...rest } = card2;
        const createData = rest;
        if (merchantCategory2) {
          createData.merchantCategory = card2.merchantCategory._id;
          if (!createData.meta) {
            createData.meta = {};
          }
          createData.meta.customStyle = card2.style;
        }
        return createData;
      }
      async function createCard(autofill = false) {
        var _a2;
        try {
          creating.value = true;
          const result = await cardsStore.create(getCardCreateData(card.value));
          if (autofill) {
            await useFillCheckout(result, cardUser.value, paymentInputsFound.value);
            useShowCollapsedCard(result.cardUuid, interstitial);
            return;
          }
          popupAlert("Card created", "success");
          eventStore2.track({
            name: CARD_EVENTS.CREATED,
            data: {
              cardType: result.type,
              spendLimit: result.spendLimit,
              spendLimitDuration: result.spendLimitDuration,
              merchantCategory: (_a2 = result.merchantCategory) == null ? void 0 : _a2._id
            }
          });
          router2.push({
            name: "card-details",
            params: { uuid: result.cardUuid }
          });
        } catch (err) {
          creating.value = false;
          popupAlert(err.message);
        }
      }
      return (_ctx, _cache) => {
        var _a2;
        return openBlock(), createElementBlock("div", _hoisted_1$l, [
          card.value.memo ? (openBlock(), createBlock(CardNickname, {
            key: 0,
            class: "mb-3",
            value: card.value.memo,
            onUpdate: handleNickNameUpdate
          }, null, 8, ["value"])) : createCommentVNode("v-if", true),
          createBaseVNode("section", _hoisted_2$f, [
            createVNode(PrivacyCard, {
              class: "mx-auto",
              "copy-info": false,
              cvv: card.value.CVV,
              "exp-month": card.value.expMonth,
              "exp-year": card.value.expYear,
              mcc: card.value.mcc,
              "mcc-icon-url": card.value.mccIconUrl,
              pan: card.value.PAN,
              type: card.value.type,
              style: normalizeStyle(card.value.style),
              network: card.value.network,
              "new-card": true,
              "merchant-category": card.value.merchantCategory
            }, null, 8, ["cvv", "exp-month", "exp-year", "mcc", "mcc-icon-url", "pan", "type", "style", "network", "merchant-category"])
          ]),
          createBaseVNode("section", _hoisted_3$f, [
            createVNode(SpendLimitButton, {
              "is-single-use": card.value.type === unref(CardType).SINGLE_USE,
              "spend-limit": card.value.spendLimit,
              "spend-limit-duration": card.value.spendLimitDuration,
              "spent-this-month-rolling": card.value.spentThisMonthRolling,
              "spent-this-week": card.value.spentThisWeek,
              "spent-this-year-rolling": card.value.spentThisYearRolling,
              "spent-total": card.value.spentTotal,
              onUpdate: handleSpendLimitUpdate
            }, null, 8, ["is-single-use", "spend-limit", "spend-limit-duration", "spent-this-month-rolling", "spent-this-week", "spent-this-year-rolling", "spent-total"])
          ]),
          createBaseVNode("section", _hoisted_4$a, [
            fundingError.value ? (openBlock(), createElementBlock("div", _hoisted_5$6, [
              createBaseVNode(
                "p",
                null,
                toDisplayString(fundingError.value),
                1
                /* TEXT */
              )
            ])) : (openBlock(), createElementBlock("div", _hoisted_6$4, [
              createVNode(FundingButton, {
                loading: loadingFunding.value,
                source: unref(funding),
                disabled: unref(fundingSources).length <= 1,
                onClick: _cache[0] || (_cache[0] = ($event) => showFundingModal.value = true)
              }, null, 8, ["loading", "source", "disabled"]),
              createVNode(FundingModal, {
                loading: loadingFunding.value,
                fundingSources: unref(fundingSources),
                bankAccountID: (_a2 = unref(funding)) == null ? void 0 : _a2.bankAccountID,
                open: showFundingModal.value,
                onUpdate: handleFundingSourceUpdate,
                onClose: _cache[1] || (_cache[1] = ($event) => showFundingModal.value = false)
              }, null, 8, ["loading", "fundingSources", "bankAccountID", "open"])
            ]))
          ]),
          unref(paymentInputsFound) ? (openBlock(), createElementBlock("div", _hoisted_7$3, [
            createVNode(BaseButton, {
              class: "rounded-end-0 flex-grow-1",
              onClick: _cache[2] || (_cache[2] = ($event) => createCard(true))
            }, {
              default: withCtx(() => [
                createTextVNode(" Create and Autofill ")
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(unref(BaseDropdown), {
              "toggle-variant": "primary",
              label: "",
              split: true
            }, {
              button: withCtx(() => [
                _hoisted_8$2
              ]),
              default: withCtx(() => [
                createVNode(unref(BaseDropdownItem), {
                  onClick: _cache[3] || (_cache[3] = ($event) => createCard(false))
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Create Card ")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            })
          ])) : (openBlock(), createBlock(BaseButton, {
            key: 2,
            "data-test": "btn-create-card",
            class: "mb-3 w-100",
            onClick: _cache[4] || (_cache[4] = ($event) => createCard(false)),
            disabled: creating.value
          }, {
            default: withCtx(() => [
              createTextVNode(" Create Card ")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled"]))
        ]);
      };
    }
  });
  const _sfc_main$s = {};
  const _hoisted_1$k = {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$e = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      d: "M3 13L13 3",
      stroke: "currentColor",
      "stroke-width": "2"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$e = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      d: "M13 9L13 3L7 3",
      stroke: "currentColor",
      "stroke-width": "2"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_4$9 = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      d: "M3 7L3 13L9 13",
      stroke: "currentColor",
      "stroke-width": "2"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_5$5 = [
    _hoisted_2$e,
    _hoisted_3$e,
    _hoisted_4$9
  ];
  function _sfc_render$a(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$k, _hoisted_5$5);
  }
  const IconArrowsDiagonal = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$a]]);
  const _sfc_main$r = /* @__PURE__ */ defineComponent({
    __name: "InterstitialCloseButton",
    setup(__props) {
      const emitClose = () => {
        appExtensionApi.message.send({
          target: "checkout",
          event: "removeInterstitial"
        });
      };
      return (_ctx, _cache) => {
        return openBlock(), createBlock(BaseButton, {
          variant: "nav",
          size: "sm",
          onClick: emitClose
        }, {
          default: withCtx(() => [
            createVNode(IconCross)
          ]),
          _: 1
          /* STABLE */
        });
      };
    }
  });
  const _withScopeId$3 = (n) => (pushScopeId("data-v-94a5503f"), n = n(), popScopeId(), n);
  const _hoisted_1$j = { class: "collapsed-card" };
  const _hoisted_2$d = {
    class: "d-flex py-2 px-3 align-items-center",
    "data-test": "privacy-card-collapsed"
  };
  const _hoisted_3$d = { class: "d-flex justify-content-center" };
  const _hoisted_4$8 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode(
    "span",
    { class: "label me-2" },
    "EXP",
    -1
    /* HOISTED */
  ));
  const _hoisted_5$4 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode(
    "span",
    { class: "label me-2" },
    "CVV",
    -1
    /* HOISTED */
  ));
  const _sfc_main$q = /* @__PURE__ */ defineComponent({
    __name: "CardCollapsed",
    props: {
      copyInfo: { type: Boolean, default: true },
      cvv: null,
      expMonth: null,
      expYear: null,
      mcc: null,
      mccIconUrl: null,
      pan: null,
      type: null,
      style: null,
      uuid: null,
      merchantCategory: null
    },
    setup(__props) {
      const props = __props;
      const formattedPAN = computed(() => props.pan.replace(/(.{4})/g, "$1 ").trim());
      const pan = computed(() => props.pan || "");
      const cvv = computed(() => props.cvv || "•••");
      const exp = computed(() => `${props.expMonth}/${props.expYear.slice(-2)}`);
      const { copyExp, copyCVV, copyPAN } = useClickToCopy({ cvv, exp, pan });
      const isMobile = computed(() => isIPhone());
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock("div", _hoisted_1$j, [
          createBaseVNode("div", _hoisted_2$d, [
            createVNode(PrivacyCardLogo, {
              class: "me-2",
              mcc: props == null ? void 0 : props.mcc,
              mccIconUrl: props == null ? void 0 : props.mccIconUrl,
              style: normalizeStyle(props == null ? void 0 : props.style),
              type: props == null ? void 0 : props.type,
              "merchant-category": props == null ? void 0 : props.merchantCategory,
              "data-test": "collapsed-card-logo"
            }, null, 8, ["mcc", "mccIconUrl", "style", "type", "merchant-category"]),
            createBaseVNode("div", null, [
              createBaseVNode(
                "div",
                {
                  class: normalizeClass(["pan p-2", { clickable: __props.copyInfo }]),
                  onClick: _cache[0] || (_cache[0] = //@ts-ignore
                  (...args) => unref(copyPAN) && unref(copyPAN)(...args)),
                  "data-test": "collapsed-card-pan"
                },
                toDisplayString(unref(formattedPAN)),
                3
                /* TEXT, CLASS */
              ),
              createBaseVNode("div", _hoisted_3$d, [
                createBaseVNode(
                  "div",
                  {
                    class: normalizeClass(["exp p-2", { clickable: __props.copyInfo }]),
                    onClick: _cache[1] || (_cache[1] = //@ts-ignore
                    (...args) => unref(copyExp) && unref(copyExp)(...args)),
                    "data-test": "collapsed-card-exp"
                  },
                  [
                    _hoisted_4$8,
                    createTextVNode(
                      " " + toDisplayString(unref(exp)),
                      1
                      /* TEXT */
                    )
                  ],
                  2
                  /* CLASS */
                ),
                createBaseVNode(
                  "div",
                  {
                    class: normalizeClass(["cvv p-2", { clickable: __props.copyInfo }]),
                    onClick: _cache[2] || (_cache[2] = //@ts-ignore
                    (...args) => unref(copyCVV) && unref(copyCVV)(...args)),
                    "data-test": "collapsed-card-cvv"
                  },
                  [
                    _hoisted_5$4,
                    createTextVNode(
                      " " + toDisplayString(unref(cvv)),
                      1
                      /* TEXT */
                    )
                  ],
                  2
                  /* CLASS */
                )
              ])
            ]),
            unref(isMobile) ? (openBlock(), createBlock(BaseButton, {
              key: 0,
              variant: "nav",
              size: "sm",
              to: { name: "card-details", params: { uuid: props.uuid } },
              class: "ms-auto expand"
            }, {
              default: withCtx(() => [
                createVNode(IconArrowsDiagonal)
              ]),
              _: 1
              /* STABLE */
            }, 8, ["to"])) : createCommentVNode("v-if", true),
            createVNode(_sfc_main$r, {
              class: normalizeClass(unref(isMobile) ? "ms-3" : "ms-auto")
            }, null, 8, ["class"])
          ]),
          !unref(isMobile) ? (openBlock(), createBlock(BaseButton, {
            key: 0,
            variant: "link",
            to: { name: "card-details", params: { uuid: props.uuid } },
            class: "link-more w-100 rounded-top-0 border-top"
          }, {
            default: withCtx(() => [
              createVNode(IconChevronDown, { class: "me-1" }),
              createTextVNode(" Show More ")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["to"])) : createCommentVNode("v-if", true)
        ]);
      };
    }
  });
  const CardCollapsed_vue_vue_type_style_index_0_scoped_94a5503f_lang = "";
  const CardCollapsed = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-94a5503f"]]);
  const _hoisted_1$i = {
    key: 0,
    class: "text-center d-flex align-items-center"
  };
  const _sfc_main$p = /* @__PURE__ */ defineComponent({
    __name: "CardCollapsedView",
    setup(__props) {
      const cardsStore = useCardsStore();
      const route = useRoute();
      const cardUuid = route.query.uuid;
      const loadingCard = ref(true);
      const loadingError = ref("");
      const card = computed(() => cardsStore.card(cardUuid) || {});
      const active = computed(() => {
        const { state } = card.value;
        return state === CardState.OPEN || state === CardState.PAUSED;
      });
      onBeforeMount(() => {
        appExtensionApi.message.send({
          target: "checkout",
          event: "updateInterstitialStyles",
          payload: { includeBg: false }
        });
      });
      onUnmounted(() => {
        appExtensionApi.message.send({
          target: "checkout",
          event: "updateInterstitialStyles",
          payload: { includeBg: true }
        });
      });
      loadCard();
      async function loadCard() {
        loadingError.value = "";
        loadingCard.value = true;
        try {
          await cardsStore.get(cardUuid);
        } catch (err) {
          loadingError.value = "Unable to load card details";
        } finally {
          loadingCard.value = false;
        }
      }
      return (_ctx, _cache) => {
        return loadingError.value ? (openBlock(), createElementBlock("div", _hoisted_1$i, [
          createBaseVNode("div", null, [
            createVNode(BaseAlert, { variant: "warning" }, {
              default: withCtx(() => [
                createTextVNode(
                  toDisplayString(loadingError.value),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_sfc_main$r, { class: "ms-auto" })
          ]),
          createVNode(BaseButton, {
            variant: "primary",
            class: "mt-3",
            onClick: loadCard,
            disabled: loadingCard.value
          }, {
            default: withCtx(() => [
              createTextVNode(" Try again ")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled"])
        ])) : unref(card).cardUuid ? (openBlock(), createBlock(CardCollapsed, {
          key: 1,
          "copy-info": unref(active),
          cvv: unref(card).CVV,
          "exp-month": unref(card).expMonth,
          "exp-year": unref(card).expYear,
          mcc: unref(card).mcc,
          "mcc-icon-url": unref(card).mccIconUrl,
          pan: unref(card).PAN,
          type: unref(card).type,
          style: normalizeStyle(unref(card).style),
          uuid: unref(card).cardUuid,
          "merchant-category": unref(card).merchantCategory
        }, null, 8, ["copy-info", "cvv", "exp-month", "exp-year", "mcc", "mcc-icon-url", "pan", "type", "style", "uuid", "merchant-category"])) : createCommentVNode("v-if", true);
      };
    }
  });
  var collapseExports = {};
  var collapse = {
    get exports() {
      return collapseExports;
    },
    set exports(v) {
      collapseExports = v;
    }
  };
  var baseComponentExports = {};
  var baseComponent = {
    get exports() {
      return baseComponentExports;
    },
    set exports(v) {
      baseComponentExports = v;
    }
  };
  var dataExports = {};
  var data = {
    get exports() {
      return dataExports;
    },
    set exports(v) {
      dataExports = v;
    }
  };
  /*!
    * Bootstrap data.js v5.3.0 (https://getbootstrap.com/)
    * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    */
  var hasRequiredData;
  function requireData() {
    if (hasRequiredData)
      return dataExports;
    hasRequiredData = 1;
    (function(module, exports) {
      (function(global2, factory) {
        module.exports = factory();
      })(commonjsGlobal, function() {
        const elementMap = /* @__PURE__ */ new Map();
        const data2 = {
          set(element, key, instance) {
            if (!elementMap.has(element)) {
              elementMap.set(element, /* @__PURE__ */ new Map());
            }
            const instanceMap = elementMap.get(element);
            if (!instanceMap.has(key) && instanceMap.size !== 0) {
              console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
              return;
            }
            instanceMap.set(key, instance);
          },
          get(element, key) {
            if (elementMap.has(element)) {
              return elementMap.get(element).get(key) || null;
            }
            return null;
          },
          remove(element, key) {
            if (!elementMap.has(element)) {
              return;
            }
            const instanceMap = elementMap.get(element);
            instanceMap.delete(key);
            if (instanceMap.size === 0) {
              elementMap.delete(element);
            }
          }
        };
        return data2;
      });
    })(data);
    return dataExports;
  }
  var eventHandlerExports = {};
  var eventHandler = {
    get exports() {
      return eventHandlerExports;
    },
    set exports(v) {
      eventHandlerExports = v;
    }
  };
  var utilExports = {};
  var util = {
    get exports() {
      return utilExports;
    },
    set exports(v) {
      utilExports = v;
    }
  };
  /*!
    * Bootstrap index.js v5.3.0 (https://getbootstrap.com/)
    * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    */
  var hasRequiredUtil;
  function requireUtil() {
    if (hasRequiredUtil)
      return utilExports;
    hasRequiredUtil = 1;
    (function(module, exports) {
      (function(global2, factory) {
        factory(exports);
      })(commonjsGlobal, function(exports2) {
        const MAX_UID = 1e6;
        const MILLISECONDS_MULTIPLIER = 1e3;
        const TRANSITION_END = "transitionend";
        const parseSelector = (selector) => {
          if (selector && window.CSS && window.CSS.escape) {
            selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
          }
          return selector;
        };
        const toType = (object) => {
          if (object === null || object === void 0) {
            return `${object}`;
          }
          return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
        };
        const getUID = (prefix) => {
          do {
            prefix += Math.floor(Math.random() * MAX_UID);
          } while (document.getElementById(prefix));
          return prefix;
        };
        const getTransitionDurationFromElement = (element) => {
          if (!element) {
            return 0;
          }
          let {
            transitionDuration,
            transitionDelay
          } = window.getComputedStyle(element);
          const floatTransitionDuration = Number.parseFloat(transitionDuration);
          const floatTransitionDelay = Number.parseFloat(transitionDelay);
          if (!floatTransitionDuration && !floatTransitionDelay) {
            return 0;
          }
          transitionDuration = transitionDuration.split(",")[0];
          transitionDelay = transitionDelay.split(",")[0];
          return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
        };
        const triggerTransitionEnd = (element) => {
          element.dispatchEvent(new Event(TRANSITION_END));
        };
        const isElement2 = (object) => {
          if (!object || typeof object !== "object") {
            return false;
          }
          if (typeof object.jquery !== "undefined") {
            object = object[0];
          }
          return typeof object.nodeType !== "undefined";
        };
        const getElement = (object) => {
          if (isElement2(object)) {
            return object.jquery ? object[0] : object;
          }
          if (typeof object === "string" && object.length > 0) {
            return document.querySelector(parseSelector(object));
          }
          return null;
        };
        const isVisible = (element) => {
          if (!isElement2(element) || element.getClientRects().length === 0) {
            return false;
          }
          const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
          const closedDetails = element.closest("details:not([open])");
          if (!closedDetails) {
            return elementIsVisible;
          }
          if (closedDetails !== element) {
            const summary = element.closest("summary");
            if (summary && summary.parentNode !== closedDetails) {
              return false;
            }
            if (summary === null) {
              return false;
            }
          }
          return elementIsVisible;
        };
        const isDisabled = (element) => {
          if (!element || element.nodeType !== Node.ELEMENT_NODE) {
            return true;
          }
          if (element.classList.contains("disabled")) {
            return true;
          }
          if (typeof element.disabled !== "undefined") {
            return element.disabled;
          }
          return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
        };
        const findShadowRoot = (element) => {
          if (!document.documentElement.attachShadow) {
            return null;
          }
          if (typeof element.getRootNode === "function") {
            const root = element.getRootNode();
            return root instanceof ShadowRoot ? root : null;
          }
          if (element instanceof ShadowRoot) {
            return element;
          }
          if (!element.parentNode) {
            return null;
          }
          return findShadowRoot(element.parentNode);
        };
        const noop2 = () => {
        };
        const reflow = (element) => {
          element.offsetHeight;
        };
        const getjQuery = () => {
          if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
            return window.jQuery;
          }
          return null;
        };
        const DOMContentLoadedCallbacks = [];
        const onDOMContentLoaded = (callback) => {
          if (document.readyState === "loading") {
            if (!DOMContentLoadedCallbacks.length) {
              document.addEventListener("DOMContentLoaded", () => {
                for (const callback2 of DOMContentLoadedCallbacks) {
                  callback2();
                }
              });
            }
            DOMContentLoadedCallbacks.push(callback);
          } else {
            callback();
          }
        };
        const isRTL = () => document.documentElement.dir === "rtl";
        const defineJQueryPlugin = (plugin) => {
          onDOMContentLoaded(() => {
            const $ = getjQuery();
            if ($) {
              const name = plugin.NAME;
              const JQUERY_NO_CONFLICT = $.fn[name];
              $.fn[name] = plugin.jQueryInterface;
              $.fn[name].Constructor = plugin;
              $.fn[name].noConflict = () => {
                $.fn[name] = JQUERY_NO_CONFLICT;
                return plugin.jQueryInterface;
              };
            }
          });
        };
        const execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
          return typeof possibleCallback === "function" ? possibleCallback(...args) : defaultValue;
        };
        const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
          if (!waitForTransition) {
            execute(callback);
            return;
          }
          const durationPadding = 5;
          const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
          let called = false;
          const handler = ({
            target
          }) => {
            if (target !== transitionElement) {
              return;
            }
            called = true;
            transitionElement.removeEventListener(TRANSITION_END, handler);
            execute(callback);
          };
          transitionElement.addEventListener(TRANSITION_END, handler);
          setTimeout(() => {
            if (!called) {
              triggerTransitionEnd(transitionElement);
            }
          }, emulatedDuration);
        };
        const getNextActiveElement = (list2, activeElement, shouldGetNext, isCycleAllowed) => {
          const listLength = list2.length;
          let index = list2.indexOf(activeElement);
          if (index === -1) {
            return !shouldGetNext && isCycleAllowed ? list2[listLength - 1] : list2[0];
          }
          index += shouldGetNext ? 1 : -1;
          if (isCycleAllowed) {
            index = (index + listLength) % listLength;
          }
          return list2[Math.max(0, Math.min(index, listLength - 1))];
        };
        exports2.defineJQueryPlugin = defineJQueryPlugin;
        exports2.execute = execute;
        exports2.executeAfterTransition = executeAfterTransition;
        exports2.findShadowRoot = findShadowRoot;
        exports2.getElement = getElement;
        exports2.getNextActiveElement = getNextActiveElement;
        exports2.getTransitionDurationFromElement = getTransitionDurationFromElement;
        exports2.getUID = getUID;
        exports2.getjQuery = getjQuery;
        exports2.isDisabled = isDisabled;
        exports2.isElement = isElement2;
        exports2.isRTL = isRTL;
        exports2.isVisible = isVisible;
        exports2.noop = noop2;
        exports2.onDOMContentLoaded = onDOMContentLoaded;
        exports2.parseSelector = parseSelector;
        exports2.reflow = reflow;
        exports2.toType = toType;
        exports2.triggerTransitionEnd = triggerTransitionEnd;
        Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
      });
    })(util, utilExports);
    return utilExports;
  }
  /*!
    * Bootstrap event-handler.js v5.3.0 (https://getbootstrap.com/)
    * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    */
  var hasRequiredEventHandler;
  function requireEventHandler() {
    if (hasRequiredEventHandler)
      return eventHandlerExports;
    hasRequiredEventHandler = 1;
    (function(module, exports) {
      (function(global2, factory) {
        module.exports = factory(requireUtil());
      })(commonjsGlobal, function(index_js) {
        const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
        const stripNameRegex = /\..*/;
        const stripUidRegex = /::\d+$/;
        const eventRegistry = {};
        let uidEvent = 1;
        const customEvents = {
          mouseenter: "mouseover",
          mouseleave: "mouseout"
        };
        const nativeEvents = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
        function makeEventUid(element, uid2) {
          return uid2 && `${uid2}::${uidEvent++}` || element.uidEvent || uidEvent++;
        }
        function getElementEvents(element) {
          const uid2 = makeEventUid(element);
          element.uidEvent = uid2;
          eventRegistry[uid2] = eventRegistry[uid2] || {};
          return eventRegistry[uid2];
        }
        function bootstrapHandler(element, fn) {
          return function handler(event) {
            hydrateObj(event, {
              delegateTarget: element
            });
            if (handler.oneOff) {
              EventHandler.off(element, event.type, fn);
            }
            return fn.apply(element, [event]);
          };
        }
        function bootstrapDelegationHandler(element, selector, fn) {
          return function handler(event) {
            const domElements = element.querySelectorAll(selector);
            for (let {
              target
            } = event; target && target !== this; target = target.parentNode) {
              for (const domElement of domElements) {
                if (domElement !== target) {
                  continue;
                }
                hydrateObj(event, {
                  delegateTarget: target
                });
                if (handler.oneOff) {
                  EventHandler.off(element, event.type, selector, fn);
                }
                return fn.apply(target, [event]);
              }
            }
          };
        }
        function findHandler(events, callable, delegationSelector = null) {
          return Object.values(events).find((event) => event.callable === callable && event.delegationSelector === delegationSelector);
        }
        function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
          const isDelegated = typeof handler === "string";
          const callable = isDelegated ? delegationFunction : handler || delegationFunction;
          let typeEvent = getTypeEvent(originalTypeEvent);
          if (!nativeEvents.has(typeEvent)) {
            typeEvent = originalTypeEvent;
          }
          return [isDelegated, callable, typeEvent];
        }
        function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
          if (typeof originalTypeEvent !== "string" || !element) {
            return;
          }
          let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
          if (originalTypeEvent in customEvents) {
            const wrapFunction = (fn2) => {
              return function(event) {
                if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
                  return fn2.call(this, event);
                }
              };
            };
            callable = wrapFunction(callable);
          }
          const events = getElementEvents(element);
          const handlers = events[typeEvent] || (events[typeEvent] = {});
          const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
          if (previousFunction) {
            previousFunction.oneOff = previousFunction.oneOff && oneOff;
            return;
          }
          const uid2 = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
          const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
          fn.delegationSelector = isDelegated ? handler : null;
          fn.callable = callable;
          fn.oneOff = oneOff;
          fn.uidEvent = uid2;
          handlers[uid2] = fn;
          element.addEventListener(typeEvent, fn, isDelegated);
        }
        function removeHandler(element, events, typeEvent, handler, delegationSelector) {
          const fn = findHandler(events[typeEvent], handler, delegationSelector);
          if (!fn) {
            return;
          }
          element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
          delete events[typeEvent][fn.uidEvent];
        }
        function removeNamespacedHandlers(element, events, typeEvent, namespace) {
          const storeElementEvent = events[typeEvent] || {};
          for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
            if (handlerKey.includes(namespace)) {
              removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
            }
          }
        }
        function getTypeEvent(event) {
          event = event.replace(stripNameRegex, "");
          return customEvents[event] || event;
        }
        const EventHandler = {
          on(element, event, handler, delegationFunction) {
            addHandler(element, event, handler, delegationFunction, false);
          },
          one(element, event, handler, delegationFunction) {
            addHandler(element, event, handler, delegationFunction, true);
          },
          off(element, originalTypeEvent, handler, delegationFunction) {
            if (typeof originalTypeEvent !== "string" || !element) {
              return;
            }
            const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
            const inNamespace = typeEvent !== originalTypeEvent;
            const events = getElementEvents(element);
            const storeElementEvent = events[typeEvent] || {};
            const isNamespace = originalTypeEvent.startsWith(".");
            if (typeof callable !== "undefined") {
              if (!Object.keys(storeElementEvent).length) {
                return;
              }
              removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
              return;
            }
            if (isNamespace) {
              for (const elementEvent of Object.keys(events)) {
                removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
              }
            }
            for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
              const handlerKey = keyHandlers.replace(stripUidRegex, "");
              if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
                removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
              }
            }
          },
          trigger(element, event, args) {
            if (typeof event !== "string" || !element) {
              return null;
            }
            const $ = index_js.getjQuery();
            const typeEvent = getTypeEvent(event);
            const inNamespace = event !== typeEvent;
            let jQueryEvent = null;
            let bubbles = true;
            let nativeDispatch = true;
            let defaultPrevented = false;
            if (inNamespace && $) {
              jQueryEvent = $.Event(event, args);
              $(element).trigger(jQueryEvent);
              bubbles = !jQueryEvent.isPropagationStopped();
              nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
              defaultPrevented = jQueryEvent.isDefaultPrevented();
            }
            const evt = hydrateObj(new Event(event, {
              bubbles,
              cancelable: true
            }), args);
            if (defaultPrevented) {
              evt.preventDefault();
            }
            if (nativeDispatch) {
              element.dispatchEvent(evt);
            }
            if (evt.defaultPrevented && jQueryEvent) {
              jQueryEvent.preventDefault();
            }
            return evt;
          }
        };
        function hydrateObj(obj, meta = {}) {
          for (const [key, value] of Object.entries(meta)) {
            try {
              obj[key] = value;
            } catch (_unused) {
              Object.defineProperty(obj, key, {
                configurable: true,
                get() {
                  return value;
                }
              });
            }
          }
          return obj;
        }
        return EventHandler;
      });
    })(eventHandler);
    return eventHandlerExports;
  }
  var configExports = {};
  var config = {
    get exports() {
      return configExports;
    },
    set exports(v) {
      configExports = v;
    }
  };
  var manipulatorExports = {};
  var manipulator = {
    get exports() {
      return manipulatorExports;
    },
    set exports(v) {
      manipulatorExports = v;
    }
  };
  /*!
    * Bootstrap manipulator.js v5.3.0 (https://getbootstrap.com/)
    * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    */
  var hasRequiredManipulator;
  function requireManipulator() {
    if (hasRequiredManipulator)
      return manipulatorExports;
    hasRequiredManipulator = 1;
    (function(module, exports) {
      (function(global2, factory) {
        module.exports = factory();
      })(commonjsGlobal, function() {
        function normalizeData(value) {
          if (value === "true") {
            return true;
          }
          if (value === "false") {
            return false;
          }
          if (value === Number(value).toString()) {
            return Number(value);
          }
          if (value === "" || value === "null") {
            return null;
          }
          if (typeof value !== "string") {
            return value;
          }
          try {
            return JSON.parse(decodeURIComponent(value));
          } catch (_unused) {
            return value;
          }
        }
        function normalizeDataKey(key) {
          return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
        }
        const Manipulator = {
          setDataAttribute(element, key, value) {
            element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
          },
          removeDataAttribute(element, key) {
            element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
          },
          getDataAttributes(element) {
            if (!element) {
              return {};
            }
            const attributes = {};
            const bsKeys = Object.keys(element.dataset).filter((key) => key.startsWith("bs") && !key.startsWith("bsConfig"));
            for (const key of bsKeys) {
              let pureKey = key.replace(/^bs/, "");
              pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
              attributes[pureKey] = normalizeData(element.dataset[key]);
            }
            return attributes;
          },
          getDataAttribute(element, key) {
            return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
          }
        };
        return Manipulator;
      });
    })(manipulator);
    return manipulatorExports;
  }
  /*!
    * Bootstrap config.js v5.3.0 (https://getbootstrap.com/)
    * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    */
  var hasRequiredConfig;
  function requireConfig() {
    if (hasRequiredConfig)
      return configExports;
    hasRequiredConfig = 1;
    (function(module, exports) {
      (function(global2, factory) {
        module.exports = factory(requireManipulator(), requireUtil());
      })(commonjsGlobal, function(Manipulator, index_js) {
        class Config {
          // Getters
          static get Default() {
            return {};
          }
          static get DefaultType() {
            return {};
          }
          static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
          }
          _getConfig(config2) {
            config2 = this._mergeConfigObj(config2);
            config2 = this._configAfterMerge(config2);
            this._typeCheckConfig(config2);
            return config2;
          }
          _configAfterMerge(config2) {
            return config2;
          }
          _mergeConfigObj(config2, element) {
            const jsonConfig = index_js.isElement(element) ? Manipulator.getDataAttribute(element, "config") : {};
            return {
              ...this.constructor.Default,
              ...typeof jsonConfig === "object" ? jsonConfig : {},
              ...index_js.isElement(element) ? Manipulator.getDataAttributes(element) : {},
              ...typeof config2 === "object" ? config2 : {}
            };
          }
          _typeCheckConfig(config2, configTypes = this.constructor.DefaultType) {
            for (const [property, expectedTypes] of Object.entries(configTypes)) {
              const value = config2[property];
              const valueType = index_js.isElement(value) ? "element" : index_js.toType(value);
              if (!new RegExp(expectedTypes).test(valueType)) {
                throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
              }
            }
          }
        }
        return Config;
      });
    })(config);
    return configExports;
  }
  /*!
    * Bootstrap base-component.js v5.3.0 (https://getbootstrap.com/)
    * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    */
  var hasRequiredBaseComponent;
  function requireBaseComponent() {
    if (hasRequiredBaseComponent)
      return baseComponentExports;
    hasRequiredBaseComponent = 1;
    (function(module, exports) {
      (function(global2, factory) {
        module.exports = factory(requireData(), requireEventHandler(), requireConfig(), requireUtil());
      })(commonjsGlobal, function(Data, EventHandler, Config, index_js) {
        const VERSION = "5.3.0";
        class BaseComponent extends Config {
          constructor(element, config2) {
            super();
            element = index_js.getElement(element);
            if (!element) {
              return;
            }
            this._element = element;
            this._config = this._getConfig(config2);
            Data.set(this._element, this.constructor.DATA_KEY, this);
          }
          // Public
          dispose() {
            Data.remove(this._element, this.constructor.DATA_KEY);
            EventHandler.off(this._element, this.constructor.EVENT_KEY);
            for (const propertyName of Object.getOwnPropertyNames(this)) {
              this[propertyName] = null;
            }
          }
          _queueCallback(callback, element, isAnimated = true) {
            index_js.executeAfterTransition(callback, element, isAnimated);
          }
          _getConfig(config2) {
            config2 = this._mergeConfigObj(config2, this._element);
            config2 = this._configAfterMerge(config2);
            this._typeCheckConfig(config2);
            return config2;
          }
          // Static
          static getInstance(element) {
            return Data.get(index_js.getElement(element), this.DATA_KEY);
          }
          static getOrCreateInstance(element, config2 = {}) {
            return this.getInstance(element) || new this(element, typeof config2 === "object" ? config2 : null);
          }
          static get VERSION() {
            return VERSION;
          }
          static get DATA_KEY() {
            return `bs.${this.NAME}`;
          }
          static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
          }
          static eventName(name) {
            return `${name}${this.EVENT_KEY}`;
          }
        }
        return BaseComponent;
      });
    })(baseComponent);
    return baseComponentExports;
  }
  var selectorEngineExports = {};
  var selectorEngine = {
    get exports() {
      return selectorEngineExports;
    },
    set exports(v) {
      selectorEngineExports = v;
    }
  };
  /*!
    * Bootstrap selector-engine.js v5.3.0 (https://getbootstrap.com/)
    * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    */
  var hasRequiredSelectorEngine;
  function requireSelectorEngine() {
    if (hasRequiredSelectorEngine)
      return selectorEngineExports;
    hasRequiredSelectorEngine = 1;
    (function(module, exports) {
      (function(global2, factory) {
        module.exports = factory(requireUtil());
      })(commonjsGlobal, function(index_js) {
        const getSelector = (element) => {
          let selector = element.getAttribute("data-bs-target");
          if (!selector || selector === "#") {
            let hrefAttribute = element.getAttribute("href");
            if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) {
              return null;
            }
            if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
              hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
            }
            selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
          }
          return index_js.parseSelector(selector);
        };
        const SelectorEngine = {
          find(selector, element = document.documentElement) {
            return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
          },
          findOne(selector, element = document.documentElement) {
            return Element.prototype.querySelector.call(element, selector);
          },
          children(element, selector) {
            return [].concat(...element.children).filter((child) => child.matches(selector));
          },
          parents(element, selector) {
            const parents = [];
            let ancestor = element.parentNode.closest(selector);
            while (ancestor) {
              parents.push(ancestor);
              ancestor = ancestor.parentNode.closest(selector);
            }
            return parents;
          },
          prev(element, selector) {
            let previous = element.previousElementSibling;
            while (previous) {
              if (previous.matches(selector)) {
                return [previous];
              }
              previous = previous.previousElementSibling;
            }
            return [];
          },
          // TODO: this is now unused; remove later along with prev()
          next(element, selector) {
            let next = element.nextElementSibling;
            while (next) {
              if (next.matches(selector)) {
                return [next];
              }
              next = next.nextElementSibling;
            }
            return [];
          },
          focusableChildren(element) {
            const focusables = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((selector) => `${selector}:not([tabindex^="-"])`).join(",");
            return this.find(focusables, element).filter((el) => !index_js.isDisabled(el) && index_js.isVisible(el));
          },
          getSelectorFromElement(element) {
            const selector = getSelector(element);
            if (selector) {
              return SelectorEngine.findOne(selector) ? selector : null;
            }
            return null;
          },
          getElementFromSelector(element) {
            const selector = getSelector(element);
            return selector ? SelectorEngine.findOne(selector) : null;
          },
          getMultipleElementsFromSelector(element) {
            const selector = getSelector(element);
            return selector ? SelectorEngine.find(selector) : [];
          }
        };
        return SelectorEngine;
      });
    })(selectorEngine);
    return selectorEngineExports;
  }
  /*!
    * Bootstrap collapse.js v5.3.0 (https://getbootstrap.com/)
    * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    */
  (function(module, exports) {
    (function(global2, factory) {
      module.exports = factory(requireBaseComponent(), requireEventHandler(), requireSelectorEngine(), requireUtil());
    })(commonjsGlobal, function(BaseComponent, EventHandler, SelectorEngine, index_js) {
      const NAME = "collapse";
      const DATA_KEY = "bs.collapse";
      const EVENT_KEY = `.${DATA_KEY}`;
      const DATA_API_KEY = ".data-api";
      const EVENT_SHOW = `show${EVENT_KEY}`;
      const EVENT_SHOWN = `shown${EVENT_KEY}`;
      const EVENT_HIDE = `hide${EVENT_KEY}`;
      const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
      const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
      const CLASS_NAME_SHOW = "show";
      const CLASS_NAME_COLLAPSE = "collapse";
      const CLASS_NAME_COLLAPSING = "collapsing";
      const CLASS_NAME_COLLAPSED = "collapsed";
      const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
      const CLASS_NAME_HORIZONTAL = "collapse-horizontal";
      const WIDTH = "width";
      const HEIGHT = "height";
      const SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
      const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="collapse"]';
      const Default = {
        parent: null,
        toggle: true
      };
      const DefaultType = {
        parent: "(null|element)",
        toggle: "boolean"
      };
      class Collapse extends BaseComponent {
        constructor(element, config2) {
          super(element, config2);
          this._isTransitioning = false;
          this._triggerArray = [];
          const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE);
          for (const elem of toggleList) {
            const selector = SelectorEngine.getSelectorFromElement(elem);
            const filterElement = SelectorEngine.find(selector).filter((foundElement) => foundElement === this._element);
            if (selector !== null && filterElement.length) {
              this._triggerArray.push(elem);
            }
          }
          this._initializeChildren();
          if (!this._config.parent) {
            this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
          }
          if (this._config.toggle) {
            this.toggle();
          }
        }
        // Getters
        static get Default() {
          return Default;
        }
        static get DefaultType() {
          return DefaultType;
        }
        static get NAME() {
          return NAME;
        }
        // Public
        toggle() {
          if (this._isShown()) {
            this.hide();
          } else {
            this.show();
          }
        }
        show() {
          if (this._isTransitioning || this._isShown()) {
            return;
          }
          let activeChildren = [];
          if (this._config.parent) {
            activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element) => element !== this._element).map((element) => Collapse.getOrCreateInstance(element, {
              toggle: false
            }));
          }
          if (activeChildren.length && activeChildren[0]._isTransitioning) {
            return;
          }
          const startEvent = EventHandler.trigger(this._element, EVENT_SHOW);
          if (startEvent.defaultPrevented) {
            return;
          }
          for (const activeInstance of activeChildren) {
            activeInstance.hide();
          }
          const dimension = this._getDimension();
          this._element.classList.remove(CLASS_NAME_COLLAPSE);
          this._element.classList.add(CLASS_NAME_COLLAPSING);
          this._element.style[dimension] = 0;
          this._addAriaAndCollapsedClass(this._triggerArray, true);
          this._isTransitioning = true;
          const complete = () => {
            this._isTransitioning = false;
            this._element.classList.remove(CLASS_NAME_COLLAPSING);
            this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);
            this._element.style[dimension] = "";
            EventHandler.trigger(this._element, EVENT_SHOWN);
          };
          const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
          const scrollSize = `scroll${capitalizedDimension}`;
          this._queueCallback(complete, this._element, true);
          this._element.style[dimension] = `${this._element[scrollSize]}px`;
        }
        hide() {
          if (this._isTransitioning || !this._isShown()) {
            return;
          }
          const startEvent = EventHandler.trigger(this._element, EVENT_HIDE);
          if (startEvent.defaultPrevented) {
            return;
          }
          const dimension = this._getDimension();
          this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
          index_js.reflow(this._element);
          this._element.classList.add(CLASS_NAME_COLLAPSING);
          this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);
          for (const trigger2 of this._triggerArray) {
            const element = SelectorEngine.getElementFromSelector(trigger2);
            if (element && !this._isShown(element)) {
              this._addAriaAndCollapsedClass([trigger2], false);
            }
          }
          this._isTransitioning = true;
          const complete = () => {
            this._isTransitioning = false;
            this._element.classList.remove(CLASS_NAME_COLLAPSING);
            this._element.classList.add(CLASS_NAME_COLLAPSE);
            EventHandler.trigger(this._element, EVENT_HIDDEN);
          };
          this._element.style[dimension] = "";
          this._queueCallback(complete, this._element, true);
        }
        _isShown(element = this._element) {
          return element.classList.contains(CLASS_NAME_SHOW);
        }
        // Private
        _configAfterMerge(config2) {
          config2.toggle = Boolean(config2.toggle);
          config2.parent = index_js.getElement(config2.parent);
          return config2;
        }
        _getDimension() {
          return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
        }
        _initializeChildren() {
          if (!this._config.parent) {
            return;
          }
          const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE);
          for (const element of children) {
            const selected = SelectorEngine.getElementFromSelector(element);
            if (selected) {
              this._addAriaAndCollapsedClass([element], this._isShown(selected));
            }
          }
        }
        _getFirstLevelChildren(selector) {
          const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
          return SelectorEngine.find(selector, this._config.parent).filter((element) => !children.includes(element));
        }
        _addAriaAndCollapsedClass(triggerArray, isOpen) {
          if (!triggerArray.length) {
            return;
          }
          for (const element of triggerArray) {
            element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
            element.setAttribute("aria-expanded", isOpen);
          }
        }
        // Static
        static jQueryInterface(config2) {
          const _config = {};
          if (typeof config2 === "string" && /show|hide/.test(config2)) {
            _config.toggle = false;
          }
          return this.each(function() {
            const data2 = Collapse.getOrCreateInstance(this, _config);
            if (typeof config2 === "string") {
              if (typeof data2[config2] === "undefined") {
                throw new TypeError(`No method named "${config2}"`);
              }
              data2[config2]();
            }
          });
        }
      }
      EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
        if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") {
          event.preventDefault();
        }
        for (const element of SelectorEngine.getMultipleElementsFromSelector(this)) {
          Collapse.getOrCreateInstance(element, {
            toggle: false
          }).toggle();
        }
      });
      index_js.defineJQueryPlugin(Collapse);
      return Collapse;
    });
  })(collapse);
  const _withScopeId$2 = (n) => (pushScopeId("data-v-ce222014"), n = n(), popScopeId(), n);
  const _hoisted_1$h = { class: "content mx-auto" };
  const _hoisted_2$c = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode(
    "h2",
    null,
    "We're Committed to Your Privacy",
    -1
    /* HOISTED */
  ));
  const _hoisted_3$c = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode(
    "p",
    null,
    " We need your consent to access the following information which is only used for the purpose of providing you the best possible experience. ",
    -1
    /* HOISTED */
  ));
  const _hoisted_4$7 = { class: "optin-option mb-3" };
  const _hoisted_5$3 = {
    role: "button",
    class: "optin-header",
    "data-bs-toggle": "collapse",
    "aria-expanded": "false",
    href: "#device-info"
  };
  const _hoisted_6$3 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode(
    "span",
    { class: "optin-title" },
    "Device Information",
    -1
    /* HOISTED */
  ));
  const _hoisted_7$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode(
    "div",
    {
      class: "collapse",
      id: "device-info"
    },
    [
      /* @__PURE__ */ createBaseVNode("div", { class: "optin-info d-block" }, " We collect information about your device necessary to protect against fraud and comply with anti-money laundering obligations. This information helps us protect your account from fraudsters and comply with applicable laws. ")
    ],
    -1
    /* HOISTED */
  ));
  const _hoisted_8$1 = { class: "optin-option mb-3" };
  const _hoisted_9 = { class: "optin-header" };
  const _hoisted_10 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode(
    "span",
    {
      class: "optin-title",
      role: "button",
      "data-bs-toggle": "collapse",
      href: "#user-activity",
      "aria-expanded": "false"
    },
    " Activity & User Behavior ",
    -1
    /* HOISTED */
  ));
  const _hoisted_11 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode(
    "div",
    {
      class: "collapse",
      id: "user-activity"
    },
    [
      /* @__PURE__ */ createBaseVNode("div", { class: "optin-info" }, [
        /* @__PURE__ */ createBaseVNode("span", { class: "optin-title d-block mb-2" }, "Activity"),
        /* @__PURE__ */ createTextVNode(" When you create a card through the extension, we save the relevant URL you visit so that we can suggest the correct card(s) to autofill in the future, suggest merchant-specific card designs, and identify any card autofill errors that we want to fix. Importantly, we do not track any actions or collect URL information for sites where you do not use a Privacy Card. "),
        /* @__PURE__ */ createBaseVNode("span", { class: "optin-title d-block my-2" }, "User Behavior"),
        /* @__PURE__ */ createTextVNode(" We track which features you use so that we can understand how Privacy users engage with the product, which informs improvements and updates. ")
      ])
    ],
    -1
    /* HOISTED */
  ));
  const _hoisted_12 = { key: 0 };
  const _hoisted_13 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode(
    "div",
    {
      class: "alert alert-primary",
      role: "alert"
    },
    " If you choose not to share this information, your Privacy Add-on will have limited functionality. ",
    -1
    /* HOISTED */
  ));
  const _hoisted_14 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode(
    "p",
    null,
    "Features not supported without full consent",
    -1
    /* HOISTED */
  ));
  const _hoisted_15 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode(
    "ul",
    null,
    [
      /* @__PURE__ */ createBaseVNode("li", null, "Virtual card suggestions based on your active browser tab"),
      /* @__PURE__ */ createBaseVNode("li", null, "Autofill during checkout")
    ],
    -1
    /* HOISTED */
  ));
  const _hoisted_16 = [
    _hoisted_13,
    _hoisted_14,
    _hoisted_15
  ];
  const _hoisted_17 = { class: "actions d-flex justify-content-around border-bottom pt-2 pb-4 mb-4" };
  const _hoisted_18 = { key: 0 };
  const _hoisted_19 = { key: 1 };
  const _hoisted_20 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode(
    "div",
    { class: "policy-link" },
    [
      /* @__PURE__ */ createTextVNode(" Full details about the information we collect and what we do with it can be found in our "),
      /* @__PURE__ */ createBaseVNode("a", {
        href: "https://privacy.com/privacy-policy",
        class: "text-decoration-underline",
        target: "_blank",
        "data-test": "privacy-policy"
      }, " Privacy Policy ")
    ],
    -1
    /* HOISTED */
  ));
  const _sfc_main$o = /* @__PURE__ */ defineComponent({
    __name: "DataConsent",
    emits: ["consent", "uninstall", "cancel"],
    setup(__props, { emit: emit2 }) {
      const eventStore2 = useEventStore();
      eventStore2.track({ name: EXTENSION_EVENTS.CONSENT_SHOWN });
      const activityConsent = ref(true);
      const uninstall = async () => {
        emit2("uninstall");
        eventStore2.track({ name: EXTENSION_EVENTS.CONSENT_DECLINED });
        const uninstall2 = await appExtensionApi.message.send({
          event: "uninstallExtension"
        });
        if (!uninstall2) {
          eventStore2.track({ name: EXTENSION_EVENTS.CONSENT_DECLINE_CANCELLED });
        }
      };
      const consent = async () => {
        var _a, _b;
        if ((_a = appExtensionApi.context) == null ? void 0 : _a.permissions) {
          const approve = await ((_b = appExtensionApi.context) == null ? void 0 : _b.permissions.request({
            origins: ["<all_urls>"]
          }));
          if (!approve) {
            return;
          }
        }
        await setDataConsent();
        if (activityConsent.value) {
          await setActivityConsent(true);
        } else {
          await setActivityConsent(false);
        }
        eventStore2.track({ name: EXTENSION_EVENTS.CONSENT_ACCEPTED });
        emit2("consent");
      };
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock("div", null, [
          createBaseVNode("div", _hoisted_1$h, [
            _hoisted_2$c,
            _hoisted_3$c,
            createBaseVNode("div", _hoisted_4$7, [
              createBaseVNode("div", _hoisted_5$3, [
                _hoisted_6$3,
                createVNode(IconChevronDown)
              ]),
              _hoisted_7$2
            ]),
            createBaseVNode("div", _hoisted_8$1, [
              createBaseVNode("div", _hoisted_9, [
                _hoisted_10,
                withDirectives(createBaseVNode(
                  "input",
                  {
                    type: "checkbox",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activityConsent.value = $event)
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vModelCheckbox, activityConsent.value]
                ]),
                createVNode(IconChevronDown, {
                  role: "button",
                  "data-bs-toggle": "collapse",
                  href: "#user-activity",
                  "aria-expanded": "false"
                })
              ]),
              _hoisted_11
            ]),
            !activityConsent.value ? (openBlock(), createElementBlock("div", _hoisted_12, _hoisted_16)) : createCommentVNode("v-if", true),
            createBaseVNode("div", _hoisted_17, [
              createVNode(BaseButton, {
                onClick: uninstall,
                variant: "secondary",
                "data-test": "uninstall",
                class: "w-50 me-2"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Uninstall ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(BaseButton, {
                onClick: consent,
                "data-test": "consent",
                class: "w-50 ms-2"
              }, {
                default: withCtx(() => [
                  !activityConsent.value ? (openBlock(), createElementBlock("span", _hoisted_18, "Add without Autofill")) : (openBlock(), createElementBlock("span", _hoisted_19, "Allow"))
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _hoisted_20
          ])
        ]);
      };
    }
  });
  const DataConsent_vue_vue_type_style_index_0_scoped_ce222014_lang = "";
  const DataConsent$1 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-ce222014"]]);
  const _hoisted_1$g = { class: "d-flex flex-column h-100" };
  const _sfc_main$n = /* @__PURE__ */ defineComponent({
    __name: "DataConsent",
    setup(__props) {
      const router2 = useRouter();
      const route = useRoute();
      async function nextPage() {
        const { redirect, ...otherParams } = route.query || {};
        router2.push({
          name: redirect || "cards",
          query: otherParams
        });
      }
      async function uninstall() {
        appExtensionApi.message.send({
          target: "checkout",
          event: "removeInterstitial"
        });
      }
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock("div", _hoisted_1$g, [
          createVNode(DataConsent$1, {
            class: "consent-wrapper h-100",
            onUninstall: uninstall,
            onConsent: nextPage
          })
        ]);
      };
    }
  });
  const DataConsent_vue_vue_type_style_index_0_scoped_137b2f18_lang = "";
  const DataConsent = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-137b2f18"]]);
  const _sfc_main$m = {};
  const _hoisted_1$f = {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$b = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      d: "M5 14L11 8L5 2",
      stroke: "currentColor",
      "stroke-width": "2"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$b = [
    _hoisted_2$b
  ];
  function _sfc_render$9(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$f, _hoisted_3$b);
  }
  const IconChevronRight = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$9]]);
  const _hoisted_1$e = ["title"];
  const _hoisted_2$a = { class: "d-flex align-items-center" };
  const _hoisted_3$a = {
    key: 0,
    class: "icon me-2",
    "data-test": "category-icon"
  };
  const _hoisted_4$6 = {
    class: "name",
    "data-test": "category-name"
  };
  const _sfc_main$l = /* @__PURE__ */ defineComponent({
    __name: "MerchantCategoryListItem",
    props: {
      merchantCategory: null,
      isPrimary: { type: Boolean }
    },
    setup(__props) {
      const props = __props;
      const merchantCategory = computed(
        () => props.merchantCategory || {}
      );
      return (_ctx, _cache) => {
        const _component_RouterLink = resolveComponent("RouterLink");
        return openBlock(), createElementBlock("div", {
          class: normalizeClass(["category", __props.isPrimary ? "primary" : "other"]),
          title: unref(merchantCategory).description
        }, [
          createVNode(_component_RouterLink, {
            to: {
              name: "new-card",
              params: {
                type: unref(CardType).UNLOCKED,
                merchantCategory: unref(merchantCategory)._id
              }
            },
            class: "link d-flex justify-content-between align-items-center",
            "data-test": "select-category-link"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_2$a, [
                __props.isPrimary ? (openBlock(), createElementBlock(
                  "div",
                  _hoisted_3$a,
                  toDisplayString(unref(merchantCategory).icon),
                  1
                  /* TEXT */
                )) : createCommentVNode("v-if", true),
                createBaseVNode(
                  "div",
                  _hoisted_4$6,
                  toDisplayString(unref(merchantCategory).name),
                  1
                  /* TEXT */
                )
              ]),
              createBaseVNode("div", null, [
                createVNode(IconChevronRight)
              ])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["to"])
        ], 10, _hoisted_1$e);
      };
    }
  });
  const MerchantCategoryListItem_vue_vue_type_style_index_0_scoped_b02496bb_lang = "";
  const MerchantCategoryListItem = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-b02496bb"]]);
  const _sfc_main$k = {};
  const _hoisted_1$d = {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$9 = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      d: "M14 11L8 5L2 11",
      stroke: "currentColor",
      "stroke-width": "2"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$9 = [
    _hoisted_2$9
  ];
  function _sfc_render$8(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$d, _hoisted_3$9);
  }
  const IconChevronUp = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$8]]);
  const _withScopeId$1 = (n) => (pushScopeId("data-v-6fd53ac3"), n = n(), popScopeId(), n);
  const _hoisted_1$c = { class: "container" };
  const _hoisted_2$8 = ["aria-busy"];
  const _hoisted_3$8 = {
    key: 1,
    class: "other-container",
    "data-test": "other-container"
  };
  const _hoisted_4$5 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode(
    "h2",
    null,
    "More Categories",
    -1
    /* HOISTED */
  ));
  const _hoisted_5$2 = ["aria-busy"];
  const _hoisted_6$2 = {
    key: 2,
    class: "text-center"
  };
  const _sfc_main$j = /* @__PURE__ */ defineComponent({
    __name: "MerchantCategoryList",
    setup(__props) {
      const { list: listMerchantCategories } = useMerchantCategoriesStore();
      const loading = ref(false);
      const loadingError = ref("");
      const showOther = ref(false);
      const primaryCategories = ref([]);
      const otherCategories = ref([]);
      onMounted(async () => {
        await loadMerchantCategories();
      });
      async function loadMerchantCategories() {
        loading.value = true;
        loadingError.value = "";
        try {
          const { data: data2 } = await listMerchantCategories();
          primaryCategories.value = data2.filter((cat) => cat.isPrimary);
          otherCategories.value = data2.filter((cat) => !cat.isPrimary);
        } catch (err) {
          loadingError.value = "Unable to load merchant categories";
        } finally {
          loading.value = false;
        }
      }
      function toggleShowOther() {
        showOther.value = !showOther.value;
      }
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock("div", _hoisted_1$c, [
          primaryCategories.value.length ? (openBlock(), createElementBlock("ul", {
            key: 0,
            class: "categories-list",
            "data-test": "primary-categories-list",
            "aria-busy": loading.value
          }, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(primaryCategories.value, (cat, index) => {
                return openBlock(), createElementBlock("li", {
                  key: cat._id || index,
                  class: "mb-2"
                }, [
                  createVNode(MerchantCategoryListItem, {
                    "merchant-category": cat,
                    "is-primary": cat.isPrimary
                  }, null, 8, ["merchant-category", "is-primary"])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ], 8, _hoisted_2$8)) : createCommentVNode("v-if", true),
          otherCategories.value.length ? (openBlock(), createElementBlock("div", _hoisted_3$8, [
            createBaseVNode("button", {
              class: "other-header d-flex justify-content-between align-items-center",
              "data-test": "show-other-button",
              onClick: toggleShowOther
            }, [
              _hoisted_4$5,
              showOther.value ? (openBlock(), createBlock(IconChevronUp, { key: 0 })) : (openBlock(), createBlock(IconChevronDown, { key: 1 }))
            ]),
            showOther.value ? (openBlock(), createElementBlock("ul", {
              key: 0,
              class: "categories-list other-categories-list",
              "data-test": "other-categories-list",
              "aria-busy": loading.value
            }, [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(otherCategories.value, (cat, index) => {
                  return openBlock(), createElementBlock("li", {
                    key: cat._id || index,
                    class: "mb-2"
                  }, [
                    createVNode(MerchantCategoryListItem, {
                      "merchant-category": cat,
                      "is-primary": cat.isPrimary
                    }, null, 8, ["merchant-category", "is-primary"])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ], 8, _hoisted_5$2)) : createCommentVNode("v-if", true)
          ])) : createCommentVNode("v-if", true),
          loadingError.value ? (openBlock(), createElementBlock("div", _hoisted_6$2, [
            createVNode(BaseAlert, { variant: "warning" }, {
              default: withCtx(() => [
                createTextVNode(
                  toDisplayString(loadingError.value),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(BaseButton, {
              variant: "primary",
              class: "mt-3",
              onClick: loadMerchantCategories,
              disabled: loading.value,
              "data-test": "retry"
            }, {
              default: withCtx(() => [
                createTextVNode(" Try again ")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["disabled"])
          ])) : createCommentVNode("v-if", true)
        ]);
      };
    }
  });
  const MerchantCategoryList_vue_vue_type_style_index_0_scoped_6fd53ac3_lang = "";
  const MerchantCategoryList = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-6fd53ac3"]]);
  const _sfc_main$i = /* @__PURE__ */ defineComponent({
    __name: "SelectMerchantCategory",
    setup(__props) {
      return (_ctx, _cache) => {
        return openBlock(), createBlock(MerchantCategoryList);
      };
    }
  });
  const SelectMerchantCategory_vue_vue_type_style_index_0_scoped_fbbeaeae_lang = "";
  const SelectMerchantCategory = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-fbbeaeae"]]);
  const _sfc_main$h = {};
  const _hoisted_1$b = {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$7 = /* @__PURE__ */ createBaseVNode(
    "g",
    { "clip-path": "url(#clip0_1452_9265)" },
    [
      /* @__PURE__ */ createBaseVNode("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M9 0H7V3.10002C7.32311 3.03443 7.65753 3 8 3C8.34247 3 8.67689 3.03443 9 3.10002V0ZM3 2L4.99979 3.99979C4.46208 4.40373 4.00846 4.91355 3.66989 5.49831L1.58579 3.41421L3 2ZM0 7H3.10002C3.03443 7.32311 3 7.65753 3 8C3 8.34247 3.03443 8.67689 3.10002 9H0V7ZM1.27208 12.8995L3.66989 10.5017C4.00846 11.0864 4.46208 11.5963 4.99979 12.0002L2.68629 14.3137L1.27208 12.8995ZM7 16V12.9C7.32311 12.9656 7.65753 13 8 13C8.34247 13 8.67689 12.9656 9 12.9V16H7ZM12.8995 14.7279L10.5017 12.3301C11.0864 11.9915 11.5963 11.5379 12.0002 11.0002L14.3137 13.3137L12.8995 14.7279ZM16 9H12.9C12.9656 8.67689 13 8.34247 13 8C13 7.65753 12.9656 7.32311 12.9 7H16V9ZM14 3L12.0002 4.99979C11.5963 4.46208 11.0864 4.00846 10.5017 3.66989L12.5858 1.58579L14 3ZM11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z",
        fill: "currentColor"
      })
    ],
    -1
    /* HOISTED */
  );
  const _hoisted_3$7 = /* @__PURE__ */ createBaseVNode(
    "defs",
    null,
    [
      /* @__PURE__ */ createBaseVNode("clipPath", { id: "clip0_1452_9265" }, [
        /* @__PURE__ */ createBaseVNode("rect", {
          width: "16",
          height: "16",
          fill: "white"
        })
      ])
    ],
    -1
    /* HOISTED */
  );
  const _hoisted_4$4 = [
    _hoisted_2$7,
    _hoisted_3$7
  ];
  function _sfc_render$7(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$b, _hoisted_4$4);
  }
  const IconSun = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$7]]);
  const _withScopeId = (n) => (pushScopeId("data-v-998d4dff"), n = n(), popScopeId(), n);
  const _hoisted_1$a = { class: "px-4" };
  const _hoisted_2$6 = {
    key: 0,
    class: "data-settings d-flex flex-column justify-content-around p-3 mb-4 text-center"
  };
  const _hoisted_3$6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
    "h3",
    null,
    "Data Settings",
    -1
    /* HOISTED */
  ));
  const _hoisted_4$3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
    "p",
    null,
    [
      /* @__PURE__ */ createTextVNode(" Allow Privacy to track activity and user behavior in order to enable autofill at checkout. "),
      /* @__PURE__ */ createBaseVNode("a", {
        href: "https://privacy.com/privacy-policy",
        class: "d-block text-decoration-underline",
        target: "_blank",
        "data-test": "privacy-policy"
      }, " Learn more ")
    ],
    -1
    /* HOISTED */
  ));
  const _hoisted_5$1 = { key: 0 };
  const _hoisted_6$1 = { key: 1 };
  const _hoisted_7$1 = { class: "mb-3 position-relative" };
  const _sfc_main$g = /* @__PURE__ */ defineComponent({
    __name: "ExtensionSettingsView",
    setup(__props) {
      const theme2 = ref();
      getTheme().then((storedTheme) => theme2.value = storedTheme).catch(() => {
        theme2.value = "auto";
        setTheme(theme2.value);
      });
      const buttonText = computed(() => {
        switch (theme2.value) {
          case "light":
            return "Light";
          case "dark":
            return "Dark";
          default:
            return "Match System";
        }
      });
      function setThemeHandler(newTheme) {
        setTheme(newTheme);
        theme2.value = newTheme;
      }
      const activityConsent = ref(false);
      async function setActivityConsentHandler() {
        setActivityConsent(!activityConsent.value);
        activityConsent.value = !activityConsent.value;
        if (activityConsent.value) {
          appExtensionApi.message.send({
            event: "resumeParsing"
          });
        } else {
          appExtensionApi.message.send({
            event: "pauseParsing"
          });
        }
      }
      onMounted(async () => {
        activityConsent.value = await hasActivityConsent();
      });
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock("div", _hoisted_1$a, [
          unref(isFirefox)() ? (openBlock(), createElementBlock("div", _hoisted_2$6, [
            _hoisted_3$6,
            _hoisted_4$3,
            createVNode(BaseButton, {
              variant: "light",
              onClick: setActivityConsentHandler
            }, {
              default: withCtx(() => [
                activityConsent.value ? (openBlock(), createElementBlock("span", _hoisted_5$1, "Disable Autofill")) : (openBlock(), createElementBlock("span", _hoisted_6$1, "Enable Autofill"))
              ]),
              _: 1
              /* STABLE */
            })
          ])) : createCommentVNode("v-if", true),
          createBaseVNode("div", _hoisted_7$1, [
            createVNode(unref(BaseDropdown), { class: "theme" }, {
              button: withCtx(() => [
                createVNode(IconSun, { class: "icon-sun me-1" }),
                createTextVNode(
                  " " + toDisplayString(unref(buttonText)) + " Theme ",
                  1
                  /* TEXT */
                )
              ]),
              default: withCtx(() => [
                createVNode(unref(BaseDropdownItem), {
                  onClick: _cache[0] || (_cache[0] = ($event) => setThemeHandler("light"))
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Light ")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(unref(BaseDropdownItem), {
                  onClick: _cache[1] || (_cache[1] = ($event) => setThemeHandler("dark"))
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Dark ")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(unref(BaseDropdownItem), {
                  onClick: _cache[2] || (_cache[2] = ($event) => setThemeHandler("auto"))
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Match System ")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]);
      };
    }
  });
  const ExtensionSettingsView_vue_vue_type_style_index_0_scoped_998d4dff_lang = "";
  const ExtensionSettings = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-998d4dff"]]);
  const defaultHeight = 500;
  const routes = [
    {
      path: "/index.html",
      name: "index",
      redirect: () => ({ name: "cards" })
    },
    {
      path: "/interstitial.html",
      name: "interstitial",
      redirect: () => ({ name: "cards" })
    },
    {
      path: "/login",
      name: "login",
      component: LoginView
    },
    {
      path: "/cards",
      alias: "/",
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: "",
          name: "cards",
          component: CardsView
        },
        {
          path: "select-merchant-category",
          name: "select-merchant-category",
          component: SelectMerchantCategory,
          meta: {
            layout: "Details",
            title: "New Card",
            grayBackground: true,
            height: 600
          }
        },
        {
          path: "new/:type/:merchantCategory?",
          name: "new-card",
          component: _sfc_main$t,
          meta: {
            layout: "Details",
            title: "New Card",
            height: 600
          }
        },
        {
          path: "suggestions",
          name: "suggestions",
          component: CardsView,
          meta: {
            layout: "Details",
            title: "Choose Card"
          }
        },
        {
          path: ":uuid",
          name: "card-details",
          component: CardDetails,
          meta: {
            layout: "Details",
            title: "Card Details",
            height: 600
          }
        },
        {
          path: "collapsed",
          name: "card-collapsed",
          component: _sfc_main$p,
          meta: {
            layout: "Headerless",
            height: isIPhone() ? 72 : 120
          }
        }
      ]
    },
    {
      path: "/transactions",
      name: "transactions",
      component: TransactionsView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/tfa",
      name: "tfa",
      component: TFAView
    },
    {
      path: "/tfa-recovery-confirm",
      name: "tfa-recovery-confirm",
      component: _sfc_main$Z
    },
    {
      path: "/account",
      name: "account",
      component: _sfc_main$13,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/password-reset",
      name: "password-reset",
      component: _sfc_main$X
    },
    {
      path: "/data-consent",
      name: "data-consent",
      component: DataConsent,
      meta: {
        layout: "Default"
      }
    },
    {
      path: "/extension-settings",
      name: "extension-settings",
      component: ExtensionSettings,
      meta: {
        layout: "Details",
        title: "Extension Settings",
        requiresAuth: true
      }
    }
  ];
  const router = createRouter({
    history: createMemoryHistory("/"),
    routes
  });
  router.beforeEach(async (to, from) => {
    var _a;
    const agreed = isFirefox() ? await hasDataConsent() && await isActivityConsentSet() : true;
    if (!agreed && to.name !== "data-consent") {
      return {
        name: "data-consent",
        query: { redirect: to.name, ...to.query }
      };
    }
    const authStore2 = useAuthStore();
    to.meta.fromRoute = from == null ? void 0 : from.name;
    if ((from == null ? void 0 : from.name) === "suggestions" && ((_a = from.query) == null ? void 0 : _a.q)) {
      to.meta.fromRoute = void 0;
    }
    if (!authStore2.token && to.meta.requiresAuth && to.name !== "login") {
      return {
        name: "login",
        query: { redirect: to.name, ...to.query }
      };
    }
    if (authStore2.userToken) {
      const { startPage } = await appExtensionApi.storage.get("startPage");
      if (startPage && to.name !== startPage) {
        return { name: startPage };
      } else if (!startPage) {
        await authStore2.clearTwoFactorAuth();
        return { name: "login", query: { redirect: to.name } };
      }
    }
    const interstitialHeight = to.meta.height || defaultHeight;
    if (!appExtensionApi.popup || to.name === "card-collapsed") {
      appExtensionApi.message.send({
        event: "updateInterstitialHeight",
        target: "checkout",
        payload: {
          height: interstitialHeight
        }
      });
    }
  });
  const scriptRel = "modulepreload";
  const assetsURL = function(dep) {
    return "/" + dep;
  };
  const seen = {};
  const __vitePreload = function preload(baseModule, deps, importerUrl) {
    if (true) {
      return baseModule();
    }
    const links = document.getElementsByTagName("link");
    return Promise.all(deps.map((dep) => {
      dep = assetsURL(dep);
      if (dep in seen)
        return;
      seen[dep] = true;
      const isCss = dep.endsWith(".css");
      const cssSelector = isCss ? '[rel="stylesheet"]' : "";
      const isBaseRelative = !!importerUrl;
      if (isBaseRelative) {
        for (let i = links.length - 1; i >= 0; i--) {
          const link2 = links[i];
          if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
            return;
          }
        }
      } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
        return;
      }
      const link = document.createElement("link");
      link.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) {
        link.as = "script";
        link.crossOrigin = "";
      }
      link.href = dep;
      document.head.appendChild(link);
      if (isCss) {
        return new Promise((res, rej) => {
          link.addEventListener("load", res);
          link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
        });
      }
    })).then(() => baseModule());
  };
  const store = createPinia();
  const allStores = /* @__PURE__ */ new Set();
  store.use(({ store: store2 }) => allStores.add(store2));
  const initAllStores = async () => {
    await Promise.all([
      __vitePreload(() => Promise.resolve().then(() => authStore), false ? "__VITE_PRELOAD__" : void 0).then((store2) => store2.useAuthStore().init()),
      __vitePreload(() => Promise.resolve().then(() => userStore), false ? "__VITE_PRELOAD__" : void 0).then((store2) => store2.useUserStore().init()),
      __vitePreload(() => Promise.resolve().then(() => metricStore), false ? "__VITE_PRELOAD__" : void 0).then(
        (store2) => store2.useMetricStore().init()
      )
      // Add other stores to init here
    ]);
  };
  const _sfc_main$f = /* @__PURE__ */ defineComponent({
    __name: "MainContent",
    props: {
      grayBackground: { type: Boolean }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock(
          "main",
          {
            class: normalizeClass(["py-3 flex-grow-1 overflow-y-scroll", { "gray-background": __props.grayBackground }])
          },
          [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          2
          /* CLASS */
        );
      };
    }
  });
  const MainContent_vue_vue_type_style_index_0_scoped_38cb1a77_lang = "";
  const MainContent = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-38cb1a77"]]);
  const _sfc_main$e = {};
  const _hoisted_1$9 = { class: "py-3 px-4 border-bottom flex-shrink-0 d-flex align-items-center justify-content-between" };
  function _sfc_render$6(_ctx, _cache) {
    return openBlock(), createElementBlock("header", _hoisted_1$9, [
      renderSlot(_ctx.$slots, "default")
    ]);
  }
  const HeaderContent = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$6]]);
  const _sfc_main$d = /* @__PURE__ */ defineComponent({
    __name: "DefaultHeader",
    setup(__props) {
      const interstitial = inject("context") === CONTEXT.INTERSTITIAL;
      return (_ctx, _cache) => {
        return openBlock(), createBlock(HeaderContent, { class: "d-flex align-items-center justify-content-between" }, {
          default: withCtx(() => [
            createVNode(PrivacyLogo, { "aria-label": "Privacy" }),
            interstitial ? (openBlock(), createBlock(_sfc_main$r, { key: 0 })) : createCommentVNode("v-if", true)
          ]),
          _: 1
          /* STABLE */
        });
      };
    }
  });
  const __default__$2 = {
    name: "TheDefaultLayout"
  };
  const _sfc_main$c = /* @__PURE__ */ defineComponent({
    ...__default__$2,
    setup(__props) {
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock(
          Fragment,
          null,
          [
            createVNode(_sfc_main$d),
            createVNode(MainContent, null, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
              /* FORWARDED */
            })
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  });
  const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: _sfc_main$c
  }, Symbol.toStringTag, { value: "Module" }));
  const _sfc_main$b = {};
  const _hoisted_1$8 = {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      d: "M15 8H2",
      stroke: "currentColor",
      "stroke-width": "2"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$5 = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      d: "M8 2L2 8L8 14",
      stroke: "currentColor",
      "stroke-width": "2"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_4$2 = [
    _hoisted_2$5,
    _hoisted_3$5
  ];
  function _sfc_render$5(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_4$2);
  }
  const IconArrowLeft = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$5]]);
  const _hoisted_1$7 = { class: "mt-1 mb-0 w-75" };
  const _sfc_main$a = /* @__PURE__ */ defineComponent({
    __name: "DetailsHeader",
    props: {
      pageTitle: null
    },
    setup(__props) {
      const interstitial = inject("context") === CONTEXT.INTERSTITIAL;
      const noBackRouteNames = [
        "card-collapsed",
        "login",
        "tfa",
        "password-resest"
      ];
      const goBack = () => {
        const { meta } = router.currentRoute.value;
        if (!meta.fromRoute || noBackRouteNames.includes(meta.fromRoute)) {
          router.push({ name: "cards" });
        } else {
          router.back();
        }
      };
      return (_ctx, _cache) => {
        return openBlock(), createBlock(HeaderContent, {
          class: normalizeClass(["details-header text-center", { "has-close": interstitial }])
        }, {
          default: withCtx(() => [
            createVNode(BaseButton, {
              variant: "nav",
              onClick: goBack,
              size: "sm"
            }, {
              default: withCtx(() => [
                createVNode(IconArrowLeft)
              ]),
              _: 1
              /* STABLE */
            }),
            createBaseVNode(
              "h1",
              _hoisted_1$7,
              toDisplayString(__props.pageTitle),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["class"]);
      };
    }
  });
  const DetailsHeader_vue_vue_type_style_index_0_scoped_55990d64_lang = "";
  const DetailsHeader = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-55990d64"]]);
  const _hoisted_1$6 = { class: "p-2" };
  const _sfc_main$9 = /* @__PURE__ */ defineComponent({
    __name: "TheNotification",
    props: {
      notification: null
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock("section", _hoisted_1$6, [
          createVNode(BaseAlert, {
            variant: "warning",
            class: "mb-0"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(__props.notification.message, (content, index) => {
                  return openBlock(), createElementBlock(
                    "p",
                    { key: index },
                    toDisplayString(content),
                    1
                    /* TEXT */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          })
        ]);
      };
    }
  });
  const TheNotification_vue_vue_type_style_index_0_scoped_cf0851f7_lang = "";
  const TheNotification = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-cf0851f7"]]);
  const useNotificationsStore = defineStore("notifications", () => {
    const eventStore2 = useEventStore();
    const notificationsState = ref([]);
    const requestMadeState = ref(false);
    const notifications = computed(() => notificationsState.value);
    async function get2() {
      if (requestMadeState.value) {
        return notificationsState.value;
      }
      try {
        const { data: data2 } = await list$3();
        notificationsState.value = data2.data;
      } catch (error2) {
        eventStore2.error([
          {
            name: NOTIFICATION_EVENTS.REQUESTED,
            data: {
              message: error2.message,
              error: error2
            }
          }
        ]);
      }
      requestMadeState.value = true;
      return notificationsState.value;
    }
    function $reset() {
      notificationsState.value = [];
    }
    return {
      // getters
      notifications,
      // actions
      get: get2,
      $reset,
      // state
      notificationsState,
      requestMadeState
    };
  });
  const _sfc_main$8 = {};
  const _hoisted_1$5 = {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      d: "M9 0H7V2.08296C5.98695 2.25292 5.05999 2.67673 4.28675 3.28675L3 2L1.58579 3.41421L2.94227 4.7707C2.51673 5.43581 2.21878 6.19042 2.08296 7H0V9H2.08296C2.21878 9.80958 2.51673 10.5642 2.94228 11.2293L1.27208 12.8995L2.68629 14.3137L4.28675 12.7133C5.05999 13.3233 5.98695 13.7471 7 13.917V16H9V13.917C9.80958 13.7812 10.5642 13.4833 11.2293 13.0577L12.8995 14.7279L14.3137 13.3137L12.7133 11.7133C13.3233 10.94 13.7471 10.013 13.917 9H16V7H13.917C13.7471 5.98695 13.3233 5.05999 12.7133 4.28675L14 3L12.5858 1.58579L11.2293 2.94228C10.5642 2.51673 9.80958 2.21878 9 2.08296V0ZM12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8Z",
      fill: "currentColor"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$4 = [
    _hoisted_2$4
  ];
  function _sfc_render$4(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$4);
  }
  const IconCogWheel = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$4]]);
  const _hoisted_1$4 = { class: "d-flex align-items-center" };
  const _sfc_main$7 = /* @__PURE__ */ defineComponent({
    __name: "FixedHeader",
    setup(__props) {
      const interstitial = inject("context") === CONTEXT.INTERSTITIAL;
      const userStore2 = useUserStore();
      const userIcon = computed(() => {
        return userStore2.user.photo ? `${"https://app.privacy.com"}/api/v1/user/getAccountPhoto/${userStore2.user.photo}` : void 0;
      });
      return (_ctx, _cache) => {
        const _component_router_link = resolveComponent("router-link");
        return openBlock(), createBlock(HeaderContent, { class: "top-header" }, {
          default: withCtx(() => [
            createVNode(_component_router_link, {
              to: { name: "account" },
              class: "nav-link account px-0",
              "active-class": "active"
            }, {
              default: withCtx(() => [
                createVNode(UserIcon, {
                  size: "small",
                  url: unref(userIcon)
                }, null, 8, ["url"])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_router_link, {
              to: { name: "account" },
              class: normalizeClass(["nav-link", interstitial && "interstitial-logo"]),
              "active-class": "active"
            }, {
              default: withCtx(() => [
                createVNode(PrivacyLogo, { "aria-label": "Privacy" })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["class"]),
            createBaseVNode("div", _hoisted_1$4, [
              createVNode(_component_router_link, {
                to: { name: "extension-settings" },
                class: "nav-link",
                "active-class": "active"
              }, {
                default: withCtx(() => [
                  createVNode(BaseButton, {
                    variant: "nav",
                    size: "sm",
                    class: normalizeClass(interstitial && "me-2")
                  }, {
                    default: withCtx(() => [
                      createVNode(IconCogWheel)
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["class"])
                ]),
                _: 1
                /* STABLE */
              }),
              interstitial ? (openBlock(), createBlock(_sfc_main$r, { key: 0 })) : createCommentVNode("v-if", true)
            ])
          ]),
          _: 1
          /* STABLE */
        });
      };
    }
  });
  const FixedHeader_vue_vue_type_style_index_0_scoped_0f1e8051_lang = "";
  const FixedHeader = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-0f1e8051"]]);
  const __default__$1 = {
    name: "TheDetailsLayout"
  };
  const _sfc_main$6 = /* @__PURE__ */ defineComponent({
    ...__default__$1,
    setup(__props) {
      const route = useRoute();
      const notificationsStore = useNotificationsStore();
      const pageTitle = ref("");
      const grayBackground = ref(false);
      const notification = computed(() => notificationsStore.notifications[0]);
      notificationsStore.get();
      watchEffect(() => {
        var _a, _b;
        pageTitle.value = ((_a = route == null ? void 0 : route.meta) == null ? void 0 : _a.title) || "Give this page a title";
        grayBackground.value = !!((_b = route == null ? void 0 : route.meta) == null ? void 0 : _b.grayBackground);
      });
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock(
          Fragment,
          null,
          [
            createVNode(FixedHeader),
            unref(notification) ? (openBlock(), createBlock(TheNotification, {
              key: 0,
              notification: unref(notification)
            }, null, 8, ["notification"])) : createCommentVNode("v-if", true),
            createVNode(DetailsHeader, { "page-title": pageTitle.value }, null, 8, ["page-title"]),
            createVNode(MainContent, { "gray-background": grayBackground.value }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["gray-background"])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  });
  const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: _sfc_main$6
  }, Symbol.toStringTag, { value: "Module" }));
  const _sfc_main$5 = {
    name: "TheHeaderlessLayout"
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return renderSlot(_ctx.$slots, "default");
  }
  const TheHeaderlessLayout = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$3]]);
  const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: TheHeaderlessLayout
  }, Symbol.toStringTag, { value: "Module" }));
  const _sfc_main$4 = {};
  const _hoisted_1$3 = {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      fill: "currentColor",
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M0 3C0 2.44772 0.447715 2 1 2H15C15.5523 2 16 2.44772 16 3V4H0V3ZM0 6V13C0 13.5523 0.447715 14 1 14H15C15.5523 14 16 13.5523 16 13V6H0ZM2 10C2 9.44772 2.44772 9 3 9H5C5.55228 9 6 9.44772 6 10V11C6 11.5523 5.55228 12 5 12H3C2.44772 12 2 11.5523 2 11V10Z"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$3 = [
    _hoisted_2$3
  ];
  function _sfc_render$2(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
  }
  const IconCard = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$2]]);
  const _sfc_main$3 = {};
  const _hoisted_1$2 = {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      fill: "currentColor",
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M0 0H4V4H0V0ZM5 0H9V4H5V0ZM14 0H10V4H14V0ZM0 5H4V9H0V5ZM9 5H5V9H9V5ZM10 5H14V9H10V5ZM4 10H0V14H4V10ZM5 10H9V14H5V10ZM14 10H10V14H14V10Z"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$2 = [
    _hoisted_2$2
  ];
  function _sfc_render$1(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
  }
  const IconGrid = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1]]);
  const _sfc_main$2 = {};
  const _hoisted_1$1 = {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode(
    "rect",
    {
      width: "24",
      height: "24",
      rx: "8",
      fill: "#4949F2"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode(
    "path",
    {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M13 4H11V11H4V13H11V20H13V13H20V11H13V4Z",
      fill: "white"
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_4$1 = [
    _hoisted_2$1,
    _hoisted_3$1
  ];
  function _sfc_render(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_4$1);
  }
  const IconPlus = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
  const _hoisted_1 = { class: "navbar navbar-expand w-100" };
  const _hoisted_2 = { class: "navbar-nav align-items-center w-100 justify-content-between" };
  const _hoisted_3 = { class: "nav-item" };
  const _hoisted_4 = { class: "nav-item" };
  const _hoisted_5 = { class: "nav-item" };
  const _hoisted_6 = { class: "new-card-option" };
  const _hoisted_7 = { class: "new-card-option" };
  const _hoisted_8 = { class: "new-card-option" };
  const _sfc_main$1 = /* @__PURE__ */ defineComponent({
    __name: "NavHeader",
    props: {
      userIcon: null
    },
    setup(__props) {
      const subscriptionsStore = useSubscriptionsStore();
      const router2 = useRouter();
      subscriptionsStore.get().catch(() => {
      });
      const hasCategoryCardsFeature = computed(
        () => subscriptionsStore.hasFeature(SubscriptionFeaturesEnum.CATEGORY_CARDS)
      );
      return (_ctx, _cache) => {
        const _component_router_link = resolveComponent("router-link");
        return openBlock(), createBlock(HeaderContent, null, {
          default: withCtx(() => [
            createBaseVNode("nav", _hoisted_1, [
              createBaseVNode("ul", _hoisted_2, [
                createBaseVNode("li", _hoisted_3, [
                  createVNode(_component_router_link, {
                    to: { name: "cards" },
                    class: "nav-link ps-0 pe-0",
                    "active-class": "active"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Cards ")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                createBaseVNode("li", _hoisted_4, [
                  createVNode(_component_router_link, {
                    to: { name: "transactions" },
                    class: "nav-link",
                    "active-class": "active"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Transactions ")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                createBaseVNode("li", _hoisted_5, [
                  createVNode(unref(BaseDropdown), {
                    class: "new-card",
                    "toggle-variant": "icon",
                    "small-button": true
                  }, {
                    button: withCtx(() => [
                      createVNode(IconPlus)
                    ]),
                    default: withCtx(() => [
                      createVNode(unref(BaseDropdownItem), {
                        onClick: _cache[0] || (_cache[0] = ($event) => unref(router2).push({
                          name: "new-card",
                          params: { type: unref(CardType).SINGLE_USE }
                        }))
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_6, [
                            createVNode(IconFlame, { class: "card-type-icon" }),
                            createTextVNode(" Single-Use ")
                          ])
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      createVNode(unref(BaseDropdownItem), {
                        onClick: _cache[1] || (_cache[1] = ($event) => unref(router2).push({
                          name: "new-card",
                          params: { type: unref(CardType).MERCHANT_LOCKED }
                        }))
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_7, [
                            createVNode(IconCard, { class: "card-type-icon" }),
                            createTextVNode(" Merchant Locked ")
                          ])
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      unref(hasCategoryCardsFeature) ? (openBlock(), createBlock(unref(BaseDropdownItem), {
                        key: 0,
                        onClick: _cache[2] || (_cache[2] = ($event) => unref(router2).push({
                          name: "select-merchant-category"
                        }))
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_8, [
                            createVNode(IconGrid, { class: "card-type-icon" }),
                            createTextVNode(" Category Locked ")
                          ])
                        ]),
                        _: 1
                        /* STABLE */
                      })) : createCommentVNode("v-if", true)
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ])
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        });
      };
    }
  });
  const NavHeader_vue_vue_type_style_index_0_scoped_a601a917_lang = "";
  const NavHeader = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a601a917"]]);
  const __default__ = {
    name: "TheSectionLayout"
  };
  const _sfc_main = /* @__PURE__ */ defineComponent({
    ...__default__,
    setup(__props) {
      const notificationsStore = useNotificationsStore();
      const notification = computed(() => notificationsStore.notifications[0]);
      notificationsStore.get();
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock(
          Fragment,
          null,
          [
            createVNode(FixedHeader),
            unref(notification) ? (openBlock(), createBlock(TheNotification, {
              key: 0,
              notification: unref(notification)
            }, null, 8, ["notification"])) : createCommentVNode("v-if", true),
            createVNode(NavHeader),
            createVNode(MainContent, null, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
              /* FORWARDED */
            })
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  });
  const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: _sfc_main
  }, Symbol.toStringTag, { value: "Module" }));
  function registerLayouts(app2) {
    const layouts = /* @__PURE__ */ Object.assign({
      "./TheDefaultLayout.vue": __vite_glob_0_0,
      "./TheDetailsLayout.vue": __vite_glob_0_1,
      "./TheHeaderlessLayout.vue": __vite_glob_0_2,
      "./TheSectionLayout.vue": __vite_glob_0_3
    });
    Object.entries(layouts).forEach(([, layout]) => {
      var _a;
      app2.component((_a = layout == null ? void 0 : layout.default) == null ? void 0 : _a.name, layout == null ? void 0 : layout.default);
    });
  }
  const theme = "";
  const app = createApp(_sfc_main$1y);
  app.use(store);
  app.provide("context", CONTEXT.INTERSTITIAL);
  const eventStore = useEventStore();
  app.config.errorHandler = async (err, vm, info) => {
    const tab = await appExtensionApi.message.send({ event: "getCurrentTab" });
    const errEvent = {
      name: ERROR_EVENTS.UNHANDLED,
      data: { err, component: vm == null ? void 0 : vm.$options.__name, info, url: tab == null ? void 0 : tab.url }
    };
    try {
      await eventStore.error([errEvent]);
    } catch (err2) {
      console.warn(err2);
    }
  };
  initAllStores().then(() => {
    app.use(router);
    registerLayouts(app);
    app.mount("#app");
    const url = new URL(window.location.href);
    const params = url.searchParams;
    const query = new URLSearchParams(params.get("query") || "");
    if (params.get("page")) {
      router.push({
        name: params.get("page"),
        query: Object.fromEntries(query)
      });
    } else if (!url.pathname.endsWith(".html")) {
      router.push({ name: "home", query: Object.fromEntries(query) });
    }
  });
})();