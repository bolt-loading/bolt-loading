import React from 'react';
import BoltLoading, { Loadings } from '../lib';

const App = () => (
    <div>
        <BoltLoading hasContainer={false} isShow={true} loadingAnimation={Loadings.AtomLoading} />
    </div>
);

export default App;
