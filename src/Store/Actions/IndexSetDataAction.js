export const ADD_FOLDER_DATA_IN_STORE = 'index/add-folder-data-store';

export default function addFolderInStore(data){
    return {
       type: ADD_FOLDER_DATA_IN_STORE,
       data,
    }
}