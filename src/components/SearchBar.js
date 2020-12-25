import React from "react";



class SearchBar extends React.Component{

    // onInputChange(event){

    //     console.log(event.target.value)
    // }
    state = {term:''};
    onFormSubmit = (event)=>{

        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        return(
          <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                     <input type="text" value={this.state.term}
                      onChange ={(event)=>{this.setState({term:event.target.value})}} placeholder="Search..."/>

                </div>
                    
            </form>

          </div>

           
        ) 
    }

    
}

export default SearchBar;

