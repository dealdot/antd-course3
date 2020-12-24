import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
    age:11
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
