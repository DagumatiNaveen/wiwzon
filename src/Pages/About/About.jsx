import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
    <div className="container">
       <main id="main" style={{background: "#0b0a0a"}}>
        <div className="aboutcontainer">
            {/* <!-- The Problem We Saw --> */}
            <section className="aboutsection">
                <span className="aboutsection-label">Why We Exist</span>
                <h2>The Reality We Ran Into</h2>

                <p>After dealing with endless debugging cycles and tapeouts, we started noticing something
                    uncomfortable. The industry has an elephant in the room that nobody speaks about: <span
                        className="highlight">subjectivity</span>.</p>
                <p>We have n number of sign-off parameter sheets. N number of tests. Code coverage vs functional
                    coverage debates. Yet all of it remains subjective. Nobody accounts for it. Nobody questions it.</p>
                <p>Then we hit another wall: <span className="aboutbold">revenue for licenses</span>. That's when we started
                    seeing the real gaps in the industry, not just chip tapeouts but everything around it.</p>
                <p>One thing led to another. AI emerged as a capable coworker to navigate through these technical
                    challenges with limited revenue. That's when WIOWIZ was born.</p>
            </section>

            <div className="aboutquote-block">
                <p>"We're not chasing hype. We want to fill the gaps that have been laying around for decades, with the
                    help of AI."</p>
            </div>

            {/* <!-- What We Do --> */}
            <section className="aboutsection">
                <span className="aboutsection-label">What We Do</span>
                <h2>Non-Optimism in Verification</h2>
                <p>70% of chip development time is invested in verification. Yet it's never enough, because signoff
                    remains subjective.</p>
                <p>Teams skip GLS simulations, delay simulations with parasitics, thermal analysis, and system-level
                    parameters. They enter signoff with hope, not confidence.</p>
                <p>We bring <span className="abouthighlight">non-optimism to the verification cycle</span>. We introduce
                    what's missing so teams enter signoff with genuine confidence, not hope.</p>
                <p>We're not here to replace commercial tools. We're here to bridge the gap between opensource and
                    commercial worlds. Both must coexist, because most of our industry giants laid their foundations on
                    opensource designs.</p>
            </section>

            {/* <!-- Our Focus Areas --> */}
            <section className="aboutsection">
                <span className="aboutsection-label">Focus Areas</span>
                <h2>What We're Building</h2>

                <div className="aboutvalues-grid">
                    <div classNameName="aboutvalue-card">
                        <h3>In-house EDA</h3>
                        <p>RTL to GDSII with opensource foundations, enhanced AI layers, and tools that fill the gaps
                            missing in the opensource world. Built around our verification philosophy: non-optimism at
                            every stage, not just DV.</p>
                    </div>
                    <div className="aboutvalue-card">
                        <h3>Sensor Fusion Platform</h3>
                        <p>Perception platform that converts raw radar and LiDAR signals into real-time object tracks.
                            Deterministic latency, low power, works in fog, rain, dust, smoke. Built for defense, ADAS,
                            agriculture, and industrial robotics.</p>
                    </div>
                    <div className="aboutvalue-card">
                        <h3>Die-to-Die Architecture</h3>
                        <p>Helping teams navigate the transition from monolithic SoCs to multi-die architectures.
                            Physics-aware design rules change completely when chiplets talk to each other. We help teams
                            prepare for that shift.</p>
                    </div>
                    <div className="aboutvalue-card">
                        <h3>Intelligence Layers (VAI)</h3>
                        <p>Virtual AI Inference, purpose-trained on-device intelligence designed for environments where
                            cloud dependency is unacceptable. Modular, offline-capable, sits entirely on-chip.</p>
                    </div>
                </div>
            </section>
            {/* <!-- Giving Back --> */}
            <section className="aboutsection">
                <span className="aboutsection-label">Giving Back</span>
                <h2>Contributions to Opensource</h2>
                <p>We remember where we came from. Opensource helped us build our internal projects when commercial
                    licenses were out of reach. Now we want to play our part in the ecosystem that helped us.</p>
                <p>Our in-house EDA effort focuses on filling gaps that stop students and entry-level engineers from
                    learning real chip design: RTL vs GLS wave comparison, LEC (Logic Equivalence Checking), DFT,
                    OpenROAD parallel processing by regions, PEX and IR drop analysis, OpenSTA with ECO cycles, and
                    multi-PDK PnR flow.</p>
                <p>Some reference designs are shared publicly, while others are available to organizations under NDA.
                </p>
            </section>
            {/* <!-- The Honest Truth --> */}
            <section className="aboutsection">
                <span className="aboutsection-label">The Honest Truth</span>
                <h2>Who We Are Today</h2>
                <p>We are a startup registered in <span className="aboutbold">Andhra Pradesh (Kakinada)</span>, operating
                    from <span className="aboutbold">Hyderabad and Bengaluru</span>.</p>
                <p>If you're looking for us in fancy tech parks, sorry, we can't afford that for now. We fully focus on
                    utilizing every penny on projects, not on spacious locations.</p>
                <p>Currently, all our team members are freelancers. We don't have regular employees yet. But our
                    directors are available to reach anytime. We're a lean team focused on delivery, not headcount.</p>
            </section>
            <div className="aboutstats-row">
                <div className="aboutstat-item">
                    <span className="aboutstat-number">2</span>
                    <div className="aboutstat-label">Operating Cities<br/>Hyderabad & Bengaluru</div>
                </div>
                <div className="aboutstat-item">
                    <span className="aboutstat-number">100%</span>
                    <div className="aboutstat-label">Project Focused<br/>Every penny on work</div>
                </div>
                <div className="aboutstat-item">
                    <span className="aboutstat-number">24/7</span>
                    <div className="aboutstat-label">Director Access<br/>Always reachable</div>
                </div>
            </div>
            {/* <!-- Looking Ahead --> */}
            <section className="aboutsection">
                <span className="aboutsection-label">Looking Ahead</span>
                <h2>Partners, Not Just Investors</h2>
                <p>Yes, we are actively looking for investment, but with intention.</p>
                <p>We want partners who can <span className="abouthighlight">help us lead our dreams</span>, not just cash
                    in on
                    market trends. We're not chasing hype. We want to fill the gaps that have been laying around for
                    decades, with the help of AI.</p>
                <p>If that resonates with you, let's talk.</p>
            </section>

            {/* <!-- CTA --> */}
            <section className="aboutcta-section">
                <h2>Want to talk?</h2>
                <p>We're always reachable.</p>
                <Link to="/contact" className="aboutcta-button">Contact Us</Link>
            </section>

        </div>

    </main>
    </div>
    {/* <!-- End #main --> */}
    </>
  )
  
};

export default About;
