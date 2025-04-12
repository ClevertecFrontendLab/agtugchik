import { AppPaths } from '~/01-app/router/consts/app-paths';
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

const accordionItemProps = [
    { label: 'Салаты', icon: icon1, path: AppPaths.SALADS, subroutes: [] },
    { label: 'Закуски', icon: icon2, path: AppPaths.SNACKS, subroutes: [] },
    { label: 'Первые блюда', icon: icon3, path: AppPaths.FIRST_COURSES, subroutes: [] },
    { label: 'Вторые блюда', icon: icon4, path: AppPaths.MAIN_COURSES, subroutes: [] },
    { label: 'Десерты, выпечка', icon: icon5, path: AppPaths.DESSERTS, subroutes: [] },
    { label: 'Блюда на гриле', icon: icon6, path: AppPaths.GRILL, subroutes: [] },
    {
        label: 'Веганская кухня',
        icon: icon7,
        path: AppPaths.VEGAN,
        subroutes: [
            { label: 'Закуски', path: AppPaths.VEGAN_APPETIZERS },
            { label: 'Первые блюда', path: AppPaths.VEGAN_FIRST_COURSES },
            { label: 'Вторые блюда', path: AppPaths.VEGAN_MAIN_COURSES },
            { label: 'Гарниры', path: AppPaths.VEGAN_SIDES },
            { label: 'Десерты', path: AppPaths.VEGAN_DESSERTS },
            { label: 'Выпечка', path: AppPaths.VEGAN_BAKING },
            { label: 'Сыроедческие блюда', path: AppPaths.VEGAN_RAW },
            { label: 'Напитки', path: AppPaths.VEGAN_DRINKS },
        ],
        'data-test-id': 'vegan-cuisine',
    },
    { label: 'Детские блюда', icon: icon8, path: AppPaths.KIDS, subroutes: [] },
    { label: 'Лечебное питание', icon: icon9, path: AppPaths.MEDICAL, subroutes: [] },
    { label: 'Национальные', icon: icon10, path: AppPaths.NATIONAL, subroutes: [] },
    { label: 'Соусы', icon: icon11, path: AppPaths.SAUCES, subroutes: [] },
    { label: 'Напитки', icon: icon12, path: AppPaths.DRINKS, subroutes: [] },
    { label: 'Заготовки', icon: icon13, path: AppPaths.PRESERVES, subroutes: [] },
] as const;

export default accordionItemProps;
