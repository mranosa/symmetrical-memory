import Greeter from './Greeter';
import React   from 'react';

import { shallow } from 'enzyme';

describe("Greeter component - the static output approach", () => {
  
  const component = shallow(<Greeter initialName="my first test" />);

  it("renders a paragraph which greets someone", function() {
    let renderedParagraphs = component.find('p');

    console.log(component.children());
    expect(component.children().length).toEqual(1);
    expect(renderedParagraphs.length).toEqual(1);
    expect(renderedParagraphs.at(0).text()).toEqual("Hello, my first test!");
  });

  it("wraps a paragraph with a <div> with a proper class name", function() {
    expect(component.name()).toEqual('div');
    expect(component.hasClass('greeter')).toBe(true);
  });
});