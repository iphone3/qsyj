<template>
	<div class="edit-addr-view">
		<van-address-edit :area-list="areaList" show-set-default show-search-result :address-info='editValue' :search-result="searchResult"
		 @save="onSave" @change-detail="onChangeDetail" />
	</div>
</template>

<script>
	import AreaList from './area';
	
	import {
		AddressEdit
	} from 'vant';

	export default {
		name: 'editAddrView',
		props: ['editValue'],
		components: {
			[AddressEdit.name]: AddressEdit
		},
		data() {
			return {
				areaList:AreaList,
				searchResult: []
			}
		},

		methods: {
			onSave(content) {
				/*
				address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
				addressDetail: "杭州市西湖区 黄龙万科中心"
				areaCode: "110101"
				city: "北京市"
				country: ""
				county: "东城区"
				id: "1"
				isDefault: false
				name: "张三"
				postalCode: ""
				province: "北京市"
				tel: "13000000000" 
				*/
				
				var new_addr = {
					"id": content.id,
					"name": content.name,
					"tel": content.tel,
					"address": content.city + content.county + content.addressDetail
				}
				
				// 发送ajax保存数据
				// 传递
				this.$emit('onSaveAddr', new_addr)
			},
			onChangeDetail(val) {
				if (val) {	// 地图定位
					this.searchResult = [{
						name: '黄龙万科中心',
						address: '杭州市西湖区'
					}];
				} else {
					this.searchResult = [];
				}
			}
		}
	}
</script>

<style>
</style>
