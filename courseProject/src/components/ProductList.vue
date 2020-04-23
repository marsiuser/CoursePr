<template>
    <div id="app">
        <Header />
                <section class="tshirt">
		<div class="container">
			<div class="marow">
				<div class="">
					<div class="tshirt-categories">
						<h6>категорії товарів</h6>
						<hr class="rred">
						<ul class="tshirt-menu">
							<li><a class="tshirt-mainli" href="#">В магазині: </a>
							<ul class="tshirt-submenu">
								<li @click="chooseType('tShort','Футболки')">Футболки</li>
								<li @click="chooseType('hudi', 'Худі')">Худі</li>
								<li @click="chooseType('shorti','Штани / Шорти')">Штани / Шорти</li>
								<li @click="chooseType('swetr','Світшоти')">Світшоти</li>
								<li @click="chooseType('kurtka','Куртки / Дощовики')">Куртки / Дощовики</li>
							</ul>
							</li>
							<li class="tshirt-line"><router-link v-bind:to="'/production'"><a class="tshirt-mainli">На замовлення</a></router-link></li>
						</ul>	
						<div class="tshirt-ne">
							<h6>новинки</h6>
						<hr class="rred">
							<div class="tshirt-new">
									<p><router-link v-bind:to="'/productlist'"><a href="#">Оранж худі <br> HARD Kyivwalls</a></router-link> <br><span>1 900.00₴</span></p><img class="season-black" src="../img/man/categories/1.jpg" alt="">
							</div>
							<div class="tshirt-new">
									<p><a href="#">Чорне худі <br>HARD Kyivwalls</a> <br><span>1 900.00₴</span></p><img class="season-black" src="../img/man/categories/2.jpg" alt="">
							</div>
							<div class="tshirt-new">
									<p><a href="#">Худі HARD <br>Pattern (гірчиця)</a><br><span>1 900.00₴</span></p><img class="season-black" src="../img/man/categories/3.jpg" alt="">
							</div>
							<div class="tshirt-new">
									<p><a href="#">Чорне худі <br>HARD Pattern</a> <br><span>1 900.00₴</span></p><img class="season-black" src="../img/man/categories/4.jpg" alt="">
							</div>
						</div>
							<div class="tshirt-ne">
							<h6>SALE!</h6>
						<hr class="rred">
							<div class="tshirt-new">
									<p><a href="#">HARD lampas світшот</a><br><span><del>1500.00₴</del>1300.00₴</span></p><img class="season-black" src="../img/man/categories/5.jpg" alt="">
							</div>
							<div class="tshirt-new">
									<p><a href="#">Футболка HARD <br>Kyivwalls пісок </a><br><span><del>800.00₴</del> 700.00₴</span></p><img class="season-black" src="../img/man/categories/6.jpg" alt="">
							</div>
							<div class="tshirt-new">
									<p><a href="#">Шорти HARD хакі</a><br><span><del>680.00₴</del> 480.00₴</span></p><img class="season-black" src="../img/man/categories/7.jpg" alt="">
							</div>
						</div>
					</div>
				</div>
				<div class="">
					<div class="tshirt-goods">
						<h2>{{nameOfType}}</h2>
						<hr>
						</div>
							<div class="">
								<div class="tshirt-mm">
										<select class="btn btn-secondary dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-model="isSort" @change="sortProducts()">
											<option value=""  selected>Сортування за замовчуванням</option>
											<option value="upPrice">Сортувати за ціною: від нижчої до вищої</option>
											<option value="downPrice">Сортувати за ціною: від вищої до нижчої</option>
										</select>
							   <div class="dropdown">
								  <select name="" v-model="sizeProd" class="btn btn-secondary dropdown-toggle bb"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
									  <option value=""  selected>Будь-який розмір</option>
									  <option class="dropdown-item" value="xs">xs</option>
									  <option class="dropdown-item" value="s">s</option>
									  <option class="dropdown-item" value="m">m</option>
									  <option class="dropdown-item" value="l">l</option>
									  <option class="dropdown-item" value="xl">xl</option>
									  <option class="dropdown-item" value="xxl">xxl</option>
								  </select>
							   </div>
								</div>
							</div>
							<div class="lol">
								<div class="tovarma" v-for="item in sortSizeProducts" v-show="item.type==typeProd">
									<div class="prod_wrapper">
										<div class="foro">
											<div class="fotorama">
														<img :src="item.img" alt="">
														<img :src="item.hoverimg" alt="">
										</div>
										<p class="new_or" v-if="item.new != 'no'">{{item.new}}</p>
										<p class="new_orpr" v-if="item.saleprice != 0">SALE!</p>
									</div>
										<div class="lol_wrap">
											<h6>{{item.name}}</h6>
											<p>Розмір: <span class="goods_size">{{item.size}}</span></p>
											<div class="price_wrap">
												<p v-if="item.saleprice != 0"><del>{{item.price}} ₴</del></p>
												<p class="static_price" v-if="item.saleprice == 0">{{item.price}} ₴</p>
												<p v-if="item.saleprice != 0"><span>Sale: </span><span class="sale_price" >{{item.saleprice}} ₴</span></p>
											</div>
										</div>
									</div>
								</div>	
							</div>
					</div>
				</div>
			</div>
	</section>
        <Footer />
    </div>
</template>

<script>
import Vue from 'vue' 
import Vuex, { mapGetters } from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import Header from './Header.vue'
import Footer from './Footer.vue'
import carousel from 'vue-owl-carousel2';
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
export default {
    components:{
        Header,
		Footer,
		carousel
	},
	data(){
		return{
			productsList : [],
			item: '',
			isSort: "",
			sizeProd: "",
			typeProd: '',
			typeName: ''
		}
	},
		mounted: function(){

		Vue.axios.get("http://localhost:3000/tasks").then((popa)=>{
		 this.productsList = popa.data; 
		
		console.log(this.productsList);
	
		this.sortProducts();
	 })
	},
	computed: {
		sortSizeProducts: function(){
			this.typeProd = this.$store.getters.selecterOfType;
			
			if(this.sizeProd==""){
				return this.productsList;
			}
			return this.productsList.filter(item =>{
				return item.size == this.sizeProd;
			}) 
		},
		nameOfType(){
			return this.typeName = this.$store.getters.labelGetter;
		}
	},
	methods:{
		sortProducts(){
				if(this.isSort==""){
				return this.productsList;
				}
                switch(this.isSort) {
                    // case 'newestProducts' : {this.productsList.sort((a, b) => +a.name < +b.name ? 1 : -1); break;}
                    case 'upPrice' : {this.productsList.sort((a, b) => +a.price > +b.price ? 1 : -1); break;}
                    case 'downPrice' : {this.productsList.sort((a, b) => +a.price < +b.price ? 1 : -1); break;}
                    default : break;
                }
		},
		chooseType(value, value2){
			this.$store.commit('selectTypeProd', value);
			this.$store.commit('labelType', value2);
		}
		
	},

}
</script>