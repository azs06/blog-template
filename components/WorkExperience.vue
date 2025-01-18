<script setup>
defineProps({
  company: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  companyUrl: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="work-experience">
    <h3>
      <a v-if="companyUrl" :href="companyUrl" target="_blank">{{ company }}</a>
      <span v-else>{{ company }}</span>
    </h3>
    <h4>{{ role }}</h4>
    <p class="duration">{{ duration }}</p>
    <p v-if="description">{{ description }}</p>
  </div>
</template>

<style scoped>
.work-experience {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 12px 0;
  background: #fff;
  transition: transform 0.2s ease-in-out;
}
.work-experience:hover {
  transform: translateY(-5px);
}
h3 {
  margin: 0;
  font-size: 1.2rem;
}
h3 a {
  text-decoration: none;
  color: #0366d6;
}
h4 {
  margin: 5px 0;
  font-size: 1.1rem;
  color: #333;
}
.duration {
  font-style: italic;
  color: #666;
}
p {
  font-size: 0.95rem;
  color: #555;
}
</style>
