import React from 'react';

const Navlinks = () => {
    const links=[
        {name:"Fashion"},
        {name:"Fashion"},
        {name:"Fashion"},
        {name:"Fashion"}
    ]
    return (<>
    {
links.map((link,index)=>(
    <div key={index}>
        <div>{link.name}</div>
    </div>
))

    }</>);
}
export default Navlinks;