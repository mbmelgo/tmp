import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employeeDetail';

const PER_PAGE = 21;

class EmployeeList extends Component{

  componentWillMount(){
    this.page = 1;
  }

  handleButtonClick(){
    Meteor.subscribe('employees', PER_PAGE * this.page);
    this.page += 1;
  }

  render(){
    return (
      <div>
        <br />
        <div className='employee-list'>
          {this.props.employees.map(employee =>
            <EmployeeDetail key={employee._id} employee={employee}/>
          )}
        </div>
        <div className='btn-holder'>
          <button
            onClick={this.handleButtonClick.bind(this)}
            className='btn btn-primary'>
              Load More...
          </button>
        </div>
        <br />
      </div>
    );
  }
};

export default createContainer ( () => {
  Meteor.subscribe('employees', PER_PAGE);

  return { employees: Employees.find({}).fetch()};

},EmployeeList);
