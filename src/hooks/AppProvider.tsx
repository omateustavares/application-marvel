import { ModalProvider } from "./Modal";

export const AppProvider: React.FC = ({ children }) => {
  return <ModalProvider>{children}</ModalProvider>;
};
