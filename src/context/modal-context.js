import { createContext,useContext,useState,} from "react";

const initialValue={
    modalBox:false
};

const ModalContext= createContext(initialValue);
const ModalProvider=({children})=>{
    //modals
    const [modalBox,setModalBox]= useState(false);
    const showModal=()=> setModalBox(true);
    const hideModal=()=>setModalBox(false);
    return(
        <ModalContext.Provider value={{modalBox,showModal,hideModal}}>
            {children}
        </ModalContext.Provider>
    )
}

const useModal = ()=>useContext(ModalContext);

export {useModal,ModalProvider}