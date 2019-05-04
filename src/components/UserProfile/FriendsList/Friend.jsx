import React from 'react';
class Friend extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                {`${this.props.Name} ${this.props.GivenName}`}
            </div>
        )
    }


}
export default Friend
