---
title: Dungeon Shooter 2D
tagline: The Work in progress dungeon crawler with elements and tech tree system
role: Developer, Designer & Publisher
timeline: Early Development
platform: Multi Platform
tags:
  - Unity
  - C#
  - New Input System
  - Multi Platform
heroImage: Images/Projects/DungeonShooter/DungeonShooterMain.png
gallery:
  - Images/Projects/DungeonShooter/DungeonShooterMain.png
  - Images/Projects/DungeonShooter/DungeonShooter1.png
  - Images/Projects/DungeonShooter/DungeonShooter2.png
  - Images/Projects/DungeonShooter/DungeonShooter3.png
  - Images/Projects/DungeonShooter/DungeonShooter4.png
  - Images/Projects/DungeonShooter/DungeonShooter5.png
  - Images/Projects/DungeonShooter/DungeonShooter6.png
  - Images/Projects/DungeonShooter/DungeonShooter7.png
sourceLink: https://github.com/GLU-Gaming/twinstick-2024-c-p-s.git
downloadLink: http://lzkchr.itch.io/whissis
---

<section class="info-section">
    <h2 class="section-subtitle">About the Project</h2>
    <p>
        Dungeon Shooter 2D is my first itteration of a dungeon crawler game. It started with the idea to make a realistic gun gameplay and now turend in to a big idea with elemental powers and more.
    </p>
    <p>
        --------------------------------------------------------------------------------------------------
    </p>
    <p>
        The game is currently in early development, and I'm still working on getting the base game written down. But I already have some cool idea's for the future.
        For example, the TechTree mechanic. You'll gather points by playing games. With these points you can upgrade your weapons and unlock new features. These points are seperate for each weapon. This gives you a reason to play with every weapon and not just stick to one.
    </p>
    <p>
    --------------------------------------------------------------------------------------------------
    </p>
    <p>
        The insipration for the TechTree realy derives from the game World of Tanks. Together with this inspiration and the idea to make a classic dungeon crawler, I came up with the idea for Dungeon Shooter 2D.
    </p>
</section>

<section class="info-section">
    <h2 class="section-subtitle">My Role & Features "So far"</h2>
    <ul class="feature-list">
        <li>The Maker of the game</li>
        <li>Elemental Powers</li>
        <li>TechTree System</li>
        <li>Weapon System</li>
        <li>Modular grid system for map making</li>
    </ul>
</section>

---SOURCE---

<h2 class="section-subtitle">Source Code Features</h2>

<h3>Weapon System</h3>
<div class="feature-segment">
    <div class="code-container">
        <pre><code class="language-csharp">
///WeaponBase class as base for all weapons.

using System.Collections;
using UnityEngine;
using UnityEngine.InputSystem;

public abstract class GunBase : MonoBehaviour
{
protected string name;
protected int elementN;
protected int ammo;
protected int currentAmmo;
protected int lvl;
protected int maxLevel = 20;
protected float damage;
protected float walkSpeed;
protected float reloadSpeed;
protected bool isReloading;
protected BulletSpawner bulletSpawner;
protected SoundController soundController;

    protected abstract void Shoot(InputAction.CallbackContext context);

    protected abstract IEnumerator Reload();

    protected abstract bool CheckAmmo();

    protected abstract void LoadElement();

}

///Colt revolver as demonstration.

using System.Collections;
using UnityEngine;
using UnityEngine.InputSystem;

public class ColtRevolver : GunBase
{
[SerializeField]
private GameObject[] elements;

    private Controlls playerActions;

    private string element;

    private void Awake()
    {
        playerActions = new Controlls();
        this.name = "Colt Revolver";
        this.elementN = 0;
        this.ammo = 6;
        this.lvl = 1;
        this.damage = 4.5f;
        this.walkSpeed = 6;
        this.reloadSpeed = 5.5f;
        this.isReloading = false;
        LoadElement();
        this.bulletSpawner = FindAnyObjectByType<BulletSpawner>();
        this.soundController = this.GetComponent<SoundController>();
    }

    private void OnEnable()
    {
        playerActions.Combat.Enable();
        playerActions.Combat.FireSemi.performed += Shoot;
        playerActions.Combat.Reload.performed += ReloadCall;
        StartCoroutine(bulletSpawner.CallData(damage, lvl, element));
    }

    private void OnDisable()
    {
        playerActions.Combat.Disable();
        playerActions.Combat.Reload.performed -= ReloadCall;
        playerActions.Combat.FireSemi.performed -= Shoot;
    }

    protected override void LoadElement()
    {
        switch (this.elementN)
        {
            case 0: //physical element
                elements[0].SetActive(true);
                element = "physical";
                break;
            case 1: //ice element
                elements[1].SetActive(true);
                element = "ice";
                break;
            case 2: //fire element
                elements[2].SetActive(true);
                element = "fire";
                break;
            case 3: //electricity element
                elements[3].SetActive(true);
                element = "electricity";
                break;
            case 4: //poisen element
                elements[4].SetActive(true);
                element = "poisen";
                break;
            case 5: //godpower element
                elements[5].SetActive(true);
                element = "god";
                break;
            case 6: //blackhole element
                elements[6].SetActive(true);
                element = "blackhole";
                break;
        }
    }

    protected override void Shoot(InputAction.CallbackContext context)
    {
        if (CheckAmmo() && this.isReloading == false)
        {
            bulletSpawner.Shoot(name);
            this.currentAmmo--;
            if (soundController != null)
                soundController.ShotSound();
        }
        else
        {
            if (soundController != null)
                soundController.EmptyShotSound();
        }
    }

    private void ReloadCall(InputAction.CallbackContext context)
    {
        if (!this.isReloading)
        {
            StartCoroutine(Reload());
            StartCoroutine(soundController.ReloadSound(reloadSpeed));
        }
    }

    protected override IEnumerator Reload()
    {
        this.isReloading = true;
        yield return new WaitForSeconds(reloadSpeed);
        this.currentAmmo = ammo;
        this.isReloading = false;
        Debug.Log("Reloaded");
    }

    protected override bool CheckAmmo()
    {
        if (this.currentAmmo > 0)
            return true;
        else
            return false;
    }

}

</code></pre>

</div>
<div class="video-container">
<iframe
            src="https://www.youtube.com/embed/LFabuGHZwuw?si=0rbUmHC33FrLUXBI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
</iframe> 
</div>

</div>

<h3>TechTree System</h3>
<div class="feature-segment">
    <div class="code-container">
        <pre><code class="language-csharp">
///TT_Manager class to manage the tech tree.

using System.Collections;
using UnityEngine;
using UnityEngine.InputSystem;

namespace TechTree
{
public class TT_Manager : MonoBehaviour
{
public GameObject SelectedNode;

        [Header("Visuals"), Space(10)]
        [SerializeField]
        private Color LockedColor;

        [SerializeField]
        private Color PossibleColor;

        [SerializeField]
        private Color ResearchedColor;

        [Header("Select Visual"), Space(5)]
        [SerializeField]
        private Color LSelectColor;

        [SerializeField]
        private Color PSelectColor;

        [SerializeField]
        private Color RSelectColor;

        private Controlls playerActions;
        private InputAction UIClick;

        TT_NodeVisualizer[] nodeVisualizers;

        private void Awake()
        {
            playerActions = new Controlls();
        }

        private void OnEnable()
        {
            playerActions.Misc.UIClick.performed += ReadMouse;
            playerActions.Misc.Enable();
        }

        private void OnDisable()
        {
            playerActions.Misc.Disable();
        }

        private void Start()
        {
            StartCoroutine(StartSequence());
        }

        private IEnumerator StartSequence()
        {
            nodeVisualizers = FindObjectsByType<TT_NodeVisualizer>(
                FindObjectsInactive.Include,
                FindObjectsSortMode.None
            );
            yield return new WaitForEndOfFrame();
            foreach (TT_NodeVisualizer _node in nodeVisualizers)
            {
                _node.LockedColor = LockedColor;
                _node.PossibleColor = PossibleColor;
                _node.ResearchedColor = ResearchedColor;

                _node.LSelectColor = LSelectColor;
                _node.PSelectColor = PSelectColor;
                _node.RSelectColor = RSelectColor;

                _node.UpdateVisual();
            }
        }

        public void SelectNode(GameObject _newSelectedNode)
        {
            if (SelectedNode != null)
                SelectedNode.GetComponent<TT_NodeVisualizer>().Deselect();

            _newSelectedNode.GetComponent<TT_NodeVisualizer>().Select();
            SelectedNode = _newSelectedNode;
        }

        public void ResearchNewNode(GameObject _selectedNode)
        {
            float _exp = _selectedNode.GetComponent<TT_Node>().Exp;
            float _cost = _selectedNode.GetComponent<TT_Node>().Cost;
            if (_exp >= _cost) { }
        }

        void ReadMouse(InputAction.CallbackContext context)
        {
            RaycastHit _hit;
            Ray _ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            if (Physics.Raycast(_ray, out _hit))
            {
                print("Hit: " + _hit.transform.name);
                if (_hit.transform.CompareTag("TT_Node"))
                {
                    print(_ray);
                    if (Input.GetMouseButtonDown(0))
                    {
                        print("Click");
                        SelectNode(_hit.transform.gameObject);
                    }
                }
            }
        }
    }

}

///TT_Node class to represent a node in the tech tree.

using System.Collections.Generic;
using UnityEngine;

namespace TechTree
{
public class TT_Node : MonoBehaviour
{
public ScriptableObject Weapon;

        public List<GameObject> nextNodes = new List<GameObject>();
        public GameObject previousNode;

        public int Cost;

        public bool isResearched = false;
        public bool isPossible = false;

        public float Exp;

        [SerializeField]
        private string nodeName;

        [SerializeField]
        private string description;

        private TT_NodeVisualizer visualizer;

        void Start()
        {
            visualizer = GetComponent<TT_NodeVisualizer>();

            if (previousNode.GetComponent<TT_Node>().isResearched)
                isPossible = true;
        }

        public void ResearchThisNode()
        {
            isResearched = true;

            visualizer.UpdateVisual();

            UpdateNextNodes();
        }

        public void LoadData(bool _isResearched, bool _isPossible, float _exp)
        {
            isResearched = _isResearched;
            isPossible = _isPossible;
            Exp = _exp;
        }

        private void UpdateNextNodes()
        {
            foreach (GameObject _nextNode in nextNodes)
            {
                //TODO: add bool switch to check if node is possible or not, and update visual accordingly
                _nextNode.GetComponent<TT_NodeVisualizer>().UpdateVisual();
            }
        }
    }

}

///TT_NodeVisualizer class to visualize the state of the node in the tech tree.

using UnityEngine;

namespace TechTree
{
public class TT_NodeVisualizer : MonoBehaviour
{
[Header("Visuals"), Space(10)]
public Color LockedColor;
public Color PossibleColor;
public Color ResearchedColor;

        [Header("Select Visual"), Space(5)]
        public Color LSelectColor;
        public Color PSelectColor;
        public Color RSelectColor;

        [SerializeField, Space(10)]
        private GameObject selectVisual;

        private SpriteRenderer spriteRendererNode;
        private SpriteRenderer spriteRendererSelecter;

        void Start()
        {
            spriteRendererNode = GetComponent<SpriteRenderer>();
            spriteRendererSelecter = selectVisual.GetComponent<SpriteRenderer>();
            UpdateVisual();
        }

        public void UpdateVisual()
        {
            //Change visual based on node state
            switch (CheckState())
            {
                case 0:
                    //Change visual to locked
                    spriteRendererNode.color = LockedColor;
                    spriteRendererSelecter.color = LSelectColor;
                    break;
                case 1:
                    //Change visual to possible
                    spriteRendererNode.color = PossibleColor;
                    spriteRendererSelecter.color = PSelectColor;
                    break;
                case 2:
                    //Change visual to unlocked
                    spriteRendererNode.color = ResearchedColor;
                    spriteRendererSelecter.color = RSelectColor;
                    break;
                default:
                    break;
            }
        }

        public void Select()
        {
            //Increase visual
            selectVisual.SetActive(true);
        }

        public void Deselect()
        {
            //Lower visual
            selectVisual.SetActive(false);
        }

        private int CheckState()
        {
            TT_Node _node = GetComponent<TT_Node>();
            if (_node.isResearched)
                return 2;
            else if (_node.isPossible)
                return 1;
            else
                return 0;
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
