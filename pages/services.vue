<template>
     <Head>
        <Title>Services</Title>
    </Head>

    <main>
        <div class=nav>
            <h1></h1>
        </div>
        <div class="title-background">
            <h1 class=title>Services</h1>
        </div>
        <div class=text>
            <p>Le attività di MicAccoglie si suddividono in diverse aree di intervento, dall'accompagnamento 
                nei percorsi di uscita dalla violenza alle azioni di comunicazione, prevenzione e formazione scolastica e aziendale
            </p>
        </div>
        
        <div class="container">
            <div class="card">
                <div class="card-content">
                    <h2>Consulenza legale</h2>
                    <p>Lorem ipsum dolor sit amet. Qui voluptatem magni et consequatur error. Et fuga minus et ipsa eveniet rem aliquam tempore eos beatae soluta ut suscipit aperiam in consequatur similique.</p>
                </div>
                <div class="card-footer">
                    <button class="btn">See more</button>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <h2>Accoglienza</h2>
                    <p>Lorem ipsum dolor sit amet. Qui voluptatem magni et consequatur error. Et fuga minus et ipsa eveniet rem aliquam tempore eos beatae soluta ut suscipit aperiam in consequatur similique.</p>
                </div>
                <div class="card-footer">
                    <button class="btn">See more</button>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <h2>Ospitalità in case rifugio</h2>
                    <p>Lorem ipsum dolor sit amet. Qui voluptatem magni et consequatur error. Et fuga minus et ipsa eveniet rem aliquam tempore eos beatae soluta ut suscipit aperiam in consequatur similique.</p>
                </div>
                <div class="card-footer">
                    <button class="btn">See more</button>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <h2>Supporto psicologico</h2>
                    <p>Lorem ipsum dolor sit amet. Qui voluptatem magni et consequatur error. Et fuga minus et ipsa eveniet rem aliquam tempore eos beatae soluta ut suscipit aperiam in consequatur similique.</p>
                </div>
                <div class="card-footer">
                    <button class="btn">See more</button>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <h2>Pronto soccorso</h2>
                    <p>Lorem ipsum dolor sit amet. Qui voluptatem magni et consequatur error. Et fuga minus et ipsa eveniet rem aliquam tempore eos beatae soluta ut suscipit aperiam in consequatur similique.</p>
                </div>
                <div class="card-footer">
                    <button class="btn">See more</button>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <h2>Sportello lavoro</h2>
                    <p>Lorem ipsum dolor sit amet. Qui voluptatem magni et consequatur error. Et fuga minus et ipsa eveniet rem aliquam tempore eos beatae soluta ut suscipit aperiam in consequatur similique.</p>
                </div>
                <div class="card-footer">
                    <button class="btn">See more</button>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <h2>Prevenzione scuole</h2>
                    <p>Lorem ipsum dolor sit amet. Qui voluptatem magni et consequatur error. Et fuga minus et ipsa eveniet rem aliquam tempore eos beatae soluta ut suscipit aperiam in consequatur similique.</p>
                </div>
                <div class="card-footer">
                    <button class="btn">See more</button>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <h2>Sportello stalking</h2>
                    <p>Lorem ipsum dolor sit amet. Qui voluptatem magni et consequatur error. Et fuga minus et ipsa eveniet rem aliquam tempore eos beatae soluta ut suscipit aperiam in consequatur similique.</p>
                </div>
                <div class="card-footer">
                    <button class="btn">See more</button>
                </div>
            </div>
        </div>
        <div class="bottom-link-container">
            <Nuxtlink to="/projects" class="bottom-link"> Go to all projects </Nuxtlink>
        </div>
    </main>
  </template>

<script>
/*import Service from '~/components/service.vue'

    export default {
        name: 'services',
        components: {
            Service
        }
    }*/
</script>
    
<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background-color: #f5f5f5;
    }
    .title-background {
        background-image: url('C:\Users\Paulette\Desktop\byYourSide\Hypermedia_2024_Demiraj_Fiano_Palumbo\assets\img\imageWomenScritta.png');
        background-size: cover; 
        background-position: center;
        padding: 5px;
        text-align: left;
        color: white;
        width: 100%;
        box-shadow: 5px black;
    }
    .title{
        font-size: 50px;
    }
    .nav {
        background-color: #bb5f75;
        text-align: left;
        width: 100%;
        height: 50px;
    }

.container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    padding: 20px; 
    max-width: 1200px; 
    margin: 0 auto;
}

.card {
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 100%;
    max-width: calc(50% - 10px); /* Ensures two cards per row with a gap */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transform: translateY(-7px);
    transition: all 0.3s;
}
.card-content {
    padding: 20px;
}

.card-content h2 {
    margin-bottom: 15px;
    font-size: 1.25rem;
    color: #333;
}

.card-content p {
    font-size: 0.9rem;
    color: #666;
    line-height: 1.5;
}

.card-footer {
    padding: 20px;
    display: flex;
    justify-content: flex-end;
}

.btn {
    background-color: #bb5f75;
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.9rem;
}
.btn:hover {
    background-color: #be7687;
}
.bottom-link {
    background-color: transparent;
    color: #bb5f75;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
}
.bottom-link:hover {
    color: #be7687;
}
.bottom-link-container {
    margin: 20px;
}
</style>