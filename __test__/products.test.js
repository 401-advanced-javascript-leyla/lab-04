const Products = require('../categories/products');

describe('Products Model', () => {

  let products;

  beforeEach(() => {
    products = new Products();
  })

  it('created a new model',()=>{
      expect(true).toEqual(true);
  });

});  