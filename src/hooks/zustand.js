import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import axios from 'axios';
import Notiflix from 'notiflix';

export const useStore = create(
  devtools((set, get) => ({
    userId: '',
    name: '',
    email: '',
    token: '',
    myTest: [],
    passedTests: [],
    tests: [],
    isFetching: false,
    toggleFetching: () =>
      set(state => ({ ...state, isFetching: !state.isFetching })),

    setUser: data => set(state => ({ ...state, ...data })),

    getTestById: id => {
      return get().tests.find(el => el._id === id);
    },

    fetch: async () => {
      const { data } = await axios.get('/test/');
      set({ tests: [ ...data] });
    },

    updatePassedTest: async (id, score) => {
      await axios.post(`/test/${id}`, { score });
      Notiflix.Notify.success("results saved")
    },

    addTest: async (data) => {}
  }))
);
