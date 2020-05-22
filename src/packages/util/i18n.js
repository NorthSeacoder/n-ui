export const getText = ({vm, key, defaultText}) => {
    const text = vm.$t && vm.$t(key);
    return text && text !== key ? text : defaultText;
};
