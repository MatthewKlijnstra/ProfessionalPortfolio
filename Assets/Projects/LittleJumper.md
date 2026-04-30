---
title: Little Jumper
tagline: Becarefull to not trip, it's a long way down.
role: Developer
timeline: 8 Weeks
platform: Multi-Platform
tags:
  - Unity
  - C#
  - New Input System
heroImage: Images/Projects/LittleJumper/LittleJumperMain.png
gallery:
  - Images/Projects/LittleJumper/LittleJumperMain.png
  - Images/Projects/LittleJumper/LittleJumper1.png
  - Images/Projects/LittleJumper/LittleJumper2.png
  - Images/Projects/LittleJumper/LittleJumper3.png
  - Images/Projects/LittleJumper/LittleJumper4.png
  - Images/Projects/LittleJumper/LittleJumper5.png
sourceLink: https://github.com/GLU-Gaming/twinstick-2024-c-p-s.git
downloadLink: https://battlefieldguy.itch.io/little-jumper
---

<section class="info-section">
    <h2 class="section-subtitle">About the Project</h2>
    <p>
        Jump into the shoes of a little jumper and explore the world of the floating lands. A small platformer game built to work with multiple platforms.
    </p>
    <p>
        --------------------------------------------------------------------------------------------------
    </p>
    <p>
        This game has a lot of features, such as a simple but effective movement system, unity animation system and particle effects for a more interactive playstyle, but my personal favorite feature is the camera system I built. I used cinemachine from the unity store to create a smooth and responsive camera system that follows the player in a unique way, which gives the game a more dynamic feel. I also added a good few cutscenes that play during certain moments in the game to make it more immersive and engaging.
    </p>
    <p>
        --------------------------------------------------------------------------------------------------
    </p>
    <p>
        This project was a school assignment where we had to make a platformer game. The goal was to make a game that could be played on multiple platforms. 
        The platforms I ended up with are PC, steam-deck and HTML. I wanted to make more versions but sadly that wasn't possible in the given time.
        Luckily I had built in keyboard/mouse and controller support from the start, so you play it from more platforms than planned.
    </p>
        
</section>

<section class="info-section">
    <h2 class="section-subtitle">My Role & Features</h2>
    <ul class="feature-list">
        <li>Movement system</li>
        <li>Camera / Cinemachine system</li>
        <li>Chicken npc</li>
        <li>Obstacles and traps system</li>
        <li>Audio Design</li>
        <li>Level design</li>
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
