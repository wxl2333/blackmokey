 // Answers array
 const answers = ['A', 'C', 'B', 'B', 'B', 'A', 'B', 'A'];
 let currentQuestion = 0;
 let score = 0;

 // Function to check user's answer
 function checkAnswer(selectedOption) {
     if (selectedOption === answers[currentQuestion]) {
         score++;
     }

     currentQuestion++;

     if (currentQuestion < answers.length) {
         showQuestion();
     } else {
         showResult();
     }
 }

 // Function to display current question
 function showQuestion() {
     const questionBox = document.querySelector('.question-box');
     const questionText = [
         "1. 石牌楼最早的功能是什么？",
         "2. 游戏中牌楼上的彩绘是哪种风格的壁画？",
         "3. 经幢最初建造于哪个时期？",
         "4. 石刻飞来峰的佛像属于哪种风格？",
         "5. 石牌坊的结构由几根柱子组成？",
         "6. 抱鼓石在民间的作用是什么？",
         "7. 石塔的整体结构是什么形式？",
         "8. 观音禅院的原型建筑是哪座塔？"
     ];

     const options = [
         ["A. 纪念成就达成", "B. 入口元素构建", "C. 宗教仪式场所", "D. 城市标志建筑"],
         ["A. 唐朝风格", "B. 明朝风格", "C. 敦煌壁画", "D. 欧洲文艺复兴风格"],
         ["A. 明清时期", "B. 唐宋时期", "C. 春秋时代", "D. 元代"],
         ["A. 日本佛教", "B. 藏式密宗", "C. 汉传佛教", "D. 泰国佛教"],
         ["A. 一根", "B. 两根", "C. 三根", "D. 四根"],
         ["A. 辟邪驱鬼", "B. 保护家庭平安", "C. 点缀门前景观", "D. 稳定大门结构"],
         ["A. 方形五层", "B. 八角五檐", "C. 圆形三层", "D. 四方七层"],
         ["A. 泉州六圣塔", "B. 南京栖霞寺塔", "C. 北京雍和宫塔", "D. 成都大慈寺塔"]
     ];

     questionBox.innerHTML = `
         <h2>${questionText[currentQuestion]}</h2>
         <div class="options">
             <div class="option" onclick="checkAnswer('A')">${options[currentQuestion][0]}</div>
             <div class="option" onclick="checkAnswer('B')">${options[currentQuestion][1]}</div>
             <div class="option" onclick="checkAnswer('C')">${options[currentQuestion][2]}</div>
             <div class="option" onclick="checkAnswer('D')">${options[currentQuestion][3]}</div>
         </div>
     `;
 }

 // Function to display final score
 function showResult() {
     const questionBox = document.querySelector('.question-box');
     questionBox.innerHTML = `
         <br>
         <h2>恭喜！您已完成所有题目。</h2>
         <p>您的得分是：${score} / ${answers.length}</p>
         <br><br><br>
         <button class = "option" onclick="returnHome()">返回首页</button>
     `;
 }
 function returnHome() {

     window.location.href = 'index2.html';
 }
 showQuestion();