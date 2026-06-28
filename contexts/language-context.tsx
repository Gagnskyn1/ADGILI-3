"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export type Language = "EN" | "GE" | "RU"

type Translations = {
  [key: string]: {
    EN: string
    GE: string
    RU: string
  }
}

export const translations: Translations = {
  // Navbar
  getInTouch: {
    EN: "Get in Touch",
    GE: "დაგვიკავშირდით",
    RU: "Связаться",
  },
  contact: {
    EN: "Contact",
    GE: "კონტაქტი",
    RU: "Контакт",
  },
  contactModalTitle: {
    EN: "Get in Touch",
    GE: "დაგვიკავშირდით",
    RU: "Свяжитесь с нами",
  },
  fullName: {
    EN: "Full Name",
    GE: "სრული სახელი",
    RU: "Полное имя",
  },
  email: {
    EN: "Email",
    GE: "ელ.ფოსტა",
    RU: "Эл. почта",
  },
  phone: {
    EN: "Phone",
    GE: "ტელეფონი",
    RU: "Телефон",
  },
  howCanWeHelp: {
    EN: "How can we help?",
    GE: "როგორ შეგვიძლია დაგეხმაროთ?",
    RU: "Чем мы можем помочь?",
  },
  enterFullName: {
    EN: "Enter your full name",
    GE: "შეიყვანეთ თქვენი სრული სახელი",
    RU: "Введите ваше полное имя",
  },
  enterEmail: {
    EN: "Enter your email",
    GE: "შეიყვანეთ თქვენი ელ.ფოსტა",
    RU: "Введите вашу эл. почту",
  },
  enterPhone: {
    EN: "Enter your phone number",
    GE: "შეიყვანეთ თქვენი ტელეფონის ნომერი",
    RU: "Введите ваш номер телефона",
  },
  tellUsHow: {
    EN: "Tell us how we can help you...",
    GE: "გვითხარით, როგორ შეგვიძლია დაგეხმაროთ...",
    RU: "Расскажите, чем мы можем вам помочь...",
  },
  agreeToTerms: {
    EN: "I agree to the Terms & Conditions and Privacy Policy",
    GE: "ვეთანხმები წესებს და კონფიდენციალურობის პოლიტიკას",
    RU: "Я согласен с Условиями и Политикой конфиденциальности",
  },
  submit: {
    EN: "Submit",
    GE: "გაგზავნა",
    RU: "Отправить",
  },

  // Hero
  badge: {
    EN: "Georgia's #1 Restaurant Booking App",
    GE: "საქართველოს #1 რესტორნების დაჯავშნის აპლიკაცია",
    RU: "Приложение #1 для бронирования ресторанов в Грузии",
  },
  heroTitle1: {
    EN: "Book Your Table in",
    GE: "დაჯავშნეთ მაგიდა",
    RU: "Забронируйте столик в",
  },
  heroTitle2: {
    EN: "Two Clicks",
    GE: "მარტივად",
    RU: "Два клика",
  },
  heroSubtext: {
    EN: "Modern ways to book and manage your dining experience. Discover and reserve tables at the finest restaurants across Georgia. From cozy cafes to fine dining experiences, all in one app",
    GE: "თანამედროვე გზები იმისთვის, რომ დაჯავშნო და მართო შენი გასტრონომიული გამოცდილება. აღმოაჩინეთ და დაჯავშნეთ მაგიდები საქართველოს საუკეთესო რესტორნებში. კაფეებიდან საუკეთესო რესტორნებამდე, ყველაფერი ერთ აპლიკაციაში.",
    RU: "Современный способ бронировать столики и управлять своим гастрономическим опытом. Откройте для себя и забронируйте столики в лучших ресторанах Грузии. От уютных кафе до лучших ресторанов, всё в одном приложении.",
  },

  // App mockup
  book: {
    EN: "Book",
    GE: "დაჯავშნა",
    RU: "Забронировать",
  },
  reserveTable: {
    EN: "Reserve a Table",
    GE: "მაგიდის დაჯავშნა",
    RU: "Забронировать столик",
  },
  selectTime: {
    EN: "Select Time",
    GE: "აირჩიეთ დრო",
    RU: "Выберите время",
  },
  guests: {
    EN: "Guests",
    GE: "სტუმარი",
    RU: "Гостей",
  },
  confirmBooking: {
    EN: "Confirm Booking",
    GE: "დაჯავშნის დადასტურება",
    RU: "Подтвердить бронь",
  },
  bookingConfirmed: {
    EN: "Booking Confirmed!",
    GE: "დაჯავშნა დადასტურებულია!",
    RU: "Бронирование подтверждено!",
  },
  reviews: {
    EN: "reviews",
    GE: "შეფასება",
    RU: "отзывов",
  },
  georgianCuisine: {
    EN: "Georgian Cuisine",
    GE: "ქართული სამზარეულო",
    RU: "Грузинская кухня",
  },
  fineDining: {
    EN: "Fine Dining",
    GE: "პრემიუმ რესტორნები",
    RU: "Изысканная кухня",
  },
  experienceAuthentic: {
    EN: "Experience authentic Georgian cuisine in the heart of Tbilisi...",
    GE: "გამოცადეთ ნამდვილი ქართული სამზარეულო თბილისის ცენტრში...",
    RU: "Откройте для себя настоящую грузинскую кухню в сердце Тбилиси...",
  },

  // What is Adgili
  whatIsAdgili: {
    EN: "What is",
    GE: "რა არის",
    RU: "Что такое",
  },
  whatIsAdgiliDesc1: {
    EN: 'Adgili (meaning "place" in Georgian) is your gateway to discovering and booking the best dining experiences across Georgia. We connect food lovers with exceptional restaurants, from traditional Georgian cuisine to modern fusion experiences.',
    GE: 'Adgili (ქართულად "ადგილი") არის თქვენი კარიბჭე საქართველოს საუკეთესო კვებითი გამოცდილების აღმოსაჩენად და დასაჯავშნად. ჩვენ ვაკავშირებთ საჭმლის მოყვარულებს განსაკუთრებულ რესტორნებთან, ტრადიციული ქართული სამზარეულოდან თანამედროვე ფიუჟენ გამოცდილებამდე.',
    RU: 'Adgili (что означает «место» на грузинском)  это ваш путь к открытию и бронированию лучших гастрономических впечатлений по всей Грузии. Мы соединяем любителей еды с исключительными ресторанами, от традиционной грузинской кухни до современных фьюжн-блюд.',
  },
  whatIsAdgiliDesc2: {
    EN: "Our mission is to make restaurant reservations effortless while helping local restaurants thrive. With real-time availability, instant confirmation, and exclusive deals, Adgili transforms how people in Georgia dine out.",
    GE: "ჩვენი მიზანია რესტორნების დაჯავშნა მარტივი გავხადოთ და ადგილობრივ რესტორნებს განვითარებაში დავეხმაროთ. რეალურ დროში ხელმისაწვდომობით, მყისიერი დადასტურებით და ექსკლუზიური შეთავაზებებით, Adgili ცვლის საქართველოში ხალხის რესტორანში სტუმრობის გამოცდილებას.",
    RU: "Наша миссия сделать бронирование ресторанов легким, помогая местным ресторанам процветать. Благодаря доступности в реальном времени, мгновенному подтверждению и эксклюзивным предложениям, Adgili меняет опыт посещения ресторанов в Грузии.",
  },
  instantBooking: {
    EN: "Instant Booking",
    GE: "წამიერი დაჯავშნა",
    RU: "Мгновенное бронирование",
  },
  verifiedReviews: {
    EN: "Verified Reviews",
    GE: "დადასტურებული შეფასებები",
    RU: "Проверенные отзывы",
  },
  mobileFirst: {
    EN: "Mobile First",
    GE: "მობილურზე ორიენტირებული",
    RU: "Мобильное приложение",
  },
  availableOnIosAndroid: {
    EN: "Available on iOS",
    GE: "ხელმისაწვდომია iOS-ზე",
    RU: "Доступно на iOS",
  },
  searchVenues: {
    EN: "Search venues",
    GE: "მოძებნეთ ადგილები",
    RU: "Поиск заведений",
  },
  bookInSeconds: {
    EN: "Book in seconds",
    GE: "დაჯავშნეთ წამებში",
    RU: "Бронируйте за секунды",
  },
  readHonestReviews: {
    EN: "Read honest reviews",
    GE: "წაიკითხეთ გულწრფელი შეფასებები",
    RU: "Читайте честные отзывы",
  },

  // Why Choose Adgili
  whyChoose: {
    EN: "Why Choose",
    GE: "რატომ აირჩიოთ",
    RU: "Почему выбирают",
  },
  whyChooseSubtext: {
    EN: "We've reimagined restaurant booking to be fast, reliable, and rewarding.",
    GE: "ჩვენ წარმოგვიდგენია რესტორნების დაჯავშვნა სწრაფი, საიმედო და მომგებიანი.",
    RU: "Мы переосмыслили бронирование ресторанов, чтобы оно было быстрым, надежным и выгодным.",
  },
  lightningFast: {
    EN: "Lightning Fast",
    GE: "ელვისებურად სწრაფი",
    RU: "Молниеносно",
  },
  lightningFastDesc: {
    EN: "Book your table in under 30 seconds with our streamlined booking flow.",
    GE: "დაჯავშნეთ მაგიდა 30 წამში ჩვენი გამარტივებული დაჯავშნის პროცესით.",
    RU: "Забронируйте столик менее чем за 30 секунд благодаря нашему оптимизированному процессу.",
  },
  guaranteedTables: {
    EN: "Guaranteed Tables",
    GE: "გარანტირებული მაგიდები",
    RU: "Гарантированные столики",
  },
  guaranteedTablesDesc: {
    EN: "Every booking is confirmed instantly. No more waiting for callbacks.",
    GE: "ყოველი დაჯავშნა წამიერად დასტურდება. აღარ დაელოდოთ უკუკავშირს.",
    RU: "Каждое бронирование подтверждается мгновенно. Больше никаких ожиданий обратных звонков.",
  },
  exclusivePerks: {
    EN: "Exclusive Perks",
    GE: "ექსკლუზიური პრივილეგიები",
    RU: "Эксклюзивные бонусы",
  },
  exclusivePerksDesc: {
    EN: "Access special offers, loyalty rewards, and VIP experiences.",
    GE: "მიიღეთ სპეციალური შეთავაზებები, ლოიალობის ჯილდოები და VIP გამოცდილება.",
    RU: "Получите доступ к специальным предложениям, бонусам лояльности и VIP-обслуживанию.",
  },
  localExpertise: {
    EN: "Local Expertise",
    GE: "ადგილობრივი გამოცდილება",
    RU: "Местная экспертиза",
  },
  localExpertiseDesc: {
    EN: "Curated selection of the best restaurants, handpicked by locals.",
    GE: "საუკეთესო რესტორნების კოლექცია, რომლებიც ადგილობრივების მიერაა არჩეული.",
    RU: "Отборная коллекция лучших ресторанов, выбранных местными жителями.",
  },

  // How It Works
  howItWorks: {
    EN: "How It",
    GE: "როგორ",
    RU: "Как это",
  },
  works: {
    EN: "Works",
    GE: "მუშაობს",
    RU: "работает",
  },
  howItWorksSubtext: {
    EN: "Three simple steps to your perfect dining experience.",
    GE: "სამი მარტივი ნაბიჯი თქვენი იდეალური სადილისთვის.",
    RU: "Три простых шага к идеальному ужину.",
  },
  discover: {
    EN: "Discover",
    GE: "აღმოაჩინეთ",
    RU: "Откройте",
  },
  discoverDesc: {
    EN: "Browse restaurants by cuisine, location, or rating. Filter by availability and price.",
    GE: "დაათვალიერეთ რესტორნები სამზარეულოს, მდებარეობის ან რეიტინგის მიხედვით. გაფილტრეთ ხელმისაწვდომობისა და ფასის მიხედვით.",
    RU: "Просматривайте рестораны по кухне, местоположению или рейтингу. Фильтруйте по доступности и цене.",
  },
  select: {
    EN: "Select",
    GE: "აირჩიეთ",
    RU: "Выберите",
  },
  selectDesc: {
    EN: "Choose your preferred date, time, and party size. See real-time availability.",
    GE: "აირჩიეთ სასურველი თარიღი, დრო და სტუმრების რაოდენობა. ნახეთ რეალურ დროში ხელმისაწვდომობა.",
    RU: "Выберите предпочтительную дату, время и количество гостей. Смотрите доступность в реальном времени.",
  },
  confirm: {
    EN: "Confirm",
    GE: "დაადასტურეთ",
    RU: "Подтвердите",
  },
  confirmDesc: {
    EN: "Complete your booking instantly. Receive confirmation and reminders.",
    GE: "დაასრულეთ დაჯავშნა წამიერად. მიიღეთ დადასტურება და შეხსენებები.",
    RU: "Завершите бронирование мгновенно. Получите подтверждение и напоминания.",
  },

  // Get the App
  getThe: {
    EN: "Get the",
    GE: "ჩამოტვირთეთ",
    RU: "Скачайте",
  },
  app: {
    EN: "App",
    GE: "აპლიკაცია",
    RU: "Приложение",
  },
  getTheAppSubtext: {
    EN: "Download Adgili today and start discovering amazing restaurants in Georgia.",
    GE: "ჩამოტვირთეთ Adgili დღესვე და დაიწყეთ საქართველოში არსებული საოცარი რესტორნების აღმოჩენა.",
    RU: "Скачайте Adgili сегодня и начните открывать потрясающие рестораны Грузии.",
  },

  // Footer
  faqs: {
    EN: "FAQs",
    GE: "ხშირად დასმული კითხვები",
    RU: "Часто задаваемые вопросы",
  },
  privacyPolicy: {
    EN: "Privacy Policy",
    GE: "კონფიდენციალურობის პოლიტიკა",
    RU: "Политика конфиденциальности",
  },
  appTermsConditions: {
    EN: "App Terms & Conditions",
    GE: "აპლიკაციის წესები და პირობები",
    RU: "Условия использования приложения",
  },
  websiteTermsConditions: {
    EN: "Website Terms & Conditions",
    GE: "ვებგვერდის წესები და პირობები",
    RU: "Условия использования сайта",
  },
  businessTermsConditions: {
    EN: "GE Business Terms & Conditions",
    GE: "GE ბიზნეს წესები და პირობები",
    RU: "GE Условия для бизнеса",
  },
  copyright: {
    EN: "© 2026 Adgili. All rights reserved.",
    GE: "© 2026 Adgili. ყველა უფლება დაცულია.",
    RU: "© 2026 Adgili. Все права защищены.",
  },

  // FAQs Page
  faqsTitle: {
    EN: "Frequently Asked",
    GE: "ხშირად დასმული",
    RU: "Часто задаваемые",
  },
  questions: {
    EN: "Questions",
    GE: "კითხვები",
    RU: "Вопросы",
  },
  faqQ1: {
    EN: "How do I make a reservation?",
    GE: "როგორ დავჯავშნო მაგიდა?",
    RU: "Как сделать бронирование?",
  },
  faqA1: {
    EN: "Simply download the Adgili app, browse restaurants, select your preferred date and time, and confirm your booking. It takes less than 30 seconds!",
    GE: "უბრალოდ ჩამოტვირთეთ აპლიკაცია Adgili, დაათვალიერეთ რესტორნები, შეარჩიეთ სასურველი თარიღი და დრო, და დაადასტურეთ ჯავშანი. ამას 30 წამზე ნაკლები დრო სჭირდება!",
    RU: "Просто скачайте приложение Adgili, просмотрите рестораны, выберите желаемую дату и время, и подтвердите бронирование. Это занимает менее 30 секунд!",
  },
  faqQ2: {
    EN: "Is Adgili free to use?",
    GE: "Adgili უფასოა?",
    RU: "Adgili бесплатно?",
  },
  faqA2: {
    EN: "Yes, Adgili is completely free for users. We don't charge any booking fees.",
    GE: "დიახ, Adgili სრულიად უფასოა მომხმარებლებისთვის. ჩვენ არ ვიღებთ ჯავშნის საფასურს.",
    RU: "Да, Adgili полностью бесплатно Для пользователей. Мы не взимаем никаких сборов за бронирование.",
  },
  faqQ3: {
    EN: "Can I cancel or modify my reservation?",
    GE: "შემიძლია ჯავშნის გაუქმება ან შეცვლა?",
    RU: "Могу ли я отменить или изменить бронирование?",
  },
  faqA3: {
    EN: "Yes, you can cancel or modify your reservation through the app up to 4 hours before your booking time.",
    GE: "დიახ, შეგიძლიათ გააუქმოთ ან შეცვალოთ დაჯავშნა აპლიკაციის საშუალებით დაჯავშნის დრომდე 4 საათით ადრე.",
    RU: "Да, вы можете отменить или изменить бронирование через приложение за 4 часа до назначенного времени.",
  },
  faqQ4: {
    EN: "What cities does Adgili cover?",
    GE: "რომელ ქალაქებს მოიცავს Adgili?",
    RU: "Какие города охватывает Adgili?",
  },
  faqA4: {
    EN: "Adgili currently covers Tbilisi, Batumi, Kutaisi, and other major cities across Georgia, with more locations being added regularly.",
    GE: "ამჟამად Adgili მოიცავს თბილისს, ბათუმს, ქუთაისს და საქართველოს სხვა მნიშვნელოვან ქალაქებს, ახალი ლოკაციები რეგულარულად ემატება.",
    RU: "В настоящее время Adgili охватывает Тбилиси, Батуми, Кутаиси и другие крупные города Грузии, регулярно добавляются новые локации.",
  },
  faqQ5: {
    EN: "How do I contact a restaurant directly?",
    GE: "როგორ დავუკავშირდე პირდაპირ რესტორანს?",
    RU: "Как связаться с рестораном напрямую?",
  },
  faqA5: {
    EN: "Each restaurant listing includes contact information. You can also message restaurants directly through the app.",
    GE: "თითოეული რესტორნის გვერდი შეიცავს საკონტაქტო ინფორმაციას. ასევე შეგიძლიათ პირდაპირ მიწეროთ რესტორნებს აპლიკაციის საშუალებით.",
    RU: "Каждая страница ресторана содержит контактную информацию. Вы также можете написать ресторанам напрямую через приложение.",
  },
  faqQ6: {
    EN: "Do I need an account to make a reservation?",
    GE: "მჭირდება თუ არა აქაუნთი ჯავშნისთვის?",
    RU: "Нужен ли аккаунт для бронирования?",
  },
  faqA6: {
    EN: "Yes, you need to create a account to make reservations. This allows you to manage your bookings and receive all kinds of notifications through app.",
    GE: "დიახ, ჯავშნისთვის საჭიროა აქაუნთის შექმნა. ეს საშუალებას გაძლევთ მართოთ თქვენი ჯავშნები და მიიღოთ ყველანაირი შეტყობინება აპლიკაციაშივე.",
    RU: "Да, для бронирования необходимо создать аккаунт. Это позволяет управлять бронированиями и получать уведомления сразу в самом приложении.",
  },
  faqQ7: {
    EN: "In what case could restaurant cancel my booking?",
    GE: "რა შემთხვევაში შეიძლება რესტორანმა გააუქმოს ჩემი ჯავშანი?",
    RU: "В каких случаях ресторан может отменить мой заказ?",
  },
  faqA7: {
    EN: "User Reputation System for Restaurant Reservations\n\nEach user starts with a Trust Score of 100.\n\n* Cancellation more than 4 hours before reservation: no penalty.\n* Cancellation within 4 hours: -15 Trust Score and +1 violation.\n* No-show (customer does not arrive): -30 Trust Score and +2 violations.\n* Successful visit: +3 Trust Score and reduces violation impact.\n* Trust Score is capped between 0 and 100.\n\nTrust Levels:\n\n* 70–100: Normal\n* 40–69: Warning\n* 20–39: Restricted (maximum 2 active reservations)\n* 0–19: Blocked from creating new reservations\n\nViolation-based restrictions:\n\n* 3 violations: Warning\n* 5 violations: 7-day block\n* 7 violations: 30-day block\n* 10 violations: 60-day block\n\nViolations are counted only within the last 180 days.\n\nUsers can recover reputation through successful visits, automatic amnesty periods, or approved support appeals. Restaurants and administrators can forgive penalties in verified force majeure situations (medical emergencies, transportation issues, restaurant faults, system errors, etc.), restoring Trust Score and removing related restrictions.",
    GE: "მომხმარებლის რეპუტაციის სისტემა რესტორნის ჯავშნებისთვის\n\nთითოეული მომხმარებელი იწყებს ნდობის 100 ქულით.\n\n* ჯავშნის გაუქმება 4 საათზე მეტი ხნით ადრე: ჯარიმა არ არის.\n* ჯავშნის გაუქმება 4 საათის განმავლობაში: -15 ნდობის ქულა და +1 დარღვევა.\n* გამოუცხადებლობა (მომხმარებელი არ მოდის): -30 ნდობის ქულა და +2 დარღვევა.\n* წარმატებული ვიზიტი: +3 ნდობის ქულა და ამცირებს დარღვევის გავლენას.\n* ნდობის ქულა შეზღუდულია 0-დან 100-მდე.\n\nნდობის დონეები:\n\n* 70–100: ნორმალური\n* 40–69: გაფრთხილება\n* 20–39: შეზღუდული (მაქსიმუმ 2 აქტიური დაჯავშნა)\n* 0–19: დაბლოკილი ახალი ჯავშნების შექმნისგან\n\nდარღვევებზე დაფუძნებული შეზღუდვები:\n\n* 3 დარღვევა: გაფრთხილება\n* 5 დარღვევა: 7-დღიანი ბლოკი\n* 7 დარღვევა: 30-დღიანი ბლოკი\n* 10 დარღვევა: 60-დღიანი ბლოკი\n\nდარღვევები ითვლება მხოლოდ ბოლო 180 დღის განმავლობაში.\n\nმომხმარებლებს შეუძლიათ რეპუტაციის აღდგენა წარმატებული ვიზიტების, ავტომატური ამნისტიის პერიოდების ან მხარდაჭერის სააპელაციო განაცხადების მეშვეობით. რესტორნებსა და ადმინისტრატორებს შეუძლიათ სანქციების პატიება დადასტურებული ფორს-მაჟორული სიტუაციების დროს (სამედიცინო გადაუდებელი შემთხვევები, სატრანსპორტო პრობლემები, რესტორნის ან სისტემის შეცდომები და სხვ.), აღადგინონ ნდობის ქულა და მოხსნან შესაბამისი შეზღუდვები.",
    RU: "Система репутации пользователей для бронирования ресторанов\n\nКаждый пользователь начинает с рейтинга доверия 100.\n\n* Отмена более чем за 4 часа до бронирования: без штрафа.\n* Отмена в течение 4 часов: -15 баллов доверия и +1 нарушение.\n* Неявка (клиент не приходит): -30 баллов доверия и +2 нарушения.\n* Успешное посещение: +3 балла доверия и снижает влияние нарушений.\n* Рейтинг доверия ограничен от 0 до 100.\n\nУровни доверия:\n\n* 70–100: Нормальный\n* 40–69: Предупреждение\n* 20–39: Ограниченный (максимум 2 активных бронирования)\n* 0–19: Заблокирован от создания новых бронирований\n\nОграничения на основе нарушений:\n\n* 3 нарушения: Предупреждение\n* 5 нарушений: блокировка на 7 дней\n* 7 нарушений: блокировка на 30 дней\n* 10 нарушений: блокировка на 60 дней\n\nНарушения учитываются только за последние 180 дней.\n\nПользователи могут восстановить репутацию через успешные посещения, автоматические периоды амнистии или одобренные апелляции в службу поддержки. Рестораны и администраторы могут прощать штрафы в подтверждённых форс-мажорных ситуациях (медицинские экстренные случаи, транспортные проблемы, ошибки ресторана или системы и т.д.), восстанавливая рейтинг доверия и снимая соответствующие ограничения.",
  },
  faqQ8: {
    EN: "Is it possible to make a reservation in advance for a large number of guests?",
    GE: "შესაძლებელია თუ არა დიდი რაოდენობის სტუმრებისთვის წინასწარი დაჯავშნა?",
    RU: "Можно ли бронировать для больших групп?",
  },
  faqA8: {
    EN: "Yes, you can book for any number of people through the app. For larger events, we recommend contacting the restaurant directly for further information.",
    GE: "დიახ, შეგიძლიათ დაჯავშნოთ ნებისმიერი რაოდენობის ადამიანისთვის აპლიკაციის საშუალებით. დამატებით კითხვებთან დაკავშირებით გთხოვთ დააზუსტოდ ინფორმაცია რესტორანთან.",
    RU: "Да, через приложение можно забронировать место для любого количества человек. По всем дополнительным вопросам, пожалуйста, уточняйте информацию непосредственно у ресторана.",
  },
  faqQ9: {
    EN: "How do restaurant ratings work?",
    GE: "როგორ მუშაობს რესტორნების რეიტინგი?",
    RU: "Как работают рейтинги ресторанов?",
  },
  faqA9: {
    EN: "Ratings are based on verified reviews from guests who have actually dined at the restaurant. Only confirmed diners can leave reviews, ensuring authenticity.",
    GE: "რეიტინგები ეფუძნება დადასტურებულ შეფასებებს პირდაპირ სტუმრებისგან, რომლებმაც მიირთვეს რესტორანში. მხოლოდ დადასტურებულ სტუმრებს შეუძლიათ შეფასების დატოვება, რაც უზრუნველყოფს ავთენტურობას.",
    RU: "Рейтинги основаны на проверенных отзывах гостей, которые действительно обедали в ресторане. Только подтвержденные гости могут оставлять отзывы, что обеспечивает достоверность.",
  },

  // Terms Page
  termsTitle: {
    EN: "App",
    GE: "აპლიკაციის",
    RU: "Условия",
  },
  terms: {
    EN: "Terms",
    GE: "პირობები",
    RU: "использования",
  },
  termsSection1Title: {
    EN: "1. Acceptance of Terms",
    GE: "1. პირობების მიღება",
    RU: "1. Принятие условий",
  },
  termsSection1: {
    EN: "By downloading, installing, or using the Adgili mobile application, you agree to be legally bound by these Terms of Service. These terms constitute a binding legal agreement between you and Adgili LLC. If you do not agree to these terms in their entirety, you must immediately cease using our services and uninstall the application from your device. Your continued use of Adgili signifies your acceptance of any future modifications to these terms, which we may update periodically without prior notice.",
    GE: "Adgili მობილური აპლიკაციის ჩამოტვირთვით, ინსტალაციით ან გამოყენებით, თქვენ ეთანხმებით, რომ იყოთ იურიდიულად შეზღუდული ამ მომსახურების პირობებით. ეს პირობები წარმოადგენს სავალდებულო იურიდიულ შეთანხმებას თქვენსა და Adgili LLC-ს შორის. თუ თქვენ არ ეთანხმებით ამ პირობებს მთლიანად, დაუყოვნებლივ უნდა შეწყვიტოთ ჩვენი სერვისების გამოყენება და წაშალოთ აპლიკაცია თქვენი მოწყობილობიდან.",
    RU: "Загружая, устанавливая или используя мобильное приложение Adgili, вы соглашаетесь быть юридически связанными настоящими Условиями обслуживания. Эти условия представляют собой обязывающее юридическое соглашение между вами и Adgili LLC. Если вы не согласны с этими условиями полностью, вы должны немедленно прекратить использование наших услуг и удалить приложение с вашего устройства.",
  },
  termsSection2Title: {
    EN: "2. User Accounts",
    GE: "2. მომხმარებლის ანგარიშები",
    RU: "2. Учетные записи пользователей",
  },
  termsSection2: {
    EN: "To access certain features of Adgili, you must create a user account by providing accurate and complete information. You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must be at least 18 years old to create an account. You agree to notify us immediately of any unauthorized use of your account. Adgili reserves the right to suspend or terminate accounts that violate these terms or are involved in fraudulent activities.",
    GE: "Adgili-ის გარკვეულ ფუნქციებზე წვდომისთვის, თქვენ უნდა შექმნათ მომხმარებლის ანგარიში ზუსტი და სრული ინფორმაციის მიწოდებით. თქვენ ხართ პასუხისმგებელი თქვენი ანგ   რიშის მონაცემების კონფიდენციალურობის შენარჩუნებაზე და თქვენი ანგარიშის ქვეშ განხორციელებულ ყველა აქტივობაზე. ანგარიშის შესაქმნელად უნდა იყოთ მინიმუმ 18 წლის.",
    RU: "Для доступа к определенным функциям Adgili вы должны создать учетную запись, предоставив точную и полную информацию. Вы несете полную ответственность за сохранение конфиденциальности данных вашей учетной записи и за все действия, происходящие под вашей учетной записью. Для создания учетной записи вам должно быть не менее 18 лет.",
  },
  termsSection3Title: {
    EN: "3. Booking Policy",
    GE: "3. დაჯავშნის პოლიტიკა",
    RU: "3. Политика бронирования",
  },
  termsSection3: {
    EN: "Adgili facilitates restaurant reservations between users and restaurant partners. All bookings are subject to availability and restaurant confirmation. Users must arrive within 15 minutes of their reservation time; failure to do so may result in cancellation of your table. Cancellations must be made at least 2 hours before the scheduled reservation time. Repeated no-shows or late cancellations may result in temporary or permanent restrictions on your account. Special requests are not guaranteed and are subject to restaurant discretion.",
    GE: "Adgili ამარტივებს რესტორნების დაჯავშნებს მომხმარებლებსა და პარტნიორ რესტორნებს შორის. ყველა დაჯავშნა ექვემდებარება ხელმისაწვდომობას და რესტორნის დადასტურებას. მომხმარებლები უნდა მოვიდნენ დაჯავშნის დროიდან 15 წუთის განმავლობაში; წინააღმდეგ შემთხვევაში თქვენი მაგიდა შეიძლება გაუქმდეს. გაუქმებები უნდა განხორციელდეს დაგეგმილი დაჯავშნის დრომდე მინიმუმ 2 საათით ადრე.",
    RU: "Adgili облегчает бронирование ресторанов между пользователями и партнерами-ресторанами. Все бронирования зависят от наличия мест и подтверждения ресторана. Пользователи должны прибыть в течение 15 минут после времени бронирования; в противном случае ваш столик может быть отменен. Отмены должны быть сделаны не менее чем за 2 часа до запланированного времени бронирования.",
  },
  termsSection4Title: {
    EN: "4. User Conduct Rules",
    GE: "4. მომხმარებლის ქცევის წესები",
    RU: "4. Правила поведения пользователей",
  },
  termsSection4: {
    EN: "Users agree to use Adgili responsibly and ethically. Prohibited activities include: creating multiple accounts, making false reservations, using the service for commercial purposes without authorization, attempting to manipulate ratings or reviews, harassing restaurant staff or other users, and any activity that disrupts the proper functioning of our platform. Violations may result in immediate account termination without refund of any accumulated benefits.",
    GE: "მომხმარებლები თანხმდებიან გამოიყენონ Adgili პასუხისმგებლობით და ეთიკურად. აკრძალული აქტივობები მოიცავს: მრავალი ანგარიშის შექმნას, ყალბი დაჯავშნების გაკეთებას, სერვისის კომერციული მიზნებისთვის გამოყენებას ავტორიზაციის გარეშე, რეიტინგების ან შეფასებების მანიპულირების მცდელობას, რესტორნის პერსონალის ან სხვა მომხმარებლების შევიწროებას.",
    RU: "Пользователи соглашаются использовать Adgili ответственно и этично. Запрещенные действия включают: создание нескольких учетных записей, ложные бронирования, использование сервиса в коммерческих целях без разрешения, попытки манипулировать рейтингами или отзывами, притеснение персонала ресторана или других пользователей.",
  },
  termsSection5Title: {
    EN: "5. Intellectual Property",
    GE: "5. ინტელექტუალური საკუთრება",
    RU: "5. Интеллектуальная собственность",
  },
  termsSection5: {
    EN: "All content, trademarks, logos, designs, and software associated with Adgili are the exclusive property of Adgili LLC and are protected by Georgian and international intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of our services or included software without explicit written permission. User-generated content, including reviews and ratings, grants Adgili a worldwide, non-exclusive license to use, display, and distribute such content.",
    GE: "Adgili-თან დაკავშირებული ყველა კონტენტი, სავაჭრო ნიშანი, ლოგო, დიზაინი და პროგრამული უზრუნველყოფა არის Adgili LLC-ის ექსკლუზიური საკუთრება და დაცულია საქართველოს და საერთაშორისო ინტელექტუალური საკუთრების კანონებით. თქვენ არ შეგიძლიათ დააკოპიროთ, შეცვალოთ, გაავრცელოთ, გაყიდოთ ან გააქირაოთ ჩვენი სერვისების ან პროგრამული უზრუნველყოფის რაიმე ნაწილი წერილობითი ნებართვის გარეშე.",
    RU: "Весь контент, товарные знаки, логотипы, дизайны и программное обеспечение, связанные с Adgili, являются исключительной собственностью Adgili LLC и защищены грузинскими и международными законами об интеллектуальной собственности. Вы не можете копировать, изменять, распространять, продавать или сдавать в аренду любую часть наших услуг без письменного разрешения.",
  },
  termsSection6Title: {
    EN: "6. Limitation of Liability",
    GE: "6. პასუხისმგებლობის შეზღუდვა",
    RU: "6. Ограничение ответственности",
  },
  termsSection6: {
    EN: "Adgili provides a booking platform only and is not responsible for the quality of food, service, hygiene, or overall experience at partner restaurants. We make no warranties regarding the accuracy of restaurant information, availability, or pricing. Adgili shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount you have paid to Adgili in the past twelve months.",
    GE: "Adgili უზრუნველყოფს მხოლოდ დაჯავშნის პლატფორმას და არ არის პასუხისმგებელი პარტნიორ რესტორნებში საკვების ხარისხზე, მომსახურებაზე, ჰიგიენაზე ან საერთო გამოცდილებაზე. ჩვენ არ ვიძლევით გარანტიას რესტორნის ინფორმაციის, ხელმისაწვდომობის ან ფასების სიზუსტეზე. Adgili არ იქნება პასუხისმგებელი რაიმე არაპირდაპირ, შემთხვევით, სპეციალურ, შედეგობრივ ან დამსჯელ ზიანზე.",
    RU: "Adgili предоставляет только платформу для бронирования и не несет ответственности за качество еды, обслуживание, гигиену или общий опыт в партнерских ресторанах. Мы не даем никаких гарантий относительно точности информации о ресторане, доступности или ценах. Adgili не несет ответственности за любой косвенный, случайный, специальный, последовательный или штрафной ущерб.",
  },
  termsSection7Title: {
    EN: "7. Account Termination",
    GE: "7. ანგარიშის შეწყვეტა",
    RU: "7. Прекращение учетной записи",
  },
  termsSection7: {
    EN: "You may terminate your account at any time through the app settings or by contacting our support team. Adgili reserves the right to suspend or terminate your account immediately, without prior notice, if we reasonably believe you have violated these terms, engaged in fraudulent activity, or pose a risk to other users or our platform. Upon termination, your right to use Adgili ceases immediately, and we may delete your data in accordance with our Privacy Policy.",
    GE: "შეგიძლიათ შეწყვიტოთ თქვენი ანგარიში ნებისმიერ დროს აპლიკაციის პარამეტრებით ან ჩვენს მხარდაჭერის გუნდთან დაკავშირებით. Adgili იტოვებს უფლებას დაუყოვნებლივ შეაჩეროს ან შეწყვიტოს თქვენი ანგარიში, წინასწარი შეტყობინების გარეშე, თუ გონივრულად მივიჩნევთ, რომ თქვენ დაარღვიეთ ეს პირობები, მონაწილეობთ თაღლითურ საქმიანობაში ან საფრთხეს უქმნით სხვა მომხმარებლებს.",
    RU: "Вы можете удалить свою учетную запись в любое время через настройки приложения или связавшись с нашей службой поддержки. Adgili оставляет за собой право немедленно приостановить или удалить вашу учетную запись без предварительного уведомления, если мы обоснованно полагаем, что вы нарушили эти условия, занимались мошенничеством или представляете риск для других пользователей.",
  },
  termsSection8Title: {
    EN: "8. Governing Law",
    GE: "8. მოქმედი კანონმდებლობა",
    RU: "8. Применимое право",
  },
  termsSection8: {
    EN: "These Terms of Service shall be governed by and construed in accordance with the laws of Georgia, without regard to its conflict of law provisions. Any disputes arising from these terms or your use of Adgili shall be resolved exclusively in the courts of Tbilisi, Georgia. By using Adgili, you consent to the personal jurisdiction of these courts. If any provision of these terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.",
    GE: "ეს მომსახურების პირობები რეგულირდება და განიმარტება საქართველოს კანონმდებლობის შესაბამისად, კანონთა კონფლიქტის დებულებების მიუხედავად. ამ პირობებიდან ან Adgili-ის გამოყენებიდან წარმოშობილი ნებისმიერი დავა გადაწყდება ექსკლუზიურად თბილისის, საქართველოს სასამართლოებში. Adgili-ის გამოყენებით, თქვენ ეთანხმებით ამ სასამართლოების პირადი იურისდიქციას.",
    RU: "Настоящие Условия обслуживания регулируются и толкуются в соответствии с законодательством Грузии, без учета положений о коллизии законов. Любые споры, возникающие из этих условий или использования Adgili, будут разрешаться исключительно в судах Тбилиси, Грузия. Используя Adgili, вы соглашаетесь с персональной юрисдикцией этих судов.",
  },

  // Website Terms Page
  websiteTermsTitle: {
    EN: "Website",
    GE: "ვებგვერდის",
    RU: "Условия",
  },
  websiteTermsTitle2: {
    EN: "Terms & Conditions",
    GE: "წესები და პირობები",
    RU: "использования сайта",
  },
  websiteSection1Title: {
    EN: "1. Website Use",
    GE: "1. ვებგვერდის გამოყენება",
    RU: "1. Использование сайта",
  },
  websiteSection1: {
    EN: "By accessing and using the Adgili website, you agree to comply with these terms and conditions. The website is provided for informational purposes and to facilitate access to our mobile application. You may browse the website, download our app, and access publicly available content without creating an account. Commercial use of website content without authorization is prohibited.",
    GE: "Adgili ვებგვერდზე წვდომით და გამოყენებით, თქვენ ეთანხმებით ამ წესებსა და პირობებს. ვებგვერდი მოწოდებულია საინფორმაციო მიზნებისთვის და ჩვენი მობილური აპლიკაციის წვდომის გასაადვილებლად. შეგიძლიათ დაათვალიეროთ ვებგვერდი, ჩამოტვირთოთ ჩვენი აპლიკაცია და მიიღოთ საჯაროდ ხელმისაწვდომი კონტენტი ანგარიშის შექმნის გარეშე.",
    RU: "Получая доступ к веб-сайту Adgili и используя его, вы соглашаетесь соблюдать эти условия. Веб-сайт предоставляется в информационных целях и для облегчения доступа к нашему мобильному приложению. Вы можете просматривать сайт, загружать наше приложение и получать доступ к общедоступному контенту без создания учетной записи.",
  },
  websiteSection2Title: {
    EN: "2. Content Ownership",
    GE: "2. კონტენტის საკუთრება",
    RU: "2. Право собственности на контент",
  },
  websiteSection2: {
    EN: "All content on this website, including text, graphics, logos, images, and software, is the property of Adgili LLC or its content suppliers and is protected by Georgian and international copyright laws. You may not reproduce, distribute, modify, or create derivative works from any content without prior written consent.",
    GE: "ამ ვებგვერდის ყველა კონტენტი, მათ შორის ტექსტი, გრაფიკა, ლოგოები, სურათები და პროგრამული უზრუნველყოფა, არის Adgili LLC-ის ან მისი კონტენტის მომწოდებლების საკუთრება და დაცულია საქართველოს და საერთაშორისო საავტორო უფლებების კანონებით.",
    RU: "Весь контент на этом веб-сайте, включая текст, графику, логотипы, изображения и программное обеспечение, является собственностью Adgili LLC или его поставщиков контента и защищен грузинскими и международными законами об авторском праве.",
  },
  websiteSection3Title: {
    EN: "3. External Links",
    GE: "3. გარე ბმულები",
    RU: "3. Внешние ссылки",
  },
  websiteSection3: {
    EN: "Our website may contain links to third-party websites. These links are provided for your convenience only. Adgili does not endorse, control, or assume responsibility for the content or practices of any third-party sites. Accessing external links is at your own risk.",
    GE: "ჩვენი ვებგვერდი შეიძლება შეიცავდეს ბმულებს მესამე მხარის ვებგვერდებზე. ეს ბმულები მოწოდებულია მხოლოდ თქვენი მოხერხებულობისთვის. Adgili არ უჭერს მხარს, არ აკონტროლებს და არ იღებს პასუხისმგებლობას მესამე მხარის საიტების კონტენტზე ან პრაქტიკაზე.",
    RU: "Наш веб-сайт может содержать ссылки на сторонние веб-сайты. Эти ссылки предоставляются только для вашего удобства. Adgili не поддерживает, не контролирует и не несет ответственности за контент или практику сторонних сайтов.",
  },
  websiteSection4Title: {
    EN: "4. Disclaimer",
    GE: "4. უარყოფა",
    RU: "4. Отказ от ответственности",
  },
  websiteSection4: {
    EN: "The website and its content are provided 'as is' without warranties of any kind. Adgili disclaims all warranties, express or implied, including but not limited to merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that the website will be error-free, secure, or continuously available.",
    GE: "ვებგვერდი და მისი კონტენტი მოწოდებულია 'როგორც არის' ყოველგვარი გარანტიის გარეშე. Adgili უარყოფს ყველა გარანტიას, გამოხატულს თუ ნაგულისხმევს, მათ შორის, მაგრამ არ შემოიფარგლება კომერციული ვარგისიანობით, კონკრეტული მიზნისთვის ვარგისიანობით და დარღვევის არარსებობით.",
    RU: "Веб-сайт и его содержимое предоставляются «как есть» без каких-либо гарантий. Adgili отказывается от всех гарантий, явных или подразумеваемых, включая, но не ограничиваясь, коммерческую пригодность, пригодность для определенной цели и отсутствие нарушений.",
  },
  websiteSection5Title: {
    EN: "5. Modifications",
    GE: "5. ცვლილებები",
    RU: "5. Изменения",
  },
  websiteSection5: {
    EN: "Adgili reserves the right to modify these website terms at any time without prior notice. Changes become effective immediately upon posting. Your continued use of the website after changes constitutes acceptance of the modified terms. We encourage you to review these terms periodically.",
    GE: "Adgili იტოვებს უფლებას შეცვალოს ვებგვერდის ეს პირობები ნებისმიერ დროს წინასწარი შეტყობინების გარეშე. ცვლილებები ძალაში შედის გამოქვეყნებისთანავე. ვებგვერდის გამოყენების გაგრძელება ცვლილებების შემდეგ ნიშნავს შეცვლილი პირობების მიღებას.",
    RU: "Adgili оставляет за собой право изменять условия использования веб-сайта в любое время без предварительного уведомления. Изменения вступают в силу сразу после публикации. Продолжение использования веб-сайта после изменений означает принятие измененных условий.",
  },

  // GE Business Terms Page
  businessTermsTitle: {
    EN: "GE Business",
    GE: "GE ბიზნეს",
    RU: "GE Бизнес",
  },
  businessTermsTitle2: {
    EN: "Terms & Conditions",
    GE: "წესები და პირობები",
    RU: "Условия",
  },
  businessSection1Title: {
    EN: "1. Partner Agreement",
    GE: "1. პარტნიორობის შეთანხმება",
    RU: "1. Партнерское соглашение",
  },
  businessSection1: {
    EN: "These Business Terms govern the relationship between Adgili LLC and restaurant partners ('Partners') using our platform. By registering as a business partner, you agree to these terms and our standard commission rates. Partners must be legally registered businesses in Georgia with valid operating licenses.",
    GE: "ეს ბიზნეს პირობები არეგულირებს ურთიერთობას Adgili LLC-სა და პარტნიორ რესტორნებს ('პარტნიორები') შორის, რომლებიც იყენებენ ჩვენს პლატფორმას. ბიზნეს პარტნიორად რეგისტრაციით, თქვენ ეთანხმებით ამ პირობებს და ჩვენს სტანდარტულ საკომისიო განაკვეთებს.",
    RU: "Настоящие Бизнес-условия регулируют отношения между Adgili LLC и ресторанами-партнерами ('Партнеры'), использующими нашу платформу. Регистрируясь в качестве бизнес-партнера, вы соглашаетесь с этими условиями и нашими стандартными комиссионными ставками.",
  },
  businessSection2Title: {
    EN: "2. Commission & Payments",
    GE: "2. საკომისიო და გადახდები",
    RU: "2. Комиссия и платежи",
  },
  businessSection2: {
    EN: "Partners agree to pay Adgili a commission on bookings made through our platform. Commission rates vary based on partnership tier and volume. Payments are processed monthly, with detailed reports provided. Partners are responsible for all applicable taxes on their earnings.",
    GE: "პარტნიორები თანხმდებიან გადაუხადონ Adgili-ს საკომისიო ჩვენი პლატფორმის საშუალებით განხორციელებულ დაჯავშნებზე. საკომისიო განაკვეთები განსხვავდება პარტნიორობის დონისა და მოცულობის მიხედვით. გადახდები მუშავდება ყოველთვიურად, დეტალური ანგარიშებით.",
    RU: "Партнеры соглашаются платить Adgili комиссию за бронирования, сделанные через нашу платформу. Комиссионные ставки варьируются в зависимости от уровня партнерства и объема. Платежи обрабатываются ежемесячно с предоставлением подробных отчетов.",
  },
  businessSection3Title: {
    EN: "3. Listing Requirements",
    GE: "3. ჩამონათვალის მოთხოვნები",
    RU: "3. Требования к размещению",
  },
  businessSection3: {
    EN: "Partners must provide accurate and up-to-date information about their establishment, including operating hours, menu, photos, and contact details. Adgili reserves the right to verify information and request updates. Misleading or false information may result in listing removal.",
    GE: "პარტნიორებმა უნდა მიაწოდონ ზუსტი და განახლებული ინფორმაცია თავიანთი დაწესებულების შესახებ, მათ შორის სამუშაო საათები, მენიუ, ფოტოები და საკონტაქტო ინფორმაცია. Adgili იტოვებს უფლებას შეამოწმოს ინფორმაცია და მოითხოვოს განახლებები.",
    RU: "Партнеры должны предоставлять точную и актуальную информацию о своем заведении, включая часы работы, меню, фотографии и контактные данные. Adgili оставляет за собой право проверять информацию и запрашивать обновления.",
  },
  businessSection4Title: {
    EN: "4. Booking Obligations",
    GE: "4. დაჯავშნის ვალდებულებები",
    RU: "4. Обязательства по бронированию",
  },
  businessSection4: {
    EN: "Partners must honor all confirmed bookings made through Adgili. Cancellations by the partner must be communicated immediately through our system. Repeated cancellations or failure to honor bookings may result in penalties, reduced visibility, or partnership termination.",
    GE: "პარტნიორებმა უნდა დაიცვან Adgili-ს საშუალებით განხორციელებული ყველა დადასტურებული დაჯავშნა. პარტნიორის მიერ გაუქმებები დაუყოვნებლივ უნდა ეცნობოს ჩვენს სისტემის საშუალებით. განმეორებითი გაუქმებები შეიძლება გამოიწვიოს ჯარიმები ან პარტნიორობის შეწყვეტა.",
    RU: "Партнеры обязаны выполнять все подтвержденные бронирования, сделанные через Adgili. Об отменах со стороны партнера необходимо немедленно сообщать через нашу систему. Повторные отмены могут привести к штрафам или прекращению партнерства.",
  },
  businessSection5Title: {
    EN: "5. Data & Analytics",
    GE: "5. მონაცემები და ანალიტიკა",
    RU: "5. Данные и аналитика",
  },
  businessSection5: {
    EN: "Partners receive access to booking analytics and customer insights through our partner dashboard. Customer data shared with partners is limited to what's necessary for reservation fulfillment. Partners must comply with all applicable data protection laws and may not use customer data for unauthorized purposes.",
    GE: "პარტნიორები იღებენ წვდომას დაჯავშნის ანალიტიკასა და მომხმარებლის ინფორმაციაზე ჩვენი პარტნიორის პანელის საშუალებით. პარტნიორებთან გაზიარებული მომხმარებლის მონაცემები შეზღუდულია იმით, რაც აუცილებელია დაჯავშნის შესასრულებლად.",
    RU: "Партнеры получают доступ к аналитике бронирований и информации о клиентах через нашу партнерскую панель. Данные клиентов, передаваемые партнерам, ограничены тем, что необходимо для выполнения бронирования.",
  },
  businessSection6Title: {
    EN: "6. Termination",
    GE: "6. შეწყვეტა",
    RU: "6. Прекращение",
  },
  businessSection6: {
    EN: "Either party may terminate this partnership with 30 days written notice. Adgili may terminate immediately for material breach of these terms. Upon termination, outstanding commissions remain due and payable. Partners must honor any bookings made prior to termination.",
    GE: "ნებისმიერ მხარეს შეუძლია შეწყვიტოს ეს პარტნიორობა 30 დღიანი წერილობითი შეტყობინებით. Adgili-ს შეუძლია დაუყოვნებლივ შეწყვიტოს ამ პირობების არსებითი დარღვევის შემთხვევაში. შეწყვეტის შემდეგ, გადაუხდელი საკომისიოები რჩება გადასახდელად.",
    RU: "Любая сторона может прекратить это партнерство с письменным уведомлением за 30 дней. Adgili может немедленно прекратить партнерство за существенное нарушение этих условий. После прекращения невыплаченные комиссии остаются к оплате.",
  },

  // Privacy Page
  privacyTitle: {
    EN: "Privacy",
    GE: "კონფიდენციალურობის",
    RU: "Политика",
  },
  policy: {
    EN: "Policy",
    GE: "პოლიტიკა",
    RU: "конфиденциальности",
  },
  privacySection1Title: {
    EN: "1. Introduction",
    GE: "1. შესავალი",
    RU: "1. Введение",
  },
  privacySection1: {
    EN: "Adgili (\"we\", \"us\", \"our\") is a table reservation platform developed and operated by Adgili, a partnership registered in Georgia (the country), dedicated to helping users discover restaurants, cafes, and dining venues and reserve tables through our mobile and web application (the \"App\").\n\nThis Privacy Policy (the \"Policy\") explains what personal data we collect when you use our App, how we use and protect it, with whom we may share it, and what rights you have over it.\n\nBy creating an account or using the App, you agree to this Policy. If you do not agree, please stop using the App. We may update this Policy from time to time; we will notify you of significant changes through the App.\n\nThe App is not directed at children under the age of 5. We do not knowingly collect personal data from children. If you believe we have done so inadvertently, please contact us at the address in Section 10.",
    GE: "Adgili (\"ჩვენ\", \"ჩვენი\") არის მაგიდის დაჯავშნის პლატფორმა, შემუშავებული და განკარგული Adgili-ს მიერ — საქართველოში რეგისტრირებული პარტნიორობა, რომლის მიზანია მომხმარებლებს დაეხმაროს რესტორნების, კაფეების და სასადილო ადგილების აღმოჩენასა და მაგიდის დაჯავშნაში ჩვენი მობილური აპლიკაციის (\"აპპი\") საშუალებით.\n\nეს კონფიდენციალურობის პოლიტიკა (\"პოლიტიკა\") განმარტავს, თუ რა პერსონალურ მონაცემებს ვაგროვებთ აპის გამოყენებისას, როგორ ვიყენებთ და ვიცავთ მათ, ვისთან შეიძლება გავაზიაროთ და რა უფლებები გაქვთ მათ მიმართ.\n\nაპზე ანგარიშის შექმნით ან გამოყენებით, თქვენ ეთანხმებით ამ პოლიტიკას. თუ არ ეთანხმებით, გთხოვთ შეწყვიტოთ აპის გამოყენება. პოლიტიკა შეიძლება დროდადრო განახლდეს; მნიშვნელოვანი ცვლილებების შესახებ შეგატყობინებთ აპის საშუალებით.\n\nაპი არ არის განკუთვნილი 5 წელს მიღწეული ასაკის ბავშვებისთვის. ჩვენ შეგნებულად არ ვაგროვებთ ბავშვების პერსონალურ მონაცემებს. თუ მიგაჩნიათ, რომ ეს უნებლიეთ მოხდა, გთხოვთ გადახედოთ მე-10 პუნქტში არსებულ ინფორმაციას.",
    RU: "Adgili (\"мы\", \"нас\", \"наш\") платформа для бронирования столиков, разработанная и управляемая компанией Adgili, зарегистрированным партнёрством в Грузии, цель которого — помогать пользователям находить рестораны, кафе и заведения общественного питания и бронировать столики через наше мобильное и веб-приложение (\"Приложение\").\n\nНастоящая Политика конфиденциальности (\"Политика\") объясняет, какие персональные данные мы собираем при использовании Приложения, как мы их используем и защищаем, с кем можем ими делиться и какие права вы имеете в отношении них.\n\nСоздавая аккаунт или используя Приложение, вы соглашаетесь с настоящей Политикой. Если вы не согласны, пожалуйста, прекратите использование Приложения. Мы можем периодически обновлять Политику; о существенных изменениях мы уведомим вас через Приложение.\n\nПриложение не предназначено для детей до 5 лет. Мы осознанно не собираем персональные данные детей. Если вы считаете, что это произошло непреднамеренно, свяжитесь с нами по адресу, указанному в Разделе 10.",
  },
  privacySection2Title: {
    EN: "2. Who We Are — Data Controller",
    GE: "2. ვინ ვართ ჩვენ — მონაცემთა კონტროლერი",
    RU: "2. Кто мы — Контролёр данных",
  },
  privacySection2: {
    EN: "Adgili is the controller of the personal data you provide through the App. This means we are responsible for determining how and why your data is used.\n\nContact: helloadgili@gmail.com\nRegistered address: Batumi, Adjara, Georgia",
    GE: "Adgili არის აპის საშუალებით მოწოდებული პერსონალური მონაცემების კონტროლერი. ეს ნიშნავს, რომ ჩვენ ვპასუხობთ იმაზე, თუ როგორ და რატომ გამოიყენება თქვენი მონაცემები.\n\nსაკონტაქტო ინფორმაცია: helloadgili@gmail.com\nრეგისტრირებული მისამართი: ბათუმი, აჭარა, საქართველო",
    RU: "Adgili является контролёром персональных данных, которые вы предоставляете через Приложение. Это означает, что мы несём ответственность за определение того, как и для каких целей используются ваши данные.\n\nКонтакт: helloadgili@gmail.com\nЮридический адрес: Батуми, Аджария, Грузия",
  },
  privacySection3Title: {
    EN: "3. What Personal Data We Collect",
    GE: "3. რა პერსონალურ მონაცემებს ვაგროვებთ",
    RU: "3. Какие персональные данные мы собираем",
  },
  privacySection3: {
    EN: "When you register and use the App, we may collect the following categories of personal data:\n\n3.1 Account & Identity Data\n• Full name (first and last name)\n• Email address\n• Hashed password (we never store your password in readable form)\n\n3.2 Contact Data\n• Mobile phone number (used solely so a restaurant may contact you about your reservation in exceptional circumstances)\n\n3.3 Reservation & Usage Data\n• Restaurants searched, browsed, and followed\n• Reservation details: date, time, number of guests, and restaurant chosen\n• Visit history: record of confirmed reservations and visits\n• Dining preferences inferred from your reservation history and browsing behaviour within the App\n\n3.4 Technical Data\n• IP address\n• Device type and operating system\n• App version and session logs\nLocation infromation of user\n\n3.5 Data We Do NOT Collect\nWe do not collect:\n• Payment or financial data (no in-app payments exist at this stage)\n• Special category data (race, religion, health, political opinions, sexual orientation, biometric data, etc.)\n• Data from third-party login providers (we use email/password only)\n• Location data beyond the city or region you select in the App filters",
    GE: "რეგისტრაციისა და აპის გამოყენებისას შეიძლება შევაგროვოთ შემდეგი კატეგორიის პერსონალური მონაცემები:\n\n3.1 ანგარიშისა და პირადობის მონაცემები\n• სრული სახელი (სახელი და გვარი)\n• ელექტრონული ფოსტის მისამართი\n• დაშიფრული პაროლი (პაროლს არასდროს ვინახავთ წასაკითხ მდგომარეობაში)\n\n3.2 საკონტაქტო მონაცემები\n• მობილური ტელეფონის ნომერი (გამოიყენება მხოლოდ იმ შემთხვევაში, თუ რესტორანს სჭირდება თქვენთან დაკავშირება განსაკუთრებულ გარემოებებში)\n\n3.3 დაჯავშნისა და გამოყენების მონაცემები\n• ძებნილი, დათვალიერებული და გამოწერილი რესტორნები\n• დაჯავშნის დეტალები: თარიღი, დრო, სტუმრების რაოდენობა და არჩეული რესტორანი\n• ვიზიტების ისტორია: დადასტურებული ჯავშნებისა და ვიზიტების ჩანაწერები\n• პარამეტრებში მითითებული კვების უპირატესობები, დაჯავშნის ისტორია და აპში დათვალიერების თუ სხვა ნებისმიერი ქმედების განხორციელება\n\n3.4 ტექნიკური მონაცემები\n• IP მისამართი\n• მოწყობილობის ტიპი და ოპერაციული სისტემა\n• აპის ვერსია და სესიის ჟურნალები\nმომხმარებლის გეოპოზიცია ანუ მდებარეობის მონაცემები\n\n3.5 მონაცემები, რომლებსაც არ ვაგროვებთ\nჩვენ არ ვაგროვებთ:\n• საგადახდო ან ფინანსურ მონაცემებს (ამ ეტაპზე აპში გადახდა არ არის)\n• სპეციალური კატეგორიის მონაცემებს (რასა, რელიგია, ჯანმრთელობა, პოლიტიკური შეხედულებები, სექსუალური ორიენტაცია, ბიომეტრიული მონაცემები და სხვ.)\n•მესამე მხარის შესვლის პროვაიდერებიდან მიღებულ მონაცემებს (ვიყენებთ მხოლოდ ელ.ფოსტა/პაროლის სისტემას)\n• ლოკაციის ინფორმაცია გარდა ქალაქისა თუ რეგიონისა რომელსაც მიუთეთებთ აპლიკაციის ფილტრში",
    RU: "При регистрации и использовании приложения мы можем собирать следующие категории персональных данных:\n\n3.1 Данные учетной записи и удостоверения личности\n• Полное имя (имя и фамилия)\n• Адрес электронной почты\n• Зашифрованный пароль (мы никогда не храним пароли в читаемом виде)\n\n3.2 Контактные данные\n• Номер мобильного телефона (используется только в том случае, если ресторану необходимо связаться с вами при особых обстоятельствах)\n\n3.3 Данные о бронировании и использовании\n• Рестораны, которые вы искали, просматривали и на которые подписались\n• Детали бронирования: дата, время, количество гостей и выбранный ресторан\n• История визитов: записи подтвержденных бронирований и посещений\n• Указанные в настройках предпочтения в еде, история бронирований, а также просмотры или любые другие действия в приложении\n\n3.4 Технические данные\n• IP-адрес\n• Тип устройства и операционная система\n• Версия приложения и логи сессий\nГеопозиция пользователя (данные о местоположении)\n\n3.5 Данные, которые мы НЕ собираем\nМы не собираем:\n• Платежные или финансовые данные (на данном этапе в приложении нет оплаты)\n• Данные специальных категорий (раса, религия, здоровье, политические взгляды, сексуальная ориентация, биометрические данные и т. д.)\n•Данные, полученные от сторонних провайдеров входа (мы используем только систему email/пароль)\n• Данные о местоположении за пределами города или региона, выбранных вами в фильтрах приложения.",
  },
  privacySection4Title: {
    EN: "4. How We Collect Your Data",
    GE: "4. როგორ ვაგროვებთ თქვენს მონაცემებს",
    RU: "4. Как мы собираем ваши данные",
  },
  privacySection4: {
    EN: "We collect your personal data through the following means:\n\n• Directly from you, when you register an account, make a reservation, browse venues, follow a restaurant profile, or contact us\n• Automatically, through your interactions with the App (pages visited, searches performed, reservations created or cancelled)",
    GE: "პერსონალური მონაცემების შეგროვება ხდება შემდეგი გზით:\n\n• უშუალოდ თქვენგან, ანგარიშის რეგისტრაციისას, მაგიდის დაჯავშნისას, ადგილების დათვალიერებისას, რესტორნის პროფილის გამოწერისას ან ჩვენთან დაკავშირებისას\n• ავტომატურად, აპთან ურთიერთობის გზით (მონახულებული გვერდები, ძიებები, შექმნილი ან გაუქმებული დაჯავშნები)",
    RU: "Сбор персональных данных происходит следующим образом:\n\n• Напрямую от вас, при регистрации аккаунта, бронировании столика, просмотре заведений, подписке на профиль ресторана или при обращении к нам\n• Автоматически, в процессе взаимодействия с приложением (посещенные страницы, поисковые запросы, созданные или отмененные бронирования)",
  },
  privacySection5Title: {
    EN: "5. How and Why We Use Your Data",
    GE: "5. როგორ და რატომ ვიყენებთ თქვენს მონაცემებს",
    RU: "5. Как и почему мы используем ваши данные",
  },
  privacySection5: {
    EN: "We will only process your personal data where we have a lawful basis to do so. The purposes for which we use your data and the legal basis we rely on:\n\n• Creating and managing your account — Performance of a contract with you.\n• Processing and managing table reservations, including generating your QR entry code — Performance of a contract.\n• Sharing your reservation details with the relevant restaurant — Performance of a contract; legitimate interests (enabling the venue to prepare for your visit).\n• Sending push notifications about your reservations (confirmations, changes, reminders) — Performance of a contract; legitimate interests.\n• Sending push notifications about personalised offers and promotions from restaurants you have visited — Your consent (you may opt out at any time in App settings).\n• Enabling restaurants to view activity data related to your reservations at their venue — Legitimate interests (enabling restaurants to improve their service and send relevant offers).\n• Improving the App and analysing usage — Legitimate interests (maintaining and improving our service).\n• Complying with legal obligations — Legal obligation.",
    GE: "პერსონალურ მონაცემებს ვამუშავებთ მხოლოდ მაშინ, როდესაც გვაქვს კანონიერი საფუძველი. ქვემოთ მოცემულია ძირითადი მიზნები და შესაბამისი სამართლებრივი საფუძვლები საქართველოს პერსონალურ მონაცემთა დაცვის კანონმდებლობისა (2011 წლის კანონი პერსონალურ მონაცემთა დაცვის შესახებ, ცვლილებებით) და ევროკავშირის GDPR-ის მიხედვით:\n\n• ანგარიშის შექმნა და მართვა** — ხელშეკრულების შესრულება.\n• მაგიდის დაჯავშნის დამუშავება და მართვა, QR შესვლის კოდის გენერირებით** — ხელშეკრულების შესრულება.\n• დაჯავშნის დეტალების შესაბამის რესტორანთან გაზიარება — ხელშეკრულების შესრულება; კანონიერი ინტერესი (ობიექტს მოსამზადებლად).\n•Push-შეტყობინებების გაგზავნა დაჯავშნის შესახებ — ხელშეკრულების შესრულება; კანონიერი ინტერესი.\n•პერსონალიზებული შეთავაზებებისა და აქციების Push-შეტყობინებები — თქვენი თანხმობა (ნებისმიერ დროს შეგიძლიათ უარი თქვათ აპის პარამეტრებში).\n• რესტორნებს მათ ობიექტთან დაკავშირებული აქტივობის მონაცემების ნახვის საშუალება — კანონიერი ინტერესი (სერვისის გაუმჯობესება).\n• აპის გაუმჯობესება და გამოყენების ანალიზი — კანონიერი ინტერესი.\n• სამართლებრივი ვალდებულებების შესრულება — სამართლებრივი ვალდებულება.",
    RU: "Вы имеете право получить доступ, исправить или удалить вашу личную информацию в любое время. Вы можете запросить копию всех данных, которые мы храним о вас, в портативном формате. Вы имеете право ограничить или возразить против определенной обработки ваших данных.",
  },
  privacySection6Title: {
    EN: "6. QR Codes and In-Venue Experience",
    GE: "ქუქი-ფაილები და თვალყურის დევნება",
    RU: "Файлы cookie и отслеживание",
  },
  privacySection6: {
    EN: "The App uses two types of QR codes:\n\n6.1 Entry QR Code\nWhen you complete a reservation, the App generates a unique QR code linked to your booking. When you arrive at the venue, the host scans this code to verify your reservation and assign you a table. The scan logs your arrival as part of your visit history in the App.\n\n6.2 Digital Menu QR Code\nOnce you are seated, a second QR code is available at your table which, when scanned, opens the restaurant's digital menu. Scanning this code does not generate or transmit any additional personal data about you beyond confirming that a user with an active reservation at that table accessed the menu.",
    GE: "ჩვენი აპლიკაცია და ვებგვერდი იყენებს ქუქი-ფაილებს და მსგავს თვალყურის დევნის ტექნოლოგიებს თქვენი გამოცდილების გასაუმჯობესებლად, თქვენი პრეფერენციების დასამახსოვრებლად, ტრაფიკის ნიმუშების გასაანალიზებლად და პერსონალიზებული კონტენტის მოსაწოდებლად.",
    RU: "Наше приложение и веб-сайт используют файлы cookie и аналогичные технологии отслеживания для улучшения вашего опыта, запоминания ваших предпочтений, анализа трафика и предоставления персонализированного контента.",
  },
  privacySection7Title: {
    EN: "7. Who We Share Your Data With",
    GE: "დაგვიკავშირდით",
    RU: "Свяжитесь с нами",
  },
  privacySection7: {
    EN: "We do not sell your personal data. We share it only in the following circumstances:\n\n7.1 With Restaurants\nWhen you make a reservation, we share with that restaurant only: your first and last name, email address, mobile phone number (for exceptional contact situations only), reservation details (date, time, number of guests), and your visit history and dining preference data relevant specifically to that restaurant.\n\nRestaurants use this data to prepare for your arrival, manage table allocation, and — where you have opted in — send you personalised offers through the App. Restaurants may not use your contact details for independent direct marketing outside the App.\n\n7.2 With Service Providers\nWe work with carefully selected third-party technical providers (such as hosting, analytics, and push notification services) who process data on our behalf under strict contractual obligations.\n\n7.3 Legal Requirements\nWe may disclose your data to law enforcement authorities where required by Georgian law or applicable EU law, or where necessary to protect the rights, safety, or property of Adgili, our users, or others.\n\n7.4 Business Transfers\nIf Adgili undergoes a merger, acquisition, or sale of assets, your personal data may be transferred as part of that transaction. We will notify you beforehand where required by law.",
    GE: "ნებისმიერი კონფიდენციალურობასთან დაკავშირებული კითხვის, შეშფოთების ან მოთხოვნისთვის, გთხოვთ დაუკავშირდეთ ჩვენს მონაცემთა დაცვის ოფიცერს მისამართზე helloadgili@gmail.com. ასევე შეგიძლიათ დაგვიკავშირდეთ აპლიკაციის მხარდაჭერის ფუნქციით ან ფოსტით: Adgili LLC, თბილისი, საქართველო.",
    RU: "По любым вопросам, касающимся конфиденциальности, пожалуйста, свяжитесь с нашим специалистом по защите данных по адресу helloadgili@gmail.com. Вы также можете связаться с нами через функцию поддержки в приложении или по почте: Adgili LLC, Тбилиси, Грузия.",
  },
  privacySection8Title: {
    EN: "8. International Data Transfers",
    GE: "მონაცემთა საერთაშორისო გადაცემა",
    RU: "Международная передача данных",
  },
  privacySection8: {
    EN: "We have not yet finalised the hosting location for our servers. If your personal data is transferred outside of Georgia, we will ensure that appropriate safeguards are in place — such as standard contractual clauses approved by the relevant supervisory authority — to protect your data to at least the same standard as required under Georgian law and the GDPR. We will update this Policy once our hosting arrangements are confirmed.",
    GE: "ჩვენ ჯერ არ განგვისაზღვრავს ჩვენი სერვერების მასპინძლობის ადგილმდებარეობა. თუ თქვენი პერსონალური მონაცემები გადაეცემა საქართველოს გარეთ, ჩვენ უზრუნველვყოფთ შესაბამისი დაცვის ზომების არსებობას.",
    RU: "Мы ещё не определились с местом размещения наших серверов. Если ваши персональные данные будут переданы за пределы Грузии, мы обеспечим наличие соответствующих гарантий защиты данных.",
  },
  privacySection9Title: {
    EN: "9. How Long We Keep Your Data",
    GE: "მონაცემთა შენახვის ვადა",
    RU: "Срок хранения данных",
  },
  privacySection9: {
    EN: "We keep your personal data only for as long as is necessary for the purposes described in this Policy, or as required by law.\n\n• Active account: we retain all account and usage data for as long as your account remains open.\n• After account deletion: we delete all personal data connected to your account, with the exception of your anonymised user ID, hashed email address, and hashed password. These minimal identifiers are retained to prevent re-registration abuse and to satisfy our record-keeping obligations. They are not used for any other purpose.\n• Legal obligation: where applicable law requires us to retain certain records, we will do so for the required period.",
    GE: "ჩვენ ვინახავთ თქვენს პერსონალურ მონაცემებს მხოლოდ იმ დრომდე, რამდენიც საჭიროა ამ პოლიტიკაში აღწერილი მიზნებისთვის ან კანონით მოთხოვნილი ვადით.",
    RU: "Мы храним ваши персональные данные только столько, сколько необходимо для целей, описанных в настоящей Политике, или как того требует закон.",
  },
  privacySection10Title: {
    EN: "10. Security",
    GE: "უსაფრთხოება",
    RU: "Безопасность",
  },
  privacySection10: {
    EN: "We take the security of your data seriously. The measures we have in place include:\n\n• All passwords are stored exclusively in hashed (bcrypt) form — we never store or have access to your actual password\n• All data transmission between the App and our servers is encrypted using TLS\n• Access to personal data is restricted to personnel who have a legitimate operational need\n• We maintain procedures to detect and respond to personal data breaches, and will notify you and the relevant supervisory authority where required by law\n\nNo method of electronic storage or transmission is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.",
    GE: "ჩვენ სერიოზულად ვეკიდებით თქვენი მონაცემების უსაფრთხოებას. ჩვენ მიერ გატარებული ზომები მოიცავს: ყველა პაროლი ინახება მხოლოდ ჰეშირებული ფორმით, ყველა მონაცემთა გადაცემა დაშიფრულია TLS-ის გამოყენებით.",
    RU: "Мы серьёзно относимся к безопасности ваших данных. Принятые меры включают: все пароли хранятся исключительно в хешированном виде, все передачи данных зашифрованы с использованием TLS.",
  },
  privacySection11Title: {
    EN: "11. Push Notifications",
    GE: "პუშ შეტყობინებები",
    RU: "Push-уведомления",
  },
  privacySection11: {
    EN: "We use push notifications for two purposes:\n\n11.1 Reservation Notifications (Transactional)\nWe will send you push notifications relating to your reservations — such as confirmation, reminders, and any changes or cancellations. These are necessary to fulfil your reservation contract and cannot be turned off while your account is active, except by disabling push notifications entirely in your device settings.\n\n11.2 Promotional Notifications (Marketing)\nWith your consent, we and participating restaurants may send you personalised push notifications about special offers, discounts, and promotions relevant to your dining preferences and visit history. You may withdraw this consent at any time in the App's notification settings without affecting the transactional notifications described above.",
    GE: "ჩვენ ვიყენებთ პუშ შეტყობინებებს ორი მიზნით: სარეზერვაციო შეტყობინებები და სარეკლამო შეტყობინებები თქვენი თანხმობით.",
    RU: "Мы используем push-уведомления для двух целей: уведомления о бронировании и рекламные уведомления с вашего согласия.",
  },
  privacySection12Title: {
    EN: "12. Your Rights",
    GE: "თქვენი უფლებები",
    RU: "Ваши права",
  },
  privacySection12: {
    EN: "Under Georgian data protection law and, to the extent applicable, the GDPR, you have the following rights with respect to your personal data:\n\n• Right of access — to request a copy of the personal data we hold about you.\n• Right to rectification — to ask us to correct inaccurate or incomplete data.\n• Right to erasure — to request that we delete your personal data, subject to our legal retention obligations.\n• Right to restriction of processing — to ask us to pause processing of your data in certain circumstances.\n• Right to data portability — to receive your data in a structured, machine-readable format where processing is based on consent or contract.\n• Right to object — to object to processing based on legitimate interests.\n• Right to withdraw consent — where processing is based on your consent, you may withdraw it at any time without affecting the lawfulness of prior processing.\n\nTo exercise any of these rights, please contact us at helloadgili@gmail.com. We will respond within 30 days. We may ask you to verify your identity before acting on your request.\n\nYou also have the right to lodge a complaint with the Personal Data Protection Service of Georgia (www.pdp.ge), or with the supervisory authority of an EU member state if you are based in the EU.",
    GE: "თქვენ გაქვთ უფლება ნებისმიერ დროს მიიღოთ წვდომა, შეასწოროთ ან წაშალოთ თქვენი პირადი ინფორმაცია. შეგიძლიათ მოითხოვოთ ყველა მონაცემის ასლი, რომელსაც თქვენ შესახებ ვფლობთ პორტატულ ფორმატში. თქვენ გაქვთ უფლება შეზღუდოთ ან გააპროტესტოთ თქვენი მონაცემების გარკვეული დამუშავება.",
    RU: "Вы имеете право получить доступ, исправить или удалить вашу личную информацию в любое время. Вы можете запросить копию всех данных, которые мы храним о вас, в портативном формате. Вы имеете право ограничить или возразить против определенной обработки ваших данных.",
  },
  privacySection13Title: {
    EN: "13. Cookies",
    GE: "ქუქი-ფაილები",
    RU: "Файлы cookie",
  },
  privacySection13: {
    EN: "Our App uses session and persistent cookies and similar technologies to remember your preferences, maintain your login session, and understand how you use the App. You may control cookie behaviour through your browser or device settings; however, disabling certain cookies may affect App functionality.",
    GE: "ჩვენი აპლიკაცია იყენებს ქუქი-ფაილებს თქვენი პრეფერენციების დასამახსოვრებლად და სესიის შესანარჩუნებლად.",
    RU: "Наше приложение использует файлы cookie для запоминания ваших предпочтений и поддержания сеанса входа.",
  },
  privacySection14Title: {
    EN: "14. Changes to This Policy",
    GE: "პოლიტიკის ცვლილებები",
    RU: "Изменения в политике",
  },
  privacySection14: {
    EN: "We may update this Policy from time to time to reflect changes in our App, our data practices, or applicable law. When we make significant changes, we will notify you via a push notification or an in-App message. The date at the top of this Policy always reflects when it was last revised. Continued use of the App after a change constitutes acceptance of the updated Policy.",
    GE: "ჩვენ შეიძლება პერიოდულად განვაახლოთ ეს პოლიტიკა. მნიშვნელოვანი ცვლილებების შემთხვევაში გაცნობებთ პუშ შეტყობინებით ან აპლიკაციაში.",
    RU: "Мы можем периодически обновлять настоящую Политику. О существенных изменениях мы уведомим вас через push-уведомление или сообщение в приложении.",
  },
  privacySection15Title: {
    EN: "15. Contact Us",
    GE: "დაგვიკავშირდით",
    RU: "Свяжитесь с нами",
  },
  privacySection15: {
    EN: "If you have any questions about this Policy, wish to exercise your rights, or want to raise a concern, please contact us:\n\nAdgili\nEmail: helloadgili@gmail.com\nAddress: Batumi, Adjara, Georgia\n\nWe will do our best to address your concern promptly. If you are not satisfied with our response, you have the right to escalate to the Personal Data Protection Service of Georgia (www.pdp.ge).\n\nAdgili — Your spot, reserved.",
    GE: "ნებისმიერი კონფიდენციალურობასთან დაკავშირებული კითხვის, შეშფოთების ან მოთხოვნისთვის, გთხოვთ დაუკავშირდეთ ჩვენს მონაცემთა დაცვის ოფიცერს მისამართზე helloadgili@gmail.com. ასევე შეგიძლიათ დაგვიკავშირდეთ აპლიკაციის მხარდაჭერის ფუნქციით ან ფოსტით: Adgili LLC, თბილისი, საქართველო.",
    RU: "По любым вопросам, касающимся конфиденциальности, пожалуйста, свяжитесь с нашим специалистом по защите данных по адресу helloadgili@gmail.com. Вы также можете связаться с нами через функцию поддержки в приложении или по почте: Adgili LLC, Тбилиси, Грузия.",
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("EN")

  const t = (key: string): string => {
    const translation = translations[key]
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`)
      return key
    }
    return translation[language]
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
