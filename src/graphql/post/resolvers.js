const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts(id);
  const post = await response.json();
  return post;
};

const posts = async (_, { input }, { getPosts }) => {
  const apiFiltersInput = new URLSearchParams(input);
  const response = await getPosts('?' + apiFiltersInput);
  const posts = response.json();
  return posts;
};

export const postResolvers = {
  Query: { post, posts },
};
