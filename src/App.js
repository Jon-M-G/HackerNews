import React, {useEffect, useState} from 'react';
import {getStoryIds} from './services/hnApi.js';

import {StoriesContainer} from './containers/StoriesContainer';

export const App = () => <StoriesContainer/>;
  


export default App;
