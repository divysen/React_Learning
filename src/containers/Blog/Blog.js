import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Blog.css';
import Posts from '../Posts/Posts';
// import NewPost from '../NewPost/NewPost';
import AsyncComponent from '../../hoc/asyncComponent';

/** lazy loading of NewPost Component using AsyncComponent HOC, 
 * in this HOC we pass an anonymous fn which return import as function, which takes path to the NewPost component*/
const AsyncNewPost = AsyncComponent(() => import('../NewPost/NewPost'));

class Blog extends Component {

    state = {
        isAuthenticated: false
    }

    render(){
        return(
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact to='/posts'>Home</NavLink></li>
                            <li><NavLink exact to='/new-post'>Add Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {/** mechanism to pretect unautherized routes ------------- 
                     * 1. first check whether user is authenticated or not using state, 
                     * 2. if yes, provide route, else provide unauthorized status or redirect to "/"*/}
                    { this.state.isAuthenticated ? 
                    
                    /** lazy loading of NewPost component */
                    <Route path='/new-post' exact component={AsyncNewPost} /> :
                    <Route path='/new-post' exact render={() => <h3>401 Not Authorized !</h3>} /> }
                    
                    <Route path='/posts' component={Posts} />
                    {/**here we can redirect a router to another using Redirect component,
                     * from jsx attribute will only work inside a Switch component,
                     * it will redirct 'from' url to 'to' url
                     */}
                    <Redirect from='/' exact to='/posts' />

                    {/**if we do not provide a path, this route will be applicable to all routes, 
                     * which are not listed above within switch statement.
                     */}
                    <Route render={() => <h3 >URL not found !</h3>} />
                </Switch>
            </div>
        );
    }

}
export default Blog;