let itemIndex = 0;
const sliderItems = document.querySelectorAll('.slider-item');
const sliderItemsLength = sliderItems.length;


export const customSlider = () => {
    const leftArrow = document.querySelector('.slider__arrow_left');
    leftArrow.addEventListener('click', handleArrowClick);

    const rightArrow = document.querySelector('.slider__arrow_right');
    rightArrow.addEventListener('click', handleArrowClick);

    const sliderNavItem = document.querySelectorAll('.slider-nav__item ');
    sliderNavItem.forEach(item => item.addEventListener('click', handleSliderNavItemClick));
};

const handleSliderNavItemClick = evt => {
    const newIndex = parseInt(evt.target.id.slice(-1));
    const prevIndex = itemIndex;
    itemIndex = newIndex;
    toggleSliderItem(prevIndex, newIndex);
}

const handleArrowClick = evt => {
    evt.preventDefault();
    const prevIndex = itemIndex;
    const newIndex = getNewIndex(evt.target);
    toggleSliderItem(prevIndex, newIndex);
}

const toggleSliderItem = (prevIndex, newIndex) => {
    const prevSliderItem = document.getElementById(`slider-item${prevIndex}`);
    prevSliderItem.classList.contains('slider-item_show') ?
        prevSliderItem.classList.remove('slider-item_show') :
        prevSliderItem.classList.remove('slider-item_active');
    const newSliderItem = document.getElementById(`slider-item${newIndex}`);
    newSliderItem.classList.add('slider-item_active');
    toggleSliderNav(prevIndex, newIndex);
}

const getNewIndex = element => {
    let newIndex = element.classList.contains('slider__arrow_right') ? ++itemIndex : --itemIndex;

    if (newIndex === -1) {
        newIndex = sliderItemsLength - 1;
        itemIndex = sliderItemsLength - 1;
    }

    if (newIndex === sliderItemsLength) {
        newIndex = 0;
        itemIndex = 0;
    }
    return newIndex;
}

const toggleSliderNav = (prevIndex, newIndex) => {
    const sliderNavItems = document.querySelectorAll('.slider-nav__item');
    sliderNavItems[prevIndex].classList.remove('slider-nav__item_active');
    sliderNavItems[newIndex].classList.add('slider-nav__item_active');
}