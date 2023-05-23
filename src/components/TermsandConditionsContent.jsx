import React from 'react'
import style from '../styles/termsAndConditions.module.css'

const TermsandConditionsContent = () => {
  return (
    <section className= {style.body}>
        <h2 className={style.heading}>Web Site Terms and Conditions of Use</h2>
        <article className={style.article}>
            <h3 className={style.points}>1. Terms</h3>
            <p className={style.paragraph}>By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this web site are protected by applicable copyright and trade mark law.</p>
        </article>

        <article className={style.article}>
            <h3 className={style.points}>2. Use License</h3>
            <p className={style.paragraph}>
               <ol className={style.firstList}>
                    <li className={style.firstPara}>
                            Permission is granted to temporarily download one copy of the materials (information or software) on Company's web site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                    </li>

                    <ol className={style.secondList}>
                    <li className={style.lists}>modify or copy the materials;</li>
                    <li className={style.lists}>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                    <li className={style.lists}>attempt to decompile or reverse engineer any software contained on Company's web site;</li>
                    <li className={style.lists}>remove any copyright or other proprietary notations from the materials; or</li>
                    <li className={style.lists}>transfer the materials to another person or 'mirror' the materials on any other server.</li>
                    </ol>


                    <li className={style.secondPara}>
                    This license shall automatically terminate if you violate any of these restrictions and may be terminated by Company at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
                    </li>
               </ol>
            </p>
        </article>

        <article className={style.article}>
                <h3 className={style.points}>3. Disclaimer</h3>
                <p className={style.paragraph}>The materials on Company's web site are provided 'as is'. Company makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Company does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.</p>
        </article>

        <article className={style.article}>
            <h3 className={style.points}>4. Limitations</h3>
            <p className={style.paragraph}>In no event shall Company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on Company's Internet site, even if Company or a Company authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
        </article>

        <article className={style.article}>
            <h3 className={style.points}>5. Revisions and Errata</h3>
            <p className={style.paragraph}>The materials appearing on Company's web site could include technical, typographical, or photographic errors. Company does not warrant that any of the materials on its web site are accurate, complete, or current. Company may make changes to the materials contained on its web site at any time without notice. Company does not, however, make any commitment to update the materials.</p>
        </article>

        <article className={style.article}>
            <h3 className={style.points}>6. Links</h3>
            <p className={style.paragraph}>Company has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Company of the site. Use of any such linked web site is at the user's own risk.</p>
        </article>

        <article className={style.article}>
            <h3 className={style.points}>7. Site Terms of Use Modifications</h3>
            <p className={style.paragraph}>Company may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use.</p>
        </article>

        <article className={style.article}>
            <h3 className={style.points}>8. Governing Law</h3>
            <p className={style.paragraph}>Any claim relating to Company's web site shall be governed by the laws of the State of New York without regard to its conflict of law provisions.</p>
        </article>
    </section>
  )
}

export default TermsandConditionsContent