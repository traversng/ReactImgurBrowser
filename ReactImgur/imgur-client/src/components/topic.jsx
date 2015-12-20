var React = require('react'),
    Actions = require('../actions'),
    ImageStore = require('../stores/image-store'),
    Reflux = require('reflux'),
    ImagePreview = require('./image-preview');

module.exports = React.createClass({
    mixins: [
        Reflux.listenTo(ImageStore, 'onChange')
    ],
    getInitialState: function() {
        return {
            images: []
        }
    },
    componentWillMount: function() {
        console.log('topic is about to render and fetch data');
        Actions.getImages(this.props.params.id);
    },
    componentWillReceiveProps: function(nextProps) {
        Actions.getImages(nextProps.params.id);
    },
	render: function() {
		return <div className="topic">
            {this.renderImages()}
        </div>
	},
    renderImages: function() {
        return this.state.images.slice(0, 20).map(function(image){
             return <ImagePreview key={image.key} {...image} />
        });
    },
    onChange: function(event, images) {
        this.setState({images: images});
    }
});
