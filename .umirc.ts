import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
    age:11,
    year: 2020
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
