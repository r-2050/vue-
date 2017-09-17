import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Movie from '../components/Movie'
import Books from '../components/Books'
import Status from '../components/Status'
import Group from '../components/Group'
import Search from '../components/Search'
import Logon from '../components/Logon';
import Login from '../components/Login'
import HotMovie from '../components/page/HotMovie'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/books',
      name: 'Books',
      component: Books
    },
    {
      path: '/status',
      name: 'Status',
      component: Status
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logon',
      name: 'Logon',
      component: Logon
    },
    {
      path: '/hotMovie',
      name: 'HotMovie',
      component:HotMovie
    }

  ]
})
