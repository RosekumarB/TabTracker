import React from 'react'
import { connect } from 'react-redux'

class SearchPanel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchKey: ""
        }
        this.handleSearchChange = this.handleSearchChange.bind(this)
    }

    handleSearchChange(e) {
        this.setState({
            searchKey: e.target.value
        })
        this.props.handleSearchChange(e.target.value)
        console.log(e.target.value)
    }

    render() {
        return (
            <div> 
                <label>
                    Search: 
                    <input 
                        type = { this.state.searchKey }
                        onChange = { this.handleSearchChange }
                    />
                </label>
            </div>
        )
    }
}

export default SearchPanel