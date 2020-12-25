import { defineConfig } from 'umi';

export default defineConfig({
  toRaw: qfds,
  nodeModulesTransform: {

    year: 666780000,
    month: 31,
    day: 333,
    hour: 11
  },
  routes: [
    { paths: '/', component: '@/pages/index' },
  ],
});
