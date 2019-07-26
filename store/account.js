export const state = () => ({
  eventAttempts: [],
  comments: []
});

export const mutations = {
  addEventAttempts(state, eventAttempt) {
    state.eventAttempts.push(eventAttempt);
  },
  addComment(state, comment) {
    state.comments.push(comment);
  },
  emptyEventAttempts(state) {
    state.eventAttempts = [];
  },
  emptyComments(state) {
    state.comments = [];
  }
};

export const getters = {
  eventAttempts: state => {
    return state.eventAttempts;
  },
  comments: state => {
    return state.comments;
  }
};
