const CrudCustomForm = ({ children, onSubmit }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

export default CrudCustomForm;
