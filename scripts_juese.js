function changeContent(buttonNumber) {
	// 更改背景图
	document.body.style.backgroundImage = `url('./img/img_juese_0${buttonNumber}.jpg')`;


	// 更改文本
	const text = document.getElementById('text');
	const texts = {
		1: "外观设计天命人的外观设计结合了传统中国文化和神话元素。他们通常穿着具有古典风格的衣物，饰以精美的花纹和纹饰，显示出他们的身份和地位。\n\n天命人的外观都经过精心设计，以体现其独特的个性和故事背景。例如，有的天命人可能身穿战甲，象征着他们的战斗精神；有的则可能穿着道袍，表现出他们的智慧和神秘。\n\n天命人的动作设计都非常流畅自然，从普通的行走和跑步到复杂的战斗动作，都充满了力量感和视觉冲击力。此外，天命人在施展技能时的特效也非常华丽，例如火焰、冰霜、雷电等效果，使得每一次战斗都充满了视觉震撼。",
		2: "糜道人是一位在游戏中拥有深厚道法修为的神秘人物。他的名字可能源自于某种古老的道教传说或隐士的称谓。作为一名修道者，糜道人掌握着强大的法术和秘技，在游戏的剧情中扮演着关键的角色。\n\n糜道人的外观设计融合了传统道教和中国古代隐士的形象。他通常身穿道袍，颜色以青灰或深紫为主，衣袍上绣有复杂的符文和道教符号，显示出其深厚的道法修为。他的外貌可能看起来苍老而睿智，长须飘飘，双目炯炯有神，头戴道冠或发簪，手持拂尘或古卷，体现出一种超凡脱俗的气质。",
		3: "赤尻马猴是头目，晓阴阳，会人事，善出入[1]，避死延生。山中元帅唤马流，毛脸黢黑爱红绸。冰刀雪刃劈赤胆，吐雾喷风笑石猴。\n\n赤尻马猴的设计深受中国传统文化和神话传说的影响。作为“四猴”之一，他的形象和技能设计参考了大量的中国古代文学和民间传说。其故事背景可能与《西游记》中的传说有关联，技能和能力也可能融合了中国武术和道教法术的元素。\n\n赤尻马猴的动画设计展现了其灵活敏捷的特点。他的动作连贯而流畅，无论是战斗时的翻滚跳跃，还是静态时的戒备姿态，都充满了生动的生命力。技能特效华丽且具有冲击力，例如快速连击时的残影效果、施展幻术时的光影变化等，都让玩家感受到强烈的视觉震撼。"
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
