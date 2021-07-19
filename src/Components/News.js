import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  Button, CardText, CardTitle } from 'reactstrap';
import {Stagger , Fade } from 'react-animation-components';
import Zoom from 'react-reveal';

const News = () => {

    const [news , setNews] = useState(null);
    const [count,setCount] = useState(10);
    function getNews()
    {
        axios.get('https://api.spaceflightnewsapi.net/v3/articles?_limit=' + count)
            .then((res) => setNews(res.data))
            .catch(err => console.log(err));
    }


    useEffect(() => {
        getNews();
    },[setNews,setCount]);


    


    if(news == null)
    {
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

    var addCount = () => {
        
        setCount(count +10);
        getNews();
    }

    var newsCards = news.map((n) => {

        return(
            
                    <Fade in   >
                        <Zoom bottom>
                    <div className='row shadow-lg   my-5 p-0 cardbody'>
                        <div className='col-12 col-lg-6'>
                        <center>
                            <img src={n.imageUrl} className='rounded shadow-lg' style={{width:'500px' , maxWidth:'100%'}} />
                            
                            </center>
                        </div>
                        <div className='col-12 col-lg-6 p-2'>
                                <center>
                                    <CardTitle ><b>{n.title}</b></CardTitle>
                                    <hr/>
                                    <CardText style={{color:'rgb(180,180,180)'}} >{n.summary}</CardText>
                                </center>
                                <p style={{float:'right'}} className='p-4'> - {n.publishedAt.split('T')[0]}</p>
                                <div className=' p-3'>
                                <a href={n.url} target='_blank'>
                                    <Button color='primary' style={{}} >Explore</Button>
                                </a>
                                </div>
                        </div>
                    </div>   
                   
                    </Zoom>
                    </Fade>         
            
        );
    });

    return(
        <div className='row' style={{backgroundColor:'black'}}>   
            <div className='col-1 col-sm-2'></div>
            <div className='col-10 col-sm-8 '>
                <Stagger in delay={200}>
                {newsCards}
                </Stagger>

                <br/><br/>
                <center>
                    <Button className='text-3 see-more' color='dark' onClick={addCount}>See more</Button>
                </center>
                <br/>

            </div>
            <div className='col-1 col-sm-2'></div>
        </div>
    );

}


export default News;