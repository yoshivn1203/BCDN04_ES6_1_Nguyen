const getEle = (id) => document.getElementById(id);

const inpK1 = ['inpToan', 'inpLy', 'inpHoa'];
const inpK2 = ['inpVan', 'inpSu', 'inpDia', 'inpEnglish'];

const tinhTB = (...input) => input.reduce((a, b) => a + b, 0) / input.length;

const onclickHandler = (inpArr, id) => {
  // lấy input từ form, chuyển thành số, lưu vào mảng
  let input = inpArr.map((ele) => getEle(ele).value * 1);
  //tính điểm trung bình dựa trên mảng số liệu, lấy 2 chữ số thập phân
  let ketQua = tinhTB(...input).toFixed(2);
  getEle(id).innerHTML = ketQua;
};

getEle('btnKhoi1').onclick = () => onclickHandler(inpK1, 'tbKhoi1');
getEle('btnKhoi2').onclick = () => onclickHandler(inpK2, 'tbKhoi2');
