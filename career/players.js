
const careerPlayers = [
    {
        id: 1,
        name: "كريم بنزيما",
        aliases: ["بنزيما", "Karim Benzema", "Benzema"],
        clubs: [
            "lyon.png",
            "real-madrid.png",
            "ittihad.png",
            "hilal.png"
        ]
    },
    {
        id: 2,
        name: "سالم الدوسري",
        aliases: ["سالم", "Salem Al Dawsari"],
        clubs: [
            "hilal.png",
            "villarreal.png",
            "hilal.png"
        ]
    },
    {
        id: 3,
        name: "عمر السومة",
        aliases: ["السومة", "Omar Al Somah"],
        clubs: [
            "futowa.png",
            "qadsia.png",
            "ahli.png",
            "alarabi.png",
            "orobah.png",
            "wydad.png",
            "hazem.png",
            "wahda-syria.png"
        ]
    },
    {
        id: 4,
        name: "كريستيانو رونالدو",
        aliases: ["رونالدو", "Cristiano Ronaldo", "CR7"],
        clubs: [
            "sporting.png",
            "man-utd.png",
            "real-madrid.png",
            "juventus.png",
            "man-utd.png",
            "nassr.png"
        ]
    },
    {
        id: 5,
        name: "بافيتيمبي غوميز",
        aliases: ["غوميز", "Gomis", "Bafetimbi Gomis"],
        clubs: [
            "saint-etienne.png",
            "troyes.png",
            "saint-etienne.png",
            "lyon.png",
            "swansea.png",
            "marseille.png",
            "swansea.png",
            "galatasaray.png",
            "hilal.png",
            "galatasaray.png",
            "kawasaki.png"
        ]
    },
    {
        id: 6,
        name: "محمد نور",
        aliases: ["نور", "Mohammed Noor"],
        clubs: [
            "ittihad.png",
            "nassr.png",
            "ittihad.png"
        ]
    },
    {
        id: 7,
        name: "عبدالرزاق حمدالله",
        aliases: ["حمدالله", "حمد الله", "Abderrazak Hamdallah"],
        clubs: [
            "olympic-safi.png",
            "aalesund.png",
            "guangzhou-rf.png",
            "eljaish.png",
            "rayyan.png",
            "nassr.png",
            "ittihad.png",
            "shabab.png",
            "hilal.png",
            "shabab.png",
            "taawoun.png"
        ]
    },
    {
        id: 8,
        name: "كارلوس إدواردو",
        aliases: ["إدواردو", "كارلوس إدواردو", "Carlos Eduardo"],
        clubs: [
            "desportivo-brasil.png",
            "ituano.png",
            "fluminense.png",
            "gremio-barueri.png",
            "estoril.png",
            "porto.png",
            "nice.png",
            "hilal.png",
            "shabab-alahli.png",
            "ahli.png",
            "botafogo.png",
            "cruzeiro.png",
            "mirassol.png"
        ]
    },
    {
        id: 9,
        name: "ياسر القحطاني",
        aliases: ["ياسر", "Yasser Al Qahtani"],
        clubs: [
            "qadsia.png",
            "hilal.png",
            "alain.png",
            "hilal.png"
        ]
    },
    {
        id: 10,
        name: "ناصر الشمراني",
        aliases: ["الشمراني", "Nasser Al Shamrani"],
        clubs: [
            "wahda-saudi.png",
            "shabab.png",
            "hilal.png",
            "alain.png",
            "hilal.png",
            "shabab.png",
            "ittihad.png"
        ]
    },
    {
        id: 11,
        name: "محمد الشلهوب",
        aliases: ["الشلهوب", "Mohammed Al Shalhoub"],
        clubs: ["hilal.png"]
    },
    {
        id: 12,
        name: "تيسير الجاسم",
        aliases: ["الجاسم", "Taisir Al Jassim"],
        clubs: [
            "ahli.png",
            "qatar-sc.png",
            "ahli.png",
            "wahda-saudi.png",
            "nassr-kuwait.png"
        ]
    },
    {
        id: 13,
        name: "فهد المولد",
        aliases: ["المولد", "Fahad Al Muwallad"],
        clubs: [
            "ittihad.png",
            "levante.png",
            "ittihad.png",
            "shabab.png"
        ]
    },
    {
        id: 14,
        name: "سلمان الفرج",
        aliases: ["الفرج", "Salman Al Faraj"],
        clubs: [
            "hilal.png",
            "neom.png"
        ]
    },
    {
        id: 15,
        name: "عبدالله عطيف",
        aliases: ["عطيف", "Abdullah Otayf"],
        clubs: [
            "shabab.png",
            "academica.png",
            "hilal.png",
            "ahli.png"
        ]
    },
    {
        id: 16,
        name: "عبدالفتاح عسيري",
        aliases: ["عسيري", "عبد الفتاح عسيري", "Abdulfattah Asiri"],
        clubs: [
            "ittihad.png",
            "ahli.png",
            "nassr.png",
            "mariehhamn.png",
            "tai.png",
            "kholood.png"
        ]
    },
    {
        id: 17,
        name: "مختار فلاتة",
        aliases: ["مختار", "Mukhtar Fallatah"],
        clubs: [
            "wahda-saudi.png",
            "shabab.png",
            "ittihad.png",
            "wahda-saudi.png",
            "hilal.png",
            "qadsia.png",
            "shoulla.png",
            "jeddah.png",
            "tai.png",
            "jubail.png",
            "hedaya.png",
            "wadi.png"
        ]
    },
    {
        id: 18,
        name: "نايف هزازي",
        aliases: ["هزازي", "Naif Hazazi"],
        clubs: [
            "ittihad.png",
            "shabab.png",
            "nassr.png",
            "taawoun.png",
            "botosani.png",
            "ohod.png",
            "adalah.png"
        ]
    },
    {
        id: 19,
        name: "سيباستيان جيوفينكو",
        aliases: ["جيوفينكو", "Giovinco", "Sebastian Giovinco"],
        clubs: [
            "juventus.png",
            "empoli.png",
            "juventus.png",
            "parma.png",
            "juventus.png",
            "toronto.png",
            "hilal.png",
            "sampdoria.png"
        ]
    },
    {
        id: 20,
        name: "أندريه كاريلو",
        aliases: ["كاريلو", "Andre Carrillo"],
        clubs: [
            "alianza-lima.png",
            "sporting.png",
            "benfica.png",
            "watford.png",
            "benfica.png",
            "hilal.png",
            "qadsia.png",
            "corinthians.png"
        ]
    },
    {
        id: 21,
        name: "موسى ماريغا",
        aliases: ["ماريغا", "Moussa Marega", "Marega"],
        clubs: [
            "le-poire-sur-vie.png",
            "amiens.png",
            "maritimo.png",
            "porto.png",
            "vitoria-guimaraes.png",
            "porto.png",
            "hilal.png",
            "sharjah.png",
            "diriyah.png",
            "palm-city.png"
        ]
    },
    {
        id: 22,
        name: "أوديون إيغالو",
        aliases: ["إيغالو", "Odion Ighalo", "Ighalo"],
        clubs: [
            "julius-berger.png",
            "lyn.png",
            "udinese.png",
            "granada.png",
            "cesena.png",
            "granada.png",
            "watford.png",
            "changchun-yatai.png",
            "shanghai-shenhua.png",
            "man-utd.png",
            "shabab.png",
            "hilal.png",
            "wahda-saudi.png"
        ]
    },
    {
        id: 23,
        name: "رومارينيو",
        aliases: ["روما", "Romarinho"],
        clubs: [
            "rio-branco.png",
            "desportivo-brasil.png",
            "sao-bernardo.png",
            "bragantino.png",
            "corinthians.png",
            "eljaish.png",
            "aljazira.png",
            "ittihad.png",
            "neom.png",
            "rayyan.png",
            "vitoria.png",
            "portuguesa.png"
        ]
    },
    {
        id: 24,
        name: "إيغور كورونادو",
        aliases: ["كورونادو", "Igor Coronado"],
        clubs: [
            "banbury.png",
            "floriana.png",
            "trapani.png",
            "palermo.png",
            "sharjah.png",
            "ittihad.png",
            "corinthians.png",
            "sharjah.png"
        ]
    },
    {
        id: 25,
        name: "نور الدين أمرابط",
        aliases: ["أمرابط", "امرابط", "Nordin Amrabat"],
        clubs: [
            "almere-city.png",
            "vvv-venlo.png",
            "psv.png",
            "kayserispor.png",
            "galatasaray.png",
            "malaga.png",
            "galatasaray.png",
            "malaga.png",
            "watford.png",
            "leganes.png",
            "nassr.png",
            "aek-athens.png",
            "hull-city.png",
            "wydad.png",
            "utrecht.png"
        ]
    },
    {
        id: 26,
        name: "أندرسون تاليسكا",
        aliases: ["تاليسكا", "Talisca", "Anderson Talisca"],
        clubs: [
            "bahia.png",
            "benfica.png",
            "besiktas.png",
            "benfica.png",
            "guangzhou.png",
            "nassr.png",
            "fenerbahce.png",
            "aljazira.png"
        ]
    },
    {
        id: 27,
        name: "إيفر بانيغا",
        aliases: ["بانيغا", "Ever Banega", "Banega"],
        clubs: [
            "boca-juniors.png",
            "valencia.png",
            "atletico-madrid.png",
            "valencia.png",
            "newells.png",
            "sevilla.png",
            "inter.png",
            "sevilla.png",
            "shabab.png",
            "newells.png",
            "defensa-justicia.png"
        ]
    },
    {
        id: 28,
        name: "كريستيان غوانكا",
        aliases: ["غوانكا", "جوانكا", "Cristian Guanca"],
        clubs: [
            "chacarita.png",
            "colon.png",
            "emelec.png",
            "colon.png",
            "kasimpasa.png",
            "colon.png",
            "ettifaq.png",
            "shabab.png",
            "alain.png",
            "shabab.png",
            "wahda-uae.png",
            "shabab.png",
            "taawoun.png",
            "shabab.png",
            "alula.png",
            "chacarita.png"
        ]
    },
    {
        id: 29,
        name: "ساديو ماني",
        aliases: ["ماني", "Sadio Mane", "Mané"],
        clubs: [
            "metz.png",
            "salzburg.png",
            "southampton.png",
            "liverpool.png",
            "bayern.png",
            "nassr.png"
        ]
    },
    {
        id: 30,
        name: "رياض محرز",
        aliases: ["محرز", "Riyad Mahrez", "Mahrez"],
        clubs: [
            "quimper.png",
            "le-havre.png",
            "leicester.png",
            "man-city.png",
            "ahli.png"
        ]
    }
];

const dailyCareerChallenges = [
   2, 12, 17, 4, 23, 9, 28, 15, 30, 11, 6, 25, 13, 1, 20, 8, 27, 5, 19, 24, 3, 29, 16, 7, 22, 10, 26, 14, 21, 18 ];
