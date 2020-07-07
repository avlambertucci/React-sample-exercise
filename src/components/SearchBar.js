import React, { Component } from 'react';

class SearchBar extends Component {

  state = {
    title: ''
  }
  onChange = (e)=>{
    this.setState({[e.target.name]: e.target.value})
  }
  onSubmit = (e)=>{
    e.preventDefault();
    this.props.searchBar(this.state.title)
    this.setState({title: ''})
  }
  render() {
    console.log(this.state.title)
    
    return (
        <form onSubmit={this.onSubmit}>
            <div style={headerStyle}> 
                <input placeholder="Add Todo..." 
                type="text" name="title" 
                style={{flex: '10', padding: '5px'}}
                value={this.state.title}
                onChange={this.onChange} />
                <input className="btn" 
                type="submit" 
                value="Submit"
                style={{flex: '1'}} />
            </div>
        </form>
       
    );
  }
      
}

const headerStyle = {
   
  color: "white",
  textAlign: "center",
  padding: "10px"
  
}

export default SearchBar;

