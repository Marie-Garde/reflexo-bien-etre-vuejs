import { readonly, ref } from "vue";

const isMobile = ref(false); // Default value for SSR

if (typeof window !== 'undefined') {
  isMobile.value = window.innerWidth <= 768;

  const updateIsMobile = () => {
    isMobile.value = window.innerWidth <= 768;
  };

  window.addEventListener("resize", updateIsMobile);
}

export default readonly(isMobile);