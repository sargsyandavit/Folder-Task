import React, { useCallback, useState } from "react";
import { history } from "../../App";
import { CreateButton, CreateBlock, FolderCreater, Input, InputsBlock, NewFolders, PathNmae, PathElem, FolderSeings, NewFolderBlock, SetInput, AddButton, FolderItem, FolderImg, ImgSection } from "./IndexStyle";
import Fileimg from '../../Asets/file.png';
import Folderimg from '../../Asets/folder.png';

// const Index = () => {
// const [folders, setFolder]: any = useState({});
// const [currentDirectory, setCurrentDirectory]: any = useState({});
// const [newFolderValue, setNewFolderValue] = useState('');
// const [falg, setFlag] = useState<boolean>(false);
// const [screenX, setScreenX] = useState<number>(0);
// const [screenY, setScreenY] = useState<number>(0);
// const [activeType, setActiveType] = useState<string>('folder'); // one of folder or file.

// const handleChange = ({target: { value }}: any) => {
//   setNewFolderValue(value);
// }

// const handleAddFolder = () => {
//   const folder = window.location.pathname.split('/').filter(i => i);
//   let currentFolder: any = null;
//   const newFolders = {...folders};
//    if (folder.length) {
//     for (let i = 0; i < folder.length; i++) {
//         currentFolder = currentFolder ? currentFolder[folder[i]] : newFolders[folder[i]]
//      }
//     currentFolder[newFolderValue] = activeType === 'folder' ? {} : 'file';
//     setFolder({...newFolders})
//     if (window.location.pathname === '/') history.push(`/${newFolderValue}`);
//   } else {
//     setFolder({...newFolders, [newFolderValue]: activeType === 'folder' ? {} : 'file'});
//     if (window.location.pathname === '/') history.push(`/${newFolderValue}`);
//   }
// };

// const handleChoosClick = (ev: any, obj: any, path: string) => {
//   setScreenX(ev.clientY)
//   setScreenY(ev.clientX)
//   setFlag(!falg) 
//   console.log(path);
// };

//   const createTree = (renderObject: any) => {
//   const list = !!Object.keys(renderObject).length && (
//       <ul >
//         {Object.keys(renderObject).map((key) => {
//           let path = '';
//           const innerObject = renderObject?.[key] || {};
//           const isFolder = typeof innerObject !== 'string';
//           if (isFolder) path += key + '/';
//           return <li key={key}> 
//              { isFolder ? <FolderImg onClick={(ev:any) => handleChoosClick(ev, renderObject[key], path)} src={Folderimg} /> : <FolderImg src={Fileimg} />}{key} {isFolder && !!Object.keys(innerObject).length && createTree(innerObject)}
//           </li>
//         })}
//       </ul>
//     );
//     console.log(list)
//     return list && {...list};
//  };

//   return (
//      <FolderCreater>
//          <NewFolders>
//            <PathNmae>
//              {console.log(folders, 'folders')}
//              {/* {window.location.pathname.split('/').map((elem) =>
//              <PathElem onClick={handleChoosClick}>{elem}/</PathElem>
//            )} */}
//            {createTree(folders)}
//            </PathNmae>
//          </NewFolders>
//          <FolderSeings top={screenX} left={screenY} isActive={falg}>
//            <NewFolderBlock>
//              <SetInput/>
//              <AddButton>Add</AddButton>
//              <AddButton>Remove</AddButton>
//            </NewFolderBlock>
//            <ImgSection>
//             <FolderImg src={Folderimg}/>
//             <FolderItem>Folder</FolderItem>
//             <FolderImg src={Fileimg}/>
//             <FolderItem>File</FolderItem>
//            </ImgSection>
//          </FolderSeings>
//          <CreateBlock>
//             <ImgSection>
//               <FolderImg onClick={() => setActiveType('folder')} active={activeType === 'folder'} src={Folderimg}/>
//               <FolderImg onClick={() => setActiveType('file')} active={activeType === 'file'} src={Fileimg}/>
//             </ImgSection>
//             <InputsBlock>
//              <Input onChange={handleChange}/>
//              <CreateButton onClick={handleAddFolder}>New {activeType === 'folder' ? 'folder' : 'file'}</CreateButton>
//             </InputsBlock>
//          </CreateBlock>
//      </FolderCreater>
//     );
// };

// export default Index;

const root = [{
  type: 'folder',
  name: 'root',
  content: [],
}]
// FileStructure
const Index = () => {
  const [curentDirectory, setCurrentDirectory] = useState([...root]);
  const [path, setPath] = useState('root/');
  const [newFolderName, setNewFolderName] = useState('root/');

  const handleAddFolder = () => {
    const directores: any = [...curentDirectory]
    const pathArray = path.split('/').filter(i => i);
    let content: any = null;

    pathArray.forEach((key, index) => {
      console.log(content, path, 55555555555555555555)
      if (index === pathArray.length - 1) {
        // console.log(content, content.content.length, path, 55555555555555555555)
        content = ((content && content.content.length ? content.content : directores).find((i: any) => i.name === key)) || content
      } else {
        if(content?.[index]?.name === key)  content = content[index];
        if(directores?.[index]?.name === key)  content = directores[index]
      }
    });
    // console.log(content)
    const haveItName = content.content.some((item: any) => item.name === newFolderName);
    if (haveItName) return;
    content.content.push({
      type: 'folder',
      name: newFolderName,
      content: [],
    })
    setCurrentDirectory([...directores]);
  };

  const renderCurrentDirectory = () => {
    console.log(curentDirectory, 'curentDirectory')
    const directores: any = [...curentDirectory]
    const pathArray = path.split('/').filter(i => i);
    console.log(pathArray)
    let content: any = null

    pathArray.forEach((key, index) => {
      if (index === pathArray.length - 1) {
        console.log(path, 'ssssssssssssssss', content)
        content = ((content && content.length ? content : directores).find((i: any) => i.name === key)) || content
      } else {
        if(content?.[index]?.name === key)  content = content[index].content;
        if(directores?.[index]?.name === key)  content = directores[index].content
      }
    });
    console.log(content, 'ssssssssssssssss', directores)
     const isFolder = content?.type === 'folder';
    return (
      <div>
        {/* {console.log(content.content.length, 'content.content.length')} */}
        {(content?.length ? content : content.content).length ? (content?.length ? content : content.content).map((item: any) => 
        <div>
        {console.log(item, 'ddd')}
          { isFolder ? <FolderImg onClick={() => setPath(prev => path.includes(prev + item.name + '/') ? prev : prev + item.name + '/')} src={Folderimg} /> : <FolderImg src={Fileimg} />}
          {item.name}
        </div>
      ) : 'empty'}
      </div>
    );
  };

  const handleBack = () => {
    if(path.split('/').filter(i => i).length > 2) setPath(prev => prev.split('/').slice(0, -1).filter(i =>i).join('/'))
    else if (path.split('/').filter(i => i).length === 2) setPath(prev => prev.split('/')[0] + '/') 
  }
  
  return (
    <div>
      <button onClick={handleBack}>back</button>
      <input onChange={({target: {value}}) => setNewFolderName(value)} />
      <button onClick={handleAddFolder}>add</button>
      {renderCurrentDirectory()}
    </div>
  )
}

export default Index;