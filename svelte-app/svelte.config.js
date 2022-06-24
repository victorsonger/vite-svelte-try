import sveltePreprocess from 'svelte-preprocess'

// https://github.com/sveltejs/svelte-preprocess/blob/main/docs/usage.md
// 注意 这种esm模块直接导出的写法，要求我们项目的package.json中必须声明 "type": "module"
// 否则就得用commonJS那种写法（
// modules.exports = {  preprocess: sveltePreprocess({
    // ...svelte-preprocess options
  // }),
  // ...other svelte options }
 // ）
export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess()
}
