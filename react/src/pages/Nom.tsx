import React from 'react'

function Nom() {
  return (
    <div className="d-flex justify-content-center">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
        className="rounded-circle mb-3"
        style={{ width: 150 }}
        alt="Avatar"
      />
      <h5 className="mb-2">
        <strong>Alaa</strong>
      </h5>
      <p className="text-muted">
        Web developer
        <div  className="badge bg-primary">PRO</div>
      </p>
    </div>
  );
}

export default Nom