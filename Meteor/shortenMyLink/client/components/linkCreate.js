import React, {Component} from 'react';


class LinkCreate extends Component {
  constructor(props){
    super(props);

    this.state = {error: ''};
  }

  handleSumbit(e){
    e.preventDefault();

    Meteor.call('links.insert',this.refs.link.value, (error) => {
      if(error) {
        this.setState({error: 'Enter a valid URL'});
      } else {
        this.refs.link.value = '';
        this.setState({error: ''});
      }
    });

  }

  render(){
    return (
      <form onSubmit={this.handleSumbit.bind(this)}>
        <div className='form-group'>
          <label>Link to shorten</label>
          <input className='form-control' ref='link'/>
        </div>
        {!!this.state.error &&
          <div className="alert alert-danger alert-dismissible" role="alert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <strong>Error!</strong> Invalid URL.
          </div>
        }
        <button className='btn btn-danger'>Shorten!</button>
      </form>
    )
  }

}

export default LinkCreate;
