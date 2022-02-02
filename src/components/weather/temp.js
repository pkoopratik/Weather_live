import React from 'react'
import "./style.css"
import Weathercard from './Weathercard';

const Temp = () => {
  //  const temp=99;
    const [searchValue,setSearchValue]=React.useState("jabalpur");
    const [tempInfo,setTempInfo]=React.useState({});
    const getWeatherInfo=async()=>{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=d0fe59b10061a76d44cdbdf8d2187583`;
            let res=await fetch(url);
            let data=await res.json();
            console.log(data);
            const temp=data.main.temp;
            const {main:weathermood}=data.weather[0];
            const {name}=data;
            const{country}=data.sys;
            console.log(temp);
            const myNewWeatherInfo={

                temp,
                weathermood,
                name,
                country
            };
           setTempInfo(myNewWeatherInfo);


        }catch(error)
        {
            console.log(error);
        }


    };

    React.useEffect(() => {
        document.title = "Weather live"

        getWeatherInfo();
        
        
    }, [])
    return (
        <>
     
        <div className='wrap'>
          
            <div className='search'>

                
                <input
                type="search"
                placeholder='search>>>'
                autoFocus
                id='search'
                className='searchTerm' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}></input>
                
                <button type='button' className='searchButton' onClick={getWeatherInfo}>
                    search
                </button>
                
                
                
            </div>

        </div>
        <Weathercard tempInfo={tempInfo}/>
        
            
        </>
    )
}

export default Temp
