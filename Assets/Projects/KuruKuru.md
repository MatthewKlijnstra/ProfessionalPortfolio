---
title: Kuru Kuru
tagline: Spin your way trough the modern remake of the classic retro game Kuru Kuru Kururin.
role: Developer
timeline: Ongoing
platform: PC
tags:
  - Unity
  - C#
  - First project ever
heroImage: Images/Projects/KuruKuru/KuruKuruMain.png
gallery:
  - Images/Projects/KuruKuru/KuruKuruMain.png
  - Images/Projects/KuruKuru/KuruKuru1.png
  - Images/Projects/KuruKuru/KuruKuru2.png
  - Images/Projects/KuruKuru/KuruKuru3.png
  - Images/Projects/KuruKuru/KuruKuru4.png
  - Images/Projects/KuruKuru/KuruKuru5.png
  - Images/Projects/KuruKuru/KuruKuru6.png
  - Images/Projects/KuruKuru/KuruKuru7.png
sourceLink: https://github.com/BattlefieldGuy/Kuru-Kuru
---

<section class="info-section">
    <h2 class="section-subtitle">About the Project</h2>
    <p>
        Kuru Kuru is a fast-paced, top-down, arcade-style game where players control a spinning top. The goal is to complete the level while avoiding obstacles. The game features a unique "spin" mechanic that is always on, and can't be turned off. This makes the game challenging and fun.
    </p>
    <p>
        --------------------------------------------------------------------------------------------------
    </p>
    <p>
       This project was my actual first game to make at school. The task was a simple remake of the retro game Kuru Kuru Kururin. But I was so intrigued by the mechanics and possibilities that I coded away so much that I can't say it's just a school project anymore.
    </p>
</section>

<section class="info-section">
    <h2 class="section-subtitle">My Role & Features</h2>
    <ul class="feature-list">
        <li>The Maker of the game</li>
        <li>Obstacles</li>
        <li>Map System</li>
        <li>Score System</li>
        <li>Respawn mechanics</li>
        <li>Audio Design</li>
    </ul>
</section>

---SOURCE---

<h2 class="section-subtitle">Source Code Features</h2>

<h3>Push & Pull obstacles</h3>
<div class="feature-segment">
    <div class="code-container">
        <pre><code class="language-csharp">
using UnityEngine;

public class ObstaclePP : MonoBehaviour
{
[SerializeField]
private Rigidbody2D player;

    [Header("Push")]
    [SerializeField]
    private float pushForceL1;

    [SerializeField]
    private float pushForceL2;

    [SerializeField]
    private float pushForceL3;

    [Header("Pull")]
    [SerializeField]
    private float pullForceL1;

    [SerializeField]
    private float pullForceL2;

    [SerializeField]
    private float pullForceL3;

    void Start()
    {
        if (player == null)
            player = GetComponent<Rigidbody2D>();
    }

    private void OnTriggerStay2D(Collider2D other)
    {
        if (other.gameObject.CompareTag("pushG"))
        {
            player.AddForce(other.transform.up * pushForceL1);
        }
        else if (other.gameObject.CompareTag("pushB"))
        {
            player.AddForce(other.transform.up * pushForceL2);
        }
        else if (other.gameObject.CompareTag("pushR"))
        {
            player.AddForce(other.transform.up * pushForceL3);
        }
        else if (other.gameObject.CompareTag("pullG"))
        {
            player.AddForce(-other.transform.up * pullForceL1);
        }
        else if (other.gameObject.CompareTag("pullB"))
        {
            player.AddForce(-other.transform.up * pullForceL2);
        }
        else if (other.gameObject.CompareTag("pullR"))
        {
            player.AddForce(-other.transform.up * pullForceL3);
        }
    }

}

</code></pre>

</div>
<div class="video-container">
<iframe
            src="https://www.youtube.com/embed/qlfo6UoAu78?si=Cc12rhBpZ19jEV0E"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
</iframe>
</div>

</div>

<h3>Color switching walls system</h3>
<div class="feature-segment">
    <div class="code-container">
        <pre><code class="language-csharp">
private void OnTriggerEnter2D(Collider2D other)
{

if (other.gameObject.CompareTag("switch"))
{
if (isGreen == false)
{
isGreen = true;
}
else if (isGreen == true)
{
isGreen = false;
}
}

if (isGreen == false && other.gameObject.CompareTag("Gwall"))
{
if (spawnState == 6)
{
transform.position = new Vector2(36.74f, -43.5f);
}
if (spawnState == 7)
{
transform.position = new Vector2(65.13f, -95.92f);
}
}
if (isGreen == true && other.gameObject.CompareTag("Pwall"))
{
if (spawnState == 6)
{
transform.position = new Vector2(36.74f, -43.5f);
}
if (spawnState == 7)
{
transform.position = new Vector2(65.13f, -95.92f);
}
}
}

</code></pre>

</div>
<div class="video-container">
<iframe
            src="https://www.youtube.com/embed/zLvHJy_KD80?si=9FicIMDNxtRYoJke"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
</iframe>
</div>

</div>
