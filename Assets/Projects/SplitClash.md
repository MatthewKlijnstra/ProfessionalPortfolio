---
title: SplitClash
tagline: Battle each other with attacking monsters and defending towers on a touch screen table. Based on Clash Royale.
role: Developer
timeline: 9 Weeks
platform: Touch Screen
tags:
  - Unity
  - C#
  - New Input System
  - Local Multiplayer
  - Table touch screen
heroImage: Images/Projects/SplitClash/SplitClashMain.png
gallery:
  - Images/Projects/SplitClash/SplitClashMain.png
  - Images/Projects/SplitClash/SplitClash1.png
  - Images/Projects/SplitClash/SplitClash2.png
  - Images/Projects/SplitClash/SplitClash3.png
  - Images/Projects/SplitClash/SplitClash4.png
  - Images/Projects/SplitClash/SplitClash5.png
  - Images/Projects/SplitClash/SplitClash6.png
  - Images/Projects/SplitClash/SplitClash7.png
  - Images/Projects/SplitClash/SplitClash8.png
  - Images/Projects/SplitClash/SplitClash9.png
sourceLink: https://github.com/GLU-Gaming/twinstick-2024-c-p-s.git
downloadLink: https://chiisana101.itch.io/split-clash
---

<section class="info-section">
    <h2 class="section-subtitle">About the Project</h2>
    <p>
        SplitClash is a 2D arena fighting game where players can use different characters with unique abilities to fight each other. The game is based off of the game "Clash Royale" but with a design feature of a table touch screen.
    </p>
    <p>
     --------------------------------------------------------------------------------------------------
    </p>    
    <p>
         One of my favorite projects I worked on during my second year. We had a small team, 2 developers and 2 artists. The task was to make a regular old game. No twist, no nothing. The premises of this project was to come up with and create a full game on our own, with some guidance if needen. Our team came up with the idea of a table touch screen game, where 2 players can play against each other on a table touch screen. The game is based off of the game "Clash Royale" but with a design feature of a table touch screen. The game is designed to be played on a table touch screen, but can be played on any android device with a touch screen.
    </p>
</section>

<section class="info-section">
    <h2 class="section-subtitle">My Role & Features</h2>
    <ul class="feature-list">
        <li>Tower mechanics</li>
        <li>Effects system</li>
        <li>Audio Design</li>
        <li>Balancing</li>
        <li>Shop Mechanics</li>
        <li>Trailer</li>
    </ul>
</section>

---SOURCE---

<h2 class="section-subtitle">Source Code Features</h2>

<h3>Tower mechanics</h3>
<div class="feature-segment">
    <div class="code-container">
        <pre><code class="language-csharp">

//The GridManager is responsible for creating a visual grid for placing towers.

using UnityEngine;

public class GridManager : MonoBehaviour
{
[Header("Grid Settings")]
public int width = 10;
public int height = 10;
public float cellSize = 0.2f;

    [Header("Right side")]
    public Vector3 originR = Vector3.zero;
    public Transform gridParentR;

    [Header("Left side")]
    public Vector3 originL = Vector3.zero;
    public Transform gridParentL;

    [Header("Visuals")]
    public GameObject gridTilePrefab;

    private void Start()
    {
        GenerateVisualGridR();
        GenerateVisualGridL();
        originR = gridParentR.transform.position;
        originL = gridParentL.transform.position;
    }

    public void GenerateVisualGridR()
    {
        if (!gridTilePrefab)
            return;

        for (int x = 0; x < width; x++)
        {
            for (int z = 0; z < height; z++)
            {
                originR = gridParentR.transform.position;
                Vector3 pos =
                    originR
                    + new Vector3(x * cellSize, 0, z * cellSize)
                    + new Vector3(cellSize, 0, cellSize) * 0.5f;
                Instantiate(gridTilePrefab, pos, Quaternion.identity, gridParentR);
            }
        }
    }

    public void GenerateVisualGridL()
    {
        if (!gridTilePrefab)
            return;

        for (int x = 0; x < width; x++)
        {
            for (int z = 0; z < height; z++)
            {
                originL = gridParentL.transform.position;
                Vector3 pos =
                    originL
                    + new Vector3(x * cellSize, 0, z * cellSize)
                    + new Vector3(cellSize, 0, cellSize) * 0.5f;
                Instantiate(gridTilePrefab, pos, Quaternion.identity, gridParentL);
            }
        }
    }

    public Vector3 GetWorldPositionR(int x, int z)
    {
        return originR + new Vector3(x * cellSize, 0, z * cellSize);
    }

    public Vector3 GetWorldPositionL(int x, int z)
    {
        return originL + new Vector3(x * cellSize, 0, z * cellSize);
    }

    public Vector2Int GetGridCoordinatesR(Vector3 worldPos)
    {
        Vector3 local = worldPos - originR;
        int x = Mathf.FloorToInt(local.x / cellSize);
        int z = Mathf.FloorToInt(local.z / cellSize);
        return new Vector2Int(x, z);
    }

    public Vector2Int GetGridCoordinatesL(Vector3 worldPos)
    {
        Vector3 local = worldPos - originL;
        int x = Mathf.FloorToInt(local.x / cellSize);
        int z = Mathf.FloorToInt(local.z / cellSize);
        return new Vector2Int(x, z);
    }

    public bool IsInBoundsR(int x, int z)
    {
        return x >= 0 && z >= 0 && x < width && z < height;
    }

    public bool IsInBoundsL(int x, int z)
    {
        return x >= 0 && z >= 0 && x < width && z < height;
    }

}

/// Tower Script

using System.Collections;
using UnityEngine;
using UnityEngine.UI;

public class Tower : MonoBehaviour
{
public LayerMask Mask;

    public float Damage;

    public int Level;
    public int Prize;

    [SerializeField]
    private float towerHealth;
    private float maxTowerHealth;

    [SerializeField]
    private GameObject muzzelLocation;

    [SerializeField]
    private BalistaModel ballistaModel;

    [SerializeField]
    private GameObject projectilePrefab;

    [Header("Targeting")]
    [SerializeField]
    float range;

    [SerializeField]
    float minimumRange;

    [SerializeField]
    float targetOffset;

    [Header("Shooting")]
    [SerializeField]
    float attackCooldown = 1f;

    [SerializeField]
    float cooldownT = 0f;

    [Header("audio")]
    [SerializeField]
    private AudioClip shotClip1;

    [SerializeField]
    private AudioClip shotClip2;

    [SerializeField]
    private AudioClip shotClip3;

    [SerializeField]
    private AudioClip destroyClip;

    private AudioSource audiosrc;

    [Header("Animations")]
    [SerializeField]
    private AnimationClip animClip;

    private Animation anim;

    [SerializeField]
    private Image bar;

    private Transform targetPosition;

    private void Start()
    {
        audiosrc = GetComponent<AudioSource>();
        anim = GetComponentInChildren<Animation>();
        maxTowerHealth = towerHealth;
    }

    public void TakeDamage(float _damageT)
    {
        towerHealth -= _damageT;
        if (CheckHealt())
        {
            cooldownT = 100f;

            anim.clip = animClip;
            anim.Play();

            if (gameObject.layer == LayerMask.NameToLayer("TargetsR"))
            {
                CoinManager.GainTowerPrize(Level, Prize);
                this.GetComponent<CellManager>().RemoveItemR();
            }
            else if (gameObject.layer == LayerMask.NameToLayer("TargetsL"))
            {
                CoinManager.GainMinionPrize(Level, Prize);
                this.GetComponent<CellManager>().RemoveItemL();
            }
            this.GetComponent<Collider>().enabled = false;
            this.GetComponent<AudioSource>().PlayOneShot(destroyClip);
            StartCoroutine(enumerator());
        }
    }

    void Update()
    {
        if (bar != null)
            bar.fillAmount = Mathf.Clamp(towerHealth / maxTowerHealth, 0, 1);

        cooldownT -= Time.deltaTime;

        Collider[] _enemiesInRange = Physics.OverlapSphere(transform.position, range, Mask);

        Transform _nearestEnemy = GetEnemy(_enemiesInRange);

        if (_nearestEnemy != null)
        {
            AimAt(_nearestEnemy);
            if (cooldownT <= 0f)
            {
                Attack(_nearestEnemy);
                cooldownT = attackCooldown;
            }
        }
    }

    void AimAt(Transform _target)
    {
        if (ballistaModel != null)
        {
            ballistaModel.AimAt(_target, muzzelLocation);
        }
        else if (ballistaModel == null)
        {
            Vector3 _direction = _target.position - muzzelLocation.transform.position;
            _direction.y = 0f;
            if (_direction.sqrMagnitude > 0.001f)
            {
                Quaternion _lookRotation = Quaternion.LookRotation(_direction);
                transform.rotation = Quaternion.Lerp(
                    transform.rotation,
                    _lookRotation,
                    Time.deltaTime * 5
                );
            }
        }
    }

    void Attack(Transform _target)
    {
        targetPosition = _target;
        GameObject _proj = Instantiate(
            projectilePrefab,
            muzzelLocation.transform.position,
            muzzelLocation.transform.rotation
        );
        audiosrc.PlayOneShot(ReturnShotClip());
        Projectile _projectile = _proj.GetComponent<Projectile>();
        _projectile.SetTarget(_target);
        _projectile.Damage = Damage;
    }

    Transform GetEnemy(Collider[] _enemies)
    {
        float _minDistance = Mathf.Infinity;
        Transform _nearest = null;

        foreach (var _enemy in _enemies)
        {
            float _dist = Vector3.Distance(transform.position, _enemy.transform.position);
            if (_dist < _minDistance && _dist > minimumRange)
            {
                _minDistance = _dist;
                _nearest = _enemy.transform;
            }
        }
        return _nearest;
    }

    bool CheckHealt()
    {
        if (towerHealth <= 0)
            return true;
        else
            return false;
    }

    AudioClip ReturnShotClip()
    {
        int _int = Random.Range(1, 3);
        return _int switch
        {
            1 => shotClip1,
            2 => shotClip2,
            3 => shotClip3,
            _ => shotClip1,
        };
    }

    private IEnumerator enumerator()
    {
        yield return new WaitForSeconds(5f);
        Destroy(gameObject);
    }

    //Debug
    void OnDrawGizmosSelected()
    {
        Gizmos.color = Color.red;
        Gizmos.DrawWireSphere(transform.position, range);
        Gizmos.DrawWireSphere(transform.position, minimumRange);
        //Gizmos.DrawSphere(targetPosition.position, 0.1f);
    }

}

</code></pre>

</div>
<div class="video-container">
<iframe
            src="https://www.youtube.com/embed/jAt4uD7kGnc?si=ydmEnOydhBfm7n3N"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
</iframe>
</div>
</div>

<h3>Shop System</h3>
<div class="feature-segment">
    <div class="code-container">
        <pre><code class="language-csharp">
/// Shop Manager script

using UnityEngine;

public class ShopManager : MonoBehaviour
{
[Header("Items")]
[Header("Tower")]
[SerializeField]
private GameObject gridTowerPrefab;

    [SerializeField]
    private Animation towerAnimR;

    [SerializeField]
    private Animation towerAnimL;

    [SerializeField]
    private AnimationClip towerPopUpR;

    [SerializeField]
    private AnimationClip towerPopDownR;

    [SerializeField]
    private AnimationClip towerVanishR;

    [SerializeField]
    private AnimationClip towerPopUpL;

    [SerializeField]
    private AnimationClip towerPopDownL;

    [SerializeField]
    private AnimationClip towerVanishL;
    private Tower gridTowerScript;
    private bool isHoldingTowerR = false;
    private bool isHoldingTowerL = false;
    private int gridTowerPrize;

    [Header("Wall")]
    [SerializeField]
    private GameObject gridWallPrefab;

    [SerializeField]
    private Animation wallAnimR;

    [SerializeField]
    private Animation wallAnimL;

    [SerializeField]
    private AnimationClip wallPopUpR;

    [SerializeField]
    private AnimationClip wallPopDownR;

    [SerializeField]
    private AnimationClip wallVanishR;

    [SerializeField]
    private AnimationClip wallPopUpL;

    [SerializeField]
    private AnimationClip wallPopDownL;

    [SerializeField]
    private AnimationClip wallVanishL;
    private GridWall gridWallScript;
    private bool isHoldingWallR = false;
    private bool isHoldingWallL = false;
    private int gridWallPrize;

    //more towers later

    [Header("Displays")]
    [Header("Right side")]
    [SerializeField]
    private GameObject gridTowerDisplayR;
    bool isTowerDisplayVisableR = true;

    [SerializeField]
    private GameObject gridWallDisplay;
    bool isWallDisplayVisableR = true;

    [Header("Left side")]
    [SerializeField]
    private GameObject gridTowerDisplayL;
    bool isTowerDisplayVisableL = true;

    [SerializeField]
    private GameObject gridWallDisplayL;
    bool isWallDisplayVisableL = true;

    [Header("UI")]
    [SerializeField]
    private GameObject coinCountD;

    [SerializeField]
    private GameObject coinCountA;

    private TMPro.TextMeshProUGUI coinCountDText;
    private TMPro.TextMeshProUGUI coinCountAText;

    private int attackersCoins;
    private int defendersCoins;

    void Start()
    {
        coinCountDText = coinCountD.GetComponent<TMPro.TextMeshProUGUI>();
        coinCountAText = coinCountA.GetComponent<TMPro.TextMeshProUGUI>();

        gridTowerScript = gridTowerPrefab.GetComponent<Tower>();
        gridWallScript = gridWallPrefab.GetComponent<GridWall>();

        gridTowerPrize = gridTowerScript.Prize;
        gridWallPrize = gridWallScript.Prize;
    }

    public void UpdateUI(int _defendersCoins, int _attackersCoins)
    {
        if (coinCountDText != null)
            coinCountDText.text = _defendersCoins.ToString();
        if (coinCountAText != null)
            coinCountAText.text = _attackersCoins.ToString();

        defendersCoins = _defendersCoins;
        attackersCoins = _attackersCoins;

        CheckDisplays();
    }

    private void CheckDisplays()
    {
        //Right side

        //towerR
        if (isHoldingTowerR)
        {
            if (isTowerDisplayVisableR)
            {
                towerAnimR.clip = towerVanishR;
                towerAnimR.Play();
                //gridTowerDisplay.SetActive(false);
                isTowerDisplayVisableR = false;
            }
        }
        else // while not holding item
        {
            if (defendersCoins >= gridTowerPrize)
            {
                if (!isTowerDisplayVisableR)
                {
                    towerAnimR.clip = towerPopUpR;
                    towerAnimR.Play();
                    //gridTowerDisplay.SetActive(true);
                    isTowerDisplayVisableR = true;
                }
            }
            else // not the right buget
            {
                if (isTowerDisplayVisableR)
                {
                    towerAnimR.clip = towerPopDownR;
                    towerAnimR.Play();
                    //gridTowerDisplay.SetActive(false);
                    isTowerDisplayVisableR = false;
                }
            }
        }

        //wallR
        if (isHoldingWallR)
        {
            if (isWallDisplayVisableR)
            {
                wallAnimR.clip = wallVanishR;
                wallAnimR.Play();
                //gridWallDisplay.SetActive(false);
                isWallDisplayVisableR = false;
            }
        }
        else // while not holding item
        {
            if (defendersCoins >= gridWallPrize)
            {
                if (!isWallDisplayVisableR)
                {
                    wallAnimR.clip = wallPopUpR;
                    wallAnimR.Play();
                    //gridWallDisplay.SetActive(true);
                    isWallDisplayVisableR = true;
                }
            }
            else // not the right buget
            {
                if (isWallDisplayVisableR)
                {
                    wallAnimR.clip = wallPopDownR;
                    wallAnimR.Play();
                    //gridWallDisplay.SetActive(false);
                    isWallDisplayVisableR = false;
                }
            }
        }
        // Left Side

        //towerL
        if (isHoldingTowerL)
        {
            if (isTowerDisplayVisableL)
            {
                towerAnimL.clip = towerVanishL;
                towerAnimL.Play();
                //gridTowerDisplay.SetActive(false);
                isTowerDisplayVisableL = false;
            }
        }
        else // while not holding item
        {
            if (attackersCoins >= gridTowerPrize)
            {
                if (!isTowerDisplayVisableL)
                {
                    towerAnimL.clip = towerPopUpL;
                    towerAnimL.Play();
                    //gridTowerDisplay.SetActive(true);
                    isTowerDisplayVisableL = true;
                }
            }
            else // not the right buget
            {
                if (isTowerDisplayVisableL)
                {
                    towerAnimL.clip = towerPopDownL;
                    towerAnimL.Play();
                    //gridTowerDisplay.SetActive(false);
                    isTowerDisplayVisableL = false;
                }
            }
        }

        //wallL
        if (isHoldingWallL)
        {
            if (isWallDisplayVisableL)
            {
                wallAnimL.clip = wallVanishL;
                wallAnimL.Play();
                //gridWallDisplay.SetActive(false);
                isWallDisplayVisableL = false;
            }
        }
        else // while not holding item
        {
            if (attackersCoins >= gridWallPrize)
            {
                if (!isWallDisplayVisableL)
                {
                    wallAnimL.clip = wallPopUpL;
                    wallAnimL.Play();
                    //gridWallDisplay.SetActive(true);
                    isWallDisplayVisableL = true;
                }
            }
            else // not the right buget
            {
                if (isWallDisplayVisableL)
                {
                    wallAnimL.clip = wallPopDownL;
                    wallAnimL.Play();
                    //gridWallDisplay.SetActive(false);
                    isWallDisplayVisableL = false;
                }
            }
        }
    }

    public void IsHoldingItemR(int _itemToFree, bool _value)
    {
        switch (_itemToFree)
        {
            case 1:
                isHoldingTowerR = _value;
                CheckDisplays();
                break;
            case 2:
                isHoldingWallR = _value;
                CheckDisplays();
                break;
            case 0:
                break;
        }
    }

    public void IsHoldingItemL(int _itemToFree, bool _value)
    {
        switch (_itemToFree)
        {
            case 1:
                isHoldingTowerL = _value;
                CheckDisplays();
                break;
            case 2:
                isHoldingWallL = _value;
                CheckDisplays();
                break;
            case 0:
                break;
        }
    }

}

/// Coin Manager Script for income controll

using UnityEngine;

public class CoinManager : MonoBehaviour
{
/// <summary>
/// In this script all things that involve coins are managed here
///
/// base functions are for both sides
///
/// Attackers side has passive, steal and reward gains
///
/// Defenders side gets rewarded for killing minions
///
/// </summary>
#region --- Variables ---

    //Base Vars
    public static CoinManager INSTANCE;

    public static int DefendersCoins;

    public static int AttackersCoins;

    private ShopManager shopManager;

    //Attackers side
    [Header("AttackersSide")]
    [SerializeField]
    private int passiveIncomeAmount;

    [SerializeField]
    private int passiveIncomeTime;

    [SerializeField]
    [Range(0.01f, 2)]
    private float towerPrizeMultiplier;

    [SerializeField]
    [Range(1, 50)]
    private int baseStealAmount;

    [SerializeField]
    [Range(0, 100)]
    private float baseStealTime;

    [SerializeField]
    [Range(0.01f, 3)]
    private float stealLevelMultiplier;

    [SerializeField]
    private int startersCoinsA;

    private float incomeTimer = 2;

    private int stealLevel = 1;
    private bool isSteal = false;
    private float stealTimer = 0;

    //Defenders side
    [Header("DefederSide")]
    [SerializeField]
    [Range(0.01f, 2)]
    private float minionPrizeMultiplier;

    [SerializeField]
    private int startersCoinsD;

    #endregion

    #region --- BASE FUNCTIONS ---

    private void Awake()
    {
        INSTANCE = this;
        shopManager = FindFirstObjectByType<ShopManager>();
    }

    private void Start()
    {
        DefendersCoins = startersCoinsD;
        AttackersCoins = startersCoinsA;
        UpdateUI();
    }

    private void Update()
    {
        PassiveIncome();
    }

    //basic buy functions
    public static void LoseATCoins(int _amount)
    {
        CoinManager.AttackersCoins -= _amount;
        INSTANCE.UpdateUI();
    }

    public static void AddATCoins(int _amount)
    {
        CoinManager.AttackersCoins += _amount;
        INSTANCE.UpdateUI();
    }

    public static void LoseDECoins(int _amount)
    {
        CoinManager.DefendersCoins -= _amount;
        INSTANCE.UpdateUI();
    }

    public static void AddDECoins(int _amount)
    {
        CoinManager.DefendersCoins += _amount;
        INSTANCE.UpdateUI();
    }

    void UpdateUI() => shopManager.UpdateUI(CoinManager.DefendersCoins, CoinManager.AttackersCoins);

    #endregion

    //(attacker)
    #region --- AT FUNCTIONS ---

    //function that is called once a tower is destroyed to calculate the reward
    public static void GainTowerPrize(int _towerLevel, int _towerPrize)
    {
        float _gain = 0;
        _gain = _towerPrize * _towerLevel; //multiply by level to increase reward by status
        int _amount = Mathf.RoundToInt(_gain * INSTANCE.towerPrizeMultiplier); //custum multiplier to tweak the final reward that is rounded to add to main counter

        AttackersCoins += _amount;
        INSTANCE.UpdateUI();
    }

    private void PassiveIncome()
    {
        incomeTimer -= Time.deltaTime;
        if (incomeTimer < 0) //count down until ready, pays attacker in a passive way
        {
            AttackersCoins += passiveIncomeAmount;
            DefendersCoins += passiveIncomeAmount;
            incomeTimer = passiveIncomeTime;
            UpdateUI();
        }
    }

    private void StealMoney()
    {
        if (isSteal)
        {
            stealTimer -= Time.deltaTime;
            if (stealTimer <= 0)
            {
                float _multiplier = stealLevel * stealLevelMultiplier; // tweak the multiplier level
                int _amount = Mathf.RoundToInt(baseStealAmount * _multiplier); //add the multiplier and round amount to steal
                DefendersCoins -= _amount;
                AttackersCoins += _amount;
                stealTimer = baseStealTime; //set timer back up
                UpdateUI();
            }
        }
    }

    #endregion

    //(Defender)
    #region --- DE FUNCTIONS ---

    //function that is called once a minion is killed to calculate the reward
    public static void GainMinionPrize(int _minionLevel, int _minionPrize)
    {
        float _gain = 0;
        _gain = _minionLevel * _minionPrize; //multiply by level to increase reward by status
        int _amount = Mathf.RoundToInt(_gain * INSTANCE.minionPrizeMultiplier); //custum multiplier to tweak the final reward that is rounded to add to main counter

        DefendersCoins += _amount;
        INSTANCE.UpdateUI();
    }

    #endregion

}

</code></pre>

</div>
<div class="video-container">
<iframe
            src="https://www.youtube.com/embed/jAt4uD7kGnc?si=ydmEnOydhBfm7n3N"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
</iframe>
</div>
</div>
