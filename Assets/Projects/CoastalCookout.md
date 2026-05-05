---
title: Coastal Cookout
tagline: Start your cooking job on the pirate ship, recreation of "Over cooked"
role: Lead Developer
timeline: 9 Weeks
platform: PC VR / Meta Quest 3
tags:
  - Unity
  - C#
  - VR
  - XR Interaction Toolkit
heroImage: Images/Projects/CoastalCookout/CoastalCookoutMain.png
gallery:
  - Images/Projects/CoastalCookout/CoastalCookoutMain.png
  - Images/Projects/CoastalCookout/CoastalCookout1.png
  - Images/Projects/CoastalCookout/CoastalCookout2.png
  - Images/Projects/CoastalCookout/CoastalCookout3.png
sourceLink: https://github.com/BattlefieldGuy/Pirate-Burgers
downloadLink: https://gijsc.itch.io/coastal-cookout
---

<section class="info-section">
    <h2 class="section-subtitle">About the Project</h2>
    <p>
        Coastal Cookout is a single player version of the popular game "Cookout". The theming is set in a coastal environment with a focus on seafood. It features Pirate's and other sea creatures for customers and a variety of seafood to cook.
    </p>
    <p>
    --------------------------------------------------------------------------------------------------
    </p>
    <p>
        In this 9 week project, we where tasked to design, create and publish a game. We received a theme from school and had to come up with a game idea that fit the theme. Our group came up with the idea for Coastal Cookout, a single player version of the popular game "Cookout". With that a few of my classmates and I had the idea to make it a VR game. This then became the base for our game, we wanted to challenge ourselves with this project and create something we hadn't done before.
    </p>
    <p>
    --------------------------------------------------------------------------------------------------
    </p>
    <p>
        As a Lead developer my tasks varied from making mechanics to helping out other teammembers with their tasks. But I was also sub Scrum master of our group, I was responsible for the daily's and other scrum events in case our Scrum master couldn't make it.
    </p>
</section>

<section class="info-section">
    <h2 class="section-subtitle">My Role & Features</h2>
    <ul class="feature-list">
        <li>Lead Developer</li>
        <li>Sub Scrum Master</li>
        <li>Random Receipt Generator</li>
        <li>Station Logic</li>
    </ul>
</section>

---SOURCE---

<h2 class="section-subtitle">Source Code Features</h2>

<h3>Receipt System</h3>
<div class="feature-segment">
    <div class="code-container">
        <pre><code class="language-csharp">
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BonnetjesManager : MonoBehaviour
{
/// <summary>
/// This scrip is responsible for managing the receipts and other this related to receipts.
///
/// It houses a list of possible items that can be ordered, each with main and secondary ingredients.
/// every item is represented by the Item class, which contains the item's name and its ingredients.
///
/// Once an item is created, it is sent to the ReceiptList script to be displayed as a receipt.
/// </summary>

    [System.Serializable]// ingredients list
    public class Item// Item structure
    {
        public string name;
        // Main ingredients are the core ingredients that cannot be removed, secondary's are optional
        public List<string> MainIngredients;
        public List<string> SecondaryIngredients;
        // List of machines required to make this item, Possible: Grill, Fryer, Stove, Oven,
        public List<string> RequiredMachines;
    }


    // Items
    public List<Item> ItemList;


    //refs
    private ReceiptList receiptList;


    #region -- RECEIPT VARIABLES --
    // Receipt Variables are used to adjust receipt generation during playtime
    [Header("Receipt Variables")]
    [Space(5), Tooltip("Set Starter receipt interval"), SerializeField]
    private float receiptInterval = 5f;

    [Space(5), Range(0f, 20f), SerializeField]
    private float intervalOffsetRange = 5f;

    private int amountOfItemsMade = 0;

    #endregion

    void Start()
    {
        receiptList = FindFirstObjectByType<ReceiptList>();
        StartCoroutine(Interval());//temp
    }


    /// <summary>
    /// This method creates a new item with random ingredients.
    /// using the reference list with possible items at the moment.
    /// The item is then added to the receipt list if it exists.
    /// </summary>
    public void MakeItem()
    {
        Item item_ = ItemList[Random.Range(0, ItemList.Count)];

        if (receiptList != null)
            receiptList.AddOrder(item_);

        amountOfItemsMade++;
    }

    #region - ENUMARATORS -

    /// <summary>
    /// Enumerator responsible for generating items at regular intervals.
    /// </summary>
    private IEnumerator Interval()
    {
        yield return new WaitForSeconds(receiptInterval);
        MakeItem();
        StartCoroutine(Interval());
    }

    #endregion

}
</code></pre>

</div>
<div class="video-container">
<iframe src="https://www.youtube.com/embed/zJQHt1eaK1A?si=LYr_6f0CKYvp5DZL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
<iframe src="https://www.youtube.com/embed/zJQHt1eaK1A?si=LYr_6f0CKYvp5DZL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

</div>
