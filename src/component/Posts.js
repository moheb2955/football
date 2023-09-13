import React from 'react'

const Posts = () => {


return (
<div className='mt-'>
  <img className="bg-slate-300 w-full rounded h-40  " src="" alt="post" />
  
  <div className="flex justify-between">
    <div className="flex">
      <img src="" alt="like icon" className="" />
      <img src="" alt="comment icon" className="" />
      <img src="" alt="share icon" className="" />
    </div>
    <img src="" alt="bookmark icon" className="" />
  </div>

  <h1 className="text-xl my-1 ">{'I’m a simple title'} </h1>
  <p className="">{'I’m a simple text I’m a simple text I’m a simple text I’m a simple text I’m a simple text I’m a simple text I’m a simple text I’m a simple text '} </p>
  
  <button className='text-[#9195F0] my-1 '>view all comments </button>
  <h5 className="text-sm ">{'2023/6/10'} </h5>
</div>
)}
export default Posts
