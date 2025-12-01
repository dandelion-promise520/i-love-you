import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoveTalk = defineStore('LoveTalk', () => {
  // 默认的数据，如果本地存储里有，就转换出json的值作为字符串展示在页面中
  let defaultData
  if (uni.getStorageSync('LoveTalk')) {
    defaultData = JSON.parse(uni.getStorageSync('LoveTalk')).loveData
  }
  else {
    // 没有数据就让他为null，json.parse不能转换空值
    defaultData = null
  }

  // console.log(defaultData);

  // ref将其变为本地存储的变量
  const loveData = ref(defaultData)

  // 更新情话的方法
  const updateLoveData = (value: string) => {
    loveData.value = value
  }
  return { loveData, updateLoveData }
}, {
  persist: {
    storage: {
      setItem(key, value) {
        uni.setStorageSync(key, value)
      },
      getItem(key) {
        return uni.getStorageSync(key)
      },
    },
  },
})
