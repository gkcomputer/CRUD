const CrudCustomForm = ({ children, submit }) => {
  return <form onSubmit={submit}>{children}</form>;
};

export default CrudCustomForm;
