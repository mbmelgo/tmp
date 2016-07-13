import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins'
import BinsEditor from './binsEditor';
import BinsViewer from './binsViewer';
import BinShare from './binsShare';

class BinsMain extends Component {

  render() {

    return (
      <div>
        {!!this.props.bin &&
          <div>
            <BinsEditor bin={this.props.bin} />
            <BinsViewer bin={this.props.bin} />
            <BinShare bin={this.props.bin} />
          </div>
        }
      </div>
    )
  };
}

export default createContainer((props) => {
  const { binId } = props.params;
  Meteor.subscribe('bins');
  Meteor.subscribe('sharedBins');
  return { bin: Bins.findOne(binId)};
},BinsMain);
