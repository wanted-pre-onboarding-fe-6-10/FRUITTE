import { rest } from 'msw';
import ProductService from '../db/product-service';

const productService = new ProductService();

export const handlers = [
  // 해당 id로 product 찾기
  rest.get('/products/:id', (req, res, ctx) => {
    const id = req.params.id;
    const findedProduct = productService.findId(id);
    if (!findedProduct) {
      return res(ctx.status(403), ctx.json({ message: 'Not find product' }));
    }
    return res(ctx.status(200), ctx.json(findedProduct));
  }),
  // 전체 product_list
  rest.get('/products', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(productService.showAllList()));
  }),
  // isShow: true 인 값만 list
  rest.get('/products/isShow', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(productService.isShowList()));
  }),
  // 새로운 product create
  rest.post('/products/create', (req, res, ctx) => {
    const newproduct = req.boby;
    productService.createProduct(newproduct);
    return res(ctx.status(200), ctx.json({ message: 'Success' }));
  }),
  // id 값으로 해당 product 삭제
  rest.post('/products/del/:id', (req, res, ctx) => {
    const id = req.params.id;
    const response = productService.del(id);
    if (!response) {
      return res(ctx.status(403), ctx.json({ message: 'Not find product' }));
    }
    return res(ctx.status(200), ctx.json({ message: 'Success' }));
  }),
  // id값에 해당하는 product update
  rest.post('/products/update/:id', (req, res, ctx) => {
    const id = req.params.id;
    const updatedata = req.boby;
    const response = productService.update(id, updatedata);
    if (!response) {
      return res(ctx.status(403), ctx.json({ message: 'Not find product' }));
    }
    return res(ctx.status(200), ctx.json(response));
  }),
];
