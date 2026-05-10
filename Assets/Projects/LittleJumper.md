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
sourceLink: https://github.com/GLU-CSD/platformerproject-BattlefieldGuy/tree/main/PlatformerProject
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

<h3>Cinemachine system</h3>
<div class="feature-segment">
    <div class="code-container">
        <pre><code class="language-csharp">
/// Luckily Cinemachine does 99% of the work for you.
/// You can add a dead zone around the player, so the camera won't be able to get to close to the player.
/// You can also add a soft zone around the player, so the camera will be a bit more hesitant to get to close to the player.
/// Finally you can add a smart follow system that will try to keep the player in frame.

</code></pre>

</div>
<div class="video-container">
<iframe
            src="https://www.youtube.com/embed/fRZ34zppyOQ?si=x-bCUKOzaUw3Hllh"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
</iframe>
</div>

</div>

<h3>Barrel Trap System</h3>
<div class="feature-segment">
    <div class="code-container">
        <pre><code class="language-csharp">
/// Triggers Barrel effect.

using UnityEngine;

public class BarrelEffect : MonoBehaviour
{
[SerializeField] private ParticleSystem[] \_particleSystems;

    public void StartParticles()
    {
        for (int i = 0; i < _particleSystems.Length; i++)
        {
            _particleSystems[i].Play();
        }
    }

}

/// Barrel Hit, wil trigger actions uppon hitting the player.

using System.Collections;
using UnityEngine;

public class BarrelHit : MonoBehaviour
{
private PlayerResetPoint \_playerReset;
private Animation \_anim;
[SerializeField] private ParticleSystem \_particleSystem1;
[SerializeField] private ParticleSystem \_particleSystem2;

    void Start()
    {
        _playerReset = FindObjectOfType<PlayerResetPoint>();
        _anim = this.GetComponent<Animation>();
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Player"))
        {
            this.GetComponent<Collider>().isTrigger = false;
            _particleSystem1.Play();
            _particleSystem2.Play();
            _anim.Stop();
            _playerReset.ResetH();
            StartCoroutine(enumerator());
        }
    }

    private IEnumerator enumerator()
    {
        yield return new WaitForSeconds(2f);
        this.GetComponent<Collider>().isTrigger = true;
        _anim.Play();
    }

}

///Barrel Sounds, Plays a pop sound when the barrel is popped and a crash sound when the barrel hits something.

using UnityEngine;

public class BarrelSounds : MonoBehaviour
{
[SerializeField] private AudioClip \_pop;
[SerializeField] private AudioClip \_crash;
private AudioSource \_source;

    void Start()
    {
        _source = this.GetComponent<AudioSource>();
    }
    public void Pop()
    {
        _source.clip = _pop;
        _source.Play();
    }
    public void Crash()
    {
        _source.clip = _crash;
        _source.Play();
    }

}

///Barrel Timeout, This script gives an added random timeout to the barrels, making them more unpredictable.

using System.Collections;
using UnityEngine;

public class BarrelTimeOut : MonoBehaviour
{
[SerializeField] private float min = 1.5f;
[SerializeField] private float max = 3.5f;

    private Animation anim;
    private void Start() => anim = this.GetComponent<Animation>();

    private IEnumerator enumerator()
    {
        float i = Random.Range(min, max);
        yield return new WaitForSeconds(i);
        anim.Play();
    }

}
</code></pre>

</div>
<div class="video-container">
<iframe
            src="https://www.youtube.com/embed/fRZ34zppyOQ?si=x-bCUKOzaUw3Hllh"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
</iframe>
</div>

</div>
