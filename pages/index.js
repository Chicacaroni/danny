import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am 20 years old and I am from Poblacion Sto. Tomas Pampanga. My hobbies include
        playing video games and assembling/painting Gundam Plastic Model kits, also making papercraft models.
        I am also learning how to cook.</p>


  

        <p>
          I took up Computer Engineering beucase it is something I always wanted to become ever since I was a little
          even though I had a vague idea of what a CpE does. I see myself in ten years as someone who has gained numerous skills
          and experiences that have a decently high position in a company, or even a government agency.

        </p>
        <p>

          As a continuation of our SoftDev subject, I expect to learn a continuation of some of our previous knowledge.
          But for me personally, I am fascinated by websites with very eye catching, aesthetically pleasing user interface
          and want to be able to learn how to do the same as it did not get tackled very much on our previous semester.
        </p>
      </section>
    </Layout>
  );
}