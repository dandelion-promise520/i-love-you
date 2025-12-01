// vite.config.ts
import path4 from "node:path";
import process4 from "node:process";
import Uni from "file:///D:/workSpace/Code/%E5%89%8D%E7%AB%AF/uni-app/i-love-you/node_modules/.pnpm/@uni-helper+plugin-uni@0.1._a5da5ce589b3baa190af3f29755e9dba/node_modules/@uni-helper/plugin-uni/src/index.js";
import Components from "file:///D:/workSpace/Code/%E5%89%8D%E7%AB%AF/uni-app/i-love-you/node_modules/.pnpm/@uni-helper+vite-plugin-uni-components@0.2.3_rollup@4.50.0/node_modules/@uni-helper/vite-plugin-uni-components/dist/index.mjs";
import UniLayouts from "file:///D:/workSpace/Code/%E5%89%8D%E7%AB%AF/uni-app/i-love-you/node_modules/.pnpm/@uni-helper+vite-plugin-uni-layouts@0.1.11_rollup@4.50.0/node_modules/@uni-helper/vite-plugin-uni-layouts/dist/index.mjs";
import UniManifest from "file:///D:/workSpace/Code/%E5%89%8D%E7%AB%AF/uni-app/i-love-you/node_modules/.pnpm/@uni-helper+vite-plugin-uni_fafb499a6c7148eb9f0b6edf3e80e6e8/node_modules/@uni-helper/vite-plugin-uni-manifest/dist/index.mjs";
import UniPages from "file:///D:/workSpace/Code/%E5%89%8D%E7%AB%AF/uni-app/i-love-you/node_modules/.pnpm/@uni-helper+vite-plugin-uni_e52ea90dc678554206499b68a7e7c4f5/node_modules/@uni-helper/vite-plugin-uni-pages/dist/index.mjs";
import UniPlatform from "file:///D:/workSpace/Code/%E5%89%8D%E7%AB%AF/uni-app/i-love-you/node_modules/.pnpm/@uni-helper+vite-plugin-uni-platform@0.0.5/node_modules/@uni-helper/vite-plugin-uni-platform/dist/index.mjs";
import Optimization from "file:///D:/workSpace/Code/%E5%89%8D%E7%AB%AF/uni-app/i-love-you/node_modules/.pnpm/@uni-ku+bundle-optimizer@1._53b0973a91f876a19b3a499e43ca5442/node_modules/@uni-ku/bundle-optimizer/dist/index.mjs";
import UniKuRoot from "file:///D:/workSpace/Code/%E5%89%8D%E7%AB%AF/uni-app/i-love-you/node_modules/.pnpm/@uni-ku+root@1.4.1_vite@5.2_c0ded3f42c86f74e44565dc29de27a4c/node_modules/@uni-ku/root/dist/index.mjs";
import dayjs from "file:///D:/workSpace/Code/%E5%89%8D%E7%AB%AF/uni-app/i-love-you/node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/dayjs.min.js";
import { visualizer } from "file:///D:/workSpace/Code/%E5%89%8D%E7%AB%AF/uni-app/i-love-you/node_modules/.pnpm/rollup-plugin-visualizer@6.0.3_rollup@4.50.0/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import UnoCSS from "file:///D:/workSpace/Code/%E5%89%8D%E7%AB%AF/uni-app/i-love-you/node_modules/.pnpm/unocss@66.0.0_postcss@8.5.6_2ea57284233e93f4ec422395ed46624f/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///D:/workSpace/Code/%E5%89%8D%E7%AB%AF/uni-app/i-love-you/node_modules/.pnpm/unplugin-auto-import@20.1.0/node_modules/unplugin-auto-import/dist/vite.js";
import { defineConfig, loadEnv } from "file:///D:/workSpace/Code/%E5%89%8D%E7%AB%AF/uni-app/i-love-you/node_modules/.pnpm/vite@5.2.8_@types+node@20.19.11_sass@1.77.8_terser@5.43.1/node_modules/vite/dist/node/index.js";
import ViteRestart from "file:///D:/workSpace/Code/%E5%89%8D%E7%AB%AF/uni-app/i-love-you/node_modules/.pnpm/vite-plugin-restart@1.0.0_v_0b7ac2f9a82bf6364aa0d69f22d0869d/node_modules/vite-plugin-restart/dist/index.js";

// scripts/open-dev-tools.js
import { exec } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
function _openDevTools() {
  const platform = process.platform;
  const { UNI_PLATFORM } = process.env;
  const uniPlatformText = UNI_PLATFORM === "mp-weixin" ? "\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F" : UNI_PLATFORM === "mp-alipay" ? "\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F" : "\u5C0F\u7A0B\u5E8F";
  const projectPath = path.resolve(process.cwd(), `dist/dev/${UNI_PLATFORM}`);
  if (!fs.existsSync(projectPath)) {
    console.log(`\u274C ${uniPlatformText}\u6784\u5EFA\u76EE\u5F55\u4E0D\u5B58\u5728:`, projectPath);
    return;
  }
  console.log(`\u{1F680} \u6B63\u5728\u6253\u5F00${uniPlatformText}\u5F00\u53D1\u8005\u5DE5\u5177...`);
  let command = "";
  if (platform === "darwin") {
    if (UNI_PLATFORM === "mp-weixin") {
      command = `/Applications/wechatwebdevtools.app/Contents/MacOS/cli -o "${projectPath}"`;
    } else if (UNI_PLATFORM === "mp-alipay") {
      command = `/Applications/\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u8005\u5DE5\u5177.app/Contents/MacOS/\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u8005\u5DE5\u5177 --p "${projectPath}"`;
    }
  } else if (platform === "win32" || platform === "win64") {
    if (UNI_PLATFORM === "mp-weixin") {
      command = `"D:\\Soft\\\u5FAE\u4FE1web\u5F00\u53D1\u8005\u5DE5\u5177\\cli.bat" -o "${projectPath}"`;
    }
  } else {
    console.log("\u274C \u5F53\u524D\u7CFB\u7EDF\u4E0D\u652F\u6301\u81EA\u52A8\u6253\u5F00\u5FAE\u4FE1\u5F00\u53D1\u8005\u5DE5\u5177");
    return;
  }
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log(`\u274C \u6253\u5F00${uniPlatformText}\u5F00\u53D1\u8005\u5DE5\u5177\u5931\u8D25:`, error.message);
      console.log(`\u{1F4A1} \u8BF7\u786E\u4FDD${uniPlatformText}\u5F00\u53D1\u8005\u5DE5\u5177\u670D\u52A1\u7AEF\u53E3\u5DF2\u542F\u7528`);
      console.log(`\u{1F4A1} \u53EF\u4EE5\u624B\u52A8\u6253\u5F00${uniPlatformText}\u5F00\u53D1\u8005\u5DE5\u5177\u5E76\u5BFC\u5165\u9879\u76EE:`, projectPath);
      return;
    }
    if (stderr) {
      console.log("\u26A0\uFE0F \u8B66\u544A:", stderr);
    }
    console.log(`\u2705 ${uniPlatformText}\u5F00\u53D1\u8005\u5DE5\u5177\u5DF2\u6253\u5F00`);
    if (stdout) {
      console.log(stdout);
    }
  });
}
function openDevTools() {
  let isFirstBuild = true;
  return {
    name: "uni-devtools",
    writeBundle() {
      if (isFirstBuild && process.env.UNI_PLATFORM?.includes("mp")) {
        isFirstBuild = false;
        _openDevTools();
      }
    }
  };
}

// vite-plugins/copy-native-resources.ts
import path2 from "node:path";
import process2 from "node:process";
import fs2 from "file:///D:/workSpace/Code/%E5%89%8D%E7%AB%AF/uni-app/i-love-you/node_modules/.pnpm/fs-extra@10.1.0/node_modules/fs-extra/lib/index.js";
var DEFAULT_OPTIONS = {
  enable: true,
  sourceDir: "nativeplugins",
  targetDirName: "nativeplugins",
  verbose: true,
  logPrefix: "[copy-native-resources]"
};
function copyNativeResources(options = {}) {
  const config = { ...DEFAULT_OPTIONS, ...options };
  if (!config.enable) {
    return {
      name: "copy-native-resources-disabled",
      apply: "build",
      writeBundle() {
      }
    };
  }
  return {
    name: "copy-native-resources",
    apply: "build",
    // 只在构建时应用
    enforce: "post",
    // 在其他插件执行完毕后执行
    async writeBundle() {
      const { sourceDir, targetDirName, verbose, logPrefix } = config;
      try {
        const projectRoot = process2.cwd();
        const sourcePath = path2.resolve(projectRoot, sourceDir);
        const buildMode = process2.env.NODE_ENV === "production" ? "build" : "dev";
        const platform = process2.env.UNI_PLATFORM || "app";
        const targetPath = path2.resolve(
          projectRoot,
          "dist",
          buildMode,
          platform,
          targetDirName
        );
        const sourceExists = await fs2.pathExists(sourcePath);
        if (!sourceExists) {
          if (verbose) {
            console.warn(`${logPrefix} \u6E90\u76EE\u5F55\u4E0D\u5B58\u5728\uFF0C\u8DF3\u8FC7\u590D\u5236\u64CD\u4F5C`);
            console.warn(`${logPrefix} \u6E90\u76EE\u5F55\u8DEF\u5F84: ${sourcePath}`);
            console.warn(`${logPrefix} \u5982\u9700\u4F7F\u7528\u672C\u5730\u539F\u751F\u63D2\u4EF6\uFF0C\u8BF7\u5728\u9879\u76EE\u6839\u76EE\u5F55\u521B\u5EFA nativeplugins \u76EE\u5F55`);
            console.warn(`${logPrefix} \u5E76\u6309\u7167\u5B98\u65B9\u6587\u6863\u653E\u5165\u539F\u751F\u63D2\u4EF6\u6587\u4EF6`);
            console.warn(`${logPrefix} \u53C2\u8003: https://uniapp.dcloud.net.cn/plugin/native-plugin.html`);
          }
          return;
        }
        const sourceFiles = await fs2.readdir(sourcePath);
        if (sourceFiles.length === 0) {
          if (verbose) {
            console.warn(`${logPrefix} \u6E90\u76EE\u5F55\u4E3A\u7A7A\uFF0C\u8DF3\u8FC7\u590D\u5236\u64CD\u4F5C`);
            console.warn(`${logPrefix} \u6E90\u76EE\u5F55\u8DEF\u5F84: ${sourcePath}`);
            console.warn(`${logPrefix} \u8BF7\u5728 nativeplugins \u76EE\u5F55\u4E2D\u653E\u5165\u539F\u751F\u63D2\u4EF6\u6587\u4EF6`);
          }
          return;
        }
        await fs2.ensureDir(targetPath);
        if (verbose) {
          console.log(`${logPrefix} \u5F00\u59CB\u590D\u5236 UniApp \u672C\u5730\u539F\u751F\u63D2\u4EF6...`);
          console.log(`${logPrefix} \u6E90\u76EE\u5F55: ${sourcePath}`);
          console.log(`${logPrefix} \u76EE\u6807\u76EE\u5F55: ${targetPath}`);
          console.log(`${logPrefix} \u6784\u5EFA\u6A21\u5F0F: ${buildMode}`);
          console.log(`${logPrefix} \u76EE\u6807\u5E73\u53F0: ${platform}`);
          console.log(`${logPrefix} \u53D1\u73B0 ${sourceFiles.length} \u4E2A\u539F\u751F\u63D2\u4EF6\u6587\u4EF6/\u76EE\u5F55`);
        }
        await fs2.copy(sourcePath, targetPath, {
          overwrite: true,
          // 覆盖已存在的文件，确保使用最新版本
          errorOnExist: false,
          // 如果目标文件存在不报错
          preserveTimestamps: true
          // 保持文件的时间戳
        });
        if (verbose) {
          console.log(`${logPrefix} \u2705 UniApp \u672C\u5730\u539F\u751F\u63D2\u4EF6\u590D\u5236\u5B8C\u6210`);
          console.log(`${logPrefix} \u5DF2\u6210\u529F\u590D\u5236 ${sourceFiles.length} \u4E2A\u6587\u4EF6/\u76EE\u5F55\u5230\u6784\u5EFA\u76EE\u5F55`);
          console.log(`${logPrefix} \u539F\u751F\u63D2\u4EF6\u73B0\u5728\u53EF\u4EE5\u5728 App \u4E2D\u6B63\u5E38\u4F7F\u7528`);
        }
      } catch (error) {
        console.error(`${config.logPrefix} \u274C \u590D\u5236 UniApp \u672C\u5730\u539F\u751F\u63D2\u4EF6\u5931\u8D25:`, error);
        console.error(`${config.logPrefix} \u9519\u8BEF\u8BE6\u60C5:`, error instanceof Error ? error.message : String(error));
        console.error(`${config.logPrefix} \u8BF7\u68C0\u67E5\u6E90\u76EE\u5F55\u6743\u9650\u548C\u78C1\u76D8\u7A7A\u95F4`);
      }
    }
  };
}
function createCopyNativeResourcesPlugin(enable = true, options = {}) {
  return copyNativeResources({ enable, ...options });
}

// vite-plugins/sync-manifest-plugins.ts
import fs3 from "node:fs";
import path3 from "node:path";
import process3 from "node:process";
function syncManifestPlugin() {
  return {
    name: "sync-manifest",
    apply: "build",
    enforce: "post",
    writeBundle: {
      order: "post",
      handler() {
        const srcManifestPath = path3.resolve(process3.cwd(), "./src/manifest.json");
        const distAppPath = path3.resolve(process3.cwd(), "./dist/dev/app/manifest.json");
        try {
          const srcManifest = JSON.parse(fs3.readFileSync(srcManifestPath, "utf8"));
          const distAppDir = path3.dirname(distAppPath);
          if (!fs3.existsSync(distAppDir)) {
            fs3.mkdirSync(distAppDir, { recursive: true });
          }
          let distManifest = {};
          if (fs3.existsSync(distAppPath)) {
            distManifest = JSON.parse(fs3.readFileSync(distAppPath, "utf8"));
          }
          if (srcManifest["app-plus"]?.distribute?.plugins) {
            if (!distManifest.plus)
              distManifest.plus = {};
            if (!distManifest.plus.distribute)
              distManifest.plus.distribute = {};
            distManifest.plus.distribute.plugins = srcManifest["app-plus"].distribute.plugins;
            fs3.writeFileSync(distAppPath, JSON.stringify(distManifest, null, 2));
            console.log("\u2705 Manifest plugins \u540C\u6B65\u6210\u529F");
          }
        } catch (error) {
          console.error("\u274C \u540C\u6B65 manifest plugins \u5931\u8D25:", error);
        }
      }
    }
  };
}

// vite.config.ts
var vite_config_default = defineConfig(({ command, mode }) => {
  console.log("command, mode -> ", command, mode);
  const { UNI_PLATFORM } = process4.env;
  console.log("UNI_PLATFORM -> ", UNI_PLATFORM);
  const env = loadEnv(mode, path4.resolve(process4.cwd(), "env"));
  const {
    VITE_APP_PORT,
    VITE_SERVER_BASEURL,
    VITE_APP_TITLE,
    VITE_DELETE_CONSOLE,
    VITE_APP_PUBLIC_BASE,
    VITE_APP_PROXY_ENABLE,
    VITE_APP_PROXY_PREFIX,
    VITE_COPY_NATIVE_RES_ENABLE
  } = env;
  console.log("\u73AF\u5883\u53D8\u91CF env -> ", env);
  return defineConfig({
    envDir: "./env",
    // 自定义env目录
    base: VITE_APP_PUBLIC_BASE,
    plugins: [
      UniLayouts(),
      UniPlatform(),
      UniManifest(),
      UniPages({
        exclude: ["**/components/**/**.*"],
        // pages 目录为 src/pages，分包目录不能配置在pages目录下！！
        // 是个数组，可以配置多个，但是不能为pages里面的目录！！
        subPackages: [],
        dts: "src/types/uni-pages.d.ts"
      }),
      // Optimization 插件需要 page.json 文件，故应在 UniPages 插件之后执行
      Optimization({
        enable: {
          "optimization": true,
          "async-import": true,
          "async-component": true
        },
        dts: {
          base: "src/types"
        },
        logger: false
      }),
      // UniXXX 需要在 Uni 之前引入
      // 若存在改变 pages.json 的插件，请将 UniKuRoot 放置其后
      UniKuRoot({
        excludePages: ["**/components/**/**.*"]
      }),
      Uni(),
      {
        // 临时解决 dcloudio 官方的 @dcloudio/uni-mp-compiler 出现的编译 BUG
        // 参考 github issue: https://github.com/dcloudio/uni-app/issues/4952
        // 自定义插件禁用 vite:vue 插件的 devToolsEnabled，强制编译 vue 模板时 inline 为 true
        name: "fix-vite-plugin-vue",
        configResolved(config) {
          const plugin = config.plugins.find((p) => p.name === "vite:vue");
          if (plugin && plugin.api && plugin.api.options) {
            plugin.api.options.devToolsEnabled = false;
          }
        }
      },
      UnoCSS(),
      AutoImport({
        imports: ["vue", "uni-app"],
        dts: "src/types/auto-import.d.ts",
        dirs: ["src/hooks"],
        // 自动导入 hooks
        vueTemplate: true
        // default false
      }),
      ViteRestart({
        // 通过这个插件，在修改vite.config.js文件则不需要重新运行也生效配置
        restart: ["vite.config.js"]
      }),
      // h5环境增加 BUILD_TIME 和 BUILD_BRANCH
      UNI_PLATFORM === "h5" && {
        name: "html-transform",
        transformIndexHtml(html) {
          return html.replace("%BUILD_TIME%", dayjs().format("YYYY-MM-DD HH:mm:ss")).replace("%VITE_APP_TITLE%", VITE_APP_TITLE);
        }
      },
      // 打包分析插件，h5 + 生产环境才弹出
      UNI_PLATFORM === "h5" && mode === "production" && visualizer({
        filename: "./node_modules/.cache/visualizer/stats.html",
        open: true,
        gzipSize: true,
        brotliSize: true
      }),
      // 原生插件资源复制插件 - 仅在 app 平台且启用时生效
      createCopyNativeResourcesPlugin(
        UNI_PLATFORM === "app" && VITE_COPY_NATIVE_RES_ENABLE === "true",
        {
          verbose: mode === "development"
          // 开发模式显示详细日志
        }
      ),
      syncManifestPlugin(),
      Components({
        extensions: ["vue"],
        deep: true,
        // 是否递归扫描子目录，
        directoryAsNamespace: false,
        // 是否把目录名作为命名空间前缀，true 时组件名为 目录名+组件名，
        dts: "src/types/components.d.ts"
        // 自动生成的组件类型声明文件路径（用于 TypeScript 支持）
      }),
      // 自动打开开发者工具插件 (必须修改 .env 文件中的 VITE_WX_APPID)
      openDevTools()
    ],
    define: {
      __VITE_APP_PROXY__: JSON.stringify(VITE_APP_PROXY_ENABLE)
    },
    css: {
      postcss: {
        plugins: [
          // autoprefixer({
          //   // 指定目标浏览器
          //   overrideBrowserslist: ['> 1%', 'last 2 versions'],
          // }),
        ]
      }
    },
    resolve: {
      alias: {
        "@": path4.join(process4.cwd(), "./src"),
        "@img": path4.join(process4.cwd(), "./src/static/images")
      }
    },
    server: {
      host: "0.0.0.0",
      hmr: true,
      port: Number.parseInt(VITE_APP_PORT, 10),
      // 仅 H5 端生效，其他端不生效（其他端走build，不走devServer)
      proxy: JSON.parse(VITE_APP_PROXY_ENABLE) ? {
        [VITE_APP_PROXY_PREFIX]: {
          target: VITE_SERVER_BASEURL,
          changeOrigin: true,
          // 后端有/api前缀则不做处理，没有则需要去掉
          rewrite: (path5) => path5.replace(new RegExp(`^${VITE_APP_PROXY_PREFIX}`), "")
        }
      } : void 0
    },
    esbuild: {
      drop: VITE_DELETE_CONSOLE === "true" ? ["console", "debugger"] : []
    },
    build: {
      sourcemap: false,
      // 方便非h5端调试
      // sourcemap: VITE_SHOW_SOURCEMAP === 'true', // 默认是false
      target: "es6",
      // 开发环境不用压缩
      minify: mode === "development" ? false : "esbuild"
    }
  });
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic2NyaXB0cy9vcGVuLWRldi10b29scy5qcyIsICJ2aXRlLXBsdWdpbnMvY29weS1uYXRpdmUtcmVzb3VyY2VzLnRzIiwgInZpdGUtcGx1Z2lucy9zeW5jLW1hbmlmZXN0LXBsdWdpbnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3b3JrU3BhY2VcXFxcQ29kZVxcXFxcdTUyNERcdTdBRUZcXFxcdW5pLWFwcFxcXFxpLWxvdmUteW91XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFx3b3JrU3BhY2VcXFxcQ29kZVxcXFxcdTUyNERcdTdBRUZcXFxcdW5pLWFwcFxcXFxpLWxvdmUteW91XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi93b3JrU3BhY2UvQ29kZS8lRTUlODklOEQlRTclQUIlQUYvdW5pLWFwcC9pLWxvdmUteW91L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xyXG5pbXBvcnQgcHJvY2VzcyBmcm9tICdub2RlOnByb2Nlc3MnXHJcbmltcG9ydCBVbmkgZnJvbSAnQHVuaS1oZWxwZXIvcGx1Z2luLXVuaSdcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnQHVuaS1oZWxwZXIvdml0ZS1wbHVnaW4tdW5pLWNvbXBvbmVudHMnXHJcbi8vIEBzZWUgaHR0cHM6Ly91bmktaGVscGVyLmpzLm9yZy92aXRlLXBsdWdpbi11bmktbGF5b3V0c1xyXG5pbXBvcnQgVW5pTGF5b3V0cyBmcm9tICdAdW5pLWhlbHBlci92aXRlLXBsdWdpbi11bmktbGF5b3V0cydcclxuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vdW5pLWhlbHBlci92aXRlLXBsdWdpbi11bmktbWFuaWZlc3RcclxuaW1wb3J0IFVuaU1hbmlmZXN0IGZyb20gJ0B1bmktaGVscGVyL3ZpdGUtcGx1Z2luLXVuaS1tYW5pZmVzdCdcclxuLy8gQHNlZSBodHRwczovL3VuaS1oZWxwZXIuanMub3JnL3ZpdGUtcGx1Z2luLXVuaS1wYWdlc1xyXG5pbXBvcnQgVW5pUGFnZXMgZnJvbSAnQHVuaS1oZWxwZXIvdml0ZS1wbHVnaW4tdW5pLXBhZ2VzJ1xyXG4vLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91bmktaGVscGVyL3ZpdGUtcGx1Z2luLXVuaS1wbGF0Zm9ybVxyXG4vLyBcdTk3MDBcdTg5ODFcdTRFMEUgQHVuaS1oZWxwZXIvdml0ZS1wbHVnaW4tdW5pLXBhZ2VzIFx1NjNEMlx1NEVGNlx1NEUwMFx1OEQ3N1x1NEY3Rlx1NzUyOFxyXG5pbXBvcnQgVW5pUGxhdGZvcm0gZnJvbSAnQHVuaS1oZWxwZXIvdml0ZS1wbHVnaW4tdW5pLXBsYXRmb3JtJ1xyXG4vKipcclxuICogXHU1MjA2XHU1MzA1XHU0RjE4XHU1MzE2XHUzMDAxXHU2QTIxXHU1NzU3XHU1RjAyXHU2QjY1XHU4REU4XHU1MzA1XHU4QzAzXHU3NTI4XHUzMDAxXHU3RUM0XHU0RUY2XHU1RjAyXHU2QjY1XHU4REU4XHU1MzA1XHU1RjE1XHU3NTI4XHJcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3VuaS1rdS9idW5kbGUtb3B0aW1pemVyXHJcbiAqL1xyXG5pbXBvcnQgT3B0aW1pemF0aW9uIGZyb20gJ0B1bmkta3UvYnVuZGxlLW9wdGltaXplcidcclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3VuaS1rdS9yb290XHJcbmltcG9ydCBVbmlLdVJvb3QgZnJvbSAnQHVuaS1rdS9yb290J1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXHJcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInXHJcbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnXHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCBWaXRlUmVzdGFydCBmcm9tICd2aXRlLXBsdWdpbi1yZXN0YXJ0J1xyXG5pbXBvcnQgb3BlbkRldlRvb2xzIGZyb20gJy4vc2NyaXB0cy9vcGVuLWRldi10b29scydcclxuaW1wb3J0IHsgY3JlYXRlQ29weU5hdGl2ZVJlc291cmNlc1BsdWdpbiB9IGZyb20gJy4vdml0ZS1wbHVnaW5zL2NvcHktbmF0aXZlLXJlc291cmNlcydcclxuaW1wb3J0IHN5bmNNYW5pZmVzdFBsdWdpbiBmcm9tICcuL3ZpdGUtcGx1Z2lucy9zeW5jLW1hbmlmZXN0LXBsdWdpbnMnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgY29tbWFuZCwgbW9kZSB9KSA9PiB7XHJcbiAgLy8gQHNlZSBodHRwczovL3Vub2Nzcy5kZXYvXHJcbiAgLy8gY29uc3QgVW5vQ1NTID0gKGF3YWl0IGltcG9ydCgndW5vY3NzL3ZpdGUnKSkuZGVmYXVsdFxyXG4gIC8vIGNvbnNvbGUubG9nKG1vZGUgPT09IHByb2Nlc3MuZW52Lk5PREVfRU5WKSAvLyB0cnVlXHJcblxyXG4gIC8vIG1vZGU6IFx1NTMzQVx1NTIwNlx1NzUxRlx1NEVBN1x1NzNBRlx1NTg4M1x1OEZEOFx1NjYyRlx1NUYwMFx1NTNEMVx1NzNBRlx1NTg4M1xyXG4gIGNvbnNvbGUubG9nKCdjb21tYW5kLCBtb2RlIC0+ICcsIGNvbW1hbmQsIG1vZGUpXHJcbiAgLy8gcG5wbSBkZXY6aDUgXHU2NUY2XHU1Rjk3XHU1MjMwID0+IHNlcnZlIGRldmVsb3BtZW50XHJcbiAgLy8gcG5wbSBidWlsZDpoNSBcdTY1RjZcdTVGOTdcdTUyMzAgPT4gYnVpbGQgcHJvZHVjdGlvblxyXG4gIC8vIHBucG0gZGV2Om1wLXdlaXhpbiBcdTY1RjZcdTVGOTdcdTUyMzAgPT4gYnVpbGQgZGV2ZWxvcG1lbnQgKFx1NkNFOFx1NjEwRlx1NTMzQVx1NTIyQlx1RkYwQ2NvbW1hbmRcdTRFM0FidWlsZClcclxuICAvLyBwbnBtIGJ1aWxkOm1wLXdlaXhpbiBcdTY1RjZcdTVGOTdcdTUyMzAgPT4gYnVpbGQgcHJvZHVjdGlvblxyXG4gIC8vIHBucG0gZGV2OmFwcCBcdTY1RjZcdTVGOTdcdTUyMzAgPT4gYnVpbGQgZGV2ZWxvcG1lbnQgKFx1NkNFOFx1NjEwRlx1NTMzQVx1NTIyQlx1RkYwQ2NvbW1hbmRcdTRFM0FidWlsZClcclxuICAvLyBwbnBtIGJ1aWxkOmFwcCBcdTY1RjZcdTVGOTdcdTUyMzAgPT4gYnVpbGQgcHJvZHVjdGlvblxyXG4gIC8vIGRldiBcdTU0OEMgYnVpbGQgXHU1NDdEXHU0RUU0XHU1M0VGXHU0RUU1XHU1MjA2XHU1MjJCXHU0RjdGXHU3NTI4IC5lbnYuZGV2ZWxvcG1lbnQgXHU1NDhDIC5lbnYucHJvZHVjdGlvbiBcdTc2ODRcdTczQUZcdTU4ODNcdTUzRDhcdTkxQ0ZcclxuXHJcbiAgY29uc3QgeyBVTklfUExBVEZPUk0gfSA9IHByb2Nlc3MuZW52XHJcbiAgY29uc29sZS5sb2coJ1VOSV9QTEFURk9STSAtPiAnLCBVTklfUExBVEZPUk0pIC8vIFx1NUY5N1x1NTIzMCBtcC13ZWl4aW4sIGg1LCBhcHAgXHU3QjQ5XHJcblxyXG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdlbnYnKSlcclxuICBjb25zdCB7XHJcbiAgICBWSVRFX0FQUF9QT1JULFxyXG4gICAgVklURV9TRVJWRVJfQkFTRVVSTCxcclxuICAgIFZJVEVfQVBQX1RJVExFLFxyXG4gICAgVklURV9ERUxFVEVfQ09OU09MRSxcclxuICAgIFZJVEVfQVBQX1BVQkxJQ19CQVNFLFxyXG4gICAgVklURV9BUFBfUFJPWFlfRU5BQkxFLFxyXG4gICAgVklURV9BUFBfUFJPWFlfUFJFRklYLFxyXG4gICAgVklURV9DT1BZX05BVElWRV9SRVNfRU5BQkxFLFxyXG4gIH0gPSBlbnZcclxuICBjb25zb2xlLmxvZygnXHU3M0FGXHU1ODgzXHU1M0Q4XHU5MUNGIGVudiAtPiAnLCBlbnYpXHJcblxyXG4gIHJldHVybiBkZWZpbmVDb25maWcoe1xyXG4gICAgZW52RGlyOiAnLi9lbnYnLCAvLyBcdTgxRUFcdTVCOUFcdTRFNDllbnZcdTc2RUVcdTVGNTVcclxuICAgIGJhc2U6IFZJVEVfQVBQX1BVQkxJQ19CQVNFLFxyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICBVbmlMYXlvdXRzKCksXHJcbiAgICAgIFVuaVBsYXRmb3JtKCksXHJcbiAgICAgIFVuaU1hbmlmZXN0KCksXHJcbiAgICAgIFVuaVBhZ2VzKHtcclxuICAgICAgICBleGNsdWRlOiBbJyoqL2NvbXBvbmVudHMvKiovKiouKiddLFxyXG4gICAgICAgIC8vIHBhZ2VzIFx1NzZFRVx1NUY1NVx1NEUzQSBzcmMvcGFnZXNcdUZGMENcdTUyMDZcdTUzMDVcdTc2RUVcdTVGNTVcdTRFMERcdTgwRkRcdTkxNERcdTdGNkVcdTU3MjhwYWdlc1x1NzZFRVx1NUY1NVx1NEUwQlx1RkYwMVx1RkYwMVxyXG4gICAgICAgIC8vIFx1NjYyRlx1NEUyQVx1NjU3MFx1N0VDNFx1RkYwQ1x1NTNFRlx1NEVFNVx1OTE0RFx1N0Y2RVx1NTkxQVx1NEUyQVx1RkYwQ1x1NEY0Nlx1NjYyRlx1NEUwRFx1ODBGRFx1NEUzQXBhZ2VzXHU5MUNDXHU5NzYyXHU3Njg0XHU3NkVFXHU1RjU1XHVGRjAxXHVGRjAxXHJcbiAgICAgICAgc3ViUGFja2FnZXM6IFtdLFxyXG4gICAgICAgIGR0czogJ3NyYy90eXBlcy91bmktcGFnZXMuZC50cycsXHJcbiAgICAgIH0pLFxyXG4gICAgICAvLyBPcHRpbWl6YXRpb24gXHU2M0QyXHU0RUY2XHU5NzAwXHU4OTgxIHBhZ2UuanNvbiBcdTY1ODdcdTRFRjZcdUZGMENcdTY1NDVcdTVFOTRcdTU3MjggVW5pUGFnZXMgXHU2M0QyXHU0RUY2XHU0RTRCXHU1NDBFXHU2MjY3XHU4ODRDXHJcbiAgICAgIE9wdGltaXphdGlvbih7XHJcbiAgICAgICAgZW5hYmxlOiB7XHJcbiAgICAgICAgICAnb3B0aW1pemF0aW9uJzogdHJ1ZSxcclxuICAgICAgICAgICdhc3luYy1pbXBvcnQnOiB0cnVlLFxyXG4gICAgICAgICAgJ2FzeW5jLWNvbXBvbmVudCc6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkdHM6IHtcclxuICAgICAgICAgIGJhc2U6ICdzcmMvdHlwZXMnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9nZ2VyOiBmYWxzZSxcclxuICAgICAgfSksXHJcbiAgICAgIC8vIFVuaVhYWCBcdTk3MDBcdTg5ODFcdTU3MjggVW5pIFx1NEU0Qlx1NTI0RFx1NUYxNVx1NTE2NVxyXG4gICAgICAvLyBcdTgyRTVcdTVCNThcdTU3MjhcdTY1MzlcdTUzRDggcGFnZXMuanNvbiBcdTc2ODRcdTYzRDJcdTRFRjZcdUZGMENcdThCRjdcdTVDMDYgVW5pS3VSb290IFx1NjUzRVx1N0Y2RVx1NTE3Nlx1NTQwRVxyXG4gICAgICBVbmlLdVJvb3Qoe1xyXG4gICAgICAgIGV4Y2x1ZGVQYWdlczogWycqKi9jb21wb25lbnRzLyoqLyoqLionXSxcclxuICAgICAgfSksXHJcbiAgICAgIFVuaSgpLFxyXG4gICAgICB7XHJcbiAgICAgICAgLy8gXHU0RTM0XHU2NUY2XHU4OUUzXHU1MUIzIGRjbG91ZGlvIFx1NUI5OFx1NjVCOVx1NzY4NCBAZGNsb3VkaW8vdW5pLW1wLWNvbXBpbGVyIFx1NTFGQVx1NzNCMFx1NzY4NFx1N0YxNlx1OEJEMSBCVUdcclxuICAgICAgICAvLyBcdTUzQzJcdTgwMDMgZ2l0aHViIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGNsb3VkaW8vdW5pLWFwcC9pc3N1ZXMvNDk1MlxyXG4gICAgICAgIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NjNEMlx1NEVGNlx1Nzk4MVx1NzUyOCB2aXRlOnZ1ZSBcdTYzRDJcdTRFRjZcdTc2ODQgZGV2VG9vbHNFbmFibGVkXHVGRjBDXHU1RjNBXHU1MjM2XHU3RjE2XHU4QkQxIHZ1ZSBcdTZBMjFcdTY3N0ZcdTY1RjYgaW5saW5lIFx1NEUzQSB0cnVlXHJcbiAgICAgICAgbmFtZTogJ2ZpeC12aXRlLXBsdWdpbi12dWUnLFxyXG4gICAgICAgIGNvbmZpZ1Jlc29sdmVkKGNvbmZpZykge1xyXG4gICAgICAgICAgY29uc3QgcGx1Z2luID0gY29uZmlnLnBsdWdpbnMuZmluZChwID0+IHAubmFtZSA9PT0gJ3ZpdGU6dnVlJylcclxuICAgICAgICAgIGlmIChwbHVnaW4gJiYgcGx1Z2luLmFwaSAmJiBwbHVnaW4uYXBpLm9wdGlvbnMpIHtcclxuICAgICAgICAgICAgcGx1Z2luLmFwaS5vcHRpb25zLmRldlRvb2xzRW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgVW5vQ1NTKCksXHJcbiAgICAgIEF1dG9JbXBvcnQoe1xyXG4gICAgICAgIGltcG9ydHM6IFsndnVlJywgJ3VuaS1hcHAnXSxcclxuICAgICAgICBkdHM6ICdzcmMvdHlwZXMvYXV0by1pbXBvcnQuZC50cycsXHJcbiAgICAgICAgZGlyczogWydzcmMvaG9va3MnXSwgLy8gXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1IGhvb2tzXHJcbiAgICAgICAgdnVlVGVtcGxhdGU6IHRydWUsIC8vIGRlZmF1bHQgZmFsc2VcclxuICAgICAgfSksXHJcbiAgICAgIFZpdGVSZXN0YXJ0KHtcclxuICAgICAgICAvLyBcdTkwMUFcdThGQzdcdThGRDlcdTRFMkFcdTYzRDJcdTRFRjZcdUZGMENcdTU3MjhcdTRGRUVcdTY1Mzl2aXRlLmNvbmZpZy5qc1x1NjU4N1x1NEVGNlx1NTIxOVx1NEUwRFx1OTcwMFx1ODk4MVx1OTFDRFx1NjVCMFx1OEZEMFx1ODg0Q1x1NEU1Rlx1NzUxRlx1NjU0OFx1OTE0RFx1N0Y2RVxyXG4gICAgICAgIHJlc3RhcnQ6IFsndml0ZS5jb25maWcuanMnXSxcclxuICAgICAgfSksXHJcbiAgICAgIC8vIGg1XHU3M0FGXHU1ODgzXHU1ODlFXHU1MkEwIEJVSUxEX1RJTUUgXHU1NDhDIEJVSUxEX0JSQU5DSFxyXG4gICAgICBVTklfUExBVEZPUk0gPT09ICdoNScgJiYge1xyXG4gICAgICAgIG5hbWU6ICdodG1sLXRyYW5zZm9ybScsXHJcbiAgICAgICAgdHJhbnNmb3JtSW5kZXhIdG1sKGh0bWwpIHtcclxuICAgICAgICAgIHJldHVybiBodG1sLnJlcGxhY2UoJyVCVUlMRF9USU1FJScsIGRheWpzKCkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJykpLnJlcGxhY2UoJyVWSVRFX0FQUF9USVRMRSUnLCBWSVRFX0FQUF9USVRMRSlcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICAvLyBcdTYyNTNcdTUzMDVcdTUyMDZcdTY3OTBcdTYzRDJcdTRFRjZcdUZGMENoNSArIFx1NzUxRlx1NEVBN1x1NzNBRlx1NTg4M1x1NjI0RFx1NUYzOVx1NTFGQVxyXG4gICAgICBVTklfUExBVEZPUk0gPT09ICdoNSdcclxuICAgICAgJiYgbW9kZSA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICAgICYmIHZpc3VhbGl6ZXIoe1xyXG4gICAgICAgIGZpbGVuYW1lOiAnLi9ub2RlX21vZHVsZXMvLmNhY2hlL3Zpc3VhbGl6ZXIvc3RhdHMuaHRtbCcsXHJcbiAgICAgICAgb3BlbjogdHJ1ZSxcclxuICAgICAgICBnemlwU2l6ZTogdHJ1ZSxcclxuICAgICAgICBicm90bGlTaXplOiB0cnVlLFxyXG4gICAgICB9KSxcclxuICAgICAgLy8gXHU1MzlGXHU3NTFGXHU2M0QyXHU0RUY2XHU4RDQ0XHU2RTkwXHU1OTBEXHU1MjM2XHU2M0QyXHU0RUY2IC0gXHU0RUM1XHU1NzI4IGFwcCBcdTVFNzNcdTUzRjBcdTRFMTRcdTU0MkZcdTc1MjhcdTY1RjZcdTc1MUZcdTY1NDhcclxuICAgICAgY3JlYXRlQ29weU5hdGl2ZVJlc291cmNlc1BsdWdpbihcclxuICAgICAgICBVTklfUExBVEZPUk0gPT09ICdhcHAnICYmIFZJVEVfQ09QWV9OQVRJVkVfUkVTX0VOQUJMRSA9PT0gJ3RydWUnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZlcmJvc2U6IG1vZGUgPT09ICdkZXZlbG9wbWVudCcsIC8vIFx1NUYwMFx1NTNEMVx1NkEyMVx1NUYwRlx1NjYzRVx1NzkzQVx1OEJFNlx1N0VDNlx1NjVFNVx1NUZEN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICksXHJcbiAgICAgIHN5bmNNYW5pZmVzdFBsdWdpbigpLFxyXG4gICAgICBDb21wb25lbnRzKHtcclxuICAgICAgICBleHRlbnNpb25zOiBbJ3Z1ZSddLFxyXG4gICAgICAgIGRlZXA6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1OTAxMlx1NUY1Mlx1NjI2Qlx1NjNDRlx1NUI1MFx1NzZFRVx1NUY1NVx1RkYwQ1xyXG4gICAgICAgIGRpcmVjdG9yeUFzTmFtZXNwYWNlOiBmYWxzZSwgLy8gXHU2NjJGXHU1NDI2XHU2MjhBXHU3NkVFXHU1RjU1XHU1NDBEXHU0RjVDXHU0RTNBXHU1NDdEXHU1NDBEXHU3QTdBXHU5NUY0XHU1MjREXHU3RjAwXHVGRjBDdHJ1ZSBcdTY1RjZcdTdFQzRcdTRFRjZcdTU0MERcdTRFM0EgXHU3NkVFXHU1RjU1XHU1NDBEK1x1N0VDNFx1NEVGNlx1NTQwRFx1RkYwQ1xyXG4gICAgICAgIGR0czogJ3NyYy90eXBlcy9jb21wb25lbnRzLmQudHMnLCAvLyBcdTgxRUFcdTUyQThcdTc1MUZcdTYyMTBcdTc2ODRcdTdFQzRcdTRFRjZcdTdDN0JcdTU3OEJcdTU4RjBcdTY2MEVcdTY1ODdcdTRFRjZcdThERUZcdTVGODRcdUZGMDhcdTc1MjhcdTRFOEUgVHlwZVNjcmlwdCBcdTY1MkZcdTYzMDFcdUZGMDlcclxuICAgICAgfSksXHJcbiAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NjI1M1x1NUYwMFx1NUYwMFx1NTNEMVx1ODAwNVx1NURFNVx1NTE3N1x1NjNEMlx1NEVGNiAoXHU1RkM1XHU5ODdCXHU0RkVFXHU2NTM5IC5lbnYgXHU2NTg3XHU0RUY2XHU0RTJEXHU3Njg0IFZJVEVfV1hfQVBQSUQpXHJcbiAgICAgIG9wZW5EZXZUb29scygpLFxyXG4gICAgXSxcclxuICAgIGRlZmluZToge1xyXG4gICAgICBfX1ZJVEVfQVBQX1BST1hZX186IEpTT04uc3RyaW5naWZ5KFZJVEVfQVBQX1BST1hZX0VOQUJMRSksXHJcbiAgICB9LFxyXG4gICAgY3NzOiB7XHJcbiAgICAgIHBvc3Rjc3M6IHtcclxuICAgICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgICAvLyBhdXRvcHJlZml4ZXIoe1xyXG4gICAgICAgICAgLy8gICAvLyBcdTYzMDdcdTVCOUFcdTc2RUVcdTY4MDdcdTZENEZcdTg5QzhcdTU2NjhcclxuICAgICAgICAgIC8vICAgb3ZlcnJpZGVCcm93c2Vyc2xpc3Q6IFsnPiAxJScsICdsYXN0IDIgdmVyc2lvbnMnXSxcclxuICAgICAgICAgIC8vIH0pLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgYWxpYXM6IHtcclxuICAgICAgICAnQCc6IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnLi9zcmMnKSxcclxuICAgICAgICAnQGltZyc6IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnLi9zcmMvc3RhdGljL2ltYWdlcycpLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNlcnZlcjoge1xyXG4gICAgICBob3N0OiAnMC4wLjAuMCcsXHJcbiAgICAgIGhtcjogdHJ1ZSxcclxuICAgICAgcG9ydDogTnVtYmVyLnBhcnNlSW50KFZJVEVfQVBQX1BPUlQsIDEwKSxcclxuICAgICAgLy8gXHU0RUM1IEg1IFx1N0FFRlx1NzUxRlx1NjU0OFx1RkYwQ1x1NTE3Nlx1NEVENlx1N0FFRlx1NEUwRFx1NzUxRlx1NjU0OFx1RkYwOFx1NTE3Nlx1NEVENlx1N0FFRlx1OEQ3MGJ1aWxkXHVGRjBDXHU0RTBEXHU4RDcwZGV2U2VydmVyKVxyXG4gICAgICBwcm94eTogSlNPTi5wYXJzZShWSVRFX0FQUF9QUk9YWV9FTkFCTEUpXHJcbiAgICAgICAgPyB7XHJcbiAgICAgICAgICAgIFtWSVRFX0FQUF9QUk9YWV9QUkVGSVhdOiB7XHJcbiAgICAgICAgICAgICAgdGFyZ2V0OiBWSVRFX1NFUlZFUl9CQVNFVVJMLFxyXG4gICAgICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAvLyBcdTU0MEVcdTdBRUZcdTY3MDkvYXBpXHU1MjREXHU3RjAwXHU1MjE5XHU0RTBEXHU1MDVBXHU1OTA0XHU3NDA2XHVGRjBDXHU2Q0ExXHU2NzA5XHU1MjE5XHU5NzAwXHU4OTgxXHU1M0JCXHU2Mzg5XHJcbiAgICAgICAgICAgICAgcmV3cml0ZTogcGF0aCA9PiBwYXRoLnJlcGxhY2UobmV3IFJlZ0V4cChgXiR7VklURV9BUFBfUFJPWFlfUFJFRklYfWApLCAnJyksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgOiB1bmRlZmluZWQsXHJcbiAgICB9LFxyXG4gICAgZXNidWlsZDoge1xyXG4gICAgICBkcm9wOiBWSVRFX0RFTEVURV9DT05TT0xFID09PSAndHJ1ZScgPyBbJ2NvbnNvbGUnLCAnZGVidWdnZXInXSA6IFtdLFxyXG4gICAgfSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIHNvdXJjZW1hcDogZmFsc2UsXHJcbiAgICAgIC8vIFx1NjVCOVx1NEZCRlx1OTc1RWg1XHU3QUVGXHU4QzAzXHU4QkQ1XHJcbiAgICAgIC8vIHNvdXJjZW1hcDogVklURV9TSE9XX1NPVVJDRU1BUCA9PT0gJ3RydWUnLCAvLyBcdTlFRDhcdThCQTRcdTY2MkZmYWxzZVxyXG4gICAgICB0YXJnZXQ6ICdlczYnLFxyXG4gICAgICAvLyBcdTVGMDBcdTUzRDFcdTczQUZcdTU4ODNcdTRFMERcdTc1MjhcdTUzOEJcdTdGMjlcclxuICAgICAgbWluaWZ5OiBtb2RlID09PSAnZGV2ZWxvcG1lbnQnID8gZmFsc2UgOiAnZXNidWlsZCcsXHJcbiAgICB9LFxyXG4gIH0pXHJcbn0pXHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcd29ya1NwYWNlXFxcXENvZGVcXFxcXHU1MjREXHU3QUVGXFxcXHVuaS1hcHBcXFxcaS1sb3ZlLXlvdVxcXFxzY3JpcHRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFx3b3JrU3BhY2VcXFxcQ29kZVxcXFxcdTUyNERcdTdBRUZcXFxcdW5pLWFwcFxcXFxpLWxvdmUteW91XFxcXHNjcmlwdHNcXFxcb3Blbi1kZXYtdG9vbHMuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3dvcmtTcGFjZS9Db2RlLyVFNSU4OSU4RCVFNyVBQiVBRi91bmktYXBwL2ktbG92ZS15b3Uvc2NyaXB0cy9vcGVuLWRldi10b29scy5qc1wiO2ltcG9ydCB7IGV4ZWMgfSBmcm9tICdub2RlOmNoaWxkX3Byb2Nlc3MnXHJcbmltcG9ydCBmcyBmcm9tICdub2RlOmZzJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXHJcbmltcG9ydCBwcm9jZXNzIGZyb20gJ25vZGU6cHJvY2VzcydcclxuXHJcbi8qKlxyXG4gKiBcdTYyNTNcdTVGMDBcdTVGMDBcdTUzRDFcdTgwMDVcdTVERTVcdTUxNzdcclxuICovXHJcbmZ1bmN0aW9uIF9vcGVuRGV2VG9vbHMoKSB7XHJcbiAgY29uc3QgcGxhdGZvcm0gPSBwcm9jZXNzLnBsYXRmb3JtIC8vIGRhcndpbiwgd2luMzIsIGxpbnV4XHJcbiAgY29uc3QgeyBVTklfUExBVEZPUk0gfSA9IHByb2Nlc3MuZW52IC8vICBtcC13ZWl4aW4sIG1wLWFsaXBheVxyXG5cclxuICBjb25zdCB1bmlQbGF0Zm9ybVRleHQgPSBVTklfUExBVEZPUk0gPT09ICdtcC13ZWl4aW4nID8gJ1x1NUZBRVx1NEZFMVx1NUMwRlx1N0EwQlx1NUU4RicgOiBVTklfUExBVEZPUk0gPT09ICdtcC1hbGlwYXknID8gJ1x1NjUyRlx1NEVEOFx1NUI5RFx1NUMwRlx1N0EwQlx1NUU4RicgOiAnXHU1QzBGXHU3QTBCXHU1RThGJ1xyXG5cclxuICAvLyBcdTk4NzlcdTc2RUVcdThERUZcdTVGODRcdUZGMDhcdTY3ODRcdTVFRkFcdThGOTNcdTUxRkFcdTc2RUVcdTVGNTVcdUZGMDlcclxuICBjb25zdCBwcm9qZWN0UGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBgZGlzdC9kZXYvJHtVTklfUExBVEZPUk19YClcclxuXHJcbiAgLy8gXHU2OEMwXHU2N0U1XHU2Nzg0XHU1RUZBXHU4RjkzXHU1MUZBXHU3NkVFXHU1RjU1XHU2NjJGXHU1NDI2XHU1QjU4XHU1NzI4XHJcbiAgaWYgKCFmcy5leGlzdHNTeW5jKHByb2plY3RQYXRoKSkge1xyXG4gICAgY29uc29sZS5sb2coYFx1Mjc0QyAke3VuaVBsYXRmb3JtVGV4dH1cdTY3ODRcdTVFRkFcdTc2RUVcdTVGNTVcdTRFMERcdTVCNThcdTU3Mjg6YCwgcHJvamVjdFBhdGgpXHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKGBcdUQ4M0RcdURFODAgXHU2QjYzXHU1NzI4XHU2MjUzXHU1RjAwJHt1bmlQbGF0Zm9ybVRleHR9XHU1RjAwXHU1M0QxXHU4MDA1XHU1REU1XHU1MTc3Li4uYClcclxuXHJcbiAgLy8gXHU2ODM5XHU2MzZFXHU0RTBEXHU1NDBDXHU2NENEXHU0RjVDXHU3Q0ZCXHU3RURGXHU2MjY3XHU4ODRDXHU0RTBEXHU1NDBDXHU1NDdEXHU0RUU0XHJcbiAgbGV0IGNvbW1hbmQgPSAnJ1xyXG5cclxuICBpZiAocGxhdGZvcm0gPT09ICdkYXJ3aW4nKSB7XHJcbiAgICAvLyBtYWNPU1xyXG4gICAgaWYgKFVOSV9QTEFURk9STSA9PT0gJ21wLXdlaXhpbicpIHtcclxuICAgICAgY29tbWFuZCA9IGAvQXBwbGljYXRpb25zL3dlY2hhdHdlYmRldnRvb2xzLmFwcC9Db250ZW50cy9NYWNPUy9jbGkgLW8gXCIke3Byb2plY3RQYXRofVwiYFxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoVU5JX1BMQVRGT1JNID09PSAnbXAtYWxpcGF5Jykge1xyXG4gICAgICBjb21tYW5kID0gYC9BcHBsaWNhdGlvbnMvXHU1QzBGXHU3QTBCXHU1RThGXHU1RjAwXHU1M0QxXHU4MDA1XHU1REU1XHU1MTc3LmFwcC9Db250ZW50cy9NYWNPUy9cdTVDMEZcdTdBMEJcdTVFOEZcdTVGMDBcdTUzRDFcdTgwMDVcdTVERTVcdTUxNzcgLS1wIFwiJHtwcm9qZWN0UGF0aH1cImBcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZSBpZiAocGxhdGZvcm0gPT09ICd3aW4zMicgfHwgcGxhdGZvcm0gPT09ICd3aW42NCcpIHtcclxuICAgIC8vIFdpbmRvd3NcclxuICAgIGlmIChVTklfUExBVEZPUk0gPT09ICdtcC13ZWl4aW4nKSB7XHJcbiAgICAgIGNvbW1hbmQgPSBgXCJEOlxcXFxTb2Z0XFxcXFx1NUZBRVx1NEZFMXdlYlx1NUYwMFx1NTNEMVx1ODAwNVx1NURFNVx1NTE3N1xcXFxjbGkuYmF0XCIgLW8gXCIke3Byb2plY3RQYXRofVwiYFxyXG4gICAgfVxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIC8vIExpbnV4IFx1NjIxNlx1NTE3Nlx1NEVENlx1N0NGQlx1N0VERlxyXG4gICAgY29uc29sZS5sb2coJ1x1Mjc0QyBcdTVGNTNcdTUyNERcdTdDRkJcdTdFREZcdTRFMERcdTY1MkZcdTYzMDFcdTgxRUFcdTUyQThcdTYyNTNcdTVGMDBcdTVGQUVcdTRGRTFcdTVGMDBcdTUzRDFcdTgwMDVcdTVERTVcdTUxNzcnKVxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBleGVjKGNvbW1hbmQsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhgXHUyNzRDIFx1NjI1M1x1NUYwMCR7dW5pUGxhdGZvcm1UZXh0fVx1NUYwMFx1NTNEMVx1ODAwNVx1NURFNVx1NTE3N1x1NTkzMVx1OEQyNTpgLCBlcnJvci5tZXNzYWdlKVxyXG4gICAgICBjb25zb2xlLmxvZyhgXHVEODNEXHVEQ0ExIFx1OEJGN1x1Nzg2RVx1NEZERCR7dW5pUGxhdGZvcm1UZXh0fVx1NUYwMFx1NTNEMVx1ODAwNVx1NURFNVx1NTE3N1x1NjcwRFx1NTJBMVx1N0FFRlx1NTNFM1x1NURGMlx1NTQyRlx1NzUyOGApXHJcbiAgICAgIGNvbnNvbGUubG9nKGBcdUQ4M0RcdURDQTEgXHU1M0VGXHU0RUU1XHU2MjRCXHU1MkE4XHU2MjUzXHU1RjAwJHt1bmlQbGF0Zm9ybVRleHR9XHU1RjAwXHU1M0QxXHU4MDA1XHU1REU1XHU1MTc3XHU1RTc2XHU1QkZDXHU1MTY1XHU5ODc5XHU3NkVFOmAsIHByb2plY3RQYXRoKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3RkZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdcdTI2QTBcdUZFMEYgXHU4QjY2XHU1NDRBOicsIHN0ZGVycilcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhgXHUyNzA1ICR7dW5pUGxhdGZvcm1UZXh0fVx1NUYwMFx1NTNEMVx1ODAwNVx1NURFNVx1NTE3N1x1NURGMlx1NjI1M1x1NUYwMGApXHJcblxyXG4gICAgaWYgKHN0ZG91dCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhzdGRvdXQpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3BlbkRldlRvb2xzKCkge1xyXG4gIC8vIFx1OTk5Nlx1NkIyMVx1Njc4NFx1NUVGQVx1NjgwN1x1OEJCMFxyXG4gIGxldCBpc0ZpcnN0QnVpbGQgPSB0cnVlXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiAndW5pLWRldnRvb2xzJyxcclxuICAgIHdyaXRlQnVuZGxlKCkge1xyXG4gICAgICBpZiAoaXNGaXJzdEJ1aWxkICYmIHByb2Nlc3MuZW52LlVOSV9QTEFURk9STT8uaW5jbHVkZXMoJ21wJykpIHtcclxuICAgICAgICBpc0ZpcnN0QnVpbGQgPSBmYWxzZVxyXG4gICAgICAgIF9vcGVuRGV2VG9vbHMoKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXHdvcmtTcGFjZVxcXFxDb2RlXFxcXFx1NTI0RFx1N0FFRlxcXFx1bmktYXBwXFxcXGktbG92ZS15b3VcXFxcdml0ZS1wbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFx3b3JrU3BhY2VcXFxcQ29kZVxcXFxcdTUyNERcdTdBRUZcXFxcdW5pLWFwcFxcXFxpLWxvdmUteW91XFxcXHZpdGUtcGx1Z2luc1xcXFxjb3B5LW5hdGl2ZS1yZXNvdXJjZXMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3dvcmtTcGFjZS9Db2RlLyVFNSU4OSU4RCVFNyVBQiVBRi91bmktYXBwL2ktbG92ZS15b3Uvdml0ZS1wbHVnaW5zL2NvcHktbmF0aXZlLXJlc291cmNlcy50c1wiO2ltcG9ydCB0eXBlIHsgUGx1Z2luIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xyXG5pbXBvcnQgcHJvY2VzcyBmcm9tICdub2RlOnByb2Nlc3MnXHJcbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSdcclxuXHJcbi8qKlxyXG4gKiBcdTUzOUZcdTc1MUZcdTYzRDJcdTRFRjZcdThENDRcdTZFOTBcdTU5MERcdTUyMzZcdTkxNERcdTdGNkVcdTYzQTVcdTUzRTNcclxuICpcclxuICogXHU2ODM5XHU2MzZFIFVuaUFwcCBcdTVCOThcdTY1QjlcdTY1ODdcdTY4NjNcdUZGMUFodHRwczovL3VuaWFwcC5kY2xvdWQubmV0LmNuL3BsdWdpbi9uYXRpdmUtcGx1Z2luLmh0bWwjJUU2JTlDJUFDJUU1JTlDJUIwJUU2JThGJTkyJUU0JUJCJUI2LSVFOSU5RCU5RSVFNSU4NiU4NSVFNyVCRCVBRSVFNSU4RSU5RiVFNyU5NCU5RiVFNiU4RiU5MiVFNCVCQiVCNlxyXG4gKiBcdTY3MkNcdTU3MzBcdTYzRDJcdTRFRjZcdTVFOTRcdThCRTVcdTVCNThcdTUwQThcdTU3MjhcdTk4NzlcdTc2RUVcdTY4MzlcdTc2RUVcdTVGNTVcdTc2ODQgbmF0aXZlcGx1Z2lucyBcdTc2RUVcdTVGNTVcdTRFMEJcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29weU5hdGl2ZVJlc291cmNlc09wdGlvbnMge1xyXG4gIC8qKiBcdTY2MkZcdTU0MjZcdTU0MkZcdTc1MjhcdTYzRDJcdTRFRjYgKi9cclxuICBlbmFibGU/OiBib29sZWFuXHJcbiAgLyoqXHJcbiAgICogXHU2RTkwXHU3NkVFXHU1RjU1XHU4REVGXHU1Rjg0XHVGRjBDXHU3NkY4XHU1QkY5XHU0RThFXHU5ODc5XHU3NkVFXHU2ODM5XHU3NkVFXHU1RjU1XHJcbiAgICogXHU5RUQ4XHU4QkE0XHU0RTNBICduYXRpdmVwbHVnaW5zJ1x1RkYwQ1x1N0IyNlx1NTQwOCBVbmlBcHAgXHU1Qjk4XHU2NUI5XHU4OUM0XHU4MzAzXHJcbiAgICogQHNlZSBodHRwczovL3VuaWFwcC5kY2xvdWQubmV0LmNuL3BsdWdpbi9uYXRpdmUtcGx1Z2luLmh0bWwjJUU2JTlDJUFDJUU1JTlDJUIwJUU2JThGJTkyJUU0JUJCJUI2LSVFOSU5RCU5RSVFNSU4NiU4NSVFNyVCRCVBRSVFNSU4RSU5RiVFNyU5NCU5RiVFNiU4RiU5MiVFNCVCQiVCNlxyXG4gICAqL1xyXG4gIHNvdXJjZURpcj86IHN0cmluZ1xyXG4gIC8qKlxyXG4gICAqIFx1NzZFRVx1NjgwN1x1NzZFRVx1NUY1NVx1NTQwRFx1NzlGMFx1RkYwQ1x1Njc4NFx1NUVGQVx1NTQwRVx1NTcyOCBkaXN0IFx1NzZFRVx1NUY1NVx1NEUyRFx1NzY4NFx1NjU4N1x1NEVGNlx1NTkzOVx1NTQwRFxyXG4gICAqIFx1OUVEOFx1OEJBNFx1NEUzQSAnbmF0aXZlcGx1Z2lucydcdUZGMENcdTRFMEVcdTZFOTBcdTc2RUVcdTVGNTVcdTRGRERcdTYzMDFcdTRFMDBcdTgxRjRcclxuICAgKi9cclxuICB0YXJnZXREaXJOYW1lPzogc3RyaW5nXHJcbiAgLyoqIFx1NjYyRlx1NTQyNlx1NjYzRVx1NzkzQVx1OEJFNlx1N0VDNlx1NjVFNVx1NUZEN1x1RkYwQ1x1NEZCRlx1NEU4RVx1OEMwM1x1OEJENVx1NTQ4Q1x1NzZEMVx1NjNBN1x1NTkwRFx1NTIzNlx1OEZDN1x1N0EwQiAqL1xyXG4gIHZlcmJvc2U/OiBib29sZWFuXHJcbiAgLyoqIFx1ODFFQVx1NUI5QVx1NEU0OVx1NjVFNVx1NUZEN1x1NTI0RFx1N0YwMFx1RkYwQ1x1NzUyOFx1NEU4RVx1NTMzQVx1NTIwNlx1NEUwRFx1NTQwQ1x1NjNEMlx1NEVGNlx1NzY4NFx1NjVFNVx1NUZEN1x1OEY5M1x1NTFGQSAqL1xyXG4gIGxvZ1ByZWZpeD86IHN0cmluZ1xyXG59XHJcblxyXG4vKipcclxuICogXHU5RUQ4XHU4QkE0XHU5MTREXHU3RjZFXHJcbiAqXHJcbiAqIFx1NjgzOVx1NjM2RSBVbmlBcHAgXHU1Qjk4XHU2NUI5XHU2NTg3XHU2ODYzXHU4OUM0XHU4MzAzXHU4QkJFXHU3RjZFXHU5RUQ4XHU4QkE0XHU1MDNDXHVGRjFBXHJcbiAqIC0gc291cmNlRGlyOiAnbmF0aXZlcGx1Z2lucycgLSBcdTdCMjZcdTU0MDhcdTVCOThcdTY1QjlcdTY3MkNcdTU3MzBcdTYzRDJcdTRFRjZcdTVCNThcdTUwQThcdTg5QzRcdTgzMDNcclxuICogLSB0YXJnZXREaXJOYW1lOiAnbmF0aXZlcGx1Z2lucycgLSBcdTY3ODRcdTVFRkFcdTU0MEVcdTRGRERcdTYzMDFcdTc2RjhcdTU0MENcdTc2ODRcdTc2RUVcdTVGNTVcdTdFRDNcdTY3ODRcclxuICovXHJcbmNvbnN0IERFRkFVTFRfT1BUSU9OUzogUmVxdWlyZWQ8Q29weU5hdGl2ZVJlc291cmNlc09wdGlvbnM+ID0ge1xyXG4gIGVuYWJsZTogdHJ1ZSxcclxuICBzb3VyY2VEaXI6ICduYXRpdmVwbHVnaW5zJyxcclxuICB0YXJnZXREaXJOYW1lOiAnbmF0aXZlcGx1Z2lucycsXHJcbiAgdmVyYm9zZTogdHJ1ZSxcclxuICBsb2dQcmVmaXg6ICdbY29weS1uYXRpdmUtcmVzb3VyY2VzXScsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVbmlBcHAgXHU1MzlGXHU3NTFGXHU2M0QyXHU0RUY2XHU4RDQ0XHU2RTkwXHU1OTBEXHU1MjM2XHU2M0QyXHU0RUY2XHJcbiAqXHJcbiAqIFx1NTI5Rlx1ODBGRFx1OEJGNFx1NjYwRVx1RkYxQVxyXG4gKiAxLiBcdTg5RTNcdTUxQjMgVW5pQXBwIFx1NEY3Rlx1NzUyOFx1NjcyQ1x1NTczMFx1NTM5Rlx1NzUxRlx1NjNEMlx1NEVGNlx1NjVGNlx1RkYwQ1x1NjI1M1x1NTMwNVx1NTQwRVx1NTM5Rlx1NzUxRlx1NjNEMlx1NEVGNlx1OEQ0NFx1NkU5MFx1NjI3RVx1NEUwRFx1NTIzMFx1NzY4NFx1OTVFRVx1OTg5OFxyXG4gKiAyLiBcdTVDMDZcdTk4NzlcdTc2RUVcdTY4MzlcdTc2RUVcdTVGNTVcdTRFMEJcdTc2ODQgbmF0aXZlcGx1Z2lucyBcdTc2RUVcdTVGNTVcdTU5MERcdTUyMzZcdTUyMzBcdTY3ODRcdTVFRkFcdThGOTNcdTUxRkFcdTc2RUVcdTVGNTVcdTRFMkRcclxuICogMy4gXHU2NTJGXHU2MzAxIEFuZHJvaWQgXHU1NDhDIGlPUyBcdTVFNzNcdTUzRjBcdTc2ODRcdTUzOUZcdTc1MUZcdTYzRDJcdTRFRjZcdThENDRcdTZFOTBcdTU5MERcdTUyMzZcclxuICogNC4gXHU0RUM1XHU1NzI4IGFwcCBcdTVFNzNcdTUzRjBcdTY3ODRcdTVFRkFcdTY1RjZcdTc1MUZcdTY1NDhcdUZGMENcdTUxNzZcdTRFRDZcdTVFNzNcdTUzRjBcdUZGMDhINVx1MzAwMVx1NUMwRlx1N0EwQlx1NUU4Rlx1RkYwOVx1NEUwRFx1NjI2N1x1ODg0Q1xyXG4gKlxyXG4gKiBcdTRGN0ZcdTc1MjhcdTU3M0FcdTY2NkZcdUZGMUFcclxuICogLSBcdTRGN0ZcdTc1MjhcdTRFODYgVW5pQXBwIFx1NjcyQ1x1NTczMFx1NTM5Rlx1NzUxRlx1NjNEMlx1NEVGNlx1RkYwOFx1OTc1RVx1NEU5MVx1N0FFRlx1NjNEMlx1NEVGNlx1RkYwOVxyXG4gKiAtIFx1NTM5Rlx1NzUxRlx1NjNEMlx1NEVGNlx1NTMwNVx1NTQyQlx1OTg5RFx1NTkxNlx1NzY4NFx1OEQ0NFx1NkU5MFx1NjU4N1x1NEVGNlx1RkYwOFx1NTk4MiAuc28gXHU1RTkzXHU2NTg3XHU0RUY2XHUzMDAxXHU5MTREXHU3RjZFXHU2NTg3XHU0RUY2XHU3QjQ5XHVGRjA5XHJcbiAqIC0gXHU5NzAwXHU4OTgxXHU1NzI4XHU2MjUzXHU1MzA1XHU1NDBFXHU0RkREXHU2MzAxXHU1MzlGXHU3NTFGXHU2M0QyXHU0RUY2XHU3Njg0XHU1QjhDXHU2NTc0XHU3NkVFXHU1RjU1XHU3RUQzXHU2Nzg0XHJcbiAqXHJcbiAqIFx1NUI5OFx1NjVCOVx1NjU4N1x1Njg2M1x1NTNDMlx1ODAwM1x1RkYxQVxyXG4gKiBAc2VlIGh0dHBzOi8vdW5pYXBwLmRjbG91ZC5uZXQuY24vcGx1Z2luL25hdGl2ZS1wbHVnaW4uaHRtbCMlRTYlOUMlQUMlRTUlOUMlQjAlRTYlOEYlOTIlRTQlQkIlQjYtJUU5JTlEJTlFJUU1JTg2JTg1JUU3JUJEJUFFJUU1JThFJTlGJUU3JTk0JTlGJUU2JThGJTkyJUU0JUJCJUI2XHJcbiAqIEBzZWUgaHR0cHM6Ly91bmlhcHAuZGNsb3VkLm5ldC5jbi90dXRvcmlhbC9udnVlLWFwaS5odG1sI2RvbVxyXG4gKlxyXG4gKiBAcGFyYW0gb3B0aW9ucyBcdTYzRDJcdTRFRjZcdTkxNERcdTdGNkVcdTkwMDlcdTk4NzlcclxuICogQHJldHVybnMgVml0ZSBcdTYzRDJcdTRFRjZcdTVCRjlcdThDNjFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3B5TmF0aXZlUmVzb3VyY2VzKG9wdGlvbnM6IENvcHlOYXRpdmVSZXNvdXJjZXNPcHRpb25zID0ge30pOiBQbHVnaW4ge1xyXG4gIGNvbnN0IGNvbmZpZyA9IHsgLi4uREVGQVVMVF9PUFRJT05TLCAuLi5vcHRpb25zIH1cclxuXHJcbiAgLy8gXHU1OTgyXHU2NzlDXHU2M0QyXHU0RUY2XHU4OEFCXHU3OTgxXHU3NTI4XHVGRjBDXHU4RkQ0XHU1NkRFXHU0RTAwXHU0RTJBXHU3QTdBXHU2M0QyXHU0RUY2XHJcbiAgaWYgKCFjb25maWcuZW5hYmxlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lOiAnY29weS1uYXRpdmUtcmVzb3VyY2VzLWRpc2FibGVkJyxcclxuICAgICAgYXBwbHk6ICdidWlsZCcsXHJcbiAgICAgIHdyaXRlQnVuZGxlKCkge1xyXG4gICAgICAgIC8vIFx1NjNEMlx1NEVGNlx1NURGMlx1Nzk4MVx1NzUyOFx1RkYwQ1x1NEUwRFx1NjI2N1x1ODg0Q1x1NEVGQlx1NEY1NVx1NjRDRFx1NEY1Q1xyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6ICdjb3B5LW5hdGl2ZS1yZXNvdXJjZXMnLFxyXG4gICAgYXBwbHk6ICdidWlsZCcsIC8vIFx1NTNFQVx1NTcyOFx1Njc4NFx1NUVGQVx1NjVGNlx1NUU5NFx1NzUyOFxyXG4gICAgZW5mb3JjZTogJ3Bvc3QnLCAvLyBcdTU3MjhcdTUxNzZcdTRFRDZcdTYzRDJcdTRFRjZcdTYyNjdcdTg4NENcdTVCOENcdTZCRDVcdTU0MEVcdTYyNjdcdTg4NENcclxuXHJcbiAgICBhc3luYyB3cml0ZUJ1bmRsZSgpIHtcclxuICAgICAgY29uc3QgeyBzb3VyY2VEaXIsIHRhcmdldERpck5hbWUsIHZlcmJvc2UsIGxvZ1ByZWZpeCB9ID0gY29uZmlnXHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIFx1ODNCN1x1NTNENlx1OTg3OVx1NzZFRVx1NjgzOVx1NzZFRVx1NUY1NVx1OERFRlx1NUY4NFxyXG4gICAgICAgIGNvbnN0IHByb2plY3RSb290ID0gcHJvY2Vzcy5jd2QoKVxyXG5cclxuICAgICAgICAvLyBcdTY3ODRcdTVFRkFcdTZFOTBcdTc2RUVcdTVGNTVcdTdFRERcdTVCRjlcdThERUZcdTVGODRcdUZGMDhcdTk4NzlcdTc2RUVcdTY4MzlcdTc2RUVcdTVGNTVcdTRFMEJcdTc2ODQgbmF0aXZlcGx1Z2lucyBcdTc2RUVcdTVGNTVcdUZGMDlcclxuICAgICAgICBjb25zdCBzb3VyY2VQYXRoID0gcGF0aC5yZXNvbHZlKHByb2plY3RSb290LCBzb3VyY2VEaXIpXHJcblxyXG4gICAgICAgIC8vIFx1Njc4NFx1NUVGQVx1NzZFRVx1NjgwN1x1OERFRlx1NUY4NFx1RkYxQWRpc3QvW2J1aWxkfGRldl0vW3BsYXRmb3JtXS9uYXRpdmVwbHVnaW5zXHJcbiAgICAgICAgLy8gYnVpbGRNb2RlOiAnYnVpbGQnIChcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODMpIFx1NjIxNiAnZGV2JyAoXHU1RjAwXHU1M0QxXHU3M0FGXHU1ODgzKVxyXG4gICAgICAgIC8vIHBsYXRmb3JtOiAnYXBwJyAoQXBwXHU1RTczXHU1M0YwKSBcdTYyMTZcdTUxNzZcdTRFRDZcdTVFNzNcdTUzRjBcdTY4MDdcdThCQzZcclxuICAgICAgICBjb25zdCBidWlsZE1vZGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJ2J1aWxkJyA6ICdkZXYnXHJcbiAgICAgICAgY29uc3QgcGxhdGZvcm0gPSBwcm9jZXNzLmVudi5VTklfUExBVEZPUk0gfHwgJ2FwcCdcclxuICAgICAgICBjb25zdCB0YXJnZXRQYXRoID0gcGF0aC5yZXNvbHZlKFxyXG4gICAgICAgICAgcHJvamVjdFJvb3QsXHJcbiAgICAgICAgICAnZGlzdCcsXHJcbiAgICAgICAgICBidWlsZE1vZGUsXHJcbiAgICAgICAgICBwbGF0Zm9ybSxcclxuICAgICAgICAgIHRhcmdldERpck5hbWUsXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICAvLyBcdTY4QzBcdTY3RTVcdTZFOTBcdTc2RUVcdTVGNTVcdTY2MkZcdTU0MjZcdTVCNThcdTU3MjhcclxuICAgICAgICAvLyBcdTU5ODJcdTY3OUNcdTRFMERcdTVCNThcdTU3MjggbmF0aXZlcGx1Z2lucyBcdTc2RUVcdTVGNTVcdUZGMENcdThCRjRcdTY2MEVcdTk4NzlcdTc2RUVcdTZDQTFcdTY3MDlcdTRGN0ZcdTc1MjhcdTY3MkNcdTU3MzBcdTUzOUZcdTc1MUZcdTYzRDJcdTRFRjZcclxuICAgICAgICBjb25zdCBzb3VyY2VFeGlzdHMgPSBhd2FpdCBmcy5wYXRoRXhpc3RzKHNvdXJjZVBhdGgpXHJcbiAgICAgICAgaWYgKCFzb3VyY2VFeGlzdHMpIHtcclxuICAgICAgICAgIGlmICh2ZXJib3NlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtsb2dQcmVmaXh9IFx1NkU5MFx1NzZFRVx1NUY1NVx1NEUwRFx1NUI1OFx1NTcyOFx1RkYwQ1x1OERGM1x1OEZDN1x1NTkwRFx1NTIzNlx1NjRDRFx1NEY1Q2ApXHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtsb2dQcmVmaXh9IFx1NkU5MFx1NzZFRVx1NUY1NVx1OERFRlx1NUY4NDogJHtzb3VyY2VQYXRofWApXHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtsb2dQcmVmaXh9IFx1NTk4Mlx1OTcwMFx1NEY3Rlx1NzUyOFx1NjcyQ1x1NTczMFx1NTM5Rlx1NzUxRlx1NjNEMlx1NEVGNlx1RkYwQ1x1OEJGN1x1NTcyOFx1OTg3OVx1NzZFRVx1NjgzOVx1NzZFRVx1NUY1NVx1NTIxQlx1NUVGQSBuYXRpdmVwbHVnaW5zIFx1NzZFRVx1NUY1NWApXHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtsb2dQcmVmaXh9IFx1NUU3Nlx1NjMwOVx1NzE2N1x1NUI5OFx1NjVCOVx1NjU4N1x1Njg2M1x1NjUzRVx1NTE2NVx1NTM5Rlx1NzUxRlx1NjNEMlx1NEVGNlx1NjU4N1x1NEVGNmApXHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtsb2dQcmVmaXh9IFx1NTNDMlx1ODAwMzogaHR0cHM6Ly91bmlhcHAuZGNsb3VkLm5ldC5jbi9wbHVnaW4vbmF0aXZlLXBsdWdpbi5odG1sYClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gXHU2OEMwXHU2N0U1XHU2RTkwXHU3NkVFXHU1RjU1XHU2NjJGXHU1NDI2XHU0RTNBXHU3QTdBXHJcbiAgICAgICAgLy8gXHU1OTgyXHU2NzlDXHU3NkVFXHU1RjU1XHU1QjU4XHU1NzI4XHU0RjQ2XHU0RTNBXHU3QTdBXHVGRjBDXHU0RTVGXHU4REYzXHU4RkM3XHU1OTBEXHU1MjM2XHU2NENEXHU0RjVDXHJcbiAgICAgICAgY29uc3Qgc291cmNlRmlsZXMgPSBhd2FpdCBmcy5yZWFkZGlyKHNvdXJjZVBhdGgpXHJcbiAgICAgICAgaWYgKHNvdXJjZUZpbGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgaWYgKHZlcmJvc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2xvZ1ByZWZpeH0gXHU2RTkwXHU3NkVFXHU1RjU1XHU0RTNBXHU3QTdBXHVGRjBDXHU4REYzXHU4RkM3XHU1OTBEXHU1MjM2XHU2NENEXHU0RjVDYClcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2xvZ1ByZWZpeH0gXHU2RTkwXHU3NkVFXHU1RjU1XHU4REVGXHU1Rjg0OiAke3NvdXJjZVBhdGh9YClcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2xvZ1ByZWZpeH0gXHU4QkY3XHU1NzI4IG5hdGl2ZXBsdWdpbnMgXHU3NkVFXHU1RjU1XHU0RTJEXHU2NTNFXHU1MTY1XHU1MzlGXHU3NTFGXHU2M0QyXHU0RUY2XHU2NTg3XHU0RUY2YClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gXHU3ODZFXHU0RkREXHU3NkVFXHU2ODA3XHU3NkVFXHU1RjU1XHU1M0NBXHU1MTc2XHU3MjM2XHU3NkVFXHU1RjU1XHU1QjU4XHU1NzI4XHJcbiAgICAgICAgYXdhaXQgZnMuZW5zdXJlRGlyKHRhcmdldFBhdGgpXHJcblxyXG4gICAgICAgIGlmICh2ZXJib3NlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHtsb2dQcmVmaXh9IFx1NUYwMFx1NTlDQlx1NTkwRFx1NTIzNiBVbmlBcHAgXHU2NzJDXHU1NzMwXHU1MzlGXHU3NTFGXHU2M0QyXHU0RUY2Li4uYClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGAke2xvZ1ByZWZpeH0gXHU2RTkwXHU3NkVFXHU1RjU1OiAke3NvdXJjZVBhdGh9YClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGAke2xvZ1ByZWZpeH0gXHU3NkVFXHU2ODA3XHU3NkVFXHU1RjU1OiAke3RhcmdldFBhdGh9YClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGAke2xvZ1ByZWZpeH0gXHU2Nzg0XHU1RUZBXHU2QTIxXHU1RjBGOiAke2J1aWxkTW9kZX1gKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYCR7bG9nUHJlZml4fSBcdTc2RUVcdTY4MDdcdTVFNzNcdTUzRjA6ICR7cGxhdGZvcm19YClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGAke2xvZ1ByZWZpeH0gXHU1M0QxXHU3M0IwICR7c291cmNlRmlsZXMubGVuZ3RofSBcdTRFMkFcdTUzOUZcdTc1MUZcdTYzRDJcdTRFRjZcdTY1ODdcdTRFRjYvXHU3NkVFXHU1RjU1YClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFx1NjI2N1x1ODg0Q1x1NjU4N1x1NEVGNlx1NTkwRFx1NTIzNlx1NjRDRFx1NEY1Q1xyXG4gICAgICAgIC8vIFx1NUMwNlx1NjU3NFx1NEUyQSBuYXRpdmVwbHVnaW5zIFx1NzZFRVx1NUY1NVx1NTkwRFx1NTIzNlx1NTIzMFx1Njc4NFx1NUVGQVx1OEY5M1x1NTFGQVx1NzZFRVx1NUY1NVxyXG4gICAgICAgIGF3YWl0IGZzLmNvcHkoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCwge1xyXG4gICAgICAgICAgb3ZlcndyaXRlOiB0cnVlLCAvLyBcdTg5ODZcdTc2RDZcdTVERjJcdTVCNThcdTU3MjhcdTc2ODRcdTY1ODdcdTRFRjZcdUZGMENcdTc4NkVcdTRGRERcdTRGN0ZcdTc1MjhcdTY3MDBcdTY1QjBcdTcyNDhcdTY3MkNcclxuICAgICAgICAgIGVycm9yT25FeGlzdDogZmFsc2UsIC8vIFx1NTk4Mlx1Njc5Q1x1NzZFRVx1NjgwN1x1NjU4N1x1NEVGNlx1NUI1OFx1NTcyOFx1NEUwRFx1NjJBNVx1OTUxOVxyXG4gICAgICAgICAgcHJlc2VydmVUaW1lc3RhbXBzOiB0cnVlLCAvLyBcdTRGRERcdTYzMDFcdTY1ODdcdTRFRjZcdTc2ODRcdTY1RjZcdTk1RjRcdTYyMzNcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAodmVyYm9zZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYCR7bG9nUHJlZml4fSBcdTI3MDUgVW5pQXBwIFx1NjcyQ1x1NTczMFx1NTM5Rlx1NzUxRlx1NjNEMlx1NEVGNlx1NTkwRFx1NTIzNlx1NUI4Q1x1NjIxMGApXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHtsb2dQcmVmaXh9IFx1NURGMlx1NjIxMFx1NTI5Rlx1NTkwRFx1NTIzNiAke3NvdXJjZUZpbGVzLmxlbmd0aH0gXHU0RTJBXHU2NTg3XHU0RUY2L1x1NzZFRVx1NUY1NVx1NTIzMFx1Njc4NFx1NUVGQVx1NzZFRVx1NUY1NWApXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHtsb2dQcmVmaXh9IFx1NTM5Rlx1NzUxRlx1NjNEMlx1NEVGNlx1NzNCMFx1NTcyOFx1NTNFRlx1NEVFNVx1NTcyOCBBcHAgXHU0RTJEXHU2QjYzXHU1RTM4XHU0RjdGXHU3NTI4YClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgJHtjb25maWcubG9nUHJlZml4fSBcdTI3NEMgXHU1OTBEXHU1MjM2IFVuaUFwcCBcdTY3MkNcdTU3MzBcdTUzOUZcdTc1MUZcdTYzRDJcdTRFRjZcdTU5MzFcdThEMjU6YCwgZXJyb3IpXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgJHtjb25maWcubG9nUHJlZml4fSBcdTk1MTlcdThCRUZcdThCRTZcdTYwQzU6YCwgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBTdHJpbmcoZXJyb3IpKVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7Y29uZmlnLmxvZ1ByZWZpeH0gXHU4QkY3XHU2OEMwXHU2N0U1XHU2RTkwXHU3NkVFXHU1RjU1XHU2NzQzXHU5NjUwXHU1NDhDXHU3OEMxXHU3NkQ4XHU3QTdBXHU5NUY0YClcclxuICAgICAgICAvLyBcdTRFMERcdTYyOUJcdTUxRkFcdTk1MTlcdThCRUZcdUZGMENcdTkwN0ZcdTUxNERcdTVGNzFcdTU0Q0RcdTY1NzRcdTRFMkFcdTY3ODRcdTVFRkFcdThGQzdcdTdBMEJcdUZGMENcdTRGNDZcdTRGMUFcdThCQjBcdTVGNTVcdThCRTZcdTdFQzZcdTc2ODRcdTk1MTlcdThCRUZcdTRGRTFcdTYwNkZcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTUyMUJcdTVFRkEgVW5pQXBwIFx1NjcyQ1x1NTczMFx1NTM5Rlx1NzUxRlx1NjNEMlx1NEVGNlx1OEQ0NFx1NkU5MFx1NTkwRFx1NTIzNlx1NjNEMlx1NEVGNlx1NzY4NFx1NEZCRlx1NjM3N1x1NTFGRFx1NjU3MFxyXG4gKlxyXG4gKiBcdThGRDlcdTY2MkZcdTRFMDBcdTRFMkFcdTRGQkZcdTYzNzdcdTc2ODRcdTVERTVcdTUzODJcdTUxRkRcdTY1NzBcdUZGMENcdTc1MjhcdTRFOEVcdTVGRUJcdTkwMUZcdTUyMUJcdTVFRkFcdTYzRDJcdTRFRjZcdTVCOUVcdTRGOEJcclxuICogXHU3Mjc5XHU1MjJCXHU5MDAyXHU3NTI4XHU0RThFXHU1NzI4IHZpdGUuY29uZmlnLnRzIFx1NEUyRFx1OEZEQlx1ODg0Q1x1Njc2MVx1NEVGNlx1NjAyN1x1NjNEMlx1NEVGNlx1OTE0RFx1N0Y2RVxyXG4gKlxyXG4gKiBcdTRGN0ZcdTc1MjhcdTc5M0FcdTRGOEJcdUZGMUFcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiAvLyBcdTU3Mjggdml0ZS5jb25maWcudHMgXHU0RTJEXHJcbiAqIHBsdWdpbnM6IFtcclxuICogICAvLyBcdTRFQzVcdTU3MjggYXBwIFx1NUU3M1x1NTNGMFx1NEUxNFx1NTQyRlx1NzUyOFx1NjVGNlx1NzUxRlx1NjU0OFxyXG4gKiAgIFVOSV9QTEFURk9STSA9PT0gJ2FwcCdcclxuICogICAgID8gY3JlYXRlQ29weU5hdGl2ZVJlc291cmNlc1BsdWdpbihcclxuICogICAgICAgICBWSVRFX0NPUFlfTkFUSVZFX1JFU19FTkFCTEUgPT09ICd0cnVlJyxcclxuICogICAgICAgICB7IHZlcmJvc2U6IG1vZGUgPT09ICdkZXZlbG9wbWVudCcgfVxyXG4gKiAgICAgICApXHJcbiAqICAgICA6IG51bGwsXHJcbiAqIF1cclxuICogYGBgXHJcbiAqXHJcbiAqIEBwYXJhbSBlbmFibGUgXHU2NjJGXHU1NDI2XHU1NDJGXHU3NTI4XHU2M0QyXHU0RUY2XHVGRjBDXHU5MDFBXHU1RTM4XHU5MDFBXHU4RkM3XHU3M0FGXHU1ODgzXHU1M0Q4XHU5MUNGXHU2M0E3XHU1MjM2XHJcbiAqIEBwYXJhbSBvcHRpb25zIFx1NTE3Nlx1NEVENlx1OTE0RFx1N0Y2RVx1OTAwOVx1OTg3OVx1RkYwQ1x1NEUwRFx1NTMwNVx1NTQyQiBlbmFibGUgXHU1QzVFXHU2MDI3XHJcbiAqIEByZXR1cm5zIFZpdGUgXHU2M0QyXHU0RUY2XHU1QkY5XHU4QzYxXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29weU5hdGl2ZVJlc291cmNlc1BsdWdpbihcclxuICBlbmFibGU6IGJvb2xlYW4gPSB0cnVlLFxyXG4gIG9wdGlvbnM6IE9taXQ8Q29weU5hdGl2ZVJlc291cmNlc09wdGlvbnMsICdlbmFibGUnPiA9IHt9LFxyXG4pOiBQbHVnaW4ge1xyXG4gIHJldHVybiBjb3B5TmF0aXZlUmVzb3VyY2VzKHsgZW5hYmxlLCAuLi5vcHRpb25zIH0pXHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3b3JrU3BhY2VcXFxcQ29kZVxcXFxcdTUyNERcdTdBRUZcXFxcdW5pLWFwcFxcXFxpLWxvdmUteW91XFxcXHZpdGUtcGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcd29ya1NwYWNlXFxcXENvZGVcXFxcXHU1MjREXHU3QUVGXFxcXHVuaS1hcHBcXFxcaS1sb3ZlLXlvdVxcXFx2aXRlLXBsdWdpbnNcXFxcc3luYy1tYW5pZmVzdC1wbHVnaW5zLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi93b3JrU3BhY2UvQ29kZS8lRTUlODklOEQlRTclQUIlQUYvdW5pLWFwcC9pLWxvdmUteW91L3ZpdGUtcGx1Z2lucy9zeW5jLW1hbmlmZXN0LXBsdWdpbnMudHNcIjtpbXBvcnQgdHlwZSB7IFBsdWdpbiB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCBmcyBmcm9tICdub2RlOmZzJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXHJcbmltcG9ydCBwcm9jZXNzIGZyb20gJ25vZGU6cHJvY2VzcydcclxuXHJcbmludGVyZmFjZSBNYW5pZmVzdFR5cGUge1xyXG4gICdwbHVzJz86IHtcclxuICAgIGRpc3RyaWJ1dGU/OiB7XHJcbiAgICAgIHBsdWdpbnM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XHJcbiAgICB9XHJcbiAgfVxyXG4gICdhcHAtcGx1cyc/OiB7XHJcbiAgICBkaXN0cmlidXRlPzoge1xyXG4gICAgICBwbHVnaW5zPzogUmVjb3JkPHN0cmluZywgYW55PlxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3luY01hbmlmZXN0UGx1Z2luKCk6IFBsdWdpbiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6ICdzeW5jLW1hbmlmZXN0JyxcclxuICAgIGFwcGx5OiAnYnVpbGQnLFxyXG4gICAgZW5mb3JjZTogJ3Bvc3QnLFxyXG4gICAgd3JpdGVCdW5kbGU6IHtcclxuICAgICAgb3JkZXI6ICdwb3N0JyxcclxuICAgICAgaGFuZGxlcigpIHtcclxuICAgICAgICBjb25zdCBzcmNNYW5pZmVzdFBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJy4vc3JjL21hbmlmZXN0Lmpzb24nKVxyXG4gICAgICAgIGNvbnN0IGRpc3RBcHBQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICcuL2Rpc3QvZGV2L2FwcC9tYW5pZmVzdC5qc29uJylcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIC8vIFx1OEJGQlx1NTNENlx1NkU5MFx1NjU4N1x1NEVGNlxyXG4gICAgICAgICAgY29uc3Qgc3JjTWFuaWZlc3QgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhzcmNNYW5pZmVzdFBhdGgsICd1dGY4JykpIGFzIE1hbmlmZXN0VHlwZVxyXG5cclxuICAgICAgICAgIC8vIFx1Nzg2RVx1NEZERFx1NzZFRVx1NjgwN1x1NzZFRVx1NUY1NVx1NUI1OFx1NTcyOFxyXG4gICAgICAgICAgY29uc3QgZGlzdEFwcERpciA9IHBhdGguZGlybmFtZShkaXN0QXBwUGF0aClcclxuICAgICAgICAgIGlmICghZnMuZXhpc3RzU3luYyhkaXN0QXBwRGlyKSkge1xyXG4gICAgICAgICAgICBmcy5ta2RpclN5bmMoZGlzdEFwcERpciwgeyByZWN1cnNpdmU6IHRydWUgfSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBcdThCRkJcdTUzRDZcdTc2RUVcdTY4MDdcdTY1ODdcdTRFRjZcdUZGMDhcdTU5ODJcdTY3OUNcdTVCNThcdTU3MjhcdUZGMDlcclxuICAgICAgICAgIGxldCBkaXN0TWFuaWZlc3Q6IE1hbmlmZXN0VHlwZSA9IHt9XHJcbiAgICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhkaXN0QXBwUGF0aCkpIHtcclxuICAgICAgICAgICAgZGlzdE1hbmlmZXN0ID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoZGlzdEFwcFBhdGgsICd1dGY4JykpXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gXHU1OTgyXHU2NzlDXHU2RTkwXHU2NTg3XHU0RUY2XHU1QjU4XHU1NzI4IHBsdWdpbnNcclxuICAgICAgICAgIGlmIChzcmNNYW5pZmVzdFsnYXBwLXBsdXMnXT8uZGlzdHJpYnV0ZT8ucGx1Z2lucykge1xyXG4gICAgICAgICAgICAvLyBcdTc4NkVcdTRGRERcdTc2RUVcdTY4MDdcdTY1ODdcdTRFRjZcdTRFMkRcdTY3MDlcdTVGQzVcdTg5ODFcdTc2ODRcdTVCRjlcdThDNjFcdTdFRDNcdTY3ODRcclxuICAgICAgICAgICAgaWYgKCFkaXN0TWFuaWZlc3QucGx1cylcclxuICAgICAgICAgICAgICBkaXN0TWFuaWZlc3QucGx1cyA9IHt9XHJcbiAgICAgICAgICAgIGlmICghZGlzdE1hbmlmZXN0LnBsdXMuZGlzdHJpYnV0ZSlcclxuICAgICAgICAgICAgICBkaXN0TWFuaWZlc3QucGx1cy5kaXN0cmlidXRlID0ge31cclxuXHJcbiAgICAgICAgICAgIC8vIFx1NTkwRFx1NTIzNiBwbHVnaW5zIFx1NTE4NVx1NUJCOVxyXG4gICAgICAgICAgICBkaXN0TWFuaWZlc3QucGx1cy5kaXN0cmlidXRlLnBsdWdpbnMgPSBzcmNNYW5pZmVzdFsnYXBwLXBsdXMnXS5kaXN0cmlidXRlLnBsdWdpbnNcclxuXHJcbiAgICAgICAgICAgIC8vIFx1NTE5OVx1NTE2NVx1NjZGNFx1NjVCMFx1NTQwRVx1NzY4NFx1NTE4NVx1NUJCOVxyXG4gICAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGRpc3RBcHBQYXRoLCBKU09OLnN0cmluZ2lmeShkaXN0TWFuaWZlc3QsIG51bGwsIDIpKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnXHUyNzA1IE1hbmlmZXN0IHBsdWdpbnMgXHU1NDBDXHU2QjY1XHU2MjEwXHU1MjlGJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdcdTI3NEMgXHU1NDBDXHU2QjY1IG1hbmlmZXN0IHBsdWdpbnMgXHU1OTMxXHU4RDI1OicsIGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVUsT0FBT0EsV0FBVTtBQUNwVixPQUFPQyxjQUFhO0FBQ3BCLE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUV2QixPQUFPLGdCQUFnQjtBQUV2QixPQUFPLGlCQUFpQjtBQUV4QixPQUFPLGNBQWM7QUFHckIsT0FBTyxpQkFBaUI7QUFLeEIsT0FBTyxrQkFBa0I7QUFFekIsT0FBTyxlQUFlO0FBQ3RCLE9BQU8sV0FBVztBQUNsQixTQUFTLGtCQUFrQjtBQUMzQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUyxjQUFjLGVBQWU7QUFDdEMsT0FBTyxpQkFBaUI7OztBQ3pCMlUsU0FBUyxZQUFZO0FBQ3hYLE9BQU8sUUFBUTtBQUNmLE9BQU8sVUFBVTtBQUNqQixPQUFPLGFBQWE7QUFLcEIsU0FBUyxnQkFBZ0I7QUFDdkIsUUFBTSxXQUFXLFFBQVE7QUFDekIsUUFBTSxFQUFFLGFBQWEsSUFBSSxRQUFRO0FBRWpDLFFBQU0sa0JBQWtCLGlCQUFpQixjQUFjLG1DQUFVLGlCQUFpQixjQUFjLHlDQUFXO0FBRzNHLFFBQU0sY0FBYyxLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsWUFBWSxZQUFZLEVBQUU7QUFHMUUsTUFBSSxDQUFDLEdBQUcsV0FBVyxXQUFXLEdBQUc7QUFDL0IsWUFBUSxJQUFJLFVBQUssZUFBZSwrQ0FBWSxXQUFXO0FBQ3ZEO0FBQUEsRUFDRjtBQUVBLFVBQVEs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O0FBQUE7QUFBQSxRQUNwQjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLG1CQUFtQjtBQUFBLE1BQ25CLFdBQVc7QUFBQSxRQUNULFlBQVksQ0FBQyxLQUFLO0FBQUEsUUFDbEIsTUFBTTtBQUFBO0FBQUEsUUFDTixzQkFBc0I7QUFBQTtBQUFBLFFBQ3RCLEtBQUs7QUFBQTtBQUFBLE1BQ1AsQ0FBQztBQUFBO0FBQUEsTUFFRCxhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sb0JBQW9CLEtBQUssVUFBVSxxQkFBcUI7QUFBQSxJQUMxRDtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gsU0FBUztBQUFBLFFBQ1AsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFLVDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFFQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLQyxNQUFLLEtBQUtELFNBQVEsSUFBSSxHQUFHLE9BQU87QUFBQSxRQUNyQyxRQUFRQyxNQUFLLEtBQUtELFNBQVEsSUFBSSxHQUFHLHFCQUFxQjtBQUFBLE1BQ3hEO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsTUFBTSxPQUFPLFNBQVMsZUFBZSxFQUFFO0FBQUE7QUFBQSxNQUV2QyxPQUFPLEtBQUssTUFBTSxxQkFBcUIsSUFDbkM7QUFBQSxRQUNFLENBQUMscUJBQXFCLEdBQUc7QUFBQSxVQUN2QixRQUFRO0FBQUEsVUFDUixjQUFjO0FBQUE7QUFBQSxVQUVkLFNBQVMsQ0FBQUMsVUFBUUEsTUFBSyxRQUFRLElBQUksT0FBTyxJQUFJLHFCQUFxQixFQUFFLEdBQUcsRUFBRTtBQUFBLFFBQzNFO0FBQUEsTUFDRixJQUNBO0FBQUEsSUFDTjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsTUFBTSx3QkFBd0IsU0FBUyxDQUFDLFdBQVcsVUFBVSxJQUFJLENBQUM7QUFBQSxJQUNwRTtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsV0FBVztBQUFBO0FBQUE7QUFBQSxNQUdYLFFBQVE7QUFBQTtBQUFBLE1BRVIsUUFBUSxTQUFTLGdCQUFnQixRQUFRO0FBQUEsSUFDM0M7QUFBQSxFQUNGLENBQUM7QUFDSCxDQUFDOyIsCiAgIm5hbWVzIjogWyJwYXRoIiwgInByb2Nlc3MiLCAicGF0aCIsICJwcm9jZXNzIiwgImZzIiwgInByb2Nlc3MiLCAicGF0aCIsICJmcyIsICJmcyIsICJwYXRoIiwgInByb2Nlc3MiLCAicGF0aCIsICJwcm9jZXNzIiwgImZzIiwgInByb2Nlc3MiLCAicGF0aCJdCn0K
