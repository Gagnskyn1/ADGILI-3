"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

const enIntro =
  'Please read these terms carefully. By tapping "Accept," or by downloading and using the application, you agree to these terms, which are binding on you.'

const enSections = [
  {
    title: "1. Who We Are and What These Terms Govern",
    content:
      "1.1 Adgili is a table booking platform, developed and operated by Adgili — a partnership registered in Georgia. Our registered address is: Batumi, Adjara, Georgia.\n\n1.2 You can contact us:\n• By email: helloadgili@gmail.com\n• Through the contact section within the application\n\n1.3 We grant you a license to use:\n• The Adgili mobile application (\"the App\") and any updates or additions to it;\n• Any documentation we publish in connection with the application.\n\nThis license is provided solely for the purpose of facilitating the discovery and booking of tables at restaurants, cafés, and other dining establishments.",
  },
  {
    title: "2. Other Applicable Terms",
    content:
      "2.1 Privacy Policy: Our Privacy Policy explains how we collect, use, and protect your personal data. Please read this policy carefully together with these terms.\n\n2.2 App Store Terms: Your use of the application may also be governed by the rules and policies of the store (App Store / Play Store) from which you downloaded the application.",
  },
  {
    title: "3. Changes to the Terms",
    content:
      "3.1 We may update these terms from time to time to reflect changes in legislation, best practices, or the introduction of new features.\n\n3.2 We will notify you of significant changes via push notification or an in-app notification.\n\n3.3 If you do not agree with the updated terms, please stop using the application.",
  },
  {
    title: "4. Use of the Application",
    content:
      "4.1 Operating System Requirements: The minimum technical requirements (device type, operating system, memory, etc.) are published at www.adgilze.ge.\n\n4.2 Support and Reporting Issues: If you experience any difficulties or have questions about the application, please contact us at helloadgili@gmail.com or through the application's support section.\n\n4.3 Permitted Use: In exchange for complying with these terms, you may:\n• Download and install the application on your personal device for personal use only;\n• Use any documentation we provide;\n• Receive and install free updates to the application.\n\nTransfer of this license to another person is not permitted — whether for payment or free of charge. If you sell or transfer a device on which the application is installed, please delete it beforehand.\n\n4.4 Application Updates: We may periodically release updates to improve performance, add new features, or address security issues. Failure to use updates may limit or affect your use of the application.\n\n4.5 Technical Data: By using the application, you agree that we collect technical information about your device and software in order to improve the service.",
  },
  {
    title: "5. Relationship With Dining Establishments",
    content:
      "5.1 The application offers features that help you discover restaurants, cafés, and other dining establishments, view their profiles, add them to favorites, view menus and reviews, and book a table.\n\n5.2 We are not a party to your booking. Adgili is solely an intermediary platform. A booking is effective only when you and the establishment agree directly. The relationship between you and the establishment is governed by the establishment's own rules and terms, the provision of which is the establishment's responsibility.\n\n5.3 We are not responsible for information provided by establishments. Menus, allergen information, prices, and other data shown in the application are provided by the establishments themselves. We do not verify their accuracy. Please confirm important details directly with the establishment before your visit.\n\n5.4 We are not responsible for the quality, safety, or conduct of the establishment's service. Any booking or visit, insofar as it relates to the establishment's service, is undertaken at your own personal responsibility.",
  },
  {
    title: "6. QR Codes and In-Establishment Service",
    content:
      "6.1 Check-in QR Code: Upon completion of a booking, the application generates a unique QR code linked to your reservation. Upon arrival at the establishment, the host will scan this code to confirm your booking and assign your table. The scan is recorded in your visit history.\n\n6.2 Digital Menu QR Code: Once seated at the table, a second QR code is available, scanning which opens the restaurant's digital menu and related details. Scanning this code does not generate or transmit any additional personal data about you, other than the fact that a user with an active booking at that table viewed the menu.",
  },
  {
    title: "7. User Reputation System",
    content:
      "Adgili uses a Trust Score system to maintain a fair and reliable booking environment for all users and establishments. Every user starts with a Trust Score of 100 points.\n\n7.1 Point Changes:\n• Cancellation more than 4 hours before the booking: no penalty\n• Cancellation within 4 hours of the booking: −15 points, +1 violation\n• No-show (failing to appear without cancelling): −30 points, +2 violations\n• Successful visit: +3 points\n• Trust Score is capped between 0 and 100\n\n7.2 Trust Levels:\n• 70–100: Normal\n• 40–69: Warning\n• 20–39: Restricted (maximum of 2 active bookings at a time)\n• 0–19: Blocked (unable to create a new booking)\n\n7.3 Violation-Based Restrictions (based only on violations recorded within the last 180 days):\n• 3 violations: Warning\n• 5 violations: 7-day block\n• 7 violations: 30-day block\n• 10 violations: 60-day block\n\n7.4 Reputation Recovery: Users can recover their reputation through successful visits, an automatic amnesty period, or an approved request submitted to support. In confirmed force majeure situations — such as a medical emergency, transportation delay, an error on the part of the establishment, or a system malfunction — restaurants or administrators may waive the penalty and restore the Trust Score.",
  },
  {
    title: "8. Your Obligations",
    content:
      "You agree that you will:\n• Use the application only for lawful purposes and in accordance with these terms;\n• Make every reasonable effort to attend all bookings you create, including in accordance with the specified number of guests;\n• Give us reasonable advance notice if you need to cancel or change a booking;\n• Not use the application in a way that harms other users, establishments, or Adgili;\n• Not attempt to circumvent, manipulate, or abuse the Trust Score system or any other features of the application.",
  },
  {
    title: "9. License Restrictions",
    content:
      "You agree that you will not:\n• Transfer the application to another person or company without our permission;\n• Copy or modify the application or its documentation beyond what is permitted by these terms;\n• Attempt to \"open\" the application from the inside — that is, to inspect its code, disassemble it, or build your own product based on it;\n• Use the application to generate income or for other commercial purposes without our permission.",
  },
  {
    title: "10. Restrictions on Permitted Use",
    content:
      "The following are prohibited:\n• Using the application for unlawful or fraudulent purposes;\n• Introducing viruses, malware, or other harmful code into the application or our systems;\n• Infringing our intellectual property rights or those of third parties;\n• Overloading, disabling, or interfering with other users' access to our systems;\n• Distributing unsolicited advertising material, spam, or offensive content;\n• Attempting to access our systems without authorization or to extract data.",
  },
  {
    title: "11. Intellectual Property Rights",
    content:
      "All intellectual property rights in the Adgili application, its content, logo, and all related materials, worldwide, belong to Adgili or its licensors. These terms grant you only a limited, non-exclusive license to use the application as described herein. You have no other intellectual property rights.",
  },
  {
    title: "12. Liability",
    content:
      "12.1 We are responsible for foreseeable damage caused by our actions. If we breach these terms or fail to act with reasonable care, we accept responsibility for any resulting foreseeable damage. We are not responsible for damage that was not reasonably foreseeable.\n\n12.2 We are not responsible for establishments' service. Adgili is not responsible for the quality, accuracy, safety, or legality of the service provided by any establishment (restaurant, café, etc.). Any booking or visit related to an establishment is undertaken at your own personal responsibility.\n\n12.3 We are not responsible for events beyond our control. We are not liable for any failure or delay in the delivery of the application caused by circumstances beyond our reasonable control.\n\n12.4 Third-Party Links. The application may contain links to third-party websites or services. We are not responsible for their content, privacy policies, or practices.",
  },
  {
    title: "13. Suspension and Termination of Account",
    content:
      "13.1 We have the right to suspend or terminate your access to the application if:\n• You seriously or repeatedly breach these terms;\n• We have reasonable suspicion of fraud or abuse;\n• Your account is subject to a long-term block under the Trust Score system.\n\nWhere a breach is remediable, we will give you a reasonable opportunity to remedy it before taking action.\n\n13.2 Upon deletion of an account — whether initiated by you or by us — all personal data associated with the account will be permanently deleted, with the exception of an anonymized user ID, an encrypted email address, and an encrypted password. These minimal identifiers are retained solely to prevent abuse of re-registration and are not used for any other purpose.",
  },
  {
    title: "14. Other Important Terms",
    content:
      "14.1 Transfer of Rights: We may transfer our rights and obligations under these terms to another organization. We will notify you of this in writing in advance.\n\n14.2 Your Rights Are Personal: You may not transfer any rights or obligations arising from these terms to another person without our prior written consent.\n\n14.3 Severability: If any court or authority finds any part of these terms to be unlawful or unenforceable, the remaining provisions will continue in full force and effect.\n\n14.4 No Waiver: If we do not immediately enforce these terms, this does not mean that we waive the right to do so in the future.\n\n14.5 Governing Law: These terms are governed by the laws of Georgia. Any dispute is subject to the jurisdiction of the courts of Georgia. Where applicable, the provisions of the EU GDPR also apply.",
  },
  {
    title: "15. Contact Us",
    content:
      "For any questions, to exercise your rights, or to submit a complaint, please contact us:\n\nAdgili\nEmail: helloadgili@gmail.com\nAddress: Batumi, Adjara, Georgia",
  },
]

const enOutro = "Adgili — your place, reserved."

const geIntro =
  "გთხოვთ, ყურადღებით წაიკითხოთ წინამდებარე პირობები. მიღება ღილაკზე დაჭერით, ან აპლიკაციის გადმოწერით და გამოყენებით, თქვენ ეთანხმებით ამ პირობებს, რომლებიც სავალდებულოა თქვენთვის."

const geSections = [
  {
    title: "1. ვინ ვართ ჩვენ და რას არეგულირებს ეს პირობები",
    content:
      "1.1 Adgili არის მაგიდის დაჯავშნის პლატფორმა, შემუშავებული და განკარგული Adgili-ს მიერ — საქართველოში რეგისტრირებული პარტნიორობა. ჩვენი რეგისტრირებული მისამართია: ბათუმი, აჭარა, საქართველო.\n\n1.2 ჩვენთან დაკავშირება შეგიძლიათ:\n• ელ. ფოსტით: helloadgili@gmail.com\n• აპლიკაციაში არსებული საკონტაქტო განყოფილების მეშვეობით\n\n1.3 ჩვენ გაძლევთ ლიცენზიას, გამოიყენოთ:\n• Adgili-ს მობილური აპლიკაცია („აპი\") და ნებისმიერი მისი განახლება ან დამატება;\n• ნებისმიერი დოკუმენტაცია, რომელსაც ჩვენ ვაქვეყნებთ აპლიკაციასთან დაკავშირებით.\n\nეს ლიცენზია გათვალისწინებულია მხოლოდ რესტორნებში, კაფეებსა და სხვა სასადილო ობიექტებში მაგიდის აღმოჩენისა და დაჯავშნის ხელშეწყობისთვის.",
  },
  {
    title: "2. სხვა მოქმედი პირობები",
    content:
      "2.1 კონფიდენციალურობის პოლიტიკა: ჩვენი კონფიდენციალურობის პოლიტიკა განმარტავს, თუ როგორ ვაგროვებთ, ვიყენებთ და ვიცავთ თქვენს პერსონალურ მონაცემებს. გთხოვთ, ყურადღებით წაიკითხოთ ეს პოლიტიკა წინამდებარე პირობებთან ერთად.\n\n2.2 App Store-ის პირობები: თქვენი აპლიკაციის გამოყენება ასევე შეიძლება რეგულირდებოდეს იმ მაღაზიის (App Store / Play Store) წესებითა და პოლიტიკით, საიდანაც გადმოწერეთ აპლიკაცია.",
  },
  {
    title: "3. პირობებში ცვლილებები",
    content:
      "3.1 ჩვენ შეიძლება დროდადრო განვაახლოთ ეს პირობები კანონმდებლობის ცვლილებების, საუკეთესო პრაქტიკის ან ახალი ფუნქციების შემოღების გათვალისწინებით.\n\n3.2 მნიშვნელოვანი ცვლილებების შესახებ შეგატყობინებთ Push-შეტყობინების ან აპლიკაციის შიდა შეტყობინების მეშვეობით.\n\n3.3 თუ განახლებულ პირობებს არ ეთანხმებით, გთხოვთ შეწყვიტოთ აპლიკაციის გამოყენება.",
  },
  {
    title: "4. აპლიკაციის გამოყენება",
    content:
      "4.1 ოპერაციული სისტემის მოთხოვნები: მინიმალური ტექნიკური მოთხოვნები (მოწყობილობის ტიპი, ოპერაციული სისტემა, მეხსიერება და სხვ.) გამოქვეყნებულია www.adgilze.ge-ზე.\n\n4.2 მხარდაჭერა და პრობლემების შეტყობინება: თუ რაიმე სირთულე გაქვთ ან გაქვთ კითხვები აპლიკაციასთან დაკავშირებით, გთხოვთ დაგვიკავშირდეთ helloadgili@gmail.com-ზე ან აპლიკაციის მხარდაჭერის განყოფილების მეშვეობით.\n\n4.3 დაშვებული გამოყენება: ამ პირობების დაცვის სანაცვლოდ, თქვენ შეგიძლიათ:\n• გადმოწეროთ და დააინსტალიროთ აპლიკაცია თქვენს პირად მოწყობილობაზე მხოლოდ პირადი გამოყენებისთვის;\n• გამოიყენოთ ჩვენ მიერ მოწოდებული ნებისმიერი დოკუმენტაცია;\n• მიიღოთ და დააინსტალიროთ აპლიკაციის უფასო განახლებები.\n\nამ ლიცენზიის სხვა პირზე გადაცემა დაუშვებელია — გადახდით თუ უფასოდ. თუ ყიდით ან გადასცემთ მოწყობილობას, რომელზეც აპლიკაცია არის დაინსტალირებული, წინასწარ წაშალეთ იგი.\n\n4.4 აპლიკაციის განახლებები: ჩვენ შეიძლება პერიოდულად გამოვუშვათ განახლებები შესრულების გასაუმჯობესებლად, ახალი ფუნქციების დასამატებლად ან უსაფრთხოების საკითხების მოსაგვარებლად. განახლებების გამოუყენებლობამ შეიძლება შეზღუდოს ან გავლენა მოახდინოს აპლიკაციის გამოყენებაზე.\n\n4.5 ტექნიკური მონაცემები: აპლიკაციის გამოყენებით, თქვენ ეთანხმებით, რომ ვაგროვებთ ტექნიკურ ინფორმაციას თქვენი მოწყობილობისა და პროგრამული უზრუნველყოფის შესახებ სერვისის გასაუმჯობესებლად.",
  },
  {
    title: "5. ურთიერთობა სასადილო ობიექტებთან",
    content:
      "5.1 აპლიკაცია გთავაზობთ ფუნქციებს, რომლებიც დაგეხმარებათ რესტორნების, კაფეებისა და სხვა სასადილო ობიექტების აღმოჩენაში, მათი პროფილების დათვალიერებაში, რჩეულებში დამატებაში, მენიუებისა და მიმოხილვების ნახვაში და მაგიდის დაჯავშნაში.\n\n5.2 ჩვენ არ ვართ ნაწილი თქვენი დაჯავშნისა. Adgili მხოლოდ შუამავალ პლატფორმას წარმოადგენს. დაჯავშნა ძალაშია მხოლოდ მაშინ, როდესაც თქვენ და ობიექტი პირდაპირ შეთანხმდებით. თქვენსა და ობიექტს შორის ურთიერთობა რეგულირდება ობიექტის საკუთარი წესებითა და პირობებით, რომელთა მოწოდება ობიექტის პასუხისმგებლობაა.\n\n5.3 ჩვენ არ ვართ პასუხისმგებელი ობიექტების მიერ მოწოდებულ ინფორმაციაზე. მენიუები, ალერგენების შესახებ ინფორმაცია, ფასები და სხვა მონაცემები, რომლებიც ნაჩვენებია აპლიკაციაში, მოწოდებულია თავად ობიექტების მიერ. ჩვენ არ ვამოწმებთ მათ სიზუსტეს. ვიზიტამდე მნიშვნელოვანი დეტალები გთხოვთ პირდაპირ ობიექტთან გადაამოწმოთ.\n\n5.4 ჩვენ არ ვართ პასუხისმგებელი ობიექტის სერვისის ხარისხზე, უსაფრთხოებაზე ან ქცევაზე. ნებისმიერი დაჯავშნა ან ვიზიტი, ობიექტის სერვისთან დაკავშირებულ ნაწილში, ხორციელდება თქვენი პირადი პასუხისმგებლობით.",
  },
  {
    title: "6. QR კოდები და მომსახურება ობიექტში",
    content:
      "6.1 შესვლის QR კოდი: დაჯავშნის დასრულებისთანავე, აპლიკაცია აგენერირებს უნიკალურ QR კოდს, რომელიც დაკავშირებულია თქვენს ჯავშანთან. ობიექტში მისვლისას, ჰოსტესი ასკანირებს ამ კოდს თქვენი ჯავშანის დასადასტურებლად და მაგიდის მისამაგრებლად. სკანირება ფიქსირდება თქვენი ვიზიტების ისტორიაში.\n\n6.2 ციფრული მენიუს QR კოდი: მაგიდაზე დაჯდომის შემდეგ, ხელმისაწვდომია მეორე QR კოდი, რომლის სკანირებაც ხსნის რესტორნის ციფრულ მენიუს და შესაბამის დეტალებს. ამ კოდის სკანირება არ გენერირებს და არ გადასცემს თქვენ შესახებ დამატებით პერსონალურ მონაცემებს, გარდა იმისა, რომ ამ მაგიდაზე აქტიური დაჯავშნის მქონე მომხმარებელმა მენიუ ნახა.",
  },
  {
    title: "7. მომხმარებლის რეპუტაციის სისტემა",
    content:
      "Adgili იყენებს Trust Score-ის სისტემას, რათა ყველა მომხმარებლისა და ობიექტისთვის სამართლიანი და საიმედო დაჯავშნის გარემო შეინარჩუნოს. ყველა მომხმარებელი იწყებს 100 ქულიანი Trust Score-ით.\n\n7.1 ქულების ცვლილება:\n• გაუქმება დაჯავშნამდე 4 საათით ადრე: სასჯელის გარეშე\n• გაუქმება დაჯავშნამდე დარჩენილი 4 საათის ფარგლებში: −15 ქულა, +1 დარღვევა\n• გამოუცხადებლობა (გაუქმების გარეშე გამოუცხადებლობა): −30 ქულა, +2 დარღვევა\n• წარმატებული ვიზიტი: +3 ქულა\n• Trust Score შეზღუდულია 0-დან 100-მდე\n\n7.2 ნდობის დონეები:\n• 70–100: ნორმალური\n• 40–69: გაფრთხილება\n• 20–39: შეზღუდული (ერთდროულად მაქსიმუმ 2 აქტიური დაჯავშნა)\n• 0–19: დაბლოკილი (ახალი ჯავშნის შექმნა შეუძლებელია)\n\n7.3 დარღვევებზე დაფუძნებული შეზღუდვები (მხოლოდ ბოლო 180 დღის განმავლობაში დაფიქსირებული დარღვევები):\n• 3 დარღვევა: გაფრთხილება\n• 5 დარღვევა: 7-დღიანი ბლოკი\n• 7 დარღვევა: 30-დღიანი ბლოკი\n• 10 დარღვევა: 60-დღიანი ბლოკი\n\n7.4 რეპუტაციის აღდგენა: მომხმარებლებს შეუძლიათ რეპუტაციის აღდგენა წარმატებული ვიზიტების, ავტომატური ამნისტიის პერიოდის ან მხარდაჭერის სამსახურში დამტკიცებული განცხადების მეშვეობით. დადასტურებული ფორს-მაჟორის სიტუაციებში — სამედიცინო გადაუდებელი შემთხვევა, ტრანსპორტის შეფერხება, ობიექტის მხრიდან შეცდომა ან სისტემური გაუმართაობა — რესტორნებს ან ადმინისტრატორებს შეუძლიათ სასჯელის გაუქმება და Trust Score-ის აღდგენა.",
  },
  {
    title: "8. თქვენი ვალდებულებები",
    content:
      "თქვენ ეთანხმებით, რომ:\n• გამოიყენებთ აპლიკაციას მხოლოდ კანონიერი მიზნებისთვის და წინამდებარე პირობების შესაბამისად;\n• გამოიჩენთ ყველა გონივრულ ძალისხმევას, დაესწროთ ყველა შექმნილ დაჯავშნას, მათ შორის — მიუთითებული სტუმრების რაოდენობის შესაბამისად;\n• გონივრულ ვადაში წინასწარ გაგვაფრთხილებთ, თუ გჭირდებათ დაჯავშნის გაუქმება ან შეცვლა;\n• არ გამოიყენებთ აპლიკაციას ისე, რომ ზიანი მიაყენოთ სხვა მომხმარებლებს, ობიექტებს ან Adgili-ს;\n• არ შეეცდებით Trust Score-ის სისტემის ან აპლიკაციის სხვა ფუნქციების გვერდის ავლას, მანიპულირებას ან ბოროტად გამოყენებას.",
  },
  {
    title: "9. ლიცენზიის შეზღუდვები",
    content:
      "ეთანხმებით, რომ:\n• არ გადასცემთ აპლიკაციას სხვა ადამიანს ან კომპანიას ჩვენი ნებართვის გარეშე;\n• არ დააკოპირებთ და არ შეცვლით აპლიკაციას ან მის დოკუმენტაციას იმაზე მეტად, ვიდრე ეს პირობებით არის დაშვებული;\n• არ შეეცდებით „გახსნათ\" აპლიკაცია შიგნიდან — ანუ მის კოდში ჩახედვას, დაშლას ან მის საფუძველზე საკუთარი პროდუქტის შექმნას;\n• არ გამოიყენებთ აპლიკაციას ფულის საშოვნელად ან სხვა კომერციული მიზნებისთვის ჩვენი ნებართვის გარეშე.",
  },
  {
    title: "10. დაშვებული გამოყენების შეზღუდვები",
    content:
      "დაუშვებელია:\n• აპლიკაციის გამოყენება კანონსაწინააღმდეგო ან თაღლითური მიზნებისთვის;\n• ვირუსების, მავნე პროგრამების ან სხვა საზიანო კოდის შეყვანა აპლიკაციაში ან ჩვენს სისტემებში;\n• ჩვენი ან მესამე მხარის ინტელექტუალური საკუთრების უფლებების დარღვევა;\n• ჩვენი სისტემების გადატვირთვა, გამოთიშვა ან სხვა მომხმარებლების წვდომაში ჩარევა;\n• არასასურველი სარეკლამო მასალის, სპამის ან შეურაცხმყოფელი კონტენტის გავრცელება;\n• ავტორიზაციის გარეშე ჩვენს სისტემებზე წვდომის მცდელობა ან მონაცემების ამოღება.",
  },
  {
    title: "11. ინტელექტუალური საკუთრების უფლებები",
    content:
      "Adgili-ს აპლიკაციის, კონტენტის, ლოგოსა და ყველა დაკავშირებული მასალის ყველა ინტელექტუალური საკუთრების უფლება მთელ მსოფლიოში ეკუთვნის Adgili-ს ან მის ლიცენზიარებს. წინამდებარე პირობები გაძლევთ მხოლოდ შეზღუდულ, არაექსკლუზიურ ლიცენზიას, გამოიყენოთ აპლიკაცია აქ აღწერილი წესით. სხვა ინტელექტუალური საკუთრების უფლება თქვენ არ გაქვთ.",
  },
  {
    title: "12. პასუხისმგებლობა",
    content:
      "12.1 ჩვენ ვართ პასუხისმგებელი წინასწარ შესაძლებელ ზიანზე, რომელიც ჩვენი მოქმედებით არის გამოწვეული. თუ ჩვენ ვარღვევთ ამ პირობებს ან სათანადო გულისხმიერებით არ ვმოქმედებთ, ვაღიარებთ პასუხისმგებლობას ამის შედეგად წარმოქმნილ წინასწარ შესაძლებელ ზიანზე. ჩვენ არ ვართ პასუხისმგებელი ისეთ ზიანზე, რომელიც წინასწარ მოსალოდნელი არ იყო.\n\n12.2 ჩვენ არ ვართ პასუხისმგებელი ობიექტების სერვისზე. Adgili არ არის პასუხისმგებელი ნებისმიერი ობიექტის (რესტორნის, კაფეს და სხვ.) სერვისის ხარისხზე, სიზუსტეზე, უსაფრთხოებაზე ან კანონიერებაზე. ობიექტთან დაკავშირებულ ნებისმიერ დაჯავშნას ან ვიზიტს თქვენ ახორციელებთ თქვენი პირადი პასუხისმგებლობით.\n\n12.3 ჩვენ არ ვართ პასუხისმგებელი ჩვენი კონტროლის მიღმა მოვლენებზე. ჩვენ არ ვაგებთ პასუხს აპლიკაციის მიწოდებაში ნებისმიერი ხარვეზის ან დაგვიანების გამო, თუ ის გამოწვეულია ჩვენი გონივრული კონტროლის მიღმა არსებული გარემოებებით.\n\n12.4 მესამე მხარის ბმულები. აპლიკაცია შეიძლება შეიცავდეს მესამე მხარის ვებსაიტების ან სერვისების ბმულებს. ჩვენ არ ვართ პასუხისმგებელი მათ კონტენტზე, კონფიდენციალურობის პოლიტიკაზე ან პრაქტიკაზე.",
  },
  {
    title: "13. ანგარიშის შეჩერება და შეწყვეტა",
    content:
      "13.1 ჩვენ გვაქვს უფლება შევაჩეროთ ან შევწყვიტოთ თქვენი წვდომა აპლიკაციაზე, თუ:\n• თქვენ სერიოზულად ან განმეორებით არღვევთ ამ პირობებს;\n• გვაქვს გონივრული ეჭვი თაღლითობის ან ბოროტგამოყენების შესახებ;\n• თქვენი ანგარიში Trust Score-ის სისტემის მიხედვით გრძელვადიანი ბლოკის ქვეშ იმყოფება.\n\nსადაც დარღვევა გამოსასწორებელია, ჩვენ გაგცემთ გონივრულ შესაძლებლობას ამის გასაკეთებლად ზომების მიღებამდე.\n\n13.2 ანგარიშის წაშლისას — თქვენ მიერ ან ჩვენ მიერ ინიცირებული — ანგარიშთან დაკავშირებული ყველა პერსონალური მონაცემი სამუდამოდ წაიშლება, გარდა ანონიმიზებული მომხმარებლის ID-ის, დაშიფრული ელ. ფოსტის მისამართისა და დაშიფრული პაროლისა. ეს მინიმალური მაიდენტიფიცირებლები ინახება მხოლოდ ხელახალი რეგისტრაციის ბოროტგამოყენების თავიდან ასაცილებლად და სხვა მიზნებისთვის არ გამოიყენება.",
  },
  {
    title: "14. სხვა მნიშვნელოვანი პირობები",
    content:
      "14.1 უფლებების გადაცემა: ჩვენ შეიძლება გადავცეთ ამ პირობებიდან გამომდინარე ჩვენი უფლებები და ვალდებულებები სხვა ორგანიზაციას. ამის შესახებ წინასწარ შეგატყობინებთ წერილობით.\n\n14.2 თქვენი უფლებები პირადია: თქვენ ვერ გადასცემთ ამ პირობებიდან გამომდინარე უფლებებს ან ვალდებულებებს სხვა პირს ჩვენი წინასწარი წერილობითი თანხმობის გარეშე.\n\n14.3 გამიჯვნა: თუ რომელიმე სასამართლო ან ორგანო ამ პირობების რომელიმე ნაწილს უკანონოდ ან აღუსრულებლად ცნობს, დანარჩენი დებულებები სრული ძალით განაგრძობს მოქმედებას.\n\n14.4 უფლებაზე უარის თქმის არარსებობა: თუ ჩვენ დაუყოვნებლივ არ ვახორციელებთ ამ პირობებს, ეს არ ნიშნავს, რომ ჩვენ უარვყოფთ ამის გაკეთების უფლებას მომავალში.\n\n14.5 მოქმედი კანონმდებლობა: ამ პირობებზე ვრცელდება საქართველოს კანონმდებლობა. ნებისმიერი დავა ექვემდებარება საქართველოს სასამართლოების იურისდიქციას. სადაც გამოყენებადია, ასევე მოქმედებს ევროკავშირის GDPR-ის დებულებები.",
  },
  {
    title: "15. დაგვიკავშირდით",
    content:
      "ნებისმიერი კითხვის შემთხვევაში, თქვენი უფლებების განსახორციელებლად ან პრეტენზიის წარსადგენად, გთხოვთ დაგვიკავშირდეთ:\n\nAdgili\nელ. ფოსტა: helloadgili@gmail.com\nმისამართი: ბათუმი, აჭარა, საქართველო",
  },
]

const geOutro = "Adgili — შენი ადგილი, დაჯავშნილია."

const ruIntro =
  "Пожалуйста, внимательно прочитайте настоящие условия. Нажимая кнопку «Принять» либо загружая и используя приложение, вы соглашаетесь с данными условиями, которые являются обязательными для вас."

const ruSections = [
  {
    title: "1. Кто мы и что регулируют данные условия",
    content:
      "1.1 Adgili — это платформа для бронирования столиков, разработанная и управляемая компанией Adgili — партнёрством, зарегистрированным в Грузии. Наш юридический адрес: Батуми, Аджария, Грузия.\n\n1.2 Вы можете связаться с нами:\n• По электронной почте: helloadgili@gmail.com\n• Через раздел контактов в приложении\n\n1.3 Мы предоставляем вам лицензию на использование:\n• Мобильного приложения Adgili («Приложение») и любых его обновлений или дополнений;\n• Любой документации, публикуемой нами в связи с приложением.\n\nДанная лицензия предоставляется исключительно для облегчения поиска и бронирования столиков в ресторанах, кафе и других заведениях общественного питания.",
  },
  {
    title: "2. Иные применимые условия",
    content:
      "2.1 Политика конфиденциальности: наша Политика конфиденциальности разъясняет, как мы собираем, используем и защищаем ваши персональные данные. Пожалуйста, внимательно ознакомьтесь с этой политикой вместе с настоящими условиями.\n\n2.2 Условия магазинов приложений: использование вами приложения также может регулироваться правилами и политиками того магазина (App Store / Play Store), из которого вы загрузили приложение.",
  },
  {
    title: "3. Изменения условий",
    content:
      "3.1 Мы можем время от времени обновлять данные условия с учётом изменений законодательства, лучших практик или внедрения новых функций.\n\n3.2 О существенных изменениях мы уведомим вас посредством push-уведомления или внутреннего уведомления в приложении.\n\n3.3 Если вы не согласны с обновлёнными условиями, пожалуйста, прекратите использование приложения.",
  },
  {
    title: "4. Использование приложения",
    content:
      "4.1 Требования к операционной системе: минимальные технические требования (тип устройства, операционная система, объём памяти и т. д.) опубликованы на сайте www.adgilze.ge.\n\n4.2 Поддержка и сообщение о проблемах: если у вас возникли трудности или вопросы, связанные с приложением, пожалуйста, свяжитесь с нами по адресу helloadgili@gmail.com или через раздел поддержки в приложении.\n\n4.3 Разрешённое использование: в обмен на соблюдение данных условий вы можете:\n• Загрузить и установить приложение на своё личное устройство исключительно для личного использования;\n• Использовать любую предоставленную нами документацию;\n• Получать и устанавливать бесплатные обновления приложения.\n\nПередача данной лицензии другому лицу не допускается — ни платно, ни бесплатно. Если вы продаёте или передаёте устройство, на котором установлено приложение, пожалуйста, предварительно удалите его.\n\n4.4 Обновления приложения: мы можем периодически выпускать обновления для улучшения производительности, добавления новых функций или устранения проблем безопасности. Отказ от использования обновлений может ограничить использование приложения или повлиять на него.\n\n4.5 Технические данные: используя приложение, вы соглашаетесь с тем, что мы собираем техническую информацию о вашем устройстве и программном обеспечении в целях улучшения сервиса.",
  },
  {
    title: "5. Взаимоотношения с заведениями общественного питания",
    content:
      "5.1 Приложение предлагает функции, которые помогают вам находить рестораны, кафе и другие заведения общественного питания, просматривать их профили, добавлять в избранное, просматривать меню и отзывы, а также бронировать столики.\n\n5.2 Мы не являемся стороной вашего бронирования. Adgili выступает исключительно в качестве посреднической платформы. Бронирование вступает в силу только тогда, когда вы и заведение достигаете прямой договорённости. Отношения между вами и заведением регулируются собственными правилами и условиями заведения, предоставление которых является обязанностью самого заведения.\n\n5.3 Мы не несём ответственности за информацию, предоставленную заведениями. Меню, информация об аллергенах, цены и иные данные, отображаемые в приложении, предоставляются самими заведениями. Мы не проверяем их точность. Пожалуйста, уточняйте важные детали непосредственно у заведения перед визитом.\n\n5.4 Мы не несём ответственности за качество, безопасность или поведение заведения при оказании услуг. Любое бронирование или визит, связанные с обслуживанием в заведении, осуществляются под вашу личную ответственность.",
  },
  {
    title: "6. QR-коды и обслуживание в заведении",
    content:
      "6.1 QR-код для входа: сразу после завершения бронирования приложение генерирует уникальный QR-код, привязанный к вашему бронированию. По прибытии в заведение хостес сканирует этот код для подтверждения вашего бронирования и закрепления столика. Сканирование фиксируется в истории ваших визитов.\n\n6.2 QR-код цифрового меню: после того как вы сели за столик, становится доступен второй QR-код, при сканировании которого открывается цифровое меню ресторана и соответствующие сведения. Сканирование этого кода не генерирует и не передаёт дополнительные персональные данные о вас, за исключением того факта, что пользователь с активным бронированием за этим столиком просмотрел меню.",
  },
  {
    title: "7. Система репутации пользователя",
    content:
      "Adgili использует систему Trust Score («рейтинг доверия») для поддержания справедливой и надёжной среды бронирования для всех пользователей и заведений. Каждый пользователь начинает со 100 баллами Trust Score.\n\n7.1 Изменение баллов:\n• Отмена более чем за 4 часа до бронирования: без штрафа\n• Отмена в течение 4 часов до бронирования: −15 баллов, +1 нарушение\n• Неявка (неявка без отмены): −30 баллов, +2 нарушения\n• Успешный визит: +3 балла\n• Trust Score ограничен диапазоном от 0 до 100\n\n7.2 Уровни доверия:\n• 70–100: обычный\n• 40–69: предупреждение\n• 20–39: ограниченный (максимум 2 активных бронирования одновременно)\n• 0–19: заблокирован (создание нового бронирования невозможно)\n\n7.3 Ограничения на основе нарушений (учитываются только нарушения, зафиксированные за последние 180 дней):\n• 3 нарушения: предупреждение\n• 5 нарушений: блокировка на 7 дней\n• 7 нарушений: блокировка на 30 дней\n• 10 нарушений: блокировка на 60 дней\n\n7.4 Восстановление репутации: пользователи могут восстановить репутацию посредством успешных визитов, периода автоматической амнистии или одобренного обращения в службу поддержки. В подтверждённых форс-мажорных ситуациях — таких как экстренная медицинская помощь, задержка транспорта, ошибка со стороны заведения или системный сбой — рестораны или администраторы могут отменить штраф и восстановить Trust Score.",
  },
  {
    title: "8. Ваши обязательства",
    content:
      "Вы соглашаетесь с тем, что будете:\n• Использовать приложение исключительно в законных целях и в соответствии с настоящими условиями;\n• Прилагать все разумные усилия для посещения всех созданных вами бронирований, в том числе с учётом указанного количества гостей;\n• Заблаговременно и в разумный срок предупреждать нас, если вам необходимо отменить или изменить бронирование;\n• Не использовать приложение способом, причиняющим вред другим пользователям, заведениям или Adgili;\n• Не пытаться обходить, манипулировать или злоупотреблять системой Trust Score либо иными функциями приложения.",
  },
  {
    title: "9. Ограничения лицензии",
    content:
      "Вы соглашаетесь с тем, что не будете:\n• Передавать приложение другому лицу или компании без нашего разрешения;\n• Копировать или изменять приложение либо его документацию сверх того, что разрешено настоящими условиями;\n• Пытаться «вскрыть» приложение изнутри — то есть исследовать его код, декомпилировать его или создавать на его основе собственный продукт;\n• Использовать приложение для получения дохода или в иных коммерческих целях без нашего разрешения.",
  },
  {
    title: "10. Ограничения допустимого использования",
    content:
      "Запрещается:\n• Использовать приложение в незаконных или мошеннических целях;\n• Внедрять вирусы, вредоносное программное обеспечение или иной вредоносный код в приложение или наши системы;\n• Нарушать наши права интеллектуальной собственности или права третьих лиц;\n• Перегружать, отключать наши системы или препятствовать доступу к ним других пользователей;\n• Распространять нежелательные рекламные материалы, спам или оскорбительный контент;\n• Пытаться получить несанкционированный доступ к нашим системам или извлекать данные.",
  },
  {
    title: "11. Права интеллектуальной собственности",
    content:
      "Все права интеллектуальной собственности на приложение Adgili, его контент, логотип и все связанные материалы во всём мире принадлежат Adgili или его лицензиарам. Настоящие условия предоставляют вам только ограниченную, неисключительную лицензию на использование приложения в порядке, описанном здесь. Иных прав интеллектуальной собственности у вас нет.",
  },
  {
    title: "12. Ответственность",
    content:
      "12.1 Мы несём ответственность за предвидимый ущерб, причинённый нашими действиями. Если мы нарушаем настоящие условия или не проявляем должной осмотрительности, мы признаём ответственность за возникший в результате этого предвидимый ущерб. Мы не несём ответственности за ущерб, который невозможно было разумно предвидеть.\n\n12.2 Мы не несём ответственности за услуги заведений. Adgili не несёт ответственности за качество, точность, безопасность или законность услуг, предоставляемых любым заведением (рестораном, кафе и т. д.). Любое бронирование или визит, связанные с заведением, осуществляются под вашу личную ответственность.\n\n12.3 Мы не несём ответственности за события, находящиеся вне нашего контроля. Мы не несём ответственности за какие-либо сбои или задержки в предоставлении приложения, вызванные обстоятельствами, находящимися вне нашего разумного контроля.\n\n12.4 Ссылки на сторонние ресурсы. Приложение может содержать ссылки на сторонние веб-сайты или сервисы. Мы не несём ответственности за их содержание, политику конфиденциальности или практику.",
  },
  {
    title: "13. Приостановление и прекращение действия аккаунта",
    content:
      "13.1 Мы вправе приостановить или прекратить ваш доступ к приложению, если:\n• Вы серьёзно или неоднократно нарушаете настоящие условия;\n• У нас есть разумные основания подозревать мошенничество или злоупотребление;\n• Ваш аккаунт находится под долгосрочной блокировкой в рамках системы Trust Score.\n\nВ случаях, когда нарушение может быть устранено, мы предоставим вам разумную возможность сделать это до принятия мер.\n\n13.2 При удалении аккаунта — инициированном вами или нами — все персональные данные, связанные с аккаунтом, будут удалены безвозвратно, за исключением анонимизированного идентификатора пользователя, зашифрованного адреса электронной почты и зашифрованного пароля. Эти минимальные идентификаторы сохраняются исключительно для предотвращения злоупотреблений при повторной регистрации и не используются в иных целях.",
  },
  {
    title: "14. Прочие важные условия",
    content:
      "14.1 Передача прав: мы можем передать наши права и обязательства, вытекающие из настоящих условий, другой организации. Мы заранее уведомим вас об этом в письменной форме.\n\n14.2 Ваши права носят личный характер: вы не вправе передавать права или обязательства, вытекающие из настоящих условий, другому лицу без нашего предварительного письменного согласия.\n\n14.3 Делимость условий: если какой-либо суд или орган власти признает какую-либо часть настоящих условий незаконной или не подлежащей исполнению, остальные положения продолжат действовать в полной мере.\n\n14.4 Отсутствие отказа от прав: если мы незамедлительно не применяем настоящие условия, это не означает, что мы отказываемся от права сделать это в будущем.\n\n14.5 Применимое право: настоящие условия регулируются законодательством Грузии. Любой спор подлежит юрисдикции судов Грузии. В применимых случаях также действуют положения GDPR Европейского союза.",
  },
  {
    title: "15. Свяжитесь с нами",
    content:
      "По любым вопросам, для реализации ваших прав или подачи жалобы, пожалуйста, свяжитесь с нами:\n\nAdgili\nЭл. почта: helloadgili@gmail.com\nАдрес: Батуми, Аджария, Грузия",
  },
]

const ruOutro = "Adgili — твоё место, забронировано."

export default function TermsPage() {
  const { t, language } = useLanguage()

  const currentIntro =
    language === "EN" ? enIntro : language === "GE" ? geIntro : ruIntro
  const currentSections =
    language === "EN" ? enSections : language === "GE" ? geSections : ruSections
  const currentOutro =
    language === "EN" ? enOutro : language === "GE" ? geOutro : ruOutro

  return (
    <main className="min-h-screen bg-[#0f1a1c]">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif text-[#f5f5f5] mb-8 text-center">
            {t("termsTitle")} <span className="text-[#c9a86c]">{t("terms")}</span>
          </h1>
          <div className="bg-[#162325] border border-[#2a4245] rounded-xl p-8 text-[#8a9a9d] space-y-8">
            <p className="leading-relaxed">{currentIntro}</p>
            {currentSections.map((section, index) => (
              <section key={index}>
                <h2 className="text-xl font-semibold text-[#c9a86c] mb-3">
                  {section.title}
                </h2>
                <p className="leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </section>
            ))}
            <p className="leading-relaxed italic">{currentOutro}</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}