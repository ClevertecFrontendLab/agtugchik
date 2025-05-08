import { appCategoriesSelector } from '~/01-app/store/app-slice';
import { useAppSelector } from '~/01-app/store/hooks';

const useGetCardValues = (categoryId: string, id: string) => {
    const categories = useAppSelector(appCategoriesSelector);
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
