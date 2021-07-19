import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Button, Form, Input, InputGroup } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import { setGlobalCssModule } from 'reactstrap/es/utils';
import CloseIcon from '@material-ui/icons/Close';
import Fade from 'react-reveal';
 

const Mars = () => { 

    

    const [rover,setRover] = useState(null);
    const [model,setModel] = useState(false);
    const [tempimgObj , setTempImgScr] = useState({img_src:'' , camera:{full_name:''}  ,rover:{name:'' , status:''},earth_date:''  });


    var key = 'ahc41MiOjb0SdL1IP9to6lbEHVbd4HqUfFbRutsP';

    function getRover(v) {
        var c;
        if(v =='')
        {
            c=v;
        }
        else{
            c = "&camera="+v;
        }
        
        //https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY

        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&&api_key="+ key + c)
        .then((res) => setRover(res.data.photos))
        .catch((err) => console.log(err));

    }

    useEffect(()=>{
        getRover('');

    } , [setRover]);

    const submitHandler = (e) => {
        e.preventDefault();
        var v = e.target.search.value;
        getRover(v);
    }

    //console.log(rover);
// landing_date: "2012-08-06"
// launch_date: "2011-11-26"
// name: "Curiosity"
// status: "active"
    if(rover && tempimgObj){

        console.log(rover);
        const getImg = (r) =>{
            setTempImgScr(r);
            setModel(true);
        }

            var roverpics = rover.map((r) => {

                return (
                    <Fade bottom>
                    <div className='pics p-2 shadow' onClick={()=>getImg(r)}>
                        <img src={r.img_src} className='rounded' style={{width:'100%'}}/>
                    </div>
                    </Fade>
                );
            })

            
           

            return (
            <div className='row' style={{backgroundColor:'black', color:'whitesmoke'}}>
                    
                    <div className={model? "model open" : "model"}>
                        <div className="row">
                            <div className="col-10 offset-1 py-5">
                                <center>
                                    <h1 className='text-1'>Rover : {tempimgObj.rover.name}</h1>
                                    <hr/>
                                    
                                    <img src={tempimgObj.img_src} style={{maxHeight:'80vh'}} className='img-fluid rounded' />

                                    <h1 className='text-2'>Camera : {tempimgObj.camera.full_name}</h1>
                                    <h1 className='text-3'>Date : {tempimgObj.earth_date}</h1>
                                    
                                    <p>Status : {tempimgObj.rover.status}</p>
                                </center>
                            </div>
                        </div>
                        
                        
                        <CloseIcon id='close' onClick={() => setModel(false)}/>
                    </div>

                    <div className='my-3 p-2'>
                        <center>

                            <h1 className='text-1'>MARS ROVER PICS</h1>
                            <hr style={{width:'60%'}}/><br/>

                            <Form style={{width:'40%'}} onSubmit={submitHandler}>
                                <InputGroup>
                                <Input style={{backgroundColor:'whitesmoke'  }} name='search' type='select' placeholder='Search' required >
                                    <option>mast</option>
                                    <option>navcam</option>
                                    <option>fhaz</option>
                                    <option>rhaz</option>
                                    <option>chemcam</option>
                                </Input>
                                <Button  color='dark' className='mx-1'><i className='fa fa-search'></i></Button>
                                </InputGroup>
                            </Form>
                        </center>
                    </div>


                    <div className='col-10 offset-1'>
                        <div className='gallery'>
                            {roverpics}
                        </div>
                    </div>
            </div>
        );
    }

    return (
        <div className='p-4' style={{ height: '80vh' }}>
            <center>
                <div class="spinner-border " role="status" style={{ marginTop: "25vh", fontSize: '50%' }}>
                    <span class="sr-only">Loading...</span>
                </div>
            </center>
        </div>

    );

}

export default Mars;