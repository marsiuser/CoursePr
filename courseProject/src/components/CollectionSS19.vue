<template>
<div>
    <Header />
            <section class="order">
		<div class="container">
			<div class="row">
				<div class="col-md-9">
					<div class="order-statya order-mestatya order-cole">
						<div class="order-collection">
							<div class="order-tem order-cols">
								<img src="img/collectionSS19/ss19-promo.jpg" alt="" width="820" height="auto">
							</div>
						</div>
						<em>субота, 23 Березень 2019 /  Published in блог</em>
						<h1>Колекція HARD SS19 – Голос вулиць. Drop1</h1>
						<p>«Кращий показ мод – на вулиці. Так завжди було. І так завжди буде »(с). Найсміливіші та зухвалі не сидять вдома. Вони в пошуках нового. Вони відкриті. Вони слухають. Голос вулиць може бути жорстким, але хто ще скаже правду? Бренд HARD для сміливих і зухвалих. Кого не цікавить чужа думка. Хто кожен раз ставить собі нові цілі і робить все, щоб їх досягти.</p>
						<p><b>Голос вулиць – нова колекція київського бренду HARD – SS19.</b> Нас надихав Київ, його вулиці та мешканці.</p>
						<p>Іноді, ЖЕСТЬ, яка відбувається навколо тебе, не вдаєтся описати одним словом. Для таких ситуацій є <b>принт ЖЕСТЬЖЕСТЬЖЕСТЬ</b></p>
						<p>Принт <b>ЖЕСТЬЖЕСТЬЖЕСТЬ</b> – це перевидання найпопулярнішого принта київського бренду HARD з літньої колекції 2017. Принт, який задав вектор розвитку бренду на довгі роки.</p>
						<p><b>Принт ДИЧЬ</b> – це переосмислення жовтої футболки DHL від бренду Vetements, ціна якої, в момент релізу, була 185 фунтів. Це ще раз доводить, що ціни на streetwear бренди залежать не від собівартості, а від попиту. Але streetwear бренди повинні бути доступні на вулиці. Принт ДИЧЬ показує відношення HARD до тренду завищених цін на вуличну моду.</p>
						<p>В останні роки Київ став туристичним центром і сверхконцептуальним місцем, у який всі летять. Кияни раді бачити всіх у нашому гостинному місті. Але деяким туристам ми раді трошки більше. Цьому присвячений принт <b>Welcome to Kyiv</b> з нової колекції HARD SS19.</p>
						<div class="order-clother">
							<img src="img/collectionSS19/1.jpg" alt="">
							<img src="img/collectionSS19/2.jpg" alt="">
							<img src="img/collectionSS19/4.jpg" alt="">
							<img src="img/collectionSS19/5.jpg" alt="">
							<img src="img/collectionSS19/6.jpg" alt="">
						</div>
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
							<router-link v-bind:to="'/production'"><span>Виробництво одягу <br>на замовлення</span></router-link>
							<hr>
							<img class="season-black" src="img/order/tg.png" alt=""><br>
							<router-link v-bind:to="'/telegramChannel'"><span>Hyperunner – Телеграм канал <br> засновника бренду HARD</span></router-link>
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