<template>
    <section class="header">
		<div class="container">
			<div class="row_container">
				<div class="header-logo">
					<a href="index.html"><img class="header-hard" src="img/header/logo.png" alt="Hard Kyiv" title="Головний по жесті - @hardukr - Kyiv streetwear"></a>
				</div>
				<ul class="header-menu topmenu">
					<li><a class="header-menu-nav down" href="#">Одяг</a>
						<ul class="submenu">
							<li @click="chooseType('tShort','Футболки')"><router-link v-bind:to="'/productlist'">Футболки</router-link></li>
							<li @click="chooseType('hudi', 'Худі')"><router-link v-bind:to="'/productlist'">Худі</router-link></li>
							<li @click="chooseType('shorti','Штани / Шорт')"><router-link v-bind:to="'/productlist'">Штани/Шорти</router-link></li>
							<li @click="chooseType('swetr','Світшоти')"><router-link v-bind:to="'/productlist'">Світшоти</router-link></li>
							<li @click="chooseType('kurtka','Куртки / Дощовики')"><router-link v-bind:to="'/productlist'">Куртки/Дощовики</router-link></li>
						</ul>
					</li>
					<li><router-link v-bind:to="'/contacts'">Контакти</router-link></li>
					<li><a class="header-menu-nav down" href="#">Про нас</a>
					<ul class="submenu">
							<li><router-link v-bind:to="'/production'">Виробництво одягу</router-link></li>
					</ul>
					</li>
					<li><a href="tel:+38(096)9688662">+38(096)9688662</a></li>
				</ul>	
			</div>
				<div class="hamburger-menu">
					<input id="menu__toggle" type="checkbox" />
					<label class="menu__btn" for="menu__toggle">
					<span></span>
					</label>

					<ul class="menu__box">
					<li><a class="menu__item" href="#">Главная</a></li>
							<li class="menu__item" @click="chooseType('tShort','Футболки')"><router-link  v-bind:to="'/productlist'">Футболки <svg enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  
							c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z" /></svg></router-link></li>
							<li class="menu__item" @click="chooseType('hudi', 'Худі')"><router-link v-bind:to="'/productlist'">Худі <svg enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  
							c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z" /></svg></router-link></li>
							<li class="menu__item" @click="chooseType('shorti','Штани / Шорт')"><router-link v-bind:to="'/productlist'">Штани/Шорти <svg enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  
							c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z" /></svg></router-link></li>
							<li class="menu__item" @click="chooseType('swetr','Світшоти')"><router-link v-bind:to="'/productlist'">Світшоти <svg enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  
							c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z" /></svg></router-link></li>
							<li class="menu__item" @click="chooseType('kurtka','Куртки / Дощовики')"><router-link v-bind:to="'/productlist'">Куртки/Дощовики <svg enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  
							c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z" /></svg></router-link></li>
					</ul>
				</div>
		</div>
	</section>
</template>

<script>
export default{
	data(){
		return{

		}
	},
	methods : {
		chooseType(value, value2){
			this.$store.commit('selectTypeProd', value);
			this.$store.commit('labelType', value2);
		}
	}
}

</script>