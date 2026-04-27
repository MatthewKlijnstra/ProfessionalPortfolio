---
title: SecondSight
tagline: In Second Sight you discover how color perception affects your gameplay. The game takes place between the real world and the virtual world of the Others. These creatures do not have perception of color, and want to learn it trough your eyes.
role: Developer
timeline: TBD
platform: Meta Quest
tags:
  - Unity
  - C#
  - XR Interaction Toolkit
  - Meta Passthrough
  - Meta Oclusion
  - Local Multiplayer hosting
heroImage: Images/Projects/SecondSight/SecondSightMain.png
gallery:
  - Images/Projects/SecondSight/SecondSightMain.png
  - Images/Projects/SecondSight/SecondSight1.png
  - Images/Projects/SecondSight/SecondSight2.png
  - Images/Projects/SecondSight/SecondSight3.png
  - Images/Projects/SecondSight/SecondSight4.png
  - Images/Projects/SecondSight/SecondSight5.png
  - Images/Projects/SecondSight/SecondSight6.png
  - Images/Projects/SecondSight/SecondSight7.png
sourceLink: https://github.com/GLU-Gaming/twinstick-2024-c-p-s.git
downloadLink: http://lzkchr.itch.io/whissis
---

<section class="info-section">
    <h2 class="section-subtitle">About the Project</h2>
    <p>
        In Second Sight you discover how color perception affects your gameplay. The game takes place between the real world and the virtual world of the Others. These creatures do not have perception of color, and want to learn it trough your eyes.
        The focus lay's on the diffrence between Blue and Green, in this experience you will together with 3 other people make choices about what color is shown on the Screen at that time. The others will then study your actions and discusions ass the colors get increalingly more difficult to indentify.
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
// Example Code Snippet: Local Multiplayer Sync
public class NetworkSync : MonoBehaviour {
    public void SyncColorChoice(Color selectedColor) {
        // Send choice to all local players
        BroadcastMessage("OnColorSelected", selectedColor);
    }

    void OnColorSelected(Color color) {
        // Update local state based on remote choice
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
// Example Code Snippet: XR Passthrough Setup
public class PassthroughManager : MonoBehaviour {
    public void EnablePassthrough() {
        // Code to enable Meta Passthrough
        // OVRManager.instance.isInsightPassthroughEnabled = true;
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
