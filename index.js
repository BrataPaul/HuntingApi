const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const animale = [
    {
        id: 1,
        nume: "Mistreț",
        denumireStiintifica: "Sus scrofa",
        detali: "Mistrețul (denumire științifică Sus scrofa) este un mamifer sălbatic omnivor, în general nocturn. Aria sa de răspândire cuprinde întreaga Europă, nordul Africii inclusiv Munții Atlas, mare parte din Asia, întinzându-se la sud până în Indonezia (harta alăturată este imprecisă, incluzând ca arie de răspândire și zonele ocupate de specii înrudite, cum ar fi pecariul). În România populează pădurile, începând cu Delta și Lunca Dunării, până în desișurile Carpaților. Este colorat negru - cafeniu. Scoate sunete foarte asemănătoare celor ale porcilor domestici. Colindă în turmă pădurile și culturile agricole de la marginea acestora. Produce stricăciuni în special în lanurile de porumb și cartofi. Scroafa fată 4-6 purcei, pe care hrănește cu lapte. Este vânat pentru trofeu și pentru carne. Poate ataca omul, de aceea întâlnirea cu aceste animale trebuie evitată. Dentiția este adaptată modului de hrănire și e formată din incisivi, canini și măsele. Trunchiul său este puternic, îndesat, turtit lateral, mai rotunjit la umeri și mai lat la șale. Râtul lung se termină cu un disc mobil, susținut de un os cu care poate săpa și pământul tare.",
        sezonVanatoare: "15 septembrie - 15 februarie",
        permisaVanatoare: true,
        specii: ["Mistreț comun", "Mistreț carpatin"],
        subSpecii: ["Sus scrofa scrofa", "Sus scrofa attila"],
        munitieRecomandata: ["308 Win", "30-06 Springfield", "7x64"],
        comportament: "Nocturn, omnivor, teritorial, devine agresiv când este rănit sau surprins.",
        zoneVanatoare: ["Carpați", "Pădurile din sudul și estul României", "Lunci și terenuri agricole cu acces la păduri"],
        imagine: "https://i.postimg.cc/wTvDkSDB/Mistret.jpg",
        dimensiuni: {
          greutate: "100-200 kg (mascul adult)",
          lungime: "120-180 cm",
          inaltime: "60-110 cm la greabăn"
        },
        statusProtectie: "Specie vânabilă",
        pericol: "Mediu",
        exemplareProtejate: false
      },
      
      {
        id: 2,
        nume: "Căprior",
        denumireStiintifica: "Capreolus capreolus",
        detali: "Căprioara (Capreolus capreolus) este o specie de mamifere rumegătoare ce aparține familiei Cervidae. Masculul speciei este uneori denumit căprior. Specia este răspândită în Europa, din Marea Mediterană până în Scandinavia, din Scoția până în Caucaz și spre est, în Asia, până în nordul Iranului și Irakului.În limba română cuvântul căprioară provinde din latinescul capriola.",
        sezonVanatoare: "1 mai - 15 octombrie (mascul), 1 septembrie - 15 februarie (femelă și viței)",
        permisaVanatoare: true,
        specii: ["Căprior european"],
        subSpecii: ["Capreolus capreolus capreolus"],
        munitieRecomandata: ["243 Win", "6.5x55", "7x57R"],
        comportament: "Solitar sau în grupuri mici, activ la răsărit și apus, foarte vigilent, își marchează teritoriul.",
        zoneVanatoare: ["Toată România - margini de păduri, fânețe, terenuri agricole"],
        imagine: "https://i.postimg.cc/QVGsHL3q/Caprior.jpg",
        dimensiuni: {
          greutate: "20-30 kg",
          lungime: "100-135 cm",
          inaltime: "65-75 cm"
        },
        statusProtectie: "Specie vânabilă",
        pericol: "Scăzut",
        exemplareProtejate: false
      },

      {
        id: 3,
        nume: "Cerb carpatin",
        denumireStiintifica: "Cervus elaphus",
        detali: "Cevidele (Cervidae, din latinescul cervus „cerb”, înrudit cu grecescul κεραός / keraos, „cu coarne”) sunt o familie de mamifere rumegătoare ungulate. Familia este împărțită în subfamiliile Cervinae (care include, printre altele, cerbul comun, cerbul lopătar, wapiti și muntiacul) și Capreolinae (care include, printre altele, renul (caribu), cerbul cu coadă albă, căprioara și elanul). Masculii de cerb de aproape toate speciile (cu excepția cerbului de apă), precum și femelele de ren, cresc și își pierd coarne noi în fiecare an. Aceste coarne sunt prelungiri osoase ale craniului și sunt adesea folosite pentru lupta dintre masculi.Cerbii apar în artă începând cu picturile rupestre din paleolitic și au jucat un rol în mitologie, religie și literatură de-a lungul istoriei, precum și în heraldică, cum ar fi cerbul comun care apare pe stema insulei Åland. Importanța lor economică include utilizarea cărnii ca vânat, a coarnelor ca mânere pentru cuțite și a pieilor. Vânătoarea de cerbi a fost o activitate populară încă din Evul Mediu și rămâne o resursă pentru multe familii și astăzi.",
        sezonVanatoare: "1 septembrie - 15 decembrie (mascul), 1 septembrie - 15 februarie (femelă și viței)",
        permisaVanatoare: true,
        specii: ["Cerb comun", "Cerb lopătar (mai rar în România)"],
        subSpecii: ["Cervus elaphus elaphus"],
        munitieRecomandata: ["30-06 Springfield", "7x64", "8x57"],
        comportament: "Caută zone liniștite, activ la răsărit și apus, foarte vigilent.",
        zoneVanatoare: ["Carpați", "Subcarpați", "Zone împădurite și montane"],
        imagine: "https://i.postimg.cc/jjmRGnF9/Cerb.jpg",
        dimensiuni: {
          greutate: "150-300 kg",
          lungime: "160-250 cm",
          inaltime: "100-150 cm la greabăn"
        },
        statusProtectie: "Specie vânabilă",
        pericol: "Scăzut",
        exemplareProtejate: false
      },

      {
        id: 4,
        nume: "Fazan",
        denumireStiintifica: "Phasianus colchicus",
        detali: "Masculul are o coadă lungă bifurcată, iar penajul sau bogat si auriu cu pene pestrițe alb cu negru, sau galben cu cenușiu. Capul este albăstrui cu reflexe verzui. Femela are penajul de culori mai spălăcite de nuanțe galben cu cenușiu. În prezent se cunosc ca. 30 de rase, toate fiind păsări active ziua, trăind pe câmpuri cu terenuri cultivate, unde consumă de obicei o hrană de natură vegetală, iar noaptea se retrag în pădure dormind în arbori. Este o pasăre poligamă (un cocoș având 5 -6 găini), sedentară, care nu migrează iarna ci numai în căutare de hrană. Femela depune în cuib 8 - 15 ouă verzui sau brune pe care le clocește din aprilie până în iunie timp de 24 de zile pe un sol cu ierburi. Pentru a menține constant efectivul de păsări există în prezent crescătorii de fazani, puii eclozând în incubatoare.",
        sezonVanatoare: "1 octombrie - 28 februarie",
        permisaVanatoare: true,
        specii: ["Fazan comun"],
        subSpecii: ["Phasianus colchicus colchicus"],
        munitieRecomandata: ["Cartușe cu alice: nr. 4-6"],
        comportament: "Se ascunde în vegetație, zboară brusc, activ dimineața și seara.",
        zoneVanatoare: ["Lunci, zone agricole, margini de păduri și stufărișuri"],
        imagine: "https://i.postimg.cc/mrvGdfcW/Fazan.jpg",
        dimensiuni: {
          greutate: "1-1.5 kg",
          lungime: "60-90 cm",
          inaltime: "25-35 cm"
        },
        statusProtectie: "Specie vânabilă",
        pericol: "Minim",
        exemplareProtejate: false
      },

      {
        id: 5,
        nume: "Vulpe",
        denumireStiintifica: "Vulpes vulpes",
        detali:"Vulpea este mai mică decât câinele obișnuit și evident mai mică decât lupul. Are între 7 și 10 kg, rar mai mult. Corpul are sub 1 m lungime, iar coada stufoasă circa 30-40 cm.Corpul vulpii nu este mare, fiind destul de asemănător cu al câinelui, dar iese în evidență datorită cozii lungi și stufoase, care are vârful alb. Blana este roșcată. Vulpea mănâncă cele mai mici mamifere: șoareci de câmp, popândăi, castori, lemingi, veverițe, iepuri etc. Detectează prada chiar și fără să o vadă (după miros sau după sunet), dar nu aleargă după ea, ci sare asupra sa, cu labele din față, precum pisicile. Majoritatea vulpilor ucid deseori mai mult decât pot mânca la o singură masă și îngroapă ce le prisosește, urmând a reveni altă dată la locul cu “provizii”.Puii se nasc în vizuini subterane, o singură dată pe an, din martie până în mai. De obicei, vin pe lume câte cinci frați, dar au fost studiate și cazuri extreme: un singur pui sau 12 - la o singură naștere! Puii de vulpe sunt orbi la naștere, ochii lor deschizându-se abia după a doua săptămână de viață. Părinții sunt foarte grijulii cu micuții: mama este mereu în preajma puilor pentru a îi apăra, iar tatăl pleacă la vânătoare pentru a asigura hrana întregii familii. Este vorba despre maturi, căci în prima lună puii se hrănesc doar cu laptele supt de la mama lor. Începând cu a doua lună, puii de vulpe sunt luați la vânătoare de către adulți, pentru a începe primele încercări pe cont propriu.Considerate în trecut “devoratoare de găini”, vulpile au fost vânate cu cruzime ani la rând. Un alt motiv pentru care oamenii nu le-au privit cu simpatie pe vulpi este faptul că acestea răspândesc - mai ales în mediul rural - câteva boli foarte grave, printre care și turbarea. Pot fi afectate în special mamiferele cu care vulpile intră în contact direct, dar boala poate fi transmisă și omului fie direct prin mușcătură, fie prin intermediul păsărilor din ogradă.",
        sezonVanatoare: "Tot anul (specie dăunătoare)",
        permisaVanatoare: true,
        specii: ["Vulpe roșcată"],
        subSpecii: ["Vulpes vulpes crucigera (subspecie europeană)"],
        munitieRecomandata: ["223 Remington", "22-250", "Cartușe cu alice nr. 1-2 (la vânătoare cu armă lisă)"],
        comportament: "Nocturnă, vicleană, solitară, oportunistă.",
        zoneVanatoare: ["Păduri, lunci, câmpuri, apropierea localităților"],
        imagine: "https://i.postimg.cc/FzZ5sYTh/Vulpe.jpg",
        dimensiuni: {
          greutate: "5-10 kg",
          lungime: "90-110 cm",
          inaltime: "35-45 cm"
        },
        statusProtectie: "Specie vânabilă",
        pericol: "Scăzut",
        exemplareProtejate: false
      },
      
      {
        id: 6,
        nume: "Șacal auriu",
        denumireStiintifica: "Canis aureus",
        detali: "Șacalul auriu (Canis aureus) este un mamifer carnivor sălbatic, din familia canidelor, asemănător cu vulpea și lupul, de culoare galben-aurie, spre roșcat, cu coada scurtă, ciuntită la vârf, urechi relativ mari, ascuțite, îndreptate în sus și bot ascuțit. Lungimea corpului este de 0,70-1,05 m, iar greutatea poate atinge 15 kg. Trăiește în nordul Africii, sudul Asiei și în sudul Europei, inclusiv în România (subspecia Canis aureus moreoticus în sudul Olteniei, Munteniei și Dobrogei). Este un animal gregar, trăind în haite, fiind activ noaptea. În timpul împerecherii sau al căutării congenerilor din haită, scoate un urlet pătrunzător, caracteristic. Se încrucișează cu câinele și se poate îmblânzi relativ ușor. Se hrănește cu animale mici (păsări, șoareci sau alte rozătoare) și hoituri, consumă și multe vegetale. Bârlogul șacalului este ascuns în locuri singuratice, văgăuni cu mărăcinișuri, scobituri de pământ. Se împerechează în februarie-martie. După o gestație de 9 săptămâni, femela fată 4-8 pui, rareori mai mulți, care sunt lipsiți de vedere două săptămâni. Puii sunt alăptați 3 luni. Are o blană excelentă folosită în confecționarea articolelor de îmbrăcăminte.",
        sezonVanatoare: "Tot anul (specie invazivă/dăunătoare)",
        permisaVanatoare: true,
        specii: ["Șacal european"],
        subSpecii: ["Canis aureus moreoticus"],
        munitieRecomandata: ["223 Remington", "243 Win", "Cartușe cu alice mari la distanță mică"],
        comportament: "Activ noaptea, se deplasează în perechi sau grupuri mici, vânător eficient.",
        zoneVanatoare: ["Dobrogea, sudul și estul României, zone de câmpie și delta"],
        imagine: "https://i.postimg.cc/mkrVChbL/Sacal.jpg",
        dimensiuni: {
          greutate: "8-15 kg",
          lungime: "90-120 cm",
          inaltime: "45-55 cm"
        },
        statusProtectie: "Specie vânabilă",
        pericol: "Mediu",
        exemplareProtejate: false
      },

      {
        id: 7,
        nume: "Iepure de câmp",
        denumireStiintifica: "Lepus europaeus",
        detali: "Iepurele de câmp (Lepus europaeus), numit și iepure comun, iepure european de câmp sau iepure de câmp european, este un mamifer din familia leporidelor. Această specie populează landșafturile deschise și semideschise din zona temperată a Europei și a unor părți ale Asiei. Numărul iepurilor de câmp este în scădere din cauza intensivizării agriculturii. Iepurele de câmp nu este înrudit cu iepurele de casă (Oryctolagus cuniculus domesticus) și nu dă hibrizi la încrucișare cu acesta. Uniunea Internațională pentru Conservarea Naturii a clasificat această specie ca fiind neamenințată cu dispariția.",
        sezonVanatoare: "1 noiembrie - 31 ianuarie",
        permisaVanatoare: true,
        specii: ["Iepure brun european"],
        subSpecii: ["Lepus europaeus europaeus"],
        munitieRecomandata: ["Cartușe cu alice nr. 3-5"],
        comportament: "Activ la amurg și noaptea, solitar, sprinten, se bazează pe camuflaj.",
        zoneVanatoare: ["Terenuri agricole, lunci, câmpii cu vegetație joasă"],
        imagine: "https://i.postimg.cc/sgPSfsrw/Iepure.jpg",
        dimensiuni: {
          greutate: "3-6 kg",
          lungime: "50-70 cm",
          înaltime: "25-30 cm"
        },
        statusProtectie: "Specie vânabilă",
        pericol: "Minim",
        exemplareProtejate: false
      },

      {
        id: 8,
        nume: "Lup",
        denumireStiintifica: "Canis lupus",
        detali: "Lupul, a cărui denumire științifică este Canis lupus, (Linne, 1821), este inclus din punct de vedere sistematic în familia Canidae, alături de câine, vulpe, șacal și enot. Pe vremuri, lupul era prezent în întreaga emisferă nordică, adaptându-se cu succes la cele mai diferite condiții de trai. Pentru a se descurca în aceste condiții diverse, lupul a fost nevoit să învețe să vâneze cele mai diferite varietăți, fie insecte, rozătoare, sau animale mai mari, cum este elanul, bizonul sau boul moscat. Este un vânător foarte talentat, însă modul lui de trai are un impediment major: este concurentul direct al omului, și pe majoritatea zonei lui de răspândire a pierdut în această luptă inegală. Lupul este cea mai mare specie din familia câinilor (Canidae). Cele două specii de lupi sunt lupul (Canis lupus) și lupul roșu (Canis rufus). Subspeciile lupului sunt lupul arctic (C. l. arctos), lupul nord-american (C. l. lycaon), lupul de șes (C. l. campestris) și lupul obișnuit (C. l. lupus).",
        sezonVanatoare: "15 septembrie - 31 martie (cu derogare)",
        permisaVanatoare: true,
        specii: ["Lup carpatin"],
        subSpecii: ["Canis lupus lupus"],
        munitieRecomandata: ["308 Win", "30-06 Springfield", "7x64"],
        comportament: "Trăiește în haite, vânător organizat, activ noaptea, foarte inteligent.",
        zoneVanatoare: ["Carpați, zone montane și colinare împădurite"],
        imagine: "https://i.postimg.cc/76JSk7YT/Lup.jpg",
        dimensiuni: {
          greutate: "30-50 kg",
          lungime: "100-140 cm",
          inaltime: "60-85 cm"
        },
        statusProtectie: "Specie vânabilă cu cotă",
        pericol: "Ridicat",
        exemplareProtejate: true
      },

      {
        id: 9,
        nume: "Gâscă sălbatică",
        denumireStiintifica: "Anser anser",
        detali: "Anser este un gen de păsări acvatice care include gâștele gri și gâștele albe. Face parte din subfamilia Anserinae a gâștelor și a lebedelor din familia Anatidae. Genul are o distribuție holarctică, cel puțin o specie reproducându-se vara în orice habitat deschis și umed din regiunile subarctice și temperate reci ale emisferei nordice. Unele specii se reproduc și mai la sud, ajungând în regiunile temperate calde. Iarna migrează mai ales spre sud, de obicei către regiuni din zona temperată situate între izotermele de 0 °C și 5 °C în ianuarie.",
        sezonVanatoare: "1 septembrie - 28 februarie",
        permisaVanatoare: true,
        specii: ["Gâscă cenușie", "Gâscă cu gât roșu (protejată)"],
        subSpecii: ["Anser anser anser"],
        munitieRecomandata: ["Cartușe cu alice nr. 1-3, 12 Gauge (non-toxice în zone umede)"],
        comportament: "Migratoare, vigilentă, zboară în stoluri mari, activă ziua.",
        zoneVanatoare: ["Delta Dunării, lunci, zone mlăștinoase și lacuri"],
        imagine: "https://i.postimg.cc/mDSBhpDx/Gasca.jpg",
        dimensiuni: {
          greutate: "2.5-4 kg",
          lungime: "75-90 cm",
          inaltime: "30-40 cm"
        },
        statusProtectie: "Specie vânabilă (cu excepții)",
        pericol: "Scăzut",
        exemplareProtejate: true
      },
      
      {
        id: 10,
        nume: "Urs brun",
        denumireStiintifica: "Ursus arctos",
        detali: "Ursul brun (Ursus arctos) este o specie de urs mare găsită de-a lungul Eurasiei și Americii de Nord. Este unul dintre cei mai mari membri tereștri în viață din ordinul Carnivora, rivalizat în mărime numai de cea mai apropiată rudă a lui, ursul polar, care este mult mai puțin variabil în mărime și în medie ceva mai mare. Adulții diferitor subspecii variază în greutate de la 80 până la 600 kg, masculii fiind mai grei decât femelele. În ciuda denumirii lor, urșii bruni nu sunt în întregime bruni; blana poate fi de culoare roșiatică până la brună-gălbenie și brună închis până la crem. În timpul iernii, urșii bruni din unele populații hibernează și ies la iveală primăvara pentru a recăpăta până la 180 kg de greutate. Au dentiție și gheare bine dezvoltate, ideale pentru stilul lor de viață.",
        sezonVanatoare: "Doar cu derogare specială",
        permisaVanatoare: false,
        specii: ["Urs carpatin"],
        subSpecii: ["Ursus arctos arctos"],
        munitieRecomandata: ["338 Win Mag", "9.3x62", "375 H&H"],
        comportament: "Solitar, activ în amurg și noaptea, omnivor, poate deveni agresiv.",
        zoneVanatoare: ["Carpați, păduri dese, zone montane izolate"],
        imagine: "https://i.postimg.cc/T3m8pN7k/Urs.jpg",
        dimensiuni: {
          greutate: "150-400 kg",
          lungime: "150-250 cm",
          inaltime: "100-140 cm la greabăn"
        },
        statusProtectie: "Specie protejată",
        pericol: "Foarte ridicat",
        exemplareProtejate: true
      }
      
];

const munitie = [
    {
      id: 1,
      denumire: ".308 Winchester",
      imagine: "https://i.postimg.cc/HnQZTFs5/308-Winchester.jpg",
      caracteristiciSpeciale: [
        "Retenția greutății",
        "Glonț lipit",
        "Precizie bună la distanță medie"
      ],
      viteza: {
        V0: "2625 f/s",
        V200: "2126 f/s",
        V300: "1899 f/s"
      },
      energie: {
        E0: "3061 ft.-lb",
        E50: "2492 ft.-lb",
        E100: "2008 ft.-lb",
        E200: "1602 ft.-lb"
      },
      vant: {
        yds100: "0.53 in",
        yds200: "2.24 in",
        yds300: "5.32 in"
      },
      uzRecomandat: ["Cerb", "Căprior", "Lup", "Mistreț (la distanță)"]
    },
    {
      id: 2,
      denumire: ".30-06 Springfield",
      imagine: "https://i.postimg.cc/hPDbJX2N/30-06.jpg",
      caracteristiciSpeciale: [
        "Penetrare puternică",
        "Glonț expansiv",
        "Versatil pentru vânat mediu și mare"
      ],
      viteza: {
        V0: "2800 f/s",
        V200: "2300 f/s",
        V300: "2050 f/s"
      },
      energie: {
        E0: "2900 ft.-lb",
        E50: "2500 ft.-lb",
        E100: "2150 ft.-lb",
        E200: "1800 ft.-lb"
      },
      vant: {
        yds100: "0.47 in",
        yds200: "1.90 in",
        yds300: "4.89 in"
      },
      uzRecomandat: ["Cerb", "Urs", "Mistreț", "Lup"]
    },
    {
      id: 3,
      denumire: "12 Gauge - Cartuș cu alice",
      imagine: "https://i.postimg.cc/pTv5gS73/12Gauge.jpg",
      caracteristiciSpeciale: [
        "Ideal pentru distanțe mici",
        "Răspândire largă",
        "Putere mare de oprire"
      ],
      viteza: {
        V0: "1300 f/s",
        V50: "1100 f/s",
        V100: "900 f/s"
      },
      energie: {
        E0: "1600 ft.-lb",
        E50: "1100 ft.-lb",
        E100: "750 ft.-lb"
      },
      vant: {
        yds50: "0.75 in",
        yds100: "2.50 in"
      },
      uzRecomandat: ["Fazan", "Iepure", "Șacal", "Gâscă"]
    },
    {
      id: 4,
      denumire: ".223 Remington",
      imagine: "https://i.postimg.cc/s2dMh8V1/223-Remington.jpg",
      caracteristiciSpeciale: [
        "Viteză mare inițială",
        "Precizie excelentă",
        "Glonț ușor, ideal pentru vânat mic"
      ],
      viteza: {
        V0: "3240 f/s",
        V200: "2650 f/s",
        V300: "2350 f/s"
      },
      energie: {
        E0: "1280 ft.-lb",
        E50: "1040 ft.-lb",
        E100: "870 ft.-lb",
        E200: "700 ft.-lb"
      },
      vant: {
        yds100: "0.40 in",
        yds200: "1.80 in",
        yds300: "4.60 in"
      },
      uzRecomandat: ["Șacal", "Vulpe", "Căprior (în anumite condiții)"]
    },
    {
      id: 5,
      denumire: ".243 Winchester",
      imagine: "https://i.postimg.cc/pVhysRpy/243-Winchester.jpg",
      caracteristiciSpeciale: [
        "Glonț ușor și rapid",
        "Eficient pe distanțe medii",
        "Recul redus"
      ],
      viteza: {
        V0: "2960 f/s",
        V200: "2450 f/s",
        V300: "2200 f/s"
      },
      energie: {
        E0: "1970 ft.-lb",
        E50: "1680 ft.-lb",
        E100: "1420 ft.-lb",
        E200: "1100 ft.-lb"
      },
      vant: {
        yds100: "0.45 in",
        yds200: "2.10 in",
        yds300: "5.10 in"
      },
      uzRecomandat: ["Căprior", "Șacal", "Iepure mare", "Vulpe"]
    },
    {
      id: 6,
      denumire: ".270 Winchester",
      imagine: "https://i.postimg.cc/gkxyyCPK/270-Winchester.jpg",
      caracteristiciSpeciale: [
        "Traiectorie plată",
        "Bună penetrare",
        "Ideal pentru vânat de talie medie"
      ],
      viteza: {
        V0: "3060 f/s",
        V200: "2600 f/s",
        V300: "2350 f/s"
      },
      energie: {
        E0: "2700 ft.-lb",
        E50: "2300 ft.-lb",
        E100: "2000 ft.-lb",
        E200: "1650 ft.-lb"
      },
      vant: {
        yds100: "0.50 in",
        yds200: "2.00 in",
        yds300: "4.90 in"
      },
      uzRecomandat: ["Cerb", "Mistreț", "Căprior", "Lup"]
    },
    {
      id: 7,
      denumire: ".338 Win Mag",
      imagine: "https://i.postimg.cc/3Nx5NgWn/338-Win-Mag.jpg",
      caracteristiciSpeciale: [
        "Putere mare de oprire",
        "Penetrare profundă",
        "Ideal pentru vânat mare"
      ],
      viteza: {
        V0: "2780 f/s",
        V200: "2350 f/s",
        V300: "2100 f/s"
      },
      energie: {
        E0: "4000 ft.-lb",
        E50: "3600 ft.-lb",
        E100: "3200 ft.-lb",
        E200: "2700 ft.-lb"
      },
      vant: {
        yds100: "0.60 in",
        yds200: "2.40 in",
        yds300: "6.00 in"
      },
      uzRecomandat: ["Urs", "Cerb mare", "Mistreț mare"]
    },
    {
      id: 8,
      denumire: "7x64 Brenneke",
      imagine: "https://i.postimg.cc/HsL8DRW7/7x64-B.jpg",
      caracteristiciSpeciale: [
        "Versatil",
        "Putere mare și traiectorie bună",
        "Foarte popular în Europa"
      ],
      viteza: {
        V0: "2900 f/s",
        V200: "2400 f/s",
        V300: "2150 f/s"
      },
      energie: {
        E0: "3000 ft.-lb",
        E50: "2600 ft.-lb",
        E100: "2200 ft.-lb",
        E200: "1800 ft.-lb"
      },
      vant: {
        yds100: "0.48 in",
        yds200: "2.10 in",
        yds300: "5.00 in"
      },
      uzRecomandat: ["Cerb", "Mistreț", "Lup", "Căprior"]
    },
    {
      id: 9,
      denumire: "8x57 IS",
      imagine: "https://i.postimg.cc/SRPSpZVW/8x57.jpg",
      caracteristiciSpeciale: [
        "Puternic",
        "Penetrare excelentă",
        "Glonț greu pentru vânat robust"
      ],
      viteza: {
        V0: "2600 f/s",
        V200: "2200 f/s",
        V300: "1950 f/s"
      },
      energie: {
        E0: "3200 ft.-lb",
        E50: "2700 ft.-lb",
        E100: "2300 ft.-lb",
        E200: "1900 ft.-lb"
      },
      vant: {
        yds100: "0.55 in",
        yds200: "2.20 in",
        yds300: "5.50 in"
      },
      uzRecomandat: ["Mistreț", "Cerb", "Urs"]
    },
    {
      id: 10,
      denumire: "6.5x55 SE",
      imagine: "https://i.postimg.cc/R0GzBsZN/6-5-x-55.jpg",
      caracteristiciSpeciale: [
        "Recul redus",
        "Stabilitate bună în vânt",
        "Glonț lung și eficient"
      ],
      viteza: {
        V0: "2700 f/s",
        V200: "2250 f/s",
        V300: "2000 f/s"
      },
      energie: {
        E0: "2250 ft.-lb",
        E50: "1900 ft.-lb",
        E100: "1600 ft.-lb",
        E200: "1300 ft.-lb"
      },
      vant: {
        yds100: "0.42 in",
        yds200: "1.85 in",
        yds300: "4.60 in"
      },
      uzRecomandat: ["Căprior", "Cerb", "Vulpe", "Șacal"]
    }
  ];  

app.get("/animale", (req, res) => {
  res.json(animale);
});

app.get("/munitie", (req, res) => {
    res.json(munitie);
  });

app.listen(3000, () => {
  console.log("API-ul rulează la http://localhost:3000");
});
