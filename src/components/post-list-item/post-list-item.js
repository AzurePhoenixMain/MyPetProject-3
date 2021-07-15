import React, {Component} from 'react'
import './post-list-item.css'

export default class PostListItem extends Component {
    // constructor (props) {
    //     super(props);
    //     this.state = {
    //         important: false,
    //         like: false
    //     };
    //     this.onImportant = this.onImportant.bind(this)
    //     this.onLike = this.onLike.bind(this)
    // }

    // onImportant() {
    //     this.setState(({important}) => ({
    //         important: !important
    //     }))
    // }
    
    // onLike() {
    //     this.setState(({like}) => ({
    //         like: !like
    //     }))
    // }
    
    render() {
    const {lable, onDelete, onToggleImportant, 
           onToggleLike, important, like} = this.props;
    // const {important, like} = this.state;

    let classNames = 'app-list-item d-flex justify-content-between';
    if (like) {
        classNames +=' like'
    }

    if (important) {
        classNames +=' important'
    }
    return (
        <div className={classNames} >
            <span 
            className='app-list-item-lable'
            // onClick={this.onLike}
            onClick={onToggleLike}>
                {lable}
            </span>
            <div className='d-flex justify-content-center align-item-center'>
                <button 
                type='button' 
                className='btn-star btn-sm btn-my-custom'
                // onClick={this.onImportant}
                onClick={onToggleImportant}>
                    <i className='fa fa-star'></i>
                </button>
                <button 
                type='button' 
                className='btn-trash btn-sm btn-my-custom'
                onClick={onDelete}>
                    <i className='fa fa-trash-o'></i>
                </button>
                <i className='fa fa-heart heart-hidden'></i>
            </div>
        </div>
    )

    }
}


