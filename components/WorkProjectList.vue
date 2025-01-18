<script setup>
import { ref } from "vue";
import WorkProjectCard from "./WorkProjectCard.vue";

const workProjects = ref([
  {
    id: 1,
    title: "Corporate Website Redesign",
    description: "Led the frontend development for a complete redesign of a corporate website, improving UX and performance.",
    imageUrl: "https://res.cloudinary.com/theazs/image/upload/v1737232766/personal-website/zabfcuvtplaxvl61kens.png",
    projectUrl: "https://example.com",
  },
  {
    id: 2,
    title: "E-commerce Dashboard",
    description: "Developed an interactive e-commerce analytics dashboard using Vue and Tailwind.",
    imageUrl: "https://res.cloudinary.com/theazs/image/upload/v1737232766/personal-website/zabfcuvtplaxvl61kens.png",
    projectUrl: "",
  },
  {
    id: 3,
    title: "Mobile App Landing Page",
    description: "Created a responsive landing page for a new mobile app launch with optimized loading speeds.",
    imageUrl: "https://res.cloudinary.com/theazs/image/upload/v1737232766/personal-website/zabfcuvtplaxvl61kens.png",
    projectUrl: "https://example.com/mobile",
  },
]);
</script>

<template>
  <div class="work-project-list">
    <h2>Recent Work Projects</h2>
    <div v-if="workProjects.length">
      <WorkProjectCard 
        v-for="project in workProjects" 
        :key="project.id" 
        v-bind="project" 
      />
    </div>
    <p v-else>No recent projects available.</p>
  </div>
</template>

<style scoped>
.work-project-list {
  max-width: 900px;
  margin: auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
h2 {
  text-align: center;
  font-size: 1.5rem;
  grid-column: span 2;
}
</style>
