import React from "react"
import Layout from "../components/layout"

export default function PrivacyPolicy() {
  const appName = 'Replug'
  return (
    <Layout>
      <p><h1>Privacy Policy</h1></p>

      <p>Effective date: December 06, 2018</p>

      <p>Incyc Apps ("us", "we", or "our") operates the {appName} mobile application (the "Application").</p>

      <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Application and the choices you have associated with that data.</p>

      <p>We use your data to provide and improve the Application. By using the Application, you agree to the collection and use of information in accordance with this policy.</p>

      <h3>Information Collection And Use</h3>

      <h4>Personal Data</h4>

      <p>All data in the Application lives locally on your device. During normal usage of the Application, no data that can be used to identify you is collected ("Personal Data"). However, when using the Support features inside the Application, we may ask you to provide us with an Email address, which can be used to respond to your Support request.</p>

      <h4>Usage Data</h4>

      <p>During normal usage of the Application, we may collect certain non-personally identifiable information automatically, including, but not limited to, the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data ("Usage Data").</p>

      <h3>Use of Data</h3>

      <p>{appName} uses the collected data for various purposes:</p>
      <ul>
        <li>To provide customer care and support</li>
        <li>To provide analysis or valuable information so that we can improve the Application</li>
        <li>To monitor the usage of the Application</li>
        <li>To detect, prevent and address technical issues</li>
      </ul>

      <h3>Transfer Of Data</h3>
      <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>
      <p>If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there.</p>
      <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
      <p>{appName} will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>

      <h3>Disclosure Of Data</h3>

      <h4>Legal Requirements</h4>
      <p>{appName} may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
      <ul>
        <li>To comply with a legal obligation</li>
        <li>To protect and defend the rights or property of {appName}</li>
        <li>To prevent or investigate possible wrongdoing in connection with the Application</li>
        <li>To protect the personal safety of users of the Application or the public</li>
        <li>To protect against legal liability</li>
      </ul>

      <h4>Security Of Data</h4>
      <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

      <h3>Application Providers</h3>
      <p>We may employ third party companies and individuals to facilitate our Application ("Application Providers"), to provide the Application on our behalf, to perform Application-related services or to assist us in analyzing how our Application is used.</p>
      <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

      <h3>Links To Other Sites</h3>
      <p>Our Application may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
      <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>

      <h3>Changes To This Privacy Policy</h3>
      <p>We may update our Privacy Policy from time to time. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page. By continuing to use the Application following the posting of any amended, changed, or otherwise modified provisions to the Privacy Policy, you acknowledge that you agree with the changes, modification, and amendments.</p>

      <h3>Contact Us</h3>
      <p>For any questions, please contact <a href="mailto:incyc.apps@gmail.com">incyc.apps@gmail.com</a></p>
    </Layout>
  )
}
