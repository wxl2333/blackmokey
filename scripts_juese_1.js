function changeContent(buttonNumber) {
	// 更改背景图
	document.body.style.backgroundImage = `url('./background${buttonNumber}.jpg')`;

	// 更改文本
	const text = document.getElementById('text');
	const texts = {
		1: "这是文本1",
		2: "这是文本2",
		3: "这是文本3"
	};
	text.innerText = texts[buttonNumber];

	// 修改按钮图片
	const buttons = document.querySelectorAll('.sidebar button');
	buttons.forEach((button, index) => {
		const defaultImg = button.querySelector('.default-img');
		const hoverImg = button.querySelector('.hover-img');
		if (index + 1 === buttonNumber) {
					defaultImg.src = `./img/nav_ck.png`;
				} else {
					defaultImg.src = `./img/nav_df.png`;
					hoverImg.src = `./img/nav_hover.png`;
				}
	});
}
