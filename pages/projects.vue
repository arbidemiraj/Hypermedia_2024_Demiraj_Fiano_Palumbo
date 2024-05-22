<template>
    <main>
        <div class="title-background">
            <h1 class=title>Projects</h1>
        </div>
        <h1>Our philosophy</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae elit dapibus, tincidunt lectus a, varius arcu. 
                Nunc non mollis tellus. Sed arcu leo, faucibus vitae hendrerit at, eleifend et leo. Morbi facilisis rutrum imperdiet. 
                Proin pharetra tincidunt neque eu imperdiet. Interdum et malesuada fames ac ante ipsum primis in.</p>
        <div class="text-section">
            <div class="projects-container">
                <button class="arrow left-arrow">←</button>
                <div class="projects">
                    <div class="project-card">
                        <img src="\assets\images\logo1Project.png" alt="Project Image">
                        <h2>Project Name</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula elit et lacus tincidunt facilisis.</p>
                        <button class="btn">Learn more</button>
                    </div>
                    <div class="project-card">
                        <img src="\assets\images\logo2Project.png" alt="Project Image">
                        <h2>Project Name</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula elit et lacus tincidunt facilisis.</p>
                        <button class="btn">Learn more</button>
                    </div>
                    <div class="project-card">
                        <img src="\assets\images\logo3Project.png" alt="Project Image">
                        <h2>Project Name</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula elit et lacus tincidunt facilisis.</p>
                        <button class="btn">Learn more</button>
                    </div>
                </div>
                <button class="arrow right-arrow">→</button>
            </div>
        </div>
        <div class="bottom-link-container">
            <Nuxtlink to="/services" class="bottom-link"> Go to all services </Nuxtlink>
        </div>
    </main>
</template>
    
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
        background-image: url('assets/images/imageWomenScritta.png');
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
        margin-left: 10px;
    }
    .text-section {
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    max-width: 1200px;
    margin: 20px auto;
}

.text-section h1 {
    font-size: 2rem;
    margin-bottom: 10px;
}

.text-section p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 30px;
}

.projects-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
}

.projects {
    display: flex;
    gap: 70px;
    flex-wrap: nowrap;
}

.project-card {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 100%;
    max-width: 300px;
    text-align: left;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.project-card:hover {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
}

.project-card img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 15px;
}

.project-card h2 {
    margin-bottom: 10px;
    font-size: 1.25rem;
    color: #333;
    text-align: center;
}

.project-card p {
    font-size: 0.9rem;
    color: #666;
    line-height: 1.5;
    text-align: center;
    margin-bottom: 20px;
}

.project-card .btn {
    background-color: #bb5f75;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.9rem;
}

.project-card .btn:hover {
    background-color: #be7687;
}

.arrow {
    background: none;
    border: none;
    font-size: 2rem;
    color: #bb5f75;
    cursor: pointer;
    padding: 0 10px;
}

.arrow:hover {
    color: #be7687;
}

.left-arrow {
    margin-right: 10px;
}

.right-arrow {
    margin-left: 10px;
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