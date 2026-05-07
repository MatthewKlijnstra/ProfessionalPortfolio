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
sourceLink: https://github.com/BattlefieldGuy/Project-Bhpatics/tree/main/Assets/Dev%20folders/Matthew
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
        <li>FuseBox task</li>
        <li>Key task</li>
        <li>XR Interaction Toolkit</li>
    </ul>
</section>

---SOURCE---

<h2 class="section-subtitle">Source Code Features</h2>

<h3>Haptic event calling System</h3>
<div class="feature-segment">
    <div class="code-container">
        <!-- Replace src with the path to your Unity visual scripting screenshot -->
        <img src="Images/Projects/Floors/AIgraph1.png" alt="Unity Visual Scripting Logic" style="width: 100%; height: auto; border-radius: 8px;">
        <img src="Images/Projects/Floors/AIgraph2.png" alt="Unity Visual Scripting Logic" style="width: 100%; height: auto; border-radius: 8px;">
    </div>
<div class="video-container">
<video autoplay loop muted playsinline>
<source src="dummy.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
</div>

</div>

<h3>FuseBox Task</h3>
<div class="feature-segment">
    <div class="code-container">
        <pre><code class="language-csharp">

/// FuzeBox switch detector

using UnityEngine;

public class FuzeSwitchDetector : MonoBehaviour
{
/// <summary>
/// this script is responsible for the sequencing of the fuze box task
/// </summary>
private AudioSource audioSource;

    private int switches = 0;

    //reference call
    private void Start() => audioSource = GetComponent<AudioSource>();

    #region --- FUNCTIONS ---
    public void ActivateSwitch()
    {
        switches++;
        audioSource.Play();
        CheckSwitchCount();
    }

    private void CheckSwitchCount()
    {
        if (switches >= 5)
            Debug.Log(switches);
    }
    #endregion

}

/// Fusebox controller

using UnityEngine;

public class fuseboxMatt : MonoBehaviour
{
/// <summary>
/// fuze switch controller
///
/// controlls individual lights
/// </summary>
#region --- REFS & VARS ---
[Header("References")]
[SerializeField]
private Animator AnimSwitch;

    [SerializeField]
    private GameObject LightGreen;

    [SerializeField]
    private GameObject LightRed;

    [SerializeField]
    private AudioSource audioSource;

    private SwitchCounter switchCounter;

    private bool isTrue = false;

    #endregion

    #region --- SETUP ---
    void Start()
    {
        LightGreen.SetActive(false);
        LightRed.SetActive(true);
        switchCounter = FindFirstObjectByType<SwitchCounter>();
    }
    #endregion

    #region --- TRIGGERS ---
    void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Player") && SocketManager.WireChecker == true && !isTrue)
        {
            AnimSwitch.SetTrigger("SwitchOne");
            LightGreen.SetActive(true);
            LightRed.SetActive(false);
            audioSource.Play();
            switchCounter.AddCount();
            isTrue = true;
        }
    }
    #endregion

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

<h3>Key Task</h3>
<div class="feature-segment">
    <div class="code-container">
        <pre><code class="language-csharp">

/// SocketEventsUpdate Script

using System.Collections;
using UnityEngine;

public class SocketEventsUpdate : Task
{
/// <summary>
/// key task
///
/// checks if task is done
/// </summary>
//refs
[Header("lights")]
[SerializeField]
private GameObject Green;

    [SerializeField]
    private GameObject Red;

    [SerializeField]
    private GameObject Blue;

    [SerializeField]
    private GameObject Yellow;

    [Header("Haptics event")]
    [SerializeField]
    private string haptic;

    private BhapticsActivater bhapticsActivater;

    //check
    bool isTaskComplete = false;

    private void Start() => bhapticsActivater = FindAnyObjectByType<BhapticsActivater>();

    void Update()
    { //check
        if (!isTaskComplete)
        {
            if (
                Green.activeInHierarchy
                && Red.activeInHierarchy
                && Blue.activeInHierarchy
                && Yellow.activeInHierarchy
            )
                StartCoroutine(CompleteSequence());
        }
    }

    private IEnumerator CompleteSequence()
    {
        isTaskComplete = true;

        yield return new WaitForSeconds(0.5f);

        FinishedTask();
        if (haptic != null)
            bhapticsActivater.SingleShotHaptic(haptic);
    }

    protected override void OnFinishedTask() { }

}

/// KeyTaskManager Script

using System;
using UnityEngine;

public class KeyTaskManager : MonoBehaviour
{
/// <summary>
/// this script is responsible for scattering all keys
///
/// array with transforms must have 4 minimum
/// </summary>
[Header("SpawnPoints")]
[SerializeField]
private Transform[] transforms;

    #region --- FUNCTIONS ---
    public void ScatterKeys(GameObject[] keys)
    {
        //scatter keys at random positions
        foreach (GameObject key in keys)
        {
            int number = RandomPosition();
            key.transform.position = transforms[number].position;
            RemoveAt(ref transforms, number);
        }
    }
    #endregion

    #region --- ARRAY FUNCTIONS ---
    private int RandomPosition()
    {
        return UnityEngine.Random.Range(0, transforms.Length); //return random position for key
    }

    private void RemoveAt<T>(ref T[] _array, int index)
    {
        for (int _a = index; _a < _array.Length - 1; _a++)
        {
            // moves ellements downards
            _array[_a] = _array[_a + 1];
        }
        // resize array
        Array.Resize(ref _array, _array.Length - 1);
    }
    #endregion

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
