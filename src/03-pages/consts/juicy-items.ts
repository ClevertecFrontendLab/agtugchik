import juicy1 from '~/07-shared/assets/png/juicy1.png';
import juicy2 from '~/07-shared/assets/png/juicy2.png';
import juicy3 from '~/07-shared/assets/png/juicy3.png';
import juicy4 from '~/07-shared/assets/png/juicy4.png';
import juicy5 from '~/07-shared/assets/png/juicy5.png';
import juicy6 from '~/07-shared/assets/png/juicy6.png';
import juicy7 from '~/07-shared/assets/png/juicy7.png';
import juicy8 from '~/07-shared/assets/png/juicy8.png';

const juicyRecipes = [
    {
        id: '0',
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: ['the-juiciest'],
        subcategory: [],
        image: juicy1,
        bookmarks: 85,
        likes: 152,
        date: '2025-04-01T00:00:00Z',
        time: '45 минут',
        portions: 2,
        nutritionValue: { calories: 300, proteins: 15, fats: 10, carbohydrates: 40 },
        ingredients: [
            { title: 'фарш', count: '300', measureUnit: 'г' },
            { title: 'спагетти', count: '200', measureUnit: 'г' },
            { title: 'яйцо', count: '1', measureUnit: 'шт.' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            { stepNumber: 1, description: 'Сформировать кнели из фарша.', image: 'url' },
            { stepNumber: 2, description: 'Сварить спагетти.', image: 'url' },
            { stepNumber: 3, description: 'Подача: спагетти с кнелями.', image: 'url' },
        ],
    },
    {
        id: '1',
        title: 'Пряная ветчина по итальянски',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: ['the-juiciest'],
        subcategory: [],
        image: juicy2,
        bookmarks: 159,
        likes: 257,
        date: '2025-04-02T00:00:00Z',
        time: '2 часа',
        portions: 4,
        nutritionValue: { calories: 450, proteins: 25, fats: 30, carbohydrates: 5 },
        ingredients: [
            { title: 'ветчина', count: '500', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            { stepNumber: 1, description: 'Натереть ветчину специями.', image: 'url' },
            { stepNumber: 2, description: 'Запекать в духовке.', image: 'url' },
        ],
    },
    {
        id: '2',
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: ['the-juiciest'],
        subcategory: [],
        image: juicy3,
        bookmarks: 258,
        likes: 342,
        date: '2025-04-03T00:00:00Z',
        time: '40 минут',
        portions: 3,
        nutritionValue: { calories: 350, proteins: 20, fats: 10, carbohydrates: 45 },
        ingredients: [
            { title: 'лапша', count: '250', measureUnit: 'г' },
            { title: 'курица', count: '300', measureUnit: 'г' },
            { title: 'шафран', count: '1', measureUnit: 'щепотка' },
        ],
        steps: [
            { stepNumber: 1, description: 'Отварить лапшу.', image: 'url' },
            { stepNumber: 2, description: 'Обжарить курицу с шафраном.', image: 'url' },
            { stepNumber: 3, description: 'Смешать всё вместе.', image: 'url' },
        ],
        meat: 'chicken',
    },
    {
        id: '3',
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: ['the-juiciest'],
        subcategory: [],
        image: juicy4,
        bookmarks: 124,
        likes: 324,
        date: '2025-04-04T00:00:00Z',
        time: '50 минут',
        portions: 4,
        nutritionValue: { calories: 200, proteins: 8, fats: 5, carbohydrates: 25 },
        ingredients: [
            { title: 'бульон', count: '1', measureUnit: 'л' },
            { title: 'капуста кимчи', count: '200', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            { stepNumber: 1, description: 'Подготовить бульон.', image: 'url' },
            { stepNumber: 2, description: 'Добавить кимчи и варить.', image: 'url' },
        ],
    },
    {
        id: '4',
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description: 'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком...',
        category: ['the-juiciest'],
        subcategory: [],
        image: juicy5,
        bookmarks: 120,
        likes: 180,
        date: '2025-04-05T00:00:00Z',
        time: '1 час',
        portions: 2,
        nutritionValue: { calories: 250, proteins: 5, fats: 8, carbohydrates: 40 },
        ingredients: [
            { title: 'картофель', count: '4', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '2', measureUnit: 'шт.' },
            { title: 'фасоль', count: '200', measureUnit: 'г' },
            { title: 'томатная паста', count: '100', measureUnit: 'г' },
        ],
        steps: [
            { stepNumber: 1, description: 'Нарезать овощи.', image: 'url' },
            { stepNumber: 2, description: 'Тушить с пастой.', image: 'url' },
        ],
        side: 'potatoes',
    },
    {
        id: '5',
        title: 'Картофельные рулетики с грибами',
        description: 'Рекомендую всем приготовить постное блюдо из картофеля и грибов...',
        category: ['the-juiciest'],
        subcategory: [],
        image: juicy6,
        bookmarks: 85,
        likes: 180,
        date: '2025-04-06T00:00:00Z',
        time: '30 минут',
        portions: 2,
        nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
        ingredients: [
            { title: 'картофель', count: '3', measureUnit: 'шт.' },
            { title: 'грибы', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '50', measureUnit: 'г' },
        ],
        steps: [
            { stepNumber: 1, description: 'Приготовить картофельное пюре.', image: 'url' },
            { stepNumber: 2, description: 'Обжарить грибы.', image: 'url' },
            { stepNumber: 3, description: 'Сформировать рулетики и обжарить.', image: 'url' },
        ],
        side: 'potatoes',
    },
    {
        id: '6',
        title: 'Овощная лазанья из лаваша',
        description: 'Большое, сытное блюдо для ценителей блюд без мяса...',
        category: ['the-juiciest'],
        subcategory: [],
        image: juicy7,
        bookmarks: 85,
        likes: 152,
        date: '2025-04-07T00:00:00Z',
        time: '1 час',
        portions: 2,
        nutritionValue: { calories: 300, proteins: 10, fats: 8, carbohydrates: 45 },
        ingredients: [
            { title: 'лаваш', count: '3', measureUnit: 'листов' },
            { title: 'овощи', count: '300', measureUnit: 'г' },
            { title: 'соус бешамель', count: '200', measureUnit: 'мл' },
        ],
        steps: [
            { stepNumber: 1, description: 'Собрать лазанью слоями.', image: 'url' },
            { stepNumber: 2, description: 'Запечь в духовке.', image: 'url' },
        ],
    },
    {
        id: '7',
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description: 'Тефтели из булгура и чечевицы – яркие и питательные...',
        category: ['the-juiciest'],
        subcategory: [],
        image: juicy8,
        bookmarks: 85,
        likes: 150,
        date: '2025-04-08T00:00:00Z',
        time: '50 минут',
        portions: 4,
        nutritionValue: { calories: 200, proteins: 10, fats: 5, carbohydrates: 30 },
        ingredients: [
            { title: 'булгур', count: '150', measureUnit: 'г' },
            { title: 'чечевица', count: '100', measureUnit: 'г' },
            { title: 'томатный соус', count: '200', measureUnit: 'мл' },
        ],
        steps: [
            { stepNumber: 1, description: 'Сформировать тефтели.', image: 'url' },
            { stepNumber: 2, description: 'Запечь в духовке.', image: 'url' },
        ],
    },
];

export default juicyRecipes;
