import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from '../../hooks/useForm'

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Prisciliano',
        email: 'pris98.cortes@gmail.com'
    }

    test('Debe de regresar un formualrio por defecto', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const [ formValues, handleInputChange, reset ] = result.current

        expect( formValues ).toEqual(initialForm);
        expect( typeof handleInputChange ).toBe('function');
        expect( typeof reset ).toBe('function');
    })

    test('Debe cambiar el valor del formulario (cambar name)', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange ] = result.current

        act( () => {

            handleInputChange({
                target : {
                    name : 'name',
                    value: 'Lidia'
                }
            })
        })

        const [ formValues ] = result.current;
        expect( formValues ).toEqual({ ...initialForm, name:'Lidia'})
    })

    test('Debe de reestablacer el formualrio con RESET', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange, reset ] = result.current

        act( () => {

            handleInputChange({
                target : {
                    name : 'name',
                    value: 'Lidia'
                }
            });

            reset();
        })

        const [ formValues ] = result.current;
        expect( formValues ).toEqual(initialForm)
        
    })
})