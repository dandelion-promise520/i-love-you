<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { loveQuotes } from '@/static/loveQuotes '
import { useLoveTalk } from '@/store/useLoveTalk'

defineOptions({
  name: 'Me',
})

definePage({
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '土味情话',
  },
})

// 进入页面默认刷新的随机数
const randomNumber = Math.floor(Math.random() * loveQuotes.length)

// pinia数据的实例化与响应式化
const uesLoveTalkStore = useLoveTalk()
const { loveData } = storeToRefs(uesLoveTalkStore)

// 如果本地存储中没有情话，则根据随机数生成一个存在本地存储中
if (!uni.getStorageSync('LoveTalk')) {
  uesLoveTalkStore.updateLoveData(loveQuotes[randomNumber])
}

// 存储已抽取的值
let drawnValues: any = []
// 存储未抽取的值
let undrawnValues = [...loveQuotes]
// 按钮是否点击
const isClicked = ref(false)
// 计时器
let timer: NodeJS.Timeout
let currentPrizeIndex = 0

// 点击按钮
function updateData() {
  if (isClicked.value)
    return

  isClicked.value = true
  timer = setInterval(() => {
    currentPrizeIndex = (currentPrizeIndex + 1) % undrawnValues.length
    uesLoveTalkStore.updateLoveData(undrawnValues[currentPrizeIndex])
  }, 200) // 每100毫秒更新一次

  setTimeout(() => {
    clearInterval(timer)
    // 显示最终结果
    const pickedValue = undrawnValues.splice(currentPrizeIndex, 1)[0]
    drawnValues.push(pickedValue)

    // 更新pinia
    uesLoveTalkStore.updateLoveData(pickedValue)

    setTimeout(() => {
      isClicked.value = false
    }, 1000)
  }, 3000) // 3秒后停止抽奖

  if (undrawnValues.length === 0) {
    undrawnValues = [...drawnValues]
    drawnValues = []
  }
}
</script>

<template>
  <view class="h-full center flex-col justify-between px-8 pb-40 pt-20">
    <!-- 上半部分 -->
    <view class="center flex-col gap-4">
      <view class="text-white">
        每天一句小情话
      </view>
      <view class="text-[#ffc0cb]">
        {{ loveData }}
      </view>
    </view>
    <!-- 下半部分 -->
    <view class="flex flex-col gap-8">
      <button class="btn" :class="isClicked ? 'disabled' : ''" :disabled="isClicked" @click="updateData">
        换一句
      </button>
      <view class="">
        <image src="../../static/images/our1.jpg" mode="scaleToFill" style="border-radius: 18vh;" />
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.btn {
  @apply rounded-full bg-[#ffc0cb] px-6 text-white opacity-100;

  &.disabled {
    @apply opacity-60 bg-[#ffc0cb] text-white;
  }
}
</style>
