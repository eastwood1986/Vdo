<template>
	<div id="tab">    
	  <mu-drawer class='drawer' :open="open" :docked="docked" @close="toggle()">
		 <!-- <img src='../../image/title.png' style="width: 100%;"/>-->
			<div class="drawer-pic" style="background:#474a4f; padding: 70px 0;text-align:center; color:#fff;">
				<div class="title" style="font-size: 32px;">艾薇豆 AVdo</div>
				<div class="description" style="font-size: 16px;color:#e0e0e0;">一个移动端Web 应用</div>
			</div>
      <mu-list value="movie"  @itemClick="docked ? '' : toggle()" @change="page">
        <mu-list-item value="movie" title="约会AV女优">
				      <mu-icon slot="left" value="movie"/>
        </mu-list-item>
			  <mu-divider shallowInset/>
        <!-- <mu-list-item value="about" 			title="关于">
					<mu-icon slot='left' value="info" />
        </mu-list-item> -->
      </mu-list>
    </mu-drawer>
		<mu-paper :zDepth="2">
			<mu-appbar title='约会AV女优'>
				<mu-icon-button icon='menu' slot="left"  @click="toggle(true)"/>
				<mu-icon-button icon='search' @click="gotoSearch()" slot='right' />
			</mu-appbar>
			<mu-tabs :value="activeTab" @change="handleTabChange">
				<!-- <mu-tab value="in_theaters" @active="handleActive" title="正在出勤" />
				<mu-tab value="coming_soon" @active="handleActive" title="即将出勤" /> -->
				<mu-tab value="in_theaters" @active="handleActive" title="美女一栏" />
			</mu-tabs>
		</mu-paper>
		<!-- <div v-if="activeTab === 'in_theaters'">
			<Card tab-name='in_theaters'></Card>
		</div>
		<div v-if="activeTab === 'coming_soon'">
			<Card tab-name='coming_soon'></Card>
		</div>	 -->
		<div v-if="activeTab === 'in_theaters'">
			<Card tab-name='in_theaters'></Card>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	import Card from './Card';
	import * as type from './../../store/movies/type';

	export default {
	  data() {
    return {
	      dialog: false,
	      open: false,
	      docked: true,
	      value: 'moive',
	    };
	  },
	  components: {
	    Card,
	  },
	  computed: mapState({
	    activeTab: state => state.movie.tab,
	  }),
	  methods: {
	    page(val) {
	      if (val === 'about') {
	        this.$router.push({ name: 'About' });
	      }
	    },
	    openDia() {
	      this.dialog = true;
	    },
	    closeDia() {
	      this.dialog = false;
	    },
	    toggle(flag) {
	      console.log('flag', flag, this);
	
	      this.open = !this.open;
	      this.docked = !flag;
	    },
	    handleTabChange(val) {
	      this.$store.dispatch(type.CHANGE_MOVIES_TAB, val);
	      // this.activeTab = val;
	    },
	    handleActive(val) {
	      console.log(`---------tab active-------------${val}`);
	    },
	    gotoSearch() {
	      this.$router.push({ name: 'MovieSearch' });
	    },
	  },
	};

</script>

<style lang="css">
#tab{
	width:100%;
	height: 100%;
}
.drawer{
	    color: #f76d6d;
    background:#f5f5f5;
}
</style>
