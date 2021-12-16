import styled, { css }  from 'styled-components'

export const FolderCreater = styled.div`
  width: 100%;
  height: 100vh;
  background-color: wheat;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1350px){
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const CreateBlock = styled.div`
  width: 90%;
  height: 800px;
  background-color: darkblue;
  border-radius: 10px;
`;

export const FolderNav = styled.div`
  display: flex;
  margin: 10px auto;
  width: 95%;
`;

export const FoldersBlock = styled.div`
  width: 65px;
  height: 80px;
  text-align: center;
  color: white;
  font-weight: bold;
  margin: 5px;
  border-radius: 5px;
`;

export const SetingSection = styled.div`
  width: 980px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 50px;
`;

export const NavSetings = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px 10px 0px 0px;
`;

export const Inpute = styled.input`
  width: 300px;
  height: 50px;
  font-size: 20px;
  border: 3px solid black;
  border-radius: 6px;
  padding: 0 8px;
`;

export const AddButton = styled.button`
  width: 130px;
  height: 55px;
  font-family: cursive;
  font-size: 20px;
  padding: 10px;
  background-color: green;
  color: white;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const RemovButton = styled.button`
  width: 120px;
  height: 55px;
  font-size: 20px;
  padding: 10px;
  background-color: brown;
  font-family: cursive;
  color: white;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const BackButton = styled.button`
  width: 120px;
  height: 55px;
  font-size: 20px;
  padding: 10px;
  background-color: blue;
  font-family: cursive;
  color: white;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;


export const FolderItem = styled.span`
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;
  color: black;
`;

export const FileImg = styled.img`
  width: 40px;
  height: 35px;
  margin: 10px;
  cursor: pointer;
  ${props => props.active && css`
    opacity: 0.6;
  `}
`;

export const FolderImg = styled.img`
  width: 40px;
  height: 35px;
  margin: 10px;
  cursor: pointer;
  ${props => props.active && css`
    opacity: 0.5;
  `}
`;

// -----------------------------------------
 
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

export const Empty = styled.h1`
  font-size: 94px;
  text-align: center;
  margin: 50px auto;
  font-family: 'Franklin Gothic Medium','Arial Narrow',Arial,sans-serif;
  font-weight: bold;
  color: #ffffffa1;
  letter-spacing: 20px;
`;