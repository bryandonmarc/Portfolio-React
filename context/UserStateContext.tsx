import { createContext, PropsWithChildren, useContext, useState } from "react";

export interface UserStateContextInterface {
  path: string;
  setPath: (path: string) => void;
}

export const UserStateContext = createContext<UserStateContextInterface>(
  undefined!
);

export const UserStateProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [path, setPath] = useState<string>("/");

  return (
    <UserStateContext.Provider value={{ path, setPath }}>
      {children}
    </UserStateContext.Provider>
  );
};

export const useUserState = () => useContext(UserStateContext);
