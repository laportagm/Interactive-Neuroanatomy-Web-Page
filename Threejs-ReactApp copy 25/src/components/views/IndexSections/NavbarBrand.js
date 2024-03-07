import React from "react"
import PropTypes from "prop-types"

// The NavbarBrand component accepts a 'tag' prop which can be any valid React element or component.
// It defaults to 'span' if no tag is provided. All additional props passed to NavbarBrand are
// spread onto the Tag element, allowing for flexible usage of the component.
function NavbarBrand({ tag: Tag = "span", ...otherProps }) {
  return <Tag {...otherProps} />
}

// Define propTypes for the NavbarBrand component to ensure proper usage and to provide
// validation for the component's props. The 'tag' prop is specified as a React element type,
// which can be a string like 'div' or 'span', or a React component. This helps in documenting
// the component and ensuring that it is used correctly with appropriate props.
NavbarBrand.propTypes = {
  tag: PropTypes.elementType, // 'tag' is an optional prop with a default value of 'span'
}

// Export the NavbarBrand component as the default export of this module, making it available
// for import in other parts of the application. This component can then be used as a part of
// a navbar or any other place where a flexible branding component is required.
export default NavbarBrand
