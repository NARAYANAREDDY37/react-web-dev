import React from 'react';

//import logo from './logo.svg';
import './App.css';
/* import Posts from './components/Posts/Posts';
import Sidebar from './components/Sidebar/Sidebar';
import Navigation from './components/Navigation/Navigation';
import ParentRefTextInput from './components/RefsTextInput/ParentRefTextInput';
import ParentCallbackRefTextInput from './components/CallbackRefTextInput/ParentCallbackRefTextInput';
import ParentForwardingRef from './components/ForwardingRef/ParentForwardingRef';
import TableFragment from './components/TableFragment/TableFragment'; */
// import MouseWithCat from './components/MouseTracker/MouseWithCat';
// import Cat from './components/MouseTracker/Cat';
import UserPropTypes from './components/UserPropTypes/UserPropTypes';
function App() {
  /* let userData = {
    name: 'Narayana',
    greet: function () {
      return 'Hello ' + this.name;
    }
  }; */
  return (
    <div className='container mx-auto'>
      <UserPropTypes />
    </div>
    /* <div className='container mx-auto'>
      <div className='flex'>
        <div className='w-1/5'>
          <Sidebar>
            <Navigation>
              <div>
                <a href='www.google.com'>Home</a>
                <div>{userData.greet()}</div>
              </div>
            </Navigation>
          </Sidebar>
        </div>
        <div className='w-4/5'>
          <div>
            <ParentRefTextInput />
          </div>
          <div>
            <ParentCallbackRefTextInput />
          </div>
          <div>
            <ParentForwardingRef />
          </div>
          <div>
            <TableFragment />
          </div>
        </div>
      </div>
    </div> */
  );
}

export default App;
