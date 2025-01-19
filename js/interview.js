// 脚本文件 script.js

document.addEventListener("DOMContentLoaded", () => {
  const chatBox = document.querySelector(".chat-box");
  const messages = [
    {
      speaker: "reporter",
      name: "サイチジョウ",
      text: "虞さん、最初に観光業を始めた理由はなんでしょうか。その上、Gogoday旅行会社を創業となったきっかけはなんでしょうか。",
      avatar: "./img/avatar2.jpg",
    },
    {
      speaker: "boss",
      name: "社長",
      text: "正直なところ、観光業を始めた理由は、市場のポテンシャルを感じたからです。日本は世界的に有名な観光大国であり、毎年多くの観光客を魅了しています。富士山、京都、温泉、伝統工芸など、どの地域にも独自の魅力があります。その中、観光客数が増加している一方で、旅行サービスの質や体験にはまだ改善の余地があると感じました。私はこの機会を活かし、より高品質で個別化されたサービスを提供し、運営効率を向上させることで、この業界で持続的な成長と利益を得られると考えました。Gogoday旅行会社を創業した目的は、優れたサービスを提供するだけでなく、規模を拡大して、会社が長期的に収益を上げられるシステムを形成するためです。また、旅行を通じてお客様に幸せな体験を提供するし、地域経済の発展に貢献することで、私にとって大きく達成感をもたらしてくれます。",
      avatar: "./img/laoban.jpg",
    },

    {
      speaker: "reporter",
      name: "サイチジョウ",
      text: "では、25歳以前に観光業を始めようと思ったきっかけや転機は何ですか？",
      avatar: "./img/avatar2.jpg",
    },
    {
      speaker: "boss",
      name: "社長",
      text: "私が22歳の頃、香港に留学していた時のできことです。同じく香港で留学していたアメリカ人の友人と一緒に日本を旅行する機会がありました。富士山や京都、温泉地など、日本各地を巡る中で、旅行者としての視点から日本の観光地や文化を深く体験することができました。その後、友人とアメリカに戻り、現地の観光地を訪れました。アメリカでは、観光業が宣伝活動や多様なサービスの提供において、非常に進んでいることに気づきました。その一方、日本は伝統や自然の魅力が際立つものの、観光情報の発信力や個別化されたサービスにはまだ改善の余地があると感じました。日本の観光業とアメリカの観光業を比較した経験を通じて、日本の観光業の潜在価値を再認識した。私はより高品質な観光サービスを提供することで、国内外の観光客に感動的な体験を届けたいと思うようになりました。留学時の旅が、観光業に挑戦する決意を固めた大きなきっかけでした。",
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
    
    {
      speaker: "reporter",
      name: "サイチジョウ",
      text: "これまで、観光業には多くの困難を乗り越えてきた。例えば、コロナ禍や激しい市場競争などがありました。その際、会社のリーダーとして、これらの困難にどう対応してきたのでしょうか？",
      avatar: "./img/avatar2.jpg",
    },
    {
      speaker: "boss",
      name: "社長",
      text: "コロナウイルスが流行した時、観光業はほぼ停滞し、私たちの旅行業務も完全に停止していました。私たちのような会社にとっては、前例のない試練でした。だが、幸いなことに、この困難を乗り越えることができました。理由としては、上野ホテルと修善寺温泉ホテルが支えの柱となったのです。また、コロナ時期は地元サービスの需要が増加し、ホテル内の薬局、地元住民や観光客にとって必需品の供給源となることで営業収入を維持することができました。私たちはこの特異な時期に対応するため、直ちに戦略を見直し、長期滞在プランやリモートワークのサービスを導入して、特に一時的な住所が必要なビジネス客にターゲットを移しました。",
      avatar: "./img/laoban.jpg",
    },
    {
      speaker: "reporter",
      name: "サイチジョウ",
      text: "最後に、観光業に活躍したい若者たちに何かアドバイスはございますか？",
      avatar: "./img/avatar2.jpg",
    },
    {
      speaker: "boss",
      name: "社長",
      text: "観光業は忍耐力と創造力が求められる業界です。特に、訪れるお客様一人一人に心を込めたサービスを提供することが大切です。まだお若い皆さまには、まずたくさん観察し、体験してから、旅行者の本当のニーズを知ることをお勧めします。また、革新を恐れず、新しいビジネスモデルやアイデアに挑戦することも重要です。そして、何よりも大切なのは、観光業の本来の目的を忘れないこと——それは、旅する人々に幸せと満足を提供することです。",
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
