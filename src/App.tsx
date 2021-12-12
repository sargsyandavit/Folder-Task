import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Routes   } from 'react-router-dom'
import Index from './Components/Index/Index';
import store from './Store/Store';

export const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Index/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
