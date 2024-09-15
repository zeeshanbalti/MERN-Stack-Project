import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <footer className="bg-dark text-white d-flex flex-wrap justify-content-around align-items-center py-3 border-top">
  <div className="col-md-4 d-flex align-items-center">
    <Link
     to="/"
      className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
    >
      <svg className="bi" width={30} height={24}>
        <use xlinkHref="#bootstrap" />
      </svg>
    </Link>
    <span className="text-muted">© 2024 Foodies, Inc</span>
  </div>
  <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
    <li className="ms-3">
      <Link className="text-muted"to="#">
        <svg className="bi" width={24} height={24}>
          <use xlinkHref="#twitter" />
        </svg>
      </Link>
    </li>
    <li className="ms-3">
      <Link className="text-muted"to="#">
        <svg className="bi" width={24} height={24}>
          <use xlinkHref="#instagram" />
        </svg>
      </Link>
    </li>
    <li className="ms-3">
      <Link className="text-muted"to="#">
        <svg className="bi" width={24} height={24}>
          <use xlinkHref="#facebook" />
        </svg>
      </Link>
    </li>
  </ul>
</footer>

    </div>
  )
}
