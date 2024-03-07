import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Col, Pagination, PaginationItem, PaginationLink } from "reactstrap"

function BootstrapPagination() {
  const navigate = useNavigate()
  const [activePage, setActivePage] = useState(1) // Initialize active page to 1

  const handlePageChange = (pageNumber) => {
    switch (pageNumber) {
      case 1:
        navigate("/neuroanatomy-resources")
        break
      case 2:
        navigate("/Neuroanatomy-Resources2")
        break
      // Add cases for other page numbers as needed
      case 3:
        navigate("/")
        break
      case 4:
        navigate("/")
        break
      // Add more cases for other page numbers here
      default:
        // Handle default case, possibly do nothing or handle the first page
        break
    }

    setActivePage(pageNumber) // Update the active page
  }

  return (
    <Col md={{ size: 6, offset: 3 }}>
      <h3 className="mb-5 text-center">Pagination</h3>
      <Pagination
        className="pagination pagination-primary d-flex justify-content-center"
        listClassName="pagination-primary"
      >
        <PaginationItem className={activePage === 1 ? "active" : ""}>
          <PaginationLink href="#pablo" onClick={() => handlePageChange(1)}>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className={activePage === 2 ? "active" : ""}>
          <PaginationLink href="#pablo" onClick={() => handlePageChange(2)}>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className={activePage === 3 ? "active" : ""}>
          <PaginationLink href="#pablo" onClick={() => handlePageChange(3)}>
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className={activePage === 4 ? "active" : ""}>
          <PaginationLink href="#pablo" onClick={() => handlePageChange(4)}>
            4
          </PaginationLink>
        </PaginationItem>
        {/* Add more PaginationItems for other page numbers */}
      </Pagination>
      {/* ... rest of the pagination component ... */}
    </Col>
  )
}

export default BootstrapPagination
