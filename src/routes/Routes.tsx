import React, {useContext} from 'react';

import AuthRoutes from './AuthRoutes';
import DrawerUser from './AppRoutes';
import ContextData from '../contexts/ContextData';

const Routes = () => {

    const {signed} = useContext(ContextData);

    return signed ? <DrawerUser /> : <AuthRoutes />;
}

export default Routes;