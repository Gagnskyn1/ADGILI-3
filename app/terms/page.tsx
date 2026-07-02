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
      'You agree that you will not:\n• Transfer the application to another person or company without our permission;\n• Copy or modify the application or its documentation beyond what is permitted by these terms;\n• Attempt to "open" the application from the inside — that is, to inspect its code, disassemble it, or build your own product based on it;\n• Use the application to generate income or for other commercial purposes without our permission.',
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

export default function TermsPage() {
  const { t, language } = useLanguage()

  const sections = [
    { titleKey: "termsSection1Title", contentKey: "termsSection1" },
    { titleKey: "termsSection2Title", contentKey: "termsSection2" },
    { titleKey: "termsSection3Title", contentKey: "termsSection3" },
    { titleKey: "termsSection4Title", contentKey: "termsSection4" },
    { titleKey: "termsSection5Title", contentKey: "termsSection5" },
    { titleKey: "termsSection6Title", contentKey: "termsSection6" },
    { titleKey: "termsSection7Title", contentKey: "termsSection7" },
    { titleKey: "termsSection8Title", contentKey: "termsSection8" },
  ]

  const isEnglish = language === "EN"

  return (
    <main className="min-h-screen bg-[#0f1a1c]">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif text-[#f5f5f5] mb-8 text-center">
            {t("termsTitle")} <span className="text-[#c9a86c]">{t("terms")}</span>
          </h1>
          <div className="bg-[#162325] border border-[#2a4245] rounded-xl p-8 text-[#8a9a9d] space-y-8">
            {isEnglish ? (
              <>
                <p className="leading-relaxed">{enIntro}</p>
                {enSections.map((section, index) => (
                  <section key={index}>
                    <h2 className="text-xl font-semibold text-[#c9a86c] mb-3">{section.title}</h2>
                    <p className="leading-relaxed whitespace-pre-line">{section.content}</p>
                  </section>
                ))}
                <p className="leading-relaxed italic">{enOutro}</p>
              </>
            ) : (
              sections.map((section, index) => (
                <section key={index}>
                  <h2 className="text-xl font-semibold text-[#c9a86c] mb-3">{t(section.titleKey)}</h2>
                  <p className="leading-relaxed">{t(section.contentKey)}</p>
                </section>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
