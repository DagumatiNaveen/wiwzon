import React from "react";

const BlogDetails = () => {
  return (
    <>
      <main id="main">

        <section className="single-page">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-8">
                <h2 className="title">The Loop Nobody Talks About</h2>
                <p className="subtitle">Why Coverage Signoff Is Still Broken After 20 Years</p>
                <p className="tagline">A perspective from the service industry trenches</p>
                <div className="d-flex align-items-center details-post-data">
                  <div className="post-meta d-flex">
                    <p className="post-author">Satish</p>
                    <p className="post-sperator"> - </p>
                    <p className="post-date">
                      <time dateTime="2023-01-01">Dec 24, 2025</time>
                    </p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <img src="assets/images/blog/blog1.jpeg" className="img-fluid rounded-4 mb-4" alt="" />
                </div>
                <article>
                  <h2>The Uncomfortable Truth</h2>
                  <p>
                    After two decades in semiconductor verification services, I've watched the same loop repeat across
                    hundreds of projects, dozens of clients, and three generations of EDA tools.
                  </p>

                  <div className="quote-block">
                    Tools got faster. Coverage got denser. <strong>Sign-off stayed subjective.</strong>
                  </div>

                  <h2>The Verification Hell Loop</h2>
                  <p>Every service company knows this dance. We don't talk about it publicly. But it's real.</p>

                  <div className="diagram-container">
                    <pre>{`CLIENT COMES IN ──▶ WE PROPOSE ──▶ WE INITIATE ──▶ DESIGN TEAM BUSY
(Reputation)         THE PLAN       EXECUTION      (STA, DFT, Backend)
                                                    │                  │
                                                    ▼                  │ DELAYS
                                        ┌───────────────────────┐      │
                                        │   REGRESSION RUNS     │◀─────┘
                                        │   (Tools work fast)   │
                                        └───────────────────────┘
                                                    │
                                                    ▼
                                        ┌───────────────────────┐
                                        │  COVERAGE READY       │
                                        │  90%? 95%? 98%?       │
                                        └───────────────────────┘
                                                    │
                    ┌───────────────────────────────┴───────────────────────────┐
                    ▼                                                           ▼
            ┌──────────────────────┐                            ┌──────────────────┐
            │ CODE COVERAGE REVIEW │                            │ FUNC COV REVIEW  │
            │ Designer: BUSY       │                            │ Client: BUSY     │
            │ Status: WAITING...   │                            │ Status: WAITING  │
            └──────────────────────┘                            └──────────────────┘
                    │                                                           │
                    └───────────────────────┬───────────────────────────────────┘
                                            ▼
                          ┌────────────────────────────────────┐
                          │         PROPOSAL DELAYED           │
                          │  "We need more coverage"           │
                          │  "Can you add these scenarios?"    │
                          │  "What about corner cases for X?"  │
                          └────────────────────────────────────┘
                                            │
                          LOOP AGAIN  ◀─────┴─────▶  EVENTUALLY SIGN-OFF
                          (weeks)                     (subjective)`}</pre>
                  </div>

                  <p>
                    This loop runs for weeks. Sometimes months. And the painful truth? <strong>It's not the tools'
                    fault.</strong>
                  </p>

                  <h2>The Product Company Reality</h2>
                  <p>
                    Some product companies never touch their verification setup as long as it works. Unless European
                    functional safety rules require coverage updates. Then they come to us.
                  </p>
                  <p>
                    They come because of our reputation. We propose a plan. We initiate. And we all know what happens next:
                  </p>
                  <ul>
                    <li>Design team is busy responding to STA, DFT, backend issues</li>
                    <li>Regression runs, coverage numbers ready</li>
                    <li>But code coverage needs designer review — designer is busy</li>
                    <li>Functional coverage needs client verification team — they're overwhelmed</li>
                    <li>Proposal gets delayed. More tests requested. Loop again.</li>
                  </ul>
                  <p>
                    <strong>This is the industry. Everyone is busy. Everyone is doing their job.</strong> But nobody has
                    time to think deeply about whether the design actually matches the specification.
                  </p>

                  <h2>Where the Real Time Goes</h2>
                  <p>Here's what clients don't see. Here's what managers don't track.</p>

                  <table>
                    <tbody>
                      <tr>
                        <th>Activity</th>
                        <th>Time</th>
                      </tr>
                      <tr>
                        <td>Tool Runtime (Simulation, Coverage)</td>
                        <td>15%</td>
                      </tr>
                      <tr>
                        <td>Human Waiting (Reviews, Approvals, Clarifications)</td>
                        <td>70%</td>
                      </tr>
                      <tr>
                        <td>Actual Analysis (Interpretation, Decision Making)</td>
                        <td>15%</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="quote-block">
                    The tools are NOT the bottleneck. The bottleneck is human availability + human judgment.
                  </div>

                  <h2>The Sign-off Subjectivity Problem</h2>
                  <p>Every client has different criteria. Same coverage number, different meanings.</p>

                  <table>
                    <tbody>
                      <tr>
                        <th>Client Type</th>
                        <th>Response to 95%</th>
                        <th>Focus</th>
                      </tr>
                      <tr>
                        <td>Consumer Electronics</td>
                        <td>"95% is good enough. Ship it."</td>
                        <td>Time-to-market</td>
                      </tr>
                      <tr>
                        <td>Automotive (ASIL-D)</td>
                        <td>"95% means nothing. What about the 5%?"</td>
                        <td>Functional safety</td>
                      </tr>
                      <tr>
                        <td>Aerospace</td>
                        <td>"Show us WHY each line is unreachable."</td>
                        <td>DO-254 traceability</td>
                      </tr>
                      <tr>
                        <td>European Automotive</td>
                        <td>"We need formal proof for the gaps."</td>
                        <td>Regulatory compliance</td>
                      </tr>
                    </tbody>
                  </table>

                  <p>
                    Same metric. Four completely different sign-off criteria. <strong>Tools give numbers. They don't give
                    judgment.</strong>
                  </p>

                  <h2>Why No Tool Has Solved This</h2>
                  <p>
                    Giant EDA companies build excellent tools. Accurate. Fast. Reliable. But they can't solve the
                    interpretation problem.
                  </p>
                  <ul>
                    <li>
                      <strong>Data Privacy:</strong> No client lets you train a tool on their complete project. IP concerns. NDA restrictions.
                    </li>
                    <li>
                      <strong>Project Isolation:</strong> It's never one company's project. Every client asks us to sign off with THEIR inputs, THEIR criteria, THEIR judgment.
                    </li>
                    <li>
                      <strong>Subjectivity:</strong> Every sign-off is isolated. Every judgment is one-time. We never accumulate learning across projects.
                    </li>
                  </ul>

                  <h2>How We Train Engineers vs How We "Train" Tools</h2>

                  <div className="diagram-container">
                    <pre>{`HOW WE TRAIN A HUMAN ENGINEER:

FRESH GRAD ──▶ JUNIOR ──▶ SENIOR ──▶ PRINCIPAL ──▶ ARCHITECT

• Basics        • One protocol    • Multiple       • Protocol      • Maps any protocol
• Theory        • Debug simple      protocols        expert        • Knows implied behavior
• Syntax                          • Complex debug  • Intuition     • Signs off with CONFIDENCE

═══════════════════════════════════════════════════════════════════════════════════

HOW WE "TRAIN" CURRENT TOOLS:

INSTALL ─────────────────────────────────────────────────▶ RUN IT

• Generic rules                                            • Get numbers
• No project context                                       • No judgment

No progression. No learning. No adaptation.`}</pre>
                  </div>

                  <h2>The Knowledge Layers of an Architect</h2>
                  <p>An architect doesn't just know more. They THINK differently.</p>

                  <div className="diagram-container">
                    <pre>{`LAYER 4: DESIGN-SPECIFIC KNOWLEDGE                     ◀── JUDGMENT
• This specific chip's architecture
• Client's implicit requirements
• Historical issues in similar designs
                      ▲
LAYER 3: PROTOCOL-SPECIFIC KNOWLEDGE
• PCIe quirks vs AMBA quirks vs USB quirks
• Where specs are ambiguous
• Common implementation pitfalls
                      ▲
LAYER 2: VERIFICATION METHODOLOGY
• UVM patterns, Coverage strategies, Assertion principles
                      ▲
LAYER 1: GENERIC RULES                                 ◀── CURRENT TOOLS
• SystemVerilog syntax, Basic RTL patterns

════════════════════════════════════════════════════════════════════════════════════
Current tools operate at Layer 1. Sign-off judgment requires Layer 4.`}</pre>
                  </div>

                  <h2>Transfer Learning: How Experts Actually Work</h2>
                  <p>How does a senior engineer learn a new protocol in weeks, not years?</p>

                  <div className="diagram-container">
                    <pre>{`┌────────────────────────┐        ┌────────────────────────┐
│   KNOWN PROTOCOL       │        │    NEW PROTOCOL        │
│   (e.g., AXI)          │        │    (e.g., CHI)         │
│                        │        │                        │
│ • Transaction types    │───────▶│ • Map transaction      │
│ • Ordering rules       │TRANSFER│   types                │
│ • Error handling       │───────▶│ • Find ordering        │
│ • Edge cases seen      │        │   similarities         │
│                        │        │ • Apply error patterns │
└────────────────────────┘        │ • PREDICT edge cases   │
                                  └────────────────────────┘

The expert doesn't start from zero. They map patterns. They predict problems.
Current tools CAN'T do this. They treat every project as if they've never seen anything before.`}</pre>
                  </div>

                  <h2>The Gap We're Trying to Close</h2>

                  <div className="diagram-container">
                    <pre>{`SPECIFICATION                              RTL
┌───────────────┐                         ┌───────────────┐
│               │                         │               │
│  • Intent     │                         │  • Code       │
│  • Edge cases │                         │  • Coverage   │
│  • Implied    │         ?               │  • Numbers    │
│    behavior   │◀───────────────────────▶│               │
│  • What's NOT │                         │               │
│    stated     │                         │               │
└───────────────┘                         └───────────────┘

            ▲
  ──────────┴─────────┐
  │   UNDERSTANDING    │
  │                   │
  │ • Not matching    │
  │ • Not searching   │
  │ • REASONING       │
  └───────────────────┘

The gap isn't simulation speed. It's interpretation.
Reading specs. Understanding intent. Mapping to RTL.
Deciding what's missing. Knowing when "done" means done.`}</pre>
                  </div>

                  <h2>Our Journey: Plan → Execute → Learn → Pivot → Repeat</h2>
                  <p>
                    Teaching a tool to think like an engineer is not easy. Mapping every possible scenario takes immense
                    thinking and implementation. We planned. We executed. We learned. We pivoted. <strong>Again and again.</strong>
                  </p>

                  <div className="quote-block">PLAN → EXECUTE → LEARN → PIVOT → PLAN → EXECUTE → ...</div>

                  <p>
                    This cycle repeated many times. Not because we failed. Because the problem is HARD. Every iteration taught us
                    something:
                  </p>
                  <ul>
                    <li>What works in theory doesn't always work in practice</li>
                    <li>Simple approaches often beat complex architectures</li>
                    <li>The gap between spec and RTL is semantic, not syntactic</li>
                    <li>Pattern matching fails. Understanding succeeds.</li>
                  </ul>
                  <p>After months of iterations, we started seeing results. Not perfect. But measurable. And improving.</p>

                  <h2>What Real Gaps Look Like</h2>
                  <p>
                    From our analysis, here are examples of REAL gaps — places where the specification says something, but the RTL
                    doesn't implement it:
                  </p>

                  <div className="gap-box">
                    <h4>GAP: ERROR CORRECTION</h4>
                    <div className="spec-text">"The uPacket RX is required to apply majority voting on the repeated ECFs for error correction."</div>
                    <p className="finding"><strong>Finding:</strong> No majority voting logic found in receiver module. <strong>Action:</strong> RTL implementation needed.</p>
                  </div>

                  <div className="gap-box">
                    <h4>GAP: SIGNAL HANDLING</h4>
                    <div className="spec-text">"The receiver must not clear these bits upon isolated symbol errors."</div>
                    <p className="finding"><strong>Finding:</strong> Receiver incorrectly clears bits on symbol errors. <strong>Action:</strong> RTL fix required.</p>
                  </div>

                  <div className="gap-box">
                    <h4>GAP: FEATURE SUPPORT</h4>
                    <div className="spec-text">"SCRAMBLING_DISABLE" capability required</div>
                    <p className="finding"><strong>Finding:</strong> Feature not implemented in framing module. <strong>Action:</strong> Implementation decision needed.</p>
                  </div>

                  <div className="gap-box">
                    <h4>GAP: SIGNAL NAMING</h4>
                    <div className="spec-text">Signals DATA0_7, DATAM_7, ACK_Data, IRQ_HPR required</div>
                    <p className="finding"><strong>Finding:</strong> These signals not present in framing module. <strong>Action:</strong> Architecture review needed.</p>
                  </div>

                  <p>These aren't theoretical. These are real findings. Each one would have been caught by a human reviewer — eventually. But now we can find them <strong>systematically</strong>.</p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogDetails;
               