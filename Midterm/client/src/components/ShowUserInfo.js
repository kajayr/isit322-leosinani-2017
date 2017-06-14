import React, {Component} from 'react';
import '../css/forms.css';
import 'whatwg-fetch';
import Debug from '../elf-logger';
import ElfElements from './ElfElements';
const logger = new Debug(false);

class ShowUserInfo extends Component {
    constructor(props) {
        super(props);
        //this.shouldUpdate = true;
        logger.log('ShowUserInfo constructor called.');
        logger.log('ShowUserInfo props.' + JSON.stringify(this.props.gitData, null, 4));
        this.getForm = this.getForm.bind(this);
        this.getValue = this.getValue.bind(this);
    }

    getForm(field, index) {
        return (
            <div className='ElfFormRow' key={field.id}>
                <label className='ElfFormLabel' htmlFor={field.id}>{field.label}:</label>
                <ElfElements {...field}
                    //value={this.props.gitData[field.id]}
                             value={this.getValue(this.props.gitData[field.id])}
                             onChange={this.props.onChange}
                />
            </div>
        );
    };

    getValue(gitData) {
        if (gitData === null || gitData === undefined) {
            gitData = 'none given';
            return gitData;
        } else if (typeof(gitData) === 'boolean') {
            gitData = gitData.toString();
            return gitData;
        } else {
            return gitData;
        }
    };

    render() {

        return (
            <form className='Form'>{
                this.props.fields.map((field, index) => {
                    return this.getForm(field, index);
                })
            }
                <button className='getUser' id='getUser' onClick={this.props.onChange}>Get User</button>
            </form>
        );
    }
}
export default ShowUserInfo;
