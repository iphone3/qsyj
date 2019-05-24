<template>
	<div class="select-addr-view">
		<van-address-list v-model="chosenAddressId" :list="addList"
		 @add="onNext" @edit="onEdit" add-button-text='下一步' />
	</div>
</template>

<script>
	import {
		AddressList
	} from 'vant';

	export default {
		name: 'selectAddrView',
		components: {
			[AddressList.name]: AddressList,
		},
		props:['addList'],
		data() {
			return {
				chosenAddressId: '1',
			}
		},

		methods: {
			onNext() {
				console.log('提交订单-下一步操作')
			},
			onEdit(item, index) {
				this.$emit('onEditAddr', index)
			}
		}
	}
</script>

<style>
</style>
