import React from 'react';


function Logos({items}) {
  return (
    <div className='avatar-group -space-x-0'>
        {
            items.map((item)=> <div className="avatar border-2 border-slate-800">
            <div className="w-12 bg-green-100">
              <img src={item} className='p-2'/>
            </div>
          </div>)
        }
    </div>
  )
}

export default Logos