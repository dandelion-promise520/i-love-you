// utils/BackgroundAudioManager.ts
class BackgroundAudioManager {
  private audioContext: UniApp.InnerAudioContext | null = null
  private isPlaying: boolean = false

  constructor() {
    this.init()
  }

  /**
   * 初始化背景音乐
   */
  private init(): void {
    // 销毁之前的实例
    if (this.audioContext) {
      this.audioContext.destroy()
    }

    // 创建新的音频实例
    this.audioContext = uni.createInnerAudioContext()
    this.audioContext.src = 'https://bgm.ljflovezxm.cn/' // 音乐文件路径
    this.audioContext.loop = true // 循环播放
    this.audioContext.volume = 0.5 // 音量 0.5

    this.play()

    // 简单的错误处理
    this.audioContext.onError((error) => {
      console.error('背景音乐播放错误:', error)
    })
  }

  /**
   * 开始播放背景音乐
   */
  play(): void {
    if (!this.audioContext)
      return

    if (this.isPlaying) {
      console.log('背景音乐已在播放中')
      return
    }

    this.audioContext.play()
    this.isPlaying = true
    console.log('开始播放背景音乐')
  }

  /**
   * 暂停背景音乐
   */
  pause(): void {
    if (!this.audioContext || !this.isPlaying)
      return

    this.audioContext.pause()
    this.isPlaying = false
    console.log('暂停背景音乐')
  }

  /**
   * 停止背景音乐
   */
  stop(): void {
    if (!this.audioContext)
      return

    this.audioContext.stop()
    this.isPlaying = false
    console.log('停止背景音乐')
  }

  /**
   * 设置音量 (0-1)
   */
  setVolume(volume: number): void {
    if (!this.audioContext)
      return

    const validVolume = Math.max(0, Math.min(1, volume))
    this.audioContext.volume = validVolume
  }

  /**
   * 销毁音乐实例
   */
  destroy(): void {
    if (this.audioContext) {
      this.stop()
      this.audioContext.destroy()
      this.audioContext = null
    }
  }
}

// 创建全局单例
export const backgroundAudio = new BackgroundAudioManager()
export default backgroundAudio
