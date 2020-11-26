import React from 'react';
import renderer from "react-test-renderer"
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

import { StoriesContainer } from '../containers/StoriesContainer';
import { STORY_INCREMENT } from '../constants';
import { storyIds, singularStory } from '../fixtures';
import { getStory, getStoryIds } from '../services/hnApi';
import { render, cleanup, waitForElement, waitFor } from '@testing-library/react';


beforeEach(cleanup);

jest.mock('../hooks/useInfiniteScroll.js');

jest.mock('../services/hnApi', () => ({
  getStory: jest.fn(),
  getStoryIds: jest.fn(),
}));


test('renders the story container with a story', async () => {
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,

  }));
  getStory.mockImplementation(() => Promise.resolve(singularStory));

  getStoryIds.mockImplementation(() => Promise.resolve(storyIds));



  const { getByText, queryByTestId } = render(<StoriesContainer />);
  await waitFor(() => [
    expect(getByText('Hacker news Stories')).toBeTruthy(),
    
    expect(getByText('Tarnished: Google Responds')).toBeTruthy(),

    expect(queryByTestId('story-by').textContent).toEqual('By: Jon Gower'),
  ]);
});