---
title: VR-Recording Toolkit
tagline: A tool that allows you to record your VR movements, and replay them in a virtual environment.
role: XR Developer
timeline: 8 Weeks
platform: PC VR
tags:
  - Unity
  - C#
  - XR Interaction Toolkit
heroImage: Images/Projects/VRRecording/VRRecordingMain.png
gallery:
  - Images/Projects/VRRecording/VRRecordingMain.png
sourceLink: https://github.com/GLU-Gaming/twinstick-2024-c-p-s.git
---

<section class="info-section">
    <h2 class="section-subtitle">About the Project</h2>
    <p>
        VR-Recording Toolkit is a tool that allows you to record your VR movements, and replay them in a virtual environment.
    </p>
    <p>
     --------------------------------------------------------------------------------------------------
    </p>
    <p>
        In this project I worked together with 2 other students. We had a gottan a special assignment from our teacher to create a tool for researchers at the HU (Hogeschool Utrecht). The assignment was to give them a tool to record and analyze VR movements.
    </p>
    <p>
        --------------------------------------------------------------------------------------------------
    </p>
    <p>
        I was in charge of the XR Intergration and the movement capturing. One of my teamates made the system to convert that data in to a JSON file, and another teamate created the data base to store and retrieve that data.
    </p>
    
</section>

<section class="info-section">
    <h2 class="section-subtitle">My Role & Features</h2>
    <ul class="feature-list">
        <li>XR Intergration</li>
        <li>VR movement capturing</li>
        <li>Replaying feature</li>
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
            src=""
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
</iframe>
</div>

</div>
