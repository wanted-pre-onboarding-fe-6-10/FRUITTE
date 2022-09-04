import products_list from './products';

export default class ProductService {
  products_list = products_list;

  showAllList() {
    const products = this.products_list;
    return products;
  }
  isShowList() {
    const idShohwProducts = this.products_list.filter(res => res.isShow);
    return idShohwProducts;
  }
  findId(id) {
    const product = this.products_list.find(res => res.id === id); // 못찾을 시 undefind
    if (!product) {
      return false;
    }
    return product;
  }
  createProduct(newProduct) {
    const id = Number(this.products_list.at(-1).id) + 1;
    const createdProduct = { ...newProduct, id: `${id}` };
    this.products_list.push(createdProduct);
    return this.products_list;
  }
  del(id) {
    const index = this.products_list.findIndex(res => res.id === id); // 못찾을 시 -1
    if (index === -1) {
      return false;
    }
    this.products_list.splice(index, 1);
    return this.products_list;
  }
  update(id, data) {
    if (typeof data !== 'object') {
      throw new Error({ massage: 'data값이 객체가 아닙니다. 확인해주세요.' });
    }
    const product = this.products_list.find(res => res.id === id); // 못찾을 시 undefind
    if (!product) {
      return false;
    }
    const index = this.products_list.findIndex(res => res.id === id);
    const updatedProduct = Object.assign(product, data);
    this.products_list.splice(index, 1, updatedProduct);
    return updatedProduct;
  }
}
