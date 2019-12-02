<template>
<div id="app">
    <Header />
            	<section class="order">
		<div class="container">
			<div class="row">
				<div class="col-md-9">
					<div class="order-statya order-mmm">
						<div class="order-collection">
							<div class="order-tem order-create">
								<img src="img/order/jager.jpg" alt="" width="820" height="auto">
							</div>
						</div>
						<em>ЧЕТВЕР, 27 ВЕРЕСЕНЬ 2018 / PUBLISHED IN БЛОГ</em>
						<h1>Команда Jägermeister рекомендує новий шоу-рум HARD</h1>
						<p>До шоу-рума HARD (Антоновича 12) зайшли скаути Егеря та після шопінгу рекомендують магазин всім хто по ЖЕСТІ. З 50 секунди</p>
						<iframe width="730" height="485" src="https://www.youtube.com/embed/r9uRsgI67R8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</div>
				</div>
				<div class="col-md-3">
					<div class="order-news">
						<p>новини</p>
						<hr class="red">
						<div class="order-news-info">
							<img class="season-black" src="img/blog/blog1.jpg" alt=""><br>
							<router-link v-bind:to="'/collection19'"><span>Колекція AW 19-20: HARD <br>Subculture</span></router-link>
							<hr>
							<img class="season-black" src="img/blog/blog2.jpg" alt=""><br>
							<router-link v-bind:to="'/collectionss19'"><span>Колекція HARD SS19 – Голос<br> вулиць. Drop1</span></router-link>
							<hr>
							<img class="season-black" src="img/header/logo.png" alt=""><br>
							<router-link v-bind:to="'/production'"><span>Виробництво одягу <br>на замовлення</span></router-link>
							<hr>
							<img class="season-black" src="img/order/jager.jpg" alt=""><br>
							<router-link v-bind:to="'/showroom'"><span>Команда Jägermeister рекомендує <br>новий шоу-рум HARD</span></router-link>
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
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
    components:{
        Header,
        Footer
    }
}
</script>