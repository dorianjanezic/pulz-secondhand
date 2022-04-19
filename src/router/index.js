import { createRouter, createWebHashHistory } from 'vue-router'
import Landing from '../views/Landing.vue'
import oct20 from '../views/oct20.vue'
import apr18 from '../views/apr18.vue'
import oct18 from '../views/oct18.vue'
import dec2019 from '../views/dec2019.vue'


const routes = [{
        path: '/',
        name: 'home',
        component: Landing,
    },
    {
        path: '/oct20',
        name: 'OCT20',
        component: oct20
    },
    {
        path: '/oct18',
        name: 'OCT18',
        component: oct18
    },
    {
        path: '/dec19',
        name: 'DEC19',
        component: dec2019
    },
    {
        path: '/apr18',
        name: 'APR18',
        component: apr18
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router