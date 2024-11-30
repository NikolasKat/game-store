import { Link } from "react-router-dom";
import ListItem from "./GameList-item";

const gamesData = [
   {
      id: 1,
      name: "Call of Duty®: Black Ops 6",
      description:
         "Нарушение приказа становится единственным выходом. Союзники превращаются во врагов. Это Call of Duty®: Black Ops 6. Действие шпионского боевика Black Ops 6, разработанного Treyarch и Raven, происходит в начале 1990-х годов. Это время больших перемен в глобальной политике, вызванных окончанием холодной войны и возвышением США в роли единственной сверхдержавы мира. Вас ждет мозголомный сюжет в лучших традициях Black Ops, не скованный никакими правилами.",
      price: 30,
      genre: ["Шутер", "Боевики"],
      img: "../../public/callOfDuty.avif",
   },
   {
      id: 2,
      name: "Marvel’s Человек-Паук 2",
      description:
         "Люди-пауки Питер Паркер и Майлз Моралес столкнутся с самым серьезным испытанием не только своих супергеройских сил, но и воли, спасая город, друг друга и тех, кого они любят, от чудовищного симбиота Венома. Исследуйте огромный Нью-Йорк вселенной Marvel за счет еще более быстрого перемещения с помощью паутины и новых паутинных крыльев и мгновенно переключайтесь между Питером и Майлзом по ходу приключений в открытом мире, чтобы пережить различные истории, освоить новые эпические способности и заполучить высокотехнологичное снаряжение.",
      price: 25,
      genre: ["Боевики"],
      img: "../../public/spiderMan.avif",
   },
   {
      id: 4,
      name: "NBA 2K25 Standard Edition",
      description:
         "Создавайте свое наследие в MyCAREER и MyTEAM и играйте в MyNBA и The W на PS5® или в MyLEAGUE на PS4®. Используйте множество вариантов настройки и исследуйте совершенно новый City (для PS5®) или городскую метрополию в Neighborhood (для PS4®).",
      price: 15,
      genre: ["Спорт"],
      img: "../../public/nba.avif",
   },
   {
      id: 5,
      name: "Одни из нас™: Часть II Обновленная версия",
      description:
         "Пять лет спустя... После смертельно опасного путешествия по охваченной эпидемией Америке Элли и Джоэл осели в Вайоминге. Обосновавшись в процветающей общине, они обрели желанную стабильность, несмотря на постоянную угрозу нападения зараженных и теряющих смысл жизни выживших.",
      price: 28,
      genre: ["Приключения", "Боевики"],
      img: "../../public/tlou2.webp",
   },
   {
      id: 6,
      name: "SILENT HILL 2",
      description:
         "Получив письмо от покойной жены, Джеймс, в надежде вновь увидеться с ней, отправляется в город, с которым они связаны воспоминаниями: Сайлент Хилл. Там, у озера, он встречает пугающе похожую на нее женщину...",
      price: 80,
      genre: ["Ужасы"],
      img: "../../public/silentHill2.avif",
   },
   {
      id: 7,
      name: "Grand Theft Auto V: Premium Edition",
      description:
         "В издание Grand Theft Auto V: Premium Edition входят сюжетный режим Grand Theft Auto V, бесплатный доступ к постоянно развивающемуся миру Grand Theft Auto Online и все ранее выпущенные материалы и обновления, в том числе «Ограбление Кайо-Перико», «Казино-отель Diamond», «Ограбление казино Diamond», «Торговля оружием» и многое другое. Вы также получите стартовый набор «Преступная организация» – самый быстрый способ основать собственную криминальную империю в Grand Theft Auto Online.",
      price: 20,
      genre: ["Приключения", "Боевики"],
      img: "../../public/gta5.webp",
   },
   {
      id: 8,
      name: "The Forest",
      description:
         "После крушения пассажирского самолета выжили только вы. Вокруг вас таинственный лес, полный смертельно опасных каннибалов. Живой мир, в котором можно срубить каждое дерево и сорвать каждое растение. А под землей находится целая сеть пещер и озер.",
      price: 69,
      genre: ["Приключения", "Боевики", "Ужасы"],
      img: "../../public/theForest.webp",
   },
   {
      id: 9,
      name: "God of War Рагнарёк",
      description:
         "Студия Santa Monica Studio выпускает продолжение высоко оцененной критиками игры God of War (2018). Отправляйтесь в таинственное приключение вместе с Кратосом и Атреем, пока не наступил Рагнарёк. Отец и сын должны рискнуть всем, исследуя ошеломляющие просторы каждого из Девяти миров.",
      price: 48,
      genre: ["Приключения", "Боевики"],
      img: "../../public/godOfWar.avif",
   },
   {
      id: 10,
      name: "Mortal Kombat 1",
      description:
         "Это у нас в крови! Откройте возрожденную вселенную Mortal Kombat, которую создал Бог огня Лю Кан. Mortal Kombat™ 1 провозглашает новую эру культовой франшизы с новой боевой системой, игровыми режимами и фаталити!",
      price: 10,
      genre: ["Единоборства"],
      img: "../../public/mrt1.avif",
   },
   {
      id: 11,
      name: "Cyberpunk 2077",
      description:
         "Cyberpunk 2077 — приключенческая ролевая игра с открытым миром, рассказывающая о киберпанке-наёмнике Ви и борьбе за жизнь в мегаполисе Найт-Сити. Мрачное будущее стало ещё более впечатляющим в улучшенной версии, в которую вошли новые дополнительные материалы. Создайте персонажа, выберите стиль игры и начните свой путь к высшей лиге, выполняя заказы, улучшая репутацию и оттачивая навыки. Ваши поступки влияют на происходящее и на весь город. В нём рождаются легенды. Какую сложат о вас?",
      price: 30,
      genre: ["Ролевые игры"],
      img: "../../public/cyberpunc.webp",
   },
   {
      id: 12,
      name: "The Crew Motorfest",
      description:
         "СЫГРАЙТЕ В THE CREW MOTORFEST БЕСПЛАТНО! Играйте 5 часов бесплатно! Все достижения, полученные в ходе бесплатной игры, а также все разблокированные предметы сохранятся и будут доступны вам после покупки игры. Добро пожаловать на Motorfest! Фестиваль автокультуры, который круглый год позволяет пережить лучшие моменты за рулем авто.",
      price: 10,
      genre: ["Вождение и гонки"],
      img: "../../public/motorFest.avif",
   },
   {
      id: 13,
      name: "Red Dead Redemption 2",
      description:
         "Aмерика, 1899 год. Артур Морган и другие подручные Датча ван дер Линде вынуждены пуститься в бега. Их банде предстоит участвовать в кражах, грабежах и перестрелках в самом сердце Америки. За ними по пятам идут федеральные агенты и лучшие в стране охотники за головами, а саму банду разрывают внутренние противоречия. Артуру предстоит выбрать, что для него важнее: его собственные идеалы или же верность людям, которые его взрастили.",
      price: 90,
      genre: ["Приключения", "Боевики"],
      img: "../../public/rdr2.jpeg",
   },
];

const GameList = () => {
   return (
      <section className="my-16 mx-auto px-16">
         <ul className="flex flex-wrap min-[320px]:justify-center min-[600px]:justify-around min-xl:justify-between">
            {gamesData.map((item) => (
               <Link key={item.id} to={`/${item.id}`}>
                  <ListItem
                     name={item.name}
                     description={item.description}
                     img={item.img}
                     genre={item.genre}
                     price={item.price}
                  />
               </Link>
            ))}
         </ul>
      </section>
   );
};

export { gamesData, GameList };
