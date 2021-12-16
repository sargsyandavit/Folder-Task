import { useState } from "react";
import { AddButton,
  BackButton,
  CreateBlock,
  Empty,
  FileImg,
  FolderCreater,
  FolderImg,
  FolderItem,
  FolderNav,
  FoldersBlock,
  Inpute,
  NavSetings,
  RemovButton,
  SetingSection 
} from "./IndexStyle";
import Fileimg from '../../Asets/file.png';
import Folderimg from '../../Asets/folder.png';

const root = [{
  type: 'folder',
  name: 'root',
  content: [],
}];

type contentType = {
  type: string,
  name: string,
  content: [],
}

type structureType = {
  type: string,
  name: string,
  content: contentType[] | null,
}

const Index = () => {
  const [curentDirectory, setCurrentDirectory] = useState<structureType[]>([...root]);

  const [path, setPath] = useState<string>('root/');

  const [newFolderName, setNewFolderName] = useState<string>('');

  const [activeType, setActiveType] = useState<string>('folder'); // one of folder or file.

  const [selectedFolderOrFile, setSelectedFolderOrFile] = useState<string>('');

  const handleAddFolder = () => {
    const directores: structureType[] = [...curentDirectory]
    const pathArray = path.split('/').filter(i => i);
    let content: structureType[] = directores;

    pathArray.forEach(key => {
      content = content.find((i: structureType) => i.name === key)?.content || content;
    });

    const haveItName = content.some((item: structureType) => item.name === newFolderName);
    if (haveItName) return;
    
    content.push({
      type:  activeType === 'file' ? 'file' : 'folder',
      name: newFolderName,
      content: activeType === 'file' ? null : [],
    })
    setCurrentDirectory([...directores]);
    setNewFolderName('');
  };

  const handleDelete = () => {
    const name: string = selectedFolderOrFile.split('&')[1]
    const directores: structureType[] = [...curentDirectory]
    const pathArray = path.split('/').filter(i => i);
    let content: structureType[] | any = null;

    pathArray.forEach((key, index) => {
      if (index === pathArray.length - 1) {
        content = ((content && content.length ? content : directores).find((i: structureType) => i.name === key)) || content
      } else {
        if(content?.[index]?.name === key)  content = content[index].content;
        if(directores?.[index]?.name === key)  content = directores[index].content;
      }
    });

     content.content.forEach((item: structureType, index: number) => {
      if (item.name === name) delete content.content[index];
     });
     setSelectedFolderOrFile('');
  }

  const handleSelect = (selectPath: string, e: any) => {
    if (e.detail === 2) setSelectedFolderOrFile('selectPath');
    else setSelectedFolderOrFile(selectPath);
  };

  const renderCurrentDirectory = () => {
    const directores: any = [...curentDirectory];
    const pathArray = path.split('/').filter(i => i);
    let content: any = directores;

    pathArray.forEach(key => {
      content = content.find((i: structureType) => i.name === key)?.content || content;
    })

    return (
      <FolderNav>
        {content?.length ? content.map((item: structureType) => 
        <FoldersBlock>
          { item?.type === 'folder' ? <FolderImg 
          active={`${path}&${item.name}` === selectedFolderOrFile} 
          onClick={(e: any) => handleSelect(`${path}&${item.name}`, e)} 
          onDoubleClick={() => {
            if(item?.type === 'folder') setPath(prev => path.includes(prev + item.name + '/') ? prev : prev + item.name + '/');
            setSelectedFolderOrFile('');
           }}
          src={Folderimg} 
        /> : <FolderImg 
        active={`${path}&${item.name}` === selectedFolderOrFile} 
        onClick={(e: any) => handleSelect(`${path}&${item.name}`, e)} 
        onDoubleClick={() =>  setPath(prev => path.includes(prev + item.name + '/') ? prev : prev + item.name + '/')} 
         src={Fileimg} 
        />}
         <div> {item.name}</div>
        </FoldersBlock>
      ): <Empty>Empty</Empty>}
      </FolderNav>
    );
  };

  const handleBack = () => {
    if(path.split('/').filter(i => i).length > 2) setPath(prev => prev.split('/').slice(0, -1).filter(i =>i).join('/'))
    else if (path.split('/').filter(i => i).length === 2) setPath(prev => prev.split('/')[0] + '/') 
  };
  
  return (
    <FolderCreater>
      <CreateBlock>
        <NavSetings>
          <SetingSection> 
           <FolderItem>Folder</FolderItem>
           <FolderImg onClick={() => setActiveType('folder')} active={activeType === 'folder'} src={Folderimg}/>
           <FolderItem >File</FolderItem>
           <FileImg onClick={() => setActiveType('file')} active={activeType === 'file'} src={Fileimg}/>
           <Inpute value={newFolderName} onChange={({target: {value}}: any) => setNewFolderName(value)} />
           <AddButton disabled={!newFolderName} onClick={handleAddFolder}>New-{activeType === 'folder' ? 'folder' : 'file'}</AddButton>
           <RemovButton disabled={!selectedFolderOrFile} onClick={handleDelete}>Remove</RemovButton>
           <BackButton disabled={path.split('/').length === 2} onClick={handleBack}>Back</BackButton>
          </SetingSection>
        </NavSetings>
           {renderCurrentDirectory()}
     </CreateBlock>
    </FolderCreater>
  )
}

export default Index;