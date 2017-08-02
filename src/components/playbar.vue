<template>
	<div class="playbar">
        <div class="play-box">
            <div class="music-avatar" @click="showPlay()">
                <img alt="" src="/static/img/yinyue.png">
            </div>
            <div class="music-info" @click="showPlay()">
                <div class="music-s">{{audio[0].name}}</div>
                <div class="music-s">{{audio[0].ar}}
                </div>
            </div>
            <div class="music-play">
                <i class="icon" v-if="playing" @click="_pause()">&#xe60a;
                </i>
                <i class="icon" v-else @click="_play()">&#xe606;</i>
            </div>
            <div class="music-next" @click="_next()"><i class="icon">&#xe718;</i>
            </div>
            <div class="music-list" @click="showList()">
                <i class="icon">&#xe927;</i>
            </div>
        </div>
        <div class="progress-bar">
            <div class="play" :style="{width:(now/duration).toFixed(3)*100+'%'}"></div>
        </div>
        <audio preload ref="myAudio" :src=audio[0].audioUrl @ended="_next()"></audio>
        
</div>
</template>
<script>
import {mapGetters} from 'vuex'
import * as _ from '../util/tool'
export default{
	components:{
		
	},
	data(){
		return{
			now:'',
			duration:'200.045714',
		}
	},
	computed:{
		...mapGetters([
			'listenList',
			'audio',
			'audioUrl',
			'showListenList',
			'playing',
			'size'
		]),
	},
	mounted(){
		let timer;
		this.$refs.myAudio.addEventListener('play',()=>{
			timer=setInterval(()=>{
				this.duration=this.$refs.myAudio.duration;
				this.now=this.$refs.myAudio.currentTime
			},1000)
		})
		this.$refs.myAudio.addEventListener('pause',()=>{
			clearInterval(timer)
		})
	},
	watch:{
		playing(){
			this.playing?this.$refs.myAudio.play(): this.$refs.myAudio.pause()
		},
		audio(){
			this.$store.dispatch('getMusicInfo',this.audio[0].id)
			this.now=0;
			this.$refs.myAduio.addEventListener('error',()=>{
				_.toast('获取音乐出错...')
			})
		}
	},
	methods:{
		_play(){
			this.$store.dispatch('setPlaying',true)
		},
		_pause(){
			this.$store.dispatch('setPlaying',false)
		},
		_next(){
			_.toast('开发中，敬请期待');
		},
		showList(){
			_.toast('开发中，敬请期待')
		},
		showPlay(){
			this.$store.dispatch('setShowPlay',true)
		}
	},
}
</script>
<style lang="scss" scoped>
	@import '../assets/css/function';

.playbar {
    background: #D4303B;
    transition: all .7s ease-in;
    .play-box {
        display: flex;
        align-items: center;
        height: px2rem(110px);
        color: #fff;
        cursor: pointer;
        .music-avatar {
            width: px2rem(80px);
            height: px2rem(80px);
            border-radius: 50%;
            text-align:center;
            line-height:px2rem(80px);
            margin: 0 px2rem(20px) 0 px2rem(30px);
            overflow: hidden;
            img {
                width: 100%;
            }
        }
        .music-info {
            flex: 4;
            .music-name {
                font-size: px2rem(30px);
                font-weight: bold;
            }
            .music-s {
                font-size: px2rem(22px);
                color: rgba(255, 255, 255, .7);
                margin-top: px2rem(5px);
            }
        }
        .music-play,
        .music-next,
        .music-list {
            flex: 1;
            height: 100%;
            line-height: px2rem(110px);
            cursor: pointer;
            .icon {
                font-size: px2rem(44px);
                display: block;
            }
        }
    }
    .progress-bar {
        height: px2rem(4px);
        background: linear-gradient(#902541, #902444);
        .play {
            height: 100%;
            background: #fe7498;
        }
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