import axios from 'axios';
import {selectFields} from '../selectors/selectFields';
export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesURL = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}/item/`;


export const getStory = async(storyID)=>{
    const result = await axios
    .get(`${storyUrl + storyID}.json`)
    .then(({data})=> data && selectFields(data));

    return result;
}

export const getStoryIds = async () => {
    const result = await axios.get(newStoriesURL);

    return result.data;
}
