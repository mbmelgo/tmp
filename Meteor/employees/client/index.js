import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeList from './components/employeeList'
const App = () => {
  return (
    <div>
        <EmployeeList />  
    </div>
  );
};

Meteor.startup( () => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
