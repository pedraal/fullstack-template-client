export const state = () => ({
  article: {}
});

export const mutations = {
  select(state, publication) {
    state.article = publication;
  },
  emptyArticle(state) {
    state.article = [];
  }
};

export const getters = {
  article: state => {
    return state.article;
  }
};
