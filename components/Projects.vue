<script setup lang="js">
import ProjectCard from "./ProjectCard.vue";
import {data as projects} from "../data/projects.data.mjs"
</script>

<template>
  <div class="projects-container">
    <div
      v-for="project in projects.data"
      :key="project.id"
      class="project-card"
    >
      <ProjectCard :project="project"></ProjectCard>
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
</style>
