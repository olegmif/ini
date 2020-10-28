export const SAVE = 'SAVE';
export const EDIT = 'EDIT';
export const REFRESH = 'REFRESH';
export const CHANGE_NAME = 'CHANGE_NAME';
export const FILE_OPEN = 'FILE_OPEN';

export function saveAction() {
  return {
    type: SAVE,
  };
}

export function editAction(text) {
  return {
    type: EDIT,
    payload: text,
  };
}

export function changeNameAction(name) {
  return {
    type: CHANGE_NAME,
    payload: name,
  };
}

export function fileListRefresh() {
  return {
    type: REFRESH,
  };
}

export function fileOpen(fileName) {
  return {
    type: FILE_OPEN,
    payload: fileName,
  };
}
