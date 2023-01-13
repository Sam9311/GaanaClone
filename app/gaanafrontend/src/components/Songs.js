import React from 'react'

const Songs = ({items}) => {
    
    console.log(items);
  return (
<div>
   <table align='center'> {items.map((item)=>{
        return(
           <tr>
            {item.title}
            </tr>
        )
    })}
    </table>
    </div>
  )
}

export default Songs
