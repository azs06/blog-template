<script setup>
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  language: {
    type: String,
    default: "",
  },
  stars: {
    type: Number,
    default: 0,
  },
  url: {
    type: String,
    required: true,
  },
});

const displayStars = computed(() => props.stars > 0 ? `⭐ ${props.stars}` : "");
</script>

<template>
  <div class="project-card">
    <h3>
      <a :href="url" target="_blank">{{ name }}</a>
    </h3>
    <p v-if="description">{{ description }}</p>
    <div class="repo-meta">
      <span v-if="language">{{ language }}</span>
      <span v-if="stars > 0">{{ displayStars }}</span>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 12px 0;
  background: #fff;
  transition: transform 0.2s ease-in-out;
}
.project-card:hover {
  transform: translateY(-5px);
}
h3 {
  margin: 0 0 8px;
  font-size: 1.2rem;
}
a {
  text-decoration: none;
  color: #0366d6;
}
p {
  font-size: 0.95rem;
  color: #555;
}
.repo-meta {
  display: flex;
  gap: 12px;
  font-size: 0.85rem;
  color: #666;
}
</style>
