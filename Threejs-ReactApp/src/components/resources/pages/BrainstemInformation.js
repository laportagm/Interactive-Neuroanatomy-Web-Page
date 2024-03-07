import React, { useEffect } from "react"
import { Container } from "reactstrap"
import ColorNavbar from "../../views/IndexSections/ColorNavbar"
import DemoFooter from "../../views/IndexSections/DemoFooter"
import styles from "../css/BrainstemInformation.module.css"
import "bootstrap/dist/css/bootstrap.min.css"
import ScrollToTopButton from "../../views/ExtraComponents/ScrollToTopButton"

// Section component for modular content sections
const Section = ({ title, children }) => (
  <section className={styles.section}>
    <h2 className={styles.sectionTitle}>{title}</h2>
    {children}
  </section>
)

function BrainstemInformation() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Container classname="bar">
        <ColorNavbar />
      </Container>
      <div className="visually-appealing-spacer2"></div>
      <div className="visually-appealing-spacer2"></div>

      <Container id="page">
        <Container className={styles.mainContainer}>
          <h1 className={styles.mainTitle}>Understanding the Brainstem</h1>

          <p className={styles.mainParagraph}>
            The brainstem serves as a pivotal junction, linking the cerebrum
            with the spinal cord and cerebellum. It is structured into the
            midbrain, pons, and medulla oblongata, each having a vital role in
            fundamental life functions like respiration, consciousness, blood
            pressure regulation, heart rate, and sleep cycles. It houses crucial
            clusters of white and grey matter. The grey matter comprises nerve
            cell bodies that form numerous significant nuclei within the
            brainstem. The white matter contains nerve axons, which extend from
            the central nervous system (CNS) and are crucial for communication
            to and from the brain, including pathways like the somatosensory and
            corticospinal tracts. Most cranial nerves originate in the
            brainstem, making it essential for clinicians to understand its
            anatomy and functions for accurate lesion localization.
          </p>

          <Section title="Development of the Brainstem">
            <p className={styles.sectionParagraph}>
              The CNS, including the brainstem, originates from the ectoderm
              through a process called neurulation, induced by the notochord.
              The neural tube forms and closes by around day 26 post-conception.
              Defects in this process can lead to conditions like spina bifida
              and anencephaly. The brainstem's development involves the
              differentiation of the neural tube into the forebrain, midbrain,
              and hindbrain, further dividing into structures like the thalamus,
              cerebellum, and medulla.
            </p>
          </Section>

          <Section title="Blood Supply to the Brainstem">
            <p className={styles.sectionParagraph}>
              The brainstem's blood supply primarily comes from the internal
              carotid and vertebral arteries. The medulla oblongata receives
              blood from the anterior and posterior spinal arteries, as well as
              the vertebral and posterior inferior cerebellar arteries. The pons
              is supplied by the basilar artery and its branches, while the
              midbrain receives blood from the basilar and posterior cerebral
              arteries. Recent discoveries have shown the existence of lymphatic
              channels within the CNS, which play roles in immune response and
              fluid balance.
            </p>
          </Section>

          <Section title="Cranial Nerves and Their Functions">
            <p className={styles.sectionParagraph}>
              The brainstem comprises all neural tissue and is the origin for
              most cranial nerves. These nerves, including the oculomotor,
              trochlear, trigeminal, abducens, facial, vestibulocochlear,
              glossopharyngeal, vagus, accessory, and hypoglossal nerves, emerge
              from various brainstem regions and perform diverse motor and
              sensory functions.
            </p>
          </Section>

          <Section title="Variations and Pathologies">
            <p className={styles.sectionParagraph}>
              The brainstem's critical role in life-sustaining functions and its
              primitive, conserved structure across vertebrates mean that any
              variants in its anatomy or pathology can lead to significant
              health deficits. Conditions like Arnold-Chiari malformations and
              brainstem variants of hypertensive encephalopathy are examples of
              such variations.
            </p>
          </Section>
        </Container>
      </Container>
      <div className="visually-appealing-spacer2"></div>

      <DemoFooter />
      <ScrollToTopButton />
    </>
  )
}

export default BrainstemInformation
