import { createContext,useContext,useState, } from "react";

const initialValue={
    modal:false
}

const ModalContext= createContext(initialValue);
const ModalProvider=({Children})=>{
    //modals
    const[modal,setModal]= useState(false);
    const showModal=()=> setModal(true);
    const hideModal=()=>setModal(false);
    return(
        <ModalContext.Provider value={{modal,showModal,hideModal}}>
            {Children}
        </ModalContext.Provider>
    )
}

const useModal =()=>useContext(ModalContext);

export {useModal,ModalProvider}