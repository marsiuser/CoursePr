<template>
    <div>
        <Header />
                <section class="order">
		<div class="container">
			<div class="row">
				<div class="col-md-9">
					<div class="order-statya order-mestatya">
						<div class="order-collection">
							<div class="order-tem">
								<img src="img/colection19/slaid20.jpg" alt="" width="820" height="auto">
							</div>
						</div>
						<em>субота, 23 Березень 2019 /  Published in блог</em>
						<h1>Колекція AW 19-20: HARD Subculture</h1>
						<p>Субкультура — це спосіб життя, стиль мислення окремих соціальних груп переважно молодого віку всередині суспільства.</p>
						<p>Молодь націлена на зміни та створення нового. Це пов’язано з притаманною їй критичністю та уявленням, що «історія починається з нас».</p>
						<p>Бренду HARD  5 років</p>
						<p>Ми не тільки спостерігали за появою нової української streetwear-культури, а й були безпосередніми учасниками процесу.</p>
						<p>Зараз субкультури стали головним джерелом натхнення в сучасній моді, музиці, культурі. Те, що зароджується в головах невеликої групи людей, через півроку вже зводить мільйони з розуму.</p>
						<p>Нова колекція HARD – це знак поваги до субкультур, що змінили правила гри в усьому світі, та зроблять це ще не раз.</p>
						<p>Нова колекція у наявності в шоурумі HARD (Київ, Антоновича 12).</p>
						<div class="order-clother">
							<img src="img/colection19/1.jpg" alt="">
							<img src="img/colection19/2.jpg" alt="">
							<img src="img/colection19/3.jpg" alt="">
							<img src="img/colection19/4.jpg" alt="">
							<img src="img/colection19/5.jpg" alt="">
							<img src="img/colection19/6.jpg" alt="">
							<img src="img/colection19/7.jpg" alt="">
							<img src="img/colection19/8.jpg" alt="">
							<img src="img/colection19/9.jpg" alt="">
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="order-news">
						<p>новини</p>
						<hr class="red">
						<div class="order-news-info">
							<img class="season-black" src="img/header/logo.png" alt=""><br>
							<router-link v-bind:to="'/production'"><span>Виробництво одягу <br>на замовлення</span></router-link>
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