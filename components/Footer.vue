<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-info">
                    <h3>Contact Information</h3>
                    <p>Email: example@example.com</p>
                    <p>Phone: 123-456-7890</p>
                    <p>Address: 123 Main Street, City, Country</p>
                </div>
                <div class="logo-footer">
                <NuxtLink to="/" title="Homepage">
                    <img src="../assets/images/logo.png" id="logo" class="logo-img" alt="Company logo"/>
                </NuxtLink>
                </div>
                <div class="socials"> <b>Follow us:</b>
                    <a href="https://x.com/" target=”_blank” aria-label="Link to Twitter"><img src="" alt="Twitter Logo" class="twitter-footer"></a>
                    <a href="https://www.instagram.com" target=”_blank” aria-label="Link to Instagram"><img src="" alt="Instagram Logo" class="instagram-footer"></a>
                    <a href="https://www.linkedin.com" target=”_blank” aria-label="Link to LinkedIn"><img src="" alt="LinkedIn Logo" class="linkedin-footer"></a>
                </div>
                <div class="footer-links">
                    <!-- Add any additional links here -->
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    background-color: #DDB98E;
    color: white;
    padding: 20px;
    margin-top: auto;
}
.logo-footer {
    display: flex;
    justify-content: center;
    align-items: center;
}
.logo-img {
    width: 200px;
    margin: 0 auto;
    align-self: flex-end;
}
.footer-content {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.footer-info {
    margin-right: 20px;
}

</style>