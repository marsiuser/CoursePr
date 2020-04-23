<template>
    	<section class="contacts">
		<div class="container wrap_container_main">
			<div class="row_container side_column">
					<div class="contacts-logo">
						<img src="img/contact/logo.jpg" alt="" class="contacts-hard">
					</div>
					<div class="contacts_sprite">
						<ul class="contacts-spisok">
							<li><a href="#">ІНФОРМАЦІЯ</a></li>
							<li><a href="about.html"><router-link v-bind:to="'/production'">Про нас</router-link></a></li>
							<li><a href="contact.html"><router-link v-bind:to="'/contacts'">Доставка</router-link></a></li>
							<li><a href="#"><router-link v-bind:to="'/production'">Чому обирають нас?</router-link></a></li>
						</ul>
						<div class="how_to_catch">
							<p class="contacts-note">Як до нас добратися?</p>
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.160852149581!2d30.510950915315725!3d50.43810447947364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce6346cbcb61%3A0x78d2f4633069e4d2!2sHard%20Kyiv%20-%20streetwear%20shop!5e0!3m2!1sru!2sua!4v1569407322777!5m2!1sru!2sua" width="300" height="200" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
						</div>
					</div>
			</div>
				<p class="contacts-note contacts-kiev">Київський бренд одягу, який відповідає твоїй жорсткості</p>
		</div>
		<div class="hline myline"></div>
		<div class="container">
			<div class="contacts-year"><p>Hard Kyiv - головний по ЖЕСТІ © 2019</p></div>
			<div class="contacts-year"><span>get social</span>
					<a href="https://www.facebook.com/hardukr" target="_blank"><img src="img/contact/face.png" width="20" alt=""></a>
					<a href="https://www.instagram.com/hardkyiv/?igshid=hfzzm8wg7p5a" target="_blank"><img src="img/contact/insta.png"  width="20" alt=""></a>
					<a href="https://t.me/hyperunner" target="_blank"><img src="img/contact/telega.png" width="20" alt=""></a>
					</div>
			</div>
	</section>
</template>

<script>
export default {
    
}
</script>