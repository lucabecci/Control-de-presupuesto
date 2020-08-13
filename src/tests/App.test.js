import React from 'react'
import App from '../App'
import { shallow } from 'enzyme'
import '@testing-library/jest-dom' //importacion para tener snippets de jest


describe('Test en <App />', () => {
    let wrapper = shallow( <App/> )
    test('snapshot con enzyme', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
