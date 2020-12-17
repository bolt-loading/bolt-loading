import React from 'react';
import BoltLoading, { Loadings } from '../lib';

const App = () => (
    <div>
        <BoltLoading isShow={true} loadingAnimation={Loadings.KitchenLoading} />
    </div>
);

export default App;
