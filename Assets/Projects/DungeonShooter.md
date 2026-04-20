---
title: Dungeon Shooter 2D
tagline: Dungeon Shooter 2D is my first itteration of a dungeon crawler game.
role: Developer
timeline: TBD
platform: Multi Platform
tags:
  - Unity
  - C#
  - New Input System
  - Multi Platform
heroImage: Images/Projects/DungeonShooter/DungeonShooterMain.png
gallery:
  - Images/Projects/DungeonShooter/DungeonShooterMain.png
  - Images/Projects/DungeonShooter/DungeonShooter1.png
  - Images/Projects/DungeonShooter/DungeonShooter2.png
  - Images/Projects/DungeonShooter/DungeonShooter3.png
  - Images/Projects/DungeonShooter/DungeonShooter4.png
  - Images/Projects/DungeonShooter/DungeonShooter5.png
  - Images/Projects/DungeonShooter/DungeonShooter6.png
  - Images/Projects/DungeonShooter/DungeonShooter7.png
sourceLink: https://github.com/GLU-Gaming/twinstick-2024-c-p-s.git
downloadLink: http://lzkchr.itch.io/whissis
---

<section class="info-section">
    <h2 class="section-subtitle">About the Project</h2>
    <p>
        Dungeon Shooter 2D is my first itteration of a dungeon crawler game. It started with the idea to make a realistic gun gameplay and now turend in to a big idea with elemental powers and more.
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
// Example Code Snippet: Enemy AI Pathfinding
public class EnemyAI : MonoBehaviour {
    private NavMeshAgent agent;
    public Transform player;

    void Start() {
        agent = GetComponent&lt;NavMeshAgent&gt;();
    }

    void Update() {
        if(Vector3.Distance(transform.position, player.position) &lt; 15f) {
            agent.SetDestination(player.position);
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
// Example Code Snippet: VR Interactions
public class AirlockDoor : MonoBehaviour {
    private Animator animator;

    void Start() {
        animator = GetComponent&lt;Animator&gt;();
    }

    public void OpenDoor() {
        animator.SetTrigger("Open");
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
