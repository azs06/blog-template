<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  projectUrl: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="work-project-card">
    <div class="image-container">
      <img :src="imageUrl" :alt="title" loading="lazy" />
    </div>
    <div class="content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <a v-if="projectUrl" :href="projectUrl" target="_blank" class="project-link">View Project</a>
    </div>
  </div>
</template>

<style scoped>
.work-project-card {
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px; /* Prevents it from stretching too much */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.work-project-card:hover {
  transform: translateY(-5px);
}

.image-container {
  width: 100%;
  height: 180px; /* Fixed height to maintain design */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the area properly */
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.content {
  padding: 16px;
  text-align: center;
}

h3 {
  margin: 0 0 10px;
  font-size: 1.2rem;
}

p {
  font-size: 0.95rem;
  color: #555;
}

.project-link {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 15px;
  color: white;
  background: #0366d6;
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.9rem;
  transition: background 0.2s ease-in-out;
}

.project-link:hover {
  background: #024b9c;
}
</style>
