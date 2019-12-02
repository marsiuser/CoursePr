<template>
    <div>
            <Header />

                <section class="order">
		<div class="container">
			<div class="row">
				<div class="col-md-9">
					<div class="order-statya">
						<em>субота, 23 Березень 2019 /  Published in блог</em>
						<h1>Виробництво одягу на замовлення</h1>
						<p>Протягом останніх років ми системно виконуємо оптові замовлення на виробництво одягу та аксесуарів на базі продукції HARD. Останніми нашими клієнтами були: Libero, Raiffeisen digital hub, Танок на майдані Конго і Дурнев смотрит сторис. Наші переваги: найвища якість матеріалів, вже сформовані лекала, та професійне виробництво.</p>
						<span>Наші умови:</span>
						<p>Тираж та приблизна вартість (залежить від кількості принтів, їх розміру і кількості кольорів) готового виробу під ключ. Терміни від 4 тижнів:</p>
						<p>Худі-світшоти від 50-100 шт: 700-800 грн</p>
						<p>Футболки від 100-200 шт: ціна 300-400 грн</p>
						<p>Шкарпетки від 250 штук в одному кольорі і універсальному розділі: 60-65 грн</p>
						<span>Консультація та замовлення по телефону: (096) 968 8662 чи через офіційні соц сторінки HARD у FB та Instagram</span>
						<div class="order-gallery">
							<img width="297px" height="371px" src="img/order/TNMK.png" alt="">
							<img width="387px" height="auto" src="img/order/durnev.png" alt="">
						</div>
						<div class="order-secgallery">
							<img src="img/order/durnev2.png" alt="">
							<img width="597px" height="auto" src="img/order/raiffeisen-hub-768x576.jpg" alt="">
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
							<router-link v-bind:to="'/collectionss19'"><span>Колекція HARD SS19 – Голос<br> вулиць. Drop1</span></router-link>
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