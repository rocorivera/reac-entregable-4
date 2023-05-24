import { useEffect, useState } from "react";
import "./App.css";
import getAllUsers from "./services/getAllUsers";
import Header from "./components/Header/Header";
import UsersForm from "./components/UsersForm/UsersForm";
import createUser from "./services/createUser";
import Modal from "./components/Modal/Modal";
import UserList from "./components/UserList/UserList";
import editUserData from "./services/editUserData";
import deleteUser from "./services/deleteUser";

function App() {
  const [users, setUsers] = useState([]);
  const [isUserFormVisible, setIsUserFormVisible] = useState(false);
  const [isEditingUserData, setIsEditingUserData] = useState(null);

  const loadUser = async () => {
    const usersData = await getAllUsers();
    setUsers(usersData);
  };
  const handleIsFormVisible = () => {
    setIsEditingUserData(null);
    const newState = !isUserFormVisible;
    return setIsUserFormVisible(newState);
  };

  const handleOnSend = async (data) => {
    if (data.id) await editUserData(data.id, data);
    else await createUser(data);

    loadUser();

    setIsUserFormVisible(!isUserFormVisible);
  };

  const handleOnEdit = (dataUser) => {
    setIsUserFormVisible(true);
    setIsEditingUserData(dataUser);
    // console.log(dataUser);
  };

  const handleOnDelete = async (id) => {
    await deleteUser(id);
    await loadUser();
  };

  // Una vez finalizado el proyecto, he detecado que la actualizacion automatica es intermitente, es decir. Se pasa la funcion handleOnSend a el componente UsersForm como la prop onSend, es este handleOnSend se encarga de ejecutar el load users cada vez, pero aun así se me cierra el formulario y nunca sucede la actualizacion del el nuevo usuario creado, en otras palabras no se pinta en lapantalla el nuevo usuario en la lista de usuarios, esto lo podemos comprobar quitando la variable reactiva users de el array de dependencias de este useEffect. pero eraporque le faltaba el await a la linea #29 else await createUser(data);
  useEffect(() => {
    loadUser();
  }, []);
  // }, []);

  return (
    <>
      <Header onOpenForm={handleIsFormVisible} />

      <Modal isVisible={isUserFormVisible}>
        <UsersForm
          onSend={handleOnSend}
          onClose={handleIsFormVisible}
          initialData={isEditingUserData}
        />
      </Modal>

      <UserList users={users} onEdit={handleOnEdit} onDelete={handleOnDelete} />
    </>
  );
}

export default App;
