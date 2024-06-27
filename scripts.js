document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    let currentSectionIndex = 0;
    let isScrolling = false;

    document.addEventListener('wheel', function(event) {
        if (isScrolling) return;  // 防止多次滚动

        isScrolling = true;
        if (event.deltaY > 0) {
            // 向下滚动
            if (currentSectionIndex < sections.length - 1) {
                currentSectionIndex++;
            }
        } else {
            // 向上滚动
            if (currentSectionIndex > 0) {
                currentSectionIndex--;
            }
        }

        window.scrollTo({
            top: sections[currentSectionIndex].offsetTop,
            behavior: 'smooth'
        });

        setTimeout(() => {
            isScrolling = false;
        }, 1000); // 设置滚动结束后1秒再允许下一次滚动
    });
});
