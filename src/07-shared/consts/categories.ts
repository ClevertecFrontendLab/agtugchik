import { AppPaths } from '~/01-app';
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

const generateKeyFromPath = (path: string): string => path.replace(/\//g, '');

const categories = [
    {
        category: 'Салаты',
        path: AppPaths.SALADS,
        icon: icon1,
        key: generateKeyFromPath(AppPaths.SALADS),
    },
    {
        category: 'Закуски',
        path: AppPaths.SNACKS,
        icon: icon2,
        key: generateKeyFromPath(AppPaths.SNACKS),
    },
    {
        category: 'Первые блюда',
        path: AppPaths.FIRST_COURSES,
        icon: icon3,
        key: generateKeyFromPath(AppPaths.FIRST_COURSES),
    },
    {
        category: 'Вторые блюда',
        path: AppPaths.MAIN_COURSES,
        icon: icon4,
        key: generateKeyFromPath(AppPaths.MAIN_COURSES),
    },
    {
        category: 'Десерты, выпечка',
        path: AppPaths.DESSERTS,
        icon: icon5,
        key: generateKeyFromPath(AppPaths.DESSERTS),
    },
    {
        category: 'Блюда на гриле',
        path: AppPaths.GRILL,
        icon: icon6,
        key: generateKeyFromPath(AppPaths.GRILL),
    },
    {
        category: 'Веганская кухня',
        path: AppPaths.VEGAN,
        icon: icon7,
        key: generateKeyFromPath(AppPaths.VEGAN),
    },
    {
        category: 'Детские блюда',
        path: AppPaths.KIDS,
        icon: icon8,
        key: generateKeyFromPath(AppPaths.KIDS),
    },
    {
        category: 'Лечебное питание',
        path: AppPaths.MEDICAL,
        icon: icon9,
        key: generateKeyFromPath(AppPaths.MEDICAL),
    },
    {
        category: 'Национальные',
        path: AppPaths.NATIONAL,
        icon: icon10,
        key: generateKeyFromPath(AppPaths.NATIONAL),
    },
    {
        category: 'Соусы',
        path: AppPaths.SAUCES,
        icon: icon11,
        key: generateKeyFromPath(AppPaths.SAUCES),
    },
    {
        category: 'Напитки',
        path: AppPaths.DRINKS,
        icon: icon12,
        key: generateKeyFromPath(AppPaths.DRINKS),
    },
    {
        category: 'Заготовки',
        path: AppPaths.PRESERVES,
        icon: icon13,
        key: generateKeyFromPath(AppPaths.PRESERVES),
    },
];
export default categories;
