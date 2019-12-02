<template>
    <div id="app">
        <Header />
	<section class="slider">
		<div class="fotorama">
			  <img src="img/header-slider/1.jpg">
			  <img src="img/header-slider/2.jpg">
			  <img src="img/header-slider/3.jpg">
 		</div>
	</section>
	<section class="season">
		<div class="container">
			<div class="row">
				<div class="col-md-3">
					<div class="season-top">
						<p>тор в цьому сезоні</p>
					</div>
				</div>
			</div>
			<div class="season-clother">
				<div class="row">
					<div class="col-md-6">
						<div class="season-black">
							<img src="img/season/hood-jes20-gorch4.jpg" alt="">
							<span class="season-span">Худі</span>
						</div>
					</div>
					
						    <div class="col-md-3">
							<div class="season-good">
								<img src="img/season/black.jpg" alt="">
								<span class="season-span">Футболки</span>
							</div>
							 <div class="col-md-3">
							<div class="season-good season-left">
								<img src="img/season/plach.jpg" alt="">
								<span class="season-span">Дощовики</span>
							</div>
					</div>	
						</div>
					 <div class="col-md-2">
								<div class="season-good">
									<img src="img/season/shtani.jpg" alt="">
									<span class="season-span">Штани</span>
								</div>
							 <div class="col-md-3">
								<div class="season-good season-left">
									<img src="img/season/switer-wh-2g.jpg" alt="">
									<span class="season-span">Светри</span>
								</div>
							</div>	
			 		</div>
			    </div>
			</div>
		</div>
	</section>
	<section class="last">
		<div class="container">
			<div class="row">
				<div class="col-md-3">
					<div class="last-grey">
					<p id ="red" value="Click" onmousedown="viewDivsec()">останні находження</p>
					</div>
				</div>
				<div class="col-md-3">
					<div class="last-grey">
						<p id ="fred" value="Click" onmousedown="viewDiv()">найпопулярніші</p>
					</div>
			   </div>
		   </div>
		  <div class="row">
				<div class="col-md-12">
						<div class="im" id="nahod">
							<div class="slide slidetwo"><img src="img/popular/2-1.jpg" alt=""><p>Футболка HARD Kyivwalls пісок</p><span><del>800.00₴ </del></span><h6 class="sale">700.00₴</h6><div class="saless"><span class="red">Sale! -13.3%</span><span class="blue">&NEW!</span></div></div>
							<div class="slide slidethree"><img src="img/popular/3-1.jpg" alt=""><p>Шорти HARD хакі</p><span><del>680.00₴ </del></span><h6 class="sale">480.00₴</h6><div class="salesss"><span class="red">Sale! -13.3%</span><span class="blue">&NEW!</span></div></div>
							<div class="slide slidefour"><img src="img/popular/4-1.jpg" alt=""><p>Футболка HARD PRIHOD чорна</p><h6>600.00₴</h6></div>
							<div class="slide slidefive"><img src="img/popular/5-1.jpg" alt=""><p>Футболка HARD PRIHOD біла</p><h6>600.00₴</h6></div>
							<div class="slide slidesix"><img src="img/popular/6-1.jpg" alt=""><p>Футболка HARD PRIHOD біла</p><h6>600.00₴</h6></div>
							<div class="slide slideseven"><img src="img/popular/7-1.jpg" alt=""><p>Футболка HARD PRIHOD чорна</p><h6>600.00₴</h6></div>
							<div class="slide slideeight"><img src="img/popular/8-1.jpg" alt=""><p>Худі HARD ЖЕСТЬ (біле)</p><h6>1 500.00₴ </h6></div>
							<div class="slide slidenine"><img src="img/popular/9-1.jpg" alt=""><p>Худі HARD ЖЕСТЬ (біле)</p><h6>1 500.00₴ </h6></div>
							<div class="slide slideten"><img src="img/popular/10-1.jpg" alt=""><p>Сумка HARD Kyivwalls мала Limited edition</p><h6>1 500.00₴ </h6></div>
						</div>
					</div>
				</div>
					<div class="row">
						<div class="col-md-12">
						<div class="am" id="poplast">
							<div class="slide slideone"><div class="hoverslide"><img src="img/more/socks.jpg" alt=""></div><p>Шкарпетки HARD ЖЕСТЬ (білі)</p><h6>150.00₴</h6><div class="sales"><span class="red">Sale! -13.3%</span><span class="blue">&NEW!</span></div></div>
							<div class="slide slidetwo"><img src="img/more/so.jpg" alt=""><p>Футболка HARD Kyivwalls пісок</p><span><del>800.00₴ </del></span><h6 class="sale">700.00₴</h6><div class="saless"><span class="red">Sale! -13.3%</span><span class="blue">&NEW!</span></div></div>
							<div class="slide slidethree"><img src="img/more/1-1.jpg" alt=""><p>Шорти HARD хакі</p><span><del>680.00₴ </del></span><h6 class="sale">480.00₴</h6><div class="salesss"><span class="red">Sale! -13.3%</span><span class="blue">&NEW!</span></div></div>
							<div class="slide slidefour"><img src="img/more/2-1.jpg" alt=""><p>Футболка HARD PRIHOD чорна</p><h6>600.00₴</h6></div>
							<div class="slide slidefive"><img src="img/popular/5-1.jpg" alt=""><p>Футболка HARD PRIHOD біла</p><h6>600.00₴</h6></div>
							<div class="slide slidesix"><img src="img/popular/6-1.jpg" alt=""><p>Футболка HARD PRIHOD біла</p><h6>600.00₴</h6></div>
							<div class="slide slideseven"><img src="img/popular/7-1.jpg" alt=""><p>Футболка HARD PRIHOD чорна</p><h6>600.00₴</h6></div>
							<div class="slide slideeight"><img src="img/popular/8-1.jpg" alt=""><p>Худі HARD ЖЕСТЬ (біле)</p><h6>1 500.00₴ </h6></div>
							<div class="slide slidenine"><img src="img/popular/9-1.jpg" alt=""><p>Худі HARD ЖЕСТЬ (біле)</p><h6>1 500.00₴ </h6></div>
							<div class="slide slideten"><img src="img/popular/10-1.jpg" alt=""><p>Сумка HARD Kyivwalls мала Limited edition</p><h6>1 500.00₴ </h6></div>
					</div>
				</div>
			</div>
		</div>
		<div class="hline"></div>
	</section>
	<section class="blog">
		<div class="container">
			<p class="blog-bl">наш блог</p>
			<ul class="blog-info">
				<li><img class="blog-imgf" src="img/blog/blog1.jpg" alt=""></li>
				<li><em class="blog-date">23 Вересня 2019 by admin, in Блог</em>
				<a href="collection19.html"><h6>Колекція AW 19-20: HARD Subculture</h6></a>
				<p>Субкультура — це спосіб життя, стиль мислення окремих соціальних груп переважно ...</p>
				<a href="collection19.html"><span>read more+</span></a></li>
				<li><img class="blog-imgf" src="img/blog/blog2.jpg" alt=""></li>
				<li><em class="blog-date">25 Березня 2019 by admin, in Блог</em>
				<a href="#"><h6>Виробництво одягу на замовлення</h6></a>
				<p>Протягом останніх років ми системно виконуємо оптові замовлення на виробництво о...</p>
				<a href="#"><span>read more+</span></a></li>
			</ul>
			<div class="row">
				<div class="col-md-12">
					<div class="fo">
						<img src="img/blog/newblog/blog13.jpeg" alt="" class="blog-sec">
						<img src="img/blog/newblog/blog12.jpeg" alt="" class="blog-sec">
						<img src="img/blog/newblog/blog11.jpeg" alt="" class="blog-sec">
						<img src="img/blog/newblog/blog10.jpeg" alt="" class="blog-sec">
						<img src="img/blog/newblog/blog3.jpg" alt="" class="blog-sec">
						<img src="img/blog/newblog/blog4.jpeg" alt="" class="blog-sec">
						<img src="img/blog/newblog/blog5.jpeg" alt="" class="blog-sec">
						<img src="img/blog/newblog/blog6.jpeg" alt="" class="blog-sec">
						<img src="img/blog/newblog/blog7.jpeg" alt="" class="blog-sec">
						<img src="img/blog/newblog/blog8.jpeg" alt="" class="blog-sec">
						<img src="img/blog/newblog/blog9.jpeg" alt="" class="blog-sec">
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="blog-btn">
					<div class="col-md-8">
						<a href="https://www.instagram.com/hardkyiv/?igshid=hfzzm8wg7p5a" target="_blank"><button type="button">View on Instagram<img src="img/blog/insta.png" alt=""></button></a>
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
import axios from 'axios'
import VueAxios from 'vue-axios'
import Header from './Header.vue'
import Footer from './Footer.vue'
Vue.use(VueAxios, axios)
export default {
	components: {
		Header,
		Footer
	},
 data: function(){
	 return{
		 item: "",
		 tovarTovar: []
	 }
 },
 computed: {

 },
 mounted(){
	 Vue.axios.get("http://localhost:3000/tasks").then((popa)=>{
		 this.tovarTovar = popa.data;
		 console.log(this.tovarTovar);
	 })
 }
}
</script>