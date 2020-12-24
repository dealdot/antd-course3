import { defineConfig } from 'umi';

export default defineConfig({
  abc: abc,
  toRaw: 1212,
  nodeModulesTransform: {
    type: 'admin',
    age:11,
    year: 2020,
    month: 3,
    day: 333,
    hour: 11
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
