---
layout: landing
title: "Home"
permalink: "/"
---

<div class="landing-page-content">
    <div class="hero">
        <div class="hero-logo">
            <a href="{{ '/' | relative_url }}" class="site-logo" rel="home" title="{{ site.title }}">
                <img src="/assets/images/pasta_pirate_logo.webp" alt="Pasta Piracy Logo">
            </a>
        </div>
        <div class="hero-content">
            <h1>Pasta Piracy</h1>
            <p></p>
            <a href="/recipes" class="cta-button">Explore Recipes</a>
        </div>
    </div>

    <div class="intro">
        <h2>About Us</h2>
        <p>Pasta Piracy is your go-to source for open-source Italian recipes, offering detailed instructions, ingredient lists, and mouth-watering images for every dish.</p>
        <a href="/about" class="cta-button">Learn More</a>
    </div>

    <div class="features">
        <h2>Featured Recipes</h2>
        <div class="recipe-grid">
            {% for featured_recipe in site.data.featured_recipes.featured %}
            {% assign recipe = site.recipes | where: "slug", featured_recipe | first %}
            <article class="recipe-card">
                <a href="{{ recipe.url }}">
                    <img src="{{ recipe.image.thumbnail }}" alt="{{ recipe.title }}">
                    <h3>{{ recipe.title }}</h3>
                    <p>{{ recipe.excerpt }}</p>
                </a>
            </article>
            {% endfor %}
        </div>
    </div>
</div>
