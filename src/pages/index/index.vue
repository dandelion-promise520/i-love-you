<script lang="ts" setup>
import { ref } from 'vue'

defineOptions({
  name: 'Home',
})
definePage({
  // 使用 type: "home" 属性设置首页，其他页面不需要设置，默认为page
  type: 'home',
  style: {
    // 'custom' 表示开启自定义导航栏，默认 'default'
    navigationStyle: 'custom',
    navigationBarTitleText: '爱小朱吖',
  },
})

const value = ref<number>(0)
const label = ref<string>('144p')
const imgUrl = ref<string>('../../static/images/144p.png')

const ranges = ref<Array<{ label: string, value: number, imgUrl: string }>>([
  { value: 0, label: '144p', imgUrl: '../../static/images/144p.png' },
  { value: 1, label: '240p', imgUrl: '../../static/images/240p.png' },
  { value: 2, label: '480p', imgUrl: '../../static/images/480p.png' },
  { value: 3, label: '720p', imgUrl: '../../static/images/720p.png' },
  { value: 4, label: '1080p', imgUrl: '../../static/images/1080p.png' },
])

function change() {
  imgUrl.value = ranges.value[value.value].imgUrl
  label.value = ranges.value[value.value].label
}
</script>

<template>
  <view class="h-vh bg-black">
    <view class="h-[60vh] center flex-col gap-6">
      <img :src="imgUrl">
      <view class="w-30">
        <u-dropdown active-color="pink" border-radius="10" class="select">
          <u-dropdown-item v-model="value" :title="label" :options="ranges" @change="change" />
        </u-dropdown>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.select {
  @apply center bg-white;

  ::v-deep .u-dropdown__content__mask {
    @apply hidden;
  }
}
</style>
