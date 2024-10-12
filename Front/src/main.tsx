import { createRoot } from 'react-dom/client'
import './index.css'

import AppRouter from '@routes/AppRouter.tsx';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';
import { Provider } from 'react-redux';






createRoot(document.getElementById('root')!).render(

  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>
)
