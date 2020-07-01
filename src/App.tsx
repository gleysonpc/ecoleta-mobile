import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';

import Routes from './routes';

const App = () => {
  return (
    <Fragment>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </Fragment>
  );
};

export default App;
