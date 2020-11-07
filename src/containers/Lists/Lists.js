import React, {Component} from 'react';
import Student from '../../components/Student/Student';
import propTypes from 'prop-types';
import AuthContext from '../../context/authContext';

class lists extends Component{

    constructor(props){
        super(props);
        console.log(`[Lists.js] constructor()`);
            // it is necessary to provide a state, even if an empty one.
        this.state = {
            students: [
                { id: '1', name: 'Ayushi', course: 'MCA', cgpa: 9.5},
                { id: '2', name: 'Divy', course: 'MCA', cgpa: 8.0 },
                { id: '3', name: 'Pooja', course: 'MCA', cgpa: 9.1},
                { id: '4', name: 'Shashank', course: 'MCA', cgpa: 8.3},
                { id: '5', name: 'Shivam', course: 'MCA', cgpa: 8.1},
                { id: '6', name: 'Sunidhi', course: 'MCA', cgpa: 7.8}
            ],
        };
    }

    // authcontext consumer here
    static contextType = AuthContext;

    static getDerivedStateFromProps(props,state){
        console.log(`[Lists.js] getDerivedStateFromProps()`, props);
        return state;
    }

    // this lifecycle method shoud return true =>  to continue, false => to stop
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.isvisible !== this.props.isvisible || 
            this.context.con_authenticated){
            console.log(`[Lists.js] shouldComponentUpdate()`);
            return true;
        }
        else{
            // not only state member but also all the methods of this class can be used to check 
            // changes in current staet / props of this component
            if(nextState.students !== this.state.students){
                console.log(`[Lists.js] shouldComponentUpdate()`);
                return true;
            }
            else{
                return false;
            }
        }
    } 

    // always return some value which wil be passed & used in componentDidUpdate()
    getSnapshotBeforeUpdate(prevProps, nextProps){
        console.log(`[Lists.js] getSnapshotBeforeUpdate()`);
        return null;
    }

    componentDidUpdate(){
        console.log(`[Lists.js] componentDidUpdate()`);
    }

    componentDidMount(){
        console.log('[Lists.js] componentDidMount()');
      }

    // two way binding handler which update the state attribute my_name with the value provided in input element 
    twoWay_Binding = (event, stdid) => {
        const Up_Stud_Index = this.state.students.findIndex(p => {
        return p.id === stdid;
        });

        // never mutate original students of any elemet of students
        let Up_Stud_data = {...this.state.students[Up_Stud_Index]};
        Up_Stud_data.name = event.target.value;

        // again never directly copy or assign to original state , create a new copy using spread operator the update
        const New_Students = [...this.state.students];
        New_Students[Up_Stud_Index] = Up_Stud_data;
        this.setState((prevState, props) => {
            // always use prevState, props to ensure prev states been replaced by new one
            return {
                students: New_Students
            };
        })
    }

    deleteStudent_handler = index => {
        //console.log(`${index} is to be deleted`);
    
        /* as arrays & objects are reference variables, this approach of directly assigning & manipulating 
           state will lead to an unpredictable condition, so we wil use any of the following 2 methods
        */
        // let New_Student = this.state.students;
        
        let New_Student = [...this.state.students];
        // another way is as below
        // let New_Student = this.state.students.slice();
        
        New_Student.splice(index,1);
        this.setState({
          students: New_Student
        });
      }

    render(){
        console.log(`[Lists.js] render()`);
        // conditionally define the JSX sections, true condition
            if(this.props.isvisible){
            // iterate a list & create components over array
            return (
                    <React.Fragment>
                    <p>Login Status: { this.context.con_authenticated ? "True" :"False"}</p> 
                    {this.state.students.map( (std, idx) => {
                    return   <Student key={std.id} name={std.name} cgpa={std.cgpa} 
                                    click={() => this.deleteStudent_handler(idx)}
                                    twowaybind={(event) => this.twoWay_Binding(event, std.id)}
                                // vis={this.props.isvisible}
                                >
                                </Student>
                     })}
                     </React.Fragment> 
                     )
            }
            // conditionally define JSX, false condition
            else{
                return (null);
            }
        }
}

// after class definition provide info of types of props passed to (used in this component)
// NOTE: never use variable/package name starting from capital letter, react consider them 
// as a components. 
lists.propTypes = {
    isvisible : propTypes.bool
};

export default lists;