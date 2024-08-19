import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const UsersContext = createContext();

export default function UsersProvider({ children }) {
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
}

UsersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};