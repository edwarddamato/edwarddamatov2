"use client";

import { Button } from "@nextui-org/button";
import React from "react";

export default function Home() {
  return (
    <section className="print:p-4 p-24 py-8 flex flex-col gap-6">
      <header className="flex justify-between">
        <div>
          <h1 className="text-6xl">
            Edward D&apos;Amato{" "}
            <sup className="text-sm font-bold text-red-500">CV</sup>
          </h1>
          <ul className="flex gap-4">
            <li className="text-sm">
              <a href="mailto:info@edwarddamato.com">info@edwarddamato.com</a>
            </li>
            <li className="text-sm">
              <a
                href="https://github.com/edwarddamato"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/edwarddamato
              </a>
            </li>
            <li className="text-sm">
              <a
                href="http://lnkd.in/rHMR2B"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/edwarddamato
              </a>
            </li>
          </ul>
        </div>
        <Button
          className="print:hidden"
          onClick={() => {
            window.print();
          }}
        >
          Print me!
        </Button>
      </header>
      <section id="printer-friendly"></section>
      <section id="summary">
        <h1 className="text-2xl font-semibold">Summary</h1>
        <p className="text-base print:text-sm">
          Currently working as a Senior Software Engineer at{" "}
          <a href="https://pleo.io" target="_blank" rel="noopener noreferrer">
            Pleo
          </a>
          &nbsp;as part of the AI Enablement team, exploring how GenAI and LLMs
          can be used within Pleo whilst also enabling other teams to leverage
          such tech.
          <br />
          Experienced Software Engineer with a demonstrated history of working
          in the internet industry. Huge fan of clean code, close collaboration
          and automation. Avid practitioner of test-driven development and
          functional programming techniques.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Work Experience</h1>
        <h2 className="text-xl border-b-1">Industry</h2>
        <ol className="flex flex-col gap-4">
          <li className="print:break-after-page">
            <p className="text-sm">2022 - present</p>
            <p>
              <strong>Senior Software Engineer</strong>
              &nbsp;&bull;&nbsp;
              <a
                href="https://www.pleo.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Pleo
              </a>
            </p>
            <p className="text-sm">
              <span className="text-xs font-semibold text-gray-600">
                As part of the AI Enablement team:
              </span>
              <ol className="list-disc pl-4 mb-4">
                {[
                  `Built an internal version of ChatGPT for Pleo, including features such as anonymisation, leveraging of internal product knowledge and document upload. Main contributor to the frontend as well as major contributions to the Python and Kotlin backends.`,
                  `Led and implemented Vendor Context project: a project that generates context about Pleo vendors using LLMs including using an evaluation matrix (also via LLMs) to evaluate generated content against a specific criteria.`,
                  `Worked on various experiments and prototypes including generation of spend policies for Pleo customers as well as expense categorisation using voice recognition.`,
                ].map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
              </ol>
              <span className="text-xs font-semibold text-gray-600">
                As part of the Content Localisation team:
              </span>
              <ol className="list-disc pl-4">
                {[
                  `Building together with another engineer in the team the localisation infrastructure (automations, processes) for Pleo across 10 different markets, across a set of products including web based apps, native mobile apps and communications.`,
                  `Built an automated, resilient and queue-based end-to-end localisation workflow for customer communications at Pleo, enabling communication owners to request translations for communications via a click of a button within the CMS, with automated translations uploads back into the CMS once translations are ready.`,
                  `Set up an event log pipeline for automated localisation processes/workflows, enabling the team to store events as they happen using Kafka/BigQuery; allowing the team to query such events to gather insights and metrics.`,
                ].map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
              </ol>
            </p>
          </li>
          <li>
            <p className="text-sm">2018 - 2022</p>
            <p>
              <strong>Senior Software Engineer</strong>
              &nbsp;&bull;&nbsp;
              <a
                href="https://www.bulb.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Bulb
              </a>
            </p>
            <p className="text-sm">
              <ol className="list-disc pl-4">
                {[
                  `Built from the ground up Bulb's communications platform in a team of two (three since Feb 2021). Supporting mission critical comms such as monthly billing and welcome packs across 4 markets.`,
                  `Worked with business stakeholders and consuming teams on a product and technical roadmap for the platform, delivering key functionality such as multi channel support (e.g. SMS, Push Notifications) and template rendering.`,
                  `Built a resilient and fault tolerant platform based on queues and events whilst leveraging cloud scaling strategies, delivering over 24m comms since 2019.`,
                  `Delivered an automated API load testing suite using k6 and DataDog running on a replicable Kubernetes workload, helping to measure any performance regressions before major releases.`,
                  `One of the main organisers of Bulb's first ever (and so far only) hackaton, with great success getting involvement from all guilds within the company.`,
                ].map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
              </ol>
            </p>
          </li>
          <li>
            <p className="text-sm">2016 - 2018</p>
            <p>
              <strong>Agile Software Engineer</strong>
              &nbsp;&bull;&nbsp;
              <a
                href="https://www.ebay.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                eBay
              </a>
            </p>
            <p className="text-sm">
              <ol className="list-disc pl-4">
                {[
                  `Delivered a reusable, scalable, WAI-ARIA compliant library in vanilla JavaScript for eBay web
              applications, which provides user onboarding tours for any eBay user.`,
                  `Delivered an isomorphic, fully responsive, WAI-ARIA compliant web application for eBay sellers
              to collect VAT information using NodeJS, TypeScript and Marko (an alternative JavaScript framework
              to React).`,
                  `Contributed to the delivery of a new REST API responsible for providing a seller's
              VAT information. Currently taking around ~600 M hits a day.`,
                  `Part of an agile team practicing pair programming, iterative development, XP,
              TDD and continuous integration and delivery.`,
                ].map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
              </ol>
            </p>
          </li>
          <li>
            <p className="text-sm">2015 - 2016</p>
            <p>
              <strong>UI Developer</strong>
              &nbsp;&bull;&nbsp;
              <a
                href="https://www.harrods.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Harrods
              </a>
            </p>
            <p className="text-sm">
              <ol className="list-disc pl-4">
                {[
                  `Transformed creative designs into pixel perfect, fully responsive, adaptive and device agnostic
              user interfaces. Embraced progressive enhancement and graceful degradation strategies when building
              UIs.`,
                  `Delivered BORDERFREE; supporting multi-currency payments. Responsible for building key areas;
              such as country/currency selector features as well as checkout UI enhancements.`,
                  `Heavily contributed to the delivery of the new Harrods.com, creating UI components from scratch
              for core areas such as product pages, product galleries, megamenu, quick shop and mini cart.`,
                  `Heavily contributed to the creation of a custom grid system, catering for 5 different screen
              sizes.`,
                ].map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
              </ol>
            </p>
          </li>
          <li>
            <p className="text-sm">2010 - 2015</p>
            <p>
              <strong>
                Web Projects Team Lead / Senior .NET Web Developer
              </strong>
              &nbsp;&bull;&nbsp;
              <a
                href="https://www.icon.com.mt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                ICON
              </a>
            </p>
            <p className="text-sm">
              Delivered numerous projects across different industries as a full
              stack developer, often building web projects from the ground up,
              using ASP.NET, SQL Server and JavaScript amongst other
              technologies. Highlighted projects include:
              <ol className="list-disc pl-4">
                <li>
                  Delivered a real-time web-based solution as part of&nbsp;
                  <a
                    href="http://www.electricvehiclesmalta.eu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    electricvehiclesmalta.eu
                  </a>
                  , showing 90 geo-located eletric charging stations offering
                  booking facilities.
                </li>
                <li>
                  Delivered&nbsp;
                  <a
                    href="https://www.laferla.com.mt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Laferla.com.mt
                  </a>
                  as the lead developer, creating a wizard-like flow to purchase
                  insurance online, delivering dynamic quotes and discounts.
                </li>
                <li>
                  Heavily contributed as the lead developer to the delivery
                  of&nbsp;
                  <a
                    href="https://myeportfolio.gov.mt/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ePortfolio
                  </a>
                  , building core features from the ground up across the whole
                  stack.
                </li>
                <li>
                  Heavily contributed to the creation of ICON&apos;s in-house
                  CMS (called SNAP), building core features from the ground up
                  across the whole stack such as an interactive and dynamic Page
                  Console.
                </li>
              </ol>
            </p>
          </li>
          <li>
            <p className="text-sm">2005 - 2009</p>
            <p>
              <strong>Software Developer</strong>
              &nbsp;&bull;&nbsp;
              <a
                href="https://www.transactium.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Transactium
              </a>
            </p>
            <p className="text-sm">
              Delivered payment gateway projects such as a hosted payments
              solution and tools (as web applications) for merchants and
              acquirers (banks).
            </p>
          </li>
        </ol>
        <h2 className="text-xl border-b-1">Community</h2>
        <ol className="flex flex-col gap-4">
          <li>
            <p className="text-sm">Jan 2018</p>
            <p>
              <strong>JavaScript coach</strong>
              &nbsp;&bull;&nbsp;
              <a
                href="https://www.codebar.io/workshops/648"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Codebar.io Workshop
              </a>
            </p>
            <p className="text-sm">
              Coached fellow developers at a codebar hosted at eBay&apos;s
              offices in London.
            </p>
          </li>
          <li>
            <p className="text-sm">Sep 2017</p>
            <p>
              <strong>Innovation project</strong>
              &nbsp;&bull;&nbsp;
              <a
                href={
                  "https://twitter.com/devinwenig/status/908444313050169344"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                eBay EXPO 2017
              </a>
            </p>
            <p className="text-sm">
              Participated in eBay&apos;s EXPO 2017 in San Jose where teams from
              across the different eBay regions come together and present
              concepts, ideas and prototypes. My project was chosen as one of
              the winners from all the other entries across teams in London and
              Berlin.
            </p>
          </li>
          <li>
            <p className="text-sm">Dec 2013</p>
            <p>
              <strong>Hackathon for charity</strong>
              &nbsp;&bull;&nbsp;
              <a
                href={
                  "https://www.icon.com.mt/news/storyteller-available-now-2/"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Tech Spark / Microsoft Hackathon
              </a>
            </p>
            <p className="text-sm">
              Participated in a hackathon organised by Tech Spark, a tech
              community in Malta in collbaration with Microsoft. Part of a
              three-strong team that built a Windows 8 application called
              &apos;Storyteller&apos;, integrated with Facebook&apos;s API.
            </p>
          </li>
        </ol>
      </section>
      <section className="flex flex-col gap-4 print:break-after-page">
        <h1 className="text-2xl font-semibold">Education</h1>
        <ol className="flex flex-col gap-4">
          <li>
            <p className="text-sm">2013–2014</p>
            <p>
              <strong>B.Sc. in Computer Science</strong> (1st class)
            </p>
            <p>
              <a
                href="https://www.herts.ac.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                University of Hertfordshire
              </a>
            </p>
            <p className="text-sm">
              Thesis:
              <q>
                Potato Catcher: Involved building a mobile game based on the
                Android platform using JAVA. The game revolves around the idea
                of &apos;hot potato&apos;, whereby a group of people positioned
                in a circle pass around an object with a countdown. When the
                countdown expires, the person holding the object loses. The game
                works with each person having their own smartphone, each
                connected to the same game session. With the use of gestures, a
                user can pass the &apos;object&apos; to another person in the
                session.
              </q>
              , Advisor: Dr. Guy Saward
            </p>
          </li>
          <li>
            <p className="text-sm">2010 - 2012</p>
            <p>
              <strong>Diploma in Computing &amp; Information Systems</strong>
            </p>
            <p>
              <a
                href="https://www.gold.ac.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                University of London
              </a>
            </p>
          </li>
          <li>
            <p className="text-sm">2003–2005</p>
            <p>
              <strong>
                MCAST-BTEC National Diploma in Computing (Software Development)
              </strong>
            </p>
            <p>
              <a
                href="http://www.mcast.edu.mt/inst/6"
                target="_blank"
                rel="noopener noreferrer"
              >
                MCAST Malta
              </a>
            </p>
          </li>
        </ol>
      </section>
      <section className="flex flex-col gap-4 print:break-after-page">
        <h1 className="text-2xl font-semibold">Skills</h1>
        <h2 className="text-xl border-b-1">Technical</h2>
        <p>
          Vast understanding of, and experience working with technologies,
          including:
        </p>
        <ul className="list-disc pl-8 text-sm">
          <li>TypeScript, JavaScript (ECMAScript), DOM &amp; related APIs</li>
          <li>Python & Kotlin</li>
          <li>
            Microsoft Azure, Amazon Web Services, Google Cloud & Kubernetes
          </li>
          <li>Docker & Dockerised applications</li>
          <li>
            Event and queue based architectures (using tools such as Redis,
            Google Cloud Pub/Sub, AWS SQS, Kafka)
          </li>
          <li>IaaS, mainly using Terraform and tooling like Env0</li>
          <li>Node.js</li>
          <li>
            CSS, CSS3, CSS preprocessors (SASS, LESS), Styled Components,
            Tailwind
          </li>
          <li>HTML5 and related APIs</li>
          <li>
            Various frameworks; including React, NextJS, MarkoJS, Angular,
            JQuery
          </li>
          <li>
            Single page applications and state management; including Redux
          </li>
          <li>WAI-ARIA compliance (accessibility)</li>
          <li>Bundling and minification (Webpack, Lasso)</li>
          <li>Code transpilers (Babel, TypeScript)</li>
          <li>
            RESTful & GraphQL APIs (design, implementation, documentation),
            Swagger, JSDoc, Versioning
          </li>
          <li>Relational databases primarily Postgres, MSSQL, MySQL</li>
          <li>
            Experience with numerous other libraries, tools and frameworks
            related to the above including pnpm, npm, Yarn, Ramda.js, Jest,
            Mocha, Cypress, Chai, sinon, Nightwatch.js, eslint/tslint,
            Grunt/Gulp, prettier, nock, axios, Selenium, date-fns, momentjs and
            many more.
          </li>
        </ul>
        <p>
          Throughout the years, I have also worked with a wide range of
          programming languages and technologies, including C#/ASP.NET,
          Microsoft Azure, Oracle, Mongo, Java and Scala.
        </p>
        <h2 className="text-xl border-b-1">Practices and Methodologies</h2>
        <ul className="list-disc pl-8 text-sm">
          <li>
            Monitoring & alerting using tools such as DataDog, PagerDuty, Google
            Stackdriver, Sentry
          </li>
          <li>
            Technical design documents and{" "}
            <a
              href="https://engineering.atspotify.com/2020/04/14/when-should-i-write-an-architecture-decision-record/#:~:text=An%20Architecture%20Decision%20Record%20(ADR,ADRs%20to%20document%20their%20decisions."
              target="_blank"
              rel="noopener noreferrer"
            >
              ADRs
            </a>
          </li>
          <li>Test-driven development</li>
          <li>
            Testing, testing strategies (unit, integration, end to end,
            regression, exploratory), test automation
          </li>{" "}
          <li>
            Continuous integration and delivery (automation, build pipelines)
          </li>
          <li>
            Build pipelines; most recently using CircleCI & GitHub Workflows;
            experience with using Jenkins, Gitlab, TravisCI, Vercel
          </li>
          <li>
            Continous code quality inspection and static code analysis (mostly
            using Sonarqube and ShiftLeft)
          </li>
          <li>Coding katas</li>
          <li>Trunk based and feature-branch based development</li>
          <li>
            Agile (Scrum, Kanban, XP) and respective ceremonies (daily stand-up,
            retrospective, planning and refinement sessions)
          </li>
          <li>Security (OWASP Top 10)</li>
          <li>Measuring impact through data</li>
        </ul>
      </section>
      <section className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Awards</h1>
        <ol className="flex flex-col gap-4">
          <li>
            <p className="text-sm">2015</p>
            <p>
              <strong>Best eGovernment Initiative</strong>{" "}
              (electricvehiclesmalta.eu - ICON)
            </p>
            <p>
              <a
                href="http://ebusinessawards.mca.org.mt/past-editions/2015"
                target="_blank"
                rel="noopener noreferrer"
              >
                MCA eBusiness Awards 2015
              </a>
            </p>
          </li>
          <li>
            <p className="text-sm">2014</p>
            <p>
              <strong>Most Innovative Solution</strong> (Laferla Insurance -
              ICON)
            </p>
            <p>
              <a
                href="http://ebusinessawards.mca.org.mt/past-editions/2014"
                target="_blank"
                rel="noopener noreferrer"
              >
                MCA eBusiness Awards 2014
              </a>
            </p>
          </li>
        </ol>
      </section>
      <section className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Languages</h1>
        <ul>
          <li>
            <strong>Maltese</strong>: Native
          </li>
          <li>
            <strong>English</strong>: Native
          </li>
          <li>
            <strong>Italian</strong>: Fluent
          </li>
        </ul>
      </section>
      <section className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Professional interests</h1>
        <p>
          Simplicity, functional programming, open source, giving back to the
          community through coding
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Personal interests</h1>
        <p>
          Animals, environment, sustainability and renewables, Brazilian
          jiu-jitsu, football, DIY.
        </p>
      </section>
      <footer>
        <p>References are available upon request.</p>
      </footer>
    </section>
  );
}
