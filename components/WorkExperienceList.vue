<script setup>
import { ref } from "vue";
import WorkExperience from "./WorkExperience.vue";

const experiences = ref([
  {
    company: "Jetaport",
    role: "Technical Project Manager",
    duration: "2016 - 2019",
    description: "Led frontend development and managed technical projects for travel booking platforms.",
    companyUrl: "https://www.jetaport.com",
  },
  {
    company: "Butler Hospitality",
    role: "Frontend Engineer & Team Lead",
    duration: "2019 - 2022",
    description: "Developed a scalable, modular UI system for hotel room service and operational logistics.",
    companyUrl: "https://www.butlerhospitality.com",
  },
  {
    company: "Skipper Hospitality",
    role: "Senior Frontend Engineer",
    duration: "2022 - Present",
    description: "Architecting frontend solutions and mentoring teams in modern web technologies.",
    companyUrl: "https://www.skipperhospitality.com",
  },
]);
</script>

<template>
  <div class="work-experience-list">
    <h2>Work Experience</h2>
    <div v-if="experiences.length">
      <WorkExperience 
        v-for="experience in experiences" 
        :key="experience.company" 
        v-bind="experience"
      />
    </div>
    <p v-else>No work experience available.</p>
  </div>
</template>

<style scoped>
.work-experience-list {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}
h2 {
  text-align: center;
  font-size: 1.5rem;
}
</style>
