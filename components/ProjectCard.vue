<script setup>
import { computed } from "vue";
const props = defineProps(["project"]);
const project = props.project;
const stars = project?.stars;
const displayStars = computed(() => project?.stars > 0 ? `⭐ ${project?.stars}` : "");
</script>

<template>
  <div>
    <h3 class="project-title">
      <a v-if="project.url" :href="project.url" target="_blank" rel="noopener">
        {{ project.title }}
      </a>
      <span v-else>{{ project.title }}</span>
    </h3>
    <p v-if="project.description" class="project-description">
      {{ project.description }}
    </p>
    <div v-if="project.tags && project.tags.length" class="project-tags">
      <span v-for="tag in project.tags" :key="tag" class="project-tag">
        {{ tag }}
      </span>
      <span v-if="stars > 0">{{ displayStars }}</span>
    </div>
  </div>
</template>

<style lang="css">
.project-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 1rem;
  background-color: var(--vp-c-bg-soft);
  transition: transform 0.2s, box-shadow 0.2s;
}

.project-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.project-title {
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
  line-height: 1.4;
}

.project-title a {
  color: var(--vp-c-brand);
  text-decoration: none;
}

.project-title a:hover {
  text-decoration: underline;
}

.project-description {
  margin: 0.5rem 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  line-height: 1.5;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.project-tag {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-dark);
}
.repo-meta {
  display: flex;
  gap: 12px;
  font-size: 0.85rem;
  color: #666;
}
</style>
