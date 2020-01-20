import React from "react";

const Work = () => {
  return (
    <div className='container-fluid text-white pt-5 pb-5 bg-dark'>
      <div className='container'>
        <h1 class='display-5 pt-3 pb-3'>Work & Studies</h1>
      </div>
      <div className='container'>
        <p>
          <span className='badge badge-danger'>TODO </span>{" "}
          <span className='badge badge-info'>Add description</span> Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nulla faucibus vitae
          risus at fringilla. Vivamus ut placerat elit. Fusce dignissim urna
          eget interdum ultricies. Nulla nec ultricies orci, id mollis erat.
          Aenean augue leo, congue nec ante at, posuere molestie neque. Donec in
          ipsum pretium, placerat ipsum et, malesuada purus. Sed cursus, ligula
          eu ullamcorper pharetra, mi felis vehicula ante, ut cursus mi purus id
          nulla. Sed sit amet lorem mauris. Integer a auctor ipsum. Praesent in
          leo feugiat, luctus neque nec, consectetur odio. Morbi vel vestibulum
          arcu.
        </p>
      </div>
      <div className='container pt-3 pb-3'>
        <div className='row'>
          <div className='col-lg-3 mb-1'>
            <h5>Software Development</h5>
            <ul>
              <li>
                <span class='badge badge-danger'>TODO</span> Python
              </li>
              <li>Android applications with Kotlin</li>
              <li>Full-stack Web applications with React and Node.js</li>
              <li>Small projects with pure JavaScript</li>
            </ul>
          </div>
          <div className='col-lg-3 mb-1'>
            <h5>Electronics & IoT</h5>
            <ul>
              <li>Home Climate Monitoring with Raspberry Pi and Python</li>
              <li>Surveillance Camera Project with Raspberry Pi</li>
              <li> Small Christmas Lights project with Arduino</li>
            </ul>
          </div>
          <div className='col-lg-3 mb-1'>
            <h5>Networking</h5>
            <ul>
              <li>
                <span class='badge badge-danger'>TODO</span> Cisco routers and
                switches configuration
              </li>
              <li>
                <span class='badge badge-danger'>TODO</span> Network
                configuration
              </li>
            </ul>
          </div>
          <div className='col-lg-3 mb-1'>
            <h5>Hardware</h5>
            <ul>
              <li>
                <span class='badge badge-danger'>TODO</span> PC building
              </li>
              <li>
                <span class='badge badge-danger'>TODO</span> Overclocking
              </li>
            </ul>
          </div>
          <div className='col-lg-3 mb-1'></div>
        </div>
      </div>
    </div>
  );
};

export default Work;
