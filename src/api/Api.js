import axios from 'axios';

// (id:number)값으로 해당 product 찾기
export const findId = async id => {
  const res = await axios.get(`/products/${id}`);
  return res.data; // return 해당 product 객체
};

// 모든 Product_List 가져오기
export const getAll = async () => {
  const res = await axios.get('/products');
  return res.data; // return product[]
};

// Product_List 중 {isShow:true} 인 값 가져오기
export const getIsShowTrue = async () => {
  const res = await axios.get('/products/isShow');
  return res.data; // return product[]
};

// product 객체값 넣어주면 id값은 자동 생성
export const create = async createdData => {
  const res = await axios.post('/products/create', createdData);
  return res.data; // return { message: 'Success' }
};
// id 값으로 해당 product 삭제
export const del = async id => {
  const res = await axios.post(`/products/del/${id}`);
  return res.data; // return { message: 'Success' }
};

// 원하는 id 값만 수정 ex) data = {isShow: false}
// status, description, options, img 값은 원래있던 값 안 넣어주면 사라짐
export const updateData = async (id, data) => {
  const res = await axios.post(`/products/update/${id}`, data);
  return res.data; // return Update Data
};

// pagenation - currentPage는 1~4값 중 하나
export const pagenation = async currentPage => {
  const res = await axios.get('/products/isShow');
  const totalPage = Math.ceil(res.data.length / 10);
  const index = (currentPage - 1) * 10;
  const productsList = res.data.slice(index, 10);
  return { productsList, totalPage }; // return {product[], number}
};
