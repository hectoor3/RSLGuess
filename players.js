const players = [
    // ========================================
    // الهلال
    // ========================================

    // حراس المرمى
    {
        id: 1,
        name: "ياسين بونو",
        aliases: ["بونو", "ياسين", "ياسين بونو"],
        club: "الهلال",
        nationality: "المغرب",
        position: "حارس",
        birthDate: "1991-04-05",
        foot: "يسار",
        height: 192,
        active: true
    },
    {
        id: 2,
        name: "محمد العويس",
        aliases: ["العويس", "محمد العويس"],
        club: "الهلال",
        nationality: "السعودية",
        position: "حارس",
        birthDate: "1991-10-10",
        foot: "يمين",
        height: 185,
        active: true
    },
    {
        id: 3,
        name: "محمد اليامي",
        aliases: ["اليامي", "محمد اليامي", "محمد الربيعي"],
        club: "الهلال",
        nationality: "السعودية",
        position: "حارس",
        birthDate: "1997-08-14",
        foot: "يمين",
        height: 190,
        active: true
    },

    // الدفاع
    {
        id: 4,
        name: "محمد محزري",
        aliases: ["محزري", "محمد محزري"],
        club: "الهلال",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2002-05-19",
        foot: "يمين",
        height: 178,
        active: true
    },
    {
        id: 5,
        name: "خاليدو كوليبالي",
        aliases: ["كوليبالي", "خاليدو كوليبالي"],
        club: "الهلال",
        nationality: "السنغال",
        position: "دفاع",
        birthDate: "1991-06-20",
        foot: "يمين",
        height: 186,
        active: true
    },
    {
        id: 6,
        name: "يوسف أكتشيشيك",
        aliases: ["يوسف أكتشيشيك", "أكتشيشيك", "يوسف"],
        club: "الهلال",
        nationality: "تركيا",
        position: "دفاع",
        birthDate: "2006-01-25",
        foot: "يسار",
        height: 193,
        active: true
    },
    {
        id: 7,
        name: "ثيو هيرنانديز",
        aliases: ["ثيو", "هيرنانديز", "ثيو هيرنانديز"],
        club: "الهلال",
        nationality: "فرنسا",
        position: "دفاع",
        birthDate: "1997-10-06",
        foot: "يسار",
        height: 184,
        active: true
    },
    {
        id: 8,
        name: "متعب الحربي",
        aliases: ["متعب", "الحربي", "متعب الحربي"],
        club: "الهلال",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2000-02-19",
        foot: "يسار",
        height: 177,
        active: true
    },
    {
        id: 9,
        name: "محمد الصرنوخ",
        aliases: ["الصرنوخ", "محمد الصرنوخ"],
        club: "الهلال",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2004-01-01",
        foot: "يمين",
        height: 173,
        active: true
    },
    {
        id: 10,
        name: "علي لاجامي",
        aliases: ["لاجامي", "علي لاجامي"],
        club: "الهلال",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1996-04-25",
        foot: "يمين",
        height: 178,
        active: true
    },
    {
        id: 11,
        name: "حسان تمبكتي",
        aliases: ["تمبكتي", "حسان", "حسان تمبكتي"],
        club: "الهلال",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1999-02-09",
        foot: "يمين",
        height: 182,
        active: true
    },
    {
        id: 12,
        name: "حمد اليامي",
        aliases: ["حمد", "حمد اليامي"],
        club: "الهلال",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1999-05-17",
        foot: "يمين",
        height: 173,
        active: true
    },

    // الوسط
    {
        id: 13,
        name: "ناصر الدوسري",
        aliases: ["ناصر", "ناصر الدوسري"],
        club: "الهلال",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "1998-12-19",
        foot: "يسار",
        height: 178,
        active: true
    },
    {
        id: 14,
        name: "روبن نيفيز",
        aliases: ["روبن", "نيفيز", "روبن نيفيز"],
        club: "الهلال",
        nationality: "البرتغال",
        position: "وسط",
        birthDate: "1997-03-13",
        foot: "يمين",
        height: 180,
        active: true
    },
    {
        id: 15,
        name: "مراد هوساوي",
        aliases: ["مراد", "هوساوي", "مراد هوساوي"],
        club: "الهلال",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "2001-06-03",
        foot: "يسار",
        height: 180,
        active: true
    },
    {
        id: 16,
        name: "سيرجي ميلينكوفيتش سافيتش",
        aliases: [
            "سيرجي",
            "سافيتش",
            "ميلينكوفيتش سافيتش",
            "سيرجي سافيتش"
        ],
        club: "الهلال",
        nationality: "صربيا",
        position: "وسط",
        birthDate: "1995-02-27",
        foot: "يمين",
        height: 191,
        active: true
    },
    {
        id: 17,
        name: "سلطان مندش",
        aliases: ["مندش", "سلطان مندش"],
        club: "الهلال",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "1994-10-17",
        foot: "يمين",
        height: 172,
        active: true
    },
    {
        id: 18,
        name: "محمد كنو",
        aliases: ["كنو", "محمد كنو"],
        club: "الهلال",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "1994-09-22",
        foot: "يمين",
        height: 192,
        active: true
    },
    {
        id: 19,
        name: "سايمون بوابري",
        aliases: ["سايمون", "بوابري", "سايمون بوابري"],
        club: "الهلال",
        nationality: "فرنسا",
        position: "وسط",
        birthDate: "2006-06-01",
        foot: "يمين",
        height: 174,
        active: true
    },
    {
        id: 20,
        name: "صبري دهل",
        aliases: ["صبري", "دهل", "صبري دهل"],
        club: "الهلال",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "2008-02-29",
        foot: "يمين",
        height: 172,
        active: true
    },
    {
        id: 21,
        name: "عبدالله العنزي",
        aliases: ["العنزي", "عبدالله العنزي"],
        club: "الهلال",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "2003-01-19",
        foot: "يمين",
        height: 177,
        active: true
    },

    // الهجوم
    {
        id: 22,
        name: "غابرييل مارتينيلي",
        aliases: ["مارتينيلي", "غابرييل", "غابرييل مارتينيلي"],
        club: "الهلال",
        nationality: "البرازيل",
        position: "هجوم",
        birthDate: "2001-06-18",
        foot: "يمين",
        height: 178,
        active: true
    },
    {
        id: 23,
        name: "أولي واتكنز",
        aliases: ["واتكنز", "أولي", "أولي واتكنز"],
        club: "الهلال",
        nationality: "إنجلترا",
        position: "هجوم",
        birthDate: "1995-12-30",
        foot: "يمين",
        height: 180,
        active: true
    },
    {
        id: 24,
        name: "سالم الدوسري",
        aliases: ["سالم", "سالم الدوسري"],
        club: "الهلال",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "1991-08-19",
        foot: "يمين",
        height: 171,
        active: true
    },
    {
        id: 25,
        name: "كريسينسيو سامرفيل",
        aliases: ["سامرفيل", "كريسينسيو", "كريسينسيو سامرفيل"],
        club: "الهلال",
        nationality: "هولندا",
        position: "هجوم",
        birthDate: "2001-10-30",
        foot: "يمين",
        height: 174,
        active: true
    },
    {
        id: 26,
        name: "محمد قادر ميتي",
        aliases: ["ميتي", "محمد ميتي", "قادر ميتي", "محمد قادر ميتي"],
        club: "الهلال",
        nationality: "ساحل العاج",
        position: "هجوم",
        birthDate: "2007-10-11",
        foot: "يمين",
        height: 191,
        active: true
    },
    {
        id: 27,
        name: "نواف الحبشي",
        aliases: ["الحبشي", "نواف الحبشي"],
        club: "الهلال",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "1998-06-23",
        foot: "يمين",
        height: 184,
        active: true
    },

        // ========================================
    // النصر
    // ========================================

    // حراس المرمى
    {
        id: 28,
        name: "بينتو",
        aliases: ["بينتو", "بينتو ماثيوس"],
        club: "النصر",
        nationality: "البرازيل",
        position: "حارس",
        birthDate: "1999-06-10",
        foot: "يمين",
        height: 190,
        active: true
    },
    {
        id: 29,
        name: "نواف العقيدي",
        aliases: ["العقيدي", "نواف العقيدي"],
        club: "النصر",
        nationality: "السعودية",
        position: "حارس",
        birthDate: "2000-05-10",
        foot: "يمين",
        height: 186,
        active: true
    },
    {
        id: 30,
        name: "راغد النجار",
        aliases: ["راغد", "النجار", "راغد النجار"],
        club: "النصر",
        nationality: "السعودية",
        position: "حارس",
        birthDate: "1996-09-20",
        foot: "يمين",
        height: 189,
        active: true
    },
    {
        id: 31,
        name: "عبدالرحمن العتيبي",
        aliases: ["العتيبي", "عبدالرحمن العتيبي"],
        club: "النصر",
        nationality: "السعودية",
        position: "حارس",
        birthDate: "2008-02-05",
        foot: "يمين",
        height: 180,
        active: true
    },

    // الدفاع
    {
        id: 32,
        name: "محمد سيماكان",
        aliases: ["سيماكان", "محمد سيماكان"],
        club: "النصر",
        nationality: "فرنسا",
        position: "دفاع",
        birthDate: "2000-05-03",
        foot: "يمين",
        height: 187,
        active: true
    },
    {
        id: 33,
        name: "إينيغو مارتينيز",
        aliases: ["إينيغو", "مارتينيز", "إينيغو مارتينيز"],
        club: "النصر",
        nationality: "إسبانيا",
        position: "دفاع",
        birthDate: "1991-05-17",
        foot: "يسار",
        height: 182,
        active: true
    },
    {
        id: 34,
        name: "عبدالإله العمري",
        aliases: ["العمري", "عبدالإله العمري"],
        club: "النصر",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1997-01-15",
        foot: "يمين",
        height: 185,
        active: true
    },
    {
        id: 35,
        name: "نادر الشراري",
        aliases: ["الشراري", "نادر الشراري"],
        club: "النصر",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1996-05-08",
        foot: "يمين",
        height: 184,
        active: true
    },
    {
        id: 36,
        name: "سلطان الغنام",
        aliases: ["الغنام", "سلطان الغنام"],
        club: "النصر",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1994-05-06",
        foot: "يمين",
        height: 173,
        active: true
    },
    {
        id: 37,
        name: "نواف بوشل",
        aliases: ["بوشل", "نواف بوشل"],
        club: "النصر",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1999-09-16",
        foot: "يمين",
        height: 178,
        active: true
    },
    {
        id: 38,
        name: "سالم النجدي",
        aliases: ["النجدي", "سالم النجدي"],
        club: "النصر",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2003-01-27",
        foot: "يسار",
        height: 178,
        active: true
    },
    {
        id: 39,
        name: "سعد الناصر",
        aliases: ["سعد", "الناصر", "سعد الناصر"],
        club: "النصر",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2001-01-08",
        foot: "يسار",
        height: 172,
        active: true
    },
    {
        id: 40,
        name: "أيمن يحيى",
        aliases: ["أيمن", "أيمن يحيى"],
        club: "النصر",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2001-05-14",
        foot: "يسار",
        height: 168,
        active: true
    },

    // الوسط
    {
        id: 41,
        name: "سامو كوستا",
        aliases: ["سامو", "كوستا", "سامو كوستا"],
        club: "النصر",
        nationality: "البرتغال",
        position: "وسط",
        birthDate: "2000-11-27",
        foot: "يسار",
        height: 185,
        active: true
    },
    {
        id: 42,
        name: "عبدالله الخيبري",
        aliases: ["الخيبري", "عبدالله الخيبري"],
        club: "النصر",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "1996-08-16",
        foot: "يمين",
        height: 175,
        active: true
    },
    {
        id: 43,
        name: "سامي النجعي",
        aliases: ["النجعي", "سامي", "سامي النجعي"],
        club: "النصر",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "1997-02-07",
        foot: "يمين",
        height: 176,
        active: true
    },
    {
        id: 44,
        name: "حيدر عبدالكريم",
        aliases: ["حيدر", "عبدالكريم", "حيدر عبدالكريم"],
        club: "النصر",
        nationality: "العراق",
        position: "وسط",
        birthDate: "2004-08-07",
        foot: "يسار",
        height: 190,
        active: true
    },

    // الهجوم
    {
        id: 45,
        name: "كريستيانو رونالدو",
        aliases: [
            "رونالدو",
            "كريستيانو",
            "كريستيانو رونالدو",
            "CR7"
        ],
        club: "النصر",
        nationality: "البرتغال",
        position: "هجوم",
        birthDate: "1985-02-05",
        foot: "يمين",
        height: 185,
        active: true
    },
    {
        id: 46,
        name: "ساديو ماني",
        aliases: ["ماني", "ساديو", "ساديو ماني"],
        club: "النصر",
        nationality: "السنغال",
        position: "هجوم",
        birthDate: "1992-04-10",
        foot: "يمين",
        height: 175,
        active: true
    },
    {
        id: 47,
        name: "كينغسلي كومان",
        aliases: ["كومان", "كينغسلي", "كينغسلي كومان"],
        club: "النصر",
        nationality: "فرنسا",
        position: "هجوم",
        birthDate: "1996-06-13",
        foot: "يمين",
        height: 181,
        active: true
    },
    {
        id: 48,
        name: "جواو فيليكس",
        aliases: ["جواو", "فيليكس", "جواو فيليكس"],
        club: "النصر",
        nationality: "البرتغال",
        position: "هجوم",
        birthDate: "1999-11-10",
        foot: "يمين",
        height: 179,
        active: true
    },
    {
        id: 49,
        name: "أنجيلو غابرييل",
        aliases: ["أنجيلو", "أنجيلو غابرييل"],
        club: "النصر",
        nationality: "البرازيل",
        position: "هجوم",
        birthDate: "2004-12-21",
        foot: "يسار",
        height: 180,
        active: true
    },
    {
        id: 50,
        name: "عبدالله الحمدان",
        aliases: ["الحمدان", "عبدالله الحمدان"],
        club: "النصر",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "1999-09-12",
        foot: "يمين",
        height: 186,
        active: true
    },
    {
        id: 51,
        name: "محمد مران",
        aliases: ["مران", "محمد مران"],
        club: "النصر",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "2001-02-15",
        foot: "يمين",
        height: 175,
        active: true
    },

        // ========================================
    // الأهلي
    // ========================================

    // حراس المرمى
    {
        id: 52,
        name: "إدوارد ميندي",
        aliases: ["ميندي", "إدوارد ميندي"],
        club: "الأهلي",
        nationality: "السنغال",
        position: "حارس",
        birthDate: "1992-03-01",
        foot: "يمين",
        height: 194,
        active: true
    },
    {
        id: 53,
        name: "عبدالرحمن الصانبي",
        aliases: ["الصانبي", "عبدالرحمن الصانبي"],
        club: "الأهلي",
        nationality: "السعودية",
        position: "حارس",
        birthDate: "2001-02-03",
        foot: "يمين",
        height: 185,
        active: true
    },
    {
        id: 54,
        name: "سعد الجدعاني",
        aliases: ["الجدعاني", "سعد الجدعاني"],
        club: "الأهلي",
        nationality: "السعودية",
        position: "حارس",
        birthDate: "1997-03-04",
        foot: "يمين",
        height: 188,
        active: true
    },

    // الدفاع
    {
        id: 55,
        name: "روجر إيبانيز",
        aliases: ["إيبانيز", "روجر إيبانيز"],
        club: "الأهلي",
        nationality: "البرازيل",
        position: "دفاع",
        birthDate: "1998-11-23",
        foot: "يمين",
        height: 185,
        active: true
    },
    {
        id: 56,
        name: "ميريح ديميرال",
        aliases: ["ديميرال", "ميريح ديميرال"],
        club: "الأهلي",
        nationality: "تركيا",
        position: "دفاع",
        birthDate: "1998-03-05",
        foot: "يمين",
        height: 190,
        active: true
    },
    {
        id: 57,
        name: "زكريا هوساوي",
        aliases: ["زكريا", "هوساوي", "زكريا هوساوي"],
        club: "الأهلي",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2001-01-12",
        foot: "يسار",
        height: 173,
        active: true
    },
    {
        id: 58,
        name: "علي مجرشي",
        aliases: ["مجرشي", "علي مجرشي"],
        club: "الأهلي",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1999-10-01",
        foot: "يمين",
        height: 169,
        active: true
    },
    {
        id: 59,
        name: "محمد سليمان",
        aliases: ["محمد سليمان", "سليمان"],
        club: "الأهلي",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2004-04-08",
        foot: "يمين",
        height: 182,
        active: true
    },
    {
        id: 60,
        name: "ريان حامد",
        aliases: ["ريان", "ريان حامد"],
        club: "الأهلي",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2002-04-13",
        foot: "يمين",
        height: 180,
        active: true
    },
    {
        id: 61,
        name: "سعد بالعبيد",
        aliases: ["بالعبيد", "سعد بالعبيد"],
        club: "الأهلي",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2000-01-27",
        foot: "يسار",
        height: 172,
        active: true
    },
    {
        id: 62,
        name: "محمد عبدالرحمن",
        aliases: ["محمد عبدالرحمن"],
        club: "الأهلي",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2003-05-20",
        foot: "يمين",
        height: 175,
        active: true
    },

    // الوسط
    {
        id: 63,
        name: "إدوارد سبيرتسيان",
        aliases: ["سبيرتسيان", "إدوارد سبيرتسيان"],
        club: "الأهلي",
        nationality: "أرمينيا",
        position: "وسط",
        birthDate: "2000-06-07",
        foot: "يمين",
        height: 178,
        active: true
    },
    {
        id: 64,
        name: "أرتيم بوندارينكو",
        aliases: ["بوندارينكو", "أرتيم بوندارينكو"],
        club: "الأهلي",
        nationality: "أوكرانيا",
        position: "وسط",
        birthDate: "2000-08-21",
        foot: "يسار",
        height: 182,
        active: true
    },
    {
        id: 65,
        name: "فالنتين أتانغانا",
        aliases: ["أتانغانا", "فالنتين أتانغانا"],
        club: "الأهلي",
        nationality: "فرنسا",
        position: "وسط",
        birthDate: "2005-08-25",
        foot: "يمين",
        height: 183,
        active: true
    },
    {
        id: 66,
        name: "زياد الجهني",
        aliases: ["زياد", "الجهني", "زياد الجهني"],
        club: "الأهلي",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "2001-11-11",
        foot: "يمين",
        height: 180,
        active: true
    },
    {
        id: 67,
        name: "نايف مسعود",
        aliases: ["نايف", "نايف مسعود"],
        club: "الأهلي",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "2001-03-08",
        foot: "يمين",
        height: 172,
        active: true
    },
    {
        id: 68,
        name: "إبراهيما ديابي",
        aliases: ["ديابي", "إبراهيما ديابي"],
        club: "الأهلي",
        nationality: "ساحل العاج",
        position: "وسط",
        birthDate: "2007-01-10",
        foot: "يمين",
        height: 185,
        active: true
    },
    {
        id: 69,
        name: "سعيد باعطية",
        aliases: ["باعطية", "سعيد باعطية"],
        club: "الأهلي",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "2000-02-03",
        foot: "يمين",
        height: 172,
        active: true
    },
    {
        id: 70,
        name: "مشعل المطيري",
        aliases: ["المطيري", "مشعل المطيري"],
        club: "الأهلي",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "2004-05-04",
        foot: "يمين",
        height: 168,
        active: true
    },

    // الهجوم
    {
        id: 71,
        name: "إيفان توني",
        aliases: ["توني", "إيفان", "إيفان توني"],
        club: "الأهلي",
        nationality: "إنجلترا",
        position: "هجوم",
        birthDate: "1996-03-16",
        foot: "يمين",
        height: 185,
        active: true
    },
    {
        id: 72,
        name: "فرانسيسكو ترينكاو",
        aliases: ["ترينكاو", "فرانسيسكو ترينكاو"],
        club: "الأهلي",
        nationality: "البرتغال",
        position: "هجوم",
        birthDate: "1999-12-29",
        foot: "يسار",
        height: 184,
        active: true
    },
    {
        id: 73,
        name: "غالينو",
        aliases: ["غالينو", "ويندرسون غالينو"],
        club: "الأهلي",
        nationality: "البرازيل",
        position: "هجوم",
        birthDate: "1997-10-22",
        foot: "يمين",
        height: 179,
        active: true
    },
    {
        id: 74,
        name: "فراس البريكان",
        aliases: ["فراس", "البريكان", "فراس البريكان"],
        club: "الأهلي",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "2000-05-14",
        foot: "يسار",
        height: 181,
        active: true
    },
    {
        id: 75,
        name: "عبدالله رديف",
        aliases: ["رديف", "عبدالله رديف"],
        club: "الأهلي",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "2003-01-20",
        foot: "يسار",
        height: 187,
        active: true
    },
    {
        id: 76,
        name: "صالح أبو الشامات",
        aliases: ["أبو الشامات", "صالح أبو الشامات"],
        club: "الأهلي",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "2002-11-02",
        foot: "يسار",
        height: 171,
        active: true
    },
    {
        id: 77,
        name: "ماتيوس غونسالفيس",
        aliases: ["ماتيوس", "غونسالفيس", "ماتيوس غونسالفيس"],
        club: "الأهلي",
        nationality: "البرازيل",
        position: "هجوم",
        birthDate: "2005-08-18",
        foot: "يسار",
        height: 175,
        active: true
    },

        // ========================================
    // الاتحاد
    // ========================================

    // حراس المرمى
    {
        id: 78,
        name: "بريدراج رايكوفيتش",
        aliases: ["رايكوفيتش", "بريدراج رايكوفيتش"],
        club: "الاتحاد",
        nationality: "صربيا",
        position: "حارس",
        birthDate: "1995-10-31",
        foot: "يمين",
        height: 191,
        active: true
    },
    {
        id: 79,
        name: "محمد المحاسنة",
        aliases: ["المحاسنة", "محمد المحاسنة"],
        club: "الاتحاد",
        nationality: "السعودية",
        position: "حارس",
        birthDate: "1997-01-13",
        foot: "يمين",
        height: 187,
        active: true
    },
    {
        id: 80,
        name: "أسامة المرمش",
        aliases: ["المرمش", "أسامة المرمش"],
        club: "الاتحاد",
        nationality: "السعودية",
        position: "حارس",
        birthDate: "2003-07-06",
        foot: "يمين",
        height: 186,
        active: true
    },

    // الدفاع
    {
        id: 81,
        name: "دانيلو بيريرا",
        aliases: ["دانيلو", "دانيلو بيريرا", "بيريرا"],
        club: "الاتحاد",
        nationality: "البرتغال",
        position: "دفاع",
        birthDate: "1991-09-09",
        foot: "يمين",
        height: 188,
        active: true
    },
    {
        id: 82,
        name: "حسن كادش",
        aliases: ["كادش", "حسن كادش"],
        club: "الاتحاد",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1992-09-26",
        foot: "يسار",
        height: 179,
        active: true
    },
    {
        id: 83,
        name: "سعد الموسى",
        aliases: ["سعد", "الموسى", "سعد الموسى"],
        club: "الاتحاد",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2002-12-10",
        foot: "يمين",
        height: 183,
        active: true
    },
    {
        id: 84,
        name: "مهند الشنقيطي",
        aliases: ["الشنقيطي", "مهند الشنقيطي"],
        club: "الاتحاد",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1999-03-12",
        foot: "يمين",
        height: 171,
        active: true
    },
    {
        id: 85,
        name: "معاذ فقيهي",
        aliases: ["فقيهي", "معاذ فقيهي"],
        club: "الاتحاد",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2002-05-30",
        foot: "يسار",
        height: 188,
        active: true
    },
    {
        id: 86,
        name: "فارس عابدي",
        aliases: ["فارس", "عابدي", "فارس عابدي"],
        club: "الاتحاد",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1999-05-09",
        foot: "يسار",
        height: 180,
        active: true
    },

    // الوسط
    {
        id: 87,
        name: "نغولو كانتي",
        aliases: ["كانتي", "نغولو كانتي", "نغولو"],
        club: "الاتحاد",
        nationality: "فرنسا",
        position: "وسط",
        birthDate: "1991-03-29",
        foot: "يمين",
        height: 168,
        active: true
    },
    {
        id: 88,
        name: "حسام عوار",
        aliases: ["عوار", "حسام عوار"],
        club: "الاتحاد",
        nationality: "الجزائر",
        position: "وسط",
        birthDate: "1998-06-30",
        foot: "يمين",
        height: 175,
        active: true
    },
    {
        id: 89,
        name: "ديون لوبي",
        aliases: ["لوبي", "ديون لوبي"],
        club: "الاتحاد",
        nationality: "السنغال",
        position: "وسط",
        birthDate: "2002-02-02",
        foot: "يمين",
        height: 186,
        active: true
    },
    {
        id: 90,
        name: "ريتشارد ريوس",
        aliases: ["ريوس", "ريتشارد ريوس"],
        club: "الاتحاد",
        nationality: "كولومبيا",
        position: "وسط",
        birthDate: "2000-06-02",
        foot: "يمين",
        height: 187,
        active: true
    },
    {
        id: 91,
        name: "جورجينيو فينالدوم",
        aliases: ["فينالدوم", "جورجينيو", "جورجينيو فينالدوم"],
        club: "الاتحاد",
        nationality: "هولندا",
        position: "وسط",
        birthDate: "1990-11-11",
        foot: "يمين",
        height: 175,
        active: true
    },
    {
        id: 92,
        name: "مختار علي",
        aliases: ["مختار", "مختار علي"],
        club: "الاتحاد",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "1997-10-30",
        foot: "يمين",
        height: 185,
        active: true
    },
    {
        id: 93,
        name: "عوض الناشري",
        aliases: ["الناشري", "عوض الناشري"],
        club: "الاتحاد",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "2002-03-15",
        foot: "يمين",
        height: 175,
        active: true
    },
    {
        id: 94,
        name: "ركان الكعبي",
        aliases: ["ركان", "الكعبي", "ركان الكعبي"],
        club: "الاتحاد",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "2002-12-02",
        foot: "يمين",
        height: 178,
        active: true
    },

    // الهجوم
    {
        id: 95,
        name: "كريم بنزيما",
        aliases: ["بنزيما", "كريم", "كريم بنزيما"],
        club: "الاتحاد",
        nationality: "فرنسا",
        position: "هجوم",
        birthDate: "1987-12-19",
        foot: "يمين",
        height: 185,
        active: true
    },
    {
        id: 96,
        name: "ستيفن بيرجوين",
        aliases: ["بيرجوين", "ستيفن بيرجوين"],
        club: "الاتحاد",
        nationality: "هولندا",
        position: "هجوم",
        birthDate: "1997-10-08",
        foot: "يمين",
        height: 178,
        active: true
    },
    {
        id: 97,
        name: "مروان الصحفي",
        aliases: ["الصحفي", "مروان", "مروان الصحفي"],
        club: "الاتحاد",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "2004-02-17",
        foot: "يمين",
        height: 188,
        active: true
    },
    {
        id: 98,
        name: "صالح الشهري",
        aliases: ["الشهري", "صالح الشهري"],
        club: "الاتحاد",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "1993-11-01",
        foot: "يمين",
        height: 184,
        active: true
    },
    {
        id: 99,
        name: "أحمد الغامدي",
        aliases: ["الغامدي", "أحمد الغامدي"],
        club: "الاتحاد",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "2001-09-20",
        foot: "يمين",
        height: 175,
        active: true
    },
    {
        id: 100,
        name: "جورج إيلينيخينا",
        aliases: ["جورج", "إيلينيخينا", "جورج إيلينيخينا"],
        club: "الاتحاد",
        nationality: "نيجيريا",
        position: "هجوم",
        birthDate: "2006-08-16",
        foot: "يسار",
        height: 185,
        active: true
    },

          // ========================================
    // القادسية - مصححة
    // ========================================

    // حراس المرمى
    {
        id: 101,
        name: "كوين كاستيلس",
        aliases: ["كاستيلس", "كوين كاستيلس"],
        club: "القادسية",
        nationality: "بلجيكا",
        position: "حارس",
        birthDate: "1992-06-25",
        foot: "يسار",
        height: 197,
        active: true
    },
    {
        id: 102,
        name: "أحمد الكسار",
        aliases: ["الكسار", "أحمد الكسار"],
        club: "القادسية",
        nationality: "السعودية",
        position: "حارس",
        birthDate: "1991-05-08",
        foot: "يمين",
        height: 177,
        active: true
    },
    {
        id: 103,
        name: "مشاري سنيور",
        aliases: ["سنيور", "مشاري سنيور"],
        club: "القادسية",
        nationality: "السعودية",
        position: "حارس",
        birthDate: "2001-12-05",
        foot: "يمين",
        height: 188,
        active: true
    },

    // الدفاع
    {
        id: 104,
        name: "ناتشو فيرنانديز",
        aliases: ["ناتشو", "ناتشو فيرنانديز"],
        club: "القادسية",
        nationality: "إسبانيا",
        position: "دفاع",
        birthDate: "1990-01-18",
        foot: "يمين",
        height: 180,
        active: true
    },
    {
        id: 105,
        name: "جاستون ألفاريز",
        aliases: ["ألفاريز", "جاستون ألفاريز"],
        club: "القادسية",
        nationality: "أوروغواي",
        position: "دفاع",
        birthDate: "2000-03-24",
        foot: "يسار",
        height: 184,
        active: true
    },
    {
        id: 106,
        name: "جهاد ذكري",
        aliases: ["جهاد", "ذكري", "جهاد ذكري"],
        club: "القادسية",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2001-07-20",
        foot: "يمين",
        height: 183,
        active: true
    },
    {
        id: 107,
        name: "ياسر الشهراني",
        aliases: ["ياسر", "الشهراني", "ياسر الشهراني"],
        club: "القادسية",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1992-05-25",
        foot: "يسار",
        height: 170,
        active: true
    },
    {
        id: 108,
        name: "محمد أبو الشامات",
        aliases: ["أبو الشامات", "محمد أبو الشامات"],
        club: "القادسية",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2002-08-11",
        foot: "يمين",
        height: 171,
        active: true
    },
    {
        id: 109,
        name: "وليد الأحمد",
        aliases: ["وليد", "الأحمد", "وليد الأحمد"],
        club: "القادسية",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1999-05-03",
        foot: "يمين",
        height: 188,
        active: true
    },
    {
        id: 110,
        name: "علي دياباتي",
        aliases: ["دياباتي", "علي دياباتي"],
        club: "القادسية",
        nationality: "ساحل العاج",
        position: "دفاع",
        birthDate: "2006-12-05",
        foot: "يمين",
        height: 187,
        active: true
    },

    // الوسط
    {
        id: 111,
        name: "مصعب الجوير",
        aliases: ["الجوير", "مصعب", "مصعب الجوير"],
        club: "القادسية",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "2003-06-20",
        foot: "يمين",
        height: 175,
        active: true
    },
    {
        id: 112,
        name: "تيجاني رايندرز",
        aliases: ["رايندرز", "تيجاني", "تيجاني رايندرز"],
        club: "القادسية",
        nationality: "هولندا",
        position: "وسط",
        birthDate: "1998-07-29",
        foot: "يمين",
        height: 185,
        active: true
    },
    {
        id: 113,
        name: "جوليان فايغل",
        aliases: ["فايغل", "جوليان فايغل"],
        club: "القادسية",
        nationality: "ألمانيا",
        position: "وسط",
        birthDate: "1995-09-08",
        foot: "يمين",
        height: 186,
        active: true
    },
    {
        id: 114,
        name: "ناهيتان نانديز",
        aliases: ["نانديز", "ناهيتان نانديز"],
        club: "القادسية",
        nationality: "أوروغواي",
        position: "وسط",
        birthDate: "1995-12-28",
        foot: "يمين",
        height: 172,
        active: true
    },
    {
        id: 115,
        name: "تركي العمار",
        aliases: ["العمار", "تركي", "تركي العمار"],
        club: "القادسية",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "1999-09-23",
        foot: "يمين",
        height: 173,
        active: true
    },
    {
        id: 116,
        name: "عبدالملك الجابر",
        aliases: ["الجابر", "عبدالملك الجابر"],
        club: "القادسية",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "2004-01-07",
        foot: "يمين",
        height: 178,
        active: true
    },
    {
        id: 117,
        name: "عبدالعزيز العليوة",
        aliases: ["العليوة", "عبدالعزيز العليوة"],
        club: "القادسية",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "2004-02-11",
        foot: "يمين",
        height: 174,
        active: true
    },
    {
        id: 118,
        name: "إياد هوسا",
        aliases: ["هوسا", "إياد هوسا"],
        club: "القادسية",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "2005-01-01",
        foot: "يمين",
        height: 175,
        active: true
    },

    // الهجوم
    {
        id: 119,
        name: "ماتيو ريتيغي",
        aliases: ["ريتيغي", "ماتيو ريتيغي"],
        club: "القادسية",
        nationality: "إيطاليا",
        position: "هجوم",
        birthDate: "1999-04-29",
        foot: "يمين",
        height: 186,
        active: true
    },
    {
        id: 120,
        name: "جوليان كينونيس",
        aliases: ["كينونيس", "جوليان كينونيس"],
        club: "القادسية",
        nationality: "المكسيك",
        position: "هجوم",
        birthDate: "1997-03-24",
        foot: "يمين",
        height: 178,
        active: true
    },
    {
        id: 121,
        name: "كريستوفر بونسو باه",
        aliases: ["بونسو باه", "كريستوفر بونسو باه"],
        club: "القادسية",
        nationality: "غانا",
        position: "هجوم",
        birthDate: "2004-12-14",
        foot: "يسار",
        height: 172,
        active: true
    },
    {
        id: 122,
        name: "محمد القحطاني",
        aliases: ["القحطاني", "محمد القحطاني"],
        club: "القادسية",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "2002-07-23",
        foot: "يمين",
        height: 168,
        active: true
    },
    {
        id: 123,
        name: "عبدالله السالم",
        aliases: ["السالم", "عبدالله السالم"],
        club: "القادسية",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "1992-12-19",
        foot: "يمين",
        height: 183,
        active: true
    },
    {
        id: 124,
        name: "هيثم عسيري",
        aliases: ["هيثم", "عسيري", "هيثم عسيري"],
        club: "القادسية",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "2001-03-25",
        foot: "يمين",
        height: 174,
        active: true
    },
    {
        id: 125,
        name: "محمادو سانغاري",
        aliases: ["سانغاري", "محمادو سانغاري"],
        club: "القادسية",
        nationality: "مالي",
        position: "هجوم",
        birthDate: "2006-09-06",
        foot: "يمين",
        height: 178,
        active: true
    },

           // ========================================
    // التعاون - مصححة
    // ========================================

    // حراس المرمى
    {
        id: 126,
        name: "مايلسون",
        aliases: ["مايلسون", "مايلسون دوس سانتوس"],
        club: "التعاون",
        nationality: "البرازيل",
        position: "حارس",
        birthDate: "1996-08-20",
        foot: "يمين",
        height: 197,
        active: true
    },
    {
        id: 127,
        name: "عبدالله الجدعاني",
        aliases: ["الجدعاني", "عبدالله الجدعاني"],
        club: "التعاون",
        nationality: "السعودية",
        position: "حارس",
        birthDate: "1991-03-06",
        foot: "يمين",
        height: 183,
        active: true
    },

    // الدفاع
    {
        id: 128,
        name: "عون السلولي",
        aliases: ["السلولي", "عون السلولي"],
        club: "التعاون",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1998-09-02",
        foot: "يمين",
        height: 194,
        active: true
    },
    {
        id: 129,
        name: "عبدالرحمن هندي",
        aliases: ["هندي", "عبدالرحمن هندي"],
        club: "التعاون",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1997-02-02",
        foot: "يمين",
        height: 184,
        active: true
    },
    {
        id: 130,
        name: "زين الدين بلعيد",
        aliases: ["بلعيد", "زين الدين بلعيد"],
        club: "التعاون",
        nationality: "الجزائر",
        position: "دفاع",
        birthDate: "1999-03-20",
        foot: "يمين",
        height: 187,
        active: true
    },
    {
        id: 131,
        name: "جير كولاهوازو",
        aliases: ["كولاهوازو", "جير كولاهوازو"],
        club: "التعاون",
        nationality: "الإكوادور",
        position: "دفاع",
        birthDate: "2006-01-21",
        foot: "يمين",
        height: 190,
        active: true
    },
    {
        id: 132,
        name: "ركان الطليحي",
        aliases: ["الطليحي", "ركان الطليحي"],
        club: "التعاون",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2002-09-22",
        foot: "يمين",
        height: 180,
        active: true
    },

    // الوسط
    {
        id: 133,
        name: "أوسكار دورلي",
        aliases: ["دورلي", "أوسكار دورلي"],
        club: "التعاون",
        nationality: "ليبيريا",
        position: "وسط",
        birthDate: "1998-07-19",
        foot: "يسار",
        height: 174,
        active: true
    },
    {
        id: 134,
        name: "نديم بايرامي",
        aliases: ["بايرامي", "نديم بايرامي"],
        club: "التعاون",
        nationality: "ألبانيا",
        position: "وسط",
        birthDate: "1999-02-28",
        foot: "يمين",
        height: 179,
        active: true
    },
    {
        id: 135,
        name: "بارفيه غياغون",
        aliases: ["غياغون", "بارفيه غياغون"],
        club: "التعاون",
        nationality: "ساحل العاج",
        position: "وسط",
        birthDate: "2001-02-22",
        foot: "يمين",
        height: 169,
        active: true
    },
    {
        id: 136,
        name: "فارس الغامدي",
        aliases: ["فارس", "الغامدي", "فارس الغامدي"],
        club: "التعاون",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "1999-06-13",
        foot: "يمين",
        height: 175,
        active: true
    },
    {
        id: 137,
        name: "ناصر الهليل",
        aliases: ["الهليل", "ناصر الهليل"],
        club: "التعاون",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "2001-10-10",
        foot: "يمين",
        height: 175,
        active: true
    },
    {
        id: 138,
        name: "عبدالفتاح آدم",
        aliases: ["عبدالفتاح", "آدم", "عبدالفتاح آدم"],
        club: "التعاون",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "1995-01-01",
        foot: "يمين",
        height: 180,
        active: true
    },

    // الهجوم
    {
        id: 139,
        name: "عبدالرزاق حمدالله",
        aliases: ["حمدالله", "عبدالرزاق حمدالله"],
        club: "التعاون",
        nationality: "المغرب",
        position: "هجوم",
        birthDate: "1990-12-17",
        foot: "يمين",
        height: 182,
        active: true
    },
    {
        id: 140,
        name: "يونس البحراوي",
        aliases: ["البحراوي", "يونس البحراوي"],
        club: "التعاون",
        nationality: "المغرب",
        position: "هجوم",
        birthDate: "2001-05-26",
        foot: "يمين",
        height: 183,
        active: true
    },
    {
        id: 141,
        name: "محمد السعدي",
        aliases: ["السعدي", "محمد السعدي"],
        club: "التعاون",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "2000-01-01",
        foot: "يمين",
        height: 175,
        active: true
    },

            // ========================================
    // الشباب - مصححة
    // ========================================

    // حراس المرمى
    {
        id: 142,
        name: "مارسيلو غروهي",
        aliases: ["غروهي", "مارسيلو", "مارسيلو غروهي"],
        club: "الشباب",
        nationality: "البرازيل",
        position: "حارس",
        birthDate: "1987-01-13",
        foot: "يمين",
        height: 188,
        active: true
    },
    {
        id: 143,
        name: "محمد المحاسنة",
        aliases: ["المحاسنة", "محمد المحاسنة"],
        club: "الشباب",
        nationality: "السعودية",
        position: "حارس",
        birthDate: "1997-01-13",
        foot: "يمين",
        height: 187,
        active: true
    },
    {
        id: 144,
        name: "عبدالعزيز العويرضي",
        aliases: ["العويرضي", "عبدالعزيز العويرضي"],
        club: "الشباب",
        nationality: "السعودية",
        position: "حارس",
        birthDate: "2002-03-11",
        foot: "يمين",
        height: 184,
        active: true
    },

    // الدفاع
    {
        id: 145,
        name: "علي البليهي",
        aliases: ["البليهي", "علي البليهي"],
        club: "الشباب",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1989-11-21",
        foot: "يسار",
        height: 182,
        active: true
    },
    {
        id: 146,
        name: "ويسلي هودت",
        aliases: ["هودت", "ويسلي هودت"],
        club: "الشباب",
        nationality: "هولندا",
        position: "دفاع",
        birthDate: "1994-03-06",
        foot: "يسار",
        height: 193,
        active: true
    },
    {
        id: 147,
        name: "محمد الثاني",
        aliases: ["الثاني", "محمد الثاني"],
        club: "الشباب",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1997-02-03",
        foot: "يمين",
        height: 178,
        active: true
    },
    {
        id: 148,
        name: "سعد يسلم",
        aliases: ["سعد", "سعد يسلم", "يسلم"],
        club: "الشباب",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2000-01-27",
        foot: "يسار",
        height: 178,
        active: true
    },
    {
        id: 149,
        name: "محمد الشويرخ",
        aliases: ["الشويرخ", "محمد الشويرخ"],
        club: "الشباب",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2003-01-01",
        foot: "يمين",
        height: 184,
        active: true
    },
    {
        id: 150,
        name: "علي مكي",
        aliases: ["مكي", "علي مكي"],
        club: "الشباب",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1999-04-20",
        foot: "يمين",
        height: 178,
        active: true
    },
    {
        id: 151,
        name: "فيصل الصبياني",
        aliases: ["الصبياني", "فيصل الصبياني"],
        club: "الشباب",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2003-06-04",
        foot: "يمين",
        height: 175,
        active: true
    },

    // الوسط
    {
        id: 152,
        name: "ياسين عدلي",
        aliases: ["عدلي", "ياسين", "ياسين عدلي"],
        club: "الشباب",
        nationality: "الجزائر",
        position: "وسط",
        birthDate: "2000-07-29",
        foot: "يمين",
        height: 186,
        active: true
    },
    {
        id: 153,
        name: "جوش براونهيل",
        aliases: ["براونهيل", "جوش", "جوش براونهيل"],
        club: "الشباب",
        nationality: "إنجلترا",
        position: "وسط",
        birthDate: "1995-12-19",
        foot: "يمين",
        height: 179,
        active: true
    },
    {
        id: 154,
        name: "فنسنت سيرو",
        aliases: ["سيرو", "فنسنت", "فنسنت سيرو"],
        club: "الشباب",
        nationality: "سويسرا",
        position: "وسط",
        birthDate: "1995-10-08",
        foot: "يمين",
        height: 185,
        active: true
    },
    {
        id: 155,
        name: "يانيك كاراسكو",
        aliases: ["كاراسكو", "يانيك", "يانيك كاراسكو"],
        club: "الشباب",
        nationality: "بلجيكا",
        position: "وسط",
        birthDate: "1993-09-04",
        foot: "يمين",
        height: 181,
        active: true
    },
    {
        id: 156,
        name: "علي الأسمري",
        aliases: ["الأسمري", "علي الأسمري"],
        club: "الشباب",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "1997-01-12",
        foot: "يمين",
        height: 185,
        active: true
    },
    {
        id: 157,
        name: "همام الهمامي",
        aliases: ["همام", "الهمامي", "همام الهمامي"],
        club: "الشباب",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "2004-02-22",
        foot: "يمين",
        height: 173,
        active: true
    },

    // الهجوم
    {
        id: 158,
        name: "هارون كمارا",
        aliases: ["كمارا", "هارون", "هارون كمارا"],
        club: "الشباب",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "1998-01-01",
        foot: "يمين",
        height: 188,
        active: true
    },
    {
        id: 159,
        name: "ريكاردو ماتياس",
        aliases: ["ريكاردو", "ماتياس", "ريكاردو ماتياس"],
        club: "الشباب",
        nationality: "البرازيل",
        position: "هجوم",
        birthDate: "2006-07-25",
        foot: "يسار",
        height: 192,
        active: true
    },

        // ========================================
    // الفتح
    // ========================================

    // حراس المرمى
    {
        id: 160,
        name: "أدريان سامبر",
        aliases: ["سامبر", "أدريان سامبر"],
        club: "الفتح",
        nationality: "كرواتيا",
        position: "حارس",
        birthDate: "1998-01-12",
        foot: "يمين",
        height: 194,
        active: true
    },
    {
        id: 161,
        name: "وليد العنزي",
        aliases: ["وليد", "العنزي", "وليد العنزي"],
        club: "الفتح",
        nationality: "السعودية",
        position: "حارس",
        birthDate: "1996-07-06",
        foot: "يمين",
        height: 190,
        active: true
    },

    // الدفاع
    {
        id: 162,
        name: "كينيدي بواتينغ",
        aliases: ["بواتينغ", "كينيدي بواتينغ"],
        club: "الفتح",
        nationality: "توغو",
        position: "دفاع",
        birthDate: "1996-11-29",
        foot: "يمين",
        height: 191,
        active: true
    },
    {
        id: 163,
        name: "زياد الجري",
        aliases: ["الجري", "زياد الجري"],
        club: "الفتح",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2001-07-12",
        foot: "يمين",
        height: 180,
        active: true
    },
    {
        id: 164,
        name: "عبدالإله الخيبري",
        aliases: ["الخيبري", "عبدالإله الخيبري"],
        club: "الفتح",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1997-05-11",
        foot: "يسار",
        height: 178,
        active: true
    },
    {
        id: 165,
        name: "مروان سعدان",
        aliases: ["سعدان", "مروان سعدان"],
        club: "الفتح",
        nationality: "المغرب",
        position: "دفاع",
        birthDate: "1992-01-17",
        foot: "يمين",
        height: 187,
        active: true
    },
    {
        id: 166,
        name: "روبين كيلدر",
        aliases: ["كيلدر", "روبين كيلدر"],
        club: "الفتح",
        nationality: "هولندا",
        position: "دفاع",
        birthDate: "2001-11-25",
        foot: "يمين",
        height: 188,
        active: true
    },
    {
        id: 167,
        name: "عبدالعزيز السويلم",
        aliases: ["السويلم", "عبدالعزيز السويلم"],
        club: "الفتح",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2006-01-01",
        foot: "يمين",
        height: 180,
        active: true
    },
    {
        id: 168,
        name: "سالم تمبكتي",
        aliases: ["تمبكتي", "سالم تمبكتي"],
        club: "الفتح",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2001-01-01",
        foot: "يمين",
        height: 180,
        active: true
    },

    // الوسط
    {
        id: 169,
        name: "علي الحسن",
        aliases: ["علي", "الحسن", "علي الحسن"],
        club: "الفتح",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "1997-03-04",
        foot: "يمين",
        height: 176,
        active: true
    },
    {
        id: 170,
        name: "ميهاي ليكساندرو",
        aliases: ["ليكساندرو", "ميهاي", "ميهاي ليكساندرو"],
        club: "الفتح",
        nationality: "رومانيا",
        position: "وسط",
        birthDate: "2001-06-05",
        foot: "يمين",
        height: 184,
        active: true
    },
    {
        id: 171,
        name: "زايدو يوسف",
        aliases: ["يوسف", "زايدو", "زايدو يوسف"],
        club: "الفتح",
        nationality: "جزر القمر",
        position: "وسط",
        birthDate: "1999-07-11",
        foot: "يمين",
        height: 182,
        active: true
    },
    {
        id: 172,
        name: "عبدالعزيز الفواز",
        aliases: ["الفواز", "عبدالعزيز الفواز"],
        club: "الفتح",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "2008-01-01",
        foot: "يمين",
        height: 175,
        active: true
    },

    // الهجوم
    {
        id: 173,
        name: "لوكاس هاراسلين",
        aliases: ["هاراسلين", "لوكاس", "لوكاس هاراسلين"],
        club: "الفتح",
        nationality: "سلوفاكيا",
        position: "هجوم",
        birthDate: "1996-05-26",
        foot: "يمين",
        height: 182,
        active: true
    },
    {
        id: 174,
        name: "ويلفريد كانجا",
        aliases: ["كانجا", "ويلفريد", "ويلفريد كانجا"],
        club: "الفتح",
        nationality: "ساحل العاج",
        position: "هجوم",
        birthDate: "1998-02-21",
        foot: "يمين",
        height: 189,
        active: true
    },
    {
        id: 175,
        name: "مراد باتنا",
        aliases: ["باتنا", "مراد", "مراد باتنا"],
        club: "الفتح",
        nationality: "المغرب",
        position: "هجوم",
        birthDate: "1990-06-27",
        foot: "يسار",
        height: 184,
        active: true
    },
    {
        id: 176,
        name: "سوريسو",
        aliases: ["سوريسو", "سوريسو بيريرا"],
        club: "الفتح",
        nationality: "البرازيل",
        position: "هجوم",
        birthDate: "2005-02-26",
        foot: "يمين",
        height: 176,
        active: true
    },
    {
        id: 177,
        name: "فهد الزبيدي",
        aliases: ["الزبيدي", "فهد", "فهد الزبيدي"],
        club: "الفتح",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "2002-06-10",
        foot: "يمين",
        height: 170,
        active: true
    },
    {
        id: 178,
        name: "علي المسعود",
        aliases: ["المسعود", "علي المسعود"],
        club: "الفتح",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "2004-01-03",
        foot: "يمين",
        height: 175,
        active: true
    },
    {
        id: 179,
        name: "سعد الشرفاء",
        aliases: ["الشرفاء", "سعد الشرفاء"],
        club: "الفتح",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "2004-10-23",
        foot: "يمين",
        height: 180,
        active: true
    },
    {
        id: 180,
        name: "فيصل العبدالواحد",
        aliases: ["العبدالواحد", "فيصل العبدالواحد"],
        club: "الفتح",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "2005-01-01",
        foot: "يمين",
        height: 175,
        active: true
    },

        // ========================================
    // الاتفاق
    // ========================================

    // حراس المرمى
    {
        id: 181,
        name: "ماريك روداك",
        aliases: ["روداك", "ماريك روداك"],
        club: "الاتفاق",
        nationality: "سلوفاكيا",
        position: "حارس",
        birthDate: "1996-12-13",
        foot: "يمين",
        height: 194,
        active: true
    },
    {
        id: 182,
        name: "أحمد الرحيلي",
        aliases: ["الرحيلي", "أحمد الرحيلي"],
        club: "الاتفاق",
        nationality: "السعودية",
        position: "حارس",
        birthDate: "1994-10-06",
        foot: "يمين",
        height: 189,
        active: true
    },
    {
        id: 183,
        name: "تركي باعالجوش",
        aliases: ["باعالجوش", "تركي باعالجوش"],
        club: "الاتفاق",
        nationality: "السعودية",
        position: "حارس",
        birthDate: "2003-01-01",
        foot: "يمين",
        height: 185,
        active: true
    },

    // الدفاع
    {
        id: 184,
        name: "جاك هيندري",
        aliases: ["هيندري", "جاك هيندري"],
        club: "الاتفاق",
        nationality: "اسكتلندا",
        position: "دفاع",
        birthDate: "1995-05-07",
        foot: "يمين",
        height: 192,
        active: true
    },
    {
        id: 185,
        name: "عبدالله مادو",
        aliases: ["مادو", "عبدالله مادو"],
        club: "الاتفاق",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1993-07-15",
        foot: "يمين",
        height: 187,
        active: true
    },
    {
        id: 186,
        name: "عبدالله الخطيب",
        aliases: ["الخطيب", "عبدالله الخطيب"],
        club: "الاتفاق",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1995-03-12",
        foot: "يمين",
        height: 183,
        active: true
    },
    {
        id: 187,
        name: "مدالله العليان",
        aliases: ["العليان", "مدالله العليان"],
        club: "الاتفاق",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1994-08-25",
        foot: "يمين",
        height: 170,
        active: true
    },
    {
        id: 188,
        name: "راضي العتيبي",
        aliases: ["راضي", "العتيبي", "راضي العتيبي"],
        club: "الاتفاق",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1999-12-06",
        foot: "يمين",
        height: 174,
        active: true
    },
    {
        id: 189,
        name: "مشعل العلائلي",
        aliases: ["العلائلي", "مشعل العلائلي"],
        club: "الاتفاق",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2004-01-01",
        foot: "يمين",
        height: 178,
        active: true
    },
    {
        id: 190,
        name: "مرزوق تمبكتي",
        aliases: ["تمبكتي", "مرزوق تمبكتي"],
        club: "الاتفاق",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2003-01-01",
        foot: "يمين",
        height: 180,
        active: true
    },

    // الوسط
    {
        id: 191,
        name: "ألفارو ميدران",
        aliases: ["ميدران", "ألفارو ميدران"],
        club: "الاتفاق",
        nationality: "إسبانيا",
        position: "وسط",
        birthDate: "1994-03-15",
        foot: "يمين",
        height: 176,
        active: true
    },
    {
        id: 192,
        name: "أوندري دودا",
        aliases: ["دودا", "أوندري دودا"],
        club: "الاتفاق",
        nationality: "سلوفاكيا",
        position: "وسط",
        birthDate: "1994-12-05",
        foot: "يمين",
        height: 181,
        active: true
    },
    {
        id: 193,
        name: "بيرسانت سيلينا",
        aliases: ["سيلينا", "بيرسانت سيلينا"],
        club: "الاتفاق",
        nationality: "كوسوفو",
        position: "وسط",
        birthDate: "1996-09-09",
        foot: "يمين",
        height: 181,
        active: true
    },
    {
        id: 194,
        name: "عبدالإله هوساوي",
        aliases: ["هوساوي", "عبدالإله هوساوي"],
        club: "الاتفاق",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "2001-06-02",
        foot: "يمين",
        height: 172,
        active: true
    },
    {
        id: 195,
        name: "رياض شراحيلي",
        aliases: ["شراحيلي", "رياض شراحيلي"],
        club: "الاتفاق",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "1993-04-28",
        foot: "يمين",
        height: 185,
        active: true
    },
    {
        id: 196,
        name: "أبو بكر كانتي",
        aliases: ["كانتي", "أبو بكر كانتي"],
        club: "الاتفاق",
        nationality: "مالي",
        position: "وسط",
        birthDate: "2006-01-01",
        foot: "يمين",
        height: 180,
        active: true
    },

    // الهجوم
    {
        id: 197,
        name: "موسى ديمبيلي",
        aliases: ["ديمبيلي", "موسى", "موسى ديمبيلي"],
        club: "الاتفاق",
        nationality: "فرنسا",
        position: "هجوم",
        birthDate: "1996-07-12",
        foot: "يمين",
        height: 183,
        active: true
    },
    {
        id: 198,
        name: "جوردان لارسون",
        aliases: ["لارسون", "جوردان لارسون"],
        club: "الاتفاق",
        nationality: "السويد",
        position: "هجوم",
        birthDate: "1997-06-20",
        foot: "يسار",
        height: 175,
        active: true
    },
    {
        id: 199,
        name: "خالد الغنام",
        aliases: ["الغنام", "خالد الغنام"],
        club: "الاتفاق",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "2000-11-08",
        foot: "يمين",
        height: 171,
        active: true
    },
    {
        id: 200,
        name: "محمد نكوتا",
        aliases: ["نكوتا", "محمد نكوتا"],
        club: "الاتفاق",
        nationality: "جنوب أفريقيا",
        position: "هجوم",
        birthDate: "2004-11-17",
        foot: "يسار",
        height: 170,
        active: true
    },
    {
        id: 201,
        name: "ريموند ميسي",
        aliases: ["ميسي", "ريموند ميسي"],
        club: "الاتفاق",
        nationality: "الكونغو",
        position: "هجوم",
        birthDate: "2007-05-25",
        foot: "يمين",
        height: 180,
        active: true
    },
    {
        id: 202,
        name: "عبدالله البيشي",
        aliases: ["البيشي", "عبدالله البيشي"],
        club: "الاتفاق",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "2002-01-01",
        foot: "يمين",
        height: 175,
        active: true
    },

        // ========================================
    // الدرعية
    // ========================================

    // حراس المرمى
    {
        id: 203,
        name: "نيكولا فاسيلي",
        aliases: ["فاسيلي", "نيكولا فاسيلي"],
        club: "الدرعية",
        nationality: "البوسنة والهرسك",
        position: "حارس",
        birthDate: "1995-12-02",
        foot: "يمين",
        height: 193,
        active: true
    },
    {
        id: 204,
        name: "وليد عبدالله",
        aliases: ["وليد", "وليد عبدالله"],
        club: "الدرعية",
        nationality: "السعودية",
        position: "حارس",
        birthDate: "1986-04-19",
        foot: "يمين",
        height: 196,
        active: true
    },
    {
        id: 205,
        name: "أمين بخاري",
        aliases: ["بخاري", "أمين بخاري"],
        club: "الدرعية",
        nationality: "السعودية",
        position: "حارس",
        birthDate: "1997-05-02",
        foot: "يمين",
        height: 194,
        active: true
    },

    // الدفاع
    {
        id: 206,
        name: "شانسيل مبيمبا",
        aliases: ["مبيمبا", "شانسيل مبيمبا"],
        club: "الدرعية",
        nationality: "الكونغو الديمقراطية",
        position: "دفاع",
        birthDate: "1994-08-08",
        foot: "يمين",
        height: 182,
        active: true
    },
    {
        id: 207,
        name: "بيرات دجيمسيتي",
        aliases: ["دجيمسيتي", "بيرات دجيمسيتي"],
        club: "الدرعية",
        nationality: "ألبانيا",
        position: "دفاع",
        birthDate: "1993-02-19",
        foot: "يمين",
        height: 190,
        active: true
    },
    {
        id: 208,
        name: "عمر كولي",
        aliases: ["كولي", "عمر كولي"],
        club: "الدرعية",
        nationality: "غامبيا",
        position: "دفاع",
        birthDate: "1992-10-24",
        foot: "يسار",
        height: 191,
        active: true
    },
    {
        id: 209,
        name: "سعيد الربيعي",
        aliases: ["الربيعي", "سعيد الربيعي"],
        club: "الدرعية",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1994-06-04",
        foot: "يمين",
        height: 183,
        active: true
    },
    {
        id: 210,
        name: "حسين الصبياني",
        aliases: ["الصبياني", "حسين الصبياني"],
        club: "الدرعية",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2001-06-24",
        foot: "يسار",
        height: 176,
        active: true
    },
    {
        id: 211,
        name: "قاسم لاجامي",
        aliases: ["قاسم", "لاجامي", "قاسم لاجامي"],
        club: "الدرعية",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1996-04-25",
        foot: "يمين",
        height: 178,
        active: true
    },
    {
        id: 212,
        name: "عبدالعزيز الفرج",
        aliases: ["الفرج", "عبدالعزيز الفرج"],
        club: "الدرعية",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2003-01-01",
        foot: "يمين",
        height: 178,
        active: true
    },
    {
        id: 213,
        name: "خالد العسيري",
        aliases: ["العسيري", "خالد العسيري"],
        club: "الدرعية",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2004-01-01",
        foot: "يمين",
        height: 180,
        active: true
    },

    // الوسط
    {
        id: 214,
        name: "إدريسا غاي",
        aliases: ["غاي", "إدريسا غاي", "إدريسا جانا غاي"],
        club: "الدرعية",
        nationality: "السنغال",
        position: "وسط",
        birthDate: "1989-09-26",
        foot: "يمين",
        height: 174,
        active: true
    },
    {
        id: 215,
        name: "إنزو ميلوت",
        aliases: ["ميلوت", "إنزو", "إنزو ميلوت"],
        club: "الدرعية",
        nationality: "فرنسا",
        position: "وسط",
        birthDate: "2002-07-17",
        foot: "يسار",
        height: 175,
        active: true
    },
    {
        id: 216,
        name: "أوسكار رودريغيز",
        aliases: ["أوسكار", "رودريغيز", "أوسكار رودريغيز"],
        club: "الدرعية",
        nationality: "إسبانيا",
        position: "وسط",
        birthDate: "1998-06-28",
        foot: "يمين",
        height: 174,
        active: true
    },
    {
        id: 217,
        name: "عبدالإله المالكي",
        aliases: ["المالكي", "عبدالإله المالكي"],
        club: "الدرعية",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "1994-10-11",
        foot: "يمين",
        height: 176,
        active: true
    },
    {
        id: 218,
        name: "حسين القحطاني",
        aliases: ["القحطاني", "حسين القحطاني"],
        club: "الدرعية",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "1994-12-20",
        foot: "يمين",
        height: 175,
        active: true
    },
    {
        id: 219,
        name: "سلطان الفرحان",
        aliases: ["الفرحان", "سلطان الفرحان"],
        club: "الدرعية",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "1996-09-25",
        foot: "يمين",
        height: 170,
        active: true
    },

    // الهجوم
    {
        id: 220,
        name: "داروين نونيز",
        aliases: ["نونيز", "داروين", "داروين نونيز"],
        club: "الدرعية",
        nationality: "أوروغواي",
        position: "هجوم",
        birthDate: "1999-06-24",
        foot: "يمين",
        height: 187,
        active: true
    },
    {
        id: 221,
        name: "عادل بولبينة",
        aliases: ["بولبينة", "عادل", "عادل بولبينة"],
        club: "الدرعية",
        nationality: "الجزائر",
        position: "هجوم",
        birthDate: "2003-05-02",
        foot: "يمين",
        height: 177,
        active: true
    },
    {
        id: 222,
        name: "غايتان لابورد",
        aliases: ["لابورد", "غايتان لابورد"],
        club: "الدرعية",
        nationality: "فرنسا",
        position: "هجوم",
        birthDate: "1994-05-03",
        foot: "يسار",
        height: 181,
        active: true
    },
    {
        id: 223,
        name: "هتان باهبري",
        aliases: ["هتان", "باهبري", "هتان باهبري"],
        club: "الدرعية",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "1992-07-16",
        foot: "يمين",
        height: 170,
        active: true
    },
    {
        id: 224,
        name: "كلايتون دياندي",
        aliases: ["دياندي", "كلايتون دياندي"],
        club: "الدرعية",
        nationality: "السنغال",
        position: "هجوم",
        birthDate: "2006-01-01",
        foot: "يمين",
        height: 180,
        active: true
    },
    {
        id: 225,
        name: "مشاري النمر",
        aliases: ["النمر", "مشاري", "مشاري النمر"],
        club: "الدرعية",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "2003-08-05",
        foot: "يمين",
        height: 175,
        active: true
    },
    {
        id: 226,
        name: "عبدالله الزيد",
        aliases: ["الزيد", "عبدالله الزيد"],
        club: "الدرعية",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "2004-01-08",
        foot: "يمين",
        height: 175,
        active: true
    },

        // ========================================
    // نيوم
    // ========================================

    // حراس المرمى
    {
        id: 227,
        name: "مارسين بولكا",
        aliases: ["بولكا", "مارسين بولكا"],
        club: "نيوم",
        nationality: "بولندا",
        position: "حارس",
        birthDate: "1999-10-04",
        foot: "يمين",
        height: 199,
        active: true
    },
    {
        id: 228,
        name: "لويس ماكسيميانو",
        aliases: ["ماكسيميانو", "لويس ماكسيميانو"],
        club: "نيوم",
        nationality: "البرتغال",
        position: "حارس",
        birthDate: "1999-01-05",
        foot: "يمين",
        height: 190,
        active: true
    },
    {
        id: 229,
        name: "محمد الحكيم",
        aliases: ["الحكيم", "محمد الحكيم"],
        club: "نيوم",
        nationality: "السعودية",
        position: "حارس",
        birthDate: "2000-01-01",
        foot: "يمين",
        height: 188,
        active: true
    },

    // الدفاع
    {
        id: 230,
        name: "مالانغ سار",
        aliases: ["سار", "مالانغ سار"],
        club: "نيوم",
        nationality: "فرنسا",
        position: "دفاع",
        birthDate: "1999-01-23",
        foot: "يسار",
        height: 182,
        active: true
    },
    {
        id: 231,
        name: "ناثان زيزي",
        aliases: ["زيزي", "ناثان", "ناثان زيزي"],
        club: "نيوم",
        nationality: "فرنسا",
        position: "دفاع",
        birthDate: "2005-06-18",
        foot: "يسار",
        height: 190,
        active: true
    },
    {
        id: 232,
        name: "محمد البريك",
        aliases: ["البريك", "محمد البريك"],
        club: "نيوم",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1992-09-15",
        foot: "يمين",
        height: 170,
        active: true
    },
    {
        id: 233,
        name: "خليفة الدوسري",
        aliases: ["خليفة", "خليفة الدوسري"],
        club: "نيوم",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1999-01-02",
        foot: "يمين",
        height: 181,
        active: true
    },
    {
        id: 234,
        name: "إسلام هوساوي",
        aliases: ["إسلام", "هوساوي", "إسلام هوساوي"],
        club: "نيوم",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2001-12-27",
        foot: "يسار",
        height: 178,
        active: true
    },
    {
        id: 235,
        name: "محمد الدوسري",
        aliases: ["محمد الدوسري"],
        club: "نيوم",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1999-01-01",
        foot: "يمين",
        height: 177,
        active: true
    },
    {
        id: 236,
        name: "خالد الرماح",
        aliases: ["الرماح", "خالد الرماح"],
        club: "نيوم",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2003-01-01",
        foot: "يمين",
        height: 180,
        active: true
    },

    // الوسط
    {
        id: 237,
        name: "أمادو كوني",
        aliases: ["كوني", "أمادو", "أمادو كوني"],
        club: "نيوم",
        nationality: "مالي",
        position: "وسط",
        birthDate: "2005-05-14",
        foot: "يمين",
        height: 175,
        active: true
    },
    {
        id: 238,
        name: "فيصل الغامدي",
        aliases: ["فيصل", "الغامدي", "فيصل الغامدي"],
        club: "نيوم",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "2001-08-13",
        foot: "يمين",
        height: 180,
        active: true
    },
    {
        id: 239,
        name: "فالنتين فادا",
        aliases: ["فادا", "فالنتين فادا"],
        club: "نيوم",
        nationality: "الأرجنتين",
        position: "وسط",
        birthDate: "1996-03-06",
        foot: "يسار",
        height: 175,
        active: true
    },
    {
        id: 240,
        name: "عباس الحسن",
        aliases: ["عباس", "الحسن", "عباس الحسن"],
        club: "نيوم",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "2004-02-22",
        foot: "يمين",
        height: 174,
        active: true
    },
    {
        id: 241,
        name: "علاء الحجي",
        aliases: ["الحجي", "علاء", "علاء الحجي"],
        club: "نيوم",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "1995-12-03",
        foot: "يمين",
        height: 177,
        active: true
    },
    {
        id: 242,
        name: "مهند أبو طه",
        aliases: ["أبو طه", "مهند أبو طه"],
        club: "نيوم",
        nationality: "الأردن",
        position: "وسط",
        birthDate: "2003-02-02",
        foot: "يسار",
        height: 176,
        active: true
    },
    {
        id: 243,
        name: "خليل العبسي",
        aliases: ["العبسي", "خليل العبسي"],
        club: "نيوم",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "2001-05-21",
        foot: "يمين",
        height: 170,
        active: true
    },
    {
        id: 244,
        name: "عبدالعزيز نور",
        aliases: ["عبدالعزيز نور", "نور"],
        club: "نيوم",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "1999-01-18",
        foot: "يمين",
        height: 170,
        active: true
    },

    // الهجوم
    {
        id: 245,
        name: "ألكسندر لاكازيت",
        aliases: ["لاكازيت", "ألكسندر", "ألكسندر لاكازيت"],
        club: "نيوم",
        nationality: "فرنسا",
        position: "هجوم",
        birthDate: "1991-05-28",
        foot: "يمين",
        height: 175,
        active: true
    },
    {
        id: 246,
        name: "سعيد بن رحمة",
        aliases: ["بن رحمة", "سعيد", "سعيد بن رحمة"],
        club: "نيوم",
        nationality: "الجزائر",
        position: "هجوم",
        birthDate: "1995-08-10",
        foot: "يمين",
        height: 172,
        active: true
    },
    {
        id: 247,
        name: "جيورجيوس ماسوراس",
        aliases: ["ماسوراس", "جيورجيوس ماسوراس"],
        club: "نيوم",
        nationality: "اليونان",
        position: "هجوم",
        birthDate: "1994-01-01",
        foot: "يمين",
        height: 184,
        active: true
    },
    {
        id: 248,
        name: "هارون كمارا",
        aliases: ["كمارا", "هارون", "هارون كمارا"],
        club: "نيوم",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "1998-01-01",
        foot: "يمين",
        height: 188,
        active: true
    },
    {
        id: 249,
        name: "مهند آل سعد",
        aliases: ["مهند", "آل سعد", "مهند آل سعد"],
        club: "نيوم",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "2003-06-29",
        foot: "يسار",
        height: 172,
        active: true
    },
    {
        id: 250,
        name: "عبدالعزيز العثمان",
        aliases: ["العثمان", "عبدالعزيز العثمان"],
        club: "نيوم",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "2004-01-04",
        foot: "يمين",
        height: 179,
        active: true
    },

        // ========================================
    // الخليج
    // ========================================

    // حراس المرمى
    {
        id: 251,
        name: "أنتوني موريس",
        aliases: ["موريس", "أنتوني موريس"],
        club: "الخليج",
        nationality: "لوكسمبورغ",
        position: "حارس",
        birthDate: "1990-04-29",
        foot: "يمين",
        height: 186,
        active: true
    },
    {
        id: 252,
        name: "مروان الحيدري",
        aliases: ["الحيدري", "مروان الحيدري"],
        club: "الخليج",
        nationality: "السعودية",
        position: "حارس",
        birthDate: "1996-04-12",
        foot: "يمين",
        height: 188,
        active: true
    },

    // الدفاع
    {
        id: 253,
        name: "محمد الخبراني",
        aliases: ["الخبراني", "محمد الخبراني"],
        club: "الخليج",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1993-10-14",
        foot: "يمين",
        height: 185,
        active: true
    },
    {
        id: 254,
        name: "كيكي كوياتي",
        aliases: ["كوياتي", "كيكي كوياتي"],
        club: "الخليج",
        nationality: "مالي",
        position: "دفاع",
        birthDate: "1997-04-15",
        foot: "يمين",
        height: 192,
        active: true
    },
    {
        id: 255,
        name: "بيدرو ريبوتشو",
        aliases: ["ريبوتشو", "بيدرو ريبوتشو"],
        club: "الخليج",
        nationality: "البرتغال",
        position: "دفاع",
        birthDate: "1995-01-23",
        foot: "يسار",
        height: 171,
        active: true
    },
    {
        id: 256,
        name: "أحمد عسيري",
        aliases: ["عسيري", "أحمد عسيري"],
        club: "الخليج",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1991-11-14",
        foot: "يمين",
        height: 179,
        active: true
    },
    {
        id: 257,
        name: "عبدالله الحافظ",
        aliases: ["الحافظ", "عبدالله الحافظ"],
        club: "الخليج",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1992-12-25",
        foot: "يمين",
        height: 188,
        active: true
    },
    {
        id: 258,
        name: "رائد الشنقيطي",
        aliases: ["الشنقيطي", "رائد الشنقيطي"],
        club: "الخليج",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2000-01-01",
        foot: "يمين",
        height: 178,
        active: true
    },
    {
        id: 259,
        name: "سعيد حمسل",
        aliases: ["حمسل", "سعيد حمسل"],
        club: "الخليج",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1996-04-18",
        foot: "يمين",
        height: 176,
        active: true
    },
    {
        id: 260,
        name: "علي الشعفي",
        aliases: ["الشعفي", "علي الشعفي"],
        club: "الخليج",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2002-01-01",
        foot: "يمين",
        height: 180,
        active: true
    },

    // الوسط
    {
        id: 261,
        name: "عمر ماسكاريل",
        aliases: ["ماسكاريل", "عمر ماسكاريل"],
        club: "الخليج",
        nationality: "غينيا الاستوائية",
        position: "وسط",
        birthDate: "1993-02-02",
        foot: "يمين",
        height: 181,
        active: true
    },
    {
        id: 262,
        name: "ميغيل كريسبو",
        aliases: ["كريسبو", "ميغيل كريسبو"],
        club: "الخليج",
        nationality: "البرتغال",
        position: "وسط",
        birthDate: "1996-09-11",
        foot: "يمين",
        height: 186,
        active: true
    },
    {
        id: 263,
        name: "أنجيلو فولغيني",
        aliases: ["فولغيني", "أنجيلو فولغيني"],
        club: "الخليج",
        nationality: "فرنسا",
        position: "وسط",
        birthDate: "1996-08-20",
        foot: "يمين",
        height: 183,
        active: true
    },
    {
        id: 264,
        name: "ماجد كنبة",
        aliases: ["كنبة", "ماجد كنبة"],
        club: "الخليج",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "1993-02-27",
        foot: "يمين",
        height: 170,
        active: true
    },
    {
        id: 265,
        name: "بدر منشي",
        aliases: ["منشي", "بدر منشي"],
        club: "الخليج",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "1999-06-20",
        foot: "يمين",
        height: 173,
        active: true
    },
    {
        id: 266,
        name: "فواز الصقور",
        aliases: ["الصقور", "فواز الصقور"],
        club: "الخليج",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "1996-04-23",
        foot: "يمين",
        height: 176,
        active: true
    },

    // الهجوم
    {
        id: 267,
        name: "موسى بارو",
        aliases: ["بارو", "موسى بارو"],
        club: "الخليج",
        nationality: "غامبيا",
        position: "هجوم",
        birthDate: "1998-11-14",
        foot: "يمين",
        height: 184,
        active: true
    },
    {
        id: 268,
        name: "جوشوا كينغ",
        aliases: ["كينغ", "جوشوا كينغ"],
        club: "الخليج",
        nationality: "النرويج",
        position: "هجوم",
        birthDate: "1992-01-15",
        foot: "يمين",
        height: 187,
        active: true
    },
    {
        id: 269,
        name: "نواف الصعدي",
        aliases: ["الصعدي", "نواف الصعدي"],
        club: "الخليج",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "2000-10-21",
        foot: "يمين",
        height: 168,
        active: true
    },
    {
        id: 270,
        name: "صالح العمري",
        aliases: ["العمري", "صالح العمري"],
        club: "الخليج",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "1993-10-14",
        foot: "يمين",
        height: 172,
        active: true
    },
    {
        id: 271,
        name: "منصور حمزي",
        aliases: ["حمزي", "منصور حمزي"],
        club: "الخليج",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "1992-01-17",
        foot: "يمين",
        height: 168,
        active: true
    },
    {
        id: 272,
        name: "حسين العيسى",
        aliases: ["العيسى", "حسين العيسى"],
        club: "الخليج",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "2000-12-29",
        foot: "يمين",
        height: 173,
        active: true
    },
    {
        id: 273,
        name: "ثامر الخيبري",
        aliases: ["الخيبري", "ثامر الخيبري"],
        club: "الخليج",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "2002-01-01",
        foot: "يمين",
        height: 175,
        active: true
    },
    {
        id: 274,
        name: "فهد الرشيدي",
        aliases: ["الرشيدي", "فهد الرشيدي"],
        club: "الخليج",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "1997-05-16",
        foot: "يمين",
        height: 175,
        active: true
    },
    {
        id: 275,
        name: "ماتيو بينيغاس",
        aliases: ["بينيغاس", "ماتيو بينيغاس"],
        club: "الخليج",
        nationality: "الأرجنتين",
        position: "هجوم",
        birthDate: "2003-01-01",
        foot: "يمين",
        height: 180,
        active: true
    },

        // ========================================
    // الخلود
    // ========================================

    // حراس المرمى
    {
        id: 276,
        name: "حامد الشنقيطي",
        aliases: ["الشنقيطي", "حامد الشنقيطي"],
        club: "الخلود",
        nationality: "السعودية",
        position: "حارس",
        birthDate: "2005-05-14",
        foot: "يمين",
        height: 188,
        active: true
    },
    {
        id: 277,
        name: "محمد الشمري",
        aliases: ["الشمري", "محمد الشمري"],
        club: "الخلود",
        nationality: "السعودية",
        position: "حارس",
        birthDate: "1992-01-01",
        foot: "يمين",
        height: 185,
        active: true
    },
    {
        id: 278,
        name: "مهند اليحيى",
        aliases: ["اليحيى", "مهند اليحيى"],
        club: "الخلود",
        nationality: "السعودية",
        position: "حارس",
        birthDate: "2004-01-01",
        foot: "يمين",
        height: 185,
        active: true
    },

    // الدفاع
    {
        id: 279,
        name: "إدغاراس أوتكوس",
        aliases: ["أوتكوس", "إدغاراس أوتكوس"],
        club: "الخلود",
        nationality: "ليتوانيا",
        position: "دفاع",
        birthDate: "2000-06-22",
        foot: "يمين",
        height: 190,
        active: true
    },
    {
        id: 280,
        name: "شاكيل بيناس",
        aliases: ["بيناس", "شاكيل بيناس"],
        club: "الخلود",
        nationality: "سورينام",
        position: "دفاع",
        birthDate: "1998-03-19",
        foot: "يسار",
        height: 182,
        active: true
    },
    {
        id: 281,
        name: "منصور كامارا",
        aliases: ["كامارا", "منصور كامارا"],
        club: "الخلود",
        nationality: "غينيا",
        position: "دفاع",
        birthDate: "2007-01-01",
        foot: "يمين",
        height: 187,
        active: true
    },
    {
        id: 282,
        name: "رمزي صولان",
        aliases: ["صولان", "رمزي صولان"],
        club: "الخلود",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1998-04-18",
        foot: "يمين",
        height: 170,
        active: true
    },
    {
        id: 283,
        name: "سلطان الشهري",
        aliases: ["الشهري", "سلطان الشهري"],
        club: "الخلود",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "1995-01-01",
        foot: "يمين",
        height: 178,
        active: true
    },
    {
        id: 284,
        name: "يزن مدني",
        aliases: ["مدني", "يزن مدني"],
        club: "الخلود",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2006-01-01",
        foot: "يمين",
        height: 180,
        active: true
    },
    {
        id: 285,
        name: "عبدالرحمن العبيد",
        aliases: ["العبيد", "عبدالرحمن العبيد"],
        club: "الخلود",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2004-01-01",
        foot: "يسار",
        height: 178,
        active: true
    },
    {
        id: 286,
        name: "عدي عبدالغني",
        aliases: ["عدي", "عبدالغني", "عدي عبدالغني"],
        club: "الخلود",
        nationality: "السعودية",
        position: "دفاع",
        birthDate: "2006-01-01",
        foot: "يمين",
        height: 180,
        active: true
    },

    // الوسط
    {
        id: 287,
        name: "سيدوبا سيسيه",
        aliases: ["سيسيه", "سيدوبا سيسيه"],
        club: "الخلود",
        nationality: "غينيا",
        position: "وسط",
        birthDate: "2001-02-10",
        foot: "يمين",
        height: 178,
        active: true
    },
    {
        id: 288,
        name: "جون باكلي",
        aliases: ["باكلي", "جون باكلي"],
        club: "الخلود",
        nationality: "إنجلترا",
        position: "وسط",
        birthDate: "1999-10-13",
        foot: "يمين",
        height: 173,
        active: true
    },
    {
        id: 289,
        name: "إيكر كورتاخارينا",
        aliases: ["كورتاخارينا", "إيكر", "إيكر كورتاخارينا"],
        club: "الخلود",
        nationality: "إسبانيا",
        position: "وسط",
        birthDate: "2000-06-21",
        foot: "يمين",
        height: 182,
        active: true
    },
    {
        id: 290,
        name: "عبدالرحمن الدوسري",
        aliases: ["الدوسري", "عبدالرحمن الدوسري"],
        club: "الخلود",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "1997-09-25",
        foot: "يمين",
        height: 178,
        active: true
    },
    {
        id: 291,
        name: "محمد الرشيدي",
        aliases: ["الرشيدي", "محمد الرشيدي"],
        club: "الخلود",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "2002-01-01",
        foot: "يمين",
        height: 175,
        active: true
    },
    {
        id: 292,
        name: "راكان الجمعان",
        aliases: ["الجمعان", "راكان الجمعان"],
        club: "الخلود",
        nationality: "السعودية",
        position: "وسط",
        birthDate: "2006-01-01",
        foot: "يمين",
        height: 175,
        active: true
    },

    // الهجوم
    {
        id: 293,
        name: "كوبا دا كوستا",
        aliases: ["كوبا", "دا كوستا", "كوبا دا كوستا"],
        club: "الخلود",
        nationality: "إسبانيا",
        position: "هجوم",
        birthDate: "2002-07-26",
        foot: "يمين",
        height: 180,
        active: true
    },
    {
        id: 294,
        name: "جوليان دومينغيز",
        aliases: ["دومينغيز", "جوليان دومينغيز"],
        club: "الخلود",
        nationality: "فرنسا",
        position: "هجوم",
        birthDate: "1996-07-26",
        foot: "يمين",
        height: 180,
        active: true
    },
    {
        id: 295,
        name: "ياسين الزبيدي",
        aliases: ["الزبيدي", "ياسين الزبيدي"],
        club: "الخلود",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "2004-04-26",
        foot: "يمين",
        height: 170,
        active: true
    },
    {
        id: 296,
        name: "راميرو إنريكي",
        aliases: ["إنريكي", "راميرو", "راميرو إنريكي"],
        club: "الخلود",
        nationality: "الأرجنتين",
        position: "هجوم",
        birthDate: "2001-05-04",
        foot: "يمين",
        height: 171,
        active: true
    },
    {
        id: 297,
        name: "لويك إيسومبا",
        aliases: ["إيسومبا", "لويك إيسومبا"],
        club: "الخلود",
        nationality: "الكاميرون",
        position: "هجوم",
        birthDate: "2003-01-01",
        foot: "يمين",
        height: 180,
        active: true
    },
    {
        id: 298,
        name: "عبدالله العجيان",
        aliases: ["العجيان", "عبدالله العجيان"],
        club: "الخلود",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "2005-01-01",
        foot: "يمين",
        height: 175,
        active: true
    },
    {
        id: 299,
        name: "محمد صميلي",
        aliases: ["صميلي", "محمد صميلي"],
        club: "الخلود",
        nationality: "السعودية",
        position: "هجوم",
        birthDate: "2001-01-01",
        foot: "يمين",
        height: 175,
        active: true
    }

];


// تحديات الأيام - ترتيب عشوائي ثابت
const dailyChallenges = [
    1, 172, 60, 287, 46, 256, 115, 177, 151, 185, 66, 76, 35, 28, 278,
    24, 142, 43, 33, 154, 292, 195, 189, 273, 250, 65, 208, 152, 171, 119,
    232, 61, 181, 179, 41, 136, 70, 51, 5, 241, 255, 8, 246, 277, 228,
    74, 286, 137, 9, 129, 176, 86, 158, 107, 22, 159, 285, 64, 148, 11,
    223, 37, 39, 262, 162, 168, 71, 163, 279, 83, 57, 170, 249, 213, 106,
    183, 201, 160, 10, 23, 19, 218, 75, 62, 217, 299, 199, 88, 295, 21,
    100, 206, 267, 192, 20, 58, 15, 44, 240, 116, 281, 245, 221, 30, 166,
    190, 226, 12, 92, 266, 164, 271, 280, 197, 193, 265, 258, 122, 294, 141,
    288, 85, 191, 225, 48, 274, 127, 82, 242, 117, 40, 259, 3, 174, 79,
    95, 132, 231, 17, 63, 78, 105, 72, 186, 80, 120, 47, 220, 239, 99,
    282, 167, 157, 101, 104, 134, 204, 109, 269, 38, 4, 144, 77, 81, 234,
    253, 112, 128, 32, 155, 227, 54, 252, 216, 103, 7, 68, 113, 214, 270,
    257, 59, 56, 67, 69, 244, 91, 97, 49, 178, 224, 268, 276, 198, 260,
    146, 143, 203, 211, 153, 89, 202, 42, 196, 230, 13, 118, 235, 209, 150,
    27, 254, 36, 205, 73, 247, 139, 194, 200, 236, 55, 138, 131, 237, 29,
    275, 175, 96, 284, 298, 212, 133, 169, 289, 222, 210, 243, 34, 161, 45,
    84, 94, 25, 165, 251, 215, 290, 296, 110, 147, 187, 293, 188, 233, 124,
    156, 264, 126, 121, 26, 261, 180, 6, 2, 219, 130, 184, 87, 125, 53,
    114, 93, 108, 90, 291, 149, 248, 123, 14, 140, 98, 31, 52, 272, 207,
    135, 16, 238, 297, 263, 173, 102, 182, 229, 50, 111, 18, 145, 283
];