---
title: SplitClash
tagline: SplitClash is a 2D arena fighting game where players can use different characters with unique abilities to fight each other. The game is based off of the game "Clash Royale" but with a design feature of a table touch screen.
role: Developer
timeline: TBD
platform: Table Touch Screen
tags:
  - Unity
  - C#
  - New Input System
  - Local Multiplayer
  - Table touch screen
heroImage: Images/Projects/SplitClash/SplitClashMain.png
gallery:
  - Images/Projects/SplitClash/SplitClashMain.png
  - Images/Projects/SplitClash/SplitClash1.png
  - Images/Projects/SplitClash/SplitClash2.png
  - Images/Projects/SplitClash/SplitClash3.png
  - Images/Projects/SplitClash/SplitClash4.png
  - Images/Projects/SplitClash/SplitClash5.png
  - Images/Projects/SplitClash/SplitClash6.png
  - Images/Projects/SplitClash/SplitClash7.png
  - Images/Projects/SplitClash/SplitClash8.png
  - Images/Projects/SplitClash/SplitClash9.png
sourceLink: https://github.com/GLU-Gaming/twinstick-2024-c-p-s.git
downloadLink: http://lzkchr.itch.io/whissis
---

<section class="info-section">
    <h2 class="section-subtitle">About the Project</h2>
    <p>
        SplitClash is a 2D arena fighting game where players can use different characters with unique abilities to fight each other. The game is based off of the game "Clash Royale" but with a design feature of a table touch screen.
    </p>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
    </p>
</section>

<section class="info-section">
    <h2 class="section-subtitle">My Role & Features</h2>
    <ul class="feature-list">
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Praesent vitae lectus ac tellus aliquet iaculis.</li>
        <li>Donec scelerisque libero a ante dignissim, ac accumsan erat tristique.</li>
        <li>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</li>
    </ul>
</section>

---SOURCE---

<h2 class="section-subtitle">Source Code Features</h2>

<div class="feature-segment">
    <div class="code-container">
        <pre><code class="language-csharp">
// Example Code Snippet: Character Ability
public class CharacterAbility : MonoBehaviour {
    public float abilityCooldown = 5f;
    private float currentCooldown = 0f;

    void Update() {
        if(currentCooldown > 0) {
            currentCooldown -= Time.deltaTime;
        }
    }

    public void UseAbility() {
        if(currentCooldown <= 0) {
            // Trigger ability logic
            currentCooldown = abilityCooldown;
        }
    }

}
</code></pre>

</div>
<div class="video-container">
<video autoplay loop muted playsinline>
<source src="dummy.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
</div>
</div>

<div class="feature-segment">
    <div class="code-container">
        <pre><code class="language-csharp">
// Example Code Snippet: Touch Input Handling
public class TouchInputManager : MonoBehaviour {
    void Update() {
        if (Input.touchCount > 0) {
            Touch touch = Input.GetTouch(0);
            // Handle touch logic here
        }
    }
}
</code></pre>

</div>
<div class="video-container">
<iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1&loop=1&playlist=dQw4w9WgXcQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
</iframe>
</div>
</div>
