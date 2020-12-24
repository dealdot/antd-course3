import { defineConfig } from 'umi';

export default defineConfig({
  shallowRef: true,
  toRaw: false,
  nodeModulesTransform: {
    type: false,
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
