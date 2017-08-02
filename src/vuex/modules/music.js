import api from '../../api'
import * as types from '../types'
const state={
	popularLists:[],
	classicalLists:[],
	lightLists:[],
	radioLists:[],
	listenLists:localStorage.musiclists?JSON.stringify(localStorage.musiclists):[
		{ 
			"id":17001,
			"name":"追光者",
			"ar":"岑宁儿",
			"picUrl":"../../static/img/pop01.jpg",
			"audioUrl":"../../static/audio/pop01.mp3"
		},
		{
	  		"id":17002,
	  		"name":"Numb",
	  		"ar":"LinkPark",
	  		"picUrl":"../../static/img/pop02.jpg",
	  		"audioUrl":"../../static/aduio/pop02.mp3",
		}
	],
	audio:localStorage.musiclists?JSON.stringify(localStorage.musiclists).slice(0,1):[
		{ 
			"id":17001,
			"name":"追光者",
			"ar":"岑宁儿",
			"picUrl":"../../static/img/pop01.jpg",
			"audioUrl":"../../static/aduio/pop01.mp3"
		},
		{
	  		"id":17002,
	  		"name":"Numb",
	  		"ar":"LinkPark",
	  		"picUrl":"../../static/img/pop02.jpg",
	  		"audioUrl":"../../static/audio/pop02.mp3"
	    },
	    {
	      "id":17003,
	      "name":"再也没有",
	      "ar":"Ryan.B",
	      "picUrl":"../../static/img/pop03.jpg",
	      "audioUrl":"../../static/audio/pop03.mp3"
		},
		{
	      "id":17004,
	      "name":"越过山丘",
	      "ar":"杨宗纬",
	      "picUrl":"../../static/img/pop04.jpg",
	      "audioUrl":"../../static/audio/pop04.mp3"
		},
	    {
	      "id":17005,
	      "name":"童话镇",
	      "ar":"陈一发儿",
	      "picUrl":"../../static/img/pop05.jpg",
	      "audioUrl":"../../static/audio/pop05.mp3"
	    },
	    {
	      "id":17006,
	      "name":"成都",
	      "ar":"赵雷",
	      "picUrl":"../../static/img/pop06.jpg",
	      "audioUrl":"../../static/audio/pop06.mp3"
	    },
	    {
	    	"id":17007,
	    	"name":"昨夜小楼又东风",
	    	"ar":"西宇",
	    	"picUrl":"../../static/img/pop07.jpg",
	    	"audioUrl":"../../static/audio/pop07.mp3"
	    }

	],
	audioUrl:'',
	lyric:'',
	size:'',
	playing:false,//是否正在播放
}
const actions={
	//添加试听列表
	addListenLists({commit},music){
		commit(types.ADD_LISTEN_LIST,music)
	},
	//清空试听列表
	removeListenLists({commit}){
		commit(types.REMOVE_LISTEN_LISTS)
	},
	//添加所有音乐到试听列表
	addAllToListenLists({commit},musiclists){
		commit(types.ADD_ALL_TO_LISTEN_LISTS,musiclists)
	},
	//获取热门音乐
	getPopularLists({commit}){
		if(localStorage.popularmusics!=='[]'&&localStorage.popularmusics){
			setTimeout(()=>{
				commit(types.COM_SHOW_LOADING,false);
				commit(types.GET_POPULAR_LISTS,JSON.parse(localStorage.popularmusics));
			},500)
			return;
		}
		localStorage.popularmusics=JSON.stringify([
			{ 
				"id":17001,
				"name":"追光者",
				"ar":"岑宁儿",
				"picUrl":"../../static/img/pop01.jpg",
				"audioUrl":"../../static/audio/pop01.mp3"
			},
			{
	      		"id":17002,
	      		"name":"Numb",
	      		"ar":"LinkPark",
	      		"picUrl":"../../static/img/pop02.jpg",
	      		"audioUrl":"../../static/audio/pop02.mp3"
	    	},
		    {
		      "id":17003,
		      "name":"再也没有",
		      "ar":"Ryan.B",
		      "picUrl":"../../static/img/pop03.jpg",
		      "audioUrl":"../../static/audio/pop03.mp3"
		    },
		    {
		      "id":17004,
		      "name":"越过山丘",
		      "ar":"杨宗纬",
		      "picUrl":"../../static/img/pop04.jpg",
		      "audioUrl":"../../static/audio/pop04.mp3"
		    },
		    {
		      "id":17005,
		      "name":"童话镇",
		      "ar":"陈一发儿",
		      "picUrl":"../../static/img/pop05.jpg",
		      "audioUrl":"../../static/audio/pop05.mp3"
		    },
		    {
		      "id":17006,
		      "name":"成都",
		      "ar":"赵雷",
		      "picUrl":"../../static/img/pop06.jpg",
		      "audioUrl":"../../static/audio/pop06.mp3"
		    },
		    {
		    	"id":17007,
		    	"name":"昨夜小楼又东风",
		    	"ar":"西宇",
		    	"picUrl":"../../static/img/pop07.jpg",
		    	"audioUrl":"../../static/audio/pop07.mp3"
		    }
	])

	},
	//获取古典歌曲
	getClassicalLists({commit}){
		if(localStorage.classicalmusics!=='[]'&&localStorage.classicalmusics){
			setTimeout(()=>{
				commit(types.COM_SHOW_LOADING,false)
				commit(types.GET_CLASSICAL_LISTS,JSON.parse(localStorage.classicalmusics))
			},500)
			return;
		}
		localStorage.classicalmusics=JSON.stringify([
			{
				"id":17101,
				"name":"三国恋",
				"ar":"尚雯婕",
				"picUrl":"/static/img/cal01.png",
				"audioUrl":"/static/audio/cal01.mp3",
			},
			{
				"id":17102,
				"name":"勋章",
				"ar":"鹿晗",
				"picUrl":"/static/img/cal02.jpg",
				"audioUrl":"/static/audio/cal02.mp3",
			},
			{
				"id":17103,
				"name":"下个路口见",
				"ar":"李宇春",
				"picUrl":"/static/img/cal03.jpg",
				"audioUrl":"/static/audio/cal03.mp3",
			},
			{
				"id":17104,
				"name":"她来听我的演唱会",
				"ar":"张学友",
				"picUrl":"/static/img/cal04.jpg",
				"audioUrl":"/static/audio/cal04.mp3",
			},
			{
				"id":17105,
				"name":"凉凉",
				"ar":"张碧晨",
				"picUrl":"/static/img/cal05.jpg",
				"audioUrl":"/static/audio/cal05.mp3",
			},
			{
				"id":17106,
				"name":"隐形的翅膀",
				"ar":"张韶涵",
				"picUrl":"/static/img/cal06.png",
				"audioUrl":"/static/audio/cal06.mp3",
			},
			{
				"id":17107,
				"name":"年轮",
				"ar":"张碧晨",
				"picUrl":"/static/img/cal07.jpg",
				"audioUrl":"/static/audio/cal07.mp3",
			}
		])
	},
	//获取轻音乐歌曲
	getLightLists({commit}){
		commit(types.COM_SHOW_LOADING,true)
		if(localStorage.lightmusics!=='[]'&&localStorage.lightmusics){
			setTimeout(()=>{
				commit(types.COM_SHOW_LOADING,false);
				commit(types.GET_LIGHT_LISTS,JSON.parse(localStorage.lightmusics))
			},500)
			return;
		}
		localStorage.lightmusics=JSON.stringify([
			{
				"id":17201,
				"name":"告白气球",
				"ar":"周杰伦",
				"picUrl":"/static/img/lt01.jpg",
			},
			{
				"id":17202,
				"name":"刚刚好",
				"ar":"薛之谦",
				"picUrl":"/static/img/lt02.jpg",
			},
			{
				"id":17203,
				"name":"遗憾",
				"ar":"赵天宇",
				"picUrl":"/static/img/lt03.jpg",
			},
			{
				"id":17204,
				"name":"消愁",
				"ar":"毛不易",
				"picUrl":"/static/img/lt04.jpg",
			},
			{
				"id":17205,
				"name":"她说",
				"ar":"张碧晨",
				"picUrl":"/static/img/cal06.png",
			},
			{
				"id":17206,
				"name":"刚好遇见你",
				"ar":"李玉刚",
				"picUrl":"/static/img/lt06.jpg",
			},
			{
				"id":17207,
				"name":"借过",
				"ar":"印子月",
				"picUrl":"/static/img/lt07.jpg",
			}
		])
	},
	//获取电台歌曲
	getRadioLists({commit}){
		commit(types.COM_SHOW_LOADING,false)
		if(localStorage.radiomusics!=='[]'&&localStorage.radiomusics){
			setTimeout(()=>{
				commit(types.COM_SHOW_LOADING,false)
				commit(types.GET_RADIO_LISTS,JSON.parse(localStorage.radiomusics))
			},500)
			return;
		}
		localStorage.radiomusics=JSON.stringify([
			{
				"id":17301,
				"name":"逆流成河",
				"ar":"金南岭",
				"picUrl":"/static/img/ra01.jpg",
			},
			{
				"id":17302,
				"name":"小巷",
				"ar":"方雨晨",
				"picUrl":"/static/img/ra02.jpg",
			},
			{
				"id":17303,
				"name":"爱河",
				"ar":"神马天团",
				"picUrl":"/static/img/ra03.jpg",
			},
			{
				"id":17304,
				"name":"小苹果",
				"ar":"筷子兄弟",
				"picUrl":"/static/img/ra04.jpg",
			},
			{
				"id":17305,
				"name":"今宵醉酒何处",
				"ar":"周传雄",
				"picUrl":"/static/img/ra05.jpg",
			},
			{
				"id":17306,
				"name":"断桥残雪",
				"ar":"许嵩",
				"picUrl":"/static/img/ra06.jpg",
			},
			{
				"id":17307,
				"name":"贝加尔湖畔",
				"ar":"李建",
				"picUrl":"/static/img/ra07.jpg",
			}
		])
	},
	//设置此时播放的音乐
	setAudio({commit},music){
		commit(types.SET_AUDIO,music)
	},
	//设置播放的音乐url
	setAudioUrl({commit},url){
		commit(types.SET_AUDIO_URL,url)
	},
	//上一曲
	setNextAudio({commit},index){
		commit(types.SET_NEXT_AUDIO,index)
	},
	//下一曲
	setPreAudio({commit},index){
		commit(types.SET_PRE_AUDIO,index)
	},
	//播放、暂停
	setPlaying({commit},status){
		commit(types.SET_PLAYING,status)
	},
	//删除试听列表的歌曲
	deleteMusic({commit},index){
		commit(types.DELETE_MUSIC,index)
	},
	//获取歌词
	getMusicInfo({commit},id){
		api.MusicLyric({id})
		.then((res)=>{
			res.lrc? commit(types.GET_MUSIC_LYRIC,res.lrc.lyric):commit(types.GET_MUSIC_LYRIC,'');
		})
	},
	//歌曲总时间
	getMusicTime({commit},size){
		commit(types.GET_MUSIC_TIME,size)
	}

}
const getters={
	listenLists:state=>state.listenLists,
	popularLists:state=>state.popularLists.slice(0,20),
	radioLists:state=>state.radioLists.slice(0,20),
	listenLists:state=>state.radioLists.slice(0,20),
	lightLists:state=>state.lightLists.slice(0,20),
	classicalLists:state=>state.classicalLists.slice(0,20),
	audio:state=>state.audio,
	audioUrl:state=>state.audioUrl,
	playing:state=>state.playing,
	lyric:state=>state.lyric,
	size:state=>state.size
}
const mutations={
	[types.ADD_LISTEN_LIST](state,music){
		state.listenLists.push(music)
		localStorage.musiclists=JSON.stringify(state.listenLists)
	},
	[types.REMOVE_LISTEN_LISTS](state,music){
		state.listenLists=[]
		localStorage.musiclists=[]
	},
	[types.ADD_ALL_TO_LISTEN_LISTS](state,musiclists){
		state.listenLists=[...state.listenLists,...musiclist]
		localStorage.musiclists=JSON.stringify(state.listenLists)
	},
	[types.GET_POPULAR_LISTS](state,res){
		state.popularLists=res
	},
	[types.GET_CLASSICAL_LISTS](state,res){
		state.classicalLists=res
	},
	[types.GET_LIGHT_LISTS](state,res){
		state.lightLists=res
	},
	[types.GET_RADIO_LISTS](state,res){
		state.radioLists=res
	},
	[types.SET_AUDIO](state,music){
		state.audio=[music]
	},
	[types.SET_AUDIO_URL](state,url){
		state.audioUrl=url
	},
	[types.SET_NEXT_AUDIO](state,index){
		let i=index===state.listenLists.length-1?0:(++index)
		state.audio=[state.listenLists[i]]
	},
	[types.SET_PRE_AUDIO](state,index){
		let i=index==0? state.listenLists.length-1:(--index)
		state.audio=[state.listenLists[i]]
	},
	[types.SET_PLAYING](state,status){
		state.playing=status
	},
	[types.DELETE_MUSIC](state,index){
		state.listenLists.splice(index,1)
	},
	[types.GET_MUSIC_LYRIC](state,playload){
		state.lyric=playload
	},
	[types.GET_MUSIC_TIME](state,playload){
		state.size=playload
	}

}
export default{
	state,
	actions,
	getters,
	mutations
}