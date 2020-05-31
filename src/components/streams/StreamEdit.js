import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';


class StreamEdit extends React.PureComponent {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchStream(id);
    }

    onSubmit = formValues => {
        const { id } = this.props.match.params;
        this.props.editStream(id, formValues);
    }

    render() {
        console.log(this.props);
        if (!this.props.stream) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm
                    initialValues={_.pick(
                        this.props.stream,
                        'title',
                        'description'
                    )}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}


const mapStateToProps = (state, props) => {
    const { id } = props.match.params;
    return {
        stream: state.streams[id],
    };
}

export default connect(
    mapStateToProps,
    { fetchStream, editStream }
)(StreamEdit);