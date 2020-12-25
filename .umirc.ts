import { defineConfig } from 'umi';

export default defineConfig({
  toRaw: qfds,
  nodeModulesTransform: {

    year: 66678,
    month: 31,
    day: 333,
    hour: 333,
    dd: 33333
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
