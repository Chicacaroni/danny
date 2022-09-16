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
      <h3>Contact Information: </h3>
      <p>#08 J. Cordero Street Poblacion Sto. Tomas Pampanga </p>
      <p>09171676577</p>
      <p>deejaylaxamana@gmail.com</p>

      <h3>Description: </h3>
        <p>Computer Engineering Professional with over 10 years of experience specializing in CpE derpartment management for international logistics companies. I can implement effective IT strategies at local and global levels. My greatest strength is business awareness, which enables me to permanently streamline infrastructure and applications. Seeking to 
        leverage my CpE management abilities in SanCorp.</p>
        <h3>Skills: </h3>


  

        <p>
        <li>Project Scheduling</li>
        <li>Strategic Planning</li>
        <li>Sales Analysis</li>
        <li>Team Management</li>
        <li>Code Review</li>
        </p>
        <h3>Education:</h3>
  
   <div>
        <p style={{textAlign: "left"}}><b>Tertiary</b></p>
        <p style={{textAlign: "left"}}>
        Bachelor of Science in Computer Engineering (Degree)
        </p>
        <p style={{textAlign: "left"}}>
        University of the Assumption
        </p>
        <p style={{textAlign: "left"}}>
        Unisite Subdivision, Barangay Del Pilar, City of San Fernando Pampanga
        </p>
        <p style={{textAlign: "left"}}>
        2019-present
        </p>
      </div>

      <div>
        <p style={{textAlign: "left"}}><b>Secondary</b></p>
        <p style={{textAlign: "left"}}>
        San Matias National High School
        </p>
        <p style={{textAlign: "left"}}>
       L. Gomez Subd, San Matias Sto. Tomas, Pampanga SANTO TOMAS, PAMPANGA
        </p>
        <p style={{textAlign: "left"}}>
        2017-2019 (Senior High School)
        </p>
        <br></br>
        <p style={{textAlign: "left"}}>
        San Matias National High School
        </p>
        <p style={{textAlign: "left"}}>
        L. Gomez Subd, San Matias Sto. Tomas, Pampanga SANTO TOMAS, PAMPANGA
        </p>
        <p style={{textAlign: "left"}}>
        2013-2017 (Junior High School)
        </p>
      </div>

        <div>
        <p style={{textAlign: "left"}}><b>Primary</b></p>
        <p style={{textAlign: "left"}}>
        Sto. Tomas Elementary School
        </p>
        <p style={{textAlign: "left"}}>
        XPQ6+J35,Santo Tomas, Pampanga
        </p>
        <p style={{textAlign: "left"}}>
        2006-2013
        </p>
      </div>



      </section>
    </Layout>
  );
}