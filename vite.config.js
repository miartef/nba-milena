import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

const plugins = [react(), babel({ presets: [reactCompilerPreset()] })];

export default defineConfig({ plugins });
