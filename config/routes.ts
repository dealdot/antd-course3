export default [
    { 
        path: '/', 
        component: '@/layout',
        routes: [
            {
                path: '/',
                component: 'Helloworld'
            },
            {
                path: '/helloworld',
                component: 'Helloworld'
            },
            {
                path: '/puzzlecards',
                component: 'PuzzleCards'
            },
            {
                path: '/list',
                component: 'List/List'
            },
            {
                path: '/dashboard',
                routes: [
                  { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
                  { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
                  { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
                ]
            },
        ],
        proxy: {
            '/jokes' : {
                target: 'https://official-joke-api.appspot.com',
                changeOrigin: true,
                // pathRewrite: { '^/jokes': '' }
            }
        } 
    }
]