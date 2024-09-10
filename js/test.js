// 初始化题目和答案
const questions = [
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

const answers = ["C", "C", "B", "C", "D", "B", "B", "A"];

let currentQuestion = 0;
let score = 0;

// 显示问题
function showQuestion() {
    const questionBox = document.querySelector('.question-content');
    const questionText = questions[currentQuestion];
    const currentOptions = options[currentQuestion];

    questionBox.innerHTML = `
        <h2>${questionText}</h2>
        <div class="options">
            <div class="option" onclick="checkAnswer('A')" data-value="A">${currentOptions[0]}</div>
            <div class="option" onclick="checkAnswer('B')" data-value="B">${currentOptions[1]}</div>
            <div class="option" onclick="checkAnswer('C')" data-value="C">${currentOptions[2]}</div>
            <div class="option" onclick="checkAnswer('D')" data-value="D">${currentOptions[3]}</div>
        </div>
        <div class="feedback"></div>
    `;

    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (currentQuestion === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }

    if (currentQuestion === answers.length - 1) {
        nextBtn.textContent = '查看分数';
    } else {
        nextBtn.textContent = '下一题';
    }
}

// 检查答案
function checkAnswer(selectedOption) {
    const correctAnswer = answers[currentQuestion];
    const options = document.querySelectorAll('.option');
    const feedback = document.querySelector('.feedback');

    options.forEach(option => {
        option.classList.remove('selected');
    });

    document.querySelector(`.option[data-value="${selectedOption}"]`).classList.add('selected');

    if (selectedOption === correctAnswer) {
        score++;
        feedback.innerHTML = `正确！`;
    } else {
        feedback.innerHTML = `错误！`;
    }
    
    // 显示正确答案
    setTimeout(() => {
        feedback.innerHTML += `<br>正确答案是: ${correctAnswer}`;
    }, 500); // 显示延迟0.5秒
}

// 显示结果
function showResult() {
    const questionBox = document.querySelector('.question-content');

    let resultHtml = '<h2>恭喜！您已完成所有题目。</h2>';
    resultHtml += `<p>您的得分是：${score} / ${answers.length}</p>`;
    resultHtml += '<h3>每题正确答案：</h3>';
    for (let i = 0; i < answers.length; i++) {
        resultHtml += `<p>${questions[i]} 正确答案是: ${answers[i]}</p>`;
    }

    questionBox.innerHTML = resultHtml;
    questionBox.innerHTML += `
        <button class="option" onclick="returnHome()">返回首页</button>
    `;
}

// 跳转到首页
function returnHome() {
    location.reload();
}

// 处理点击“下一题”按钮的逻辑
document.querySelector('.next-btn').addEventListener('click', function() {
    if (currentQuestion === answers.length - 1) {
        showResult();
    } else {
        currentQuestion++;
        showQuestion();
    }
});

// 处理点击“上一题”按钮的逻辑
document.querySelector('.prev-btn').addEventListener('click', function() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
});

// 初始化显示
showQuestion();
