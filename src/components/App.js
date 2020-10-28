import React, {Fragment} from 'react'
import Editor from './Editor'
import FilesList from './FilesList'

const App = () => {
  return (
    <Fragment>
      <FilesList />
      <Editor />
    </Fragment>
  );
}

export default App;
