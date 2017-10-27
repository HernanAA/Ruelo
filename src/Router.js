import React from 'react';
import {
    Scene,
    Router,
    Stack,
} from 'react-native-router-flux';
import ProductsList from './components/ProductsList';
import Product from './components/Product';

const RouterComponent = () => {
    return (
        <Router >
            <Stack key="root" hideNavBar>
                <Stack
                    back={false}
                    key="main"
                    duration={0}
                    hideNavBar
                    initial>

                    <Scene
                        key="productsList"
                        component={ProductsList}
                        initial
                        hideNavBar
                    />

                    <Scene
                        key="product"
                        component={Product}
                        hideNavBar
                    />
                </Stack>
            </Stack>
        </Router>
    );
};

export default RouterComponent;
