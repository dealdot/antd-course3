import { defineConfig } from 'umi';

export default defineConfig({


  toRaw: 1212,
  nodeModulesTransform: {
    type: 'admin',
    age:11,
    year: 2121,
    month: 30,
    day: 333,
    hour: 11
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
