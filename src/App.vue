<template>
	<div id="app">
		<v-header></v-header>
		<div class="container">
			<transition :name="transitionName" mode="out-in">
				<router-view></router-view>
			</transition>
		</div>
	<!--公用组件-->
	<v-sidebar></v-sidebar>
	<v-toast v-show="showToast"></v-toast>
	</div>

</template>

<script>
import header from './components/header'
import sidebar from './components/sidebar'
import toast from './components/toast'

import {mapGetters} from 'vuex'
import api from './api'
export default {
	name: 'app',
	components: {
		'v-header': header,
		'v-sidebar':sidebar,
		'v-toast':toast
	},
	data() {
		return {
		}
	},
	computed:{
		...mapGetters([
			'showSidebar',
			'showToast'
		]),
	transitionName(){
		switch(this.$route.path){
			case '/collection':
			return 'slide-left'
			default:
			return 'slide-right'
		}
	}
	}
}
</script>

<style lang="scss">
@import './assets/css/function';

@font-face {
  font-family: 'iconfont';  /* project id 369220 */
  src: url('//at.alicdn.com/t/font_r03k61pzg7dgqfr.eot');
  src: url('//at.alicdn.com/t/font_r03k61pzg7dgqfr.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_r03k61pzg7dgqfr.woff') format('woff'),
  url('//at.alicdn.com/t/font_r03k61pzg7dgqfr.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_r03k61pzg7dgqfr.svg#iconfont') format('svg');
}

.icon {
	font-family: "icon" !important;
	font-size: 18px;
	font-style: normal;
	color: #ffffff;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	display: flex;
	flex-direction: column;
	height: 100%;
	background: rgba(255, 255, 255, 1);
}
</style>
