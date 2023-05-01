export const debounce = (func: any, delay: number) => {
  let inDebounce: any;
  return function(this: any) {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};
