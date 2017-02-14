import React from 'react';
import { shallow } from 'enzyme';
import Products from './Products';

describe('render products', () => {
  const products = [
    {
      "supplier": "New Co Ltd",
      "product": "Small wongle",
      "price": 5
    }
  ];
  it('renders without crashing', () => {
    expect(shallow(<Products products={products} />).find('.page-header').length).toBe(1);
  });
  it('has a table of products', () => {
    expect(shallow(<Products products={products} />).find('.table').length).toBe(1);
  });
  it('has 2 selectors', () => {
    expect(shallow(<Products products={products} />).find('select.form-control').length).toBe(2);
  });
});

