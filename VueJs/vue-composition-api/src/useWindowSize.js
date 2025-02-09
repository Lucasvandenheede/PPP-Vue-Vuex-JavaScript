import { ref } from 'vue';

const useWindowSize = () => {
  const wsize = ref({
    width: 0,
    height: 0,
  });
  window.addEventListener('resize', () => {
    wsize.value = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  });
  return { wsize };
};

export default useWindowSize;
