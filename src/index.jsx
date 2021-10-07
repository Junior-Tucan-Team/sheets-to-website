import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import App from './App';
import { store, persistor } from './redux/configureStore';
import { setApiKey } from './utils/axios';


const onBeforeLift = () => {
  setApiKey(store.getState().auth.user?.appKey);
};

ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      loading={<></>}
      persistor={persistor}
      onBeforeLift={onBeforeLift}
    >
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
