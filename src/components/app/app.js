import React, {Component} from 'react'

import AppHeader from '../app-header/'
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'

import './app.css'
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;   
`

const StyledAppBlock = styled(AppBlock)`
    background-color: transparent ;
`

export default class App extends Component {

constructor (props) {
    super(props);
    this.state = {
        data : [
            {lable: 'Going to lern React', important: true, id: 1, like: false},
            {lable: 'Going to lern JS', important: false, id: 2, like: true},
            {lable: 'Going to lern Node.Js', important: true, id: 3, like: false}
        ],
        term: '',
        filter: 'all'
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLike = this.onToggleLike.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);

    this.maxId = 4;
}

filterPost(data, filter) {
    if (filter === 'like') {
        return data.filter(data => data.like )
    } else {
        return data
    }

}

searchPost(data, term) {
    if (term.length === 0) {
        return data
    }

    return data.filter((data) => {
        // const lable = data.lable.toLowerCase() 

        

        return data.lable.toString().toLowerCase().indexOf(term.toString().toLowerCase()) > -1
    })

}

deleteItem(id) {
    this.setState(({data}) => {
        const index = data.findIndex(el => el.id === id);
        
        const before = data.slice(0, index);
        const after = data.slice(index + 1);

        const newArr = [...before, ...after];

        return {
            data: newArr
        }
    })
}

addItem(text) {
    const newItem = {
        lable: text,
        important: false,
        id: this.maxId++
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    })
}

onToggleImportant(id) {
    this.setState(({data}) => {
        const index = data.findIndex(item => item.id === id);
        const oldItem = data[index];
        const newItem = {...oldItem, important: !oldItem.important};

        const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
        return {
            data: newArr
        }
    })
}

onToggleLike(id) {
    this.setState(({data}) => {
        const index = data.findIndex(el => el.id === id);

        const old = data[index];
        const newItem = {...old, like: !old.like};

        const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        return {
            data: newArr
        }
    })
}

onUpdateSearch(term) {
    this.setState({term: term})
}

onFilterSelect(filter) {
    this.setState({filter: filter})    
}


render() {
const {data, term, filter} = this.state;

const liked = data.filter((item) => item.like === true).length;
const allPosts = this.state.data.length;

const visiblePosts = this.filterPost(this.searchPost(data, term), filter)

return (
    <StyledAppBlock>
        <AppHeader 
            liked={liked}
            allPosts={allPosts}/>
        <div className='search-panel d-flex'>
            <SearchPanel 
                onUpdateSearch={this.onUpdateSearch}
                />
            <PostStatusFilter 
            onFilterSelect={this.onFilterSelect}
            filter={filter}/>
        </div>
        <PostList 
            posts={visiblePosts}
            // posts={data}
            onDelete={ this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleLike={this.onToggleLike}/>
        <PostAddForm
            onAdd={this.addItem} />
    </StyledAppBlock>
)
}
}








