const getEle = (id) => document.getElementById(id);

const colorList = [
  'pallet',
  'viridian',
  'pewter',
  'cerulean',
  'vermillion',
  'lavender',
  'celadon',
  'saffron',
  'fuschia',
  'cinnabar',
];

// tạo dãy buttom chọn màu
const createBtn = () => {
  let content = colorList.reduce(
    (partialContent, nextColor) =>
      partialContent +
      `<button class="color-button ${nextColor}" onclick="changeColor('${nextColor}')"></button>`,
    ''
  );
  getEle('colorContainer').innerHTML = content;
};

window.onload = createBtn();

// set active cho button đầu tiên
let palletColorBtn = document.querySelector('.color-button.pallet');
palletColorBtn.classList.add('active');

const changeColor = (color) => {
  //thay đổi active khi click các button
  let currentActiveBtn = document.querySelector('.color-button.active');
  if (currentActiveBtn) {
    currentActiveBtn.classList.remove('active');
  }
  let newActiveBtn = document.querySelector(`.color-button.${color}`);
  newActiveBtn.classList.add('active');

  //   đổi màu ngôi nhà
  let house = getEle('house');
  house.className = `house ${color}`;
};
