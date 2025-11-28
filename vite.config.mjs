import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio',
});


// export default defineConfig({
//   base: '/Portfolio/',  // <-- your repository name EXACTLY
// });
