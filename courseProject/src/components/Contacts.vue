<template>
<div>
	<Header />
	<section class="location">
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<div class="location-nav">
						<h4>Шоу-рум HARD</h4>
						<p>Шоу-рум HARD <br>
							м.Київ. ст.м. Льва Толстого, вул. Антоновича 12. <br><br>
							Шоу-рум знаходиться справа, після входу в арку. <br>
							Графік роботи: ПН.-ПТ.: с 14.00 до 19.00 <br>
							Сб-Нед,: с 13.00-17.00 <br>
							УВАГА! Обов’язково попереджуйте про свій візит за телефоном: +38(063) 7815266 ,  <br>Шоу-рум може зачинятися на незначний час.</p>
					</div>
				</div>
				<div class="col-md-6">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d267.10672026229815!2d30.513072711698943!3d50.43808873084316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce6346cbcb61%3A0x78d2f4633069e4d2!2sHard%20Kyiv%20-%20streetwear%20shop!5e0!3m2!1sru!2sua!4v1569509233761!5m2!1sru!2sua" width="480" height="370" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
				</div>
			</div>
			<div class="row">
				<div class="col-md-8">
					<div class="location-features">
						<span>навіщо до нас приходити?</span>
						<ul>
							<li>Шоу-рум у самому центрі Києва</li>
							<li>Екслюзивні, до 50%, знижки на деякі товари (в залежності від сезону)</li>
							<li>Проконсультуємо стосовно кожної моделі, познайомимо з філософією бренду та забезпечимо персональний підхід кожному клієнту!</li>
							<li>У нас в наявності не тільки весь асортимент HARD, але і новинки, які ще не з’явились на сайті, та в інших магазинах</li>
						</ul>
						<span>інші магазини:</span>
						<p>Бренд HARD представлений в магазинах Києва та інших міст. Ми не можемо гарантувати наявність конкретної моделі або розміру у потрібному Вам магазині. Але ми пропонуємо зручні умови доставки, які дозволять Вам вибрати Ваший власний HARD.</p>
					</div>
				</div>
				<div class="col-md-4">
					<div class="location-image">
						<img width="350px" height="220px" src="img/order/show2.jpg" alt="">
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-8">
					<div class="location-delivery">
						<span>кур`єрська доставка:</span>
						<ul>
							<li>Центр Києва (центр, цирк, лук'янівська, вокзал, подол) - 50грн.</li>
							<li>Інші частини Києва - 75грн.</li>
							<li>Кур'єр може з собою взяти декілька варіантів речи або розмірів для вибору.</li>
						</ul>
						<span>доставка новою поштою:</span>
						<div class="price">
							<ul>
							<li>Доставка Новою поштою від 40 грн. відповідно до тарифа оператора</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="location-image">
						<img width="350px" src="img/order/harddostavka.jpg" alt="">
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
					<div class="location-features location-why">
						<span>Ми завжди відкриті для співпраці з новими партнерами на взаємовигідних умовах</span>
				</div>
			</div>
			<div class="row justify-content-center">
					<div class="location-why location-me">
						<a href="https://www.facebook.com/hardukr">Facebook</a>
					</div>
			</div>
			<div class="row justify-content-center location-features">
					<p>або телефонуйте: +38096 9688662 Іван.</p>
			</div>
			<div class="row justify-content-center location-features location-ff">
					<p>ми з радістю розповімо Вам про переваги роботи з нами.</p>
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
	},
    data: function(){
		return{

		}
	},
	methods: {
		goToStart(){
			this.$router.push('/');
		}
	}
}
</script>