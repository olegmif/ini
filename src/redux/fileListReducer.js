import { REFRESH } from './actions';

const initialState = [];

const getKeys = () => {
  const files = [];
  for(let i=0; i<localStorage.length; i++) {
    files.push(localStorage.key(i));    
  }
  return files;
};

function fileListReducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case REFRESH: {      
      return [...getKeys()];
    }

    default:
      return state;
  }
}

export default fileListReducer;
