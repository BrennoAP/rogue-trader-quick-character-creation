

//SELECTION PAGES

let isGoingBack = false;


const rotas = {
    "home_world.html": "birthright.html",
    "birthright.html": "lure_of_the_void.html",
    "lure_of_the_void.html": "motivation.html",
    "motivation.html": "trials_and_travails.html",
    "trials_and_travails.html": "character_sheet_2.html" 
    
};



let characterData = JSON.parse(localStorage.getItem('playerData'));

// Se não existir, cria o objeto com os valores padrão e salva no localStorage
if (!characterData) {
    characterData = {
        basic: {
            "Character Name": "John Doe",
            "Career Path": "Warrior",
            "Rank": "1",
            "world":"world"
        },
        attributes: {
            "WS": 0,
            "BS": 0,
            "S": 0,
            "T": 0,
            "Ag": 0,
            "Int": 0,
            "Per": 0,
            "WP": 0,
            "Fel": 0
        },
        skills: {
        

        },
        traits: {
            "world": '',
            "birthright": '',
            "lureOfTheVoid": '',
            "trailsAndTravails": '',
            "motivation": ''
        },
        others: {
            "Corruption": 0,
            "Wounds": 0,
            "Insanity": 0,
            "Fate": 0,
            
        },
        remember:{
            "remember":"This is just the basics, don't forget to customize you character and spend the initial xp"
        }
    };

    // Salva o objeto no localStorage
    localStorage.setItem('playerData', JSON.stringify(characterData));
}




/*#################################################################################
                                    LURE OF THE VOID
###################################################################################
*/


lureOfTheVoid = {

    
    "criminal": `<br><i><b>criminal:</i></b><br>
    Effect: Choose one of the following results and apply it to your character.<br>
    •Wanted Fugitive:<br>
    You gain the Enemy (Adeptus Arbites) and Peer (Underworld) Talents.<br>
    •Hunted by a Crime Baron:<br>
    You gain +3 Perception and the Enemy (Underworld) Talent.<br>
    •Judged and Found Wanting:<br>
    You suffer -5 Fellowship.<br>
    You gain one poor-Craftsmanship bionic limb or implant<br>
    (you may spend 200 xp to upgrade it to common-<br>
    Craftsmanship or a total of 300 xp to upgrade it to good-Craftsmanship).<br>
    
    `,
    
    "tainted": `<br><i><b>tainted:</i></b><br>
    Choose one of the following results and apply it to your character.<br>
    •Mutant:<br>
    You must roll once on Table 14-3: Mutations<br>
    (see page 369). If you choose, you may spend 200 xp to<br>
    select one result from the table (must be a result of lower<br>
    than 76-00) instead of rolling randomly.<br>
    •Insane:<br>
    You suffer your choice of either -3 Fellowship<br>
    or -1 Fate point. You gain +3 Toughness, the Peer (The Insane) Talent,<br>
    and suffer 2d10 Insanity Points.<br>
    •Deviant Philosophy:<br>
    You gain +3 Willpower and the Enemy (Ecclesiarchy) Talent.
    `,
    
    
    "renegade" : `<br><i><b>renegade:</i></b><br>
    Choose one of the following results and apply it to your character.<br>
    •Recidivist:<br>
    You gain the Enemy (Adeptus Arbites) andthe Resistance (Interrogation) Talents. <br>
    You also gain Concealment as a trained Basic Skill.<br>
    •Free-thinker:<br>
    You gain your choice of +3 Intelligence or +3 Perception.<br>
    You suffer -3 Willpower and gain the Enemy (Ecclesiarchy) Talent.<br>
    •Dark Visionary:<br>
    You suffer your choice of 1d5+1 Corruption Points or 1d5+1 Insanity Points.<br>
    In return,you gain the Dark Soul Talent and Forbidden Lore (choose one) as a trained Basic Skill.<br>
    `,
    
    "duty-bound" : `<br><i><b>duty bound:</b></i><br>
     Choose one of the following results and apply it to your character.<br>
    •Duty to the Throne:<br>
    You gain +3 Willpower and (if you meet the WP 40 prerequisite)<br>
    the Armour of Contempt Talent. You suffer a -10 penalty to Interaction Skill Tests<br>
    when dealing with any source outside of the Imperium (e.g., aliens and traitors).<br>
    •Duty to Humanity:<br>
    You gain your choice of +3 Perception or +3 Intelligence. <br>
    You suffer a -1 to your group's beginning Profit Factor.<br>
    •Duty to Your Dynasty:<br>
    You gain the Rival (Rogue Trader family) Talent and suffer -3 Toughness. <br>
    You gain a bonus of +1 to your group's beginning Profit Factor.<br>
    `,
    
    "zealot" : `
    <br><i><b>zealot:</b></i><br>
    Choose one of the following results and apply it to your character.<br>
    •Blessed Scars:<br>
    You gain +10 to Intimidate Tests and<br>
    -10 to Charm Tests, and one poor-Craftsmanship bionic<br>
    (you may spend 200 xp to upgrade it to common-Craftsmanship <br>
    or a total of 300 xp to upgrade it to good-Craftsmanship).<br>
    •Unnerving Clarity:<br>
    You gain +5 Willpower. You also suffer your choice of<br>
    -5 Fellowship or 1d10 Insanity Points.<br>
    •Favoured of the Faithful:<br>
    You gain +5 Fellowship and the Peer (Ecclesiarchy) Talent. You suffer -5 Toughness.<br>
    `,
    
    "chosen-by-destiny" : `
    <br><i><b>chose by destiny:</b></i><br>
    Choose one of the following results and apply it to your character.<br>
    •Seeker of Truth:<br>
    You gain the Foresight Talent and the Enemy (Academics or Ecclesiarchy) Talent.<br>
    You suffer -3 Willpower.<br>
    •Xenophile:<br>
    You gain a bonus of +10 to Fellowship Tests when dealing with alien races or cultures. <br>
    You suffer a -5 penalty to Willpower Tests involving alien artefacts and alien psychic powers.<br>
    •Fated for Greatness:<br>
    You gain +1 Fate Point, but you also suffer 1d10+1 Insanity Points.<br>
    `
    
    
    }
    
    /*#################################################################################
                                TRIALS AND TRAVAILS
    ###################################################################################
    */
    trailsAndTravails = {
    
    "the-hand-of-war" : `
    <br><b>the hand of war:</b><br>
    <b><i>The Ashes of War:</i></b> You gain one Weapon Training Talent of your choice, <br>
    or the Leap Up Talent, as well as the Hatred Talent against your foe <br>
    in the war that defined your past. <br>
    Choose from among: Orks, Eldar, mutants, Chaos worshipers, the Imperial Guard, the Imperial Navy or void pirates.<br>
    <b><i>The Face of the Enemy:</i></b> You will never willingly have dealings with your sworn enemy except under the direst<br>
    circumstances, and if you must do so, you suffer -10 to all<br>
    Fellowship Tests in those dealings. Also, if given the slightest<br>
    provocation, you will react violently towards them. (You maytake a Willpower Test to avert this,<br>
    modified by the provocation and the consequences of succumbing to your hatred.)<br>
     `
    ,
    "press-ganged" : `
    <br><b>press-ganged:</b><br>
    <b><i>Unwilling Accomplice:</i></b> Thanks to your shadowed past,<br>
    you have picked up some knowledge on the way that you<br>
    would not normally have access to. You gain a single Skill (as<br>
    long as it has no prerequisites) for your character. You may also<br>
    either select a single additional Common Lore Skill or improve<br>
    a Common Lore Skill you already have by one level.<br>
    <b><i>Jealous Freedom:</i></b> Having endured captivity once, you have<br>
    no intention of doing so again. You react violently towards the<br>
    prospect of imprisonment or loss of your freedom. You may
    take a Willpower Test to avert this, modified by the provocation
    and the consequences (set by the GM) of succumbing to your dread.
    `
    ,
    "calamity" : ` 
    <br><b>calamity:</b><br>
    <b><i>Inured to Adversity:</i></b> You gain the Light Sleeper Talent and<br>
    your choice of the Hardy Talent or Nerves of Steel Talent.<br>
    <b><i>Echo of Hard Times:</i></b> Thanks to the adversities of the past<br>
    and a sense of priority that promotes caution and the needs of<br>
    the present over acquisition and risk, you reduce your group's<br>
    starting Profit Factor by -1.<br>
    `
    ,
    "ship-lorn" : `
    <br><b>ship-lorn:</b><br>
    <b><i>Against All Odds:</i></b> You gain the Survival Skill (or increase<br>
    it by one level if you already possess it) or the Dark Soul Talent.<br>
    Additionally, whenever you spend a Fate Point to recover<br>
    Wounds (see page 233), you may re-roll the dice if you wish<br>
    but must accept the second result even if it is worse.<br>
    <b><i>Ill-starred:</i></b> Reduce your starting number of Fate Points<br>
    permanently by -1. Additionally, you suffer -5 on Fellowship<br>
    Tests when interacting with the void born, Rogue Traders,<br>
    and other voidfarers who are not personal friends, if they have<br>
    heard of your background and reputation.
    `
    ,
    "dark-voyage" : `
    <br><b>dark voyage:</b><br>
    <b><i>Things Man Was Not Meant to Know:</i></b> You may gain a<br>
    single Forbidden Lore Skill pertaining to your experiences (or<br>
    may increase a Forbidden Lore Skill you already possesses by<br>
    one level), or may gain the Resistance (Fear) Talent.<br>
    <b><i>Marked by Darkness:</i></b> Haunted by your experiences, you<br>
    gain 1d5 Insanity Points.<br>
    `
    ,
    "high-vendetta" : `
    <br><b>high vendetta:</b><br>
    <b><i>Blood Will Have Blood:</i></b> You gain your choice of the Die<br>
    Hard or Paranoia Talent, and gain the Inquiry Skill (or, if you<br>
    already possess it, increase it by one level).<br>
    <b>Brook No Insult:</b> You will allow no serious offence to<br>
    your honour and person or those under your protection to<br>
    pass unchallenged, meeting threat with threat and violence<br>
    with violence. You may take a Willpower Test to avert this if<br>
    you wish, modified by the provocation and the consequences<br>
    (set by the GM) of succumbing to your rage.<br>
    `
    
    }
    /*#################################################################################
                                MOTIVATION
    ###################################################################################
    */
    
    
    motivation = {
    "endurance" : '<br><i><b>endurance:</i></b> +1 wound',
    "fortune" : '<br><i><b>fortune:</i></b> +1 fate',
    "vengeance" : '<br><i><b>vegeance:</i></b> hatred talent',
    "renown" : `<br><i><b>renown:</i></b> Air of Authority or the Peer (choose one) talent`,
    "pride" : `<br><i><b>pride:</i></b> an Heirloom Item (pag.30) or +3 Toughness`,
    "prestige":` <br><i><b>prestige:</i></b> your choice of the Talented (choose one)
    Talent or the Peer (choose one) Talent` 
    }
    
    
    // }
    
    
       
    

/*#################################################################################
                                    BIRTHRIGHTS
###################################################################################
*/

birthright = {

    "scavenger":"tenho que fazer pq apaguei na burrice",




    "scapegrace" : `<br><i><b>scapegrace:</i></b>  
    You gain Sleight of Hand as a trained Basic
    Skill,<br>
    plus a bonus of +3 to your choice of Intelligence or
    Perception.<br>
    You suffer your choice of 1d5 Corruption Points
    or 1d5 Insanity Points.`,
    
    
    "stubjack" : `<br><i><b>stubjack:</i></b>
    You gain the Quick Draw Talent and gain
    Intimidate as a trained Basic Skill.<br>
    You gain a bonus of +5 to your choice of Weapon Skill <br>
    or Ballistic Skill,but you suffer<br>
    both -5 Fellowship and 1d5 Insanity Points.`,
    
    "child-of-the-creed" : `<br><i><b>child of the creed:</i> <br><b>
    You gain the Unshakeable Faith Talent and a bonus<br>
    of either +3 Willpower or +3 Fellowship (your choice), but<br>
    you suffer -3 Weapon Skill.`,
    
    
    "savant": `<br><i><b>savant:</i><b>
    You gain your choice of Logic (Int) as a trained<br>
    Basic skill or the Peer (Academic) Talent. You also gain your<br>
    choice of +3 Intelligence or +3 Fellowship, but you suffer<bbr>
    -3 Toughness.
    `,
    
    "vaunted" : `<br><b>vaunted:</i></b>
    You gain the Decadence Talent and a bonus of,<br>
    +3 to Agility or Fellowship (your choice). You suffer -3<br>
    Perception and 1d5 Corruption Points.`
    
    }







// window.addEventListener("popstate", () => {
//     isGoingBack = true;
// });

//  document.addEventListener("DOMContentLoaded", () => {
//      if (isGoingBack) {
//          document.documentElement.classList.add("back-navigation");
//          isGoingBack = false; // Reseta para a próxima navegação
//      } else {
//          document.documentElement.classList.remove("back-navigation");
//      }
//  });




 function setHomeWorld(world){
    switch (world) {

        case 'death-world':

        characterData.attributes.WS += 5;
        characterData.attributes.T+= 5;
        characterData.attributes.Fel -= 5;
        characterData.others.Wounds = generateWounds(2);
        let fateForThisCaseOnly = generateFate()
        characterData.others.Fate  = fateForThisCaseOnly===4?3:fateForThisCaseOnly //hate this "solution" but code is not the priority in this "project"
        characterData.traits.world = `<br>if it bleeds, I can kill itpag. 17), paranoid(pag. 17),survivor(pag.17)`
      
            break;

        case 'voidborn':

        characterData.attributes.S -= 5;
        characterData.attributes.WP += 5;
        characterData.fel -= 5;
        characterData.skills['speak language(ship dialect)']=0
        characterData.skills['speak language(ship dialect)']=(characterData.attributes.Int + 10)
        characterData.others.Wounds = generateWounds(1);

        characterData.others.Fate = generateFate();
        characterData.traits.world = `<br>charmed(pag. 19), ill-omened(pag.19), shipwise(pag.19), void accustomed(pag.19)`
        
            break;    

        case 'forge-world':

        characterData.attributes.WS -= 5;
        characterData.attributes.Int += 5;
        characterData.skills['common lore(tech)']=(characterData.attributes.Int + 10);
        characterData.skills['common lore(machine cult)']=(characterData.attributes.Int + 10);
        characterData.others.Wounds = generateWounds(1);
        characterData.others.Fate = generateFate()
        characterData.traits.world = `<br> Credo Omnissiah(pag.20), Fit For Purpose(pag.20),Stranger to the Cult(pag.20)`
                        
            break;            

        case 'hive-world':

        characterData.attributes.T -= 5;
        characterData.attributes.Fel += 5;
        characterData.skills['speak language(hive dialect)']=(characterData.attributes.Int + 10);
        characterData.others.Wounds = generateWounds(1);
        characterData.others.Fate = generateFate()
        characterData.traits.world = `<br>Accustomed to Crowds(pag.21),Caves of Steel(pag.21),Hivebound(pag.21),Wary(pag.21)`
                   
            break;            

        case 'imperial-world':

        
        characterData.attributes.WP += 3;
        characterData.skills['speak language(hive dialect)']=(characterData.attributes.Int + 10);
        characterData.others.Wounds = generateWounds() ;
        characterData.others.Fate = generateFate()
        characterData.traits.world = `<br>Blessed Ignorance(pag.22),Hagiography(pag.22),Liturgical Familiarity(pag.23)`
                    
            break;            


        case 'noble-born':

        
        characterData.attributes.WP -= 5;
        characterData.attributes.Fel += 5;
        characterData.skills['Literacy ']=(characterData.attributes.Int + 10);
        characterData.skills['Speak Language (High Gothic) ']=(characterData.attributes.Int + 10);
        characterData.others.Wounds = (Math.ceil(Math.random()*5)) ;
        characterData.others.Fate = generateFate()
        characterData.traits.world = ` Etiquette(pag.24),Legacy of Wealth(pag.24),Supremely Connected(pag.24),Vendetta(pag.24)`
                   
            break;            

        default:
            break;

    }
    localStorage.setItem('playerData', JSON.stringify(characterData))
}









 function setTraits(rotaAtual,id){
    switch (rotaAtual) {
        case "home_world.html":
          characterData.basic.world = id

          break;

        case "birthright.html":
            characterData.traits.birthright = birthright[id] 
            break;

        case "lure_of_the_void.html":
            characterData.traits.lureOfTheVoid = lureOfTheVoid[id]
            break;

        case "trials_and_travails.html":
            characterData.traits.trailsAndTravails = trailsAndTravails[id]
            break;

        case "motivation.html":
            characterData.traits.motivation = motivation[id]
            break;

        default:
            break;
    }

    localStorage.setItem("playerData", JSON.stringify(characterData))

}


function generateFate(){

let roll = Math.ceil(Math.random()*10);
fatePoints = roll>=5?3:4;
return fatePoints;
}


function generateWounds(modifier = 0) {

let woundsRoll = (Math.ceil(Math.random()*5));
totalWounds = woundsRoll + modifier;
return  totalWounds;

}



function generateStats(){

const baseValue = 25;
const stats = ['WS', 'BS', 'S', 'T', 'Ag', 'Int', 'Per', 'WP', 'Fel'];

characterData.attributes = Object.fromEntries(
    stats.map(stat => [stat, Math.ceil(Math.random()*20)+ baseValue])
)

characterData.skills = {};

}











 

// CHARACTER SHEET

document.querySelectorAll(".card").forEach(botao => 
    {botao.addEventListener("click",function(event){
        let rotaAtual = window.location.pathname.split("/").pop(); 
        let proximaRota = rotas[rotaAtual] || "home_world.html"; 
        console.log("Elemento clicado:", event.target);
        currentId = event.currentTarget.id;
        console.log(currentId)
        
        if (rotaAtual === "home_world.html") {
            generateStats()
            let world = this.id
            setHomeWorld(world);
        }
        setTraits(rotaAtual,currentId)
        window.location.href = proximaRota;
    });
    });

window.addEventListener("pageshow", (event) => {
    if (event.persisted) { 
        document.startViewTransition(() => location.reload());
    }
});   




function populateSection(sectionId, data) {

    let rota = window.location.pathname.split("/").pop()

    if (rota === "character_sheet_2.html") {
        
        const section = document.getElementById(sectionId);    
        Object.keys(data).forEach(key => {
            const div = document.createElement("div");
            div.innerHTML = `<strong>${key.toUpperCase()}:</strong> ${data[key]}`;
            section.appendChild(div);
        });
    }
}

populateSection("basic", characterData.basic);
populateSection("attributes", characterData.attributes);
populateSection("skills", characterData.skills);
populateSection("talents",characterData.traits)
populateSection("others", characterData.others);
populateSection("remember",characterData.remember)



