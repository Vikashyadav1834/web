import { useEffect } from "react";
import { useState } from "react";


const TableLogic = () => {

    
    const [tv, setTv] = useState("")
    const [count, setCount] = useState(0)
    const [cans, setCans] = useState()
    const [tt, setTt] = useState(2)
    const [showcans, setShowCans] = useState(false)
    const [showdone, setShowDone] = useState(false)
    const [shuffledList, setShuffledList] = useState([])
    

    function generateUniqueNumbers() {
        const numbers = Array.from({ length: 10 }, (_, i) => i + 1); // [1, 2, 3, ..., 10]
        const shuffled = numbers.sort(() => Math.random() - 0.5); // Shuffle the array randomly
        setShuffledList(shuffled)
      }
    useEffect(() => {

        if(showcans){
            setTimeout(() => {
                setShowCans(false)
            }, 2000);
        }
    }, [showcans])
    useEffect(() => {
        generateUniqueNumbers()
    }, [])
    
    
    const handleButtonClick = (number) => {
        console.log(number);
        setTv((tv)=> tv + number)
      };

    const handleSubmit = ()=>{

        if(tt*shuffledList[count] === parseInt(tv) ){

            setTv("")
            if(count == 9 ){
              setShowDone(true)
            }else{
              setCount((count)=>count+1);

            }
        }else{
            
            setCans(tt*shuffledList[count])
            setShowCans(true)
            setTv("")
        }

        

    }
    const handleClear = ()=>{
        setTv("")
    }





  return (
    <div className="flex items-center flex-col w-full h-screen"> 
    {/* <button className=" p-2 px-4 bg-emerald-400" onClick={handleTable}>Generate Table</button> */}
    <div className="w-[40%] p-2 rounded-lg border-yellow-500 border">
    <input type="text"  className="w-[80%] h-10" placeholder="Enter Table " value={tt} onChange={(e)=> setTt(e.target.value)}/>

    </div>
    <div className="w-[40%] h-[80%] bg-yellow-300 flex flex-col items-center">
        <h1 className=" text-3xl font-bold p-2 w-72 ">{tt} X {shuffledList[count]}</h1>
        <h1 className=" text-3xl font-bold  w-72 h-10">{tv}</h1>
        <div className="grid grid-cols-3 gap-2 w-72">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((num, index) => (
          <button
            key={index}
            className="p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            onClick={() => handleButtonClick(num)}
          >
            {num}
          </button>
        ))}
        <button className="p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 " onClick={handleClear}> clear</button>
        <button className="p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 " onClick={handleSubmit}> submit</button>
      </div>

      {showcans && <div className=" text-2xl text-green-500 "> Correct Answer is {cans}</div>}
      {showdone && <div className=" text-2xl text-green-500 "> Your Excercise is Done !!</div>}
    </div>
    </div>
  )
}

export default TableLogic