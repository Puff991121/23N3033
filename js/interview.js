// 脚本文件 script.js

document.addEventListener('DOMContentLoaded', () => {
  const chatBox = document.querySelector('.chat-box');
  const messages = [
      {
          speaker: 'reporter',
          name: '左一丞',
          text: '虞さん、最初に観光業を始めた理由はなんでしょうか。その上、Gogoday旅行会社を創業となったきっかけはなんでしょうか。',
          avatar: './img/avatar2.jpg'
      },
      {
          speaker: 'boss',
          name: '虞丁心',
          text: '正直なところ、観光業を始めた理由は、市場のポテンシャルを感じたからです。日本は世界的に有名な観光大国であり、毎年多くの観光客を魅了しています。富士山、京都、温泉、伝統工芸など、どの地域にも独自の魅力があります。その中、観光客数が増加している一方で、旅行サービスの質や体験にはまだ改善の余地があると感じました。私はこの機会を活かし、より高品質で個別化されたサービスを提供し、運営効率を向上させることで、この業界で持続的な成長と利益を得られると考えました。',
          avatar: './img/laoban.jpg'
      },
      {
          speaker: 'reporter',
          name: '左一丞',
          text: 'Gogodayというブランド名はとてもユニークで面白いですね。この名前に込められた意味やブランドの核心的な理念について教えていただけますか？',
          avatar: './img/avatar2.jpg'
      },
      {
          speaker: 'boss',
          name: '虞丁心',
          text: '「Gogoday」という名前は、「生きてる毎日が楽しくあるべきだ」というシンプルな考えから生まれました。旅行でも日常生活でも、それぞれに素晴らしい瞬間が存在します。私たちは、心温まる、そして思い出に残るサービスを通じて、すべてのお客様に特別な旅行体験を提供したいと考えています。たとえ短い一日でも、それが人生の中で最も素晴らしい思い出の一つになるような体験を届けること。それが私たちの使命であり、目標です',
          avatar: './img/laoban.jpg'
      },
      {
          speaker: 'reporter',
          name: '左一丞',
          text: '観光業の先輩として、今後の日本観光業の方向性についてどう考えていますか？また、御社は今後どのように発展していくのですか？',
          avatar: './img/avatar2.jpg'
      },
      {
          speaker: 'boss',
          name: '虞丁心',
          text: '今後の日本の観光業には、いくつか注目すべき方向性があると考えています。まず、当社の現在の核心プロジェクトである富士山一日ツアーです。富士山は世界的に有名な観光地であり、その独特な自然景観と文化的背景は多くの観光客を魅了しています。この一日ツアーという形態は、観光客にとって非常に魅力的であると考えています。短期間で富士山の壮大さと日本独特の自然や文化を体験したいというニーズは、今後も高まるでしょう。',
          avatar: './img/laoban.jpg'
      },
      {
          speaker: 'reporter',
          name: '左一丞',
          text: 'これまで、観光業には多くの困難を乗り越えてきた。例えば、コロナ禍や激しい市場競争などがありました。その際、会社のリーダーとして、これらの困難にどう対応してきたのでしょうか？',
          avatar: './img/avatar2.jpg'
      },
      {
          speaker: 'boss',
          name: '虞丁心',
          text: 'コロナウイルスが流行した時、観光業はほぼ停滞し、私たちの旅行業務も完全に停止していました。私たちのような会社にとっては、前例のない試練でした。だが、幸いなことに、この困難を乗り越えることができました。理由としては、上野ホテルと修善寺温泉ホテルが支えの柱となったのです。また、コロナ時期は地元サービスの需要が増加し、ホテル内の薬局、地元住民や観光客にとって必需品の供給源となることで営業収入を維持することができました。私たちはこの特異な時期に対応するため、直ちに戦略を見直し、長期滞在プランやリモートワークのサービスを導入して、特に一時的な住所が必要なビジネス客にターゲットを移しました。',
          avatar: './img/laoban.jpg'
      },
      {
          speaker: 'reporter',
          name: '左一丞',
          text: '最後に、観光業に活躍したい若者たちに何かアドバイスはございますか？',
          avatar: './img/avatar2.jpg'
      },
      {
          speaker: 'boss',
          name: '虞丁心',
          text: '観光業は忍耐力と創造力が求められる業界です。特に、訪れるお客様一人一人に心を込めたサービスを提供することが大切です。まだお若い皆さまには、まずたくさん観察し、体験してから、旅行者の本当のニーズを知ることをお勧めします。また、革新を恐れず、新しいビジネスモデルやアイデアに挑戦することも重要です。そして、何よりも大切なのは、観光業の本来の目的を忘れないこと——それは、旅する人々に幸せと満足を提供することです。',
          avatar: './img/laoban.jpg'
      },
  ];

  let messageIndex = 0;

  // 创建并加载对话框
  function loadNextMessage() {
      if (messageIndex < messages.length) {
          const messageData = messages[messageIndex];
          const messageElement = document.createElement('div');
          messageElement.classList.add('message', messageData.speaker);

          const avatarElement = document.createElement('div');
          avatarElement.classList.add('avatar');
          
          const imgElement = document.createElement('img');
          imgElement.src = messageData.avatar;
          imgElement.alt = `${messageData.name}头像`;

          const nameElement = document.createElement('span');
          nameElement.textContent = `${messageData.speaker === 'reporter' ? '' : '老板：'}${messageData.name}`;
          
          avatarElement.appendChild(imgElement);
          avatarElement.appendChild(nameElement);
          
          const textElement = document.createElement('p');
          textElement.classList.add('text');
          textElement.textContent = messageData.text;

          messageElement.appendChild(avatarElement);
          messageElement.appendChild(textElement);

          // 将新消息添加到聊天框
          chatBox.appendChild(messageElement);

          // 加入动态显示的动画
          setTimeout(() => {
              messageElement.classList.add('show');
          }, 100); // 延迟触发动画效果

          messageIndex++;
      }
  }

  // 初始加载第一条对话
  loadNextMessage();

  // 模拟按下按钮，逐步显示对话
  const loadButton = document.createElement('button');
  loadButton.textContent = '加载下一段对话';
  
  loadButton.classList.add('load-button');
  document.body.appendChild(loadButton);

  loadButton.addEventListener('click', () => {
      loadNextMessage();
      // 每次点击后禁用按钮直到加载完成
      if (messageIndex === messages.length) {
          loadButton.disabled = true;
          loadButton.textContent = '对话加载完毕';
          if(loadButton.textContent == '对话加载完毕'){
            window.location.href = './summarize.html'
          }
      }
      
  });
});
