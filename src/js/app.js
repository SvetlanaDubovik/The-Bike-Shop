import { CustomSelect } from './custom-select';
import { customSlider } from './custom-slider';
import { scrollFromLinkToSection } from './scroll';


const select1 = new CustomSelect('popular-bikes-options1');
const select2 = new CustomSelect('popular-bikes-options2');
const select3 = new CustomSelect('popular-bikes-options3');

customSlider();

const scroll = document.querySelector('.slider__scroll');
const categories = document.querySelector('#categories');
scrollFromLinkToSection(scroll, categories);