const state = {
  posts: [], // Array to hold posts
};

const getters = {
  getPosts(state) {
    return state.posts;
  },
  // ... add more getters if needed
};

const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
  addPost(state, post) {
    state.posts.push(post);
  },
  updatePost(state, updatedPost) {
    const index = state.posts.findIndex((p) => p.id === updatedPost.id);
    if (index !== -1) {
      state.posts[index] = updatedPost;
    }
  },
  deletePost(state, postId) {
    state.posts = state.posts.filter((p) => p.id !== postId);
  },
};

const actions = {
  async fetchPosts({ commit }) {
    try {
      // Fetch posts from your API (example)
      const response = await fetch("https://your-api.com/posts");
      const data = await response.json();
      commit("setPosts", data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  },
  // ... add more actions (create, update, delete)
};

export default {
  namespaced: true, // Optional for organizing state
  state,
  getters,
  mutations,
  actions,
};
