---
title: Coastal Cookout
tagline: Start your cooking job on the pirate ship, recreation of "Over cooked"
role: Lead Developer
timeline: 9 Weeks
platform: PC VR / Meta Quest 3
tags:
  - Unity
  - C#
  - VR
  - XR Interaction Toolkit
heroImage: Images/Projects/CoastalCookout/CoastalCookoutMain.png
gallery:
  - Images/Projects/CoastalCookout/CoastalCookoutMain.png
  - Images/Projects/CoastalCookout/CoastalCookout1.png
  - Images/Projects/CoastalCookout/CoastalCookout2.png
  - Images/Projects/CoastalCookout/CoastalCookout3.png
sourceLink: https://github.com/GLU-Gaming/twinstick-2024-c-p-s.git
downloadLink: http://lzkchr.itch.io/whissis
---

<section class="info-section">
    <h2 class="section-subtitle">About the Project</h2>
    <p>
        Coastal Cookout is a single player version of the popular game "Cookout". The theming is set in a coastal environment with a focus on seafood. It features Pirate's and other sea creatures for customers and a variety of seafood to cook.
    </p>
    <p>
    --------------------------------------------------------------------------------------------------
    </p>
    <p>
        In this 9 week project, we where tasked to design, create and publish a game. We received a theme from school and had to come up with a game idea that fit the theme. Our group came up with the idea for Coastal Cookout, a single player version of the popular game "Cookout". With that a few of my classmates and I had the idea to make it a VR game. This then became the base for our game, we wanted to challenge ourselves with this project and create something we hadn't done before.
    </p>
    <p>
    --------------------------------------------------------------------------------------------------
    </p>
    <p>
        As a Lead developer my tasks varied from making mechanics to helping out other teammembers with their tasks. But I was also sub Scrum master of our group, I was responsible for the daily's and other scrum events in case our Scrum master couldn't make it.
    </p>
</section>

<section class="info-section">
    <h2 class="section-subtitle">My Role & Features</h2>
    <ul class="feature-list">
        <li>Lead Developer</li>
        <li>Sub Scrum Master</li>
        <li>Random Receipt Generator</li>
        <li>Station Logic</li>
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
