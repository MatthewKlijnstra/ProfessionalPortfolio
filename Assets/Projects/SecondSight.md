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

<h3>Fish Flock System</h3>
<div class="feature-segment">
    <div class="code-container">
        <pre><code class="language-csharp">
/// <summary>
/// This enum provides the states used in the FishFSM script,
/// which is used to control the behavior of the fish flock in the game.
/// The states include idle, rightAnswer, and wrongAnswer,
/// which correspond to the different behaviors of the fish flock based on the player's actions in the game.
/// </summary>
namespace SecondSight.Flocking
{
	public enum FishFlockStates
	{
		Idle,
		RightAnswer,
		WrongAnswer,
	}
}

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace SecondSight.Flocking
{
/// <summary>
/// This is the State machine controller.
/// From here all the feature serounding the Flock state get triggered and controled.
/// </summary>
public class FishFSM : MonoBehaviour
{
/// <summary> States of the fish flock </summary>
public FishFlockStates State;

    	/// <summary> The list of flock lead objects used to control the movement of the flock, this is used to pass the references to the state behaviors </summary>
    	private List<GameObject> _flockLeadPositions = new List<GameObject>();

    	/// <summary> Start delay used to in combination with the _trackedEntities List</summary>
    	[SerializeField]
    	private float _startDelay = 1f;

    	// FSM State Behavior Refs
    	/// <summary> Idle state script reference </summary>
    	private FlockIdle _idle;

    	/// <summary> Right Answer state script reference </summary>
    	private FlockRightAnwser _rightAnswer;

    	/// <summary> Wrong Answer state script reference </summary>
    	private FlockWrongAnwser _wrongAnswer;

    	/// <summary> Flock manager, Thirdparty script </summary>
    	private NVBoids _flockManager;

    	/// <summary> List of entities in the flock, used for making them visible on start or delaying to an imersive start</summary>
    	private Transform[] _trackedEntities;

    	/// <summary> Indicates whether the fish flock is currently in the idle state </summary>
    	private bool _isIdle = false;

    	void Start()
    	{
    		StartCoroutine(StartSequence());

    		// Refs to state behaviors
    		_idle = GetComponent<FlockIdle>();
    		_rightAnswer = GetComponent<FlockRightAnwser>();
    		_wrongAnswer = GetComponent<FlockWrongAnwser>();

    		FlockData();
    	}

    	void Update()
    	{
    		switch (State)
    		{
    			case FishFlockStates.Idle:
    				Idle();
    				break;
    			case FishFlockStates.RightAnswer:
    				RightAnswer();
    				break;
    			case FishFlockStates.WrongAnswer:
    				WrongAnswer();
    				break;
    		}
    	}

    	/// <summary>
    	///Start sequence to get the references of the flock manager,
    	///the state behaviors and to activate the entities in the scene
    	///with a delay for an immersive start.
    	/// </summary>
    	private IEnumerator StartSequence()
    	{
    		State = FishFlockStates.Idle;

    		// delay before starting to acuire all the refenreces needed
    		yield return new WaitForSeconds(_startDelay);
    		TrackReferences();
    	}

    	private void FlockData()
    	{
    		// Ref to flock manager
    		_flockManager = FindFirstObjectByType<NVBoids>();

    		if (_flockManager)
    			_flockLeadPositions = _flockManager.FlockLeadList;
    		else
    		{
    			Debug.LogError(
    				"Flock Manager not found in the scene."
    					+ "FlockManager: "
    					+ _flockManager
    					+ "Flock Lead List"
    					+ _flockLeadPositions
    			);
    			return;
    		}

    		_idle.SetLeadPosition(_flockLeadPositions);
    	}

    	/// <summary>
    	/// Tracks all the entities in the flock and adds them to the _trackedEntities list,
    	/// This is used to activate them if it is needed.
    	/// </summary>
    	private void TrackReferences()
    	{
    		// Code to track flocking entities
    		_trackedEntities = _flockManager.birdsTransform;
    	}

    	#region --- State Behaviors ---

    	/// <summary>
    	/// Idle state behavior, starts the idle movement and
    	/// can be used to add additional idle behaviors if needed.
    	/// </summary>
    	private void Idle()
    	{
    		// Idle behavior
    		if (!_isIdle)
    		{
    			_idle.StartMovement();
    			_isIdle = true;
    		}
    		// Additional idle behavior can be added here
    	}

    	/// <summary>
    	/// Right answer state behavior, triggers the right answer animation
    	/// and stops movement when the right answer is triggered.
    	///
    	/// Currently not working as intended, It triggers the wrong answer for now.
    	/// </summary>
    	private void RightAnswer()
    	{
    		if (!_isIdle)
    			return;

    		// Right answer behavior
    		_rightAnswer.DOSpiral(_flockLeadPositions);

    		// Additional right answer behavior can be added here
    		_isIdle = false;
    	}

    	/// <summary>
    	/// Wrong answer state behavior, triggers the wrong answer animation
    	/// </summary>
    	private void WrongAnswer()
    	{
    		_isIdle = false;
    		// Wrong answer behavior
    		_wrongAnswer.ActivateDanger();
    		State = FishFlockStates.Idle;
    	}

    	#endregion
    }

}

</code></pre>

</div>
<div class="video-container">
<video autoplay loop muted playsinline>
<iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1&loop=1&playlist=dQw4w9WgXcQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
</iframe>
</div>
</div>

<h3>Fish Wrong Anwser System</h3>
<div class="feature-segment">
    <div class="code-container">
        <pre><code class="language-csharp">
using UnityEngine;

namespace SecondSight.Flocking
{
/// <summary>
/// Flock wrong anwser,
///
/// Spawns a danger in the middle of the flock,
/// making them scatter and then return to idle after a set time.
/// </summary>
public class FlockWrongAnwser : MonoBehaviour
{
/// <summary> The time it takes for the flock to return to normal after the danger is activated, in seconds. </summary>
[SerializeField]
private float \_returnTime;

    	/// <summary> _flock manager reference to activate the danger. </summary>
    	private NVBoids _flockManager;

    	void Start()
    	{
    		_flockManager = FindFirstObjectByType<NVBoids>();
    	}

    	/// <summary>
    	/// The danger
    	/// </summary>
    	public void ActivateDanger()
    	{
    		if (_flockManager != null)
    		{
    			StartCoroutine(_flockManager.Danger(_returnTime));
    		}
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

<h3>Fish Right Anwser System</h3>
<div class="feature-segment">
    <div class="code-container">
        <pre><code class="language-csharp">
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

namespace SecondSight.Flocking
{
/// <summary>
/// Flock Right Answer animation,
///
/// The Spiral.
///
/// Currently not used, need to fix the idle movement override and the path to make it work properly,
/// </summary>
public class FlockRightAnwser : MonoBehaviour
{
/// <summary> The frequency at wich the entities migrate to a nother lead position during the spiral rotation. Testing shows it's recomended to stay above 0.3, frequency is lowerd during the animation </summary>
[SerializeField]
private float \_migrationFrequency;

    	/// <summary> Duration of the spiral animation, in seconds </summary>
    	[SerializeField]
    	private float _duration;

    	/// <summary> The amount of rotation for the spiral animation, in rotations </summary>
    	[SerializeField]
    	private float _rotationAmount;

    	/// <summary> Statemachine manager reference	</summary>
    	private FishFSM _stateManager;

    	/// <summary> Flock manager reference </summary>
    	private NVBoids _flockManager;

    	private void Start()
    	{
    		_stateManager = GetComponent<FishFSM>();
    		_flockManager = FindFirstObjectByType<NVBoids>();
    	}

    	/// <summary>
    	/// Spiral animation using DOTween,
    	///
    	/// it rotates the parent of the flock lead objects,
    	/// whiles also activating the individual animation for the lead objects to make them move inward,
    	/// this creates a spiral movement for the flock.
    	/// </summary>
    	public void DOSpiral(List<GameObject> flockLeadPositions)
    	{
    		_flockManager.migrationFrequency = _migrationFrequency;

    		foreach (GameObject item in flockLeadPositions)
    		{
    			item.GetComponent<IdleFlockShifter>().SpiralMovement(_duration);
    		}

    		DOTween
    			.Sequence()
    			.Append(
    				transform
    					.DOLocalRotate(
    						new Vector3(0, _rotationAmount * 360, 0),
    						_duration,
    						RotateMode.FastBeyond360
    					)
    					.SetEase(Ease.InOutSine)
    			)
    			.OnComplete(SetIdle);
    	}

    	/// <summary>
    	/// Return to idle after the animation is complete
    	/// </summary>
    	private void SetIdle()
    	{
    		_stateManager.State = FishFlockStates.Idle;
    		_flockManager.migrationFrequency = 1;
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
