import React, { useEffect, useState } from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import News from './News';
import ImageGallery from './ImageGallery';
import VideoGallery from './VideoGallery';
import {Switch , Redirect , Route} from 'react-router-dom';
import Media from './Media';
import Mars from './Mars';

const Main = () => {

    const [media,setMedia] = useState(null);


    return (
        <div>
            <Header  />

            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/news' component={News} />
                <Route path='/gallery/images' exact component={() => <ImageGallery media={media} setMedia={setMedia}  />} />
                <Route path='/gallery/videos' exact component={() => <VideoGallery media={media} setMedia={setMedia}  />} />
                <Route path='/gallery/:id' component={ () => <Media media={media} setMedia={setMedia}  />} />
                <Route path='/mars' component={Mars} />
                <Redirect to='/home' />
            </Switch>

            <Footer />
        </div>
    );
}

export default Main;