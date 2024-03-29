import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig ({
    nodeModulesTransform: {
        type: 'none',
    },
    routes: routes,
    history: {
        type: 'hash'
    }
})