import { useLocalStorage } from "@vueuse/core";
import { useTheme } from "vuetify";

type Theme = "light" | "dark";

const currentTheme = ref<Theme>("light");

export const useAppTheme = () => {
  const theme = useTheme();

  const lsTheme = useLocalStorage<Theme>("theme", theme.global.name.value as Theme);

  const toggleTheme = () => {
    currentTheme.value = theme.global.current.value.dark ? "light" : "dark";
  };

  onMounted(() => {
    currentTheme.value = lsTheme.value;
  });

  watch(currentTheme, () => {
    theme.global.name.value = currentTheme.value;
    lsTheme.value = currentTheme.value;
  });

  return {
    currentTheme,
    toggleTheme,
  };
};
