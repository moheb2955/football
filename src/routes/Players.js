import { useState } from "react";
import Info from "../component/Info";
import Gallery from "../component/Gallery";
import Posts from "../component/Posts";

function App() {
const [selectTab,setselectTab] = useState(1)

return <div className="w-[100vw] ">
  <div className="absolute p-5 px-7 w-full ">
    <div className="flex justify-between items-center gap-6  ">
      <img src="/Group3.png" alt="" className="w-9 h-auto " />
      <input className="bg-[#D9D9D9] w-60 rounded px-4 py-1 text-sm " placeholder="search" />
      <img src='' alt="" className="w-10 h-10 bg-slate-300 rounded-full " />
    </div>
  </div>

  <div className="violet w-full h-[25vh] "></div>
  <div className="w-[150vw] h-[25vh] -ml-[25vw] -mt-[3.2vh] bg-black rounded-[50%]  "></div>
  <div className="flex justify-center ">
    <img className="w-[30vw] h-[30vw] bg-slate-100 -mt-[31vh] border-[5px] border-white rounded-[50%] " 
      src=" " 
      alt="profile img"  
      onError={e=>''}
    />
  </div>
  <div className="-mt-[20vh] flex flex-col text-center w-full ">
    <h2 className="mt-6 text-xl font-medium ">{'Mohammad Kazem'} </h2>
    <h6 className="m-1 mb-4 gray text-sm ">{'sipmle text'} </h6>
    <div className="m-1">
      <button className="rounded p-1 font-medium violet text-white w-24  ">follow </button>
    </div>
    <div className="flex justify-center mt-4 mx-6 border-b border-slate-300 ">
      <div className="grid grid-cols-3 gap-y-2 gap-x-5 w-[55vw] ">
        <h4 className="font-medium ">{'201'} </h4>
        <h4 className="font-medium ">{'100'} </h4>
        <h4 className="font-medium ">{'1024'} </h4>
        <h3 className="gray text-xs ">followers </h3>
        <h3 className="gray text-xs ">followeing </h3>
        <h3 className="gray text-xs ">posts </h3>
        
        <h3 className={selectTab === 1?'select_tab border-b-[3px] border-[#9195F0]':"select_tab "} onClick={()=>setselectTab(1)}>info </h3>
        <h3 className={selectTab === 2?'select_tab border-b-[3px] border-[#9195F0]':"select_tab "} onClick={()=>setselectTab(2)}>gallery </h3>
        <h3 className={selectTab === 3?'select_tab border-b-[3px] border-[#9195F0]':"select_tab "} onClick={()=>setselectTab(3)}>posts </h3>
      </div>
    </div>
  </div>
  <div className="mx-6 mt-6">
    {selectTab === 1? <Info /> :''}
    {selectTab === 2? <Gallery /> :''}
    {selectTab === 3? <Posts /> :''}
  </div>
</div>
}

export default App;
