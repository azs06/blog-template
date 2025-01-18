<script setup>
import { ref, onMounted, computed } from "vue";
import ProjectCard from "./ProjectCardRedux.vue";

const username = "azs06"; // Replace with your GitHub username

// Define the list of repositories to display
const selectedRepos = ref([
  "vue-adblock-detect",
  "11ty-wp-starter-kit",
  "svelte-lightbox",
  "towatch-cli",
  "blog-template",
  "prayer-time-bd",
  "organisms",
  "learning-notes",
  "prayer-time-api",
  "vista",
]);

const repos = ref([]);
const loading = ref(true);

const fetchRepos = async () => {
  try {
    const requests = selectedRepos.value.map(repoName =>
      fetch(`https://api.github.com/repos/${username}/${repoName}`).then(res => res.json())
    );

    const results = await Promise.all(requests);

    // Filter out non-existing or private repos
    repos.value = results
      .filter(repo => !repo.message) // Exclude errors like "Not Found"
      .map(repo => ({
        name: repo.name,
        description: repo.description || "No description available",
        language: repo.language || "Unknown",
        stars: repo.stargazers_count,
        url: repo.html_url,
      }));

  } catch (error) {
    console.error("Error fetching repositories:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(fetchRepos);
</script>

<template>
  <div class="project-list">
    <div v-if="repos.length">
      <ProjectCard
        v-for="project in repos"
        :key="project.url"
        v-bind="project"
      />
    </div>
    <p v-else>Loading projects or no matching repositories found.</p>
  </div>
</template>

<style scoped>
.project-list {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}
h2 {
  text-align: center;
  font-size: 1.5rem;
}
</style>
