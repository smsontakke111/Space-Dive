import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, Input, InputGroup } from 'reactstrap';
import '../App.css';

const Home = () => {

    var key = 'ahc41MiOjb0SdL1IP9to6lbEHVbd4HqUfFbRutsP';
    var key2 = '976e987eefc6f7a8c1f6f97c5cc19094';
    var podURL = 'https://api.nasa.gov/planetary/apod?api_key=' + key ;
    var epicURL = 'https://api.nasa.gov/EPIC/api/natural/images?api_key=' + key ;

    var weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=pune&appid=' + key2;


    const [capture,setCapture] = useState(null);
    const [epic,setEpic] = useState(null);
    const [weather,setWeather] = useState(null);

    function getCapture(){
        axios.get(podURL)
        .then((res) => setCapture(res.data))
        .catch((err) => console.log(err));

    }
    function getEpic(){
        axios.get(epicURL)
        .then((res) => setEpic(res.data[0]))
        .catch((err) => console.log(err));

    }

    function getWeather(URL){
        axios.get(URL)
        .then((res) => setWeather(res.data))
        .catch((err) => console.log(err));

    }
    

    const submitHandler = (e) => {
        e.preventDefault();
        var newURL = 'https://api.openweathermap.org/data/2.5/weather?q=' +e.target.city.value + '&appid=' + key2;
        getWeather(newURL);

    }


    const giveURL = (url) => {
        if(url.includes('watch'))
        {
            var u = url.split('watch')[0];
            u = u + 'embed/';
            u = u + url.split('=')[1];
            return u;
        }
        return url;
    }


    useEffect(() => {
        getCapture();
        getEpic();
        getWeather(weatherURL);

        
    },[setCapture,setEpic,setWeather]);

    if(capture == null || epic == null || weather == null)
    {
        return <div><center>Something went wrong !</center></div>
    }
    else
    {
        
       
        return (
            <div>
                <div className='row' style={{height:'87vh',backgroundImage:`url("../images/space6.jpg")` ,backgroundSize:'cover' , backgroundPosition:'center' }}>
                    
                    <div className='col-12 ' style={{ backfaceVisibility:'visible'}} >

                    </div>
                    
                </div>
                <div className='row' >
                    <div className='col-1' style={{backgroundColor:'rgb(0, 10, 41)'  }}></div>
                    <div className='col-10' style={{backgroundColor:'rgb(0, 10, 41)'  }}>
                        <center>
                            <h1 style={{color:'white' }} className='pt-5 text-1' >CAPTURE OF THE DAY</h1>
                            <br/>
                            <embed src={giveURL(capture.url)}  style={{width:'800px', maxWidth:'100%' , height:'400px' , maxHeight:'100%' }} />
                            
                            <br/><br/>
                            <p style={{color:'white'}}>{capture.explanation}</p>
                            
                        </center>
                    </div>
                    <div className='col-1' style={{backgroundColor:'rgb(0, 10, 41)'  }}></div>
                </div>
                {/* backgroundImage:`url("../images/space5.jpg")` ,backgroundSize:'cover' , backgroundPosition:'center' */}
                <div className='row' style={{backgroundColor:'black' }}>
                    <div className='col-1' style={{backfaceVisibility:'visible'}}></div>
                    <div className='col-10 ' style={{backfaceVisibility:'visible' }} >
                        <center>
                        <br/><br/><br/>
                            <h1 className='text-1'>Planet Earth </h1>
                            <hr style={{color:'white'}}/>
                            <img src={'https://api.nasa.gov/EPIC/archive/natural/'+ epic.date.split('-')[0]+ '/' +epic.date.split('-')[1] + '/'+ epic.date.split('-')[2].split(' ')[0]+'/png/'+epic.image+'.png?api_key='+key} style={{maxWidth:'100%' , width:'500px' }} />
                            <br/>

                            <p style= {{color : 'white'}}>Earth, our home planet, is a world unlike any other. The third planet from the sun, Earth is the only place in the known universe confirmed to host life.</p>
                            <p className='d-none d-sm-block' style={{color:'white'}}>About 4.5 billion years ago, gravity coaxed Earth to form from the gaseous, dusty disk that surrounded our young sun.</p>
                            <br/><br/>
                            </center>
                            <div className='container p-0 rounded'  style={{ backgroundImage:`url("../images/sat3.jpg")` ,backgroundSize:'cover' , backgroundPosition:'center'}}>
                                
                                <div className='p-4' style={{backgroundColor:'rgb(0,0,0,0.25)'}}>

                                <h1 className='text-1' style={{color:'whitesmoke' , fontWeight:'bolder'}}>Weather</h1>
                                <hr style={{color:'whitesmoke'}} />
                                
                                <Form style={{width:'60%'}} onSubmit={submitHandler}>
                                    <InputGroup>
                                    <Input style={{backgroundColor:'whitesmoke'  }} name='city' type='text' placeholder='City' required />
                                    <Button color='dark' className='mx-1'>Check</Button>
                                    </InputGroup>
                                </Form>

                                <br/>
                                <div className='row'>
                                    <div className='col-12 container'>
                                        
                                            <p style={{fontWeight:'700' , color:'whitesmoke'}} >Location : {weather.name}</p>
                                        
                                    </div>
                                    <div className='col-6 col-sm-2'>
                                        <br/>
                                        <h1 className='text-3' style={{color:'whitesmoke'}}><i className='fa fa-cloud'></i> Today</h1>
                                        <br/>
                                        <p style={{fontWeight:'700',fontSize:'17px' , color:'whitesmoke'}}>{weather.weather[0].description}</p>
                                    </div>
                                    <div className='col-6 col-sm-2'>
                                        <br/>
                                        <h1 className='text-3' style={{color:'whitesmoke'}}> Humidity</h1>
                                        <br/> 
                                        <p style={{fontWeight:'700',fontSize:'17px',color:'whitesmoke'}}>{weather.main.humidity}%</p>
                                    </div>
                                    <div className='col-6 col-sm-2'>
                                        <br/>
                                        <h1 className='text-3' style={{color:'whitesmoke'}}> Temperature  </h1>
                                        <br/>
                                        <p style={{fontWeight:'700',fontSize:'17px',color:'whitesmoke'}} >Min : {weather.main.temp_min} K</p>
                                        <p style={{fontWeight:'700',fontSize:'17px',color:'whitesmoke'}} >Max : {weather.main.temp_max} K</p>
                                    </div>
                                    <div className='col-6 col-sm-2'>
                                        <br/>
                                        <h1 className='text-3' style={{color:'whitesmoke'}}>Wind Speed</h1>
                                        <br/>
                                        <p style={{fontWeight:'700',fontSize:'17px',color:'whitesmoke'}} >{weather.wind.speed} m/s</p>
                                    </div>
                                </div>
                                </div>
                                
                                
                            </div>

                            <br/><br/><br/>
                        
                    </div>
                    <div className='col-1' style={{backfaceVisibility:'visible'}}></div>
                </div>
            </div>
            
                
        );
    }
        
}

export default Home;