//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';

//testing
import * as APIUtil from './util/audiobooks_api_util';
import { deleteBook } from './actions/audiobooks_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  //TESTING
  window.store = store;
  window.deleteAudioBook = APIUtil.deleteAudioBook;
  window.deleteBook = deleteBook;
  //
  ReactDOM.render(<Root store={store} />, root);
});
