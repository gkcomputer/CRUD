import CustomButtonStyles from "./CustomButtonStyles";

const CrudButton = ({ children, variant, styles, type }) => {
  return (
    <CustomButtonStyles variant={variant} sx={{ ...styles }} type={type}>
      {children}
    </CustomButtonStyles>
  );
};

export default CrudButton;
