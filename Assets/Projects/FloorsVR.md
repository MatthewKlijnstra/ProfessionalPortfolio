---
title: Floors VR
tagline: The game that will haunt your nerves
role: Lead Developer
timeline: 5 Weeks
platform: PC VR
tags:
  - Unity
  - C#
  - XR Interaction Toolkit
  - B-Haptics
heroImage: Images/Projects/Floors/FloorsMain.png
gallery:
  - Images/Projects/Floors/FloorsMain.png
  - Images/Projects/Floors/Floors1.png
  - Images/Projects/Floors/Floors2.png
  - Images/Projects/Floors/Floors3.png
  - Images/Projects/Floors/Floors4.png
  - Images/Projects/Floors/Floors5.png
  - Images/Projects/Floors/Floors6.png
  - Images/Projects/Floors/Floors7.png
sourceLink: https://github.com/GLU-Gaming/twinstick-2024-c-p-s.git
downloadLink: http://lzkchr.itch.io/whissis
---

<section class="info-section">
    <h2 class="section-subtitle">About the Project</h2>
    <p>
        VR thriller with an added feuture of a haptic suit to enhance the experience. You'll know when a monster is near you.
    </p>
    <p>
        --------------------------------------------------------------------------------------------------
    </p>
    <p>
        In this 5 week project we got challanged to create a game with a piece of hardware we never used before. For me,
        that was the b-haptics haptic suit. Together with my team members we dicided to create a VR Horror game, seeming as the Haptic suit would be perfect for that genre.        
    </p>
    <p>
        --------------------------------------------------------------------------------------------------
    </p>
    <p>
        One special thing about this project was that our first 4 weeks where without any artists. The purpose was to prototype our game mechanics, using placeholder assets. This added an extra layer of new discorvery, as we had never used prototyping before this project. 
    </p>
    
</section>

<section class="info-section">
    <h2 class="section-subtitle">My Role & Features</h2>
    <ul class="feature-list">
        <li>B-Haptics Integration</li>
        <li>B-Haptics Effects</li>
        <li>Jumpscare mechanics</li>
        <li>XR Interaction Toolkit</li>
    </ul>
</section>

---SOURCE---

<h2 class="section-subtitle">Source Code Features</h2>

<h3>Softlock Prevention</h3>
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

<h3>Softlock Prevention</h3>
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
