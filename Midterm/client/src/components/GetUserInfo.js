import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import ShowUserInfo from './ShowUserInfo';

class GetUserInfo extends Component {

    render() {
        return (
            <div className='App'>
                <ShowUserInfo
                    fields={this.props.fields}
                    gitData={this.props.gitData}
                    onChange={this.props.onChange}
                />
            </div>
        );
    }
}

export default GetUserInfo;
