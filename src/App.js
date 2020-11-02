import React, { Component } from 'react';
import './App.css';
import Student from './Student/Student';

class App extends Component {

  state = {
    students: [
      { id: '1', name: 'Ayushi', course: 'MCA', cgpa: 9.5},
      { id: '2', name: 'Divy', course: 'MCA', cgpa: 8.0 },
      { id: '3', name: 'Pooja', course: 'MCA', cgpa: 9.1},
      { id: '4', name: 'Shashank', course: 'MCA', cgpa: 8.3},
      { id: '5', name: 'Shivam', course: 'MCA', cgpa: 8.1},
      { id: '6', name: 'Sunidhi', course: 'MCA', cgpa: 7.8}
    ],
    visibility : false
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
    this.setState({
        students: New_Students
    })
  } 

  // visibility handler which toggles the visibility of state attribute visibility
  visibility_handler = () => {
    this.state.visibility === true ?
    this.setState({ visibility: false }):
    this.setState({ visibility: true })
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

  render() {

    const Style1 = {
      backgroundColor: 'white',
      font: 'inherit',
      border : '1x solid blue',
      padding: '8px',
      cursor: 'pointer',
      margin: '50px 10px 10px 10px'
    }

    // let Div1;
    let Div2 ;
    
    // conditionally define the JSX sections, true condition

    if(this.state.visibility){
      
      // iterate a list & create components over array
      Div2 = (
        <div>{
          this.state.students.map( (std, idx) => {
          return  <Student 
          key={std.id} name={std.name} cgpa={std.cgpa} 
          click={() => this.deleteStudent_handler(idx)}
          twowaybind={(event) => this.twoWay_Binding(event, std.id)}>
          </Student>
      })
      }</div>
      )
    }

    // conditionally define JSX, false condition
    else{
      // Div1 = null;
      Div2 = null;
    }


    return (
      <div className='App'>

        {/* providing show/hide button which toggles the visibility attribute of component state */}

        <button style={Style1} onClick={this.visibility_handler}>
          {this.state.visibility ? 
          <i>Hide</i>:
          <i>Show</i>}
        </button>
        <br></br>
        
        {/* define conditioned section above & show them in a clean way */}
        
        {/* { Div1 } */}
        { Div2 }
      </div>  
    );
  }
}

export default App;
