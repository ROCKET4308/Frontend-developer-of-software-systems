<script>
  import { goto } from '$app/navigation';
	import MainPage from './main/MainPage.svelte';

  function goToHome() {
    goto('main');
  }

  function goToCatalog() {
    goto('catalog');
  }
</script>

<style>
    #side-bar {
      background-color: rgb(24, 24, 24);
      width: 200px;
      height: 930px;
      flex: 2;
      padding: 20px;
      margin-right: 3px;
      border-radius: 5px;
    }
  
    #side-bar button {
      background-color: green;
      color: white;
      border: none;
      border-radius: 20px;
      width: 100%;
      padding: 10px;
      margin-bottom: 5px;
      cursor: pointer;
    }
</style>

<header>
    <section id="side-bar">
      <p><button on:click={goToHome}>Home</button></p>
      <p><button on:click={goToCatalog}>Catalog</button></p>
    </section>
</header>