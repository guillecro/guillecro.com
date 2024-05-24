<template>
  <div class="hero is-black is-large">
    <div class="hero-head">
      <div class="container">
        <img src="/public/favicon.png" class="image" width="50" alt="">
      </div>
    </div>
    <div class="hero-body">
      <div class="container">
        <div class="columns is-mobile is-justify-content-end">
          <div class="column is-5-fullhd is-5-widescreen is-8-desktop is-10-tablet is-12-mobile has-text-right">
            <h1 class="title is-3 has-text-weight-bold">
              Hi! 👋
            </h1>
            <h1 class="title is-4 has-text-weight-bold">
              I am a multidisciplinary system engineer, activist for e-democracy and open goverment experiences
            </h1>
            <h2 class="subtitle is-6 has-text-grey has-text-weight-light mt-3">
              And so many other projects that I can't even remember, so I made a website :)
            </h2>

          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="section">
    
    <div class="container">
      <nav class="tabs is-boxed">
          <ul>
            <li class="is-active">
              <a>Profile</a>
            </li>
          </ul>
      </nav>
      <div class="content">
        <div class="columns">
          <div class="column is-2">
            <img src="/avatar-guillermo-croppi.jpg" alt="Guillermo Croppi" class="image" style="max-height: 250px;">
            <p class="is-size-7 mt-1">^ This is me! :)</p>
            <hr>
            <p><b>My other profiles</b></p>
            <p>
              <a href="https://github.com/guillecro" target="_blank"><i class="fab fa-github fa-lg"></i> Github</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/guillecro/" target="_blank"><i class="fab fa-linkedin fa-lg"></i> LinkedIn</a>
            </p>
            <p>
              <a href="https://twitter.com/guillermocroppi" target="_blank"><i class="fab fa-twitter fa-lg"></i> Twitter</a>
            </p>
            <hr>
          </div>
          <div class="column">
            <div class="content has-text-justified">
              <h2 class="title is-2">About me</h2>
              <p>Hi! I'm Guillermo Croppi.</p>
              <p>Passionate about democracy, technology, and their intersection in shaping the future of governance. With a background in Systems Engineering from the Universidad Tecnológica Nacional de Santa Fe, I'm a Fullstack Web Developer (github.com/guillecro) and a fervent advocate for digital democracy in the 21st century.</p>
              <p>Values such as kindness, respect, teamwork, creativity, and innovation are at the core of my beliefs, guiding both my professional endeavors and personal interactions. I thrive in dynamic environments, readily adapting to diverse teams and challenges. I firmly believe in the profound impact of the work environment on individuals and advocate for a strong humanistic foundation in every project, fostering collaboration and inclusivity among professionals and users alike.</p>
                <p>I am deeply committed to continuous learning and skill development, always eager to both acquire new knowledge and share it with others. As an educator, I've spent six years as Professor and Coordinator of Introductory Physics Courses at the Universidad Tecnológica Nacional de Santa Fe. Additionally, as the creator of Virtuagora, a web platform for citizen participation (<a href="https://github.com/virtuagora">github.com/virtuagora</a>), I've collaborated with the Province of Santa Fe on various projects, including participative budgeting initiatives and digital consultations for legislative reforms.</p>
                <p>Currently, I serve as the Tech Lead at <a href="https://democraciaenred.org" target="_blank">"Democracia en Red"</a>, an NGO dedicated to empowering civil and political projects through citizen engagement and digital technology. I also used to hold the position of Head of Systems and Technologies at <a href="https://lyris.com.ar" target="_blank">Lyris IT</a>, a consultancy specializing in digital administration and electronic signatures.</p>
              <p>I am honored to have received recognition from the Senate and Vice Governorship of the Province of Santa Fe, as well as winning the First Prize in the Digital Municipalities Innovation Contest 2015 (SF-Ar). My journey also includes participation in events like INNOVAR 2015 (Tecnopolis-CABA-Ar).</p>
              <p>Committed to driving positive change through technology, I continuously strive to expand my professional portfolio with impactful projects and contributions to both the community and my workplace. My goal is not to be better than others but to collaborate and uplift alongside them.</p>
            </div>
            
            <article class="message is-info">
              <div class="message-body">
               <p>At this date, May 2024, this website is under construction. I'm working on it, so please be patient. Thanks!</p>
               <p>In the meantime, you can check all my previous projects and experience as well as my portfolio on my <a href="https://www.linkedin.com/in/guillecro/" target="_blank"><i class="fab fa-linkedin"></i>LinkedIn</a> profile.</p>               
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return {
      isMenuOpen,
      toggleMenu,
    };
  },
};
</script>

<style lang="scss">
.hero {
  background-image: url('/public/mediaparty-dark-03.jpg');
  background-size: cover;
  background-position: center center;
  color: white;
  .hero-body{
    background: rgba(0, 0, 0, 0.65);
  }
}
.header {
  width: 100%;
}

.container {
  padding: 20px;
}
</style>
