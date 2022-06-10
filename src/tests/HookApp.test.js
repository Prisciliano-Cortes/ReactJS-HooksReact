import { shallow } from "enzyme";
import { HookApp } from '../HookApp';

describe('Pruebas en <HookApp />', ()=> {

    test('Debe mostrarse correctamente', () => {

        const wrapper = shallow( <HookApp /> )

        expect( wrapper ).toMatchSnapshot();
    })
})