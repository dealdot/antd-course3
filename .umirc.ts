import { defineConfig } from 'umi';

export default defineConfig({
  toRaw: qfds,
  nodeModulesTransform: {

    year: 6667,
    month: 31,
    day: 333,
    hour: 11
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
