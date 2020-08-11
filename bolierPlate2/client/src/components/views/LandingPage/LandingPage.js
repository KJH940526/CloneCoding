import React, { useState, useEffect } from "react";
// import axios from "axios";
import { withRouter } from "react-router-dom";
import { API_URL, API_KEY } from "../../config";

function LandingPage() {

  //2. 가져온 데이터를 state에 넣는다
                        //처음 State는 배열이 되어야된다.
                        //왜냐면 넘어온 정보들을 array에 넣어주기 위해서
  const [Movies, setMovies] = useState([])

  
  //1.api를 통해서 데이터 가져오기 => useEffect + fetch
  useEffect(()=>{
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    //fetch와 axios의 차이점 fetch는 json으로 한번 더 묶어줘야한다.
    //그냥 axios쓰자

    fetch(endpoint)
    .then(response => response.json())
    .then(response => console.log('endpoint',response))
    //아래에서 response.results로 한 이유는 json으로 받아온 데이터의
    //배열의 이름이 results이기 떄문 그리고 그것을 setMoives로 Movies에 넣어줌

    fetch(endpoint)
    .then(response => response.json())
    .then(response =>{
      setMovies([response.results])
    })
  },[])

  console.log('MoVies',Movies)


  return (

    <div style={{width:'100%', margin:'0'}}>

    {/* Main Image */}

    <div style={{width:'85%', margin:'1rem auto'}}>

      <h2>Movies by latest</h2>
      <br/>

      {/* Movie Grid Cards */}

    </div>


    <div style={{display: 'flex', justifyContent: 'center'}}>
        <button> Load More</button>
    </div>

    </div>
  
  )
}

export default withRouter(LandingPage);