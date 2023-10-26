const post = () => {
  return {
    id: '1',
    title: 'Post title 1',
  };
};

const posts = async (_, __, { fetch }) => {
  const posts = await fetch('http://localhost:3000/posts');
  return posts;
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
