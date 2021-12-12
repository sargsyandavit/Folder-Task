import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { history } from "../../App";
import { getIndexStore } from "../../selectors";
import { CreateButton, CreateBlock, FolderCreater, Input, InputsBlock, NewFolders } from "./IndexStyle";
// import img1 from '../../Asets/folder.png';

const Index = () => {
  const navigate = useNavigate();
    const dispach = useDispatch();
    const state = useSelector(getIndexStore);

const [folders, setFolder]: any = useState({});
const [newFolderValue, setNewFolderValue] = useState('');

const handleChange = ({target: { value }}: any) => {
  setNewFolderValue(value);
}

const handleAddFolder = () => {
  const folder = window.location.pathname.split('/').filter(i => i);
  console.log(window.location.pathname, window)
  let currentFolder: any = null;
  const newFolders = {...folders};
  if (folder.length) {
    for (let i = 0; i < folder.length; i++) {
      console.log( newFolders)
        currentFolder = currentFolder ? currentFolder[folder[i]] : newFolders[folder[i]]
    }
    currentFolder[newFolderValue] = {};
    setFolder(newFolders);
    history.push(window.location.pathname !== '/' ?  `${window.location.pathname}/${newFolderValue}` : `/${newFolderValue}`);
  } else {
    setFolder({...newFolders, [newFolderValue]: {}});
    history.push(window.location.pathname !== '/' ?  `${window.location.pathname}/${newFolderValue}` : `/${newFolderValue}`);
  }
}
  return (
     <FolderCreater>
         {console.log(folders, 'statestatestatestate')}
         <NewFolders>newblok</NewFolders>
         <CreateBlock>
            <InputsBlock>
             <Input onChange={handleChange}/>
             <CreateButton onClick={handleAddFolder}>New Folder</CreateButton>
            </InputsBlock>
         </CreateBlock>
     </FolderCreater>
    );
};

export default Index;