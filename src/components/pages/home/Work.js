import React from "react";
import Container from "../../Layout/Container/Container.component";
// style={{backgroundColor:'#89DBDF'}}

const Work = () => {
  return (
    <div className='container-fluid pt-5 pb-5'>
      <div className='container'>
        <div className='d-flex justify-content-center'>
        </div>
        <div className='alert alert-danger'>Currently in development!</div>
        <h1 className='display-5 pt-3 pb-3'>Work & Studies</h1>
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
                <span className='badge badge-danger'>TODO</span>{" "}
                <span className='badge badge-info'>
                  Add explicit description
                </span>{" "}
                Python
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
                <span className='badge badge-danger'>TODO</span>{" "}
                <span className='badge badge-info'>
                  Add explicit description
                </span>{" "}
                Cisco routers and switches configuration
              </li>
              <li>
                <span className='badge badge-danger'>TODO</span>{" "}
                <span className='badge badge-info'>
                  Add explicit description
                </span>{" "}
                Network configuration
              </li>
            </ul>
          </div>
          <div className='col-lg-3 mb-1'>
            <h5>Hardware</h5>
            <ul>
              <li>
                <span className='badge badge-danger'>TODO</span>{" "}
                <span className='badge badge-info'>
                  Add explicit description
                </span>{" "}
                PC building
              </li>
              <li>
                <span className='badge badge-danger'>TODO</span>{" "}
                <span className='badge badge-info'>
                  Add explicit description
                </span>{" "}
                Overclocking
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
