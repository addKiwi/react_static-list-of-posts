import React from 'react';

import { Post } from '../../types/type';
import { PostInfo } from '../PostInfo/PostInfo';

import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="posts">
    {
      posts.map((post) => (
        <li key={post.id} className="posts__post">
          <PostInfo post={post} />
        </li>
      ))
    }
  </ul>
);
