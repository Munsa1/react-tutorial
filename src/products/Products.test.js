import React from 'react';
import  Renderer  from 'react-test-renderer';
import Products from './Products';

it('rendrers', () =>{
  const tree = Renderer.create(<Products />).toJSON();
  expect(tree).toMatchSnapshot();
})