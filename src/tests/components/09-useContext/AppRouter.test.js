import { mount } from "enzyme";
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('Pruebas en <AppRouter />', () => {

    const user = {
        name: 'Prisciliano',
        email: 'pris98.cortesgmail.com'
    }

    const wrapper = mount( 
        <UserContext.Provider value={{
            user
        }}>
            <AppRouter /> 
        </UserContext.Provider>
    );

    test('Debe mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
    })
})