import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.replace;
Router.prototype.replace = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
//懒加载
const Home = () => import('../views/home/Home');
const Category = () => import('../views/category/Category');
const Cart = () => import('../views/cart/Cart');
const Profile = () => import('../views/profile/Profile');
Vue.use(Router);
const routes = [
  {
    path: '/home',
    component: Home
  }, {
    path: '/category',
    component: Category
  }, {
    path: '/cart',
    component: Cart
  }, {
    path: '/profile',
    component: Profile
  },
  {
    path: '*',
    redirect: '/home'

  },
];
const router = new Router({
  mode: 'history',//去掉url里面默认的#
  routes,

});
export default router
