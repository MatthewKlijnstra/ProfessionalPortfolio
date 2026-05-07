---
title: WhisSis
tagline: Space scavengers worst nightmare.
role: Lead Programmer
timeline: 4 Weeks
platform: PC VR
tags:
  - Unity
  - C#
  - XR Interaction Toolkit
heroImage: Images/Projects/WhisSis/WhisSisMain.png
gallery:
  - Images/Projects/WhisSis/WhisSis1.png
  - Images/Projects/WhisSis/WhisSis2.png
  - Images/Projects/WhisSis/WhisSis3.png
  - Images/Projects/WhisSis/WhisSis4.png
  - Images/Projects/WhisSis/WhisSis5.png
  - Images/Projects/WhisSis/WhisSis6.png
  - Images/Projects/WhisSis/WhisSis7.png
  - Images/Projects/WhisSis/WhisSisMain.png
sourceLink: https://github.com/GLU-Gaming/twinstick-2024-c-p-s.git
downloadLink: http://lzkchr.itch.io/whissis
---

<section class="info-section">
    <h2 class="section-subtitle">About the Project</h2>
    <p>
        A spacelab that you ventured uppon, only to find out that you are not alone.
        On entering the facility, the airlock breaks down and going back is not an option.
        Now forced to go deeper into the facility, to fix the airlock, you'll have to face the horrors
        that await you.
    </p>
    <p>
        --------------------------------------------------------------------------------------------------
    </p>
    <p>
        A classic VR shooter. with a team of 4 artists and 3 developers. We had a blast making this game. A lot of easter eggs, lore and thought went into this game.
        Realy proud of the weapon and granade mechanics I made for this game.
    </p>
</section>

<section class="info-section">
    <h2 class="section-subtitle">My Role & Features</h2>
    <ul class="feature-list">
        <li>Project Lead</li>
        <li>Weapon system</li>
        <li>Grenade system</li>
        <li>A lot of debugging</li>
    </ul>
</section>

---SOURCE---

<h2 class="section-subtitle">Source Code Features</h2>

<h3>Weapon System</h3>
<div class="feature-segment">
    <div class="code-container">
        <pre><code class="language-csharp">
using System.Collections;
using UnityEngine;
using UnityEngine.VFX;

public class TacticalPistolManager : MonoBehaviour
{
[Header("Slide Settings")]
[SerializeField] private GameObject slide;
[SerializeField] public float slidePullBackDistance = 0.04f;
[SerializeField] public float slidePullBackTreshold = 0.01f;
[SerializeField] public float slidePullBackResetTreshold = 0.01f;
[SerializeField] public float slidePullBackSpeed = 0.1f;
[SerializeField] private GameObject casingPrefab;
[SerializeField] private Transform casingExitPoint;
[SerializeField] private ConfigurableJoint slideJoint = null;

    [Header("Magazine Settings")]
    [SerializeField] public string[] AcceptableMagazines;
    [SerializeField] private GameObject magazineSocket;
    public int Bullets;
    public bool isMagLoaded;

    [Header("Muzzle settings")]
    [SerializeField] private Transform muzzle;
    [SerializeField] private float muzzleFlashDuration = 0.1f;
    [SerializeField] private VisualEffect muzzleFlashParticles;
    [SerializeField] private GameObject decalPrefab;
    [SerializeField] private GameObject enemyHitPrefab;
    [SerializeField] private float decalOffset = 0.01f;

    [Header("Trigger settings")]
    [SerializeField] private GameObject trigger;
    [SerializeField] private float triggerTime = 0.3f;
    [SerializeField] private float damage = 25;
    [SerializeField] private string[] enemyTags;

    [Header("Audio settings")]
    [SerializeField] private AudioSource audioSource;
    [SerializeField] private AudioClip shotSound;
    [SerializeField] private AudioClip dryFireSound;
    [SerializeField] private AudioClip slideReleaseSound;
    [SerializeField] private AudioClip addMagazineSound;
    [SerializeField] private AudioClip dropMagazineSound;

    [Header("Pistol settings")]
    [SerializeField] private float _knockBack = 15;
    [SerializeField] private Rigidbody _pistolRigdigbody;
    // Refs

    private bool slidePulledBack = false;

    RaycastHit hit;

    void Start()
    {
        muzzleFlashParticles.Stop();
        getRefs();
        setSlideConfig(slidePullBackDistance);
    }

    public void pullTrigger()
    {
        shoot();
        StartCoroutine(rotateTrigger());
    }

    public void slideReached()
    {
        //Debug.Log("Slide reached target");
        slidePulledBack = true;
        audioSource.PlayOneShot(slideReleaseSound);
        if (checkAmmo())//spawn casing if ammo is present
        {
            spawnEject(casingPrefab);
        }
    }

    public void shoot()//shoot them!!!
    {
        if (checkAmmo() && slidePulledBack)
        {
            audioSource.PlayOneShot(shotSound);
            muzzleFlashParticles.Play();
            spawnEject(casingPrefab);
            //Debug.Log("Bang");
            //_pistolRigdigbody.AddTorque(0f, 0f, _knockBack);
            // add some force to the slide to simulate recoil
            StartCoroutine(slideBack());
            Ray ray = new Ray(muzzle.position, muzzle.forward);
            if (Physics.Raycast(ray, out hit, 100))
            {

                if (checkTag(enemyTags, hit.transform.tag))//it will always spawn a hit decal
                {
                    Vector3 decalPosition = hit.point + hit.normal * decalOffset;
                    GameObject decal = Instantiate(enemyHitPrefab, decalPosition, Quaternion.LookRotation(hit.normal));
                    hit.transform.GetComponent<AIManager>().TakeDamage(damage);
                }
                else if (hit.transform.CompareTag("StartButton"))
                {
                    //Debug.Log("Found Start");
                    hit.transform.GetComponent<Shootablebuttons>().StartButton();
                }
                else if (hit.transform.CompareTag("CreditsButton"))
                {
                    //Debug.Log("Found Cred");
                    hit.transform.GetComponent<Shootablebuttons>().CreditsButton();
                }
                else if (hit.transform.CompareTag("QuitButton"))
                {

                    hit.transform.GetComponent<Shootablebuttons>().QuitButton();
                }
                else
                {
                    Vector3 decalPosition = hit.point + hit.normal * decalOffset;
                    GameObject decal = Instantiate(decalPrefab, decalPosition, Quaternion.LookRotation(hit.normal));
                }//else is for a burnmark // now a place holder
            }

            // debug ray
            //Debug.DrawRay(muzzle.position, muzzle.forward * 100, Color.red, 2);
        }
        else
        {
            slidePulledBack = false;
            audioSource.PlayOneShot(dryFireSound);
            //Debug.Log("No ammo");//oops no ammo
        }
    }

    IEnumerator rotateTrigger()//moves trigger for trigger pull
    {
        trigger.transform.Rotate(-5, 0, 0);
        yield return new WaitForSeconds(triggerTime);
        trigger.transform.Rotate(5, 0, 0);
    }

    IEnumerator slideBack()//set slide back values for simulated pushback
    {
        slideJoint.targetPosition = new Vector3(0, 0, 0);
        yield return new WaitForSeconds(slidePullBackSpeed);
        slideJoint.targetPosition = new Vector3((slidePullBackDistance * 2), 0, 0);
    }

    public void addMagazine()//add magazine
    {
        //Debug.Log("Adding magazine");
        audioSource.PlayOneShot(addMagazineSound);
        isMagLoaded = true;
    }

    public void removeMagazine()//remove magazine
    {
        //Debug.Log("Remove magazine");
        audioSource.PlayOneShot(dropMagazineSound);
        isMagLoaded = false;
    }

    private bool checkAmmo()//check ammo
    {
        if (Bullets > 0)
        {
            return true;
        }
        return false;
    }

    private void setSlideConfig(float offSet)//slide configs
    {
        slideJoint.connectedAnchor = new Vector3(0, 0, (offSet * -1));
        slideJoint.linearLimit = new SoftJointLimit { limit = offSet };
        slideJoint.targetPosition = new Vector3((offSet * 2), 0, 0);
    }

    private void spawnEject(GameObject spawn)//spawn eject
    {
        Bullets--;
        GameObject eject = Instantiate(spawn, casingExitPoint.position, casingExitPoint.rotation);
        Rigidbody rb = eject.GetComponent<Rigidbody>();
        rb.AddForce(casingExitPoint.forward * 2, ForceMode.Impulse);
        rb.AddTorque(Random.insideUnitSphere * 2, ForceMode.Impulse);
    }

    private bool checkTag(string[] tags, string tag)//check tag
    {
        for (int i = 0; i < tags.Length; i++)
        {
            if (tag == tags[i])
            {
                return true;
            }
        }
        return false;
    }
    void getRefs() => slideJoint = slide.GetComponent<ConfigurableJoint>();

}
</code></pre>

</div>
<div class="video-container">
<iframe
            src="https://www.youtube.com/embed/cHQ2ZoPUXuk?si=cA_AZK_WBrg6tLRJ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
</iframe>
</div>

</div>

<h3>Grenade System</h3>
<div class="feature-segment">
    <div class="code-container">
        <pre><code class="language-csharp">
using System.Collections;
using UnityEngine;
using UnityEngine.InputSystem;
using UnityEngine.VFX;
public class Granade : MonoBehaviour
{
    [SerializeField] private InputActionReference _bButton;

    private IEnumerator coroutine;

    public Transform GranadePos;

    [Header("GranadeObjects")]
    [SerializeField] private Granade _gameObject;
    [SerializeField] private GameObject[] _GameObject;
    [SerializeField] private GameObject _granadeParent;
    [SerializeField] private GameObject _clip;
    [SerializeField] private GameObject _pin;
    [SerializeField] private GameObject _deParenter;

    [Header("GranadeSettings")]
    [SerializeField] private float _defuzeTime = 4f;
    [SerializeField] private float _fuzeTime = 3.6f;
    [SerializeField] private float _explosionForce = 10f;
    [SerializeField] private float _explosionRadius = 10f;
    [SerializeField] private float _upwardsModifier = 3f;
    [SerializeField] private float _granadeDamage = 40f;

    [Header("VFX")]
    [SerializeField] private VisualEffect _explosion;

    [Header("Audio")]
    [SerializeField] private AudioSource _granadeClipRelease;
    [SerializeField] private AudioSource _granadeExplosion;
    [SerializeField] private AudioSource _granadePinRelease;

    [Header("Bool checks")]
    public bool IsGrabbed = false;
    public bool isPinPulled = false;
    private bool _fuzeIgnited = false;

    public void SetGrabbed(bool value) => IsGrabbed = value;//set grab value

    private void Start() => _bButton.action.performed += SetPressed;//button input

    private void OnDestroy() => _bButton.action.performed -= SetPressed;

    private void Update()
    {
        if (isPinPulled == true && IsGrabbed == false && _fuzeIgnited == false)//check for the right conditions
        {
            coroutine = Fuze(3.6f);
            StartCoroutine(coroutine);
            _fuzeIgnited = true;
        }
        if (_fuzeIgnited)//trows away the clip upon fuze ignited
        {
            _clip.transform.parent = _deParenter.transform.parent;
            _deParenter.gameObject.GetComponent<DeParenter>().Detatch();
            _clip.gameObject.GetComponent<MeshCollider>().enabled = true;
            _clip.GetComponent<Rigidbody>().isKinematic = false;
            _clip.GetComponent<Rigidbody>().AddForce(0.2f, 0.2f, 10, ForceMode.Impulse);
        }
    }

    void SetPressed(InputAction.CallbackContext context)//with custom button fucntion
    {
        if (IsGrabbed && isPinPulled)//force fuze ignite when holding
        {
            //Debug.Log("A button pressed");
            if (_fuzeIgnited == false)
            {
                coroutine = Fuze(_fuzeTime);
                StartCoroutine(coroutine);
                _fuzeIgnited = true;
            }
        }
    }

    public void PinPulled()
    {
        isPinPulled = true;
        _granadePinRelease.Play();
    }

    IEnumerator Fuze(float fuzeTime)//fuze timer //wait x seconds
    {
        _granadeClipRelease.Play();
        float radius = 5;
        yield return new WaitForSeconds(fuzeTime);
        Vector3 center = GranadePos.position;
        Explode(center, radius);
    }

    void Explode(Vector3 center, float radius)//explode
    {
        _granadeExplosion.Play();
        _explosion.Play();
        foreach (var gameObject in _GameObject)//foreach loop to disable all mesh off the object
            gameObject.GetComponent<MeshRenderer>().enabled = false;

        _granadeParent.GetComponent<Rigidbody>().isKinematic = true;
        _granadeParent.GetComponent<Rigidbody>().useGravity = false;
        Collider[] hitColliders = Physics.OverlapSphere(center, radius);
        foreach (var hitCollider in hitColliders)//take damage and or rigidbody
        {
            if (hitCollider.GetComponent<Rigidbody>())
            {
                if (hitCollider.CompareTag("Enemy"))
                {
                    hitCollider.GetComponent<AIManager>().TakeDamage(_granadeDamage);
                }
                hitCollider.GetComponent<Rigidbody>().AddExplosionForce(_explosionForce, transform.position, _explosionRadius, _upwardsModifier, ForceMode.Impulse);
            }
        }
        StartCoroutine(Destroy());
    }

    IEnumerator Destroy()//Destroy for cleanup
    {
        yield return new WaitForSeconds(_defuzeTime);
        Destroy(gameObject);
    }

}
</code></pre>

</div>
<div class="video-container">
<iframe
            src="https://www.youtube.com/embed/cHQ2ZoPUXuk?si=tJFQyYRURdP0jMMk&amp;start=69"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
</iframe>
</div>

</div>
