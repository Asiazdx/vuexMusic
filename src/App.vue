<template>
	<div id="app">
		<v-header></v-header>
		<div class="container">
			<transition :name="transitionName" mode="out-in">
				<router-view></router-view>
			</transition>
		</div>
		<v-playbar v-show="playBar"></v-playbar>
	<!--公用组件-->
	<v-sidebar></v-sidebar>
	<v-toast v-show="showToast"></v-toast>
	<transition name="fold">
		<v-play v-show="showPlay"></v-play>
	</transition>
	</div>

</template>

<script>
import header from './components/header'
import sidebar from './components/sidebar'
import toast from './components/toast'
import loading from './components/loading'
import playbar from '@/components/playbar'
import play from '@/components/play'
import {mapGetters} from 'vuex'
export default {
	name: 'app',
	components: {
		'v-header': header,
		'v-sidebar':sidebar,
		'v-toast':toast,
		'v-loading':loading,
		'v-playbar':playbar,
		'v-play':play
	},
	data() {
		return {
		}
	},
	computed:{
		playBar(){
			return true
		},
		...mapGetters([
			'showSidebar',
			'showToast',
			'showPlay'
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
	font-family: 'icon';
	/* project id 277165 */
	src: url('//at.alicdn.com/t/font_kmywdojzhchj8aor.eot');
	src: url('//at.alicdn.com/t/font_kmywdojzhchj8aor.eot?#iefix') format('embedded-opentype'),
	url('//at.alicdn.com/t/font_kmywdojzhchj8aor.woff') format('woff'),
	url('//at.alicdn.com/t/font_kmywdojzhchj8aor.ttf') format('truetype'),
	url('//at.alicdn.com/t/font_kmywdojzhchj8aor.svg#iconfont') format('svg');
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
	background: rgba(8, 5, 58, 0.9);
	.play-loading {
		top: 8rem;
		z-index: 99;
	}
	.container {
		flex: 1;
		overflow: auto;
		overflow-x: hidden;
	}
	.slide-left-enter-active {
		animation: slideLeft .3s;
	}
	.slide-right-enter-active {
		animation: slideRight .3s;
	}

	.fold-enter-active,
	.fold-leave-active {
		transition: transform .3s ease-in;
	}
	.fold-enter,
	.fold-leave-active {
		transform: translate3d(0, 100%, 0);
	}
}
</style>
