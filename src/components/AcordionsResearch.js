import React from 'react';
import Link from 'next/link';

const AcordionsResearch = () => {

    return (
        <div classNameName='accordion-section'>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <h2 className='mb-3 text-center'>Working Papers / Work In Progress</h2>
                <div className="accordion-item mb-2">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Catholic Schools in a Lottery Context: Are They Another Non-Excuses Charter? (JMP-
                            solo-authored)
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Catholic schools are the largest non-governmental school network in the world, serving 62.2
                            million students globally, surpassed in many countries only by state-run institutions. While they
                            are commonly perceived as privately funded, Catholic schools can access public funding through
                            school choice programs in many countries. This paper uses Chilean data to assess the impact of
                            attending Catholic schools versus other private and public institutions on student outcomes. The
                            study addresses admission-selection bias by leveraging exogenous variation from school
                            admission lotteries. Causal estimates reveal that Compared to public schools, attending Catholic
                            schools improves college entry exam (CEE) performance in math and reading, elevates college
                            application and acceptance rates, and encourages health-related major preferences. Notably,
                            positive CEE effects are driven by female students, while male students, particularly high-
                            performing ones, benefit in terms of college acceptance and CEE science scores. Nevertheless,
                            attending Catholic schools raises dropout rates, especially for males with low math baseline
                            ability. Additionally, it dissuades female students, particularly high achievers, from pursuing
                            STEM majors. Survey evidence reveals that Catholic schools have stricter disciplinary measures
                            and foster higher levels of parent involvement than other public and private institutions,
                            resembling characteristics commonly associated with charter schools following the no-excuses
                            model in the United States.
                            <br />
                            <Link target="_blank" href="https://drive.google.com/file/d/1QdFAcPKB0PAqbtFpJX9W4b4-C0cxZZ01/view?usp=sharing">link</Link>
                        </div>

                    </div>
                </div>
                <div className="accordion-item mb-2">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Commuting to school together: evidence from Bogota Ciempiés (With Valentina Chegwin and
                            Rafael Hernandez)
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">School attendance and student performance pose significant challenges in many developing
                            countries where insecurity and traffic issues prevail. The adverse impact of truancy on learning,
                            dropout rates, and classroom dynamics is a shared concern among low- and middle-income
                            nations. These challenges stem from various factors, including safety concerns and lengthy
                            commutes, underscoring the urgency of innovative solutions to ensure education access. This
                            study investigates Bogota&#39;s pioneering Ciempiés program, which seeks to address these issues by
                            enhancing school attendance and safety. Ciempiés orchestrates supervised walking caravans led
                            by adult monitors, specifically targeting public schools with a high prevalence of walking
                            students. The goal is to tackle safety concerns, boost attendance, and ultimately elevate academic
                            performance. We assess the program&#39;s impact through comparisons of traffic accidents in
                            Ciempiés-operated school zones versus non-operational zones. Additionally, it aims to evaluate
                            school attendance and academic performance, relying on student-level data spanning 2016 to
                            2022. These insights are critical for gauging the program&#39;s effectiveness in ameliorating
                            educational outcomes and mitigating safety challenges inherent to school commutes in urban
                            environments.</div>
                    </div>
                </div>
                <div className="accordion-item mb-2">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Schools value-added and school’s spending decisions (With Julio Rodriguez and Gregory
                            Elacqua)
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Our study investigates the impact of school spending categories on value-added outcomes within
                            the Chilean education system. To address challenges related to endogeneity, we leverage Chile&#39;s
                            centralized admission system (SAE), which employs lotteries to resolve application ties in
                            oversubscribed schools. By simulating the application process, we compute each applicant&#39;s
                            propensity score, enabling us to control for parental preferences and mitigate sorting bias.
                            Additionally, we focus on the initial cohorts of students enrolled through SAE, as schools&#39;
                            spending decisions are less likely to be influenced by student characteristics during this period.
                            Using a linear regression model, we analyze the relationship between school value-added and
                            spending categories while accounting for income and past expenditures. We also explore
                            potential variations in expenditure effectiveness based on student characteristics and
                            achievement levels.</div>
                    </div>
                </div>
                <h2 className='text-center mb-3'>Publications</h2>
                <h3>Peer-Reviewed</h3>
                <div className="accordion-item mb-2">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            Elacqua, G., Munevar, I., Sanchez, F., & Santos, H. (2021). The impact of decentralized decision-making on student outcomes and teacher quality: Evidence from Colombia. World Development, 141, 105378.
                        </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">This paper evaluates the effects of the administrative decentralization of education on teacher quality and student outcomes in Colombia.
                            In 2001, the government established an arbitrary rule that granted municipalities with a 2002 population
                            100,000 almost complete autonomy to provide education services (certification).
                            This analysis takes advantage of this rule to evaluate, using difference-in-differences and regression discontinuity methodologies, the effect of municipal autonomy on teacher quality and student outcomes, including achievement and enrollment.
                            The control group is made up of municipalities for which the provision of education was centralized and managed by the departmental authorities. The results indicate that administrative decentralization (being certified) improves both school enrollment and student achievement as well as the quality of teachers, as measured by teachers’ education level and scores on teachers’ entry competency exams.
                            Using a mediation analysis, the paper finds that higher-quality teachers hired by the certified municipalities partially explained the improvement in student achievement. This analysis also shows that “certified” municipalities invest more local resources in education which also contributes to explain to a much lesser extent their superior educational outcomes.
                            Finally, the results suggest that achieving better student outcomes is less related to the amount of resources that decentralized municipalities managed and more associated with the fact that those resources seem to have been better allocated, generating significant efficiency gains. These gains may be the consequence of lower transaction costs of matching local preferences with local educational interventions.
                            <br />
                            <Link target="_blank" href="https://www.sciencedirect.com/science/article/abs/pii/S0305750X20305064?via%3Dihub">link</Link>
                        </div>
                    </div>
                </div>
                <h3>Policy Briefs/Notes</h3>
                <div className="accordion-item mb-2">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            Álvarez, H., Elacqua, G., Mendez, C., Munevar, I., Vásquez, D. Hablemos de política educativa en América Latina y el Caribe #8: Colegios privados en tiempos de COVID-19. (2021). Itermaerican Development Bank.
                        </button>
                    </h2>
                    <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">La pandemia ocasionada por el COVID-19 ha afectado considerablemente a las escuelas privadas de América Latina y el Caribe, poniendo en riesgo la continuidad del servicio educativos de millones de estudiantes,
                            ya que muchas escuelas han cerrado o podrían cerrar. Si esto pasa el sistema educativo debe garantizar la absorción de los estudiantes que podrían quedarse sin escuela.
                            En este contexto, proponemos y discutimos alternativas a los gobiernos que van desde fortalecer el sistema público educativo hasta subsidiar la oferta o demanda de colegios privados.
                            La estrategia más adecuada para cada país dependerá de su contexto, y de la ponderación de sus costos y beneficios, pero, sí enfatizamos que es importante que los países actúen de una manera u otra, con el fin de garantizar que los millones de estudiantes de escuelas privadas puedan continuar sus estudios en instituciones de calidad.
                            <br />
                            <Link target="_blank" href="https://publications.iadb.org/es/hablemos-de-politica-educativa-en-america-latina-y-el-caribe-8-colegios-privados-en-tiempos-de">link</Link>
                        </div>
                    </div>
                </div>
                <div className="accordion-item mb-2">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                            Bertoni, E., Elacqua, G., Mendez, C., Montalva, V., Munevar, I., Olses, A., Roman, A. (2020). Seleccionar y asignar docentes en América Latina y el Caribe: Un camino para la calidad y equidad en educación. Interamerican Development Bank.
                        </button>
                    </h2>
                    <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Considerando los desafíos que la región enfrenta en seleccionar y asignar los mejores docentes a las escuelas que más los necesitan, en este documento tratamos de responder a dos preguntas fundamentales: ¿cómo identificamos y seleccionamos a los mejores docentes? y ¿cómo los asignamos a las escuelas de una manera eficiente y equitativa? Para responder a estas preguntas recopilamos información sobre la forma en que 12 sistemas de América Latina y el Caribe (ALC) seleccionan y asignan a sus docentes: Barbados, Chile, Colombia, Costa Rica, Ecuador, Honduras, Jamaica, Panamá, Perú, la Ciudad Autónoma de Buenos Aires (CABA - Argentina), la municipalidad de Río de Janeiro (Brasil) y el estado de Pernambuco (Brasil), y destacamos las ventajas de los sistemas que implementan estos procesos de forma centralizada.
                            <br />
                            <Link target="_blank" href="https://publications.iadb.org/es/seleccionar-y-asignar-docentes-en-america-latina-y-el-caribe-un-camino-para-la-calidad-y-equidad-en">link</Link>
                        </div>
                    </div>
                </div>
                <h3>Book Chapters</h3>
                <div className="accordion-item mb-2">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                            Chegwin, V., Munevar, I. and Sanchez, F. (2023). Local autonomy and the provision of local public goods: Evidence from a Colombian natural experiment. J.P. Faguet and S. Pal. (Ed.). Global Perspectives on Decentralized Governance: Ways to Create Effective and Democratic Political Systems. London, United Kingdom, LSE Press. (Forthcoming September 2023)
                        </button>
                    </h2>
                    <div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">'A substantial decentralisation reform occurred in Colombia school education in 2001. The government established an arbitrary rule that granted municipalities with a population greater than 100,000 almost complete autonomy to provide education services (certifica- tion). Going beyond some mechanisms identified in previous policy evaluations (such as a higher proportion of higher-quality teachers) we analysed how reform a!ected the investment of local resources in education and the distribution of the total budget in key areas of the school system. Certified municipalities experienced an increase in education expenditure, after discounting teachers’ payroll, because of increased eðciency in the management of total resources, both locally raised and central government transfers. This allowed higher expenditures in school infrastructure, education quality, and other education-related programmes, all key components of education policy. In addition, after 2002 the competitiveness of public schools increased in certified municipalities, compared to non-certified areas. Achieving better student outcomes was primarily explained by changes in the allocation of resources in certified municipalities that resulted in increased eðciency after gaining autonomy. Lastly, certification enhances competitiveness of public schools as against private ones.
                            <br />
                            <Link target="_blank" href="https://publications.iadb.org/es/hablemos-de-politica-educativa-en-america-latina-y-el-caribe-8-colegios-privados-en-tiempos-de">link</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AcordionsResearch;
