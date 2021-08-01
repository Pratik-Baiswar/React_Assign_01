$(document).ready(function () {
  var data = [
    {
      id: 421,
      firstName: "Roslyn",
      lastName: "Tippetts",
      email: "SHull@orci.org",
      phone: "(509)445-3973",
      address: {
        streetAddress: "3689 Convallis Ave",
        city: "Thomaston",
        state: "IA",
        zip: "56936",
      },
      description:
        "lacus mattis lacus dolor ante in magna amet sed amet sit facilisis curabitur vestibulum tincidunt nunc dolor tellus vitae et pharetra aliquam ipsum elementum fringilla nec amet dui tincidunt vitae ipsum pretium",
    },
    {
      id: 952,
      firstName: "Terri",
      lastName: "Robinson",
      email: "DAtkins@aliquam.net",
      phone: "(276)527-4706",
      address: {
        streetAddress: "1221 Augue Rd",
        city: "Old Bridge",
        state: "AL",
        zip: "15357",
      },
      description:
        "morbi orci pretium nec amet eros mattis neque sed ac lacus orci odio et pulvinar malesuada sagittis odio sit fringilla porttitor sollicitudin dolor aliquam egestas pulvinar sapien massa sed elementum in pretium",
    },
    {
      id: 631,
      firstName: "Ruben",
      lastName: "Tadeu",
      email: "CBartlett@porttitor.com",
      phone: "(999)911-6186",
      address: {
        streetAddress: "7287 Ipsum Ct",
        city: "Rochester",
        state: "MA",
        zip: "76116",
      },
      description:
        "orci dolor sed et massa tempor sapien in sapien curabitur dui pretium et turpis vitae magna etiam sit nunc elementum facilisis ac eros non libero aliquam hendrerit placerat nunc porta egestas vitae",
    },
    {
      id: 202,
      firstName: "Mikel",
      lastName: "Ramsey",
      email: "ELawson@porttitor.ly",
      phone: "(281)978-8988",
      address: {
        streetAddress: "9688 Pretium Ave",
        city: "Faribault",
        state: "NH",
        zip: "18232",
      },
      description:
        "odio tincidunt massa neque orci amet nec placerat mattis ac pretium ipsum lacus at aliquam odio magna tortor nunc eros morbi amet sit et rutrum porttitor tellus magna elit lacus curabitur et",
    },
    {
      id: 997,
      firstName: "Romeo",
      lastName: "Meek",
      email: "LChristine@etiam.ly",
      phone: "(343)683-1617",
      address: {
        streetAddress: "9512 Malesuada St",
        city: "Lockport",
        state: "IN",
        zip: "51552",
      },
      description:
        "suspendisse lacus consectetur scelerisque elementum magna sit nullam amet curabitur massa porta magna ipsum et mattis pulvinar sed porttitor placerat sit elit aliquam sit velit lacus mattis sit porttitor rutrum dolor aenean",
    },
    {
      id: 997,
      firstName: "Megh",
      lastName: "Stair",
      email: "TEasterly@adipiscing.io",
      phone: "(943)378-6194",
      address: {
        streetAddress: "219 Rutrum Dr",
        city: "Racine",
        state: "CA",
        zip: "34016",
      },
      description:
        "nec molestie eros malesuada dolor at suspendisse massa turpis mattis amet rutrum at mattis tortor at sollicitudin magna fringilla pulvinar vitae pretium dolor ipsum vestibulum suspendisse amet at lectus sed porta at",
    },
    {
      id: 292,
      firstName: "Rosalind",
      lastName: "Sherman",
      email: "AZeigler@placerat.org",
      phone: "(609)284-9728",
      address: {
        streetAddress: "8427 At Rd",
        city: "Mooresville",
        state: "NV",
        zip: "11096",
      },
      description:
        "aliquam magna sed lorem magna aliquam facilisis lacus porttitor orci at pretium amet lacus mattis magna turpis quis sollicitudin vestibulum vestibulum placerat eros lorem et vestibulum ante donec sit pulvinar molestie eget",
    },
    {
      id: 479,
      firstName: "Ida",
      lastName: "Kerkemeyer",
      email: "TRossi@etiam.io",
      phone: "(426)215-3127",
      address: {
        streetAddress: "1200 Aliquam St",
        city: "Indy",
        state: "MN",
        zip: "96906",
      },
      description:
        "donec facilisis neque elementum tortor augue porttitor odio neque sollicitudin porta molestie placerat massa placerat vestibulum orci pharetra sit neque porttitor ipsum placerat augue consequat tincidunt fringilla et sagittis aliquam quis porttitor",
    },
    {
      id: 121,
      firstName: "Suanne",
      lastName: "Dunn",
      email: "RDellabadia@velit.io",
      phone: "(742)725-4359",
      address: {
        streetAddress: "968 Pulvinar Ct",
        city: "Strongsville",
        state: "IA",
        zip: "28429",
      },
      description:
        "suspendisse sit sed mattis placerat velit sed vitae libero id elit amet tincidunt at elementum sed non aliquam lectus odio pretium adipiscing nec nunc pulvinar placerat pulvinar tortor et porta elementum tincidunt",
    },
    {
      id: 136,
      firstName: "Roya",
      lastName: "Callahan",
      email: "JRay@eros.com",
      phone: "(398)454-4138",
      address: {
        streetAddress: "6965 Amet Rd",
        city: "Wahiawa",
        state: "MI",
        zip: "11596",
      },
      description:
        "et amet magna odio odio ante sapien hendrerit tortor mattis vestibulum mi placerat sollicitudin nunc rutrum suspendisse morbi nunc massa aenean sed placerat velit mattis amet mattis dolor ac pulvinar lectus neque",
    },
    {
      id: 115,
      firstName: "Jian",
      lastName: "Rearick",
      email: "MDavis@magna.ly",
      phone: "(479)689-8506",
      address: {
        streetAddress: "257 Sit Rd",
        city: "Somerset",
        state: "MO",
        zip: "64208",
      },
      description:
        "massa sapien dolor placerat aenean sollicitudin vestibulum libero convallis mattis pulvinar curabitur risus amet amet at sollicitudin at massa hendrerit vestibulum pharetra dolor ante dolor lorem donec aliquam rutrum sollicitudin vitae morbi",
    },
    {
      id: 68,
      firstName: "Lauris",
      lastName: "Short",
      email: "CLyn@id.com",
      phone: "(191)576-9789",
      address: {
        streetAddress: "8273 Mattis Ln",
        city: "Waco",
        state: "WI",
        zip: "41663",
      },
      description:
        "eget sed augue nec lacus hendrerit nunc vestibulum vestibulum libero mi donec vestibulum sed sed massa rutrum massa mattis ac nullam egestas nunc morbi placerat sapien vitae sed elementum elementum porttitor ac",
    },
    {
      id: 18,
      firstName: "Marjorie",
      lastName: "Gonzalez",
      email: "BSari@pulvinar.gov",
      phone: "(325)720-5535",
      address: {
        streetAddress: "6000 Scelerisque Ct",
        city: "Philadelphia",
        state: "MO",
        zip: "50273",
      },
      description:
        "dolor mi id sit dolor sollicitudin placerat adipiscing pulvinar sed lectus massa massa elementum facilisis ante morbi porttitor aliquam at eget fringilla vestibulum dolor dolor massa fringilla velit ac aliquam dolor et",
    },
    {
      id: 519,
      firstName: "Vanita",
      lastName: "Mulvehill",
      email: "FPeyton@sed.ly",
      phone: "(272)598-4926",
      address: {
        streetAddress: "2057 Donec St",
        city: "San Juan Capistrano",
        state: "VT",
        zip: "78051",
      },
      description:
        "sed et molestie vitae magna lacus aenean sed augue sollicitudin lacus magna egestas tellus magna at lorem vestibulum sed elit nullam etiam et adipiscing id magna convallis sed et hendrerit pulvinar quis",
    },
    {
      id: 101,
      firstName: "Victor",
      lastName: "Ventura",
      email: "DSoto@id.gov",
      phone: "(975)883-4292",
      address: {
        streetAddress: "9188 Sit Rd",
        city: "Fresno",
        state: "WI",
        zip: "14508",
      },
      description:
        "tincidunt egestas placerat sollicitudin sit dolor sollicitudin elementum quis ipsum dui in nec tincidunt tempor elit sagittis sit neque tincidunt consectetur tincidunt at ipsum tortor vel sed mattis massa turpis morbi donec",
    },
    {
      id: 82,
      firstName: "Ollie",
      lastName: "Sabol",
      email: "ASteward@facilisis.ly",
      phone: "(801)831-3710",
      address: {
        streetAddress: "2660 Elementum Rd",
        city: "Englewood",
        state: "NC",
        zip: "10954",
      },
      description:
        "malesuada porta pretium ipsum risus nec tincidunt vitae amet tortor non mi nec ipsum convallis risus morbi sed vel lacus et tincidunt neque suspendisse sapien vitae suspendisse mattis velit dui velit sollicitudin",
    },
    {
      id: 739,
      firstName: "Freddy",
      lastName: "Ward",
      email: "MDentice@convallis.ly",
      phone: "(666)303-5746",
      address: {
        streetAddress: "8457 At Rd",
        city: "Mesa",
        state: "WV",
        zip: "73958",
      },
      description:
        "odio id massa id odio etiam placerat tortor consectetur lectus adipiscing ipsum placerat tortor sollicitudin adipiscing ante lectus convallis lectus egestas massa massa ipsum id magna quis sapien sed lectus eros dolor",
    },
    {
      id: 819,
      firstName: "Benika",
      lastName: "Fergus",
      email: "JNuccio@mi.com",
      phone: "(299)329-7976",
      address: {
        streetAddress: "6151 Molestie Ln",
        city: "Wichita",
        state: "TX",
        zip: "81826",
      },
      description:
        "scelerisque elit amet magna et pretium lacus non vitae lectus ante nec lacus non donec nec convallis ipsum consectetur sit suspendisse magna eros pharetra lorem lectus placerat convallis tincidunt vestibulum porttitor sit",
    },
    {
      id: 830,
      firstName: "Monica",
      lastName: "Silverstein",
      email: "LMoudry@elit.com",
      phone: "(398)105-1440",
      address: {
        streetAddress: "7933 Mi Ln",
        city: "Sunny",
        state: "NJ",
        zip: "62867",
      },
      description:
        "sit sagittis sit mi tincidunt vestibulum lectus dui amet mi sed suspendisse id scelerisque morbi lacus egestas malesuada velit lectus quis pulvinar vel magna pretium elementum massa pretium mi eget placerat tellus",
    },
    {
      id: 672,
      firstName: "Tamara",
      lastName: "Kreigler",
      email: "NYen@scelerisque.io",
      phone: "(695)442-7442",
      address: {
        streetAddress: "5901 Dolor St",
        city: "Jackson Heights",
        state: "AK",
        zip: "78330",
      },
      description:
        "tincidunt sit risus mattis aenean non sapien odio lacus et libero sit placerat dui consequat non sit consectetur hendrerit sit sed mi aenean sit turpis massa mattis massa aliquam lacus tortor sagittis",
    },
    {
      id: 16,
      firstName: "Carmerlina",
      lastName: "Stair",
      email: "ACabrera@placerat.gov",
      phone: "(899)797-3611",
      address: {
        streetAddress: "2613 Sollicitudin Ct",
        city: "Saucier",
        state: "OK",
        zip: "18045",
      },
      description:
        "ipsum consequat scelerisque sed lacus pharetra porttitor libero scelerisque pulvinar amet tempor convallis sed aliquam lorem etiam in et libero curabitur dolor libero sed magna odio ac ac quis elit amet tortor",
    },
    {
      id: 983,
      firstName: "Vincent",
      lastName: "Wing",
      email: "OBunker@dui.gov",
      phone: "(526)783-1051",
      address: {
        streetAddress: "7770 Lacus Dr",
        city: "Orlando",
        state: "MI",
        zip: "26636",
      },
      description:
        "massa ipsum ante libero libero dui lacus non massa placerat adipiscing mi vitae mattis massa dolor convallis mattis porta nunc tortor orci facilisis massa sed sed sed rutrum hendrerit placerat sit ac",
    },
    {
      id: 640,
      firstName: "Derrick",
      lastName: "Westrate",
      email: "JKirkley@id.io",
      phone: "(539)835-5638",
      address: {
        streetAddress: "9000 At Dr",
        city: "Mount Vernon",
        state: "CA",
        zip: "82727",
      },
      description:
        "etiam magna consequat risus ipsum magna adipiscing egestas consequat dolor id mi dolor consequat amet pulvinar risus lacus lorem lectus massa dolor consequat eget sed aliquam hendrerit amet vestibulum elementum sit dui",
    },
    {
      id: 97,
      firstName: "Jackie",
      lastName: "Palmer",
      email: "KJantz@consequat.org",
      phone: "(350)706-5747",
      address: {
        streetAddress: "5766 Velit Dr",
        city: "Rancho Cucamonga",
        state: "NM",
        zip: "12400",
      },
      description:
        "nec augue non odio sit ac quis sed aenean tellus sed morbi consequat non amet ac sapien sit ipsum egestas eget vestibulum dolor dui nullam vestibulum id pharetra tortor placerat magna elementum",
    },
    {
      id: 251,
      firstName: "Stanley",
      lastName: "Dryden",
      email: "JTurich@fringilla.com",
      phone: "(963)392-6343",
      address: {
        streetAddress: "2994 Lacus Dr",
        city: "Raleigh",
        state: "CO",
        zip: "47555",
      },
      description:
        "sollicitudin nec sapien tortor donec convallis consectetur neque amet donec sit sed neque neque in et ac porta morbi placerat sed pulvinar lacus pulvinar ac tellus sit malesuada dolor massa molestie vestibulum",
    },
    {
      id: 243,
      firstName: "Miguel",
      lastName: "Moore",
      email: "TStafford@fringilla.io",
      phone: "(477)568-8560",
      address: {
        streetAddress: "1378 Et Dr",
        city: "Fargo",
        state: "MS",
        zip: "50564",
      },
      description:
        "sed pharetra velit vestibulum vitae morbi sit morbi id consectetur et pulvinar ipsum pulvinar etiam id dolor mattis odio hendrerit consequat at dui massa pretium placerat mi neque nunc sit sed neque",
    },
    {
      id: 619,
      firstName: "Harris",
      lastName: "Lammers",
      email: "JMarina@sollicitudin.net",
      phone: "(169)603-0459",
      address: {
        streetAddress: "8270 Lacus St",
        city: "Orlando",
        state: "WV",
        zip: "46481",
      },
      description:
        "dolor consectetur amet neque rutrum convallis elementum dolor sit egestas tortor aliquam pulvinar odio pulvinar mattis ac amet hendrerit pretium ipsum consequat augue lacus aenean aliquam sed suspendisse aliquam tincidunt massa odio",
    },
    {
      id: 746,
      firstName: "Ben",
      lastName: "Oliva",
      email: "MBristow@lacus.com",
      phone: "(380)869-0731",
      address: {
        streetAddress: "1312 Mattis St",
        city: "Saucier",
        state: "UT",
        zip: "50739",
      },
      description:
        "scelerisque scelerisque pulvinar tincidunt elementum consequat aliquam risus sit tincidunt dui elementum ipsum elementum odio magna quis risus convallis eros molestie ac pulvinar placerat amet vestibulum velit sed amet pretium sagittis molestie",
    },
    {
      id: 519,
      firstName: "Candelaria",
      lastName: "Wittcop",
      email: "RColon@odio.org",
      phone: "(939)762-4679",
      address: {
        streetAddress: "76 Turpis Ct",
        city: "Kearney",
        state: "TX",
        zip: "38444",
      },
      description:
        "elementum orci fringilla suspendisse elementum ac lacus vitae morbi ac pulvinar elit sollicitudin neque consequat odio dolor pulvinar augue nunc consequat morbi sit magna velit vestibulum in sit sit lacus placerat eros",
    },
    {
      id: 123,
      firstName: "Ahmad",
      lastName: "Merle",
      email: "KCrumbliss@hendrerit.org",
      phone: "(459)824-9295",
      address: {
        streetAddress: "1229 Augue St",
        city: "Salt Lake City",
        state: "SD",
        zip: "38074",
      },
      description:
        "augue egestas elementum sit nunc tellus tincidunt dolor elit placerat et lacus ipsum vestibulum etiam egestas tincidunt mi lacus aliquam malesuada ipsum aenean porttitor magna fringilla aliquam pharetra sed suspendisse in pulvinar",
    },
    {
      id: 369,
      firstName: "Kantanzia",
      lastName: "Larson",
      email: "PFreeburg@mattis.gov",
      phone: "(279)200-8552",
      address: {
        streetAddress: "6830 Rutrum Ave",
        city: "Bulverde",
        state: "OK",
        zip: "52454",
      },
      description:
        "elit curabitur sapien nec ac sed placerat vel in magna sed tincidunt massa placerat non sagittis sit sed hendrerit nec curabitur pulvinar pulvinar sollicitudin vitae nullam facilisis fringilla massa in neque orci",
    },
    {
      id: 242,
      firstName: "Mirza",
      lastName: "Bombulie",
      email: "DTravis@consequat.org",
      phone: "(613)266-4638",
      address: {
        streetAddress: "5133 Vitae Ct",
        city: "West Chester",
        state: "WA",
        zip: "83097",
      },
      description:
        "neque sed donec convallis dolor nullam non lacus pulvinar pulvinar sed curabitur fringilla mattis amet nunc rutrum lacus quis tincidunt nullam ac et tincidunt nullam amet amet elit egestas sapien elit eros",
    },
  ];
  function liveRow(data) {
    $("#table-data").html("");
    for (i = 0; i < data.length; i++) {
      var table = $("<table>");
      var tbody = $("<tbody>");
      var dataRow = $("<tr>").addClass("data-row").attr("id", i);
      var column1 = $("<td>").addClass("column1").html(data[i].id);
      var column2 = $("<td>").addClass("column2").html(data[i].firstName);
      var column3 = $("<td>").addClass("column3").html(data[i].lastName);
      var column4 = $("<td>").addClass("column4").html(data[i].email);
      var column5 = $("<td>").addClass("column5").html(data[i].phone);

      dataRow.append(column1, column2, column3, column4, column5);
      tbody.append(dataRow);
      table.append(tbody);
      $("#table-data").append(table);

      $("#table-data").on("click", ".data-row", function () {
        $(".data-row").removeClass("active");
        $(this).addClass("active");
        $("#info-content div .user").html(
          data[$(this).attr("id")].firstName + " " + data[$(this).attr("id")].lastName
        );
        $("#info-content div textarea").html(data[$(this).attr("id")].description);
        $("#info-content div .addr").html(data[$(this).attr("id")].address.streetAddress);
        $("#info-content div .city").html(data[$(this).attr("id")].address.city);
        $("#info-content div .state").html(data[$(this).attr("id")].address.state);
        $("#info-content div .zip").html(data[$(this).attr("id")].address.zip);
      });
    }
  }

  liveRow(data);
  $("#search-box").on("keyup", function () {
    var value = $(this).val();
    var object = liveSearch(value, data);
    console.log(object);
    liveRow(object);
    console.log(liveRow(object));
  });
  function liveSearch(value, data) {
    var filterData = [];
    for (i = 0; i < data.length; i++) {
      value = value.toLowerCase();
      var userName = data[i].firstName.toLowerCase();
      if (userName.includes(value)) {
        filterData.push(data[i]);
      }
    }
    return filterData;
  }
});
