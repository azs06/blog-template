<script setup>
import { data as posts } from "../data/blog.data.mjs";
function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
</script>

<template>
  <h1>Blogs</h1>
  <div class="blog-list">
    <article v-for="post in posts" :key="post.id" class="blog-post">
      <div class="post-meta">
        <time :datetime="post.date">{{
          formatDate(post.frontmatter.date)
        }}</time>
        <span v-if="post.readTime" class="read-time"
          >· {{ post.readTime }}</span
        >
      </div>
      <h2 class="post-title">
        <a :href="post.url">{{ post.frontmatter.title }}</a>
      </h2>
      <p class="post-excerpt">{{ post.frontmatter.excerpt }}</p>
      <div class="post-footer">
        <span class="post-author">By {{ post.frontmatter.author }}</span>
        <div v-if="post.frontmatter.tags?.length" class="post-tags">
          <span v-for="tag in post.tags" :key="tag" class="post-tag">
            {{ tag }}
          </span>
        </div>
      </div>
    </article>
  </div>
</template>
<style scoped>
.blog-list {
  max-width: 800px;
  margin: 0 auto;
}

.blog-post {
  padding: 2rem 0;
  border-bottom: 1px solid var(--vp-c-divider-light);
}

.blog-post:last-child {
  border-bottom: none;
}

.post-meta {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 0.5rem;
}

.read-time {
  margin-left: 0.25rem;
}

.post-title {
  margin: 0.5rem 0;
  font-size: 1.8rem;
  line-height: 1.3;
}

.post-title a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.2s;
}

.post-title a:hover {
  color: var(--vp-c-brand);
}

.post-excerpt {
  margin: 1rem 0;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.post-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
}

.post-author {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.post-tags {
  display: flex;
  gap: 0.5rem;
}

.post-tag {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-dark);
}
</style>
