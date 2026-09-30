import { use, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [allData,setAllData] = useState([])
  const [inputData, setInputData] = useState({
    Movie:"",
    Genre:"",
    fav:""
  })
  const [tempData,setTempData] = useState()


  const onhandlechange=(event)=>{
    console.log(event.target.value)
    setInputData((prev)=>({...prev,[event.target.name]:event.target.value}))

  }

  const onhandlesubmit=()=>{
    setAllData((prev)=>[...prev,{...inputData,fav:false}])
    console.log(allData);
    
  }

  const onchangefav=(ind)=>{
    let res=[...allData]
    res[ind].fav = !res[ind].fav
    setAllData(res)
    setTempData(res)
    
  }

    const onhandlefavorites =(res)=>{
        let temp = []

        if (res=="Favorite") {
          temp = tempData.filter((data)=>data.fav == true)}
          else if (res == "NonFavorite") {
            temp = tempData.filter((data)=>data.fav == false
          )
          }
          else (
            temp = tempData
          )

          setAllData(temp)
        
    }

  return (
    <div className='main'>
      <div className="input-field">
          <label htmlFor="">Movie name</label>
      <input type="text" name="Movie" id=""  onChange={onhandlechange}/>
       

      <label htmlFor="">Genre</label>
      <input type="text" name="Genre" id="" onChange={onhandlechange}/>

      </div>
     <div className="add-button">
        <button onClick={onhandlesubmit}>Add movie</button>
     </div>


      <div className="favoritesbutton">
        <button onClick={()=>onhandlefavorites("Favorite")}>Favorites</button>
        <button onClick={()=>onhandlefavorites("NonFavorite")}>Non-favorites</button>
        <button onClick={()=>onhandlefavorites("All")}>All</button>
      </div>
      <div className="content">
         {allData.map((data,index)=>(
        <div key={index}>
        <h3>{data.Movie}</h3><p>{data.Genre}</p>
        {data.fav==true ? <button onClick={()=>onchangefav(index)} >FAVORITE</button>:<button onClick={()=>onchangefav(index)}>NOT FAVORITE</button>}
        </div>
        

       ))}
      </div>
    </div>
  )
}

export default App 
