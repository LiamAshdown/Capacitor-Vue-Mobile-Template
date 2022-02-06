<template>
  <div class="welcome">
    <div class="content">
      <h1>Vue Mobile Template</h1>
      <p>Capacitor is installed, but you need to run:</p>
      <pre><code class="language-markup">npm start</code></pre>

      <p>You are also welcome to delete this page, and the javascript (prism) in index.html</p>s
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomePage'
}
</script>

<style lang="scss">
html {
  background-color: #1f2933;
  color: white;

  * {
    margin: 0;
    padding: 0;
    box-sizing: content-box;
    font-family: "Open Sans", sans-serif;
  }
}

.welcome {
  text-align: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -120px;
  padding: 20px;

  .content {
    margin: 20px auto;
    padding: 50px;
    border-radius: 25px;
    box-shadow: 5px 5px 20px #191f26;
    background-color: #323f4b;

    p {
      margin: 20px 0;
    }
  }
}
</style>