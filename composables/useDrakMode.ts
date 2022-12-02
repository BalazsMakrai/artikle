const useDarkMode = () => {
    const isDarkMode = useState("darkMode", () => false);

    const toogleDarkMode = () => {
        isDarkMode.value = !isDarkMode.value;
    };
    return {
        isDarkMode,
        toogleDarkMode
    };
};

export default useDarkMode;