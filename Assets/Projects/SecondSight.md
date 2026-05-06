---
title: SecondSight
tagline: Expierence color perception in a group.
role: Scrum Master / Developer
timeline: 2.5 Months
platform: Meta Quest 3
tags:
  - Unity
  - C#
  - XR Interaction Toolkit
  - Meta Passthrough
  - Meta Oclusion
  - Local Multiplayer hosting
heroImage: Images/Projects/SecondSight/SecondSightMain.png
gallery:
  - Images/Projects/SecondSight/SecondSight1.png
  - Images/Projects/SecondSight/SecondSight2.png
  - Images/Projects/SecondSight/SecondSight3.png
  - Images/Projects/SecondSight/SecondSight4.png
  - Images/Projects/SecondSight/SecondSight5.png
  - Images/Projects/SecondSight/SecondSight6.png
  - Images/Projects/SecondSight/SecondSightMain.png
  - Images/Projects/SecondSight/SecondSight7.png
sourceLink: https://github.com/GLU-Gaming/twinstick-2024-c-p-s.git
downloadLink: http://lzkchr.itch.io/whissis
---

<section class="info-section">
    <h2 class="section-subtitle">About the Project</h2>
    <p>
        In Second Sight you discover how color perception affects your gameplay. The game takes place between the
        real world and the virtual world of the Others. These creatures do not have perception of color, and want
        to learn it trough your eyes.
        The focus lay's on the diffrence between Blue and Green, in this experience you will together with 3 other
        people make choices about what color is shown on the Screen at that time. The others will then study your
        actions and discusions ass the colors get increalingly more difficult to indentify.
    </p>
    <p>
        --------------------------------------------------------------------------------------------------
    </p>
    <p>
        This project is my first at my internship at XR-Lab. We worked with 6 Artists, 4 Developers and a designer
        to create this imersive expierence. During this project I had the lead over the project as a Scrum
        Master, where I was responsible for the daily's and other scrum events. We used Meta Quest 3's passthrough and 
        occlusion features combined with a physical setup to create a realistic and immersive experience, 
    </p>
</section>

<section class="info-section">
    <h2 class="section-subtitle">My Role & Features</h2>
    <ul class="feature-list">
        <li>Scrum Master</li>
        <li>Git Manager</li>
        <li>Fish Flock system</li>
        <li>XR System Integration</li>
    </ul>
</section>

---SOURCE---

<h2 class="section-subtitle">Source Code Features</h2>

<h3>Softlock Prevention</h3>
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

<h3>VRButton</h3>
<div class="feature-segment">
    <div class="code-container">
        <pre><code class="language-csharp">
using System.Collections;
using UnityEngine;
using UnityEngine.Events;

/// <summary>
/// Simple button script for the greyboxing toolkit.
///
/// Drag the necessary events into the inspector and make sure to use the "Player" prefab or
/// add coliders and Rigidbody's to the controllers with the "Player" tag for the button to work.
/// </summary>
namespace SecondSight.VRButton
{
public class VRButton : MonoBehaviour
{
/// <summary> Unity event used to call other scripts when the button is pressed. </summary>
[
SerializeField,
Tooltip("Unity event used to call other scripts when the button is pressed.")
]
private UnityEvent \_onPress;

    	/// <summary> The distance that the button moves on press, Default is 0.05 </summary>
    	[SerializeField, Tooltip("The distance that the button moves on press, Default is 0.05")]
    	private float _pressDepth = 0.05f;

    	/// <summary> The duration of the buttons 'animation' time. </summary>
    	[SerializeField, Tooltip("The duration of the buttons 'animation' time")]
    	private float _pressDuration = 0.5f;

    	/// <summary> Rest heigt where the button always moves back to, Always starting position of object on start. </summary>
    	private float _restHeight;

    	/// <summary> Used to prevent a button from being pressed multiple times at once, which could cause issues with the animation and event invocation. </summary>
    	private bool _isPressed = false;

    	private void Start()
    	{
    		//  Start is only used for setting the restHeight in this script.
    		_restHeight = this.transform.localPosition.y;
    	}

    	private void OnTriggerEnter(Collider other)
    	{
    		//if (other.CompareTag("Player"))
    		//{
    			TriggerButton();
    		//}
    	}

    	/// <summary>
    	/// Triggers button animation and events, also checks if the button is already pressed to prevent multiple presses at once.
    	/// </summary>
    	private void TriggerButton()
    	{
    		if (_isPressed)
    			return;

    		_isPressed = true;
    		StartCoroutine(ButtonAnimation());
    		_onPress.Invoke();
    	}

    	/// <summary>
    	/// Basic button animation for visual feedback.
    	/// The Depth of press and duration of the animation can be set in the inspector.
    	/// </summary>
    	private IEnumerator ButtonAnimation()
    	{
    		// Moves button down to give visual feedback of being pressed, and wait the set duration.
    		this.transform.localPosition = new Vector3(0.0f, _pressDepth, 0.0f);
    		yield return new WaitForSeconds(_pressDuration);

    		// Resets button and bool to be activated again.
    		this.transform.localPosition = new Vector3(0.0f, _restHeight, 0.0f);
    		_isPressed = false;
    	}
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
