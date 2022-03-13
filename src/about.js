import React from "react";

class About extends React.Component{

    constructor(){
        super();
        this.state={
            name:'Ankit',
            age:26
        }
    }

    componentDidMount(){
        console.warn("Did mount");
    }
    render(){
        return(<div>
            <h1>About Us PAge</h1>
            <h2>{this.state.name}</h2>
            <h2>{this.state.age}</h2>

            <button onClick={()=>{this.setState({name:'Ankit Dewangan'})}}> Update State</button>
        </div>)
    }
}

export default About;