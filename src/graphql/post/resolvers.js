const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts(id);
  const posts = response.json();
  return posts;
};

const posts = async (_, __, { getPosts }) => {
  const response = await getPosts();
  const posts = response.json();
  return posts;
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
