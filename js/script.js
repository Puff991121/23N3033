// script.js

// 确保 GSAP ScrollTrigger 已加载
gsap.registerPlugin(ScrollTrigger);

// 为每条消息创建动画
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
        start: "top 80%", // 元素进入视口 80% 时触发
        toggleActions: "play none none reverse", // 滚动返回时反转动画
      }
    }
  );
});
