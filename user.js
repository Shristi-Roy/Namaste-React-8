import { useState } from "react";

const User = ({name}) => {

    const [count] = useState(1); 
    const [count2] = useState(2);  
    
    return (            
    <div className="user-Card">
            <h1>Name: {name}</h1>
            <h2>Count: {count}</h2>
            <h2>Count2: {count2}</h2>
            <h2>Contact: Namaster React</h2>
            <h3>Address: Dheradun</h3>
        </div>
    );
};
 export default User;