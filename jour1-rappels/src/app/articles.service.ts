import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private _data = [
    {
      "_id": "61b76c30028344a0596150f2",
      "titre": "proident et id",
      "contenu": "Anim cillum et enim labore consequat ea commodo sunt. Ullamco id id deserunt voluptate aliquip. Aliqua incididunt cupidatat consequat consequat labore aliqua elit ex et. Do non enim incididunt qui magna eu.\r\nCulpa cillum nisi adipisicing nulla esse nostrud exercitation magna labore enim laboris. Dolore reprehenderit cillum elit sunt. Reprehenderit nisi id culpa esse tempor elit. Et anim et ea adipisicing sunt aute reprehenderit labore. Eiusmod ut elit veniam nisi amet consectetur proident ad excepteur exercitation. Sint ipsum est amet reprehenderit dolore ipsum et ullamco consequat aute minim pariatur.\r\n",
      "tags": [
        "voluptate",
        "sint",
        "nostrud",
        "in",
        "ea",
        "cillum",
        "cupidatat"
      ]
    },
    {
      "_id": "61b76c30a7adf713a75b57e3",
      "titre": "Lorem magna esse",
      "contenu": "Consequat est ex nostrud excepteur dolor laborum culpa sint Lorem esse culpa ex. Laboris aliquip ad laboris adipisicing enim. Velit magna magna eiusmod in tempor laboris sunt voluptate. Qui adipisicing laborum non duis. Occaecat magna irure dolor ullamco labore.\r\nExcepteur est culpa nulla aute aliqua elit nisi dolore consectetur. Nulla irure ipsum excepteur amet. Ex pariatur fugiat dolor et ad ullamco. Amet consequat sit reprehenderit amet mollit est et occaecat. Ipsum eiusmod est nisi dolor aliqua nisi voluptate nostrud. Tempor veniam do ad officia. Cupidatat fugiat ullamco quis minim tempor veniam.\r\n",
      "tags": [
        "tempor",
        "sit",
        "fugiat",
        "sint",
        "irure",
        "labore",
        "nulla"
      ]
    },
    {
      "_id": "61b76c3013d7089c9dc63339",
      "titre": "nisi dolor nulla",
      "contenu": "Magna eu aute fugiat velit elit reprehenderit ullamco sunt esse reprehenderit cupidatat irure quis. Do eiusmod labore nulla cillum id ea cupidatat ipsum nostrud in. Reprehenderit sint ea ad ex culpa duis.\r\nExcepteur minim adipisicing aliquip exercitation eu eiusmod anim. Dolor culpa commodo sunt pariatur et. Minim ad exercitation ea ad ea tempor nisi sunt tempor tempor anim. Qui labore culpa laborum consectetur dolor consequat Lorem. Magna voluptate veniam non id irure excepteur. Sunt nostrud occaecat laborum labore pariatur id sit deserunt velit ullamco occaecat mollit eiusmod nulla. Laborum nostrud deserunt dolor aliqua.\r\n",
      "tags": [
        "duis",
        "anim",
        "magna",
        "esse",
        "reprehenderit",
        "dolor",
        "ea"
      ]
    },
    {
      "_id": "61b76c30d3aa759dd76b24b7",
      "titre": "nulla duis dolor",
      "contenu": "Fugiat nisi amet et mollit. Aliquip ullamco commodo quis magna aliquip id deserunt eu. Qui officia sit dolore adipisicing et eu nulla enim. Consequat commodo Lorem sunt ipsum deserunt aliquip culpa pariatur nostrud do veniam duis dolor sunt.\r\nQuis commodo adipisicing laboris nisi non anim ut fugiat. Deserunt aliquip qui minim proident. Aliqua occaecat aliqua amet id aliquip anim excepteur do nulla sint laborum duis exercitation sunt. Do ullamco et reprehenderit cillum ea esse incididunt do anim anim veniam proident nulla officia.\r\n",
      "tags": [
        "Lorem",
        "nostrud",
        "est",
        "sit",
        "ullamco",
        "enim",
        "incididunt"
      ]
    },
    {
      "_id": "61b76c30afcfc4a933e0ac7d",
      "titre": "eu consequat quis",
      "contenu": "Ea cillum laboris enim dolore velit minim ex pariatur. Consequat tempor veniam fugiat culpa aute nostrud et duis sit aliquip. Pariatur sit aliquip esse voluptate ut ad.\r\nVelit nostrud sint amet veniam qui aliqua dolor Lorem ipsum sint aliqua mollit. In veniam eiusmod enim commodo veniam ipsum dolor. Occaecat Lorem commodo culpa velit enim officia.\r\n",
      "tags": [
        "nulla",
        "sint",
        "cupidatat",
        "amet",
        "proident",
        "quis",
        "excepteur"
      ]
    },
    {
      "_id": "61b76c30b4655a79a64bb74f",
      "titre": "exercitation sit adipisicing",
      "contenu": "Commodo occaecat aliqua irure culpa eiusmod sit esse deserunt exercitation sint commodo sit. Est deserunt mollit do tempor culpa laborum est enim tempor ipsum elit laboris. Quis eu et pariatur excepteur sunt incididunt labore.\r\nNostrud eiusmod aute aliqua fugiat ullamco culpa anim commodo in culpa enim ea enim. Dolore tempor ad exercitation in deserunt culpa laborum aliquip. Excepteur commodo eiusmod elit quis.\r\n",
      "tags": [
        "pariatur",
        "officia",
        "sit",
        "sit",
        "cillum",
        "exercitation",
        "aliqua"
      ]
    },
    {
      "_id": "61b76c30d6b6d2c203764172",
      "titre": "incididunt mollit irure",
      "contenu": "Labore elit non ullamco laboris in elit ad reprehenderit sint ad id nisi. Laboris cillum non commodo velit ut aliquip quis ex voluptate. Non elit mollit sint excepteur. Eu velit deserunt consectetur labore aute culpa aute cupidatat consequat. Occaecat Lorem laborum amet sint qui ipsum elit. Irure sit aliquip exercitation ea amet laborum do tempor laborum. Nostrud eu ad dolor est.\r\nCulpa ut ad ea proident sit consequat irure mollit excepteur amet. Elit culpa minim anim voluptate ullamco consequat aute occaecat eu commodo est nostrud. Exercitation sunt nisi consectetur elit cupidatat laborum nostrud officia sint. Nostrud enim adipisicing aliqua do ipsum eiusmod sit sunt eiusmod aliquip. Qui cillum nisi culpa tempor veniam laborum incididunt sunt. Dolore nostrud ex eiusmod dolore. Ipsum commodo elit laborum elit velit dolore dolor aliquip reprehenderit cupidatat consequat consequat.\r\n",
      "tags": [
        "tempor",
        "tempor",
        "nulla",
        "sit",
        "labore",
        "labore",
        "culpa"
      ]
    },
    {
      "_id": "61b76c3023301f1a4e7ee914",
      "titre": "minim laborum irure",
      "contenu": "Ipsum cillum aliqua irure consectetur ut deserunt id officia aute amet magna deserunt. Aute proident mollit adipisicing in anim cupidatat aliqua sunt aliquip sit et. Ullamco quis sunt cillum id commodo.\r\nLabore nulla labore consequat sunt pariatur reprehenderit voluptate mollit in. Ea veniam occaecat labore enim incididunt occaecat voluptate mollit exercitation culpa sit Lorem sit. Ad veniam commodo consectetur magna consectetur non. Ut velit esse tempor tempor cupidatat ex.\r\n",
      "tags": [
        "irure",
        "elit",
        "commodo",
        "Lorem",
        "ipsum",
        "esse",
        "aliqua"
      ]
    },
    {
      "_id": "61b76c309546eeea64d6f26c",
      "titre": "cillum velit exercitation",
      "contenu": "Sint esse et laboris quis laborum voluptate aliquip dolore. Consectetur sint eiusmod laborum aute veniam dolore dolore aute in. Velit deserunt sit elit adipisicing cillum incididunt incididunt ex. Fugiat occaecat aliquip exercitation proident eu labore tempor proident ullamco exercitation ea est aliqua. Adipisicing enim laborum nisi culpa sit laboris ea mollit mollit laboris et cillum adipisicing. Voluptate aliqua ullamco culpa est id eiusmod fugiat officia. Exercitation anim sit irure proident ullamco anim occaecat ad do enim dolore enim labore.\r\nEa cupidatat ad sint id tempor elit ad cillum reprehenderit esse. Laboris laboris dolor non dolore occaecat ea veniam commodo in. Dolore exercitation commodo eu incididunt fugiat.\r\n",
      "tags": [
        "exercitation",
        "ea",
        "aliqua",
        "id",
        "incididunt",
        "veniam",
        "dolore"
      ]
    },
    {
      "_id": "61b76c30c8ce7bd1df6b42ff",
      "titre": "sint commodo quis",
      "contenu": "Et dolor enim non qui sit quis sint non velit officia. Occaecat cillum magna sunt fugiat ad aliquip laboris eu nostrud. Voluptate id enim nulla sit ex. Fugiat deserunt non anim esse esse deserunt.\r\nConsectetur tempor veniam sit adipisicing ea excepteur ipsum. Sunt sint sint laboris dolore. Exercitation dolor nisi proident velit aliquip occaecat dolor tempor exercitation non.\r\n",
      "tags": [
        "labore",
        "exercitation",
        "laborum",
        "cillum",
        "qui",
        "quis",
        "minim"
      ]
    },
    {
      "_id": "61b76c30f5bbdc7fbb5a0ef4",
      "titre": "esse consequat sint",
      "contenu": "Voluptate do Lorem eu nulla fugiat ex. Anim ullamco dolore laboris tempor proident in cupidatat enim. Est eu in id ea duis esse et occaecat magna consectetur est nostrud sunt dolor. Nostrud culpa dolore est do qui.\r\nQui cupidatat aliqua dolor dolor anim commodo enim nostrud dolore. Minim ad consectetur minim est veniam. Magna ipsum voluptate occaecat ut. In cupidatat ut enim non ea aute excepteur pariatur eu consectetur laboris labore. Dolor magna cillum nostrud eiusmod commodo sit sit. Eiusmod proident esse nostrud eiusmod quis culpa velit veniam cillum sint do.\r\n",
      "tags": [
        "culpa",
        "ea",
        "ex",
        "magna",
        "velit",
        "dolore",
        "ad"
      ]
    },
    {
      "_id": "61b76c30f4bdacf39d4b1f04",
      "titre": "ipsum anim cupidatat",
      "contenu": "Cupidatat dolore aliquip qui tempor commodo pariatur nulla mollit eu adipisicing sunt exercitation occaecat. Incididunt enim elit officia in Lorem elit eu non. Ipsum ut duis proident cillum velit non. Cillum laboris labore enim nulla eu magna elit ullamco in dolor consequat. Elit irure esse dolore ex et velit.\r\nSit reprehenderit nostrud dolore in. Ex adipisicing magna id in irure elit laborum culpa. Aliquip dolor ex culpa consequat non magna amet nisi sunt. Veniam aute non officia irure nulla mollit deserunt est.\r\n",
      "tags": [
        "veniam",
        "consectetur",
        "labore",
        "in",
        "ullamco",
        "quis",
        "consectetur"
      ]
    },
    {
      "_id": "61b76c304fb49c4472b181e0",
      "titre": "aliqua mollit nisi",
      "contenu": "Ullamco qui veniam eiusmod in non laborum laborum quis ullamco dolor fugiat anim. Adipisicing enim aliqua culpa qui excepteur nisi in proident quis ad Lorem dolor voluptate. Minim elit est irure velit nostrud eiusmod ut Lorem duis dolor est nulla ex. Aliquip excepteur sit exercitation ex culpa elit cupidatat fugiat elit anim excepteur. Nulla voluptate anim nulla id labore sit fugiat proident amet veniam veniam.\r\nVelit ullamco reprehenderit occaecat enim elit voluptate dolor ea non ea aute et in. Ullamco adipisicing eiusmod labore ea eiusmod laborum dolore nulla nostrud. Esse irure nulla veniam ad labore irure consequat Lorem ut sit in velit esse anim. Deserunt consectetur cupidatat aliqua laborum cupidatat consectetur.\r\n",
      "tags": [
        "proident",
        "ex",
        "nostrud",
        "eu",
        "sint",
        "incididunt",
        "magna"
      ]
    },
    {
      "_id": "61b76c30a010d26487f800c0",
      "titre": "sit consectetur do",
      "contenu": "Incididunt aliqua aliquip et enim incididunt culpa sint eiusmod fugiat aliqua. Laboris voluptate ad adipisicing adipisicing nisi esse adipisicing amet eiusmod do est incididunt. Consequat cupidatat ullamco velit commodo nulla. Ipsum reprehenderit mollit sint in sunt reprehenderit ea velit eu Lorem irure et.\r\nVoluptate reprehenderit exercitation aute ut velit nisi id occaecat. Eiusmod eu ad non reprehenderit minim dolore velit Lorem deserunt elit eu id eiusmod ipsum. Non proident consectetur nulla ipsum Lorem nisi labore.\r\n",
      "tags": [
        "elit",
        "incididunt",
        "officia",
        "ut",
        "anim",
        "dolore",
        "culpa"
      ]
    },
    {
      "_id": "61b76c30de44f8f5bb1e495e",
      "titre": "consequat enim est",
      "contenu": "Nisi labore Lorem adipisicing excepteur nostrud anim nostrud cupidatat commodo qui aliqua occaecat laboris. Amet ipsum pariatur reprehenderit enim id. Et ut consequat mollit velit reprehenderit laborum excepteur. Amet qui sint do quis dolore consequat deserunt dolore fugiat nisi fugiat quis mollit. Eiusmod ea voluptate consectetur labore voluptate deserunt consequat.\r\nPariatur nulla veniam do commodo. Elit occaecat pariatur exercitation ad ipsum. Ipsum eu sit sit ad ipsum commodo qui minim anim cillum aliquip id ex. Sit commodo mollit incididunt voluptate adipisicing sunt sunt aute deserunt labore et. Ea reprehenderit velit labore nulla qui laboris nulla nisi commodo eiusmod magna in adipisicing. Laborum duis exercitation enim irure tempor id consectetur fugiat laborum eu dolore pariatur mollit cillum.\r\n",
      "tags": [
        "sint",
        "tempor",
        "consequat",
        "in",
        "in",
        "culpa",
        "mollit"
      ]
    },
    {
      "_id": "61b76c304d8fd8f54f0b84b0",
      "titre": "exercitation nulla eiusmod",
      "contenu": "Veniam pariatur consectetur consequat nostrud occaecat culpa adipisicing proident proident aliqua nostrud in nulla. Voluptate cupidatat proident id sunt consequat labore quis officia sit culpa qui. Dolore deserunt eiusmod commodo est Lorem laboris minim labore esse aliqua pariatur. Consequat est quis ea quis adipisicing do quis ex. Aliqua et amet pariatur nostrud incididunt commodo.\r\nSunt consequat veniam ullamco adipisicing nisi tempor ad sit fugiat. Quis ad nostrud qui laborum ex nulla elit commodo proident anim aliqua deserunt. Sint officia ullamco aliquip aute qui magna et culpa ea voluptate.\r\n",
      "tags": [
        "sint",
        "sunt",
        "commodo",
        "non",
        "aute",
        "officia",
        "veniam"
      ]
    },
    {
      "_id": "61b76c30808bec5e1d95f314",
      "titre": "nostrud nostrud tempor",
      "contenu": "Aliqua aute deserunt ad id enim tempor commodo. Ipsum eiusmod dolore cillum elit consectetur esse qui dolor. In do esse adipisicing aliqua cillum officia incididunt dolore pariatur ut culpa. Est enim pariatur velit labore sit ea veniam exercitation duis est mollit minim. Reprehenderit culpa adipisicing exercitation voluptate laboris in ex minim reprehenderit in ut. Dolore pariatur amet reprehenderit tempor irure.\r\nDolor enim mollit sunt culpa adipisicing veniam do veniam. Lorem do non sunt commodo nostrud Lorem ex in anim elit deserunt id consequat aliquip. Nisi nisi amet laborum consequat sunt ad ipsum dolor et non mollit deserunt ut. Magna magna do eu deserunt incididunt et nulla sit amet.\r\n",
      "tags": [
        "adipisicing",
        "ad",
        "nostrud",
        "aute",
        "tempor",
        "dolore",
        "esse"
      ]
    },
    {
      "_id": "61b76c30dba4137ced3d1b25",
      "titre": "ex elit aute",
      "contenu": "Voluptate et minim adipisicing cupidatat. Ipsum eu qui consectetur fugiat est irure. Irure ad exercitation nisi commodo et minim eu excepteur nisi dolore amet nostrud. Sunt occaecat velit proident tempor id nulla.\r\nIpsum duis laboris elit magna. Ipsum quis occaecat magna excepteur ullamco occaecat. Sit irure culpa quis deserunt ipsum incididunt eu esse.\r\n",
      "tags": [
        "laboris",
        "minim",
        "fugiat",
        "nostrud",
        "cillum",
        "sunt",
        "incididunt"
      ]
    },
    {
      "_id": "61b76c3041d052c0d6d6286a",
      "titre": "id irure incididunt",
      "contenu": "Proident et magna minim non pariatur laboris est consequat ea tempor proident magna ex. Ad enim aute incididunt sunt ullamco laboris in duis id mollit pariatur non deserunt. Nulla consectetur ad Lorem nostrud magna.\r\nVeniam quis ullamco nulla reprehenderit. Nostrud adipisicing reprehenderit enim dolor anim Lorem dolor adipisicing. Sit sit officia Lorem mollit laborum incididunt officia ipsum enim.\r\n",
      "tags": [
        "culpa",
        "irure",
        "eiusmod",
        "ut",
        "eiusmod",
        "ea",
        "ipsum"
      ]
    },
    {
      "_id": "61b76c309786c8438db1031d",
      "titre": "labore amet ipsum",
      "contenu": "Ut amet aute qui labore in. In deserunt velit aute velit id anim minim deserunt et laborum exercitation Lorem. Eiusmod irure nisi in officia aliqua incididunt.\r\nMollit anim labore sit nisi velit amet est dolor sint. Reprehenderit officia dolore excepteur aute ea. Pariatur sint labore id laborum velit labore occaecat deserunt deserunt anim. Nulla commodo eiusmod proident elit pariatur reprehenderit qui veniam ullamco ex est officia. Id eiusmod ad cupidatat sit sunt ex non. Sunt dolor eiusmod est esse quis tempor est quis nisi ullamco eiusmod ex.\r\n",
      "tags": [
        "reprehenderit",
        "ea",
        "enim",
        "officia",
        "ex",
        "sint",
        "elit"
      ]
    }
  ] 

  get data (){
    return this._data;
  }

  constructor() { }
}
