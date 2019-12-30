import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Image Imports
import nwm from "./companylogos/nwm.jpg";
import citi from "./companylogos/citi.png";
import ilww from "./companylogos/ilww.jpg";
import flc from "./companylogos/flc.jpg";
import baruch from "./companylogos/baruch.png";

AOS.init();

class Timeline extends Component {
  render() {
    return (
      <div className="timeline">
        <ul>
          <li
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <div className="content">
              <h3>Financial Representative</h3>
              <p>
                • Consulted with clients about financial education planning
                services to achieve their financial security; added over 150+
                clients to Northwestern Mutual’s client relationship management
                system (Via Salesforce). <br />
                • Assisted up to 100+ clients by reviewing their current
                retirement plan and assessing their financial needs and future
                goals to build a structured retirement plan. <br />
                • Evaluated clients need to create cash flow and connected
                clients to wealth managers whom specialize in wealth management
                and investment products. <br />• Designed custom planning
                analyses and insurance ledgers for prospect clients to allow
                them to have an in-depth understanding of each insurance
                product, the benefits, and the premium accumulation throughout
                the maturity of the plan.
              </p>
              <img src={nwm} className="logo" style={{ width: "250px" }} />
            </div>
            <div className="date">
              <h4>Nov 2016 - May 2017</h4>
            </div>
          </li>
          <li
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <div className="content">
              <h3>Bank Teller II</h3>
              <p>
                • Promoted products such as loans, mortgages, and credit cards
                to clients; exceeded annual sales quota by 200% within 5 months
                of my employment. <br />• Actively processed 200+ customers
                daily with extreme attention to detail such as client
                information. <br />• Processed teller transactions for customers
                including servicing client accounts, accepting loan payments,
                managing safe deposit box payments, cashing checks, balancing
                cash drawers, handling night deposits, and correcting
                discrepancies.
              </p>
              <img src={citi} className="logo" style={{ width: "120px" }} />
            </div>
            <div className="date">
              <h4>Jun 2017 - Feb 2018</h4>
            </div>
          </li>
          <li
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <div className="content">
              <h3>Cofounder & Executive Director of Marketing</h3>
              <p>
                • Actively engaged the general student body to promote our
                apprenticeship program to build their finance acumen. <br />•
                Organized networking events for over 100+ students to connect
                them to alumni’s and gain internship opportunities.
                <br /> • Managed all social media outlets to promote upcoming
                events to generate interests of issues in the current financial
                market.
              </p>
            </div>
            <div className="date">
              <h4>Jan 2017 - May 2018</h4>
            </div>
            <div className="content">
              <h3>Cofounder & Executive Treasurer</h3>
              <p>
                • Managed club’s budget of $1,500 each semester based on events
                being held and presented the budget sheet to the Student
                Government Board for approval. <br />• Improved budgeting
                structure between events and increased budget by 15% throughout
                the semester.
                <br /> • Administered financial statements of bills and reports
                to be assessed by board members and school administration.
                <br /> • Maintained a system of policies to sustain a system of
                checks and balances between the club and Student Government.
              </p>
              <img src={flc} className="logo" style={{ width: "150px" }} />
            </div>
          </li>
          <li
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
            data-aos-offset="50"
          >
            <div className="content">
              <h3>Graduated from Baruch College</h3>
              <p>
                Bachelor of Business Administration (B.B.A), Finance from Baruch
                College, Zicklin School of Business.
              </p>
              <img src={baruch} className="logo" style={{ width: "250px" }} />
            </div>
            <div className="date">
              <h4>Sep 2016 - May 2018</h4>
            </div>
          </li>
          <li
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <div className="content">
              <h3>Account Manager</h3>
              <p>
                • Consulted with retail and corporate clients to establish a new
                book of business and make accommodations for all their travel
                needs; from luxury ground transportation to flight booking.
                <br /> • Established over $150,000 worth of new clients by
                implementing a new marketing plan; booked tickets for Broadway
                shows as well as wine/brewery tours to increase pricing
                structure while offering more products and services.
                <br /> • Interviewed and recruited over 30 new drivers to join
                the company and processed payroll payments on a bi-weekly basis
                for all employees. <br />• Managed over 300+ accounts nationwide
                as well as worldwide to provide clients with exceptional service
                and experience; networked with affiliate limo companies to
                outsource luxury ground transportation trips in order to fulfill
                demand.
              </p>
              <img src={ilww} className="logo" style={{ width: "250px" }} />
            </div>
            <div className="date">
              <h4>May 2018 - Dec 2018</h4>
            </div>
          </li>
          <li
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <div className="content">
              <h3>Personal Banker</h3>
              <p>
                • Develop and deepen the client relationship through
                understanding the client's lifestyle based on family,
                occupation, future plans, and goals to provide solutions to the
                client expressed and unexpressed needs.
                <br /> • Actively manage a book of business consisting of 200+
                clients to review banking relationships and provide logistical
                propositions for short, current, and future term financial
                goals.
                <br /> • Knowledgeable in all aspects of KYC and AML regulations
                for account opening; Streamlined opening consumer and business
                accounts by using Citi’s KYC and AML protocols make the client
                onboarding experience smooth and efficient.
                <br /> • Conduct quarterly audits on accounts and branch
                paperwork to make sure all items are in compliance with the bank
                policies. <br />• Established over $7,000,000+ in net new
                balances and $5,000,000+ in investment referrals to the wealth
                management division between consumer and business accounts,
                adding myself to the top 5 percent tile within the Manhattan
                Square area (President’s Club).
              </p>
              <img src={citi} className="logo" style={{ width: "120px" }} />
            </div>
            <div className="date">
              <h4>Dec 2018 - Present</h4>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Timeline;
