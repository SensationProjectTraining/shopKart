import React from 'react';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { UserProvider } from './Context/Context';

const App = () => {
  return (
    <div>
      <Navbar />
      <UserProvider>
        <div className='flex gap-2'> 
          <SignUp />
          <Login />
        </div>
      </UserProvider>
    </div>
  );
};

export default App;
