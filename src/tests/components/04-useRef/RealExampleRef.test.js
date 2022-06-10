import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef'

describe('Pruebas en <RealExampleRef />', () => {

    test('Debe mostrarse correctamente', () => {

        const wrapper = shallow( <RealExampleRef /> )

        expect( wrapper ).toMatchSnapshot();

        expect( wrapper.find('MultipleCustomHook').exists() ).toBe(false)
    });

    test('Debe mostrar el componente <MultipleCustomHook />', () => {

        const wrapper = shallow( <RealExampleRef /> )

        wrapper.find('button').simulate('click');

        expect( wrapper.find('MultipleCustomHook').exists() ).toBe(true)
    })
})