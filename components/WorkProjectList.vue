<script setup>
import { ref } from "vue";
import WorkProjectCard from "./WorkProjectCard.vue";

const workProjects = ref([
  {
    id: 1,
    title: "Skipper Booking Widget",
    description: "The Skipper Booking Engine empowers hotels to drive direct bookings, increase profits, and elevate guest satisfaction.",
    imageUrl: "https://res.cloudinary.com/theazs/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1737232766/personal-website/zabfcuvtplaxvl61kens.png",
    projectUrl: "https://www.skipperhospitality.com/",
    company: "Skipper Hospitality",
    tags: ["Svelte", "X-state", "TailwindCss", "Playwright", "Testing Library"],
    companyUrl: "https://www.skipperhospitality.com/"
  },
  {
    id: 2,
    title: "Journey east hampton Website",
    description: "As part of the development team, worked on developing the website for Journey eas hampton hotel, using our in house CMS and our custom built 11ty Framework",
    imageUrl: "https://res.cloudinary.com/theazs/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1737288922/personal-website/Screenshot_2025-01-19_at_6.13.58_PM_i7ii8h.png",
    projectUrl: "https://journeyeasthampton.com/",
    company: "Skipper Hospitality",
    tags: ["11ty", "Node.js", "React", "TailwindCss", "Webcomponents"],
    companyUrl: "https://www.skipperhospitality.com/"
  },
  {
    id: 3,
    title: "Marram Montauk Hotel Website",
    description: "As part of the development team, worked on developing the website for Marram Montauk Hotel, using our in house CMS and our custom built 11ty Framework. We mainted a great lighthouse score even though we are loading a video on the home page by progressive loading strategy.",
    imageUrl: "https://res.cloudinary.com/theazs/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1737289055/personal-website/Screenshot_2025-01-19_at_6.17.08_PM_lgx7xg.png",
    projectUrl: "https://www.marrammontauk.com/",
    company: "Skipper Hospitality",
    tags: ["11ty", "Node.js", "React", "TailwindCss", "Webcomponents"],
    companyUrl: "https://www.skipperhospitality.com/",
  },
  {
    id: 4,
    title: "Theamswell Hotel Website",
    description: "We developed the themaswell hotel website using our in house component library that we have developed to be used with 11ty and our in house CMS as backend.",
    imageUrl: "https://res.cloudinary.com/theazs/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1737289413/personal-website/Screenshot_2025-01-19_at_6.22.57_PM_r1rbez.png",
    projectUrl: "https://www.theameswellhotel.com/",
    company: "Skipper Hospitality",
    tags: ["11ty", "Node.js", "React", "TailwindCss", "Webcomponents"],
    companyUrl: "https://www.skipperhospitality.com/",
  },
  {
    id: 5,
    title: "ButlerMenu.com",
    description: "ButlerMenu.com later Orderbutler.com was the defacto application for ordering foods, beverages and other commodities for hotel guests who have partnership with Butler Hospitality",
    imageUrl: "https://res.cloudinary.com/theazs/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1737299543/personal-website/Screenshot_2025-01-19_at_9.12.02_PM_ksvkmn.png",
    projectUrl: "",
    company: "Butler Hospitality",
    tags: ["React.js", "Flow.js", "TailwindCss", "Redux"],
    companyUrl: "https://www.crunchbase.com/organization/butler-hospitality",
  },
]);
</script>

<template>
  <div>
    <h2>Recent Work Projects</h2>
    <div class="work-project-list" v-if="workProjects.length">
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
