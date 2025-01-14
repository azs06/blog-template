<script setup lang="js">
import {data as projects} from "../data/projects.data.mjs"
const props = defineProps({
    filter: "work"
})
const projectsDataFiltered = props?.filter ? projects.data.filter(project => project.type == props.filter) : projects.data;
</script>

<template>
  <div class="projects-container">
    <div
      v-for="project in projectsDataFiltered"
      :key="project.id"
      class="project-card"
    >
      <h3 class="project-title">
        <a
          v-if="project.url"
          :href="project.url"
          target="_blank"
          rel="noopener"
        >
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
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-container {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin: 1rem 0;
}

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
</style>
