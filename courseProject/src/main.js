import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueRouter from 'vue-router'

const routes = [
    {path: '/', component: MainPage},
    {path: '/contacts', component: Contacts },
    {path: '/production', component: Production},
    {path: '/showroom', component: ShowRoom},
    {path: '/telegramChannel', component: TelegramChannel},
    {path: '/collection19', component: Collection19},
    {path: '/collectionss19', component: CollectionSS19},
    {path: '/aboutus', component: AboutUs},
    {path: '/productlist', component: ProductList}
]
 
const router = new VueRouter({
    routes
 })
import App from './components/App.vue'
import store from './store.js'
import MainPage from './components/MainPage.vue'
import Contacts from './components/Contacts.vue'
import Production from './components/Production.vue'
import ShowRoom from './components/ShowRoom.vue'
import TelegramChannel from './components/TelegramChannel.vue'
import Collection19 from './components/Collection19.vue'
import CollectionSS19 from './components/CollectionSS19.vue'
import AboutUs from './components/AboutUs.vue'
import ProductList from './components/ProductList.vue'
 Vue.use(VueRouter)
    new Vue({
        render: h => h(App),
        el: '#app',
        router,
        store

})