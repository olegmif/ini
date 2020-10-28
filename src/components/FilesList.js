import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fileListRefresh, fileOpen } from '../redux/actions';

const FilesList = ({ files, refresh, open }) => {
  useEffect(() => {
    refresh();
  }, []);

  const fileOpenHandler = (e)=>{
    open(e.target.text);
  }

  return (
    <ul>
      {files === undefined ? '' : files.map((item, index) => (
        <li key={index}><a href='#' onClick={fileOpenHandler}>{item}</a></li>
      ))}
    </ul>
  );
};

const mapStateToProps = ({ fileList }) => {
  return { files: fileList };
};

const mapDispatchToProps = (dispatch) => {
  return {
    refresh: () => {
      dispatch(fileListRefresh());
    },
    open: (fileName)=>{
      dispatch(fileOpen(fileName))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilesList);
