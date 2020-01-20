import React from "react";

const Work = () => {
  return (
    <div className='container-fluid text-white pt-5 pb-5 bg-dark'>
      <div className='container'>
        <h1 class='display-5 pt-3 pb-3'>Work</h1>
      </div>
      <div className='container'>
        <p>
          <span class='badge badge-danger'>TODO </span>
          Line 23:15: The href attribute is required for an anchor to be
          keyboard accessible. Provide a valid, navigable address as the href
          value. If you cannot provide an href, but still need the element to
          resemble a link, use a button and change it with appropriate styles.
          Learn more:
          https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
          jsx-a11y/anchor-is-valid Line 26:15: The href attribute is required
          for an anchor to be keyboard accessible. Provide a valid, navigable
          address as the href value. If you cannot provide an href, but still
          need the element to resemble a link, use a button and change it with
          appropriate styles. Learn more:
          https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
          jsx-a11y/anchor-is-valid
        </p>
      </div>
      <div className='container pt-3 pb-3'>
        <div className='row'>
          <div className='col-lg-6 mb-1'>
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
          <div className='col-lg-6 mb-1'>
            <h5>Electronics & IoT</h5>
            <ul>
              <li>Home Climate Monitoring with Raspberry Pi and Python</li>
              <li>Surveillance Camera Project with Raspberry Pi</li>
              <li> Small Christmas Lights project with Arduino</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
