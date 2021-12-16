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