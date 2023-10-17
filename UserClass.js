import React from "react";

class UserClass extends React.Component{
    constructor (props){
        super(props)

        console.log(props)

        this.state = {
            count: 0,
            count2: 1,
        }

        console.log(this.props.name + "Child Constructor")
    }

    // increment(){
    //     this.setState({count: this.state.count + 1})
    // }


    componentDidMount(){
        console.log(this.props.name + "Child Component did mount(it will work after rendering)")
    }

    render(){

        const {name, location} = this.props;
        const {count, count2} = this.state;

         console.log(this.props.name + "Child Render")

        return (
            <div className="user-Card">
                <h1>Name:{name}</h1>
                {/* <h2>{this.state.count}</h2> */}
                <h2>Count:{count}</h2>
                <h2>Count1:{count2}</h2>
                <button
                onClick={() => {
                    //this.increment()
                    this.setState({
                        count: this.state.count+1,
                        count2: this.state.count2+1,
                    });
                }}
                >
                    Count Increase
                </button>
                <h2>Contact: React Component</h2>
                <h3>Address:{location}</h3>
            </div>
        );
    };
};

export default UserClass;