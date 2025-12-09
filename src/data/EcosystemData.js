/**
 * @file EcosystemData.js
 * @author 
 *   Daniel Johnston (A00450815)
 * @description Provides the dataset used on the ecosystem page, including names, categories,
 * images, and descriptions for all ecosystem items.
 */

/**
 * @description Import images
 * @type {string} Image path used for rendering.
 */
import AlderBuckthorn from '../assets/iNaturalist/AlderBuckthorn.jpg';
import AlderFlycatcher from '../assets/report/AlderFlycatcher.jpg';
import AlternateLeavedDogwood from '../assets/iNaturalist/AlternateLeavedDogwood.jpg';
import AmericanDogTick from '../assets/iNaturalist/AmericanDogTick.jpg';
import AmericanRoyalFern from '../assets/iNaturalist/AmericanRoyalFern.jpg';
import BalsamFir from '../assets/iNaturalist/BalsamFir.jpg';
import BandedLonghornBeetle from '../assets/iNaturalist/BandedLonghornBeetle.jpg';
import BeakedHazelnut from '../assets/iNaturalist/BeakedHazelnut.jpg';
import BlackFirefly from '../assets/iNaturalist/BlackFirefly.jpg';
import BlackHuckleberry from '../assets/iNaturalist/BlackHuckleberry.jpg';
import BlackKnot from '../assets/iNaturalist/BlackKnot.jpg';
import BogAster from '../assets/iNaturalist/BogAster.jpg';
import BogMyrtle from '../assets/iNaturalist/BogMyrtle.jpg';
import BothersomeDeerFly from '../assets/iNaturalist/BothersomeDeerFly.jpg';
import BrownWaterscorpion from '../assets/iNaturalist/BrownWaterscorpion.jpg';
import CanadaGoldenrod from '../assets/iNaturalist/CanadaGoldenrodSolidago.jpeg';
import CanadaMayflower from '../assets/iNaturalist/CanadaMayflower.jpg';
import Chaga from '../assets/iNaturalist/Chaga.jpg';
import CinnamonFern from '../assets/iNaturalist/CinnamonFern.jpg';
import CommonCinquefoil from '../assets/iNaturalist/CommonCinquefoil.jpg';
import CommonColumbine from '../assets/iNaturalist/CommonColumbine.jpg';
import CommonCoralSlime from '../assets/iNaturalist/CommonCoralSlime.jpg';
import CommonDandelion from '../assets/iNaturalist/CommonDandelion.jpg';
import CommonHempNettle from '../assets/iNaturalist/CommonHempNettle.jpg';
import CommonHoneysuckle from '../assets/iNaturalist/CommonHoneysuckle.jpg';
import CommonSelfheal from '../assets/iNaturalist/Common Selfheal.jpg';
import CommonValerian from '../assets/iNaturalist/CommonValerian.jpeg';
import CommonWrinkleLeavedGoldenrod from '../assets/iNaturalist/CommonWrinkleLeavedGoldenrod.jpeg';
import CornSpeedwell from '../assets/iNaturalist/CornSpeedwell.jpg';
import CreepingButtercup from '../assets/iNaturalist/CreepingButtercup.jpg';
import CreepingJenny from '../assets/iNaturalist/CreepingJenny.jpg';
import CreepingSnowberry from '../assets/iNaturalist/CreepingSnowberry.jpg';
import DameRocket from '../assets/iNaturalist/DameRocket.jpg';
import Dragonhunter from '../assets/iNaturalist/Dragonhunter.jpg';
import DwarfRaspberry from '../assets/iNaturalist/DwarfRaspberry.jpg';
import DyerPolypore from '../assets/iNaturalist/DyerPolypore.jpeg';
import EasternAmericanToad from '../assets/iNaturalist/EasternAmericanToad.jpg';
import EasternFloater from '../assets/iNaturalist/EasternFloater.jpg';
import EasternRedBackedSalamander from '../assets/iNaturalist/EasternRedBackedSalamander.jpg';
import EasternWhitePine from '../assets/iNaturalist/EasternWhitePine.jpg';
import GhostPipe from '../assets/iNaturalist/GhostPipe.jpg';
import GoldenrodGallFly from '../assets/iNaturalist/GoldenrodGallFly.jpg';
import GrassSpider from '../assets/iNaturalist/GrassSpider.jpg';
import GreaterPlantain from '../assets/iNaturalist/GreaterPlantain.jpg';
import GreenImmigrantLeafWeevil from '../assets/iNaturalist/GreenImmigrantLeafWeevil.jpg';
import GreyAlder from '../assets/iNaturalist/GreyAlder.jpg';
import HayScentedFern from '../assets/iNaturalist/HayScentedFern.jpg';
import HeathSpeedwell from '../assets/iNaturalist/HeathSpeedwell.jpg';
import HerbRobert from '../assets/iNaturalist/HerbRobert.jpg';
import HimalayanBalsam from '../assets/iNaturalist/HimalayanBalsam.jpeg';
import IntermediateWoodFern from '../assets/iNaturalist/IntermediateWoodFern.jpg';
import JapaneseBarberry from '../assets/iNaturalist/JapaneseBarberry.jpeg';
import LactariusThyinos from '../assets/iNaturalist/LactariusThyinos.jpg';
import LaurelSphinx from '../assets/iNaturalist/LaurelSphinx.jpg';
import Lingonberry from '../assets/iNaturalist/Lingonberry.jpg';
import LittleFloatingheart from '../assets/iNaturalist/LittleFloatingheart.jpg';
import MarshSkullcap from '../assets/iNaturalist/MarshSkullcap.jpg';
import MethuselahBeardLichen from '../assets/iNaturalist/MethuselahBeardLichen.jpg';
import MountainHolly from '../assets/iNaturalist/MountainHolly.jpg';
import MountainMaple from '../assets/iNaturalist/MountainMaple.jpg';
import MountainWoodsorrel from '../assets/iNaturalist/MountainWoodsorrel.jpg';
import MultifloraRose from '../assets/iNaturalist/MultifloraRose.jpg';
import NewYorkFern from '../assets/iNaturalist/NewYorkFern.jpeg';
import NorthernBayberry from '../assets/iNaturalist/NorthernBayberry.jpg';
import NorthernLadyFern from '../assets/iNaturalist/NorthernLadyFernAthyrium.jpeg';
import NorthernOakFern from '../assets/iNaturalist/NorthernOakFern.jpeg';
import NorthernRedBelt from '../assets/iNaturalist/NorthernRedBelt.jpg';
import NorthernShortTailedShrew from '../assets/iNaturalist/NorthernShortTailedShrew.jpg';
import NorthernStarflower from '../assets/iNaturalist/NorthernStarflower.jpg';
import NorthernWildRaisin from '../assets/iNaturalist/NorthernWildRaisin.jpg';
import NorwayMaple from '../assets/iNaturalist/NorwayMaple.jpg';
import OtiorhynchusCarinatopunctatus from '../assets/iNaturalist/OtiorhynchusCarinatopunctatus.jpg';
import OxeyeDaisy from '../assets/iNaturalist/OxeyeDaisy.jpg';
import PaintedSuillus from '../assets/iNaturalist/PaintedSuillus.jpg';
import PaintedTurtle from '../assets/iNaturalist/PaintedTurtle.jpg';
import PickerelFrog from '../assets/iNaturalist/PickerelFrog.jpg';
import Pickerelweed from '../assets/iNaturalist/Pickerelweed.jpg';
import PineappleWeed from '../assets/iNaturalist/PineappleWeed.jpg';
import Pinesap from '../assets/iNaturalist/Pinesap.jpg';
import PurpleFoxglove from '../assets/iNaturalist/PurpleFoxglove.jpg';
import Ragwort from '../assets/iNaturalist/Ragwort.jpg';
import RainbowSmelt from '../assets/iNaturalist/RainbowSmelt.jpg';
import RedBerriedElder from '../assets/iNaturalist/RedBerriedElder.jpg';
import RedClover from '../assets/iNaturalist/RedClover.jpg';
import RedCurrant from '../assets/iNaturalist/RedCurrant.jpg';
import RedOsierDogwood from '../assets/iNaturalist/RedOsierDogwood.jpg';
import RedRaspberry from '../assets/iNaturalist/RedRaspberry.jpeg';
import Rhodora from '../assets/iNaturalist/Rhodora.jpg';
import SaddlebackHarvestman from '../assets/iNaturalist/SaddlebackHarvestman.jpg';
import SensitiveFern from '../assets/iNaturalist/SensitiveFern.jpeg';
import SheepLaurel from '../assets/iNaturalist/SheepLaurel.jpg';
import SmoothGooseberry from '../assets/iNaturalist/SmoothGooseberry.jpg';
import StairstepMoss from '../assets/iNaturalist/StairstepMoss.jpg';
import StrangaleptaFlowerLonghornBeetle from '../assets/iNaturalist/StrangaleptaFlowerLonghornBeetle.jpg';
import SwampAlder from '../assets/iNaturalist/SwampAlder.jpg';
import SwampLaurel from '../assets/iNaturalist/SwampLaurel.jpg';
import Tamarack from '../assets/iNaturalist/Tamarack.jpg';
import ThreeleafGoldthread from '../assets/iNaturalist/ThreeleafGoldthread.jpg';
import TreeLungwort from '../assets/iNaturalist/TreeLungwort.jpg';
import VariedRagLichen from '../assets/iNaturalist/VariedRagLichen.jpg';
import VariegatedYellowPondLily from '../assets/iNaturalist/VariegatedYellowPondLily.jpg';
import VelvetleafBlueberry from '../assets/iNaturalist/VelvetleafBlueberry.jpg';
import VirginiaCreeper from '../assets/iNaturalist/VirginiaCreeper.jpg';
import VirginiaStrawberry from '../assets/iNaturalist/VirginiaStrawberry.jpg';
import WesternPoisonIvy from '../assets/iNaturalist/WesternPoisonIvy.jpg';
import WhiteAsh from '../assets/iNaturalist/WhiteAsh.jpg';
import WhiteMeadowsweet from '../assets/iNaturalist/WhiteMeadowsweet.jpg';
import WildSarsaparilla from '../assets/iNaturalist/WildSarsaparilla.jpg';
import WinterberryHolly from '../assets/iNaturalist/WinterberryHolly.jpg';
import WoodlandStrawberry from '../assets/iNaturalist/WoodlandStrawberry.jpg';
import YellowBirch from '../assets/iNaturalist/YellowBirch.jpg';

// ---------------------------------------------
// Data Array
// ---------------------------------------------

/**
 * @typedef {Object} EcosystemItem
 * @property {string} name - Display name of the organism or object.
 * @property {string} category - Classification (e.g., Flora, Fauna, Fungi).
 * @property {string} description - Text description shown inside the modal.
 * @property {string} image - Imported image used for grid thumbnail + modal.
 */

/**
 * @constant
 * @type {EcosystemItem[]}
 * @description Array containing all ecosystem entries used on the ecosystem page.
 */
const data = [
  {
    name: 'Alder Buckthorn',
    category: 'Flora',
    description: 'Alder buckthorn, glossy buckthorn, or breaking buckthorn is a tall shrub in the family Rhamnaceae. Unlike other "buckthorns," alder buckthorn does not have thorns. It is native to Europe, northernmost Africa, and western Asia. It is also introduced and naturalised in eastern North America.',
    image: AlderBuckthorn
  }, {
    name: 'Alder Flycatcher',
    category: 'Fauna',
    description: 'The alder flycatcher is a small insect-eating bird in the tyrant flycatcher family.',
    image: AlderFlycatcher
  }, {
    name: 'Alternate Leaved Dogwood',
    category: 'Flora',
    description: 'A species of flowering plant in the dogwood family Cornaceae, native to eastern North America. It is rare in the southern United States. It is commonly known as green osier, alternate-leaved dogwood, and pagoda dogwood.',
    image: AlternateLeavedDogwood
  }, {
    name: 'American Dog Tick',
    category: 'Fauna',
    description: 'The American dog tick, or wood tick, is a species of tick that is known to carry bacteria responsible for several diseases in humans, including Rocky Mountain spotted fever and tularemia. Diseases are spread when it sucks blood from the host. It may take several days for the host to experience symptoms.',
    image: AmericanDogTick
  }, {
    name: 'American Royal Fern',
    category: 'Flora',
    description: 'A species of fern native to a large area of the Americas, from the eastern half of Canada and the United States to Argentina.',
    image: AmericanRoyalFern
  }, {
    name: 'Balsam Fir',
    category: 'Flora',
    description: 'Balsam fir is a North American fir, native to most of eastern and central Canada and the northeastern United States.',
    image: BalsamFir
  }, {
    name: 'Banded Longhorn Beetle',
    category: 'Fauna',
    description: 'Known generally as the banded longhorn or cerambycid beetle, is a species of flower longhorn in the family of beetles known as Cerambycidae. It is found in North America. Its larvae develop within the decaying wood of trees.',
    image: BandedLonghornBeetle
  }, {
    name: 'Beaked Hazelnut',
    category: 'Flora',
    description: 'The beaked hazelnut (or just beaked hazel) is a shrubby hazel with two subspecies found throughout most of North America.',
    image: BeakedHazelnut
  }, {
    name: 'Black Firefly',
    category: 'Fauna',
    description: 'The woodland lucy or black firefly, is a species of firefly, a member of the Lampyridae family of beetles (order Coleoptera).',
    image: BlackFirefly
  }, {
    name: 'Black Huckleberry',
    category: 'Flora',
    description: 'The black huckleberry, is a common huckleberry found throughout a wide area of eastern North America.',
    image: BlackHuckleberry
  }, {
    name: 'Black Knot',
    category: 'Fungi',
    description: 'A plant pathogen, which is the causal agent of black knot. It affects members of the Prunus genus, such as cherry, plum, apricot, and chokecherry trees in North America. The disease produces rough, black growths that encircle and kill the infested parts and provide habitat for insects.',
    image: BlackKnot
  }, {
    name: 'Bog Aster',
    category: 'Flora',
    description: 'Commonly named bog aster or bog nodding aster, it is a plant native to the northeastern United States. Its range extends into southeastern Canada.',
    image: BogAster
  }, {
    name: 'Bog Myrtle',
    category: 'Flora',
    description: 'A species of flowering plant in the family Myricaceae native to parts of Eurasia and North America. Common names include bog-myrtle, sweet willow, Dutch myrtle, and sweetgale.',
    image: BogMyrtle
  }, {
    name: 'Bothersome Deer Fly',
    category: 'Fauna',
    description: 'A species of deer fly in the family Tabanidae.',
    image: BothersomeDeerFly
  }, {
    name: 'Brown Water Scorpion',
    category: 'Fauna',
    description: 'A water stick insect in the family Nepidae, native to North America. It is known by the common name brown water scorpion. They are carnivorous and feed on other insects and crustaceans. They are most common from spring to autumn.',
    image: BrownWaterscorpion
  }, {
    name: 'Canada Goldenrod',
    category: 'Flora',
    description: 'Known as Canada goldenrod or Canadian goldenrod, is a plant of the family Asteraceae. It forms colonies of upright-growing plants. It is native to northeastern and north-central North America and is an invasive plant in other parts of the continent and several areas worldwide, including Eurasia.',
    image: CanadaGoldenrod
  }, {
    name: 'Canada Mayflower',
    category: 'Flora',
    description: 'A flowering plant, native to Canada and the northeastern United States. The plant appears in two forms, either as a single leaf rising from the ground with no fruiting structures or as a flowering/fruiting stem with two to three leaves. Flowering shoots have clusters of 12 to 25 starry-shaped, white flowers held above the leaves.',
    image: CanadaMayflower
  }, {
    name: 'Chaga',
    category: 'Fungi',
    description: 'A fungus in the family Hymenochaetaceae. It is parasitic on birch and other trees.',
    image: Chaga
  }, {
    name: 'Cinnamon Fern',
    category: 'Flora',
    description: 'A species of royal fern native to the Americas and Asia. It is the sole living representative of the genus Osmundastrum. The cinnamon fern mainly inhabits swamps, bogs and moist woodlands. It also thrives in open meadows as a dominant species. The fern often grows in wet savannas, wetlands, floodplains, marshes, dry-mesic forests, and subtropical prairies. The cinnamon fern is a highly successful species and can thrive in temperate, subtropical, and tropical ecosystems. ',
    image: CinnamonFern
  }, {
    name: 'Common Cinquefoil',
    category: 'Flora',
    description: 'Also known as old-field five-fingers or oldfield cinquefoil, it is a herb in the Rosaceae (rose) family native to eastern North America.',
    image: CommonCinquefoil
  }, {
    name: 'Common Columbine',
    category: 'Flora',
    description: 'A species of flowering plant of the genus Aquilegia (columbine) in the family Ranunculaceae. Commonly called the common columbine, European crowfoot, and granny\'s bonnet. The current wild range of it includes its native range in Europe as well as introduced populations in Asia, Oceania, North America (where it has become naturalized), and South America.',
    image: CommonColumbine
  }, {
    name: 'Common Coral Slime',
    category: 'Fungi',
    description: 'A genus of slime mold within the Eumycetozoa. They are widely distributed and commonly found on decaying wood.',
    image: CommonCoralSlime
  }, {
    name: 'Common Dandelion',
    category: 'Flora',
    description: 'a herbaceous flowering plant in the daisy family, Asteraceae. The common dandelion is well-known for its yellow flower heads that turn into round balls of many silver-tufted fruit, which disperse in the wind.',
    image: CommonDandelion
  }, {
    name: 'Common Hemp Nettle',
    category: 'Flora',
    description: 'The common hemp-nettle or brittlestem hempnettle, is a flowering plant in the family Lamiaceae, native to Europe and northwestern Asia.',
    image: CommonHempNettle
  }, {
    name: 'Common Honeysuckle',
    category: 'Flora',
    description: 'Common names honeysuckle, common honeysuckle, European honeysuckle, or woodbine, is a species of flowering plant in the family Caprifoliaceae native to much of Europe, North Africa, Turkey and the Caucasus.',
    image: CommonHoneysuckle
  }, {
    name: 'Common Selfheal',
    category: 'Flora',
    description: 'The common self-heal, heal-all, woundwort, heart-of-the-earth, carpenter\'s herb, brownwort or blue curls, is a herbaceous plant in the mint family Lamiaceae.',
    image: CommonSelfheal
  }, {
    name: 'Common Valerian',
    category: 'Flora',
    description: 'A herbaceous flowering plant in the family Caprifoliaceae, native to Europe and southwestern Asia. It is the type species of the genus Valeriana.',
    image: CommonValerian
  }, {
    name: 'Common Wrinkled-Leaved Goldenrod',
    category: 'Flora',
    description: 'A species of flowering plant in the family Asteraceae. It is native to North America. It is usually found in wet to mesic habitats.',
    image: CommonWrinkleLeavedGoldenrod
  }, {
    name: 'Corn Speedwell',
    category: 'Flora',
    description: 'An annual flowering plant in the plantain family Plantaginaceae. The species is native to Europe and a common weed in gardens, pastures, waste places, and cultivated land.',
    image: CornSpeedwell
  }, {
    name: 'Creeping Buttercup',
    category: 'Flora',
    description: 'A flowering plant in the buttercup family, Ranunculaceae, native to Europe, Asia, and northwestern Africa. It is also called creeping crowfoot.',
    image: CreepingButtercup
  }, {
    name: 'Creeping Jenny',
    category: 'Flora',
    description: 'A species of flowering plant in the primrose family, Primulaceae. Its common names include moneywort, creeping jenny, herb twopence, and twopenny grass.',
    image: CreepingJenny
  }, {
    name: 'Creeping Snowberry',
    category: 'Flora',
    description: 'A ground-level vine of the heath family Ericaceae. It is native to North America and produces small white edible berries. It fruits from August to September. Its leaves and berries taste and smell like wintergreen.',
    image: CreepingSnowberry
  }, {
    name: 'Dame Rocket',
    category: 'Flora',
    description: 'An herbaceous flowering plant species in the family Brassicaceae. Native to Eurasia and cultivated in many other areas of the world for their attractive, spring-blooming flowers. In some of those areas, it has escaped from cultivation and become a weed species.',
    image: DameRocket
  }, {
    name: 'Dragonhunter',
    category: 'Fauna',
    description: 'The dragonhunter is the only member of the genus Hagenius. Its closest relatives are Asian dragonflies of the genus Sieboldius, which are also sometimes called "dragonhunters." Together, the two genera form the subfamily Hageniinae.',
    image: Dragonhunter
  }, {
    name: 'Dwarf Raspberry',
    category: 'Flora',
    description: 'A herbaceous plant widespread across much of Canada and the northern United States.',
    image: DwarfRaspberry
  }, {
    name: 'Dyer Polypore',
    category: 'Fungi',
    description: 'Commonly known as velvet-top fungus, dyer\'s polypore, dyer\'s mazegill, or pine dye polypore, it is a fungal plant pathogen.',
    image: DyerPolypore
  }, {
    name: 'Eastern American Toad',
    category: 'Fauna',
    description: 'A common species of toad found throughout the eastern half of Canada and the United States.',
    image: EasternAmericanToad
  }, {
    name: 'Eastern Floater',
    category: 'Fauna',
    description: 'A species of large freshwater mussel, an aquatic bivalve mollusc in the family Unionidae, the river mussels.',
    image: EasternFloater
  }, {
    name: 'Eastern Red-backed Salamander',
    category: 'Fauna',
    description: 'A small, hardy woodland salamander species in the family Plethodontidae. The species inhabits wooded slopes in eastern North America. It is one of 56 species in the genus Plethodon. Red-backed salamanders are notable for their color polymorphism and primarily display two color morph varieties ("red-backed" and "lead-backed"), which differ in physiology and anti-predator behavior.',
    image: EasternRedBackedSalamander
  }, {
    name: 'Eastern White Pine',
    category: 'Flora',
    description: 'A large pine native to eastern North America.',
    image: EasternWhitePine
  }, {
    name: 'Ghost Pipe',
    category: 'Flora',
    description: 'A herbaceous, parasitic, non-photosynthesizing, flowering plant native to temperate regions of Asia, North America, and northern South America. The plant is waxy white, but some specimens have been described as having black flecks or pale pink coloration. Rare variants may have a deep red color.',
    image: GhostPipe
  }, {
    name: 'Goldenrod Gall Fly',
    category: 'Fauna',
    description: 'A species of fly native to North America. The species is best known for the characteristic galls it forms on several species in the Solidago, or goldenrod, genus. The fly\'s eggs are inserted near the developing buds of the plant. After hatching, the larvae migrate to an area below the plant\'s developing buds, where they then induce the plant\'s tissues to form into the hardened, bulbous chamber referred to as a gall.',
    image: GoldenrodGallFly
  }, {
    name: 'Grass Spider',
    category: 'Fauna',
    description: 'A genus of funnel weavers, they weave sheet webs that have a funnel shelter on one edge. The web is not sticky, but these spiders make up for that by running very rapidly.',
    image: GrassSpider
  }, {
    name: 'Greater Plantain',
    category: 'Flora',
    description: 'A species of flowering plant in the plantain family Plantaginaceae. The plant is native to Eurasia.',
    image: GreaterPlantain
  }, {
    name: 'Green Immigrant Leaf Weevil',
    category: 'Fauna',
    description: 'A species of broad-nosed weevil belonging to the family Curculionidae, subfamily Entiminae.',
    image: GreenImmigrantLeafWeevil
  }, {
    name: 'Grey Alder',
    category: 'Flora',
    description: 'A species of multi-stemmed, shrubby tree in the birch family, with a wide range across the cooler parts of the Northern Hemisphere. Tolerant of wetter soils, it can slowly spread with runners and is a common sight in swamps and wetlands.',
    image: GreyAlder
  }, {
    name: 'Hay-scented Fern',
    category: 'Flora',
    description: 'A species of fern native to eastern North America.',
    image: HayScentedFern
  }, {
    name: 'Heath Speedwell',
    category: 'Flora',
    description: 'A species of flowering plant in the plantain family Plantaginaceae. It is native to Europe and western Asia. It has been introduced to North America and is widely naturalized there.',
    image: HeathSpeedwell
  }, {
    name: 'Herb Robert',
    category: 'Flora',
    description: 'A species of cranesbill that is widespread throughout the northern hemisphere and introduced to some countries in the southern. It is common in woods, hedges, gardens, and on waste ground and can also be found on shingle beaches and limestone pavements. It is not rare or threatened, and in some places it is considered to be invasive.',
    image: HerbRobert
  }, {
    name: 'Himalayan Balsam',
    category: 'Flora',
    description: 'A large annual plant native to the Himalayas. Via human introduction, it is now present across much of the Northern Hemisphere and is considered an invasive species in many areas.',
    image: HimalayanBalsam
  }, {
    name: 'Intermediate Wood Fern',
    category: 'Flora',
    description: 'An evergreen wood fern native to eastern North America. It is the parent of several species of hybrid origin, including Dryopteris carthusiana.',
    image: IntermediateWoodFern
  }, {
    name: 'Japanese Barberry',
    category: 'Flora',
    description: 'A species of flowering plant in the barberry family Berberidaceae, native to Japan and eastern Asia, though widely naturalized in China and North America, where it has become a problematic invasive in many places, leading to declines in species diversity, increased tick habitat, and soil changes.',
    image: JapaneseBarberry
  }, {
    name: 'Lactarius Thyinos',
    category: 'Fungi',
    description: 'A species of fungus in the family Russulaceae. It is native to Europe and North America.',
    image: LactariusThyinos
  }, {
    name: 'Laurel Sphinx',
    category: 'Fauna',
    description: 'It is found in the temperate regions of the United States and southern Canada, east of the Great Plains, and in the northern part of its range it also occurs west of the Rocky Mountains.',
    image: LaurelSphinx
  }, {
    name: 'Lingonberry',
    category: 'Flora',
    description: 'A small evergreen shrub in the heath family, Ericaceae. It is native to boreal forests and Arctic tundra throughout the Northern Hemisphere.',
    image: Lingonberry
  }, {
    name: 'Little Floatingheart',
    category: 'Flora',
    description: 'A species of floating aquatic plant native to eastern North America.',
    image: LittleFloatingheart
  }, {
    name: 'Marsh Skullcap',
    category: 'Flora',
    description: 'A hardy herb native to northern areas of the Northern Hemisphere, including Europe, Asia, and almost all of Canada. It is a member of the mint family.',
    image: MarshSkullcap
  }, {
    name: 'A fruticose lichen in the family Parmeliaceae.',
    category: 'Fungi',
    description: 'Placeholder',
    image: MethuselahBeardLichen
  }, {
    name: 'Mountain Holly',
    category: 'Flora',
    description: 'A species of holly native to eastern North America.',
    image: MountainHolly
  }, {
    name: 'Mountain Maple',
    category: 'Flora',
    description: 'A species of maple native to northeastern North America.',
    image: MountainMaple
  }, {
    name: 'Mountain Woodsorrel',
    category: 'Flora',
    description: 'A species of flowering plant in the family Oxalidaceae. This species is a herb native to eastern North America.',
    image: MountainWoodsorrel
  }, {
    name: 'Multiflora Rose',
    category: 'Flora',
    description: 'It is native to eastern Asia, in China, Japan, and Korea.  It was introduced to North America, where it is an invasive species.',
    image: MultifloraRose
  }, {
    name: 'New York Fern',
    category: 'Flora',
    description: 'A species of fern found throughout the eastern United States and Canada.',
    image: NewYorkFern
  }, {
    name: 'Northern Bayberry',
    category: 'Flora',
    description: 'A species of Myrica native to eastern North America.',
    image: NorthernBayberry
  }, {
    name: 'Northern Lady-fern',
    category: 'Flora',
    description: 'A fern native to northeastern North America.',
    image: NorthernLadyFern
  }, {
    name: 'Northern Oak Fern',
    category: 'Flora',
    description: 'A fern of the family Cystopteridaceae. It is widespread across much of North America and Eurasia.',
    image: NorthernOakFern
  }, {
    name: 'Northern Red Belt',
    category: 'Fungi',
    description: 'A North American species of shelf fungus',
    image: NorthernRedBelt
  }, {
    name: 'Northern Short-tailed Shrew',
    category: 'Fauna',
    description: 'The largest shrew in the genus Blarina, it occurs in the northeastern region of North America. It is a semifossorial, highly active, and voracious insectivore and is present in a variety of habitats like broadleaved and pine forests among shrubs and hedges as well as grassy riverbanks. It is notable in that it is one of the few venomous mammals.',
    image: NorthernShortTailedShrew
  }, {
    name: 'Northern Starflower',
    category: 'Flora',
    description: 'It is a North American woodland flower that blooms between May and June.',
    image: NorthernStarflower
  }, {
    name: 'Northern Wild Raisin',
    category: 'Flora',
    description: 'A shrub native to eastern North America in the viburnum family, Viburnaceae.',
    image: NorthernWildRaisin
  }, {
    name: 'Norway Maple',
    category: 'Flora',
    description: 'A species of maple native to eastern and central Europe and western Asia. It was introduced to North America in the mid-1700s as a shade tree. It is a member of the family Sapindaceae.',
    image: NorwayMaple
  }, {
    name: 'Otiorhynchus carinatopunctatus',
    category: 'Fauna',
    description: 'A species of broad-nosed weevil in the beetle family Curculionidae. It is native to Europe and introduced in North America.',
    image: OtiorhynchusCarinatopunctatus
  }, {
    name: 'Oxeye Daisy',
    category: 'Flora',
    description: 'It is a widespread flowering plant native to Europe and the temperate regions of Asia and an introduced plant to North America.',
    image: OxeyeDaisy
  }, {
    name: 'Painted Suillus',
    category: 'Fungi',
    description: 'It is a species of fungus in the family Suillaceae and is found in eastern Asia and northeastern North America.',
    image: PaintedSuillus
  }, {
    name: 'Painted Turtle',
    category: 'Fauna',
    description: 'The most widespread native turtle of North America. It lives in relatively slow-moving fresh waters, from southern Canada to northern Mexico, and from the Atlantic to the Pacific. They have been shown to prefer large wetlands with long periods of inundation and emergent vegetation. This species is one of the few that is specially adapted to tolerate freezing temperatures for extended periods of time due to an antifreeze-like substance in their blood that keeps their cells from freezing. This turtle is a member of the genus Chrysemys, which is part of the pond turtle family Emydidae.',
    image: PaintedTurtle
  }, {
    name: 'Pickerel Frog',
    category: 'Fauna',
    description: 'A small North American frog, characterized by the appearance of seemingly "hand-drawn" squares on its dorsal surface.',
    image: PickerelFrog
  }, {
    name: 'Pickerelweed',
    category: 'Flora',
    description: 'An aquatic plant native to the Americas. It grows in a variety of wetlands, including pond and lake margins across an extremely large range from eastern Canada south to Argentina.',
    image: Pickerelweed
  }, {
    name: 'Pineapple Weed',
    category: 'Flora',
    description: 'An annual plant native to North America and/or northern Asia, introduced to Europe, where it grows as a common herb of fields, gardens, and roadsides. It is in the daisy family, Asteraceae. The flowers exude a chamomile/pineapple aroma when crushed.',
    image: PineappleWeed
  }, {
    name: 'Pinesap',
    category: 'Flora',
    description: 'It is a herbaceous plant of the Monotropoideae subfamily of the family Ericaceae. It is native to temperate regions of the Northern Hemisphere and is scarce within its range.',
    image: Pinesap
  }, {
    name: 'Purple Foxglove',
    category: 'Flora',
    description: 'A toxic species of flowering plant in the plantain family Plantaginaceae, native to and widespread throughout most of temperate Europe. It has also naturalized in parts of North America, as well as some other temperate regions.',
    image: PurpleFoxglove
  }, {
    name: 'Ragwort',
    category: 'Flora',
    description: 'It is a very common wildflower in the family Asteraceae that is native to northern Eurasia, usually in dry, open places, and has also been widely distributed as a weed elsewhere.',
    image: Ragwort
  }, {
    name: 'Rainbow Smelt',
    category: 'Fauna',
    description: 'A North American species of fish of the family Osmeridae. Walleye, trout, and other larger fish prey on these smelt.',
    image: RainbowSmelt
  }, {
    name: 'Red Berried Elder',
    category: 'Flora',
    description: 'It is a species of elder, native across much of the Northern Hemisphere. The plant is largely poisonous when raw, but the fruit can be cooked for consumption.',
    image: RedBerriedElder
  }, {
    name: 'Red Clover',
    category: 'Flora',
    description: 'It is a herbaceous species of flowering plant in the bean family, Fabaceae. It is native to the Americas but planted and naturalized in many other regions.',
    image: RedClover
  }, {
    name: 'Red Currant',
    category: 'Flora',
    description: 'It is a member of the genus Ribes in the family Grossulariaceae. It is native to western Europe. The species is widely cultivated and has escaped into the wild in many regions.',
    image: RedCurrant
  }, {
    name: 'Red Osier Dogwood',
    category: 'Flora',
    description: 'It is a species of flowering plant in the family Cornaceae, native to much of North America.',
    image: RedOsierDogwood
  }, {
    name: 'Red Raspberry',
    category: 'Flora',
    description: 'A red-fruited species of Rubus native to Europe and northern Asia and commonly cultivated in other temperate regions.',
    image: RedRaspberry
  }, {
    name: 'Rhodora',
    category: 'Flora',
    description: 'A flowering shrub that is native to northeastern North America.',
    image: Rhodora
  }, {
    name: 'Saddleback Harvestman',
    category: 'Fauna',
    description: 'A species of harvestman arachnid belonging to the family Phalangiidae.',
    image: SaddlebackHarvestman
  }, {
    name: 'Sensitive Fern',
    category: 'Flora',
    description: 'It is a coarse-textured, medium- to large-sized fern. The name comes from its sensitivity to frost, the fronds dying quickly when first touched by it.',
    image: SensitiveFern
  }, {
    name: 'Sheep Laurel',
    category: 'Flora',
    description: 'A flowering shrub in the family Ericaceae, it is distributed in eastern North America. It grows commonly in dry habitats in the boreal forest and is also found in drier areas of peat bogs, or pocosins. Like many plant species of infertile habitats, it has evergreen leaves.',
    image: SheepLaurel
  }, {
    name: 'Smooth Gooseberry',
    category: 'Flora',
    description: 'It is native to Canada and the northern United States.',
    image: SmoothGooseberry
  }, {
    name: 'Stairstep Moss',
    category: 'Flora',
    description: 'It is commonly found in Europe, Russia, Alaska, and Canada, where it is often the most abundant moss species.',
    image: StairstepMoss
  }, {
    name: 'Strangalepta Flower Longhorn Beetle',
    category: 'Fauna',
    description: 'It is a genus containing only one species, Strangalepta abbreviata, a longhorned beetle in the family Cerambycidae.',
    image: StrangaleptaFlowerLonghornBeetle
  }, {
    name: 'Swamp Alder',
    category: 'Flora',
    description: 'Not much is known about this species',
    image: SwampAlder
  }, {
    name: 'Swamp Laurel',
    category: 'Flora',
    description: 'An evergreen shrub of cold acidic bogs, in the family Ericaceae. It is native to northeastern North America.',
    image: SwampLaurel
  }, {
    name: 'Tamarack',
    category: 'Flora',
    description: 'It is a species of larch native to Canada.',
    image: Tamarack
  }, {
    name: 'Threeleaf Goldthread',
    category: 'Flora',
    description: 'It is a plant in the genus Coptis, a member of the family Ranunculaceae.',
    image: ThreeleafGoldthread
  }, {
    name: 'Tree Lungwort',
    category: 'Fungi',
    description: 'A large lichen consisting of a fungus and a green algal partner living together in a symbiotic relationship with a cyanobacterium.',
    image: TreeLungwort
  }, {
    name: 'Varied Rag Lichen',
    category: 'Fungi',
    description: 'It is a common and widespread species of bark-dwelling lichen in the family Parmeliaceae.',
    image: VariedRagLichen
  }, {
    name: 'Variegated Yellow Pond Lily',
    category: 'Flora',
    description: 'It is an aquatic herb in the water lily family, Nymphaeaceae, native to much of Canada and the northernmost of the United States.',
    image: VariegatedYellowPondLily
  }, {
    name: 'Velvetleaf Blueberry',
    category: 'Flora',
    description: 'A North American species of blueberry.',
    image: VelvetleafBlueberry
  }, {
    name: 'Virginia Creeper',
    category: 'Flora',
    description: 'A species of flowering vine in the grape family, Vitaceae.',
    image: VirginiaCreeper
  }, {
    name: 'Virginia Strawberry',
    category: 'Flora',
    description: 'A North American strawberry that grows across much of the United States and southern Canada.',
    image: VirginiaStrawberry
  }, {
    name: 'Western Poison Ivy',
    category: 'Flora',
    description: 'A species of Toxicodendron in the cashew family native to North America. It is poison ivy.',
    image: WesternPoisonIvy
  }, {
    name: 'White Ash',
    category: 'Flora',
    description: 'It is a fast-growing species of ash tree native to eastern and central North America.',
    image: WhiteAsh
  }, {
    name: 'White Meadowsweet',
    category: 'Flora',
    description: 'It is native to the wet soils of the Allegheny Mountains and other portions of eastern North America.',
    image: WhiteMeadowsweet
  }, {
    name: 'Wild Sarsaparilla',
    category: 'Flora',
    description: 'A species of flowering plant in the ivy family Araliaceae. It is native to northern and eastern North America.',
    image: WildSarsaparilla
  }, {
    name: 'Winterberry Holly',
    category: 'Flora',
    description: 'is a species of holly native to eastern North America in the United States and southeastern Canada. The species occurs particularly in wetland habitats but also on dry sand dunes and grassland.',
    image: WinterberryHolly
  }, {
    name: 'Woodland Strawberry',
    category: 'Flora',
    description: 'A herbaceous plant in the rose family that grows naturally throughout much of the Northern Hemisphere and that produces edible fruits.',
    image: WoodlandStrawberry
  }, {
    name: 'Yellow Birch',
    category: 'Flora',
    description: 'A large tree species of birch native to northeastern North America.',
    image: YellowBirch
  }
];

export default data;
