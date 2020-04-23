<template>
    <div id="app">
        <Header />
           <section class="single_product">
               <div class="container">
                   <div class="single__product_wrap">
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
                        <div class="item__of_product">
                            <div class="collection_photo">
                               <div class="fotorama"
                                    data-allowfullscreen="native">
                                <img src="1.jpg" data-full="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/">
                                <img src="2.jpg" data-full="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/">
                                </div>
                            </div>
                            <div class="info__about_product">

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

