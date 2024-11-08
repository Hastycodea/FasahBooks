import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const TopBooks = () => {
  const books = [
  {
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "image": "/things-fall-apart.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "name": "Things Fall Apart",
    "year": 1958
  },
  {
    "author": "Hans Christian Andersen",
    "country": "Denmark",
    "image": "/fairy-tales.jpg",
    "language": "Danish",
    "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    "pages": 784,
    "name": "Fairy tales",
    "year": 1836
  },
  {
    "author": "Dante Alighieri",
    "country": "Italy",
    "image": "/the-divine-comedy.jpg",
    "language": "Italian",
    "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
    "pages": 928,
    "name": "The Divine Comedy",
    "year": 1315
  },
  {
    "author": "Unknown",
    "country": "Sumer and Akkadian Empire",
    "image": "/the-epic-of-gilgamesh.jpg",
    "language": "Akkadian",
    "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
    "pages": 160,
    "name": "The Epic Of Gilgamesh",
    "year": -1700
  },
  {
    "author": "Unknown",
    "country": "Achaemenid Empire",
    "image": "/the-book-of-job.jpg",
    "language": "Hebrew",
    "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
    "pages": 176,
    "name": "The Book Of Job",
    "year": -600
  },
  {
    "author": "Unknown",
    "country": "India/Iran/Iraq/Egypt/Tajikistan",
    "image": "/one-thousand-and-one-nights.jpg",
    "language": "Arabic",
    "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
    "pages": 288,
    "name": "One Thousand and One Nights",
    "year": 1200
  },
  {
    "author": "Unknown",
    "country": "Iceland",
    "image": "/njals-saga.jpg",
    "language": "Old Norse",
    "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
    "pages": 384,
    "name": "Nj\u00e1l's Saga",
    "year": 1350
  },
  {
    "author": "Jane Austen",
    "country": "United Kingdom",
    "image": "/pride-and-prejudice.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
    "pages": 226,
    "name": "Pride and Prejudice",
    "year": 1813
  },
  {
    "author": "Honor\u00e9 de Balzac",
    "country": "France",
    "image": "/le-pere-goriot.jpg",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
    "pages": 443,
    "name": "Le P\u00e8re Goriot",
    "year": 1835
  },
  {
    "author": "Samuel Beckett",
    "country": "Republic of Ireland",
    "image": "/molloy-malone-dies-the-unnamable.jpg",
    "language": "French, English",
    "link": "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
    "pages": 256,
    "name": "Molloy, Malone Dies, The Unnamable, the trilogy",
    "year": 1952
  },
  {
    "author": "Giovanni Boccaccio",
    "country": "Italy",
    "image": "/the-decameron.jpg",
    "language": "Italian",
    "link": "https://en.wikipedia.org/wiki/The_Decameron\n",
    "pages": 1024,
    "name": "The Decameron",
    "year": 1351
  },
  {
    "author": "Jorge Luis Borges",
    "country": "Argentina",
    "image": "/ficciones.jpg",
    "language": "Spanish",
    "link": "https://en.wikipedia.org/wiki/Ficciones\n",
    "pages": 224,
    "name": "Ficciones",
    "year": 1965
  },
  {
    "author": "Emily Bront\u00eb",
    "country": "United Kingdom",
    "image": "/wuthering-heights.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
    "pages": 342,
    "name": "Wuthering Heights",
    "year": 1847
  },
  {
    "author": "Albert Camus",
    "country": "Algeria, French Empire",
    "image": "/l-etranger.jpg",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/The_Stranger_(novel)\n",
    "pages": 185,
    "name": "The Stranger",
    "year": 1942
  },
  {
    "author": "Paul Celan",
    "country": "Romania, France",
    "image": "/poems-paul-celan.jpg",
    "language": "German",
    "link": "\n",
    "pages": 320,
    "name": "Poems",
    "year": 1952
  },
  {
    "author": "Louis-Ferdinand C\u00e9line",
    "country": "France",
    "image": "/voyage-au-bout-de-la-nuit.jpg",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night\n",
    "pages": 505,
    "name": "Journey to the End of the Night",
    "year": 1932
  },
  {
    "author": "Miguel de Cervantes",
    "country": "Spain",
    "image": "/don-quijote-de-la-mancha.jpg",
    "language": "Spanish",
    "link": "https://en.wikipedia.org/wiki/Don_Quixote\n",
    "pages": 1056,
    "name": "Don Quijote De La Mancha",
    "year": 1610
  },
  {
    "author": "Geoffrey Chaucer",
    "country": "England",
    "image": "/the-canterbury-tales.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/The_Canterbury_Tales\n",
    "pages": 544,
    "name": "The Canterbury Tales",
    "year": 1450
  },
  {
    "author": "Anton Chekhov",
    "country": "Russia",
    "image": "/stories-of-anton-chekhov.jpg",
    "language": "Russian",
    "link": "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov\n",
    "pages": 194,
    "name": "Stories",
    "year": 1886
  },
  {
    "author": "Joseph Conrad",
    "country": "United Kingdom",
    "image": "/nostromo.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Nostromo\n",
    "pages": 320,
    "name": "Nostromo",
    "year": 1904
  },
  {
    "author": "Charles Dickens",
    "country": "United Kingdom",
    "image": "/great-expectations.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Great_Expectations\n",
    "pages": 194,
    "name": "Great Expectations",
    "year": 1861
  },
  {
    "author": "Denis Diderot",
    "country": "France",
    "image": "/jacques-the-fatalist.jpg",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/Jacques_the_Fatalist\n",
    "pages": 596,
    "name": "Jacques the Fatalist",
    "year": 1796
  },
  {
    "author": "Alfred D\u00f6blin",
    "country": "Germany",
    "image": "/berlin-alexanderplatz.jpg",
    "language": "German",
    "link": "https://en.wikipedia.org/wiki/Berlin_Alexanderplatz\n",
    "pages": 600,
    "name": "Berlin Alexanderplatz",
    "year": 1929
  },
  {
    "author": "Fyodor Dostoevsky",
    "country": "Russia",
    "image": "/crime-and-punishment.jpg",
    "language": "Russian",
    "link": "https://en.wikipedia.org/wiki/Crime_and_Punishment\n",
    "pages": 551,
    "name": "Crime and Punishment",
    "year": 1866
  },
  {
    "author": "Fyodor Dostoevsky",
    "country": "Russia",
    "image": "/the-idiot.jpg",
    "language": "Russian",
    "link": "https://en.wikipedia.org/wiki/The_Idiot\n",
    "pages": 656,
    "name": "The Idiot",
    "year": 1869
  },
  {
    "author": "Fyodor Dostoevsky",
    "country": "Russia",
    "image": "/the-possessed.jpg",
    "language": "Russian",
    "link": "https://en.wikipedia.org/wiki/Demons_(Dostoyevsky_novel)\n",
    "pages": 768,
    "name": "The Possessed",
    "year": 1872
  },
  {
    "author": "Fyodor Dostoevsky",
    "country": "Russia",
    "image": "/the-brothers-karamazov.jpg",
    "language": "Russian",
    "link": "https://en.wikipedia.org/wiki/The_Brothers_Karamazov\n",
    "pages": 824,
    "name": "The Brothers Karamazov",
    "year": 1880
  },
  {
    "author": "George Eliot",
    "country": "United Kingdom",
    "image": "/middlemarch.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Middlemarch\n",
    "pages": 800,
    "name": "Middlemarch",
    "year": 1871
  },
  {
    "author": "Ralph Ellison",
    "country": "United States",
    "image": "/invisible-man.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Invisible_Man\n",
    "pages": 581,
    "name": "Invisible Man",
    "year": 1952
  },
  {
    "author": "Euripides",
    "country": "Greece",
    "image": "/medea.jpg",
    "language": "Greek",
    "link": "https://en.wikipedia.org/wiki/Medea_(play)\n",
    "pages": 104,
    "name": "Medea",
    "year": -431
  },
  {
    "author": "William Faulkner",
    "country": "United States",
    "image": "/absalom-absalom.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Absalom,_Absalom!\n",
    "pages": 313,
    "name": "Absalom, Absalom!",
    "year": 1936
  },
  {
    "author": "William Faulkner",
    "country": "United States",
    "image": "/the-sound-and-the-fury.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/The_Sound_and_the_Fury\n",
    "pages": 326,
    "name": "The Sound and the Fury",
    "year": 1929
  },
  {
    "author": "Gustave Flaubert",
    "country": "France",
    "image": "/madame-bovary.jpg",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/Madame_Bovary\n",
    "pages": 528,
    "name": "Madame Bovary",
    "year": 1857
  },
  {
    "author": "Gustave Flaubert",
    "country": "France",
    "image": "/l-education-sentimentale.jpg",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/Sentimental_Education\n",
    "pages": 606,
    "name": "Sentimental Education",
    "year": 1869
  },
  {
    "author": "Federico Garc\u00eda Lorca",
    "country": "Spain",
    "image": "/gypsy-ballads.jpg",
    "language": "Spanish",
    "link": "https://en.wikipedia.org/wiki/Gypsy_Ballads\n",
    "pages": 218,
    "name": "Gypsy Ballads",
    "year": 1928
  },
  {
    "author": "Gabriel Garc\u00eda M\u00e1rquez",
    "country": "Colombia",
    "image": "/one-hundred-years-of-solitude.jpg",
    "language": "Spanish",
    "link": "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude\n",
    "pages": 417,
    "name": "One Hundred Years of Solitude",
    "year": 1967
  },
  {
    "author": "Gabriel Garc\u00eda M\u00e1rquez",
    "country": "Colombia",
    "image": "/love-in-the-time-of-cholera.jpg",
    "language": "Spanish",
    "link": "https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera\n",
    "pages": 368,
    "name": "Love in the Time of Cholera",
    "year": 1985
  },
  {
    "author": "Johann Wolfgang von Goethe",
    "country": "Saxe-Weimar",
    "image": "/faust.jpg",
    "language": "German",
    "link": "https://en.wikipedia.org/wiki/Goethe%27s_Faust\n",
    "pages": 158,
    "name": "Faust",
    "year": 1832
  },
  {
    "author": "Nikolai Gogol",
    "country": "Russia",
    "image": "/dead-souls.jpg",
    "language": "Russian",
    "link": "https://en.wikipedia.org/wiki/Dead_Souls\n",
    "pages": 432,
    "name": "Dead Souls",
    "year": 1842
  },
  {
    "author": "G\u00fcnter Grass",
    "country": "Germany",
    "image": "/the-tin-drum.jpg",
    "language": "German",
    "link": "https://en.wikipedia.org/wiki/The_Tin_Drum\n",
    "pages": 600,
    "name": "The Tin Drum",
    "year": 1959
  },
  {
    "author": "Jo\u00e3o Guimar\u00e3es Rosa",
    "country": "Brazil",
    "image": "/the-devil-to-pay-in-the-backlands.jpg",
    "language": "Portuguese",
    "link": "https://en.wikipedia.org/wiki/The_Devil_to_Pay_in_the_Backlands\n",
    "pages": 494,
    "name": "The Devil to Pay in the Backlands",
    "year": 1956
  },
  {
    "author": "Knut Hamsun",
    "country": "Norway",
    "image": "/hunger.jpg",
    "language": "Norwegian",
    "link": "https://en.wikipedia.org/wiki/Hunger_(Hamsun_novel)\n",
    "pages": 176,
    "name": "Hunger",
    "year": 1890
  },
  {
    "author": "Ernest Hemingway",
    "country": "United States",
    "image": "/the-old-man-and-the-sea.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea\n",
    "pages": 128,
    "name": "The Old Man and the Sea",
    "year": 1952
  },
  {
    "author": "Homer",
    "country": "Greece",
    "image": "/the-iliad-of-homer.jpg",
    "language": "Greek",
    "link": "https://en.wikipedia.org/wiki/Iliad\n",
    "pages": 608,
    "name": "Iliad",
    "year": -735
  },
  {
    "author": "Homer",
    "country": "Greece",
    "image": "/the-odyssey-of-homer.jpg",
    "language": "Greek",
    "link": "https://en.wikipedia.org/wiki/Odyssey\n",
    "pages": 374,
    "name": "Odyssey",
    "year": -800
  },
  {
    "author": "Henrik Ibsen",
    "country": "Norway",
    "image": "/a-Dolls-house.jpg",
    "language": "Norwegian",
    "link": "https://en.wikipedia.org/wiki/A_Doll%27s_House\n",
    "pages": 68,
    "name": "A Doll's House",
    "year": 1879
  },
  {
    "author": "James Joyce",
    "country": "Irish Free State",
    "image": "/ulysses.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Ulysses_(novel)\n",
    "pages": 228,
    "name": "Ulysses",
    "year": 1922
  },
  {
    "author": "Franz Kafka",
    "country": "Czechoslovakia",
    "image": "/stories-of-franz-kafka.jpg",
    "language": "German",
    "link": "https://en.wikipedia.org/wiki/Franz_Kafka_bibliography#Short_stories\n",
    "pages": 488,
    "name": "Stories",
    "year": 1924
  },
  {
    "author": "Franz Kafka",
    "country": "Czechoslovakia",
    "image": "/the-trial.jpg",
    "language": "German",
    "link": "https://en.wikipedia.org/wiki/The_Trial\n",
    "pages": 160,
    "name": "The Trial",
    "year": 1925
  },
  {
    "author": "Franz Kafka",
    "country": "Czechoslovakia",
    "image": "/the-castle.jpg",
    "language": "German",
    "link": "https://en.wikipedia.org/wiki/The_Castle_(novel)\n",
    "pages": 352,
    "name": "The Castle",
    "year": 1926
  },
  {
    "author": "K\u0101lid\u0101sa",
    "country": "India",
    "image": "/the-recognition-of-shakuntala.jpg",
    "language": "Sanskrit",
    "link": "https://en.wikipedia.org/wiki/Abhij%C3%B1%C4%81na%C5%9B%C4%81kuntalam\n",
    "pages": 147,
    "name": "The recognition of Shakuntala",
    "year": 150
  },
  {
    "author": "Yasunari Kawabata",
    "country": "Japan",
    "image": "/the-sound-of-the-mountain.jpg",
    "language": "Japanese",
    "link": "https://en.wikipedia.org/wiki/The_Sound_of_the_Mountain\n",
    "pages": 288,
    "name": "The Sound of the Mountain",
    "year": 1954
  },
  {
    "author": "Nikos Kazantzakis",
    "country": "Greece",
    "image": "/zorba-the-greek.jpg",
    "language": "Greek",
    "link": "https://en.wikipedia.org/wiki/Zorba_the_Greek\n",
    "pages": 368,
    "name": "Zorba the Greek",
    "year": 1946
  },
  {
    "author": "D. H. Lawrence",
    "country": "United Kingdom",
    "image": "/sons-and-lovers.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Sons_and_Lovers\n",
    "pages": 432,
    "name": "Sons and Lovers",
    "year": 1913
  },
  {
    "author": "Halld\u00f3r Laxness",
    "country": "Iceland",
    "image": "/independent-people.jpg",
    "language": "Icelandic",
    "link": "https://en.wikipedia.org/wiki/Independent_People\n",
    "pages": 470,
    "name": "Independent People",
    "year": 1934
  },
  {
    "author": "Giacomo Leopardi",
    "country": "Italy",
    "image": "/poems-giacomo-leopardi.jpg",
    "language": "Italian",
    "link": "\n",
    "pages": 184,
    "name": "Poems",
    "year": 1818
  },
  {
    "author": "Doris Lessing",
    "country": "United Kingdom",
    "image": "/the-golden-notebook.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/The_Golden_Notebook\n",
    "pages": 688,
    "name": "The Golden Notebook",
    "year": 1962
  },
  {
    "author": "Astrid Lindgren",
    "country": "Sweden",
    "image": "/pippi-longstocking.jpg",
    "language": "Swedish",
    "link": "https://en.wikipedia.org/wiki/Pippi_Longstocking\n",
    "pages": 160,
    "name": "Pippi Longstocking",
    "year": 1945
  },
  {
    "author": "Lu Xun",
    "country": "China",
    "image": "/diary-of-a-madman.jpg",
    "language": "Chinese",
    "link": "https://en.wikipedia.org/wiki/A_Madman%27s_Diary\n",
    "pages": 389,
    "name": "Diary of a Madman",
    "year": 1918
  },
  {
    "author": "Naguib Mahfouz",
    "country": "Egypt",
    "image": "/children-of-gebelawi.jpg",
    "language": "Arabic",
    "link": "https://en.wikipedia.org/wiki/Children_of_Gebelawi\n",
    "pages": 355,
    "name": "Children of Gebelawi",
    "year": 1959
  },
  {
    "author": "Thomas Mann",
    "country": "Germany",
    "image": "/buddenbrooks.jpg",
    "language": "German",
    "link": "https://en.wikipedia.org/wiki/Buddenbrooks\n",
    "pages": 736,
    "name": "Buddenbrooks",
    "year": 1901
  },
  {
    "author": "Thomas Mann",
    "country": "Germany",
    "image": "/the-magic-mountain.jpg",
    "language": "German",
    "link": "https://en.wikipedia.org/wiki/The_Magic_Mountain\n",
    "pages": 720,
    "name": "The Magic Mountain",
    "year": 1924
  },
  {
    "author": "Herman Melville",
    "country": "United States",
    "image": "/moby-dick.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Moby-Dick\n",
    "pages": 378,
    "name": "Moby Dick",
    "year": 1851
  },
  {
    "author": "Michel de Montaigne",
    "country": "France",
    "image": "/essais.jpg",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/Essays_(Montaigne)\n",
    "pages": 404,
    "name": "Essays",
    "year": 1595
  },
  {
    "author": "Elsa Morante",
    "country": "Italy",
    "image": "/history.jpg",
    "language": "Italian",
    "link": "https://en.wikipedia.org/wiki/History_(novel)\n",
    "pages": 600,
    "name": "History",
    "year": 1974
  },
  {
    "author": "Toni Morrison",
    "country": "United States",
    "image": "/beloved.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Beloved_(novel)\n",
    "pages": 321,
    "name": "Beloved",
    "year": 1987
  },
  {
    "author": "Murasaki Shikibu",
    "country": "Japan",
    "image": "/the-tale-of-genji.jpg",
    "language": "Japanese",
    "link": "https://en.wikipedia.org/wiki/The_Tale_of_Genji\n",
    "pages": 1360,
    "name": "The Tale of Genji",
    "year": 1006
  },
  {
    "author": "Robert Musil",
    "country": "Austria",
    "image": "/the-man-without-qualities.jpg",
    "language": "German",
    "link": "https://en.wikipedia.org/wiki/The_Man_Without_Qualities\n",
    "pages": 365,
    "name": "The Man Without Qualities",
    "year": 1931
  },
  {
    "author": "Vladimir Nabokov",
    "country": "Russia/United States",
    "image": "/lolita.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Lolita\n",
    "pages": 317,
    "name": "Lolita",
    "year": 1955
  },
  {
    "author": "George Orwell",
    "country": "United Kingdom",
    "image": "/nineteen-eighty-four.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four\n",
    "pages": 272,
    "name": "Nineteen Eighty-Four",
    "year": 1949
  },
  {
    "author": "Ovid",
    "country": "Roman Empire",
    "image": "/the-metamorphoses-of-ovid.jpg",
    "language": "Classical Latin",
    "link": "https://en.wikipedia.org/wiki/Metamorphoses\n",
    "pages": 576,
    "name": "Metamorphoses",
    "year": 100
  },
  {
    "author": "Fernando Pessoa",
    "country": "Portugal",
    "image": "/the-book-of-disquiet.jpg",
    "language": "Portuguese",
    "link": "https://en.wikipedia.org/wiki/The_Book_of_Disquiet\n",
    "pages": 272,
    "name": "The Book of Disquiet",
    "year": 1928
  },
  {
    "author": "Edgar Allan Poe",
    "country": "United States",
    "image": "/tales-and-poems-of-edgar-allan-poe.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Edgar_Allan_Poe_bibliography#Tales\n",
    "pages": 842,
    "name": "Tales",
    "year": 1950
  },
  {
    "author": "Marcel Proust",
    "country": "France",
    "image": "/a-la-recherche-du-temps-perdu.jpg",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/In_Search_of_Lost_Time\n",
    "pages": 2408,
    "name": "In Search of Lost Time",
    "year": 1920
  },
  {
    "author": "Fran\u00e7ois Rabelais",
    "country": "France",
    "image": "/gargantua-and-pantagruel.jpg",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel\n",
    "pages": 623,
    "name": "Gargantua and Pantagruel",
    "year": 1533
  },
  {
    "author": "Juan Rulfo",
    "country": "Mexico",
    "image": "/pedro-paramo.jpg",
    "language": "Spanish",
    "link": "https://en.wikipedia.org/wiki/Pedro_P%C3%A1ramo\n",
    "pages": 124,
    "name": "Pedro P\u00e1ramo",
    "year": 1955
  },
  {
    "author": "Rumi",
    "country": "Sultanate of Rum",
    "image": "/the-masnavi.jpg",
    "language": "Persian",
    "link": "https://en.wikipedia.org/wiki/Masnavi\n",
    "pages": 438,
    "name": "The Masnavi",
    "year": 1236
  },
  {
    "author": "Salman Rushdie",
    "country": "United Kingdom, India",
    "image": "/midnights-children.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Midnight%27s_Children\n",
    "pages": 536,
    "name": "Midnight's Children",
    "year": 1981
  },
  {
    "author": "Saadi",
    "country": "Persia, Persian Empire",
    "image": "/bostan.jpg",
    "language": "Persian",
    "link": "https://en.wikipedia.org/wiki/Bustan_(book)\n",
    "pages": 298,
    "name": "Bostan",
    "year": 1257
  },
  {
    "author": "Tayeb Salih",
    "country": "Sudan",
    "image": "/season-of-migration-to-the-north.jpg",
    "language": "Arabic",
    "link": "https://en.wikipedia.org/wiki/Season_of_Migration_to_the_North\n",
    "pages": 139,
    "name": "Season of Migration to the North",
    "year": 1966
  },
  {
    "author": "Jos\u00e9 Saramago",
    "country": "Portugal",
    "image": "/blindness.jpg",
    "language": "Portuguese",
    "link": "https://en.wikipedia.org/wiki/Blindness_(novel)\n",
    "pages": 352,
    "name": "Blindness",
    "year": 1995
  },
  {
    "author": "William Shakespeare",
    "country": "England",
    "image": "/hamlet.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Hamlet\n",
    "pages": 432,
    "name": "Hamlet",
    "year": 1603
  },
  {
    "author": "William Shakespeare",
    "country": "England",
    "image": "/king-lear.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/King_Lear\n",
    "pages": 384,
    "name": "King Lear",
    "year": 1608
  },
  {
    "author": "William Shakespeare",
    "country": "England",
    "image": "/othello.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Othello\n",
    "pages": 314,
    "name": "Othello",
    "year": 1609
  },
  {
    "author": "Sophocles",
    "country": "Greece",
    "image": "/oedipus-the-king.jpg",
    "language": "Greek",
    "link": "https://en.wikipedia.org/wiki/Oedipus_the_King\n",
    "pages": 88,
    "name": "Oedipus the King",
    "year": -430
  },
  {
    "author": "Stendhal",
    "country": "France",
    "image": "/le-rouge-et-le-noir.jpg",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/The_Red_and_the_Black\n",
    "pages": 576,
    "name": "The Red and the Black",
    "year": 1830
  },
  {
    "author": "Laurence Sterne",
    "country": "England",
    "image": "/the-life-and-opinions-of-tristram-shandy.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/The_Life_and_Opinions_of_Tristram_Shandy,_Gentleman\n",
    "pages": 640,
    "name": "The Life And Opinions of Tristram Shandy",
    "year": 1760
  },
  {
    "author": "Italo Svevo",
    "country": "Italy",
    "image": "/confessions-of-zeno.jpg",
    "language": "Italian",
    "link": "https://en.wikipedia.org/wiki/Zeno%27s_Conscience\n",
    "pages": 412,
    "name": "Confessions of Zeno",
    "year": 1923
  },
  {
    "author": "Jonathan Swift",
    "country": "Ireland",
    "image": "/gullivers-travels.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Gulliver%27s_Travels\n",
    "pages": 178,
    "name": "Gulliver's Travels",
    "year": 1726
  },
  {
    "author": "Leo Tolstoy",
    "country": "Russia",
    "image": "/war-and-peace.jpg",
    "language": "Russian",
    "link": "https://en.wikipedia.org/wiki/War_and_Peace\n",
    "pages": 1296,
    "name": "War and Peace",
    "year": 1867
  },
  {
    "author": "Leo Tolstoy",
    "country": "Russia",
    "image": "/anna-karenina.jpg",
    "language": "Russian",
    "link": "https://en.wikipedia.org/wiki/Anna_Karenina\n",
    "pages": 864,
    "name": "Anna Karenina",
    "year": 1877
  },
  {
    "author": "Leo Tolstoy",
    "country": "Russia",
    "image": "/the-death-of-ivan-ilyich.jpg",
    "language": "Russian",
    "link": "https://en.wikipedia.org/wiki/The_Death_of_Ivan_Ilyich\n",
    "pages": 92,
    "name": "The Death of Ivan Ilyich",
    "year": 1886
  },
  {
    "author": "Mark Twain",
    "country": "United States",
    "image": "/the-adventures-of-huckleberry-finn.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn\n",
    "pages": 224,
    "name": "The Adventures of Huckleberry Finn",
    "year": 1884
  },
  {
    "author": "Valmiki",
    "country": "India",
    "image": "/ramayana.jpg",
    "language": "Sanskrit",
    "link": "https://en.wikipedia.org/wiki/Ramayana\n",
    "pages": 152,
    "name": "Ramayana",
    "year": -450
  },
  {
    "author": "Virgil",
    "country": "Roman Empire",
    "image": "/the-aeneid.jpg",
    "language": "Classical Latin",
    "link": "https://en.wikipedia.org/wiki/Aeneid\n",
    "pages": 442,
    "name": "The Aeneid",
    "year": -23
  },
  {
    "author": "Vyasa",
    "country": "India",
    "image": "/the-mahab-harata.jpg",
    "language": "Sanskrit",
    "link": "https://en.wikipedia.org/wiki/Mahabharata\n",
    "pages": 276,
    "name": "Mahabharata",
    "year": -700
  },
  {
    "author": "Walt Whitman",
    "country": "United States",
    "image": "/leaves-of-grass.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Leaves_of_Grass\n",
    "pages": 152,
    "name": "Leaves of Grass",
    "year": 1855
  },
  {
    "author": "Virginia Woolf",
    "country": "United Kingdom",
    "image": "/mrs-dalloway.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Mrs_Dalloway\n",
    "pages": 216,
    "name": "Mrs Dalloway",
    "year": 1925
  },
  {
    "author": "Virginia Woolf",
    "country": "United Kingdom",
    "image": "/to-the-lighthouse.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/To_the_Lighthouse\n",
    "pages": 209,
    "name": "To the Lighthouse",
    "year": 1927
  },
  {
    "author": "Marguerite Yourcenar",
    "country": "France/Belgium",
    "image": "/memoirs-of-hadrian.jpg",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/Memoirs_of_Hadrian\n",
    "pages": 408,
    "name": "Memoirs of Hadrian",
    "year": 1951
  }
  ];
  return (
    <div className="w-[100%]">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 px-6">
        {books.map((book) => (
          // eslint-disable-next-line react/jsx-key
          <div className="flex flex-col group relative">
            <img
              src={book.image}
              alt=""
              className="h-[280px] w-[100%] object-contain hover:scale-95 duration-300 ease-out"
            />
            <div className="hidden md:group-hover:flex absolute  flex-col space-y-[130px]  md:px-5  md:py-3 top-0 right-0 my-3 md:my:0">
              <div className="flex flex-col space-y-2">
                <FontAwesomeIcon
                  className="hover:text-[#DB980A] duration-300 bg-white p-2 rounded-[50%] shadow-md text-gray-600"
                  icon={faHeart}
                />
                <FontAwesomeIcon
                  className="hover:text-[#DB980A] duration-300 bg-white p-2 rounded-[50%] shadow-md text-gray-600"
                  icon={faEye}
                />
              </div>
              <FontAwesomeIcon
                className="hover:text-[#DB980A] duration-300 bg-white p-2 rounded-[50%] shadow-md text-gray-600 "
                icon={faCartShopping}
              />
            </div>
            <p className="text-sm text-gray-500">{book.name}</p>
            <p className="text-sm text-gray-500">{book.price}</p>
            <div className="flex md:hidden items-center justify-between mx-auto space-x-2 ">
              <FontAwesomeIcon
                className="hover:text-[#DB980A] duration-300 bg-white p-2 rounded-[50%] shadow-md text-gray-600"
                icon={faHeart}
              />
              <FontAwesomeIcon
                className="hover:text-[#DB980A] duration-300 bg-white p-2 rounded-[50%] shadow-md text-gray-600 "
                icon={faCartShopping}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBooks;
