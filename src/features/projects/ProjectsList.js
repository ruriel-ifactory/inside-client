import React from 'react';
import { Row, Col } from 'antd';
import ProjectCard from '../../components/projectCard';

/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
const ProjectsList = () => {
  return (
    <Row type="flex" justify="start">
      {[1, 2, 3, 4, 5].map(i => {
        return (
          <Col
            key={i}
            md={{ span: 24 }}
            lg={{ span: 12 }}
            xl={{ span: 8 }}
            style={{ marginBottom: '20px' }}>
            <ProjectCard />
          </Col>
        );
      })
      }
    </Row>
  );
};

export default ProjectsList;
