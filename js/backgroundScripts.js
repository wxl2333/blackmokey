// 按钮点击事件，平滑滚动到指定部分
function scrollToSection(sectionClass) {
    const section = document.querySelector(sectionClass);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('指定的部分不存在:', sectionClass);
    }
}