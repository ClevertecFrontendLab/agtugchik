import * as yup from 'yup';

const nameRegex = /^[А-ЯЁ][А-ЯЁа-яё-]*$/;
const startRegex = /^[А-ЯЁ]/;

export const stepOneSchema = yup.object({
    firstName: yup
        .string()
        .required('Введите имя')
        .max(50, 'Максимальная длина 50 символов')
        .matches(startRegex, 'Должно начинаться с кириллицы А-Я')
        .matches(nameRegex, 'Только кириллица А-Я, и "-"'),

    lastName: yup
        .string()
        .required('Введите фамилию')
        .max(50, 'Максимальная длина 50 символов')
        .matches(startRegex, 'Должно начинаться с кириллицы А-Я')
        .matches(nameRegex, 'Только кириллица А-Я, и "-"'),

    email: yup
        .string()
        .required('Введите e-mail')
        .max(50, 'Максимальная длина 50 символов')
        .email('Введите корректный e-mail'),
});

const loginRegex = /^[A-Za-z0-9!@#$&_.+-]+$/;
const passwordRegex = /^[A-Za-z0-9!@#$&_.+-]+$/;

export const stepTwoSchema = yup.object({
    login: yup
        .string()
        .required('Введите логин')
        .min(5, 'Не соответствует формату')
        .max(50, 'Максимальная длина 50 символов')
        .matches(loginRegex, 'Не соответствует формату'),

    password: yup
        .string()
        .required('Введите пароль')
        .min(8, 'Не соответствует формату')
        .max(50, 'Максимальная длина 50 символов')
        .matches(passwordRegex, 'Не соответствует формату'),

    confirmPassword: yup
        .string()
        .required('Повторите пароль')
        .oneOf([yup.ref('password')], 'Пароли должны совпадать'),
});

export const registerSchema = stepOneSchema.concat(stepTwoSchema);
