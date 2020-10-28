import React from 'react';
import { connect } from 'react-redux';
import {
  EDIT,
  editAction,
  saveAction,
  changeNameAction,
  fileListRefresh,
} from '../redux/actions';

const TextEditor = ({ name, sections, edit, save, setName, fileListRefresh }) => {
  // const validate = (char) => {
  //   console.log('validate');
  // };  

  const textAreaHandler = (e) => {
    edit(e.target.value);
  };

  const saveHandler = () => {
    save();
    fileListRefresh();
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <form>
      <label for="filename">File name:</label>
      <input
        type="text"
        id="filename"
        name="filename"
        value={name}
        onChange={nameChangeHandler}
      />
      <textarea
        id="textedarea"
        name="textedarea"
        rows="4"
        cols="50"
        onChange={textAreaHandler}
        value={sections}
      />
      <button type="button" onClick={saveHandler}>
        Save
      </button>
    </form>
  );
};

const mapStateToProps = ({ fileData }) => {
  return { name: fileData.name, sections: fileData.sections };
};

const mapDispatchToProps = (dispatch) => {
  return {
    edit: (text) => dispatch(editAction(text)),
    save: () => dispatch(saveAction()),
    setName: (name) => dispatch(changeNameAction(name)),
    fileListRefresh: () => dispatch(fileListRefresh()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);
