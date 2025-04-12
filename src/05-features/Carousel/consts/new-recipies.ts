import dish1 from '~/07-shared/assets/png/dish1.png';
import dish2 from '~/07-shared/assets/png/dish2.png';
import dish3 from '~/07-shared/assets/png/dish3.png';
import dish4 from '~/07-shared/assets/png/dish4.png';

const newRecipies = [
    {
        title: 'Солянка с грибами',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        image: dish1,
        type: 'Первые блюда',
        bookmarks: 1,
        likes: 0,
    },
    {
        title: 'Капустные котлеты',
        text: 'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        image: dish2,
        type: 'Веганская кухня',
        bookmarks: 2,
        likes: 1,
    },
    {
        title: 'Оладьи на кефире "Пышные"',
        text: 'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        image: dish3,
        type: 'Десерты, выпечка',
        bookmarks: 0,
        likes: 1,
    },
    {
        title: 'Салат "Здоровье"',
        text: 'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        image: dish4,
        type: 'Салаты',
        bookmarks: 0,
        likes: 0,
    },
];

export default newRecipies;
