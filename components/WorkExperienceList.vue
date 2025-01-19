<script setup>
import { ref } from "vue";
import WorkExperience from "./WorkExperience.vue";

const experiences = ref([
  {
    company: "Jetaport",
    role: "Frontend Engineer",
    duration: "2015 - 2018",
    description: "Worked as frontend engineer in developing our group booking platform, and other internal applications.",
    companyUrl: "https://www.jetaport.com",
  },
  {
    company: "Butler Hospitality",
    role: "Senior Frontend Engineer & Team Lead",
    duration: "2019 - 2022",
    description: "Worked as a senior developer for several key projects, Worked on mobile and iPad application development, also on the internal OMS application.",
    companyUrl: "https://www.butlerhospitality.com",
  },
  {
    company: "Skipper Hospitality",
    role: "Senior Frontend Engineer & Team Lead",
    duration: "2022 - Present",
    description: "Lead the development of Skipper Booking Widget, worked as a senior engineer for several client websites and key internal projects.",
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
