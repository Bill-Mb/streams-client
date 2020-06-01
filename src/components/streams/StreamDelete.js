import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';


class StreamDelete extends React.PureComponent {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchStream(id);
    }

    renderActions = () => {
        const { id } = this.props.match.params;
        return (
            (
                <React.Fragment>
                    <button
                        onClick={() => this.props.deleteStream(id)}
                        className="ui button negative"
                    >
                        Delete
                    </button>
                    <Link to="/" className="ui button">
                        Cancel
                    </Link>
                </React.Fragment>
            )
        );
    }

    renderContent = () => {
        return `Are you sure you want to delete ${
            this.props.stream
            ? `the stream with title: ${this.props.stream.title}`
            : 'this stream'
        }`
    }

    render() {
        return (
            <Modal
                title='Delete Stream'
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    };
}


const mapStateToProps = (state, props) => {
    const { id } = props.match.params;
    return {
        stream: state.streams[id]
    }
}

export default connect(
    mapStateToProps,
    { fetchStream, deleteStream }
)(StreamDelete);
