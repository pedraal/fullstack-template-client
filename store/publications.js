import _ from "lodash";

export const state = () => ({
  list: [],
  archives: {}
});

export const mutations = {
  add(state, publication) {
    let date = new Date(publication.createdAt);
    publication.timestamp = new Date(date.getFullYear(), date.getMonth());
    state.list.push(publication);
  },
  setArchives(state) {
    state.list.forEach(publication => {
      if (!_.has(state.archives, publication.timestamp)) {
        state.archives[publication.timestamp] = [];
        state.archives[publication.timestamp].push(publication);
      } else {
        state.archives[publication.timestamp].push(publication);
      }
    });
  },
  emptyList(state) {
    state.list = [];
  },
  emptyArchives(state) {
    state.archives = {};
  }
};

export const getters = {
  list: state => {
    return state.list;
  },
  archives: state => {
    return state.archives;
  }
};
