import React, { Component } from 'react';
import axios from '../../axios';
// import { Link } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
import Post from '../../components/Post/Post';
import { Route } from 'react-router-dom';
import './Posts.css';

class Posts extends Component{

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount () {
        console.log(this.props);
        axios.get( '/posts' )
            .then( response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts: updatedPosts});
                // console.log( response );
            } )
            .catch(error => {
                // console.log(error);
                this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
        this.props.history.push(this.props.match.url +'/'+ id);
        // this.props.history.push({ path: '/'+ id});
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    // <Link to={'/'+ post.id} key={post.id}>
                        <Post
                            // id={post.id}
                            key={post.id} 
                            title={post.title} 
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)} />
                    // </Link>
                    );
            });
        }

        return (            
            <section className="Posts">
                {posts}
                <div>
                    {/** route inside a nested component must use the relative path for easy navigation 
                     *   also it must use exact to ensure full match of path string
                    */}
                    <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
                </div>
            </section>
        );
    }
}

export default Posts;