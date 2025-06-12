<script setup lang="js">
import ProjectCard from "./ProjectCard.vue";
import {data as projects} from "../data/projects.data.mjs"
import { ref, onMounted, reactive } from "vue";

const github_username = "azs06";
const githubToken = import.meta.env.VITE_GITHUB_API_TOKEN;
const loading = ref(true);
const computedProjects = ref(projects.data);

const headers = {
      Authorization: `token ${githubToken}`, // Add GitHub token for higher rate limits
      Accept: "application/vnd.github.v3+json",
    };
const CACHE_KEY = "github_repos_cache";
const CACHE_EXPIRATION_HOURS = 24; // Cache expiration time (24 hours)

const isCacheValid = (timestamp) => {
  const now = new Date().getTime();
  return now - timestamp < CACHE_EXPIRATION_HOURS * 60 * 60 * 1000;
}

const fetchRepos = async (username) => {
  try {
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      const { timestamp, repos } = JSON.parse(cachedData);
      if (isCacheValid(timestamp)) {
        return repos;
      }
    }
    const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {headers});
    if (!response.ok) throw new Error("Failed to fetch repositories");

    const repos = await response.json();

     // Cache data with timestamp
    localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: new Date().getTime(), repos }));

    return repos;

  } catch (error) {
    console.error("Error fetching repositories:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  const repos = await fetchRepos(github_username);
  if (repos) {
    computedProjects.value = computedProjects.value.map(project => {
      const projectRepo = repos.find(r => r.name === project.repo);
      return projectRepo ? { ...project, stars: projectRepo.stargazers_count } : project;
    });
  }
});
</script>

<template>
  <div class="projects-container">
    <div
      v-for="project in computedProjects"
      :key="project.id + project.stars + project.title"
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
