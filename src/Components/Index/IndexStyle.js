import styled, { css }  from 'styled-components'

export const FolderCreater = styled.div`
  width: 100%;
  height: 100vh;
  background-color: wheat;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 1350px){
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const CreateBlock = styled.div`
  width: 500px;
  height: 500px;
  background-color: darkblue;
`;

export const NewFolders = styled.div`
  width: 800px;
  height: 500px;
  background-color: darkblue;
`;

export const InputsBlock = styled.div`
  width: 90%;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CreateButton = styled.button`
  width: 120px;
  font-size: 16px;
  padding: 10px;
  cursor: pointer;
`;

export const Input = styled.input`
  font-size: 16px;
  height: 40px;
  width: 300px;
  padding: 0 8px;
  outline: none;
`;

export const PathNmae = styled.p`
  width: 90%;
  margin: 0 auto;
  font-size: 22px;
  font-family: inherit;
  height: 50px;
  color: white;
  display: flex;
  align-items: center;
`;

export const PathElem = styled.span`
  cursor: pointer;
`;

export const FolderSeings = styled.div`
  position: absolute;
  top: ${(props) => props.top + 10}px;
  left: ${(props) => props.left}px;
  width: 600px;
  height: 120px;
  border-radius: 10px;
  background-color: #1400ff;
  display: none;
  ${(props) => props.isActive &&  css`
    display: block;
  `}
`;

export const NewFolderBlock = styled.div`
  width: 90%;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

`;

export const SetInput = styled.input`
  width: 300px;
  height: 50px;
  font-size: 18px;
  border-radius: 5px;
  padding: 0 6px;
  outline: none;
`;

export const AddButton = styled.button`
  width: 100px;
  height: 50px;
  color: white;
  font-size: 18px;
  font-weight: 600;
  background-color: darkblue;
  border-radius: 10px;
  cursor: pointer;
`;

export const ImgSection = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const FolderItem = styled.span`
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;
  color: white;
`;

export const FolderImg = styled.img`
  width: 40px;
  height: 35px;
  margin: 10px;
  cursor: pointer;

  ${props => props.active && css`
    opacity: 0.6;
  `}
`;