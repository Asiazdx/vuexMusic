<template>
    <div class="music-list">
        <div class="list-item" v-for="(item, index) in musicLists">
            <div class="avatar"@click="_play(item)">
                <img v-lazy="item.picUrl" src="item.picUrl" alt="">
            </div>
            <div class="info" @click="_play(item)">
                <div class="music-name">{{item.name}}</div>
                <div class="music-s">{{item.ar}}</div>
            </div>
            <div class="operation" @click="_showOperation(index)"><i class="icon">&#xe605;</i></div>
            <animation-menu :item="item" :index="index"></animation-menu>
        </div>
    </div>
</template>

<script>
import animationMenu from '@/components/animationMenu'

import Vue from 'vue'
import { mapGetters } from 'vuex'

export default {
    components: {
        animationMenu,
    },
    props: {
        musicLists: Array
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters([
            'listenLists',
        ])
    },
    methods: {
        _play(music) {
            this.$store.dispatch('setPlaying', false)
            this.$store.dispatch('setAudio', music)
            this.$store.dispatch('setShowPlayLoading', true)
            //查找试听列表中有没有点击中的歌
            let x = this.listenLists.findIndex((item) => {
                //判断是否是搜索列表里的(搜索结果字段不一样)
                if(item.ar && music.ar) {
                    return item.name == music.name && item.ar[0].name == music.ar[0].name
                } else if(item.artists && music.artists) {
                    return item.name == music.name && item.artists[0].name == music.artists[0].name
                }
            })
            if(x === -1) {
                this.$store.dispatch('addListenLists', music)
            }
            if (music.mp3Url) {
                this.$store.dispatch('setAudioUrl', music.mp3Url)
            } else {
                api.MusicUrl(music.id)
                    .then(res => {
                        this.$store.dispatch('setAudioUrl', res.data[0].url)
                    })
            }
        },
        _showOperation(index) {
            for (let i = 0; i < this.musicLists.length; i++) {
                if (i !== index) {
                    this.musicLists[i].menuShow = false
                }
            }
            this.musicLists[index].menuShow = !this.musicLists[index].menuShow
        },
    },
    watch: {
        musicLists() {
            for (let item of this.musicLists) {
                Vue.set(item, 'menuShow', false)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/function.scss';
.music-list {
    background: #fff;
    position: relative;
    .list-item {
        position: relative;
        height: px2rem(145px);
        border-bottom: 1px solid #ECECEC;
        display: flex;
        align-items: center;
        cursor: pointer;
        color: #fff;
        &:last-child {
            border-bottom: none;
        }
        .avatar {
            width: px2rem(100px);
            height: px2rem(100px);
            border-radius: 50%;
            overflow: hidden;
            margin: 0 px2rem(15px) 0 px2rem(25px);
            img {
                width: 100%;
            }
        }
        .info {
            flex: 1;
            white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
            .music-name {
                color:#333;
                font-size: px2rem(32px);
                font-weight: bold;
                vertical-align: middle; 
                .tag {
                    font-size: px2rem(22px);
                    color: #666;
                    line-height: px2rem(20px);
                    border: 1px solid #e53f6f;
                    border-radius: px2rem(20px);
                    padding: 0 px2rem(8px);
                    vertical-align: middle;
                    margin-left: px2rem(6px);
                }
            }
            .music-s {
                font-size: px2rem(24px);
                color: #666;
                line-height: px2rem(40px);
                margin-top:px2rem(10px);
            }
            .music-hot {
                .icon {
                    font-size: px2rem(25px);
                    display: inline-block;
                    margin-right: px2rem(5px);
                    color: #666;
                }
            }
        }
        .operation {
            width: px2rem(100px);
            color:#333;
            height: 100%;
            line-height: px2rem(145px);
            text-align: center;
            .icon{
                color:#333;
            }
        }
        
    }
}

@media screen and(min-width: 769px) {
    .list-item {
        .info {
            .music-hot {
                .icon {
                    font-size: 14px !important;
                }
            }
        }
    }
}
</style>