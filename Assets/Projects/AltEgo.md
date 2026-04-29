---
title: AltEgo
tagline: A carnival gameshow experience
role: Lead Developer
timeline: 9 Weeks
platform: Unreal Engine 5
tags:
  - Unreal Engine
  - Blueprints
  - VR
  - Motion Capture
heroImage: Images/Projects/AltEgo/AltEgoMain.png
gallery:
  - Images/Projects/AltEgo/AltEgoMain.png
  - Images/Projects/AltEgo/AltEgo1.png
  - Images/Projects/AltEgo/AltEgo2.png
  - Images/Projects/AltEgo/AltEgo3.png
  - Images/Projects/AltEgo/AltEgo4.png
  - Images/Projects/AltEgo/AltEgo5.png
  - Images/Projects/AltEgo/AltEgo6.png
  - Images/Projects/AltEgo/AltEgo7.png
sourceLink: https://github.com/GLU-Gaming/twinstick-2024-c-p-s.git
downloadLink: http://lzkchr.itch.io/whissis
---

<section class="info-section">
    <h2 class="section-subtitle">About the Project</h2>
    <p>
        A VR experience where you play as a girl who has a fear of not being good enough. This 5 minute gameshow is a dream of hers, in wich she has to face her fears to win. The gameshow is programmed to not be able to fail, yett let's you think you are failing. Eventualy it will all become clear that she is in control, and that the stress on her is all in her own head.
    </p>
    
    <p>
        This was a speacial project for the HLO. The HLO is a Hybrid learning environment(Hybride Leeromgeving in Dutch).
        My class of 14 and 5 students from the Media College Amsterdam worked together in a group of 19 students to create 5 different games. Each game was based on a theme chosen by a student from the MA. AltEgo was based on the theme of Imposter Syndrome. All the projects where made in Unreal Engine 5 with motion capture and VR included.
    </p>
</section>

<section class="info-section">
    <h2 class="section-subtitle">My Role & Features</h2>
    <ul class="feature-list">
        <li>Lead Developer</li>
        <li>VR Interactions</li>
        <li>Weapons mechanics</li>
        <li>SoftLock preventions</li>
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
