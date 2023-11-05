<script>
	import SideBar from "../SideBar.svelte";

    function redirectToMusicPage() {
        window.location.href = 'music';
    }
</script>
  
<style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
    }
  
    main {
      color: white;
      background-color: rgb(24, 24, 24);
      height: 930px;
      flex: 2;
      padding: 20px;
      border-radius: 5px;
      width: 1635px;
    }
  
    ::placeholder {
      color: white;
    }
  
    #search-input {
      background-color: #9c9c9c;
      border: none;
      border-radius: 10px;
      width: 84%;
      padding: 10px;
    }
  
    #sign-in-button {
      background-color: green;
      color: white;
      border: none;
      border-radius: 20px;
      padding: 10px;
      margin-left: 20px;
      cursor: pointer;
      width: 200px;
    }
  
    .current-track {
      cursor: pointer;
      margin-top: 10px;
      border-radius: 20px;
      display: block;
      width: 100%;
      height: 400px;
      background: rgb(131, 58, 180);
      background: linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%);
    }
  
    .current-track img {
      float: right;
      margin-top: 8px;
      margin-right: 200px;
      background-color: rgba(252, 176, 69, 1);
      border-radius: 50%;
      box-shadow: 0 0 0 1px rgba(252, 176, 69, 1);
    }
  
    #current-track-img {
      animation: rotate 20s linear infinite;
    }
  
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  
    .current-track h1 {
      float: left;
      font-weight: bold;
      font-size: 50px;
      margin-left: 200px;
      margin-top: 170px;
    }
  
    #other-tracks h2 {
      width: 100%;
    }
  
    #other-tracks ul {
      columns: 2;
      list-style: none;
    }
  
    #other-tracks li {
      width: 50%;
      padding: 10px;
      display: flex;
      align-items: center;
    }
  
    #other-tracks a {
      color: white;
      text-decoration: none;
    }
  
    ul img {
      cursor: pointer;
      width: 60px;
      height: 60px;
      margin-right: 10px;
      border-radius: 10px;
    }
</style>
  
<body class="main">
    <SideBar/>

    <main>
        <input type="text" id="search-input" placeholder="Search">
        <button id="sign-in-button" type="submit">Sign in</button>
        <div class="current-track" on:click={redirectToMusicPage}>
            <img id="current-track-img" src="https://www.sound.xyz/_next/image?url=https%3A%2F%2Fd2i9ybouka0ieh.cloudfront.net%2Fartist-uploads%2F9ce6cc2c-f66e-4e1c-9483-b2d90721b724%2FRELEASE_GOLDEN_EGG_IMAGE%2F8091981-newImage.png&w=384&q=75" alt="Обкладинка треку">
            <h1 id="current-track-name">Sound xyz Feat. Haze</h1>
        </div>
    
        <section id="other-tracks">
        <h2>Other tracks</h2>
        <ul>
            <li><img src="https://www.sound.xyz/_next/image?url=https%3A%2F%2Fd2i9ybouka0ieh.cloudfront.net%2Fartist-uploads%2F6c6aee2d-a8b3-4c6b-8685-56e89f7f2e00%2FRELEASE_COVER_IMAGE%2F7994318-newImage.png&w=1920&q=75" on:click={redirectToMusicPage} alt="No Img"><a href="music">Green Ring - Adrift</a></li>
            <li><img src="https://www.sound.xyz/_next/image?url=https%3A%2F%2Fd2i9ybouka0ieh.cloudfront.net%2Fartist-uploads%2Ffbb8dcb2-55eb-47b9-b7fc-66039eaf9a75%2FRELEASE_WEB_STATIC_IMAGE%2F7217718-newImage.png&w=1920&q=75" on:click={redirectToMusicPage} alt="No Img"><a href="music">RAVEN (ft. Virtual Riot)</a></li>
            <li><img src="https://www.sound.xyz/_next/image?url=https%3A%2F%2Fd2i9ybouka0ieh.cloudfront.net%2Fartist-uploads%2Ffc77d66d-c6c6-4924-b7c0-033859279a42%2FRELEASE_COVER_IMAGE%2F3290544-newImage.png&w=640&q=75" on:click={redirectToMusicPage} alt="No Img"><a href="music">Sound xyz Feat. Haze</a></li>
            <li><img src="https://www.sound.xyz/_next/image?url=https%3A%2F%2Fd2i9ybouka0ieh.cloudfront.net%2Fartist-uploads%2Fe4e691b1-90ff-4e5a-85b8-058404fb875c%2FRELEASE_COVER_IMAGE%2F761294-newImage.png&w=640&q=75" on:click={redirectToMusicPage} alt="No Img"><a href="music">Entropy</a></li>
            <li><img src="https://www.sound.xyz/_next/image?url=https%3A%2F%2Fd2i9ybouka0ieh.cloudfront.net%2Fartist-uploads%2F66dc4a5e-afa6-4cac-b603-bc19274afcd1%2FRELEASE_COVER_IMAGE%2F3786943-newImage.png&w=640&q=75" on:click={redirectToMusicPage} alt="No Img"><a href="music">SLIP AWAY (feat. edwin)</a></li>
            <li><img src="https://www.sound.xyz/_next/image?url=https%3A%2F%2Fd2i9ybouka0ieh.cloudfront.net%2Fartist-uploads%2Fd9a22c23-f9fb-4f7a-9656-e439422be629%2FRELEASE_WEB_STATIC_IMAGE%2F9688176-newImage.png&w=640&q=75" on:click={redirectToMusicPage} alt="No Img"><a href="music">Mastering Moments</a></li>
            <li><img src="https://www.sound.xyz/_next/image?url=https%3A%2F%2Fd2i9ybouka0ieh.cloudfront.net%2Fartist-uploads%2F2346c636-31a0-4133-a2cd-7a97bd35c206%2FRELEASE_COVER_IMAGE%2F6100614-newImage.png&w=640&q=75" on:click={redirectToMusicPage} alt="No Img"><a href="music">The Sound Mix Vol. 1 (68 Songs - 2 Hours)</a></li>
            <li><img src="https://www.sound.xyz/_next/image?url=https%3A%2F%2Fd2i9ybouka0ieh.cloudfront.net%2Fartist-uploads%2F3f8b37f5-d307-4e01-9f99-f7f40b889783%2FRELEASE_WEB_STATIC_IMAGE%2F6751255-newImage.png&w=640&q=75" on:click={redirectToMusicPage} alt="No Img"><a href="music">Sara Phillips - Angel City</a></li>
            <li><img src="https://www.sound.xyz/_next/image?url=https%3A%2F%2Fd2i9ybouka0ieh.cloudfront.net%2Fartist-uploads%2F00fdbe1e-cc14-4a32-8d9d-0ca47b236ef4%2FRELEASE_COVER_IMAGE%2F7551742-newImage.png&w=640&q=75" on:click={redirectToMusicPage} alt="No Img"><a href="music">Heavenly Angels</a></li>
            <li><img src="https://www.sound.xyz/_next/image?url=https%3A%2F%2Fd2i9ybouka0ieh.cloudfront.net%2Fartist-uploads%2F6369f31e-1972-482d-b1e9-f36be650f1a0%2FRELEASE_COVER_IMAGE%2F9788953-newImage.png&w=640&q=75" on:click={redirectToMusicPage} alt="No Img"><a href="music">Half-Steppin' w/ Snoop Dogg</a></li>    
        </ul>
        </section>
    </main>
</body>