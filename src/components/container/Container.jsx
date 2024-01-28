import React from "react";


// Container accpets properties as childrens. Its a box where we define styling properties.
function Container({childeren}){
    return <div className="w-full max-w-7xl mx-auto px-4">{childeren}</div>
   
}
export default Container