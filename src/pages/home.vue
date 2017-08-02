<template>
	<div class="home">
		<v-banner :image="image"></v-banner>
		<v-nav></v-nav>
		<router-view></router-view>
	</div>
</template>

<script>
	import banner from '@/components/banner'
	import nav from '@/components/nav'
	export default{
		components:{
			'v-banner':banner,
			'v-nav':nav
		},
		data(){
			return{
				image:[
					'static/img/banner01.png',
					'static/img/banner02.png',
					'static/img/banner03.png',
					'static/img/banner04.png',
					'static/img/banner05.png'
				],
				fixed:false
			}
		},
		created(){

		},
		mounted(){
			
		}
	}
</script>
<style lang="scss" scoped>
	.home{
		height:100%;
		background:#fff;
	}
</style>