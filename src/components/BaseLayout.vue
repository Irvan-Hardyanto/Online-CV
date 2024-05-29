<template>
  <v-app>
    <!-- <a href="#" class="logo">Logo</a>
        <ul>
          <li><a href="#">About Me</a></li>
          <li><a href="#">My Skills</a></li>
          <li><a href="#">Past Projects</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul> -->
    <slot name="header"> </slot>
    <slot name="content"></slot>
  </v-app>
</template>

<style>
/* div.container {
  padding: 10px;
}
div.container section {
  position: relative;
  top: 5em;
  height: 50vh;
  background-color: aqua;
}

div.container header {
  position: fixed;
  top: 0;
  left: 0;
  height: 5em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

div.container header ul {
  position: relative;
  display: flex;
  list-style-type: none;
}
div.container header ul li {
  padding: 10px 20px;
}

div.container header ul li a {
  text-decoration: none;
  color: #000;
} */
</style>
