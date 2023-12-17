import Swiper from "swiper";

const tabs = (tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) => {
    const tabsContainer = document.querySelectorAll(".tabs");
    tabsContainer.forEach((item, i) => {
        item.id = `tabs-${i}`;

        const parentTabs   =    document.querySelectorAll(`#${tabsContainer[i].id} ${tabsParentSelector}`),
              tab          =    document.querySelectorAll(`#${tabsContainer[i].id} ${tabsSelector}`),
              tabContent   =    document.querySelectorAll(`#${tabsContainer[i].id} ${tabsContentSelector}`);

        !item.classList.contains("tabs--noslider") && !window.innerWidth <= 991 ? addSliderForTriggers() : addSliderForContent();

        parentTabs.forEach(parent => {
            parent.addEventListener('click', (e) => {
                const target = e.target;
                if (target && target.classList.contains(tabsSelector.slice(1))) {
                    tab.forEach((item, i) => {
                        if (target == item) {
                            hideTabContent();
                            showTabContent(i);
                        }
                    })
                }
            });
        });

        function hideTabContent() {
            tabContent.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });
    
            tab.forEach(item => {
                item.classList.remove(activeClass);
            });
        }
    
        function showTabContent(i = 0) {
            tabContent[i].classList.add('show', 'fade');
            tabContent[i].classList.remove('hide');
    
            tab[i].classList.add(activeClass);
        }
    
        function addSliderForContent() {
            tabContent.forEach(item => item.classList.remove('hide', 'show', 'fade'));
    
            if(window.innerWidth <= 991) {
                const slider = new Swiper('.content-slider', {
                    slidesPerView: 1.1,
                    spaceBetween: 20
                });
            }
        }
    
        function addSliderForTriggers() {
            const slider = new Swiper('.tabs-slider', {
                slidesPerView: "auto",
                spaceBetween: 10
            });
        }

        hideTabContent();
        showTabContent();
        !item.classList.contains("tabs--noslider") && !window.innerWidth <= 991 ? addSliderForTriggers() : addSliderForContent();
    });
}

export default tabs;