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
    {
        label: 'Салаты',
        icon: icon1,
        path: AppPaths.SALADS,
        subroutes: [
            { label: 'Закуски', path: AppPaths.SALADS_APPETIZERS },
            { label: 'Первые блюда', path: AppPaths.SALADS_FIRST_COURSES },
            { label: 'Вторые блюда', path: AppPaths.SALADS_MAIN_COURSES },
            { label: 'Гарниры', path: AppPaths.SALADS_SIDES },
            { label: 'Десерты', path: AppPaths.SALADS_DESSERTS },
            { label: 'Выпечка', path: AppPaths.SALADS_BAKING },
            { label: 'Сыроедческие блюда', path: AppPaths.SALADS_RAW },
            { label: 'Напитки', path: AppPaths.SALADS_DRINKS },
        ],
    },
    {
        label: 'Закуски',
        icon: icon2,
        path: AppPaths.SNACKS,
        subroutes: [
            { label: 'Закуски', path: AppPaths.SNACKS_APPETIZERS },
            { label: 'Первые блюда', path: AppPaths.SNACKS_FIRST_COURSES },
            { label: 'Вторые блюда', path: AppPaths.SNACKS_MAIN_COURSES },
            { label: 'Гарниры', path: AppPaths.SNACKS_SIDES },
            { label: 'Десерты', path: AppPaths.SNACKS_DESSERTS },
            { label: 'Выпечка', path: AppPaths.SNACKS_BAKING },
            { label: 'Сыроедческие блюда', path: AppPaths.SNACKS_RAW },
            { label: 'Напитки', path: AppPaths.SNACKS_DRINKS },
        ],
    },
    {
        label: 'Первые блюда',
        icon: icon3,
        path: AppPaths.FIRST_COURSES,
        subroutes: [
            { label: 'Закуски', path: AppPaths.FIRST_COURSES_APPETIZERS },
            { label: 'Первые блюда', path: AppPaths.FIRST_COURSES_FIRST_COURSES },
            { label: 'Вторые блюда', path: AppPaths.FIRST_COURSES_MAIN_COURSES },
            { label: 'Гарниры', path: AppPaths.FIRST_COURSES_SIDES },
            { label: 'Десерты', path: AppPaths.FIRST_COURSES_DESSERTS },
            { label: 'Выпечка', path: AppPaths.FIRST_COURSES_BAKING },
            { label: 'Сыроедческие блюда', path: AppPaths.FIRST_COURSES_RAW },
            { label: 'Напитки', path: AppPaths.FIRST_COURSES_DRINKS },
        ],
    },
    {
        label: 'Вторые блюда',
        icon: icon4,
        path: AppPaths.MAIN_COURSES,
        subroutes: [
            { label: 'Закуски', path: AppPaths.MAIN_COURSES_APPETIZERS },
            { label: 'Первые блюда', path: AppPaths.MAIN_COURSES_FIRST_COURSES },
            { label: 'Вторые блюда', path: AppPaths.MAIN_COURSES_MAIN_COURSES },
            { label: 'Гарниры', path: AppPaths.MAIN_COURSES_SIDES },
            { label: 'Десерты', path: AppPaths.MAIN_COURSES_DESSERTS },
            { label: 'Выпечка', path: AppPaths.MAIN_COURSES_BAKING },
            { label: 'Сыроедческие блюда', path: AppPaths.MAIN_COURSES_RAW },
            { label: 'Напитки', path: AppPaths.MAIN_COURSES_DRINKS },
        ],
    },
    {
        label: 'Десерты, выпечка',
        icon: icon5,
        path: AppPaths.DESSERTS,
        subroutes: [
            { label: 'Закуски', path: AppPaths.DESSERTS_APPETIZERS },
            { label: 'Первые блюда', path: AppPaths.DESSERTS_FIRST_COURSES },
            { label: 'Вторые блюда', path: AppPaths.DESSERTS_MAIN_COURSES },
            { label: 'Гарниры', path: AppPaths.DESSERTS_SIDES },
            { label: 'Десерты', path: AppPaths.DESSERTS_DESSERTS },
            { label: 'Выпечка', path: AppPaths.DESSERTS_BAKING },
            { label: 'Сыроедческие блюда', path: AppPaths.DESSERTS_RAW },
            { label: 'Напитки', path: AppPaths.DESSERTS_DRINKS },
        ],
    },
    {
        label: 'Блюда на гриле',
        icon: icon6,
        path: AppPaths.GRILL,
        subroutes: [
            { label: 'Закуски', path: AppPaths.GRILL_APPETIZERS },
            { label: 'Первые блюда', path: AppPaths.GRILL_FIRST_COURSES },
            { label: 'Вторые блюда', path: AppPaths.GRILL_MAIN_COURSES },
            { label: 'Гарниры', path: AppPaths.GRILL_SIDES },
            { label: 'Десерты', path: AppPaths.GRILL_DESSERTS },
            { label: 'Выпечка', path: AppPaths.GRILL_BAKING },
            { label: 'Сыроедческие блюда', path: AppPaths.GRILL_RAW },
            { label: 'Напитки', path: AppPaths.GRILL_DRINKS },
        ],
    },
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
    {
        label: 'Детские блюда',
        icon: icon8,
        path: AppPaths.KIDS,
        subroutes: [
            { label: 'Закуски', path: AppPaths.KIDS_APPETIZERS },
            { label: 'Первые блюда', path: AppPaths.KIDS_FIRST_COURSES },
            { label: 'Вторые блюда', path: AppPaths.KIDS_MAIN_COURSES },
            { label: 'Гарниры', path: AppPaths.KIDS_SIDES },
            { label: 'Десерты', path: AppPaths.KIDS_DESSERTS },
            { label: 'Выпечка', path: AppPaths.KIDS_BAKING },
            { label: 'Сыроедческие блюда', path: AppPaths.KIDS_RAW },
            { label: 'Напитки', path: AppPaths.KIDS_DRINKS },
        ],
    },
    {
        label: 'Лечебное питание',
        icon: icon9,
        path: AppPaths.MEDICAL,
        subroutes: [
            { label: 'Закуски', path: AppPaths.MEDICAL_APPETIZERS },
            { label: 'Первые блюда', path: AppPaths.MEDICAL_FIRST_COURSES },
            { label: 'Вторые блюда', path: AppPaths.MEDICAL_MAIN_COURSES },
            { label: 'Гарниры', path: AppPaths.MEDICAL_SIDES },
            { label: 'Десерты', path: AppPaths.MEDICAL_DESSERTS },
            { label: 'Выпечка', path: AppPaths.MEDICAL_BAKING },
            { label: 'Сыроедческие блюда', path: AppPaths.MEDICAL_RAW },
            { label: 'Напитки', path: AppPaths.MEDICAL_DRINKS },
        ],
    },
    {
        label: 'Национальные',
        icon: icon10,
        path: AppPaths.NATIONAL,
        subroutes: [
            { label: 'Закуски', path: AppPaths.NATIONAL_APPETIZERS },
            { label: 'Первые блюда', path: AppPaths.NATIONAL_FIRST_COURSES },
            { label: 'Вторые блюда', path: AppPaths.NATIONAL_MAIN_COURSES },
            { label: 'Гарниры', path: AppPaths.NATIONAL_SIDES },
            { label: 'Десерты', path: AppPaths.NATIONAL_DESSERTS },
            { label: 'Выпечка', path: AppPaths.NATIONAL_BAKING },
            { label: 'Сыроедческие блюда', path: AppPaths.NATIONAL_RAW },
            { label: 'Напитки', path: AppPaths.NATIONAL_DRINKS },
        ],
    },
    {
        label: 'Соусы',
        icon: icon11,
        path: AppPaths.SAUCES,
        subroutes: [
            { label: 'Закуски', path: AppPaths.SAUCES_APPETIZERS },
            { label: 'Первые блюда', path: AppPaths.SAUCES_FIRST_COURSES },
            { label: 'Вторые блюда', path: AppPaths.SAUCES_MAIN_COURSES },
            { label: 'Гарниры', path: AppPaths.SAUCES_SIDES },
            { label: 'Десерты', path: AppPaths.SAUCES_DESSERTS },
            { label: 'Выпечка', path: AppPaths.SAUCES_BAKING },
            { label: 'Сыроедческие блюда', path: AppPaths.SAUCES_RAW },
            { label: 'Напитки', path: AppPaths.SAUCES_DRINKS },
        ],
    },
    {
        label: 'Напитки',
        icon: icon12,
        path: AppPaths.DRINKS,
        subroutes: [
            { label: 'Закуски', path: AppPaths.DRINKS_APPETIZERS },
            { label: 'Первые блюда', path: AppPaths.DRINKS_FIRST_COURSES },
            { label: 'Вторые блюда', path: AppPaths.DRINKS_MAIN_COURSES },
            { label: 'Гарниры', path: AppPaths.DRINKS_SIDES },
            { label: 'Десерты', path: AppPaths.DRINKS_DESSERTS },
            { label: 'Выпечка', path: AppPaths.DRINKS_BAKING },
            { label: 'Сыроедческие блюда', path: AppPaths.DRINKS_RAW },
            { label: 'Напитки', path: AppPaths.DRINKS_DRINKS },
        ],
    },
    {
        label: 'Заготовки',
        icon: icon13,
        path: AppPaths.PRESERVES,
        subroutes: [
            { label: 'Закуски', path: AppPaths.PRESERVES_APPETIZERS },
            { label: 'Первые блюда', path: AppPaths.PRESERVES_FIRST_COURSES },
            { label: 'Вторые блюда', path: AppPaths.PRESERVES_MAIN_COURSES },
            { label: 'Гарниры', path: AppPaths.PRESERVES_SIDES },
            { label: 'Десерты', path: AppPaths.PRESERVES_DESSERTS },
            { label: 'Выпечка', path: AppPaths.PRESERVES_BAKING },
            { label: 'Сыроедческие блюда', path: AppPaths.PRESERVES_RAW },
            { label: 'Напитки', path: AppPaths.PRESERVES_DRINKS },
        ],
    },
] as const;

export default accordionItemProps;
