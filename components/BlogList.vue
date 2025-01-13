<script setup>
import { data as posts } from '../data/blog.data.mjs'
</script>

<template>
  <h1>Blogs</h1>
  <ul>
    <li v-for="post of posts">
      <a :href="post.url">{{ post.frontmatter.title }}</a>
    </li>
  </ul>
</template>