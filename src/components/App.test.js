import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('app rendering', () => {
  it('renders without crashing', () => {
    expect(shallow(<App />).find('.App').length).toBe(1);
  });
});
