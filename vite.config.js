
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['body-parser'],
    },
  },
});

