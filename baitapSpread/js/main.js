const convertToSpan = (className) => {
  let content = document.querySelector(className).innerHTML;
  let letters = [...content];
  document.querySelector(className).innerHTML = letters.reduce(
    (prev, next) => prev + `<span>${next}</span>`,
    ''
  );
};

convertToSpan('.heading');
