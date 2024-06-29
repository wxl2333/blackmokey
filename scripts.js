document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    let currentSectionIndex = 0;
    let isScrolling = false;

    const scrollToSection = (index) => {
        isScrolling = true;
        window.scrollTo({
            top: sections[index].offsetTop,
            behavior: 'smooth'
        });
        currentSectionIndex = index;
        setTimeout(() => {
            isScrolling = false;
        }, 1000); // 设置滚动结束后1秒再允许下一次滚动
    };

    document.addEventListener('wheel', function(event) {
        if (isScrolling) return;  // 防止多次滚动

        if (event.deltaY > 0) {
            // 向下滚动
            if (currentSectionIndex < sections.length - 1) {
                scrollToSection(currentSectionIndex + 1);
            }
        } else {
            // 向上滚动
            if (currentSectionIndex > 0) {
                scrollToSection(currentSectionIndex - 1);
            }
        }
    });

    window.addEventListener('scroll', function() {
        if (!isScrolling) {
            const newSectionIndex = Math.round(window.scrollY / window.innerHeight);
            if (newSectionIndex !== currentSectionIndex) {
                currentSectionIndex = newSectionIndex;
                isScrolling = false;
            }
        }
    });
});
