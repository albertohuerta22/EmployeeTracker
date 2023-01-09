import React from 'react';
import { Button, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';

export function OverlayPopEmail({ email }) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {email}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="auto"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button variant="none">
        <i className="bi bi-envelope"></i>
      </Button>
    </OverlayTrigger>
  );
}

export function OverlayPopId({ id }) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {id}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="auto"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button variant="none">
        <i className="bi bi-person"></i>
      </Button>
    </OverlayTrigger>
  );
}

export function OverlayPopDOB({ dob }) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {dob}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="auto"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button variant="none">
        <i className="bi bi-calendar3"></i>
      </Button>
    </OverlayTrigger>
  );
}

export function OverlayPopSkillId({ skillID }) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {skillID}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="auto"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button variant="none">
        <i className="bi bi-wrench"></i>
      </Button>
    </OverlayTrigger>
  );
}

export function OverlayPopActive({ active }) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {active}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="auto"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      {active === 'true' ? (
        <i className="bi bi-check-lg"></i>
      ) : (
        <i className="bi bi-x-lg"></i>
      )}
    </OverlayTrigger>
  );
}
export function OverlayPopFirstName({ firstName }) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {firstName}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="auto"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <i className="bi bi-person-vcard"></i>
    </OverlayTrigger>
  );
}
export function OverlayPopLastName({ lastName }) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {lastName}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="auto"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <i className="bi bi-person-vcard-fill"></i>
    </OverlayTrigger>
  );
}

//editing adds skill, might be placeholder problem
