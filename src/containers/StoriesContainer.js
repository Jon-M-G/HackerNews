import React, {useEffect, useState, memo} from 'react'; 
import {getStoryIds, getStory} from '../services/hnApi';
import {Story} from '../components/Story';
import {StoryWrapper} from '../styles/StoryStyles';
import {GlobalStyle, StoriesContainerWrapper} from '../styles/StoriesContainerStyles'
import {useInfiniteScroll} from '../hooks/useInfiniteScroll';
export const StoriesContainer = () => {
    const {count} = useInfiniteScroll();
    const [storyIds, setStoryIds] = useState([]);
    
    useEffect(() => {
      getStoryIds().then(data => setStoryIds(data));
      //getStory(20970623).then(data => console.log(data));
      
      
    }, []);

    return (
    <>
    <GlobalStyle />
    <StoriesContainerWrapper data-test-id = "stories-container">
    <h1>Hacker news Stories</h1>
    { storyIds.slice(0,count).map(storyId=> <Story key = {storyId} storyId={storyId}/>)}
    </StoriesContainerWrapper>
    </>
    );
  };