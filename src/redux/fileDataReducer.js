import {SAVE, EDIT, CHANGE_NAME, FILE_OPEN} from './actions'

const initialState = {name: "noname", sections: [], isSaved: true};

function fileDataReducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }

  switch (action.type) {
    case SAVE: {            
      const newState = Object.assign({isSaved: true}, {name: state.name, sections: [state.text]}, )
      localStorage.setItem(newState.name, newState.sections);
      return newState;
      break;
    }
    case EDIT: {      
      return Object.assign({isSaved: false}, {name: state.name, text: action.payload});
      break;
    }
    case CHANGE_NAME: {
      return Object.assign({isSaved: false, name: action.payload}, {text: action.payload})
      break;
    }
    case FILE_OPEN: {
      const sections = localStorage.getItem(action.payload);
      return {name: action.payload, sections, isSaved: true};
    }
    default: return state;
  }
  
}

export default fileDataReducer;