/**
 * @author v1ndic4te
 * @copyright 2018
 * @licence MIT
 */

import React from 'react';
import PropTypes from 'prop-types';
import {ContextMenuWrapper, prepareContextMenuHandlers} from 'react-context-menu-wrapper';

export default class Gallery extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        directory: PropTypes.string.isRequired,
        imageCount: PropTypes.number.isRequired,
        taganautInstance: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);

        const name = this.props.name;
        this.menuId = `${name}-menu`;

        const imageCount = this.props.imageCount;
        this.handlers = new Array(imageCount);
        for (let i = 0; i < imageCount; i++) {
            this.handlers[i] = prepareContextMenuHandlers({id: this.menuId, data: i});
        }
    }

    handleAddTag = event => {
        event.preventDefault();
    };

    handleRemoveAllTags = event => {
        event.preventDefault();
    };

    renderImages() {
        const name = this.props.name;
        const dir = this.props.directory;
        const imageCount = this.props.imageCount;
        const images = new Array(imageCount);

        for (let i = 0; i < imageCount; i++) {
            const num = i + 1;
            const handlers = this.handlers[i];
            images[i] = <div key={`${name}-${i}`} className="image" {...handlers}>
                <img alt={`${name} #${num}`} src={`${dir}${num}.jpg`}/>
                <div className="description">
                    <h4 className="title is-4">Image #{num}</h4>
                </div>
            </div>;
        }

        return images;
    }

    render() {
        return <div className="notification gallery">
            <h1 className="title is-2">{this.props.name} gallery</h1>
            <div className="columns">
                <div className="column is-narrow tags">Tags:</div>
                <div className="column images">
                    {this.renderImages()}
                </div>
            </div>
            <ContextMenuWrapper id={this.menuId}>
                <div className="dropdown is-active">
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            <a className="dropdown-item" onClick={this.handleAddTag}>Add tag</a>
                            <a className="dropdown-item" onClick={this.handleRemoveAllTags}>Remove all tags</a>
                        </div>
                    </div>
                </div>
            </ContextMenuWrapper>
        </div>;
    }

}

