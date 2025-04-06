import { AppAccordionItemProps } from '~/04-widgets/navigation/UI';
import icon1 from '~/07-shared/assets/svg/icon-1.svg';
import icon2 from '~/07-shared/assets/svg/icon-2.svg';
import icon3 from '~/07-shared/assets/svg/icon-3.svg';
import icon4 from '~/07-shared/assets/svg/icon-4.svg';
import icon5 from '~/07-shared/assets/svg/icon-5.svg';
import icon6 from '~/07-shared/assets/svg/icon-6.svg';
import icon7 from '~/07-shared/assets/svg/icon-7.svg';
import icon8 from '~/07-shared/assets/svg/icon-8.svg';
import icon9 from '~/07-shared/assets/svg/icon-9.svg';
import icon10 from '~/07-shared/assets/svg/icon-10.svg';
import icon11 from '~/07-shared/assets/svg/icon-11.svg';
import icon12 from '~/07-shared/assets/svg/icon-12.svg';
import icon13 from '~/07-shared/assets/svg/icon-13.svg';

const props: AppAccordionItemProps[] = [
    { title: 'Салаты', icon: icon1 },
    { title: 'Закуски', icon: icon2 },
    { title: 'Первые блюда', icon: icon3 },
    { title: 'Вторые блюда', icon: icon4 },
    { title: 'Десерты, выпечка', icon: icon5 },
    { title: 'Блюда на гриле', icon: icon6 },
    { title: 'Веганские блюда', icon: icon7 },
    { title: 'Детская кухня', icon: icon8 },
    { title: 'Лечебное питание', icon: icon9 },
    { title: 'Национальыне', icon: icon10 },
    { title: 'Соусы', icon: icon11 },
    { title: 'Напитки', icon: icon12 },
    { title: 'Загатовки', icon: icon13 },
] as const;

export default props;
