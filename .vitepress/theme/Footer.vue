<template>
  <footer>
    <div class="footer-container">
      <p class="copyright">Copyright &copy; {{ currentYear }}</p>
      <nav class="footer-links" aria-label="Social media links">
        <ul>
          <li>
            <a class="icon-container" href="https://github.com/username" aria-label="GitHub">
              <img class="icon" src="./assets/icons/github.svg" alt="GitHub logo">
            </a>
          </li>
          <li>
            <a class="icon-container" href="https://stackoverflow.com/users/username" aria-label="Stack Overflow">
              <img class="icon" src="./assets/icons/stackoverflow.svg" alt="Stack Overflow logo">
            </a>
          </li>
          <li>
            <a class="icon-container" href="https://twitter.com/username" aria-label="Twitter">
              <img class="icon" src="./assets/icons/twitter.svg" alt="Twitter logo">
            </a>
          </li>
          <li>
            <a class="icon-container" href="https://freecodecamp.org/username" aria-label="freeCodeCamp">
              <img class="icon" src="./assets/icons/freecodecamp.svg" alt="freeCodeCamp logo">
            </a>
          </li>
          <li>
            <a class="icon-container" href="https://codepen.io/username" aria-label="CodePen">
              <img class="icon" src="./assets/icons/codepen.svg" alt="CodePen logo">
            </a>
          </li>
          <li>
            <a class="icon-container" href="mailto:email@example.com" aria-label="Email">
              <img class="icon" src="./assets/icons/gmail.svg" alt="Email icon">
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
