import './styles.css';

import { PostCard } from '../PostCard/index';

export const Posts = ({ posts }) => (
  <div className="posts">
    {
      posts.map(post => (
        <PostCard 
          key={post.id}
          cover={post.cover}
          title={post.title}
          body={post.body}
        />
      ))
    }
  </div>
)