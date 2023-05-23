import React from 'react'

import style from '../styles/privacyPolicy.module.css'

const PrivacyPolicyContent = () => {
  return (
    <section className={style.body}>

        <h3 className={style.heading}>Privacy Policy</h3>

        <p className={style.briefing}>This Privacy Policy governs the manner in which the webiste collects, uses, maintains and discloses information collected from users (each, a 'User') of the webstie ('Site'). This privacy policy applies to the Site and all products and services offered by company.</p>


        <article className={style.article}>
            <h4 className={style.subHeading}>Personal identification information</h4>
            <p className={style.paragraph}>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, subscribe to the newsletter, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, email address. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.

</p>
        </article>


        <article className={style.article}>
                <h4 className={style.subHeading}>Non-personal identification information</h4>
                <p className={style.paragraph}>We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.</p>
        </article>





        <article className={style.article}>
                <h4 className={style.subHeading}>Web browser cookies</h4>
                <p className={style.paragraph}>Our Site may use 'cookies' to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.</p>
        </article>





        <article className={style.article}>
                <h4 className={style.subHeading}>How we use collected information</h4>
                <p className={style.paragraph}>VR Dev School may collect and use Users personal information for the following purposes:
                <ul className={style.lists}>
                    <li className={style.list}>-To improve customer service
Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>

<li className={style.list}>- To personalize user experience
We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</li>

<li className={style.list}>- To send periodic emails
We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests. If User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email or User may contact us via our Site.</li>
                </ul>
                
                </p>
        </article>





        <article className={style.article}>
                <h4 className={style.subHeading}>How we protect your information</h4>
                <p className={style.paragraph}>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.</p>
        </article>



        <article className={style.article}>
                <h4 className={style.subHeading}>Sharing your personal information</h4>
                <p className={style.paragraph}>We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above. We may use comments and recommendations published on the site in other mediums such as email, web pages and social media.</p>
        </article>



        <article className={style.article}>
                <h4 className={style.subHeading}>Third party websites</h4>
                <p className={style.paragraph}>Users may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site. In addition, these sites or services, including their content and links, may be constantly changing. These sites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that website's own terms and policies.</p>
        </article>




        <article className={style.article}>
                <h4 className={style.subHeading}>Changes to this privacy policy</h4>
                <p className={style.paragraph}>Company has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.</p>
        </article>



        <article className={style.article}>
                <h4 className={style.subHeading}>Your acceptance of these terms</h4>
                <p className={style.paragraph}>By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.</p>
        </article>

        
    </section>
  )
}

export default PrivacyPolicyContent