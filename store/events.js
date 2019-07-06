export const state = () => ({
  list: []
});

export const mutations = {
  add(state, event) {
    state.list.push(event);
  },
  emptyList(state) {
    state.list = [];
  }
};

export const getters = {
  list: state => {
    return state.list;
  }
};
