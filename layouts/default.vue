<template>
  <div>
    <header class="site-header">
      <NuxtLink class="brand" to="/">
        <span class="brand-mark">SJ</span>
        <span>税嘉</span>
      </NuxtLink>

      <nav class="site-nav" aria-label="主导航">
        <NuxtLink to="/">首页</NuxtLink>
        <NuxtLink class="nav-anchor" to="/#fit" active-class="" exact-active-class="">方向</NuxtLink>
        <NuxtLink class="nav-anchor" to="/#experience" active-class="" exact-active-class="">经历</NuxtLink>
        <NuxtLink to="/blog">博客</NuxtLink>
        <NuxtLink class="nav-anchor" to="/#projects" active-class="" exact-active-class="">项目</NuxtLink>
      </nav>
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>
