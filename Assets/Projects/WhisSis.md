---
title: WhisSis
tagline: Space scavengers worst nightmare.
role: Lead Programmer
timeline: 3 Months
platform: PC VR (SteamVR / Meta Quest Link)
tags:
  - Unity
  - C#
  - XR Interaction Toolkit
heroImage: Images/Projects/WhisSis/WhisSisMain.png
gallery:
  - Images/Projects/WhisSis/WhisSis1.png
  - Images/Projects/WhisSis/WhisSis2.png
  - Images/Projects/WhisSis/WhisSis3.png
  - Images/Projects/WhisSis/WhisSis4.png
  - Images/Projects/WhisSis/WhisSis5.png
  - Images/Projects/WhisSis/WhisSis6.png
  - Images/Projects/WhisSis/WhisSis7.png
  - Images/Projects/WhisSis/WhisSisMain.png
sourceLink: https://github.com/GLU-Gaming/twinstick-2024-c-p-s.git
downloadLink: http://lzkchr.itch.io/whissis
---

<section class="info-section">
    <h2 class="section-subtitle">About the Project</h2>
    <p>
        A spacelab that you ventured uppon, only to find out that you are not alone.
        On entering the facility, the airlock breaks down and going back is not an option.
        Now forced to go deeper into the facility, to fix the airlock, you'll have to face the horrors
        that await you.
    </p>
</section>

<section class="info-section">
    <h2 class="section-subtitle">My Role & Features</h2>
    <ul class="feature-list">
        <li>Designed and implemented the core gameplay loop.</li>
        <li>Created immersive VR interactions using XR Interaction Toolkit.</li>
        <li>Programmed custom monster AI and pathfinding.</li>
        <li>Optimized lighting and assets for smooth VR performance.</li>
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
