import { createContext, useCallback, useState } from "react";
import { useEscapeKey } from "../../hooks/useEscapeKey";

export const ToastContext = createContext({});

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, variant) => {
    setToasts((prev) => [
      ...prev,
      { id: crypto.randomUUID(), message, variant },
    ]);
  };

  const removeToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  const clearToasts = useCallback(() => setToasts([]), []);

  useEscapeKey(clearToasts);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};
