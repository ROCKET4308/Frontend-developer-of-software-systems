<script>
	import SideBar from "../SideBar.svelte";

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
        margin-top: 10px;
        border-radius: 30px;
        display: block;
        width: 100%;
        height: 400px;
        background: rgb(88,88,88);
        background: radial-gradient(circle, rgba(88,88,88,1) 0%, rgba(140,140,140,1) 100%);
    }

    .current-track img{
        float: right;
        margin-top: 8px;
        margin-right: 50px;
        background-color: rgba(140,140,140,1);
        border-radius:10%;
        box-shadow: 00 0 0 1px rgba(140,140,140,1);

    }
    

    .current-track h1{
        font-weight: bold;
        font-size: 50px;
        float: left;
        margin-left: 50px;
        margin-top: 170px;
    }
    
    

    #music-text{
        font-size: 23px;
    }


    audio {
        width: 100%;
    }

    audio::-webkit-media-controls-panel{
        background-color: rgb(255, 255, 255);
        box-shadow: none;
    }

    audio::-webkit-media-controls-play-button{
        background-color: white;
        border-radius: 50%;
    }

    audio::-webkit-media-controls-current-time-display{
        margin-left: 20px;
        color: rgb(0, 0, 0);
        text-shadow: none;
    }

    audio::-webkit-media-controls-time-remaining-display{
        text-shadow: none;
        color: rgb(2, 2, 2);
    }

    audio::-webkit-media-controls-timeline{
        margin-left: 20px;
        border-radius: 40px;
        background-color: white;
    }

    audio::-webkit-media-controls-volume-slider{
        background-color: white;
        border-radius: 50px;
        padding-left: 10px;
        padding-right: 10px;
    }

    audio::-webkit-media-controls-mute-button{
        background-color: white;
        border-radius: 50%;
    }
</style>

<body class="music">
    <SideBar/>
    
    <main>
        <input type="text" id="search-input" placeholder="Search">
        <button id ="sign-in-button"type="submit">Sign in</button>
        <div class="current-track">
            <img id="current-track-img" src="https://www.sound.xyz/_next/image?url=https%3A%2F%2Fd2i9ybouka0ieh.cloudfront.net%2Fartist-uploads%2F9ce6cc2c-f66e-4e1c-9483-b2d90721b724%2FRELEASE_GOLDEN_EGG_IMAGE%2F8091981-newImage.png&w=384&q=75" alt="Обкладинка треку">
            <h1 id="current-track-name">Sound xyz Feat. Haze</h1>      
        </div>
        <span id="music-text"><p>"Heavenly Angels" is a song I composed in 2018, and even though it's been 5 years since its creation, it still resonates with me as if I penned it yesterday.</p>
            
            <p>Over the years, I've recorded the song several times, but it's only recently that I feel I've captured the perfect version that truly does justice to the essence of the song. Sometimes, songs age like fine wine, gaining depth and meaning with the passage of time.</p>
                    
            <p>This song was born from my visit to the Vatican and the awe-inspiring beauty of Michelangelo's frescoes in the Sistine Chapel. "Heavenly Angels" is a heartfelt exploration of compassion, redemption, and forgiveness. It delves into the idea that we all make mistakes, and as painful as those mistakes can be, everyone deserves the chance to be forgiven and liberated from the burdens they carry.</p>
                        
            <p>Looking forward, we realize that the pain we've experienced only serves to shape us into stronger, more resilient individuals.</p>
                            
            <p> I'm proud to say that "Heavenly Angels" is a collaborative effort between myself, and my dear friend Ed Prosek, who worked together on the writing and production. The artwork for the song is a creation of my talented father, Giuseppe Zironi, who, despite his usual work drawing Disney comics, took a break to collaborate with me on this project.</p>
        </span>
        <audio controls src="Future, Drake - Life is Good (Clean - Lyrics)_FdO57fvZ5wY.mp3">Your browser does not support the audio tag.</audio>
    </main>
</body>