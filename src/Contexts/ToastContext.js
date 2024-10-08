import { createContext, useContext, useState } from "react";
import MySnackBar from "../Components/MySnackBar";

const ToastContext = createContext({});

export const ToastProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  function showHideToast(message) {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
    setToastMessage(message);
  }
  return (
    <ToastContext.Provider value={{ showHideToast }}>
      <MySnackBar open={open} message={toastMessage}></MySnackBar>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
