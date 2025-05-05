import { useGetCategoriesQuery } from '~/01-app/query/services/categories';

const useGetCardValues = (categoryId: string, id: string) => {
    const { data: categories } = useGetCategoriesQuery();
    const category = categories
        ?.filter((category) => category.icon)
        .find((category) => category.subCategories.find((sub) => sub._id === categoryId));
    const categoryPath = category?.category;
    const subcategoryPath = category?.subCategories.find((sub) => sub._id === categoryId)?.category;

    const fullPath = `/${categoryPath}/${subcategoryPath}/${id}`;

    const item = categories
        ?.filter((category) => category.icon)
        ?.find((category) => category.subCategories.find((sub) => sub._id === categoryId));

    return {
        categoryPath,
        subcategoryPath,
        fullPath,
        badgeTitle: item?.title as string,
        badgeIcon: item?.icon as string,
    };
};

export default useGetCardValues;
