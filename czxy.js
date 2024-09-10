document.addEventListener("DOMContentLoaded", function() {
    const backgrounds = [
        'url("./img/火照黑云.jpg")',
        'url("./img/风起黄昏.jpg")',
        'url("./img/夜生白露.jpg")',
        'url("./img/曲度紫鸳.jpg")',
		'url("./img/日落红尘.jpg")',
		'url("./img/未竟.jpg")',
    ];

    function moveCharacterTo(button) {
        const character = document.getElementById('character');
        const rect = button.getBoundingClientRect();
        const containerRect = document.getElementById('container').getBoundingClientRect();

        const targetX = rect.left - containerRect.left + button.offsetWidth / 2 - character.offsetWidth / 2;
        const targetY = rect.top - containerRect.top + button.offsetHeight / 2 - character.offsetHeight / 2;

        character.style.left = `${targetX}px`;
        character.style.top = `${targetY}px`;
    }

    window.showText = function(button, index) {
        const textMap = {
            "火照黑云": "万壑争流，千崖竞秀。鸟啼人不见，花落树犹香。雨过天连青壁润，风来松卷翠屏张。山草发，野花开，悬崖峭嶂；薛萝生，佳木丽，峻岭平岗。不遇幽人，那寻樵子？涧边双鹤饮，石上野猿狂。",
            "风起黄昏": "高的是山，峻的是岭；陡的是崖，深的是壑；响的是泉，鲜的是花。那山高不高，顶上接青霄；这涧深不深，底中见地府山前面，有骨都都白云，屹嶝嶝怪石，说不尽千丈万丈挟魂崖。崖后有弯弯曲曲藏龙洞，洞中有叮叮当当滴水岩。又见些丫丫叉叉带角鹿，泥泥痴痴看人獐；盘盘曲曲红鳞蟒，耍耍顽顽白面猿。至晚巴山寻穴虎，带晓翻波出水龙，登的洞门唿喇喇响。草里飞禽，扑轳轳起；林中走兽，掬律律行。猛然一阵狼虫过，吓得人心趷蹬蹬惊。正是那当倒洞当当倒洞，洞当当倒洞当山。青岱染成千丈玉，碧纱笼罩万堆烟。",
            "夜生白露": "行者挺着铁棒喝道：“你是个甚么怪物，擅敢假装佛祖，侵占山头，虚设小雷音寺！”那妖王道：“这猴儿是也不知我的姓名，故来冒犯仙山。此处唤做小西天，因我修行，得了正果，天赐与我的宝阁珍楼。我名乃是黄眉老佛，这里人不知，但称我为黄眉大王、黄眉爷爷。",
            "曲度紫鸳": "这……能成吗？师兄。”紫衣老妇低头，不敢直视百眼魔君。魔君把针递到老妇眼前，软语道：“吞了那猴子留下的东西，再连上这法宝，若还不成，再逃来我处，师兄自会与你撑腰。”他似又想到了旁的事，道：“若换我先下手，那只猪，你怕是再也见不到了……”老妇赶紧接过那根针，行了个谢礼，退下了。待门关上，屏风后，转出来个仙长，是个朱绣顶的白鹤嘴脸，持一柄拂尘，气宇昂昂地看着魔君。魔君朝他拘着礼，禀告道：“拿捏了那猪头，天命人自然翻不起风浪。”鹤仙人不置可否，叹道：“你们这点心机，陛下全看在眼里。不曾理会，是给她老人家几分面子。”魔君干笑着答道：“娘娘的意思，便宜那边占得太多。这回，正好连本带利收回来。”",
            "日落红尘": "熊熊烈火已烧至金殿上，殿外杀声震天，里面却听不真切。王身负重伤，坐在一地狼藉间，抱着一个刚刚死去的少年。来人站在垂幕后，叹道：“生灵涂炭啊……你看看你，当真罪过。”王默不作声。“夜叉王族一脉是断是续，全凭你今日一念。”王不由得放眼望向金殿四周，仍能看出昔日繁华。“都说夜叉最是果敢，你这做王的，反是迟疑不决。”王轻轻抚过儿子的脸庞，尸身尚有余温。大好山河，他多么希望这孩子能去看看。“你只要有一丝不甘，又何妨试试我的法子。你心中的未竟之事，老夫自会替你安排。”身为一国之主，竟不能战死沙场？王闭上了双眼。终于，他睁开眼睛，缓道：“既已无救……我与小儿，都留给你们吧。”",
            "未竟": "势镇汪洋，威宁瑶海。势镇汪洋，潮涌银山鱼入穴；威灵瑶海，波翻雪浪蜃离渊。木火方隅高积土，东海之处耸崇巅。丹崖怪石，削壁奇峰。丹崖上，彩凤双鸣；削壁前，麒麟独卧。峰头时听锦鸡鸣，石窟每观龙出入。林中有寿鹿仙狐，树上有灵禽玄鹤。瑶草奇花不谢，青松翠柏长春。仙桃常结果，修竹每留云。一条涧壑藤萝密，四面原堤草色新。正是百川会处擎天柱，万劫无移大地根。"
        };
        moveCharacterTo(button);

        document.getElementById('popup-text').innerText = textMap[button.innerText];
        document.getElementById('popup').classList.remove('hidden');

        // 切换背景图
        document.body.style.backgroundImage = backgrounds[index];
    };

    window.hideText = function() {
        document.getElementById('popup').classList.add('hidden');
    };
});
