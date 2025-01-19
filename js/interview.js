// 脚本文件 script.js

document.addEventListener("DOMContentLoaded", () => {
  const chatBox = document.querySelector(".chat-box");
  const messages = [
    {
      speaker: "reporter",
      name: "サイチジョウ",
      text: "では、25歳以前に観光業を始めようと思ったきっかけや転機は何ですか？",
      avatar: "./img/avatar2.jpg",
    },
    {
      speaker: "boss",
      name: "社長",
      text: "私が22歳の頃、香港に留学していた時のできことです。同じく香港で留学していたアメリカ人の友人と一緒に日本を旅行する機会がありました。富士山や京都、温泉地など、日本各地を巡る中で、旅行者としての視点から日本の観光地や文化を深く体験することができました。その後、友人とアメリカに戻り、現地の観光地を訪れました。アメリカでは、観光業が宣伝活動や多様なサービスの提供において、非常に進んでいることに気づきました。その一方、日本は伝統や自然の魅力が際立つものの、観光情報の発信力や個別化されたサービスにはまだ改善の余地があると感じました。日本の観光業とアメリカの観光業を比較した経験を通じて、日本の観光業の潜在価値を再認識した。",
      avatar: "./img/laoban.jpg",
    },
    {
      speaker: "reporter",
      name: "サイチジョウ",
      text: "その時の経験が今のビジネスにどのような効果を発揮していますか？",
      avatar: "./img/avatar2.jpg",
    },
    {
      speaker: "boss",
      name: "社長",
      text: "私が富士山周辺を訪れた際、電車とバスを利用していましたが、その移動で不便さを強く感じていました。特に初めて日本に訪れる観光客にとって、公共交通機関を使って観光地を巡るのはとても大変で、手間がかかることでしょう。私はこの経験から、観光客がスムーズに移動できるよう、一日ツアーに参加する方が遥かに便利だと実感しました。ツアーに参加すれば、効率よく複数の観光地を訪れることができ、交通面でも安心できます。今はビジネスでその利便性を活かし、お客様に便利なガイド付きツアーを提供しています。",
      avatar: "./img/laoban.jpg",
    },
    {
      speaker: "reporter",
      name: "サイチジョウ",
      text: "もしその留学時のきっかけがなかったら、どのような人生を歩んでいたと思いますか？",
      avatar: "./img/avatar2.jpg",
    },
    {
      speaker: "boss",
      name: "社長",
      text: "もしその転機がなかったら、おそらく観光業に挑戦することはなかったでしょう。それこそ、他の業界でキャリアを積んでいたかもしれません。しかし、その転機があったからこそ、観光業に対する新たな視点を得て、現在のようなビジネスを築くことができたと思います。",
      avatar: "./img/laoban.jpg",
    },
  
  ];

  let messageIndex = 0;

  // 创建并加载对话框
  function loadNextMessage() {
    if (messageIndex < messages.length) {
      const messageData = messages[messageIndex];
      const messageElement = document.createElement("div");
      messageElement.classList.add("message", messageData.speaker);

      const avatarElement = document.createElement("div");
      avatarElement.classList.add("avatar");

      const imgElement = document.createElement("img");
      imgElement.src = messageData.avatar;
      imgElement.alt = `${messageData.name}头像`;

      const nameElement = document.createElement("span");
      nameElement.textContent = `${
        messageData.speaker === "reporter" ? "" : ""
      }${messageData.name}`;

      avatarElement.appendChild(imgElement);
      avatarElement.appendChild(nameElement);

      const textElement = document.createElement("p");
      textElement.classList.add("text");
      textElement.textContent = messageData.text;

      messageElement.appendChild(avatarElement);
      messageElement.appendChild(textElement);

      // 将新消息添加到聊天框
      chatBox.appendChild(messageElement);

      // 加入动态显示的动画
      setTimeout(() => {
        messageElement.classList.add("show");
      }, 100); // 延迟触发动画效果

      messageIndex++;
    }
  }

  // 初始加载第一条对话
  loadNextMessage();

  // 模拟按下按钮，逐步显示对话
  const loadButton = document.createElement("button");
  loadButton.textContent = "Next";

  loadButton.classList.add("load-button");
  document.body.appendChild(loadButton);

  loadButton.addEventListener("click", () => {
    loadNextMessage();
    // 每次点击后禁用按钮直到加载完成
    if (messageIndex === messages.length) {
      if (loadButton.textContent == "思い出") {
        window.location.href = './photo.html'
      }
    //   loadButton.disabled = true;
      loadButton.textContent = "思い出";
    }
  });
});
