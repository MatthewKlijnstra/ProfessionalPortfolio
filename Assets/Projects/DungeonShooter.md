---
title: Dungeon Shooter 2D
tagline: The Work in progress dungeon crawler with elements and tech tree system
role: Developer, Designer & Publisher
timeline: Early Development
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
        --------------------------------------------------------------------------------------------------
    </p>
    <p>
        The game is currently in early development, and I'm still working on getting the base game written down. But I already have some cool idea's for the future.
        For example, the TechTree mechanic. You'll gather points by playing games. With these points you can upgrade your weapons and unlock new features. These points are seperate for each weapon. This gives you a reason to play with every weapon and not just stick to one.
    </p>
    <p>
    --------------------------------------------------------------------------------------------------
    </p>
    <p>
        The insipration for the TechTree realy derives from the game World of Tanks. Together with this inspiration and the idea to make a classic dungeon crawler, I came up with the idea for Dungeon Shooter 2D.
    </p>
</section>

<section class="info-section">
    <h2 class="section-subtitle">My Role & Features "So far"</h2>
    <ul class="feature-list">
        <li>The Maker of the game</li>
        <li>Elemental Powers</li>
        <li>TechTree System</li>
        <li>Weapon System</li>
        <li>Modular grid system for map making</li>
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
