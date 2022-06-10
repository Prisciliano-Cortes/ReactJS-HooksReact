import { shallow } from "enzyme";
import { MultipleCustomHook } from '../../../components/03-examples/MultipleCustomHook'
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";
jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe('Pruebas en <MultipleCustomHook />', () => {

    beforeEach( () => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        })
    })

    test('Debe de mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHook /> )

        expect( wrapper ).toMatchSnapshot();
    })

    test('Should debe mostrar la informacion', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'Prisciliano',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHook /> )

        expect( wrapper.find('.alert').exists() ).toBe(false);

        expect( wrapper.find('.mb-0').text().trim() ).toBe('Hola Mundo');

        expect( wrapper.find('footer').text().trim() ).toBe('Prisciliano');

        console.log(wrapper.html());
    })
})