// 注册插件
gsap.registerPlugin(ScrollTrigger);

// 为每条消息添加滚动动画
gsap.utils.toArray('.message').forEach((message, index) => {
  gsap.fromTo(
    message,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: message,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
});

// 创建时间轴 (timeline) 控制滚出图片效果
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.exit-image', // 最后一部分图片触发
    start: "top 90%", // 当到达视口底部 90% 时触发
    toggleActions: "play none none none", // 动画只触发一次
  },
});
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.exit-image2', // 最后一部分图片触发
    start: "top 90%", // 当到达视口底部 90% 时触发
    toggleActions: "play none none none", // 动画只触发一次
  },
});

// 定义滚出动画
tl.to('.exit-image', {
  opacity: 1,
  x: 50, // 向右滑动一点，增加动感
  duration: 1.5,
  ease: "power2.out",
}).to('.exit-image', {
  x: "50%", // 图片完全滚出屏幕
  duration: 1.5,
  ease: "power2.in",
});
// 定义滚出动画
tl2.to('.exit-image2', {
  opacity: 1,
  x: 50, // 向右滑动一点，增加动感
  duration: 1.5,
  ease: "power2.out",
}).to('.exit-image2', {
  x: "50%", // 图片完全滚出屏幕
  duration: 1.5,
  ease: "power2.in",
});
