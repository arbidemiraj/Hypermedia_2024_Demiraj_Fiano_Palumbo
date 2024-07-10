<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="logo-footer">
                <NuxtLink to="/" title="Homepage">
                    <img src="../assets/images/logo.png" id="logo" class="logo-img" alt="Company logo"/>
                </NuxtLink>
                <ul>
                    <li>
                        <NuxtLink to="/aboutUs">About us</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/activities">Activities</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/team">Team</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contactUs">Get help</NuxtLink>
                    </li>
                </ul>
                </div>
                <div class="footer-info">
                    <h3>CONTACT INFORMATION</h3>
                    <div class="contact-container">
                        <Icon name="cib:mail-ru" color="white" size="35"/><p>Email: byyoursidecenter@gmail.com </p>
                    </div>
                    <div class="contact-container">
                        <Icon name="ic:baseline-phone" color="white" size="35"/><p>Phone: +39 367 8919785</p>
                    </div>
                    <div class="contact-container">
                        <Icon name="mdi:address-marker" color="white" size="35"/><p>Address: Via Fratelli Sangallo, 40, 20133, Milano (MI), Italia</p>
                    </div>
                </div>
                <div class="footer-opening-info">
                    <h3>OPENING HOURS</h3>
                    <div>
                        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                    </div>
                </div>
                <div class="socials"> 
                    <a href="https://instagram.com/" target=”_blank” aria-label="Link to Instagram"><Icon name="f7:logo-instagram" color="white" size="40" /></a>
                    <a href="https://facebook.com/" target=”_blank” aria-label="Link to Facebook"><Icon name="f7:logo-facebook" color="white" size="40" /></a>
                    <a href="https://x.com/" target=”_blank” aria-label="Link to Twitter"><Icon name="f7:logo-twitter" color="white" size="40" /></a>
                </div>
                <div class="footer-links">
                    <!-- Add any additional links here -->
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>

p {
    margin: 1rem 0;
}

.footer-opening-info {
    display: flex;
    flex-direction: column;
}

.contact-container {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 1rem;
}

.footer {
    background: linear-gradient(90deg,#bb5f75, #bb5f75);
    width: 100%;
    overflow: hidden;
    color: white;
    padding: 15px;
    margin-top: auto;
    box-sizing: border-box; /* Ensure padding is included in the width calculation */
}

.logo-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
}

ul {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    list-style: none;
    padding: 0;
    margin: 0;
}

ul li a {
    color: white;
    text-decoration: none;
}

.logo-img {
    width: 200px;
    margin: 0 auto;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; /* Allow wrapping to prevent overflow */
}

.socials {
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: center; /* Center align socials */
    flex-wrap: wrap; /* Allow wrapping for smaller screens */
}

/* Add responsive design to handle smaller screens */
@media (max-width: 768px) {
    .footer-content {
        flex-direction: column;
        align-items: center;
        font-size: 0.9rem;
        
    }

    .contact-container {
        flex-direction: row;
        align-items: flex-start;
        gap: 2rem;
        margin: 10px 0;
    }

    .socials {
        gap: 1rem;
    }

    .footer-opening-info {
        display: none;
    }

    ul { 
        display: none;
    }
}
</style>