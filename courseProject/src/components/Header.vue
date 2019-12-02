<template>
    <section class="header">
			<div class="container">
				<div class="row">
					<div class="col-md-2">
						<div class="header-logo">
							<a href="index.html"><img class="header-hard" src="img/header/logo.png" alt="Hard Kyiv" title="Головний по жесті - @hardukr - Kyiv streetwear"></a>
						</div>
					</div>
					<div class="col-md-7 offset-md-3">
						<div class="header-list">
									<ul class="header-menu topmenu">
							<li><a class="header-menu-nav down" href="#">Одяг</a>
								<ul class="submenu">
									<li @click="chooseType('tShort','Футболки')"><router-link v-bind:to="'/productlist'">Футболки</router-link></li>
									<li  @click="chooseType('hudi', 'Худі')"><router-link v-bind:to="'/productlist'">Худі</router-link></li>
									<li @click="chooseType('shorti','Штани / Шорт')"><router-link v-bind:to="'/productlist'">Штани/Шорти</router-link></li>
									<li @click="chooseType('swetr','Світшоти')"><router-link v-bind:to="'/productlist'">Світшоти</router-link></li>
									<li @click="chooseType('kurtka','Куртки / Дощовики')"><router-link v-bind:to="'/productlist'">Куртки/Дощовики</router-link></li>
						  		</ul>
						  </li>
							<li><router-link v-bind:to="'/contacts'">	Контакти</router-link></li>
							<li><a class="header-menu-nav down" href="#">Про нас</a>
							<ul class="submenu">
									<li><router-link v-bind:to="'/production'">Виробництво одягу</router-link></li>
							</ul>
							</li>
							<li><a href="#">+38(096)9688662</a></li>
							<li><form class="header-menu-search"><input type="search" placeholder=""></form></li>
						</ul>		
					</div>
				</div>
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